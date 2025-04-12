const translations = {
    en: {
      // General
      loading: "Loading...",
      noImageAvailable: "No Image Available",
      backToBlog: "Back to Blog",
  
      // Header
      quickCheckNav: "Quick Check",
      verifiedClaimsNav: "Verified Claims",
      blogNav: "Blog",
      contactUsNav: "Contact Us",
      languageEnglish: "English",
      languageHausa: "Hausa",
      languageYoruba: "Yoruba",
      languageIgbo: "Igbo",

     
        en: {
          // Existing keys...
      
          // Landing Page
          landingTitle: "TruthCheck!",
          landingSubtitle: "Your shield against lies.",
          landingDescription: "Verify news and claims in Nigeria instantly with the QuickCheck Tool.",
          landingCtaButton: "Search with QuickCheck",
        },
        ha: {
          // Existing keys...
      
          // Landing Page
          landingTitle: "TruthCheck!",
          landingSubtitle: "Garkuwarka daga ƙarya.",
          landingDescription: "Tabbatar da labarai da da'awar a Najeriya nan take tare da Kayan Aikin QuickCheck.",
          landingCtaButton: "Bincika tare da QuickCheck",
        },
        yo: {
          // Existing keys...
      
          // Landing Page
          landingTitle: "TruthCheck!",
          landingSubtitle: "Asà rẹ lòdì sí ìtàn rọ́.",
          landingDescription: "Ṣe ìdánwò ìròyìn àti ìdílé ní Nàìjíríà lẹ́sẹ̀kẹsẹ̀ pẹ̀lú Ohun Èlò QuickCheck.",
          landingCtaButton: "Wá pẹ̀lú QuickCheck",
        },
        ig: {
          // Existing keys...
      
          // Landing Page
          landingTitle: "TruthCheck!",
          landingSubtitle: "Ọta gị megide ụgha.",
          landingDescription: "Nyocha akụkọ na nkwupụta na Naịjirịa ozugbo site na Ngwaọrụ QuickCheck.",
          landingCtaButton: "Chọọ na QuickCheck",
        },
    
  
      // Quick Check Page
      quickCheckTitle: "Quick Check",
      enterText: "Paste claim or URL here",
      checkText: "Verify",
      analyzing: "Verifying...",
      checkAnother: "Check Another",
  
      // Verified Claims Page
      verifiedClaimsTitle: "Verified Claims",
      categoryHealth: "Health",
      categoryPolitics: "Politics",
      categorySecurity: "Security",
      statusCorrect: "CORRECT",
      statusFake: "FAKE NEWS",
      datePublished: "Date Published:",
      author: "Author:",
      publishButton: "Publish",
      searchAnotherClaim: "Search another Claim",
      verificationStatement: "The claim that {title} is {status}.",
      noClaimsFound: "No claims found in this category.",
  
      // Blog Page
      blogTitle: "Blog",
      viewMoreButton: "View more",
      askToEditButton: "Ask to edit",
      date: "Date:",
      noPostsFound: "No posts found in this category.",
  
      // Blog Post Detail Page
      blogPostDetailsTitle: "Blog Post Details",
      searchAnotherBlogPost: "Search another Blog Post",
      noBlogPostFound: "No blog post found. Please go back to the Blog page and select a post to view.",
  
      // Edit Blog Post Page
      editBlogPostTitle: "Edit Blog Post",
      formTitle: "Title",
      formCategory: "Category",
      formDate: "Date",
      formAuthor: "Author",
      formSummary: "Summary",
      formStatus: "Status",
      formImage: "Image",
      statusCorrectOption: "Correct",
      statusFakeOption: "Fake News",
      saveButton: "Save",
      cancelButton: "Cancel",
      noBlogPostFoundEdit: "No blog post found. Please go back to the Blog page and select a post to edit.",
  
      // Contact Us Page
      contactUsTitle: "Contact Us",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      sendMessageButton: "Send Message",
      messageSentSuccess: "Message sent successfully!",
      messageSentError: "Failed to send message. Please try again.",
  
      // Footer
      aboutLink: "About",
      contactLink: "Contact",
      footerText: "Fighting Misinformation in Nigeria with Quick Check Tool © TruthCheck 2025",
    },
    ha: {
      // General
      loading: "Ana lodin...",
      noImageAvailable: "Babu Hoton da Aka Samu",
      backToBlog: "Koma zuwa Blog",
  
      // Header
      quickCheckNav: "Duban Gaggawa",
      verifiedClaimsNav: "Tabbatattun Da'awar",
      blogNav: "Blog",
      contactUsNav: "Tuntuɓe Mu",
      languageEnglish: "Turanci",
      languageHausa: "Hausa",
      languageYoruba: "Yarbanci",
      languageIgbo: "Igbo",
  
      // Quick Check Page
      quickCheckTitle: "Duban Gaggawa",
      enterText: "Shigar da da'awa ko hanyar haɗi anan",
      checkText: "Duba Yanzu",
      analyzing: "Ana nazari...",
      checkAnother: "Duba Wani",
  
      // Verified Claims Page
      verifiedClaimsTitle: "Tabbatattun Da'awar",
      categoryHealth: "Lafiya",
      categoryPolitics: "Siyasa",
      categorySecurity: "Tsaro",
      statusCorrect: "DAIDAI",
      statusFake: "LABARAN KARYA",
      datePublished: "Ranar da Aka Buga:",
      author: "Marubuci:",
      publishButton: "Buga",
      searchAnotherClaim: "Nemo Wata Da'awa",
      verificationStatement: "Da'awar cewa {title} shine {status}.",
      noClaimsFound: "Babu da'awar da aka samu a wannan rukunin.",
  
      // Blog Page
      blogTitle: "Blog",
      viewMoreButton: "Kara kallo",
      askToEditButton: "Nemi gyara",
      date: "Kwanan Wata:",
      noPostsFound: "Babu shafukan da aka samu a wannan rukunin.",
  
      // Blog Post Detail Page
      blogPostDetailsTitle: "Bayanan Blog Post",
      searchAnotherBlogPost: "Nemo Wani Blog Post",
      noBlogPostFound: "Babu shafin blog da aka samu. Da fatan za a koma shafin Blog kuma zaɓi shafin da za a kalla.",
  
      // Edit Blog Post Page
      editBlogPostTitle: "Gyara Blog Post",
      formTitle: "Take",
      formCategory: "Rukuni",
      formDate: "Kwanan Wata",
      formAuthor: "Marubuci",
      formSummary: "Taƙaitawa",
      formStatus: "Matsayi",
      formImage: "Hoto",
      statusCorrectOption: "Daidai",
      statusFakeOption: "Labaran Karya",
      saveButton: "Ajiye",
      cancelButton: "Soke",
      noBlogPostFoundEdit: "Babu shafin blog da aka samu. Da fatan za a koma shafin Blog kuma zaɓi shafin da za a gyara.",
  
      // Contact Us Page
      contactUsTitle: "Tuntuɓe Mu",
      formName: "Suna",
      formEmail: "Imel",
      formMessage: "Saƙo",
      sendMessageButton: "Aika Saƙo",
      messageSentSuccess: "An aika saƙon cikin nasara!",
      messageSentError: "An kasa aika saƙo. Da fatan za a sake gwadawa.",
  
      // Footer
      aboutLink: "Game da Mu",
      contactLink: "Tuntuɓe",
      footerText: "Yaki da Yaɗuwar Labarai a Najeriya tare da Kayan Aikin Duban Gaggawa © TruthCheck 2025",
    },
    yo: {
      // General
      loading: "Ṣíṣe ìdánwò...",
      noImageAvailable: "Kò sí Àwòrán Tó Wà",
      backToBlog: "Padà sí Blog",
  
      // Header
      quickCheckNav: "Ṣayẹwo Kíákíá",
      verifiedClaimsNav: "Awọn Idasọtọ Ti Jẹri",
      blogNav: "Blog",
      contactUsNav: "Kàn Sí Wa",
      languageEnglish: "Èdè Gẹ̀ẹ́sì",
      languageHausa: "Èdè Hausa",
      languageYoruba: "Èdè Yorùbá",
      languageIgbo: "Èdè Igbo",
  
      // Quick Check Page
      quickCheckTitle: "Ṣayẹwo Kíákíá",
      enterText: "Fi ìdílé tàbí URL síbí",
      checkText: "Ṣayẹwo Níbayí",
      analyzing: "Ṣíṣe ìdánwò...",
      checkAnother: "Ṣayẹwo Òmíràn",
  
      // Verified Claims Page
      verifiedClaimsTitle: "Awọn Idasọtọ Ti Jẹri",
      categoryHealth: "Ìlera",
      categoryPolitics: "Òṣèlú",
      categorySecurity: "Ààbò",
      statusCorrect: "TỌ́TỌ́",
      statusFake: "ÌTÀN RỌ́",
      datePublished: "Ọjọ́ tí a tẹ̀jáde:",
      author: "Onkọwe:",
      publishButton: "Tẹ̀jáde",
      searchAnotherClaim: "Wá Idasọtọ Míìràn",
      verificationStatement: "Ìdílé pé {title} jẹ́ {status}.",
      noClaimsFound: "Kò sí ìdílé tí a rí nínú ẹ̀ka yìí.",
  
      // Blog Page
      blogTitle: "Blog",
      viewMoreButton: "Wo diẹ sii",
      askToEditButton: "Beere lati ṣatunkọ",
      date: "Ọjọ́:",
      noPostsFound: "Kò sí àwọn ìwé ìròyìn tí a rí nínú ẹ̀ka yìí.",
  
      // Blog Post Detail Page
      blogPostDetailsTitle: "Àwọn Àlàyé Ìwé Ìròyìn",
      searchAnotherBlogPost: "Wá Ìwé Ìròyìn Míìràn",
      noBlogPostFound: "Kò sí ìwé ìròyìn tí a rí. Jọ̀wọ́ padà sí ojú ìwé Blog kí o yan ìwé ìròyìn láti wo.",
  
      // Edit Blog Post Page
      editBlogPostTitle: "Ṣatunkọ Ìwé Ìròyìn",
      formTitle: "Àkọlé",
      formCategory: "Ẹ̀ka",
      formDate: "Ọjọ́",
      formAuthor: "Onkọwe",
      formSummary: "Àkótọ́",
      formStatus: "Ipo",
      formImage: "Àwòrán",
      statusCorrectOption: "Tọ́tọ́",
      statusFakeOption: "Ìtàn Rọ́",
      saveButton: "Fipamọ",
      cancelButton: "Fagilee",
      noBlogPostFoundEdit: "Kò sí ìwé ìròyìn tí a rí. Jọ̀wọ́ padà sí ojú ìwé Blog kí o yan ìwé ìròyìn láti ṣatunkọ.",
  
      // Contact Us Page
      contactUsTitle: "Kàn Sí Wa",
      formName: "Orúkọ",
      formEmail: "Í-meèlì",
      formMessage: "Ifiranṣẹ",
      sendMessageButton: "Fí Ifiranṣẹ Ránṣẹ",
      messageSentSuccess: "Ifiranṣẹ ti ránṣẹ ní àṣeyọrí!",
      messageSentError: "Kò le ránṣẹ ifiranṣẹ. Jọ̀wọ́ gbìyànjú lẹ́ẹ̀kan síi.",
  
      // Footer
      aboutLink: "Nípa Wa",
      contactLink: "Kàn Sí",
      footerText: "Ìjà Ìtàn Rọ́ ní Nàìjíríà pẹ̀lú Ohun Èlò Ṣayẹwo Kíákíá © TruthCheck 2025",
    },
    ig: {
      // General
      loading: "Na-ebudata...",
      noImageAvailable: "Ọ dịghị Foto Dị",
      backToBlog: "Lagha azụ na Blog",
  
      // Header
      quickCheckNav: "Nyocha Ọsọ",
      verifiedClaimsNav: "Nkwenye Ekwenyere",
      blogNav: "Blog",
      contactUsNav: "Kpọtụrụ Anyị",
      languageEnglish: "Bekee",
      languageHausa: "Hausa",
      languageYoruba: "Yoruba",
      languageIgbo: "Igbo",
  
      // Quick Check Page
      quickCheckTitle: "Nyocha Ọsọ",
      enterText: "Tinye nkwupụta ma ọ bụ URL ebe a",
      checkText: "Nyocha Ugbu a",
      analyzing: "Na-enyocha...",
      checkAnother: "Nyocha Ọzọ",
  
      // Verified Claims Page
      verifiedClaimsTitle: "Nkwenye Ekwenyere",
      categoryHealth: "Ahụike",
      categoryPolitics: "Ndọrọndọrọ ọchịchị",
      categorySecurity: "Nchekwa",
      statusCorrect: "ZIRI EZI",
      statusFake: "AKỤKỌ ỤGỌ",
      datePublished: "Ụbọchị E Bipụtara:",
      author: "Odee:",
      publishButton: "Bipụta",
      searchAnotherClaim: "Chọọ Nkwupụta Ọzọ",
      verificationStatement: "Nkwupụta na {title} bụ {status}.",
      noClaimsFound: "Ọ dịghị nkwupụta achọtara n'ụdị a.",
  
      // Blog Page
      blogTitle: "Blog",
      viewMoreButton: "Lee ọzọ",
      askToEditButton: "Rịọ ka edebelata",
      date: "Ụbọchị:",
      noPostsFound: "Ọ dịghị ozi achọtara n'ụdị a.",
  
      // Blog Post Detail Page
      blogPostDetailsTitle: "Nkọwa Ozi Blog",
      searchAnotherBlogPost: "Chọọ Ozi Blog Ọzọ",
      noBlogPostFound: "Ọ dịghị ozi blog achọtara. Biko laghachi na peeji Blog ma họrọ ozi iji lelee.",
  
      // Edit Blog Post Page
      editBlogPostTitle: "Dezie Ozi Blog",
      formTitle: "Aha",
      formCategory: "Ụdị",
      formDate: "Ụbọchị",
      formAuthor: "Odee",
      formSummary: "Nchịkọta",
      formStatus: "Ọnọdụ",
      formImage: "Foto",
      statusCorrectOption: "Ziri Ezi",
      statusFakeOption: "Akụkọ Ụgọ",
      saveButton: "Chekwaa",
      cancelButton: "Kagbuo",
      noBlogPostFoundEdit: "Ọ dịghị ozi blog achọtara. Biko laghachi na peeji Blog ma họrọ ozi iji debelata.",
  
      // Contact Us Page
      contactUsTitle: "Kpọtụrụ Anyị",
      formName: "Aha",
      formEmail: "E-mail",
      formMessage: "Ozi",
      sendMessageButton: "Zipu Ozi",
      messageSentSuccess: "E zipụrụ ozi nke ọma!",
      messageSentError: "Ọ gaghị zipu ozi. Biko nwaa ọzọ.",
  
      // Footer
      aboutLink: "Gbasara Anyị",
      contactLink: "Kpọtụrụ",
      footerText: "Na-alụ ọgụ megide Akụkọ Ụgọ na Naịjirịa site na Ngwaọrụ Nyocha Ọsọ © TruthCheck 2025",
    },
  };
  
  export default translations;