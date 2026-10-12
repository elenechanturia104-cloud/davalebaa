"use strict";

const STORAGE = {
    accounts: "garigeba_accounts",
    session: "garigeba_session",
    profiles: "garigeba_profiles",
    likes: "garigeba_likes"
};

const demoProfiles = [
    {
        id: "demo-1",
        name: "ნიკა",
        age: 26,
        city: "თბილისი",
        education: "უმაღლესი",
        bio: "უყვარს მოგზაურობა, სპორტი და ახალი ადამიანების გაცნობა."
    },
    {
        id: "demo-2",
        name: "მარიამი",
        age: 24,
        city: "ბათუმი",
        education: "სტუდენტი",
        bio: "ინტერესდება ხელოვნებით, წიგნებითა და ბუნებაში სეირნობით."
    },
    {
        id: "demo-3",
        name: "გიორგი",
        age: 31,
        city: "ქუთაისი",
        education: "უმაღლესი",
        bio: "აფასებს გულწრფელობას, ოჯახურ ურთიერთობებსა და პასუხისმგებლობას."
    },
    {
        id: "demo-4",
        name: "ანა",
        age: 28,
        city: "ფოთი",
        education: "უმაღლესი",
        bio: "უყვარს მუსიკა, კითხვა და მშვიდი გარემო."
    },
    {
        id: "demo-5",
        name: "ლუკა",
        age: 22,
        city: "თბილისი",
        education: "სტუდენტი",
        bio: "აქტიური ცხოვრების წესი, სპორტი და ტექნოლოგიები."
    },
    {
        id: "demo-6",
        name: "სალომე",
        age: 35,
        city: "ბათუმი",
        education: "საშუალო",
        bio: "აფასებს ურთიერთპატივისცემას, სიმშვიდესა და საერთო ინტერესებს."
    }
];

function readStorage(key, fallback = []) {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return value ?? fallback;
    } catch {
        return fallback;
    }
}

function saveStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getAllProfiles() {
    return [...demoProfiles, ...readStorage(STORAGE.profiles)];
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function getInitials(name) {
    return escapeHTML((name || "?").trim().charAt(0).toUpperCase());
}

function profileCard(profile, showLike = true) {
    return `
        <article class="profile-card">
            <div class="profile-avatar" aria-hidden="true">
                ${getInitials(profile.name)}
            </div>

            <h3>${escapeHTML(profile.name)}, ${Number(profile.age)}</h3>

            <p class="profile-meta">
                ${escapeHTML(profile.city)} · ${escapeHTML(profile.education)}
            </p>

            <p class="profile-description">
                ${escapeHTML(profile.bio)}
            </p>

            <div class="card-actions">
                <a class="btn btn-outline"
                   href="profile.html?id=${encodeURIComponent(profile.id)}">
                   პროფილის ნახვა
                </a>

                ${showLike ? `
                    <button class="btn btn-primary like-button"
                        type="button"
                        data-profile-id="${escapeHTML(profile.id)}">
                        ♡ მოწონება
                    </button>
                ` : ""}
            </div>
        </article>
    `;
}

// მობილური მენიუ
document.querySelectorAll(".menu-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const header = button.closest(".site-header");
        const isOpen = header.classList.toggle("menu-open");
        button.setAttribute("aria-expanded", String(isOpen));
    });
});

// რეგისტრაციის დემო
const registerForm = document.querySelector("#registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", event => {
        event.preventDefault();

        const formData = new FormData(registerForm);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim().toLowerCase();
        const role = String(formData.get("role") || "");

        const message = document.querySelector("#registerMessage");

        if (!formData.get("adult") || !formData.get("consent") ||
            !formData.get("terms")) {
            message.textContent = "გთხოვ, დაადასტურე აუცილებელი პირობები.";
            return;
        }

        const accounts = readStorage(STORAGE.accounts);

        if (accounts.some(account => account.email === email)) {
            message.textContent = "ეს ელფოსტა უკვე გამოყენებულია ამ ბრაუზერის დემო ანგარიშში.";
            return;
        }

        // პაროლს განზრახ არ ვინახავთ.
        accounts.push({ name, email, role });
        saveStorage(STORAGE.accounts, accounts);

        message.textContent =
            "დემო მონაცემები შენახულია. რეალური ანგარიშის შექმნისთვის საჭიროა უსაფრთხო ავტორიზაციის სერვისი.";
    });
}

// შესვლის დემო: რეალურ პაროლს ეს ვერსია ვერ ამოწმებს
const loginForm = document.querySelector("#loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", event => {
        event.preventDefault();

        const email = document.querySelector("#loginEmail")
            .value.trim().toLowerCase();

        const message = document.querySelector("#loginMessage");
        const accounts = readStorage(STORAGE.accounts);
        const account = accounts.find(item => item.email === email);

        if (!account) {
            message.textContent =
                "ამ ელფოსტით დემო ანგარიში ვერ მოიძებნა. ჯერ გაიარე რეგისტრაცია.";
            return;
        }

        // მხოლოდ დემო სესია; პაროლი არ მოწმდება.
        saveStorage(STORAGE.session, {
            name: account.name,
            email: account.email,
            role: account.role
        });

        message.textContent =
            "დემო სესია გააქტიურდა. ეს არ არის რეალური, დაცული ავტორიზაცია.";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    });
}

// პროფილის შექმნა
const createProfileForm = document.querySelector("#createProfileForm");

if (createProfileForm) {
    createProfileForm.addEventListener("submit", event => {
        event.preventDefault();

        const age = Number(document.querySelector("#personAge").value);
        const consent = document.querySelector("#profileConsent").checked;
        const message = document.querySelector("#profileFormMessage");

        if (age < 18 || age > 100) {
            message.textContent = "პროფილის მფლობელი უნდა იყოს მინიმუმ 18 წლის.";
            return;
        }

        if (!consent) {
            message.textContent = "პროფილის მფლობელის თანხმობა აუცილებელია.";
            return;
        }

        const profile = {
            id: "user-" + Date.now(),
            name: document.querySelector("#personName").value.trim(),
            age,
            city: document.querySelector("#personCity").value,
            education: document.querySelector("#personEducation").value,
            bio: document.querySelector("#personBio").value.trim()
        };

        const profiles = readStorage(STORAGE.profiles);
        profiles.push(profile);
        saveStorage(STORAGE.profiles, profiles);

        message.textContent = "პროფილი შენახულია ამ ბრაუზერის დემო მონაცემებში.";
        createProfileForm.reset();
    });
}

// პროფილების ძიება
function renderProfiles(profiles, container) {
    if (!container) return;

    if (!profiles.length) {
        container.innerHTML = `
            <div class="empty-state">
                ამ კრიტერიუმებით პროფილები ვერ მოიძებნა.
            </div>
        `;
        return;
    }

    container.innerHTML = profiles.map(profile => profileCard(profile)).join("");
}

const profileResults = document.querySelector("#profileResults");

if (profileResults) {
    const searchForm = document.querySelector("#searchForm");

    function filterProfiles(event) {
        if (event) event.preventDefault();

        const city = document.querySelector("#cityFilter").value;
        const ageRange = document.querySelector("#ageFilter").value;
        const education = document.querySelector("#educationFilter").value;

        let profiles = getAllProfiles();

        if (city) {
            profiles = profiles.filter(profile => profile.city === city);
        }

        if (education) {
            profiles = profiles.filter(profile => profile.education === education);
        }

        if (ageRange) {
            profiles = profiles.filter(profile => {
                if (ageRange === "18-24") return profile.age >= 18 && profile.age <= 24;
                if (ageRange === "25-30") return profile.age >= 25 && profile.age <= 30;
                if (ageRange === "31-40") return profile.age >= 31 && profile.age <= 40;
                if (ageRange === "41+") return profile.age >= 41;
                return true;
            });
        }

        renderProfiles(profiles, profileResults);
    }

    searchForm.addEventListener("submit", filterProfiles);
    filterProfiles();
}

// მოწონების ღილაკები
document.addEventListener("click", event => {
    const button = event.target.closest(".like-button");
    if (!button) return;

    const profileId = button.dataset.profileId;
    const likes = readStorage(STORAGE.likes);

    if (likes.includes(profileId)) {
        button.textContent = "✓ მოწონებულია";
        return;
    }

    likes.push(profileId);
    saveStorage(STORAGE.likes, likes);

    button.textContent = "✓ მოწონებულია";
});

// მოწონებების გვერდი
const likesList = document.querySelector("#likesList");

if (likesList) {
    const likedIds = readStorage(STORAGE.likes);
    const likedProfiles = getAllProfiles()
        .filter(profile => likedIds.includes(profile.id));

    renderProfiles(likedProfiles, likesList);
}

// ურთიერთინტერესის გვერდი
const matchesList = document.querySelector("#matchesList");

if (matchesList) {
    matchesList.innerHTML = `
        <div class="empty-state">
            ურთიერთინტერესის პროფილები ჯერ არ არის.<br>
            ამ დემო ვერსიაში სხვა მომხმარებლების პასუხები არ არსებობს.
        </div>
    `;
}

// კონკრეტული პროფილის გვერდი
const profileDetails = document.querySelector("#profileDetails");

if (profileDetails) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const profile = getAllProfiles().find(item => item.id === id);

    if (!profile) {
        profileDetails.innerHTML = `
            <div class="empty-state">
                პროფილი ვერ მოიძებნა.
                <p style="margin-top: 15px">
                    <a class="btn btn-primary" href="search.html">ძიებაზე დაბრუნება</a>
                </p>
            </div>
        `;
    } else {
        profileDetails.innerHTML = `
            <div class="profile-avatar">${getInitials(profile.name)}</div>
            <h2 style="margin-top: 18px">
                ${escapeHTML(profile.name)}, ${Number(profile.age)}
            </h2>
            <p class="profile-meta">
                ${escapeHTML(profile.city)} · ${escapeHTML(profile.education)}
            </p>
            <p style="margin-top: 20px">
                ${escapeHTML(profile.bio)}
            </p>
            <div class="card-actions">
                <button class="btn btn-primary like-button"
                    data-profile-id="${escapeHTML(profile.id)}"
                    type="button">♡ მოწონება</button>
                <a class="btn btn-outline" href="search.html">უკან დაბრუნება</a>
            </div>
        `;
    }
}

// ანგარიშის გვერდი
const dashboardInfo = document.querySelector("#dashboardInfo");

if (dashboardInfo) {
    const session = readStorage(STORAGE.session, null);

    if (session && session.email) {
        dashboardInfo.textContent =
            `დემო მომხმარებელი: ${session.name} · ${session.email}`;
    } else {
        dashboardInfo.textContent =
            "აქტიური დემო სესია არ არის. შეგიძლია გამოიყენო საიტის სხვა გვერდები.";
    }
}

// დემო რეჟიმიდან გამოსვლა
const logoutButton = document.querySelector("#logoutButton");

if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem(STORAGE.session);
        window.location.href = "index.html";
    });
}