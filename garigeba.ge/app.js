"use strict";

const STORAGE = {
    accounts: "garigeba_accounts",
    session: "garigeba_session",
    profiles: "garigeba_profiles",
    likes: "garigeba_likes",
    matchPreferences: "garigeba_match_preferences",
    rooms: "garigeba_introduction_rooms",
    favorites: "garigeba_favorites",
    comparison: "garigeba_comparison",
    deletionRequests: "garigeba_deletion_requests",
    notifications: "garigeba_notifications",
    notificationSettings: "garigeba_notification_settings",
    recommendationSnapshot: "garigeba_recommendation_snapshot"
};

const demoProfiles = [
    {
        id: "demo-1",
        demo: true,
        name: "ნიკა",
        age: 26,
        city: "თბილისი",
        region: "თბილისი",
        education: "უმაღლესი",
        profession: "ინჟინერი",
        interests: ["მოგზაურობა", "სპორტი", "კინო"],
        languages: ["ქართული", "ინგლისური"],
        lifestyle: ["აქტიური"],
        familyValues: ["გულწრფელობა", "ურთიერთპატივისცემა"],
        goals: ["ოჯახი", "განვითარება"],
        marriageExpectations: ["პარტნიორობა", "ურთიერთპატივისცემა"],
        bio: "უყვარს მოგზაურობა, სპორტი და ახალი ადამიანების გაცნობა."
    },
    {
        id: "demo-2",
        demo: true,
        name: "მარიამი",
        age: 24,
        city: "ბათუმი",
        region: "აჭარა",
        education: "სტუდენტი",
        profession: "სტუდენტი",
        interests: ["ხელოვნება", "წიგნები", "ბუნებაში სეირნობა"],
        languages: ["ქართული", "ინგლისური"],
        lifestyle: ["მშვიდი", "აქტიური"],
        familyValues: ["მხარდაჭერა", "ურთიერთპატივისცემა"],
        goals: ["ოჯახი", "განათლება"],
        marriageExpectations: ["პარტნიორობა", "გულწრფელობა"],
        bio: "ინტერესდება ხელოვნებით, წიგნებითა და ბუნებაში სეირნობით."
    },
    {
        id: "demo-3",
        demo: true,
        name: "გიორგი",
        age: 31,
        city: "ქუთაისი",
        region: "იმერეთი",
        education: "უმაღლესი",
        profession: "მასწავლებელი",
        interests: ["კითხვა", "მოგზაურობა", "ისტორია"],
        languages: ["ქართული", "რუსული"],
        lifestyle: ["მშვიდი"],
        familyValues: ["პასუხისმგებლობა", "ურთიერთპატივისცემა"],
        goals: ["ოჯახი", "სტაბილურობა"],
        marriageExpectations: ["პატივისცემა", "პარტნიორობა"],
        bio: "აფასებს გულწრფელობას, ოჯახურ ურთიერთობებსა და პასუხისმგებლობას."
    },
    {
        id: "demo-4",
        demo: true,
        name: "ანა",
        age: 28,
        city: "ფოთი",
        region: "სამეგრელო",
        education: "უმაღლესი",
        profession: "დიზაინერი",
        interests: ["მუსიკა", "კითხვა", "კინო"],
        languages: ["ქართული", "ინგლისური"],
        lifestyle: ["მშვიდი"],
        familyValues: ["გულწრფელობა", "მხარდაჭერა"],
        goals: ["ოჯახი", "განვითარება"],
        marriageExpectations: ["თანასწორობა", "პარტნიორობა"],
        bio: "უყვარს მუსიკა, კითხვა და მშვიდი გარემო."
    },
    {
        id: "demo-5",
        demo: true,
        name: "ლუკა",
        age: 22,
        city: "თბილისი",
        region: "თბილისი",
        education: "სტუდენტი",
        profession: "სტუდენტი",
        interests: ["სპორტი", "ტექნოლოგიები", "მოგზაურობა"],
        languages: ["ქართული", "ინგლისური"],
        lifestyle: ["აქტიური"],
        familyValues: ["პატივისცემა", "მხარდაჭერა"],
        goals: ["განვითარება", "ოჯახი"],
        marriageExpectations: ["პარტნიორობა", "გულწრფელობა"],
        bio: "აქტიური ცხოვრების წესი, სპორტი და ტექნოლოგიები."
    },
    {
        id: "demo-6",
        demo: true,
        name: "სალომე",
        age: 35,
        city: "ბათუმი",
        region: "აჭარა",
        education: "საშუალო",
        profession: "მეწარმე",
        interests: ["მუსიკა", "ბუნებაში სეირნობა", "კულინარია"],
        languages: ["ქართული", "რუსული"],
        lifestyle: ["მშვიდი"],
        familyValues: ["სიმშვიდე", "ურთიერთპატივისცემა"],
        goals: ["ოჯახი", "სტაბილურობა"],
        marriageExpectations: ["პატივისცემა", "თანასწორობა"],
        bio: "აფასებს ურთიერთპატივისცემას, სიმშვიდესა და საერთო ინტერესებს."
    }
];

const guideArticleData = [
    {
        category: "family",
        categoryLabel: "ოჯახური გაცნობა",
        title: "როგორ მოვემზადოთ პირველი ოჯახური გაცნობისთვის",
        terms: "მომზადება პირველი შეხვედრა ოჯახი",
        paragraphs: [
            "წინასწარ შეუთანხმდით ზრდასრულ მონაწილეებს, ვინ დაესწრება, რა ფორმატში გაიმართება შეხვედრა და რა თემებზე საუბარი ურჩევნიათ. ოჯახის წევრის მხარდაჭერა სასარგებლოა მაშინ, როცა თავად ადამიანი თავს კომფორტულად გრძნობს.",
            "აირჩიეთ მშვიდი, ნეიტრალური ადგილი და მოკლე დროის მონაკვეთი. პირველ შეხვედრას არ სჭირდება საბოლოო გადაწყვეტილება: მიზანი ერთმანეთის გაცნობაა. ნებისმიერ მონაწილეს შეუძლია პაუზის აღება ან შეხვედრის დასრულება."
        ]
    },
    {
        category: "communication",
        categoryLabel: "საუბარი და მოლოდინები",
        title: "საკითხები, რომლებზეც ქორწინებამდე ღირს საუბარი",
        terms: "ქორწინება კითხვები შვილები ფინანსები პასუხისმგებლობა",
        paragraphs: [
            "ზრდასრულმა პარტნიორებმა შეიძლება განიხილონ გრძელვადიანი მიზნები, საცხოვრებელი გარემო, კარიერა და განათლება, ყოველდღიური პასუხისმგებლობები, ფინანსური ჩვევები და ბავშვებთან დაკავშირებული სურვილები. ყველა თემა ერთ საუბარში არ უნდა გადაწყდეს.",
            "კითხვები დასვით ორმხრივად და ინტერესით. პასუხები შეიძლება დროთა განმავლობაში შეიცვალოს; მიზანი საერთო სურათის გაგებაა და არა გამოცდის ჩაბარება."
        ]
    },
    {
        category: "communication",
        categoryLabel: "საუბარი და მოლოდინები",
        title: "როგორ ვისაუბროთ მოლოდინებსა და ღირებულებებზე",
        terms: "ღირებულებები მოლოდინები საუბარი მოსმენა",
        paragraphs: [
            "საუბარი დაიწყეთ საკუთარი გამოცდილებიდან: „ჩემთვის მნიშვნელოვანია...“ ან „მინდა უკეთ გავიგო, რას ფიქრობ...“. კონკრეტული მაგალითები ზოგად შეფასებებს უფრო გასაგებს ხდის.",
            "მოსმენა არ ნიშნავს თანხმობას. შეგიძლიათ დააზუსტოთ, რა არის თქვენთვის აუცილებელი, რაზე ხართ მოქნილი და რა კითხვას დაუბრუნდებით მოგვიანებით."
        ]
    },
    {
        category: "communication",
        categoryLabel: "საუბარი და მოლოდინები",
        title: "როგორ მივუდგეთ ცხოვრების წესის განსხვავებებს",
        terms: "ცხოვრების წესი განსხვავებები ყოველდღიურობა კომპრომისი",
        paragraphs: [
            "განსხვავებული ტემპი, დასვენების ჩვევები ან სოციალური საჭიროებები თავისთავად პრობლემას არ ნიშნავს. ჯერ გაიგეთ, რას ემსახურება თითოეული ჩვევა და რამდენად მნიშვნელოვანია ის კონკრეტული ადამიანისთვის.",
            "შემდეგ განიხილეთ პრაქტიკული შეთანხმებები: რომელი აქტივობები შეიძლება იყოს საერთო, როდის სჭირდება თითოეულს პირადი დრო და რა საკითხზე კომპრომისი არ იქნება მისაღები."
        ]
    },
    {
        category: "boundaries",
        categoryLabel: "საზღვრები და თანხმობა",
        title: "ინდივიდუალური საზღვრების პატივისცემა",
        terms: "საზღვრები პირადი სივრცე უარი თანხმობა",
        paragraphs: [
            "ჰკითხეთ ადამიანს, რისი გაზიარება სურს და რა ფორმით ურჩევნია კომუნიკაცია. პირადი ტელეფონის, მისამართის, ფოტოს ან ოჯახის დეტალების მოთხოვნა არ არის საჭირო გაცნობის დასაწყებად.",
            "„არა“, „ჯერ არა“ და პასუხის არქონა არ უნდა გადაიქცეს ზეწოლის მიზეზად. ადამიანს შეუძლია შეცვალოს აზრი, შეწყვიტოს საუბარი ან უარი თქვას ოჯახის ჩართულობაზე."
        ]
    },
    {
        category: "boundaries",
        categoryLabel: "საზღვრები და თანხმობა",
        title: "ქორწინებაში თავისუფალი თანხმობის მნიშვნელობა",
        terms: "თავისუფალი თანხმობა ქორწინება არჩევანი ზრდასრული",
        paragraphs: [
            "ქორწინების გადაწყვეტილებას თავად სრულწლოვანი ადამიანები იღებენ, თავისუფლად და ზეწოლის გარეშე. ოჯახის მხარდაჭერა შეიძლება მნიშვნელოვანი იყოს, თუმცა ის ვერ ჩაანაცვლებს პირად სურვილს.",
            "პროფილის გამოქვეყნება, ურთიერთინტერესი, მიმოწერა ან ოჯახების შეხვედრა ქორწინებაზე თანხმობას არ ნიშნავს. თანხმობა კონკრეტულია და მისი უკან წაღება ნებისმიერ დროს შეიძლება."
        ]
    },
    {
        category: "safety",
        categoryLabel: "უსაფრთხოება და კონფიდენციალურობა",
        title: "საეჭვო პროფილებისა და თაღლითობის ნიშნები",
        terms: "საეჭვო პროფილი თაღლითობა ფული ზეწოლა",
        paragraphs: [
            "ფრთხილად იყავით, თუ ადამიანი სწრაფად ითხოვს ფულს, საბანკო მონაცემებს, კოდებს ან დოკუმენტებს; თავს არიდებს თანმიმდევრულ საუბარს; ან ცდილობს შეხვედრისა და ურთიერთობის დაჩქარებას ზეწოლით.",
            "არ გაგზავნოთ თანხა ან პაროლები. შეწყვიტეთ საუბარი, თუ თავს არაკომფორტულად გრძნობთ, და გამოიყენეთ პლატფორმის შეტყობინების ან დაბლოკვის ფუნქცია, როცა ის ხელმისაწვდომია."
        ]
    },
    {
        category: "safety",
        categoryLabel: "უსაფრთხოება და კონფიდენციალურობა",
        title: "ონლაინ კონფიდენციალურობა და უსაფრთხო კომუნიკაცია",
        terms: "ონლაინ უსაფრთხოება კონფიდენციალურობა პირადი მონაცემები",
        paragraphs: [
            "პროფილში გააზიარეთ მხოლოდ ის, რაც საჯაროდ გამოჩენისთვის მისაღებია. მოერიდეთ პირად ნომერს, ზუსტ მისამართს, პირად ელფოსტას, ტელეფონს, სამუშაო გრაფიკსა და დოკუმენტების გამოსახულებებს.",
            "ონლაინ საუბრისას არ იჩქაროთ პლატფორმის გარეთ პირადი საკონტაქტო ინფორმაციის გაზიარება. თუ გაზიარებას გადაწყვეტთ, შეზღუდეთ პირადი დეტალები და ეჭვის გაჩენისას საუბარი შეწყვიტეთ."
        ]
    }
];

demoProfiles.forEach(profile => {
    profile.country = "საქართველო";
    profile.georgianAbroad = false;
    profile.longDistance = profile.id === "demo-4";
});

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

function getCurrentOwner() {
    const session = readStorage(STORAGE.session, null);
    return session?.email || "guest";
}

function getMatchPreferencesStorageKey() {
    return `${STORAGE.matchPreferences}:${getCurrentOwner()}`;
}

function getAllProfiles() {
    return [...demoProfiles, ...readStorage(STORAGE.profiles)]
        .filter(profile => {
            if (Number(profile.age) < 18 || profile.consent === false) return false;
            if (profile.demo || (profile.ownerEmail || "guest") === getCurrentOwner()) return true;
            return !getPrivacySettings(profile).hiddenFromSearch && canViewProfile(profile);
        });
}

function readLikesByOwner() {
    const savedLikes = readStorage(STORAGE.likes, []);
    return Array.isArray(savedLikes) ? { guest: savedLikes } : savedLikes;
}

function readLikesForOwner(owner = getCurrentOwner()) {
    return readLikesByOwner()[owner] || [];
}

function saveLikesForOwner(owner, likes) {
    const likesByOwner = readLikesByOwner();
    likesByOwner[owner] = likes;
    saveStorage(STORAGE.likes, likesByOwner);
}

function defaultPrivacySettings() {
    return {
        hiddenFromSearch: false,
        excludeRecommendations: false,
        approvedDetailsOnly: false,
        approvedViewers: [],
        visibleFields: {
            age: true,
            city: true,
            region: true,
            country: true,
            georgianAbroad: true,
            longDistance: true,
            education: true,
            profession: true,
            bio: true,
            interests: true,
            languages: true,
            lifestyle: true,
            goals: true,
            familyValues: true,
            marriageExpectations: true,
            partnerCriteria: true,
            values: true
        }
    };
}

function getPrivacySettings(profile) {
    const defaults = defaultPrivacySettings();
    const saved = profile.privacy || {};
    return {
        ...defaults,
        ...saved,
        visibleFields: { ...defaults.visibleFields, ...saved.visibleFields }
    };
}

function canViewProfile(profile) {
    if (profile.demo || (profile.ownerEmail || "guest") === getCurrentOwner()) return true;
    if (getCurrentOwner() === "guest") return false;

    const privacy = getPrivacySettings(profile);
    return !privacy.approvedDetailsOnly || privacy.approvedViewers.includes(getCurrentOwner());
}

function readFavoritesForOwner(owner = getCurrentOwner()) {
    const favorites = readStorage(STORAGE.favorites, {});
    return favorites[owner] || [];
}

function saveFavoritesForOwner(owner, favorites) {
    const allFavorites = readStorage(STORAGE.favorites, {});
    allFavorites[owner] = favorites;
    saveStorage(STORAGE.favorites, allFavorites);
}

function readComparisonForOwner(owner = getCurrentOwner()) {
    const comparisons = readStorage(STORAGE.comparison, {});
    return comparisons[owner] || [];
}

function saveComparisonForOwner(owner, profileIds) {
    const comparisons = readStorage(STORAGE.comparison, {});
    comparisons[owner] = profileIds.slice(0, 3);
    saveStorage(STORAGE.comparison, comparisons);
}

const notificationTypeLabels = {
    interest: "ახალი ინტერესი",
    mutual: "ორმხრივი ინტერესი",
    message: "ახალი შეტყობინება",
    recommendations: "რეკომენდაციები განახლდა",
    savedSearch: "შენახული ძიება განახლდა",
    verification: "დადასტურების სტატუსი განახლდა",
    meeting: "შეხვედრის შეხსენება",
    security: "უსაფრთხოების შეტყობინება"
};

function defaultNotificationSettings() {
    return {
        cadence: "daily",
        types: Object.fromEntries(Object.keys(notificationTypeLabels)
            .filter(type => type !== "security")
            .map(type => [type, true])),
        lastDigestAt: null
    };
}

function readNotificationSettings(owner = getCurrentOwner()) {
    const settingsByOwner = readStorage(STORAGE.notificationSettings, {});
    const saved = settingsByOwner[owner] || {};
    const defaults = defaultNotificationSettings();
    return {
        ...defaults,
        ...saved,
        types: { ...defaults.types, ...saved.types }
    };
}

function saveNotificationSettings(owner, settings) {
    const settingsByOwner = readStorage(STORAGE.notificationSettings, {});
    settingsByOwner[owner] = settings;
    saveStorage(STORAGE.notificationSettings, settingsByOwner);
}

function readNotifications(owner = getCurrentOwner()) {
    const notificationsByOwner = readStorage(STORAGE.notifications, {});
    return notificationsByOwner[owner] || [];
}

function queueDashboardNotification(owner, type, reference = "") {
    const isSecurity = type === "security";
    if (!notificationTypeLabels[type]) return;

    const settings = readNotificationSettings(owner);
    if (!isSecurity && (settings.cadence === "off" || settings.types[type] === false)) return;

    const notificationsByOwner = readStorage(STORAGE.notifications, {});
    const notifications = notificationsByOwner[owner] || [];
    const now = new Date();
    const duplicate = notifications.some(item =>
        item.type === type && item.reference === reference &&
        now - new Date(item.createdAt) < 24 * 60 * 60 * 1000
    );
    if (duplicate) return;

    notifications.push({
        id: `notification-${now.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
        type,
        security: isSecurity,
        reference,
        createdAt: now.toISOString(),
        title: notificationTypeLabels[type],
        message: isSecurity
            ? "ანგარიშის უსაფრთხოებასთან დაკავშირებული მოვლენა დაფიქსირდა."
            : "ანგარიშში ახალი განახლებაა. დეტალები პირად სივრცეში ნახე."
    });
    notificationsByOwner[owner] = notifications;
    saveStorage(STORAGE.notifications, notificationsByOwner);
}

function getDashboardNotificationGroups(owner = getCurrentOwner()) {
    const settings = readNotificationSettings(owner);
    const notifications = readNotifications(owner).sort((first, second) =>
        new Date(second.createdAt) - new Date(first.createdAt)
    );
    const security = notifications.filter(item => item.security).slice(0, 8);
    const optional = notifications.filter(item => !item.security);

    if (settings.cadence === "off") return { security, optional: [] };
    if (settings.cadence === "instant") return { security, optional: optional.slice(0, 8) };

    const interval = settings.cadence === "weekly" ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
    const lastDigestAt = settings.lastDigestAt ? new Date(settings.lastDigestAt) : null;
    const pending = optional.filter(item => !lastDigestAt || new Date(item.createdAt) > lastDigestAt);
    const digestDue = !lastDigestAt || Date.now() - lastDigestAt.getTime() >= interval;

    if (pending.length && digestDue) {
        settings.lastDigestAt = new Date().toISOString();
        saveNotificationSettings(owner, settings);
        return {
            security,
            optional: [{
                id: `digest-${settings.lastDigestAt}`,
                title: settings.cadence === "weekly" ? "კვირეული შეჯამება" : "დღიური შეჯამება",
                message: `${pending.length} ახალი განახლება მზად არის პირად სივრცეში სანახავად.`,
                createdAt: settings.lastDigestAt,
                digest: true
            }]
        };
    }

    return { security, optional: [] };
}

function recordRecommendationChanges(profiles, owner = getCurrentOwner()) {
    const snapshots = readStorage(STORAGE.recommendationSnapshot, {});
    const currentIds = profiles.map(profile => profile.id);
    const previousIds = snapshots[owner];

    if (Array.isArray(previousIds)) {
        const newIds = currentIds.filter(id => !previousIds.includes(id));
        if (newIds.length) {
            queueDashboardNotification(owner, "recommendations", [...newIds].sort().join("|"));
        }
    }

    snapshots[owner] = currentIds;
    saveStorage(STORAGE.recommendationSnapshot, snapshots);
}

function getMutualInterestsForCurrentOwner() {
    const owner = getCurrentOwner();
    const ownProfiles = readStorage(STORAGE.profiles).filter(profile =>
        !profile.demo && (profile.ownerEmail || "guest") === owner &&
        Number(profile.age) >= 18 && profile.consent !== false
    );
    if (!ownProfiles.length) return [];

    const profiles = [...demoProfiles, ...readStorage(STORAGE.profiles)]
        .filter(profile => Number(profile.age) >= 18 && profile.consent !== false);
    const profileById = new Map(profiles.map(profile => [profile.id, profile]));
    const likesByOwner = readLikesByOwner();
    const mutualInterests = [];

    ownProfiles.forEach(ownProfile => {
        readLikesForOwner(owner).forEach(likedId => {
            const otherProfile = profileById.get(likedId);
            if (!otherProfile || otherProfile.demo || !otherProfile.ownerEmail || otherProfile.ownerEmail === owner) return;

            const otherLikes = likesByOwner[otherProfile.ownerEmail] || [];
            if (!otherLikes.includes(ownProfile.id)) return;

            const profileIds = [ownProfile.id, otherProfile.id].sort();
            const id = profileIds.join("::");
            if (!mutualInterests.some(item => item.id === id)) {
                mutualInterests.push({
                    id,
                    currentProfile: ownProfile,
                    otherProfile,
                    participants: [owner, otherProfile.ownerEmail]
                });
            }
        });
    });

    return mutualInterests;
}

const matchCriteria = [
    { key: "age", label: "ასაკი", type: "age" },
    { key: "location", label: "მდებარეობა", type: "location" },
    { key: "education", label: "განათლება", type: "exact" },
    { key: "profession", label: "პროფესია", type: "exact" },
    { key: "interests", label: "ინტერესები", type: "list" },
    { key: "languages", label: "ენები", type: "list" },
    { key: "lifestyle", label: "ცხოვრების წესი", type: "list" },
    { key: "familyValues", label: "ოჯახური ღირებულებები", type: "list" },
    { key: "goals", label: "გრძელვადიანი მიზნები", type: "list" },
    { key: "marriageExpectations", label: "ქორწინების მოლოდინები", type: "list" }
];

const questionnaireCriteria = [
    { key: "familyValues", label: "ოჯახური ღირებულებები" },
    { key: "careerEducation", label: "კარიერა და განათლება" },
    { key: "lifestyle", label: "ცხოვრების წესი" },
    { key: "culturalTraditions", label: "კულტურული ტრადიციები" },
    { key: "beliefs", label: "რელიგიური ან ფილოსოფიური შეხედულებები" },
    { key: "livingEnvironment", label: "საცხოვრებელი გარემო" },
    { key: "independence", label: "პირადი დამოუკიდებლობა" },
    { key: "familyInvolvement", label: "ოჯახის ჩართულობა" },
    { key: "relationshipGoals", label: "ურთიერთობის მიზნები" },
    { key: "partnerQualities", label: "პარტნიორის თვისებები" }
];

function parseTokens(value) {
    const values = Array.isArray(value) ? value : String(value || "").split(",");
    const uniqueValues = new Map();
    values.map(item => String(item).trim()).filter(Boolean).forEach(item => {
        const key = normalizeToken(item);
        if (!uniqueValues.has(key)) uniqueValues.set(key, item);
    });
    return [...uniqueValues.values()];
}

function normalizeToken(value) {
    return String(value || "").trim().toLocaleLowerCase("ka");
}

function defaultMatchPreferences() {
    return {
        ageMin: "",
        ageMax: "",
        cities: [],
        regions: [],
        education: [],
        professions: [],
        interests: [],
        languages: [],
        lifestyle: [],
        familyValues: [],
        goals: [],
        marriageExpectations: [],
        questionnaireProfileId: "",
        weights: Object.fromEntries(matchCriteria.map(criterion => [criterion.key, 2]))
    };
}

function readMatchPreferences() {
    const saved = readStorage(getMatchPreferencesStorageKey(), null);
    return saved && typeof saved === "object"
        ? { ...defaultMatchPreferences(), ...saved, weights: { ...defaultMatchPreferences().weights, ...saved.weights } }
        : defaultMatchPreferences();
}

function evaluateMatch(profile, preferences) {
    const weightedScores = [];
    const matches = [];
    const differences = [];
    const sharedPriorities = [];
    const visibleFields = getPrivacySettings(profile).visibleFields;
    const profileInterests = parseTokens(profile.interests);
    const preferredInterests = parseTokens(preferences.interests);
    const sharedInterests = preferredInterests.filter(preference =>
        profileInterests.some(interest => normalizeToken(interest) === normalizeToken(preference))
    );

    for (const criterion of matchCriteria) {
        const weight = Number(preferences.weights[criterion.key]) || 0;
        if (!weight) continue;

        let score = null;
        let matched = [];
        let missed = [];

        if (criterion.type === "age") {
            if (!visibleFields.age) continue;
            const hasMinimum = preferences.ageMin !== "" && preferences.ageMin != null;
            const hasMaximum = preferences.ageMax !== "" && preferences.ageMax != null;
            if (!hasMinimum && !hasMaximum) continue;

            const minimum = hasMinimum ? Number(preferences.ageMin) : 18;
            const maximum = hasMaximum ? Number(preferences.ageMax) : 100;
            const inRange = Number(profile.age) >= minimum && Number(profile.age) <= maximum;
            score = inRange ? 1 : 0;
            matched = inRange ? [`${minimum}–${maximum}`] : [];
            missed = inRange ? [] : [`${minimum}–${maximum}`];
        } else if (criterion.type === "location") {
            if (!visibleFields.city && !visibleFields.region) continue;
            const preferredPlaces = [...parseTokens(preferences.cities), ...parseTokens(preferences.regions)];
            if (!preferredPlaces.length) continue;
            const profilePlaces = [
                visibleFields.city ? profile.city : "",
                visibleFields.region ? profile.region : ""
            ].filter(Boolean).map(normalizeToken);
            matched = preferredPlaces.filter(place => profilePlaces.includes(normalizeToken(place)));
            missed = preferredPlaces.filter(place => !profilePlaces.includes(normalizeToken(place)));
            score = matched.length / preferredPlaces.length;
        } else if (criterion.type === "exact") {
            if (!visibleFields[criterion.key]) continue;
            const preferredValues = parseTokens(preferences[criterion.key === "education" ? "education" : "professions"]);
            if (!preferredValues.length) continue;
            const profileValue = normalizeToken(profile[criterion.key]);
            matched = preferredValues.filter(value => normalizeToken(value) === profileValue);
            missed = matched.length ? [] : preferredValues;
            score = matched.length ? 1 : 0;
        } else {
            if (!visibleFields[criterion.key]) continue;
            const preferredValues = parseTokens(preferences[criterion.key]);
            if (!preferredValues.length) continue;
            const profileValues = parseTokens(profile[criterion.key]).map(normalizeToken);
            matched = preferredValues.filter(value => profileValues.includes(normalizeToken(value)));
            missed = preferredValues.filter(value => !profileValues.includes(normalizeToken(value)));
            score = matched.length / preferredValues.length;
        }

        weightedScores.push({ score, weight });
        if (matched.length) matches.push(`${criterion.label}: ${matched.join(", ")}`);
        if (missed.length) differences.push(`${criterion.label}: ${missed.join(", ")}`);
    }

    const preferredAnswers = preferences.questionnaire?.answers || {};
    const preferredWeights = preferences.questionnaire?.weights || {};
    const candidateQuestionnaire = profile.valuesQuestionnaire || {};
    const candidateAnswers = candidateQuestionnaire.answers || {};
    const candidateVisibility = candidateQuestionnaire.visibility || {};

    for (const criterion of questionnaireCriteria) {
        const preferredValues = parseTokens(preferredAnswers[criterion.key]);
        const publicAnswer = parseTokens(candidateAnswers[criterion.key]);
        const weight = Number(preferredWeights[criterion.key]) || 0;
        const isFamilyInformation = ["familyValues", "familyInvolvement"].includes(criterion.key);
        if (!visibleFields.values || (isFamilyInformation && !visibleFields.familyValues) ||
            !preferredValues.length || !publicAnswer.length || !candidateVisibility[criterion.key] || !weight) continue;

        const publicTokens = publicAnswer.map(normalizeToken);
        const shared = preferredValues.filter(value => publicTokens.includes(normalizeToken(value)));
        const score = shared.length / preferredValues.length;
        weightedScores.push({ score, weight });

        if (shared.length) {
            matches.push(`${criterion.label}: ${shared.join(", ")}`);
            sharedPriorities.push(...shared);
        }
        if (shared.length < preferredValues.length) {
            differences.push(`${criterion.label}: განსხვავებული პრიორიტეტი`);
        }
    }

    const totalWeight = weightedScores.reduce((total, item) => total + item.weight, 0);
    const weightedScore = weightedScores.reduce((total, item) => total + item.score * item.weight, 0);

    return {
        score: totalWeight ? Math.round(weightedScore / totalWeight * 100) : null,
        matches,
        differences,
        sharedInterests,
        sharedPriorities: parseTokens(sharedPriorities)
    };
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

function profileCard(profile, showLike = true, match = null) {
    const visibleFields = getPrivacySettings(profile).visibleFields;
    const meta = [...new Set([
        visibleFields.city && profile.city,
        visibleFields.region && profile.region,
        visibleFields.country && profile.country,
        visibleFields.georgianAbroad && profile.georgianAbroad && "საქართველოს ფარგლებს გარეთ",
        visibleFields.longDistance && profile.longDistance && "შორ მანძილზე გაცნობისთვის მზადაა",
        visibleFields.education && profile.education
    ].filter(Boolean))];
    const favorites = readFavoritesForOwner();
    const isFavorite = favorites.some(favorite => favorite.profileId === profile.id);
    const isCompared = readComparisonForOwner().includes(profile.id);

    return `
        <article class="profile-card">
            <div class="profile-avatar" aria-hidden="true">
                ${getInitials(profile.name)}
            </div>

            <h3>${escapeHTML(profile.name)}${visibleFields.age ? `, ${Number(profile.age)}` : ""}</h3>

            ${meta.length ? `<p class="profile-meta">${meta.map(escapeHTML).join(" · ")}</p>` : ""}

            ${visibleFields.bio !== false && profile.bio ? `<p class="profile-description">${escapeHTML(profile.bio)}</p>` : ""}

            ${match ? `
                <section class="compatibility-panel" aria-label="Smart Match თანხვედრის დეტალები">
                    <div class="compatibility-heading">
                        <span>თანხვედრა</span>
                        <strong>${match.score == null ? "—" : `${match.score}%`}</strong>
                    </div>
                    ${match.score == null ? `
                        <p class="compatibility-empty">ქულის სანახავად მიუთითე მინიმუმ ერთი პრეფერენცია.</p>
                    ` : `
                        <div class="compatibility-meter" role="progressbar" aria-label="თანხვედრის ქულა" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${match.score}">
                            <span style="width: ${match.score}%"></span>
                        </div>
                    `}
                    <div class="compatibility-detail">
                        <h4>საერთო ინტერესები</h4>
                        <p>${match.sharedInterests.length ? match.sharedInterests.map(escapeHTML).join(", ") : "მითითებულ ინტერესებში დამთხვევა არ არის."}</p>
                    </div>
                    ${match.sharedPriorities.length ? `
                        <div class="compatibility-detail">
                            <h4>საერთო პრიორიტეტები</h4>
                            <p>${match.sharedPriorities.map(escapeHTML).join(", ")}</p>
                        </div>
                    ` : ""}
                    <div class="compatibility-detail">
                        <h4>რატომ არის რეკომენდებული</h4>
                        <p>${match.matches.length ? match.matches.map(escapeHTML).join(" · ") : "აქტიური კრიტერიუმების დამთხვევა არ გამოვლენილა."}</p>
                    </div>
                    ${match.differences.length ? `
                        <details class="compatibility-differences">
                            <summary>მნიშვნელოვანი განსხვავებები (${match.differences.length})</summary>
                            <p>${match.differences.map(escapeHTML).join(" · ")}</p>
                        </details>
                    ` : ""}
                </section>
            ` : ""}

            <div class="card-actions">
                <a class="btn btn-outline"
                   href="profile.html?id=${encodeURIComponent(profile.id)}">
                   პროფილის ნახვა
                </a>

                ${showLike ? `
                    <button class="btn btn-primary like-button"
                        type="button"
                        data-profile-id="${escapeHTML(profile.id)}">
                        ♡ გამოხატე ინტერესი
                    </button>
                ` : ""}
                <button class="btn btn-outline favorite-button" type="button"
                    data-favorite-profile-id="${escapeHTML(profile.id)}"
                    aria-label="${isFavorite ? "შენახულებიდან წაშლა" : "შენახულებში დამატება"}"
                    title="${isFavorite ? "შენახულებიდან წაშლა" : "შენახულებში დამატება"}">
                    ${isFavorite ? "★ შენახულია" : "☆ შენახვა"}
                </button>
                <button class="btn btn-outline compare-button" type="button"
                    data-compare-profile-id="${escapeHTML(profile.id)}"
                    aria-pressed="${isCompared}">
                    ${isCompared ? "შედარებაშია" : "შედარება"}
                </button>
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
        queueDashboardNotification(account.email, "security", `login-${Date.now()}`);

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
            region: document.querySelector("#personRegion").value.trim(),
            country: document.querySelector("#personCountry").value.trim(),
            georgianAbroad: document.querySelector("#personGeorgianAbroad").checked,
            longDistance: document.querySelector("#personLongDistance").checked,
            education: document.querySelector("#personEducation").value,
            profession: document.querySelector("#personProfession").value.trim(),
            interests: parseTokens(document.querySelector("#personInterests").value),
            languages: parseTokens(document.querySelector("#personLanguages").value),
            lifestyle: parseTokens(document.querySelector("#personLifestyle").value),
            familyValues: parseTokens(document.querySelector("#personFamilyValues").value),
            goals: parseTokens(document.querySelector("#personGoals").value),
            marriageExpectations: parseTokens(document.querySelector("#personMarriageExpectations").value),
            partnerCriteria: parseTokens(document.querySelector("#personPartnerCriteria").value),
            consent: true,
            ownerEmail: getCurrentOwner(),
            createdAt: new Date().toISOString(),
            bio: document.querySelector("#personBio").value.trim()
        };

        const profiles = readStorage(STORAGE.profiles);
        profiles.push(profile);
        saveStorage(STORAGE.profiles, profiles);

        message.textContent = "პროფილი შენახულია ამ ბრაუზერის დემო მონაცემებში.";
        createProfileForm.reset();
    });
}

const valuesQuestionnaireForm = document.querySelector("#valuesQuestionnaireForm");

if (valuesQuestionnaireForm) {
    const profileSelect = document.querySelector("#valuesProfileSelect");
    const profileMessage = document.querySelector("#valuesProfileMessage");
    const formMessage = document.querySelector("#valuesFormMessage");
    const ownedProfiles = readStorage(STORAGE.profiles).filter(profile =>
        (profile.ownerEmail || "guest") === getCurrentOwner() &&
        Number(profile.age) >= 18 && profile.consent !== false
    );

    ownedProfiles.forEach(profile => {
        const option = document.createElement("option");
        option.value = profile.id;
        option.textContent = `${profile.name}, ${profile.age}`;
        profileSelect.append(option);
    });

    const questionnaireControls = [
        ...valuesQuestionnaireForm.querySelectorAll("[data-answer], [data-visible], [data-value-weight]")
    ];
    const saveButton = valuesQuestionnaireForm.querySelector("button[type='submit']");
    saveButton.disabled = ownedProfiles.length === 0;
    questionnaireControls.forEach(control => {
        control.disabled = ownedProfiles.length === 0;
    });

    if (!ownedProfiles.length) {
        profileMessage.textContent = "კითხვარის შესავსებად ჯერ შექმენი სრულწლოვანი პროფილი და დაადასტურე მისი მფლობელის თანხმობა.";
    }

    function loadQuestionnaire() {
        const profile = ownedProfiles.find(item => item.id === profileSelect.value);
        const questionnaire = profile?.valuesQuestionnaire || {};
        const answers = questionnaire.answers || {};
        const visibility = questionnaire.visibility || {};
        const weights = questionnaire.weights || {};

        valuesQuestionnaireForm.querySelectorAll("[data-answer]").forEach(input => {
            input.value = answers[input.dataset.answer] || "";
        });
        valuesQuestionnaireForm.querySelectorAll("[data-visible]").forEach(input => {
            input.checked = visibility[input.dataset.visible] === true;
        });
        valuesQuestionnaireForm.querySelectorAll("[data-value-weight]").forEach(select => {
            select.value = String(weights[select.dataset.valueWeight] ?? 2);
        });
        formMessage.textContent = "";
    }

    profileSelect.addEventListener("change", loadQuestionnaire);
    loadQuestionnaire();

    valuesQuestionnaireForm.addEventListener("submit", event => {
        event.preventDefault();
        const profile = ownedProfiles.find(item => item.id === profileSelect.value);
        if (!profile) {
            formMessage.textContent = "აირჩიე პროფილი კითხვარის შესანახად.";
            return;
        }

        const answers = {};
        const visibility = {};
        const weights = {};
        valuesQuestionnaireForm.querySelectorAll("[data-answer]").forEach(input => {
            answers[input.dataset.answer] = input.value.trim();
        });
        valuesQuestionnaireForm.querySelectorAll("[data-visible]").forEach(input => {
            visibility[input.dataset.visible] = input.checked && Boolean(answers[input.dataset.visible]);
        });
        valuesQuestionnaireForm.querySelectorAll("[data-value-weight]").forEach(select => {
            weights[select.dataset.valueWeight] = Number(select.value);
        });

        profile.valuesQuestionnaire = { answers, visibility, weights };
        profile.updatedAt = new Date().toISOString();
        saveStorage(STORAGE.profiles, readStorage(STORAGE.profiles).map(item =>
            item.id === profile.id ? profile : item
        ));
        formMessage.textContent = "პასუხები შენახულია. მონიშნული პასუხები საჯაროდ გამოჩნდება პროფილზე.";
    });
}

const privacySettingsForm = document.querySelector("#privacySettingsForm");

if (privacySettingsForm) {
    const profileSelect = document.querySelector("#privacyProfileSelect");
    const profileMessage = document.querySelector("#privacyProfileMessage");
    const settingsMessage = document.querySelector("#privacySettingsMessage");
    const requestMessage = document.querySelector("#dataRequestMessage");
    const ownedProfiles = readStorage(STORAGE.profiles).filter(profile =>
        (profile.ownerEmail || "guest") === getCurrentOwner() &&
        Number(profile.age) >= 18 && profile.consent !== false
    );

    ownedProfiles.forEach(profile => {
        const option = document.createElement("option");
        option.value = profile.id;
        option.textContent = `${profile.name}, ${profile.age}`;
        profileSelect.append(option);
    });

    const settingControls = [
        ...privacySettingsForm.querySelectorAll("input, textarea, button[type='submit']")
    ];
    settingControls.forEach(control => {
        control.disabled = ownedProfiles.length === 0;
    });

    if (!ownedProfiles.length) {
        profileMessage.textContent = "პარამეტრების სამართავად ჯერ შექმენი სრულწლოვანი პროფილი და დაადასტურე მისი მფლობელის თანხმობა.";
    }

    function loadPrivacySettings() {
        const profile = ownedProfiles.find(item => item.id === profileSelect.value);
        const privacy = profile ? getPrivacySettings(profile) : defaultPrivacySettings();
        document.querySelector("#privacyHiddenFromSearch").checked = privacy.hiddenFromSearch;
        document.querySelector("#privacyExcludeRecommendations").checked = privacy.excludeRecommendations;
        document.querySelector("#privacyApprovedOnly").checked = privacy.approvedDetailsOnly;
        document.querySelector("#privacyApprovedViewers").value = privacy.approvedViewers.join("\n");
        document.querySelectorAll("[data-visible-field]").forEach(input => {
            input.checked = privacy.visibleFields[input.dataset.visibleField] !== false;
        });

        const statuses = [
            ["ელფოსტა", false],
            ["ტელეფონი", false],
            ["იდენტობა", false],
            ["მოდერაციის მიერ განხილვა", false]
        ];
        document.querySelector("#verificationStatus").innerHTML = statuses.map(([label, verified]) => `
            <div><dt>${label}</dt><dd>${verified ? "დადასტურებულია" : "დაუდასტურებელი"}</dd></div>
        `).join("");
        settingsMessage.textContent = "";
    }

    profileSelect.addEventListener("change", loadPrivacySettings);
    loadPrivacySettings();

    privacySettingsForm.addEventListener("submit", event => {
        event.preventDefault();
        const profile = ownedProfiles.find(item => item.id === profileSelect.value);
        if (!profile) return;

        const visibleFields = {};
        document.querySelectorAll("[data-visible-field]").forEach(input => {
            visibleFields[input.dataset.visibleField] = input.checked;
        });
        profile.privacy = {
            ...getPrivacySettings(profile),
            hiddenFromSearch: document.querySelector("#privacyHiddenFromSearch").checked,
            excludeRecommendations: document.querySelector("#privacyExcludeRecommendations").checked,
            approvedDetailsOnly: document.querySelector("#privacyApprovedOnly").checked,
            approvedViewers: parseTokens(document.querySelector("#privacyApprovedViewers").value.replace(/\n/g, ","))
                .map(email => email.toLowerCase()),
            visibleFields
        };
        profile.updatedAt = new Date().toISOString();
        saveStorage(STORAGE.profiles, readStorage(STORAGE.profiles).map(item =>
            item.id === profile.id ? profile : item
        ));
        settingsMessage.textContent = "პარამეტრები ამ ბრაუზერში შენახულია; სერვერულ დაცვას არ უზრუნველყოფს.";
    });

    document.querySelector("#downloadMyData").addEventListener("click", () => {
        const owner = getCurrentOwner();
        const profiles = readStorage(STORAGE.profiles).filter(profile =>
            (profile.ownerEmail || "guest") === owner
        );
        const roomIds = new Set(getMutualInterestsForCurrentOwner().map(match => match.id));
        const rooms = readStorage(STORAGE.rooms, {});
        const exportData = {
            exportedAt: new Date().toISOString(),
            profiles,
            favorites: readFavoritesForOwner(owner),
            interests: readLikesForOwner(owner),
            comparison: readComparisonForOwner(owner),
            matchPreferences: readStorage(getMatchPreferencesStorageKey(), {}),
            introductionRooms: Object.fromEntries(Object.entries(rooms).filter(([id]) => roomIds.has(id)))
        };
        const file = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
        const download = document.createElement("a");
        const downloadUrl = URL.createObjectURL(file);
        download.href = downloadUrl;
        download.download = "garigeba-my-data.json";
        download.click();
        setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
        requestMessage.textContent = "მონაცემების JSON ასლი ჩამოტვირთულია.";
    });

    document.querySelector("#requestAccountDeletion").addEventListener("click", () => {
        const owner = getCurrentOwner();
        const requests = readStorage(STORAGE.deletionRequests, {});
        requests[owner] = { requestedAt: new Date().toISOString(), status: "local-demo-not-submitted" };
        saveStorage(STORAGE.deletionRequests, requests);
        requestMessage.textContent = "მოთხოვნა მხოლოდ ამ ბრაუზერში ჩაიწერა; სერვერზე არ გაგზავნილა და ანგარიშს არ შლის.";
    });
}

// პროფილების ძიება
function renderProfiles(profiles, container, matches = null) {
    if (!container) return;

    if (!profiles.length) {
        container.innerHTML = `
            <div class="empty-state">
                    ამ კრიტერიუმებით პროფილები ვერ მოიძებნა. 
            </div>
        `;
        return;
    }

    container.innerHTML = profiles.map(profile =>
        profileCard(profile, true, matches ? matches.get(profile.id) : null)
    ).join("");
}

function renderFavoriteProfiles() {
    const container = document.querySelector("#favoritesList");
    if (!container) return;

    const favorites = readFavoritesForOwner();
    const profilesById = new Map(getAllProfiles().map(profile => [profile.id, profile]));
    const unavailableCount = favorites.filter(favorite => !profilesById.has(favorite.profileId)).length;
    const unavailableMessage = document.querySelector("#favoriteUnavailable");
    if (unavailableMessage) {
        unavailableMessage.replaceChildren();
        if (unavailableCount) {
            unavailableMessage.append(`${unavailableCount} შენახული პროფილი ამჟამად მიუწვდომელია. `);
            const clearButton = document.createElement("button");
            clearButton.id = "clearUnavailableFavorites";
            clearButton.className = "text-button";
            clearButton.type = "button";
            clearButton.textContent = "მიუწვდომელი ჩანაწერების წაშლა";
            unavailableMessage.append(clearButton);
        }
    }

    const query = (document.querySelector("#favoriteSearch")?.value || "").trim().toLocaleLowerCase("ka");
    const sort = document.querySelector("#favoriteSort")?.value || "saved";
    const savedProfiles = favorites.map(favorite => ({
        favorite,
        profile: profilesById.get(favorite.profileId)
    })).filter(item => item.profile);

    const filteredProfiles = savedProfiles.filter(({ profile }) =>
        !query || `${profile.name} ${getPrivacySettings(profile).visibleFields.city ? profile.city || "" : ""}`
            .toLocaleLowerCase("ka").includes(query)
    );
    filteredProfiles.sort((first, second) => {
        const firstDate = sort === "activity"
            ? first.profile.updatedAt || first.profile.createdAt || first.favorite.savedAt
            : first.favorite.savedAt;
        const secondDate = sort === "activity"
            ? second.profile.updatedAt || second.profile.createdAt || second.favorite.savedAt
            : second.favorite.savedAt;
        return new Date(secondDate) - new Date(firstDate);
    });

    renderProfiles(filteredProfiles.map(item => item.profile), container);
}

function getComparisonFields(profile) {
    const visible = getPrivacySettings(profile).visibleFields;
    const fields = [
        ["ასაკი", visible.age ? String(profile.age) : ""],
        ["ქალაქი", visible.city ? profile.city : ""],
        ["რეგიონი", visible.region ? profile.region : ""],
        ["ქვეყანა", visible.country ? profile.country : ""],
        ["შორ მანძილზე გაცნობა", visible.longDistance && profile.longDistance ? "მზად არის" : ""],
        ["განათლება", visible.education ? profile.education : ""],
        ["პროფესია", visible.profession ? profile.profession : ""],
        ["ენები", visible.languages ? parseTokens(profile.languages).join(", ") : ""],
        ["ინტერესები", visible.interests ? parseTokens(profile.interests).join(", ") : ""],
        ["ცხოვრების წესი", visible.lifestyle ? parseTokens(profile.lifestyle).join(", ") : ""],
        ["გრძელვადიანი მიზნები", visible.goals ? parseTokens(profile.goals).join(", ") : ""],
        ["ოჯახური ღირებულებები", visible.familyValues ? parseTokens(profile.familyValues).join(", ") : ""],
        ["ქორწინების მოლოდინები", visible.marriageExpectations ? parseTokens(profile.marriageExpectations).join(", ") : ""],
        ["სასურველი თვისებები პარტნიორში", visible.partnerCriteria ? parseTokens(profile.partnerCriteria).join(", ") : ""]
    ];
    const questionnaire = profile.valuesQuestionnaire || {};
    if (visible.values) {
        questionnaireCriteria.forEach(criterion => {
            const isFamilyInformation = ["familyValues", "familyInvolvement"].includes(criterion.key);
            if ((!isFamilyInformation || visible.familyValues) &&
                questionnaire.visibility?.[criterion.key] && questionnaire.answers?.[criterion.key]) {
                fields.push([criterion.label, questionnaire.answers[criterion.key]]);
            }
        });
    }
    return fields;
}

function renderProfileComparison() {
    const container = document.querySelector("#comparisonList");
    if (!container) return;

    const selectedIds = readComparisonForOwner();
    const profilesById = new Map(getAllProfiles().map(profile => [profile.id, profile]));
    const profiles = selectedIds.map(id => profilesById.get(id)).filter(Boolean);
    const unavailableCount = selectedIds.length - profiles.length;

    if (!profiles.length) {
        container.innerHTML = `
            <div class="empty-state">შედარებისთვის აირჩიე პროფილი ძიების გვერდიდან.</div>
            ${unavailableCount ? `<p class="form-note">${unavailableCount} არჩეული პროფილი ამჟამად მიუწვდომელია.</p>` : ""}
        `;
        return;
    }

    const profileFields = profiles.map(getComparisonFields);
    const labels = [...new Set(profileFields.flatMap(fields => fields.map(([label]) => label)))];
    const rows = labels.map(label => {
        const values = profileFields.map(fields => fields.find(([fieldLabel]) => fieldLabel === label)?.[1] || "—");
        const disclosedValues = values.filter(value => value !== "—").map(normalizeToken);
        const differs = new Set(disclosedValues).size > 1;
        return `<tr><th scope="row">${escapeHTML(label)}</th>${values.map(value => `
            <td class="${differs ? "comparison-difference" : ""}">${escapeHTML(value)}</td>
        `).join("")}</tr>`;
    }).join("");

    container.innerHTML = `
        ${unavailableCount ? `<p class="form-note">${unavailableCount} არჩეული პროფილი ამჟამად მიუწვდომელია.</p>` : ""}
        <div class="comparison-scroll">
            <table class="comparison-table">
                <thead><tr><th scope="col">გაზიარებული ინფორმაცია</th>${profiles.map(profile => `
                    <th scope="col">
                        ${escapeHTML(profile.name)}
                        <button class="comparison-remove" type="button" data-remove-comparison="${escapeHTML(profile.id)}" aria-label="${escapeHTML(profile.name)}-ის შედარებიდან წაშლა" title="შედარებიდან წაშლა">×</button>
                    </th>
                `).join("")}</tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
        <p class="form-note">მონიშნული უჯრედები განსხვავებულ გაზიარებულ პასუხებს აჩვენებს; ისინი შეფასება ან რეიტინგი არ არის.</p>
    `;
}

const profileResults = document.querySelector("#profileResults");

if (profileResults) {
    const searchForm = document.querySelector("#searchForm");
    const matchPreferencesForm = document.querySelector("#matchPreferencesForm");
    const matchPreferencesMessage = document.querySelector("#matchPreferencesMessage");
    const matchFromProfile = document.querySelector("#matchFromProfile");
    const searchModeButtons = [...document.querySelectorAll("[data-search-mode]")];
    const searchPanels = [...document.querySelectorAll("[data-search-panel]")];
    let activeSearchMode = "advanced";

    function readSelectedRegions(id) {
        return [...document.querySelectorAll(`#${id} input[type="checkbox"]:checked`)]
            .map(input => input.value);
    }

    function updateRegionPicker(details) {
        const selected = readSelectedRegions(details.id);
        const summary = details.querySelector("summary");
        summary.textContent = selected.length === 0
            ? "აირჩიე რეგიონები"
            : selected.length === 1
                ? selected[0]
                : `${selected.length} რეგიონი არჩეულია`;
    }

    document.querySelectorAll(".region-multiselect").forEach(details => {
        details.addEventListener("change", () => updateRegionPicker(details));
        updateRegionPicker(details);
    });
    const ownedProfiles = readStorage(STORAGE.profiles).filter(profile =>
        (profile.ownerEmail || "guest") === getCurrentOwner() &&
        Number(profile.age) >= 18 && profile.consent !== false
    );
    const preferenceFields = {
        cities: "#prefCities",
        regions: "#prefRegions",
        education: "#prefEducation",
        professions: "#prefProfessions",
        interests: "#prefInterests",
        languages: "#prefLanguages",
        lifestyle: "#prefLifestyle",
        familyValues: "#prefFamilyValues",
        goals: "#prefGoals",
        marriageExpectations: "#prefMarriageExpectations"
    };
    let matchPreferences = readMatchPreferences();

    ownedProfiles.forEach(profile => {
        const option = document.createElement("option");
        option.value = profile.id;
        option.textContent = `${profile.name}, ${profile.age}`;
        matchFromProfile.append(option);
    });
    matchFromProfile.value = ownedProfiles.some(profile => profile.id === matchPreferences.questionnaireProfileId)
        ? matchPreferences.questionnaireProfileId
        : "";

    function applyQuestionnairePreference() {
        matchPreferences.questionnaire = ownedProfiles.find(profile =>
            profile.id === matchFromProfile.value
        )?.valuesQuestionnaire || null;
    }

    function saveSearchPreferences() {
        const { questionnaire, ...storedPreferences } = matchPreferences;
        saveStorage(getMatchPreferencesStorageKey(), storedPreferences);
    }

    applyQuestionnairePreference();
    matchFromProfile.addEventListener("change", () => {
        matchPreferences.questionnaireProfileId = matchFromProfile.value;
        applyQuestionnairePreference();
        saveSearchPreferences();
        filterProfiles();
    });

    document.querySelector("#prefAgeMin").value = matchPreferences.ageMin ?? "";
    document.querySelector("#prefAgeMax").value = matchPreferences.ageMax ?? "";
    Object.entries(preferenceFields).forEach(([key, selector]) => {
        document.querySelector(selector).value = parseTokens(matchPreferences[key]).join(", ");
    });
    document.querySelectorAll("[data-weight]").forEach(select => {
        select.value = String(matchPreferences.weights[select.dataset.weight] ?? 2);
    });

    function filterProfiles(event) {
        if (event) event.preventDefault();

        const owner = getCurrentOwner();
        let profiles = getAllProfiles().filter(profile =>
            profile.demo || (profile.ownerEmail || "guest") !== owner
        );

        if (activeSearchMode === "recommended") {
            profiles = profiles.filter(profile =>
                profile.demo || !getPrivacySettings(profile).excludeRecommendations
            );
        }

        if (activeSearchMode === "advanced") {
            const city = document.querySelector("#cityFilter").value;
            const education = document.querySelector("#educationFilter").value;
            const ageMin = document.querySelector("#ageMinFilter").value;
            const ageMax = document.querySelector("#ageMaxFilter").value;
            const profession = parseTokens(document.querySelector("#professionFilter").value).map(normalizeToken);
            const interests = parseTokens(document.querySelector("#interestsFilter").value).map(normalizeToken);
            const languages = parseTokens(document.querySelector("#languagesFilter").value).map(normalizeToken);
            const lifestyle = parseTokens(document.querySelector("#lifestyleFilter").value).map(normalizeToken);
            const partnerCriteria = parseTokens(document.querySelector("#partnerCriteriaFilter").value).map(normalizeToken);
            const regions = readSelectedRegions("advancedRegionFilter");

            if (ageMin && ageMax && Number(ageMin) > Number(ageMax)) {
                profileResults.innerHTML = `<div class="empty-state">მინიმალური ასაკი მაქსიმალურ ასაკზე მეტი ვერ იქნება.</div>`;
                return;
            }
            profiles = profiles.filter(profile => {
                const visible = getPrivacySettings(profile).visibleFields;
                if (city && (!visible.city || profile.city !== city)) return false;
                if (education && (!visible.education || profile.education !== education)) return false;
                if ((ageMin || ageMax) && (!visible.age || Number(profile.age) < Number(ageMin || 18) || Number(profile.age) > Number(ageMax || 100))) return false;
                if (regions.length && (!visible.region || !regions.includes(profile.region))) return false;
                if (profession.length && (!visible.profession || !profession.includes(normalizeToken(profile.profession)))) return false;
                if (interests.length && (!visible.interests || !interests.some(value => parseTokens(profile.interests).map(normalizeToken).includes(value)))) return false;
                if (languages.length && (!visible.languages || !languages.some(value => parseTokens(profile.languages).map(normalizeToken).includes(value)))) return false;
                if (lifestyle.length && (!visible.lifestyle || !lifestyle.some(value => parseTokens(profile.lifestyle).map(normalizeToken).includes(value)))) return false;
                if (partnerCriteria.length && (!visible.partnerCriteria || !partnerCriteria.some(value => parseTokens(profile.partnerCriteria).map(normalizeToken).includes(value)))) return false;
                return true;
            });
        }

        if (activeSearchMode === "regional") {
            const cityQuery = normalizeToken(document.querySelector("#regionalCityFilter").value);
            const geographicArea = document.querySelector("#geographicAreaFilter").value;
            const regions = readSelectedRegions("regionalRegionFilter");
            const longDistanceOnly = document.querySelector("#longDistanceOnly").checked;

            profiles = profiles.filter(profile => {
                const visible = getPrivacySettings(profile).visibleFields;
                const country = visible.country ? normalizeToken(profile.country) : "";
                const countryAbroad = Boolean(country && country !== normalizeToken("საქართველო"));
                const livesAbroad = visible.georgianAbroad && profile.georgianAbroad === true || countryAbroad;
                const livesInGeorgia = visible.georgianAbroad && profile.georgianAbroad === false ||
                    visible.country && country === normalizeToken("საქართველო");
                if (cityQuery && (!visible.city || !normalizeToken(profile.city).includes(cityQuery))) return false;
                if (regions.length && (!visible.region || !regions.includes(profile.region))) return false;
                if (geographicArea === "georgia" && !livesInGeorgia) return false;
                if (geographicArea === "abroad" && !livesAbroad) return false;
                if (longDistanceOnly && (!visible.longDistance || profile.longDistance !== true)) return false;
                return true;
            });
        }

        if (activeSearchMode === "recommended") {
            const rankedProfiles = profiles.map((profile, index) => ({
                profile,
                index,
                match: evaluateMatch(profile, matchPreferences)
            }));
            rankedProfiles.sort((first, second) => {
                if (first.match.score == null && second.match.score != null) return 1;
                if (first.match.score != null && second.match.score == null) return -1;
                return (second.match.score ?? 0) - (first.match.score ?? 0) || first.index - second.index;
            });
            const matches = new Map(rankedProfiles.map(item => [item.profile.id, item.match]));
            if (rankedProfiles.some(item => item.match.score != null)) {
                recordRecommendationChanges(rankedProfiles.map(item => item.profile));
            }
            renderProfiles(rankedProfiles.map(item => item.profile), profileResults, matches);
            return;
        }

        renderProfiles(profiles, profileResults);
    }

    function setSearchMode(mode) {
        activeSearchMode = mode;
        searchModeButtons.forEach(button => {
            button.setAttribute("aria-selected", String(button.dataset.searchMode === mode));
        });
        searchPanels.forEach(panel => {
            panel.hidden = panel.dataset.searchPanel !== mode;
        });
        filterProfiles();
    }

    searchModeButtons.forEach((button, index) => {
        button.addEventListener("click", () => setSearchMode(button.dataset.searchMode));
        button.addEventListener("keydown", event => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
            event.preventDefault();
            const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? searchModeButtons.length - 1
                : (index + (event.key === "ArrowRight" ? 1 : -1) + searchModeButtons.length) % searchModeButtons.length;
            searchModeButtons[nextIndex].focus();
            setSearchMode(searchModeButtons[nextIndex].dataset.searchMode);
        });
    });

    searchForm.addEventListener("submit", filterProfiles);
    document.querySelector("#regionalSearchForm").addEventListener("submit", filterProfiles);

    matchPreferencesForm.addEventListener("submit", event => {
        event.preventDefault();

        const ageMin = document.querySelector("#prefAgeMin").value;
        const ageMax = document.querySelector("#prefAgeMax").value;
        if (ageMin && ageMax && Number(ageMin) > Number(ageMax)) {
            matchPreferencesMessage.textContent = "მინიმალური ასაკი მაქსიმალურ ასაკზე მეტი ვერ იქნება.";
            return;
        }

        const preferences = {
            ageMin,
            ageMax,
            questionnaireProfileId: matchFromProfile.value,
            weights: {}
        };
        Object.entries(preferenceFields).forEach(([key, selector]) => {
            preferences[key] = parseTokens(document.querySelector(selector).value);
        });
        document.querySelectorAll("[data-weight]").forEach(select => {
            preferences.weights[select.dataset.weight] = Number(select.value);
        });

        matchPreferences = preferences;
    applyQuestionnairePreference();
    saveSearchPreferences();
        matchPreferencesMessage.textContent = "პრეფერენციები შენახულია ამ ბრაუზერში.";
        filterProfiles();
    });

    setSearchMode("advanced");
}

// მოწონების ღილაკები
document.addEventListener("click", event => {
    const clearUnavailableButton = event.target.closest("#clearUnavailableFavorites");
    if (clearUnavailableButton) {
        const availableIds = new Set(getAllProfiles().map(profile => profile.id));
        const availableFavorites = readFavoritesForOwner()
            .filter(favorite => availableIds.has(favorite.profileId));
        saveFavoritesForOwner(getCurrentOwner(), availableFavorites);
        renderFavoriteProfiles();
        return;
    }

    const favoriteButton = event.target.closest(".favorite-button");
    if (favoriteButton) {
        const profileId = favoriteButton.dataset.favoriteProfileId;
        const favorites = readFavoritesForOwner();
        const existingIndex = favorites.findIndex(favorite => favorite.profileId === profileId);

        if (existingIndex >= 0) {
            favorites.splice(existingIndex, 1);
            favoriteButton.textContent = "☆ შენახვა";
            favoriteButton.setAttribute("aria-label", "შენახულებში დამატება");
            favoriteButton.title = "შენახულებში დამატება";
        } else {
            favorites.push({ profileId, savedAt: new Date().toISOString() });
            favoriteButton.textContent = "★ შენახულია";
            favoriteButton.setAttribute("aria-label", "შენახულებიდან წაშლა");
            favoriteButton.title = "შენახულებიდან წაშლა";
        }

        saveFavoritesForOwner(getCurrentOwner(), favorites);
        renderFavoriteProfiles();
        return;
    }

    const compareButton = event.target.closest(".compare-button");
    if (compareButton) {
        const profileId = compareButton.dataset.compareProfileId;
        const comparison = readComparisonForOwner();
        const selectedIndex = comparison.indexOf(profileId);

        if (selectedIndex >= 0) {
            comparison.splice(selectedIndex, 1);
        } else if (comparison.length >= 3) {
            compareButton.title = "შედარებისთვის მაქსიმუმ სამი პროფილი აირჩიე.";
            return;
        } else {
            comparison.push(profileId);
        }

        saveComparisonForOwner(getCurrentOwner(), comparison);
        const isCompared = comparison.includes(profileId);
        compareButton.textContent = isCompared ? "შედარებაშია" : "შედარება";
        compareButton.setAttribute("aria-pressed", String(isCompared));
        renderProfileComparison();
        showProfileActionMessage(`შედარებაში ${comparison.length} პროფილია. <a href="compare.html">შედარების გახსნა</a>`);
        return;
    }

    const button = event.target.closest(".like-button");
    if (!button) return;

    const profileId = button.dataset.profileId;
    const targetProfile = getAllProfiles().find(profile => profile.id === profileId);
    const actingOwner = getCurrentOwner();
    const likes = readLikesForOwner();

    if (likes.includes(profileId)) {
        button.textContent = "✓ ინტერესი შენახულია";
        return;
    }

    likes.push(profileId);
    saveLikesForOwner(actingOwner, likes);
    if (targetProfile?.ownerEmail && !targetProfile.demo) {
        queueDashboardNotification(targetProfile.ownerEmail, "interest", profileId);
    }

    const mutual = getMutualInterestsForCurrentOwner()
        .find(item => item.otherProfile.id === profileId);
    if (mutual) {
        queueDashboardNotification(actingOwner, "mutual", mutual.id);
        queueDashboardNotification(mutual.otherProfile.ownerEmail, "mutual", mutual.id);
    }

    button.textContent = "✓ ინტერესი შენახულია";
});

function showProfileActionMessage(message) {
    let status = document.querySelector("#profileActionMessage");
    if (!status) {
        status = document.createElement("p");
        status.id = "profileActionMessage";
        status.className = "form-message profile-action-message";
        status.setAttribute("aria-live", "polite");
        profileResults?.before(status);
        likesList?.before(status);
        favoritesList?.before(status);
    }
    status.innerHTML = message;
}

// მოწონებების გვერდი
const likesList = document.querySelector("#likesList");

if (likesList) {
    const likedIds = readLikesForOwner();
    const likedProfiles = getAllProfiles()
        .filter(profile => likedIds.includes(profile.id));

    renderProfiles(likedProfiles, likesList);
}

const favoritesList = document.querySelector("#favoritesList");

if (favoritesList) {
    renderFavoriteProfiles();
    document.querySelector("#favoriteSearch").addEventListener("input", renderFavoriteProfiles);
    document.querySelector("#favoriteSort").addEventListener("change", renderFavoriteProfiles);
}

const comparisonList = document.querySelector("#comparisonList");

if (comparisonList) {
    renderProfileComparison();
    comparisonList.addEventListener("click", event => {
        const button = event.target.closest("[data-remove-comparison]");
        if (!button) return;
        const profileIds = readComparisonForOwner().filter(id => id !== button.dataset.removeComparison);
        saveComparisonForOwner(getCurrentOwner(), profileIds);
        renderProfileComparison();
    });
}

// ურთიერთინტერესის გვერდი
const matchesList = document.querySelector("#matchesList");

if (matchesList) {
    const mutualInterests = getMutualInterestsForCurrentOwner();

    if (!mutualInterests.length) {
        matchesList.innerHTML = `
            <div class="empty-state">
                ურთიერთინტერესი ჯერ არ დადასტურებულა.<br>
                ოჯახის გაცნობის ოთახი ხელმისაწვდომი ხდება მხოლოდ ორივე სრულწლოვანის თანხმობის შემდეგ.
            </div>
        `;
    } else {
        matchesList.innerHTML = mutualInterests.map(match => `
            <article class="profile-card mutual-card">
                <div class="profile-avatar" aria-hidden="true">${getInitials(match.otherProfile.name)}</div>
                <h3>${escapeHTML(match.otherProfile.name)}, ${Number(match.otherProfile.age)}</h3>
                <p class="profile-meta">${escapeHTML(match.otherProfile.city)} · ${escapeHTML(match.otherProfile.education)}</p>
                <p class="profile-description">ორმხრივი ინტერესი დადასტურებულია. ოჯახის მოწვევა ცალკე, ორივე ზრდასრულის თანხმობას მოითხოვს.</p>
                <div class="card-actions">
                    <a class="btn btn-outline" href="profile.html?id=${encodeURIComponent(match.otherProfile.id)}">პროფილის ნახვა</a>
                    <a class="btn btn-primary" href="messages.html?room=${encodeURIComponent(match.id)}">ოჯახის გაცნობის ოთახი</a>
                </div>
            </article>
        `).join("");
    }
}

const meetingCalendar = document.querySelector("#meetingCalendar");

if (meetingCalendar) {
    const scheduledMeetings = getMutualInterestsForCurrentOwner().map(match => {
        const room = readStorage(STORAGE.rooms, {})[match.id];
        if (!room?.meeting) return null;

        const meeting = room.meeting;
        const confirmed = match.participants.every(owner => (meeting.confirmedBy || []).includes(owner));
        const timestamp = new Date(`${meeting.date}T${meeting.time}`).getTime();
        const status = meeting.status === "canceled"
            ? "გაუქმებული"
            : confirmed && timestamp < Date.now()
                ? "დასრულებული"
                : confirmed
                    ? "დადასტურებული"
                    : "შეთავაზებული";

        return { match, meeting, timestamp, status };
    }).filter(Boolean).sort((first, second) => first.timestamp - second.timestamp);

    meetingCalendar.innerHTML = scheduledMeetings.length ? scheduledMeetings.map(item => `
        <article class="simple-list-item meeting-calendar-item">
            <div>
                <strong>${escapeHTML(item.match.otherProfile.name)}</strong>
                <p>${escapeHTML(item.meeting.date)} · ${escapeHTML(item.meeting.time)} · ${item.status}</p>
            </div>
            <a class="btn btn-outline" href="messages.html?room=${encodeURIComponent(item.match.id)}">ოთახის გახსნა</a>
        </article>
    `).join("") : `<p class="empty-state">დაგეგმილი შეხვედრები ჯერ არ არის.</p>`;
}

const messagesArea = document.querySelector("#messagesArea");

if (messagesArea) {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get("room");
    const mutualInterests = getMutualInterestsForCurrentOwner();
    const mutual = mutualInterests.find(item => item.id === roomId);

    if (!roomId) {
        messagesArea.innerHTML = mutualInterests.length ? `
            <div class="empty-state">აირჩიე ოთახი ურთიერთინტერესის გვერდიდან.</div>
            <p class="room-back-link"><a class="btn btn-outline" href="matches.html">ურთიერთინტერესის ნახვა</a></p>
        ` : `
            <div class="empty-state">აქტიური ოთახი არ არის. ოჯახის გაცნობის ოთახი მხოლოდ ორმხრივი ინტერესის შემდეგ იქმნება.</div>
        `;
    } else if (!mutual) {
        messagesArea.innerHTML = `
            <div class="empty-state">ეს ოთახი მიუწვდომელია: ურთიერთინტერესი ვერ დადასტურდა ამ ანგარიშისთვის.</div>
        `;
    } else {
        const currentOwner = getCurrentOwner();
        const participantNames = new Map([
            [mutual.participants[0], mutual.currentProfile.name],
            [mutual.participants[1], mutual.otherProfile.name]
        ]);
        const rooms = readStorage(STORAGE.rooms, {});
        const room = rooms[roomId] || {
            familyConsents: {},
            adultConsents: {},
            familyMessages: [],
            adultMessages: [],
            leftBy: {},
            meeting: null
        };

        function persistRoom() {
            const currentRooms = readStorage(STORAGE.rooms, {});
            currentRooms[roomId] = room;
            saveStorage(STORAGE.rooms, currentRooms);
        }

        function renderRoom() {
            const familyReady = mutual.participants.every(owner => room.familyConsents[owner]);
            const adultChatReady = mutual.participants.every(owner => room.adultConsents[owner]);
            const hasLeft = Boolean(room.leftBy[currentOwner]);
            const familyMessages = room.familyMessages.map(message => `
                <div class="chat-entry${message.sender === currentOwner ? " chat-entry-mine" : ""}">
                    <strong>${escapeHTML(participantNames.get(message.sender) || "მონაწილე")}</strong>
                    <p>${escapeHTML(message.text)}</p>
                </div>
            `).join("");
            const adultMessages = room.adultMessages.map(message => `
                <div class="chat-entry${message.sender === currentOwner ? " chat-entry-mine" : ""}">
                    <strong>${escapeHTML(participantNames.get(message.sender) || "მონაწილე")}</strong>
                    <p>${escapeHTML(message.text)}</p>
                </div>
            `).join("");
            const meeting = room.meeting;
            const meetingConfirmed = meeting && mutual.participants.every(owner => (meeting.confirmedBy || []).includes(owner));
            const meetingTimestamp = meeting ? new Date(`${meeting.date}T${meeting.time}`).getTime() : 0;
            const meetingStatus = !meeting ? "" : meeting.status === "canceled"
                ? "გაუქმებული"
                : meetingConfirmed && meetingTimestamp < Date.now()
                    ? "დასრულებული"
                    : meetingConfirmed
                        ? "დადასტურებული"
                        : "შეთავაზებული";

            messagesArea.innerHTML = `
                <article class="introduction-room">
                    <header class="room-heading">
                        <div>
                            <span class="eyebrow">ოჯახების გაცნობა</span>
                            <h2>${escapeHTML(mutual.currentProfile.name)} და ${escapeHTML(mutual.otherProfile.name)}</h2>
                        </div>
                        <a class="btn btn-outline" href="matches.html">ოთახიდან გასვლა</a>
                    </header>

                    <div class="room-participants">
                        <h3>მონაწილე სრულწლოვნები</h3>
                        <p>${escapeHTML(mutual.currentProfile.name)} · ${escapeHTML(mutual.otherProfile.name)}</p>
                        <p class="muted">ოჯახის წევრების დამატება შესაძლებელია მხოლოდ ორივე ზრდასრულის ცალკე თანხმობით.</p>
                    </div>

                    ${hasLeft ? `
                        <div class="notice">შენ დატოვე ეს ოთახი. საუბრის გასაგრძელებლად შეგიძლია ხელახლა შეუერთდე.</div>
                        <button class="btn btn-outline" type="button" data-room-action="rejoin">ოთახში დაბრუნება</button>
                    ` : `
                        <section class="room-consent-section">
                            <h3>ოჯახის მოწვევა</h3>
                            <p>ორმხრივი ინტერესი ოჯახის მონაწილეობაზე თანხმობა არ არის. ორივე სრულწლოვანმა ცალკე უნდა დაადასტუროს.</p>
                            <div class="consent-status-list">
                                ${mutual.participants.map(owner => `
                                    <span>${escapeHTML(participantNames.get(owner))}: ${room.familyConsents[owner] ? "თანხმობა დადასტურებულია" : "თანხმობა ჯერ არ არის"}</span>
                                `).join("")}
                            </div>
                            <button class="btn btn-primary" type="button" data-room-action="family-consent" ${room.familyConsents[currentOwner] ? "disabled" : ""}>
                                ${room.familyConsents[currentOwner] ? "ოჯახის მოწვევაზე თანხმობა დადასტურებულია" : "ვეთანხმები ჩემი ოჯახის მოწვევას"}
                            </button>
                        </section>

                        ${familyReady ? `
                            <section class="room-content">
                                <div class="room-section-heading">
                                    <div><span class="eyebrow">ერთობლივი სივრცე</span><h3>ოჯახის საუბარი</h3></div>
                                    <button class="btn btn-outline btn-small" type="button" data-room-action="leave">ოთახის დატოვება</button>
                                </div>
                                <ul class="topic-list">
                                    <li>რა არის თითოეული ადამიანის პირადი მიზნები და ინტერესები?</li>
                                    <li>როგორ შეიძლება ოჯახებმა მხარი დაუჭირონ ზრდასრულების არჩევანს?</li>
                                    <li>რომელი მოლოდინების გარკვევაა მნიშვნელოვანი მომდევნო საუბრამდე?</li>
                                </ul>
                                <div class="room-chat" aria-live="polite">${familyMessages || "<p class='muted'>საუბარი ჯერ არ დაწყებულა.</p>"}</div>
                                <form id="familyMessageForm" class="room-message-form">
                                    <label class="sr-only" for="familyMessage">შეტყობინება ოჯახურ ოთახში</label>
                                    <textarea id="familyMessage" maxlength="1000" required placeholder="დაწერე შეტყობინება"></textarea>
                                    <button class="btn btn-primary" type="submit">გაგზავნა</button>
                                </form>

                                <section class="meeting-section">
                                    <h3>შესავალი ვიდეოზარი ან შეხვედრა</h3>
                                    ${meeting ? `
                                        <p>შემოთავაზებული დრო: ${escapeHTML(meeting.date)} · ${escapeHTML(meeting.time)}</p>
                                        <p>სტატუსი: ${meetingStatus}</p>
                                        ${meetingStatus === "შეთავაზებული" && meeting.proposedBy !== currentOwner ? `<button class="btn btn-primary" type="button" data-room-action="confirm-meeting">დროის დადასტურება</button>` : ""}
                                        ${meetingStatus === "გაუქმებული" || meetingStatus === "დასრულებული" ? "" : `<button class="btn btn-outline" type="button" data-room-action="cancel-meeting">შეხვედრის გაუქმება</button>`}
                                    ` : "<p class='muted'>დრო ჯერ შეთავაზებული არ არის.</p>"}
                                    <form id="meetingForm" class="meeting-form">
                                        <label>თარიღი <input id="meetingDate" type="date" required></label>
                                        <label>დრო <input id="meetingTime" type="time" required></label>
                                        <label class="value-visibility"><input id="meetingReminder" type="checkbox"> შემახსენე 24 საათით ადრე ამ გვერდზე</label>
                                        <button class="btn btn-outline" type="submit">დროის შეთავაზება</button>
                                    </form>
                                    <p id="roomReminderStatus" class="form-note" aria-live="polite"></p>
                                    <aside class="meeting-safety">
                                        <h4>პირველი შეხვედრის უსაფრთხოება</h4>
                                        <p>აირჩიეთ საჯარო ადგილი, აცნობეთ სანდო ადამიანს, დაგეგმეთ საკუთარი ტრანსპორტი და არ გააზიაროთ სახლის ზუსტი მისამართი ან ფინანსური ინფორმაცია.</p>
                                    </aside>
                                </section>
                            </section>
                        ` : ""}
                    `}

                    <section class="adult-chat-section">
                        <h3>სრულწლოვანების პირადი საუბარი</h3>
                        <p>ეს ცალკე საუბარია და მხოლოდ ორივე ზრდასრულის თანხმობით გაიხსნება.</p>
                        <div class="consent-status-list">
                            ${mutual.participants.map(owner => `
                                <span>${escapeHTML(participantNames.get(owner))}: ${room.adultConsents[owner] ? "თანახმაა" : "თანხმობა ჯერ არ არის"}</span>
                            `).join("")}
                        </div>
                        <button class="btn btn-outline" type="button" data-room-action="adult-consent" ${room.adultConsents[currentOwner] ? "disabled" : ""}>
                            ${room.adultConsents[currentOwner] ? "პირად საუბარზე თანხმობა დადასტურებულია" : "მინდა ცალკე პირადი საუბარი"}
                        </button>
                        ${adultChatReady ? `
                            <div class="room-chat" aria-live="polite">${adultMessages || "<p class='muted'>პირადი საუბარი ჯერ არ დაწყებულა.</p>"}</div>
                            <form id="adultMessageForm" class="room-message-form">
                                <label class="sr-only" for="adultMessage">შეტყობინება პირად საუბარში</label>
                                <textarea id="adultMessage" maxlength="1000" required placeholder="დაწერე პირადი შეტყობინება"></textarea>
                                <button class="btn btn-primary" type="submit">გაგზავნა</button>
                            </form>
                        ` : ""}
                    </section>
                </article>
            `;

            if (meetingConfirmed && meeting.status !== "canceled" && meeting.reminder) {
                const meetingTimestamp = new Date(`${meeting.date}T${meeting.time}`).getTime();
                const reminderTimestamp = meetingTimestamp - 24 * 60 * 60 * 1000;
                const reminderStatus = document.querySelector("#roomReminderStatus");
                const showReminder = () => {
                    const status = document.querySelector("#roomReminderStatus");
                    if (status) status.textContent = `შეხსენება: ${meeting.date} · ${meeting.time} დაგეგმილია შეხვედრა.`;
                    mutual.participants.forEach(owner => {
                        queueDashboardNotification(owner, "meeting", `${roomId}-${meeting.date}-${meeting.time}`);
                    });
                };
                if (reminderTimestamp <= Date.now() && meetingTimestamp > Date.now()) {
                    showReminder();
                } else if (reminderTimestamp > Date.now()) {
                    setTimeout(showReminder, reminderTimestamp - Date.now());
                } else if (reminderStatus && meetingTimestamp <= Date.now()) {
                    reminderStatus.textContent = "შეხსენების დრო გასულია.";
                }
            }
        }

        room.readAt = room.readAt || {};
        room.readAt[currentOwner] = new Date().toISOString();
        persistRoom();
        renderRoom();

        messagesArea.addEventListener("click", event => {
            const button = event.target.closest("[data-room-action]");
            if (!button) return;

            const action = button.dataset.roomAction;
            if (action === "family-consent") room.familyConsents[currentOwner] = true;
            if (action === "adult-consent") room.adultConsents[currentOwner] = true;
            if (action === "leave") room.leftBy[currentOwner] = true;
            if (action === "rejoin") delete room.leftBy[currentOwner];
            if (action === "cancel-meeting" && room.meeting) room.meeting.status = "canceled";
            if (action === "confirm-meeting" && room.meeting) {
                room.meeting.confirmedBy = [...new Set([...room.meeting.confirmedBy, currentOwner])];
                if (mutual.participants.every(owner => room.meeting.confirmedBy.includes(owner))) {
                    room.meeting.status = "confirmed";
                }
            }
            persistRoom();
            renderRoom();
        });

        messagesArea.addEventListener("submit", event => {
            const form = event.target;
            if (form.id === "meetingForm") {
                event.preventDefault();
                const date = document.querySelector("#meetingDate").value;
                const time = document.querySelector("#meetingTime").value;
                const timestamp = new Date(`${date}T${time}`).getTime();
                if (!Number.isFinite(timestamp) || timestamp <= Date.now()) return;
                room.meeting = {
                    date,
                    time,
                    reminder: document.querySelector("#meetingReminder").checked,
                    proposedBy: currentOwner,
                    confirmedBy: [currentOwner],
                    status: "proposed"
                };
                persistRoom();
                renderRoom();
                return;
            }

            const isAdultMessage = form.id === "adultMessageForm";
            const isFamilyMessage = form.id === "familyMessageForm";
            if (!isAdultMessage && !isFamilyMessage) return;
            event.preventDefault();
            const input = document.querySelector(isAdultMessage ? "#adultMessage" : "#familyMessage");
            const message = input.value.trim();
            if (!message) return;
            const messageList = isAdultMessage ? room.adultMessages : room.familyMessages;
            const sentAt = new Date().toISOString();
            messageList.push({ sender: currentOwner, text: message, sentAt });
            mutual.participants.filter(owner => owner !== currentOwner).forEach(owner => {
                queueDashboardNotification(owner, "message", `${roomId}-${sentAt}`);
            });
            room.readAt = room.readAt || {};
            room.readAt[currentOwner] = sentAt;
            persistRoom();
            renderRoom();
        });
    }
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
        const visibleFields = getPrivacySettings(profile).visibleFields;
        const questionnaire = profile.valuesQuestionnaire || {};
        const publicQuestionnaire = visibleFields.values ? questionnaireCriteria
            .filter(criterion => {
                const isFamilyInformation = ["familyValues", "familyInvolvement"].includes(criterion.key);
                return (!isFamilyInformation || visibleFields.familyValues) &&
                    questionnaire.visibility?.[criterion.key] && questionnaire.answers?.[criterion.key];
            })
            .map(criterion => [criterion.label, questionnaire.answers[criterion.key]]) : [];
        const profileAttributes = [
            ["region", "რეგიონი", profile.region],
            ["profession", "პროფესია", profile.profession],
            ["interests", "ინტერესები", profile.interests],
            ["languages", "ენები", profile.languages],
            ["lifestyle", "ცხოვრების წესი", profile.lifestyle],
            ["familyValues", "ოჯახური ღირებულებები", profile.familyValues],
            ["goals", "გრძელვადიანი მიზნები", profile.goals],
            ["marriageExpectations", "ქორწინების მოლოდინები", profile.marriageExpectations],
            ["partnerCriteria", "სასურველი თვისებები პარტნიორში", profile.partnerCriteria]
        ].filter(([key, , value]) => visibleFields[key] && parseTokens(value).length);
        const publicMeta = [
            visibleFields.city && profile.city,
            visibleFields.region && profile.region,
            visibleFields.country && profile.country,
            visibleFields.georgianAbroad && profile.georgianAbroad && "საქართველოს ფარგლებს გარეთ",
            visibleFields.education && profile.education
        ].filter(Boolean);
        const verificationStatuses = [
            ["ელფოსტა", false],
            ["ტელეფონი", false],
            ["იდენტობა", false],
            ["მოდერაციის მიერ განხილვა", false]
        ];

        profileDetails.innerHTML = `
            <div class="profile-avatar">${getInitials(profile.name)}</div>
            <h2 style="margin-top: 18px">
                ${escapeHTML(profile.name)}${visibleFields.age ? `, ${Number(profile.age)}` : ""}
            </h2>
            ${publicMeta.length ? `<p class="profile-meta">${publicMeta.map(escapeHTML).join(" · ")}${visibleFields.age ? " · 18+" : ""}</p>` : ""}
            <p class="consent-confirmation">${profile.demo ? "ეს პროფილი სასწავლო დემო მონაცემია და რეალურ პირს არ წარმოადგენს." : "პროფილის მფლობელმა დაადასტურა ინფორმირებული თანხმობა."}</p>
            ${visibleFields.bio && profile.bio ? `<p style="margin-top: 20px">${escapeHTML(profile.bio)}</p>` : ""}
            ${profileAttributes.length ? `
                <dl class="profile-attributes">
                    ${profileAttributes.map(([, label, value]) => `
                        <div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(parseTokens(value).join(", "))}</dd></div>
                    `).join("")}
                </dl>
            ` : ""}
            ${publicQuestionnaire.length ? `
                <section class="public-values">
                    <h3>ღირებულებები და ცხოვრების წესი</h3>
                    <dl class="profile-attributes">
                        ${publicQuestionnaire.map(([label, value]) => `
                            <div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd></div>
                        `).join("")}
                    </dl>
                </section>
            ` : ""}
            <section class="profile-verification">
                <h3>დადასტურების სტატუსები</h3>
                <dl class="verification-list">
                    ${verificationStatuses.map(([label, verified]) => `
                        <div><dt>${escapeHTML(label)}</dt><dd>${verified ? "დადასტურებულია" : "დაუდასტურებელი"}</dd></div>
                    `).join("")}
                </dl>
                <p class="form-note">დადასტურება არ არის პატიოსნების ან უსაფრთხოების გარანტია.</p>
            </section>
            <div class="card-actions">
                <button class="btn btn-primary like-button"
                    data-profile-id="${escapeHTML(profile.id)}"
                    type="button">♡ გამოხატე ინტერესი</button>
                <a class="btn btn-outline" href="search.html">უკან დაბრუნება</a>
            </div>
        `;
    }
}

// ანგარიშის გვერდი
const dashboardInfo = document.querySelector("#dashboardInfo");

if (dashboardInfo) {
    const session = readStorage(STORAGE.session, null);
    const owner = getCurrentOwner();
    const ownedProfiles = readStorage(STORAGE.profiles).filter(profile =>
        (profile.ownerEmail || "guest") === owner && Number(profile.age) >= 18 && profile.consent !== false
    );
    const ownProfileIds = new Set(ownedProfiles.map(profile => profile.id));
    const currentProfile = ownedProfiles[0] || null;
    const metrics = document.querySelector("#dashboardMetrics");
    const incomingContainer = document.querySelector("#dashboardIncomingInterests");
    const sentContainer = document.querySelector("#dashboardSentInterests");
    const recommendationsContainer = document.querySelector("#dashboardRecommendations");
    const meetingsContainer = document.querySelector("#dashboardMeetings");

    dashboardInfo.textContent = session?.email
        ? `დემო ანგარიში · ${session.name || "მომხმარებელი"}`
        : "სტუმრის დემო რეჟიმი · მონაცემები მხოლოდ ამ ბრაუზერში ინახება.";

    const completionFields = currentProfile ? [
        Boolean(currentProfile.name),
        Number(currentProfile.age) >= 18,
        Boolean(currentProfile.city),
        Boolean(currentProfile.education),
        Boolean(currentProfile.profession),
        Boolean(currentProfile.bio),
        parseTokens(currentProfile.interests).length > 0,
        parseTokens(currentProfile.languages).length > 0
    ] : [];
    const completionPercent = completionFields.length
        ? Math.round(completionFields.filter(Boolean).length / completionFields.length * 100)
        : 0;
    document.querySelector("#profileCompletion").value = completionPercent;
    document.querySelector("#profileCompletionText").textContent = currentProfile
        ? `${completionFields.filter(Boolean).length} / ${completionFields.length} ძირითადი ველი · ${completionPercent}%`
        : "საკუთარი პროფილი ჯერ არ შეგიქმნია.";
    document.querySelector("#dashboardVisibilityStatus").textContent = currentProfile
        ? getPrivacySettings(currentProfile).hiddenFromSearch
            ? "ხილვადობა: ძიებაში დამალულია"
            : "ხილვადობა: ძიებაში ჩანს"
        : "ხილვადობა: პროფილი არ არის";

    const allProfiles = getAllProfiles();
    const profilesById = new Map(allProfiles.map(profile => [profile.id, profile]));
    const incomingProfiles = [];
    const likesByOwner = readLikesByOwner();
    Object.entries(likesByOwner).forEach(([liker, profileIds]) => {
        if (liker === owner) return;
        profileIds.filter(profileId => ownProfileIds.has(profileId)).forEach(profileId => {
            const profile = profilesById.get(profileId);
            if (profile && !incomingProfiles.some(item => item.profile.id === profileId && item.liker === liker)) {
                const senderProfile = allProfiles.find(item => item.ownerEmail === liker && !item.demo) || null;
                incomingProfiles.push({ profile, liker, senderProfile });
            }
        });
    });

    const sentIds = readLikesForOwner(owner);
    const sentProfiles = sentIds.map(id => profilesById.get(id)).filter(Boolean);
    const mutualInterests = getMutualInterestsForCurrentOwner();
    const favorites = readFavoritesForOwner(owner);
    const rooms = readStorage(STORAGE.rooms, {});
    const unreadMessages = mutualInterests.reduce((count, match) => {
        const room = rooms[match.id];
        if (!room) return count;
        const messages = [...(room.familyMessages || []), ...(room.adultMessages || [])];
        const lastReadAt = room.readAt?.[owner] ? new Date(room.readAt[owner]) : new Date(0);
        return count + messages.filter(message =>
            message.sender !== owner && new Date(message.sentAt) > lastReadAt
        ).length;
    }, 0);
    const upcomingMeetings = mutualInterests.map(match => ({
        match,
        meeting: rooms[match.id]?.meeting
    })).filter(item => item.meeting && item.meeting.status !== "canceled" &&
        new Date(`${item.meeting.date}T${item.meeting.time}`) >= new Date());

    if (metrics) {
        const metricItems = [
            ["მიღებული ინტერესები", incomingProfiles.length, "#dashboardIncomingInterests"],
            ["გაგზავნილი ინტერესები", sentIds.length, "#dashboardSentInterests"],
            ["ურთიერთინტერესი", mutualInterests.length, "matches.html"],
            ["წაუკითხავი შეტყობინებები", unreadMessages, "messages.html"],
            ["შენახული პროფილები", favorites.length, "favorites.html"],
            ["მომავალი შეხვედრები", upcomingMeetings.length, "matches.html"]
        ];
        metrics.innerHTML = metricItems.map(([label, value, href]) => `
            <a class="dashboard-metric" href="${href.startsWith("#") ? href : href}">
                <span>${label}</span><strong>${value}</strong>
            </a>
        `).join("");
    }

    incomingContainer.innerHTML = incomingProfiles.length ? incomingProfiles.map(({ profile, senderProfile }) => `
        <article class="dashboard-list-item">
            ${senderProfile ? `
                <a href="profile.html?id=${encodeURIComponent(senderProfile.id)}">${escapeHTML(senderProfile.name)}${getPrivacySettings(senderProfile).visibleFields.age ? `, ${Number(senderProfile.age)}` : ""}</a>
                <button class="btn btn-outline like-button" type="button" data-profile-id="${escapeHTML(senderProfile.id)}">ინტერესზე პასუხი</button>
            ` : `<span>ახალი ინტერესი მიღებულია შენს პროფილზე.</span>`}
            <span class="muted">ახალი ინტერესი</span>
        </article>
    `).join("") : `<p class="muted">მიღებული ინტერესები ჯერ არ არის.</p>`;

    sentContainer.innerHTML = sentIds.length ? sentIds.map(id => {
        const profile = profilesById.get(id);
        return profile ? `
            <article class="dashboard-list-item">
                <a href="profile.html?id=${encodeURIComponent(id)}">${escapeHTML(profile.name)}</a>
                <span class="muted">ინტერესი გაგზავნილია</span>
            </article>
        ` : `<p class="muted">ერთი გაგზავნილი ინტერესი ახლა მიუწვდომელია.</p>`;
    }).join("") : `<p class="muted">გაგზავნილი ინტერესები ჯერ არ არის.</p>`;

    const preferences = readMatchPreferences();
    preferences.questionnaire = ownedProfiles.find(profile =>
        profile.id === preferences.questionnaireProfileId
    )?.valuesQuestionnaire || null;
    const rankedRecommendations = allProfiles.filter(profile =>
        profile.demo || ((profile.ownerEmail || "guest") !== owner && !getPrivacySettings(profile).excludeRecommendations)
    ).map((profile, index) => ({
        profile,
        index,
        match: evaluateMatch(profile, preferences)
    })).filter(item => item.match.score != null).sort((first, second) =>
        second.match.score - first.match.score || first.index - second.index
    ).slice(0, 3);
    if (rankedRecommendations.length) {
        const recommendationMatches = new Map(rankedRecommendations.map(item => [item.profile.id, item.match]));
        renderProfiles(rankedRecommendations.map(item => item.profile), recommendationsContainer, recommendationMatches);
    } else {
        recommendationsContainer.innerHTML = `<p class="muted">რეკომენდაციების სანახავად მიუთითე კრიტერიუმები ძიების გვერდზე.</p>`;
    }

    meetingsContainer.innerHTML = upcomingMeetings.length ? upcomingMeetings.map(({ match, meeting }) => `
        <article class="dashboard-list-item">
            <span>${escapeHTML(meeting.date)} · ${escapeHTML(meeting.time)} · ${meeting.status === "confirmed" ? "დადასტურებული" : "შეთავაზებული"}</span>
            <a href="messages.html?room=${encodeURIComponent(match.id)}">ოთახის გახსნა</a>
        </article>
    `).join("") : `<p class="muted">მომავალი შეხვედრები არ არის.</p>`;
}

const notificationSettingsForm = document.querySelector("#notificationSettingsForm");

if (notificationSettingsForm) {
    const owner = getCurrentOwner();
    const cadenceSelect = document.querySelector("#notificationCadence");
    const settingsMessage = document.querySelector("#notificationSettingsMessage");
    const settings = readNotificationSettings(owner);
    cadenceSelect.value = settings.cadence;
    document.querySelectorAll("[data-notification-type]").forEach(input => {
        input.checked = settings.types[input.dataset.notificationType] !== false;
    });

    function renderNotificationGroups() {
        const groups = getDashboardNotificationGroups(owner);
        const optionalContainer = document.querySelector("#optionalNotifications");
        const securityContainer = document.querySelector("#securityNotifications");
        const renderItems = items => items.length ? items.map(item => `
            <article class="dashboard-notification-item${item.security ? " is-security" : ""}">
                <strong>${escapeHTML(item.title)}</strong>
                <p>${escapeHTML(item.message)}</p>
                <time datetime="${escapeHTML(item.createdAt)}">${escapeHTML(new Date(item.createdAt).toLocaleString("ka-GE"))}</time>
            </article>
        `).join("") : `<p class="muted">შეტყობინებები არ არის.</p>`;

        optionalContainer.innerHTML = renderItems(groups.optional);
        securityContainer.innerHTML = renderItems(groups.security);
    }

    notificationSettingsForm.addEventListener("submit", event => {
        event.preventDefault();
        const types = {};
        document.querySelectorAll("[data-notification-type]").forEach(input => {
            types[input.dataset.notificationType] = input.checked;
        });
        saveNotificationSettings(owner, {
            ...readNotificationSettings(owner),
            cadence: cadenceSelect.value,
            types
        });
        settingsMessage.textContent = "არჩევითი შეტყობინებების პარამეტრები შენახულია ამ ბრაუზერში. უსაფრთხოების შეტყობინებები ცალკეა.";
        renderNotificationGroups();
    });

    renderNotificationGroups();
}

// დემო რეჟიმიდან გამოსვლა
const logoutButton = document.querySelector("#logoutButton");

if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem(STORAGE.session);
        window.location.href = "index.html";
    });
}

const homeHeroStage = document.querySelector("#heroStage");

if (homeHeroStage) {
    const intro = document.querySelector("#cinematicIntro");
    const introVideo = document.querySelector("#cinematicIntroVideo");
    const skipIntroButton = document.querySelector("#skipIntro");
    const homeHeader = document.querySelector("#homeHeader");
    const splitCover = document.querySelector("#heroSplitCover");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animationSupported = !reducedMotion.matches && "requestAnimationFrame" in window;

    if (animationSupported) document.body.classList.add("has-scroll-animations");

    let introFinished = false;
    let introTimer = 0;

    function finishIntro() {
        if (introFinished || !intro || intro.hidden) return;
        introFinished = true;
        window.clearTimeout(introTimer);
        try {
            sessionStorage.setItem("garigeba_intro_seen", "1");
        } catch {
            // The intro remains once-per-page if session storage is unavailable.
        }
        introVideo?.pause();
        intro.classList.add("is-leaving");
        window.setTimeout(() => {
            intro.hidden = true;
            homeHeader?.querySelector(".logo")?.focus({ preventScroll: true });
        }, 580);
    }

    let introAlreadySeen = false;
    try {
        introAlreadySeen = sessionStorage.getItem("garigeba_intro_seen") === "1";
    } catch {
        introAlreadySeen = false;
    }

    if (intro && !reducedMotion.matches && !introAlreadySeen) {
        intro.hidden = false;
        introTimer = window.setTimeout(finishIntro, 3000);
        skipIntroButton?.addEventListener("click", finishIntro);
        intro.addEventListener("keydown", event => {
            if (event.key === "Escape") finishIntro();
        });

        if (introVideo && location.protocol !== "file:" && window.innerWidth > 650 && navigator.connection?.saveData !== true) {
            const source = introVideo.querySelector("source[data-src]");
            if (source) source.src = source.dataset.src;
            introVideo.addEventListener("error", () => {
                introVideo.hidden = true;
            }, { once: true });
            introVideo.addEventListener("ended", finishIntro, { once: true });
            introVideo.load();
            introVideo.play().catch(() => {
                introVideo.hidden = true;
            });
        } else if (introVideo) {
            introVideo.hidden = true;
        }

        skipIntroButton?.focus({ preventScroll: true });
    } else if (intro) {
        intro.hidden = true;
    }

    if (animationSupported && splitCover) {
        let animationFrame = 0;
        const updateScrollEffects = () => {
            animationFrame = 0;
            const scrollPosition = window.scrollY;
            homeHeader?.classList.toggle("is-scrolled", scrollPosition > 20);

            const stageTop = homeHeroStage.getBoundingClientRect().top + scrollPosition;
            const scrollDistance = Math.max(1, window.innerHeight * (window.innerWidth <= 650 ? .52 : .7));
            const progress = Math.max(0, Math.min(1, (scrollPosition - stageTop) / scrollDistance));
            const movement = progress * window.innerHeight * (window.innerWidth <= 650 ? .34 : .52);
            splitCover.style.setProperty("--split-top-y", `${-movement}px`);
            splitCover.style.setProperty("--split-bottom-y", `${movement}px`);
            splitCover.style.setProperty("--split-caption-opacity", String(1 - progress));
        };
        const requestScrollUpdate = () => {
            if (!animationFrame) animationFrame = window.requestAnimationFrame(updateScrollEffects);
        };

        window.addEventListener("scroll", requestScrollUpdate, { passive: true });
        window.addEventListener("resize", requestScrollUpdate, { passive: true });
        updateScrollEffects();
    } else {
        homeHeader?.classList.remove("is-scrolled");
    }
}

const guideArticleList = document.querySelector("#guideArticles");

if (guideArticleList) {
    const guideSearch = document.querySelector("#guideSearch");
    const guideCategory = document.querySelector("#guideCategory");
    const guideResultCount = document.querySelector("#guideResultCount");

    function renderGuideArticles() {
        const query = guideSearch.value.trim().toLocaleLowerCase("ka");
        const category = guideCategory.value;
        const articles = guideArticleData.filter(article => {
            const searchable = `${article.title} ${article.terms} ${article.paragraphs.join(" ")}`
                .toLocaleLowerCase("ka");
            return (!category || article.category === category) && (!query || searchable.includes(query));
        });

        guideResultCount.textContent = `${articles.length} სტატია`;
        guideArticleList.innerHTML = articles.length ? articles.map(article => `
            <article class="guide-article">
                <span class="guide-category">${escapeHTML(article.categoryLabel)}</span>
                <h2>${escapeHTML(article.title)}</h2>
                ${article.paragraphs.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join("")}
            </article>
        `).join("") : `<p class="empty-state">ამ ძიებით სტატია ვერ მოიძებნა.</p>`;
    }

    guideSearch.addEventListener("input", renderGuideArticles);
    guideCategory.addEventListener("change", renderGuideArticles);
    renderGuideArticles();
}