/**
 * YOUSSEF SHAABAN PORTFOLIO - MAIN JAVASCRIPT
 * Premium interactive features: Mobile Nav, Bilingual, 3D Carousel
 */

(function() {
    'use strict';

    // ========================================
    // CONFIGURATION
    // ========================================
    const CONFIG = {
        loadingDuration: 2000,
        cursorSmoothness: 0.15,
        magneticStrength: 0.3,
        particleCount: window.innerWidth < 768 ? 15 : 30,
        scrollRevealOffset: 100,
        counterDuration: 2000,
        typewriterSpeed: 100,
    };

    // ========================================
    // TRANSLATIONS
    // ========================================
    const TRANSLATIONS = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.services': 'Services',
            'nav.projects': 'Projects',
            'nav.journey': 'Journey',
            'nav.contact': 'Contact',
            'hero.available': 'Available for opportunities',
            'hero.description': "I craft beautiful, performant, and accessible web experiences. Passionate about clean code, modern design, and creating products that make a difference.",
            'hero.viewProjects': 'View Projects',
            'hero.contactMe': 'Contact Me',
            'hero.downloadResume': 'Download Resume',
            'hero.scroll': 'Scroll to explore',
            'about.label': 'About Me',
            'about.title': 'Passionate about building the ',
            'about.titleGradient': 'modern web',
            'about.card1Title': 'Clean Architecture',
            'about.card1Text': 'Writing maintainable, scalable code that stands the test of time.',
            'about.card2Title': 'Performance First',
            'about.card2Text': 'Optimizing every millisecond for the best user experience.',
            'about.p1': "I'm a <strong>dedicated Front-End Developer</strong> with a deep passion for creating exceptional digital experiences. My journey in web development started with a curiosity about how websites work, which quickly grew into an obsessive pursuit of mastering the craft.",
            'about.p2': "I believe in the power of <strong>continuous learning</strong> and staying ahead of industry trends. Every project is an opportunity to push boundaries, solve complex problems, and deliver products that users genuinely enjoy.",
            'about.p3': "My approach combines <strong>technical excellence</strong> with a keen eye for design. I don't just write code — I craft experiences. From responsive layouts to smooth animations, every detail matters.",
            'about.h1Title': 'Problem Solver',
            'about.h1Text': 'Tackling complex challenges with creative solutions',
            'about.h2Title': 'Continuous Learner',
            'about.h2Text': 'Always exploring new technologies and techniques',
            'about.h3Title': 'User-Focused',
            'about.h3Text': 'Creating experiences that users love and remember',
            'stats.projects': 'Projects Built',
            'stats.tech': 'Technologies Learned',
            'stats.years': 'Years Learning',
            'skills.label': 'My Skills',
            'skills.title': 'Technologies & ',
            'skills.titleGradient': 'Expertise',
            'skills.desc': 'A comprehensive toolkit for building modern web experiences.',
            'skills.html': 'Semantic markup, accessibility, modern structure',
            'skills.css': 'Animations, Grid, Flexbox, modern styling',
            'skills.js': 'ES6+, DOM manipulation, async programming',
            'skills.responsiveName': 'Responsive Design',
            'skills.responsive': 'Mobile-first, adaptive layouts, all devices',
            'skills.git': 'Version control, branching, collaboration',
            'skills.github': 'Repositories, open source, project hosting',
            'skills.uiName': 'UI Design',
            'skills.ui': 'Visual design, prototyping, user interfaces',
            'skills.a11yName': 'Accessibility',
            'skills.a11y': 'WCAG standards, inclusive design, ARIA',
            'skills.perfName': 'Performance',
            'skills.perf': 'Optimization, Lighthouse, fast loading',
            'services.label': 'Services',
            'services.title': 'What I Can ',
            'services.titleGradient': 'Build',
            'services.desc': 'Transforming ideas into reality with modern web technologies.',
            'services.c1Title': 'Business Websites',
            'services.c1Desc': 'Professional corporate websites that establish credibility and drive conversions.',
            'services.c2Title': 'Landing Pages',
            'services.c2Desc': 'High-converting landing pages designed to capture leads and drive action.',
            'services.c3Title': 'Personal Portfolios',
            'services.c3Desc': 'Stunning portfolio websites that showcase your work and impress clients.',
            'services.c4Title': 'Educational Platforms',
            'services.c4Desc': 'Interactive learning platforms with engaging user experiences.',
            'services.c5Title': 'Responsive Websites',
            'services.c5Desc': 'Websites that look and work perfectly on every device and screen size.',
            'services.c6Title': 'Interactive UI',
            'services.c6Desc': 'Rich interfaces with animations, transitions, and delightful interactions.',
            'services.c7Title': 'Dashboard Interfaces',
            'services.c7Desc': 'Data-rich dashboards with charts, tables, and intuitive navigation.',
            'services.c8Title': 'Modern Web Apps',
            'services.c8Desc': 'Full-featured web applications with dynamic functionality and API integration.',
            'projects.label': 'Portfolio',
            'projects.title': 'Featured ',
            'projects.titleGradient': 'Projects',
            'projects.desc': 'A selection of my best work. Each project represents a unique challenge and solution.',
            'projects.featured': 'Featured',
            'projects.best': 'Best Project',
            'projects.visitSite': 'Visit Website',
            'projects.liveDemo': 'Live Demo',
            'projects.codecoachDesc': 'AI-powered educational platform designed to help users learn programming through interactive experiences. Features intelligent code coaching and personalized learning paths.',
            'projects.otherProjects': 'Other Projects',
            'projects.aitoolsDesc': 'A comprehensive directory of AI tools categorized for easy discovery and use.',
            'projects.mohamedDesc': 'A modern personal portfolio website with elegant design and smooth interactions.',
            'projects.decorationDesc': 'A modern decoration and interior design website with sophisticated visual presentation.',
            'journey.label': 'My Journey',
            'journey.title': 'Learning ',
            'journey.titleGradient': 'Path',
            'journey.desc': 'The milestones that shaped my development career.',
            'journey.t1Date': 'Starting Point',
            'journey.t1Title': 'Started Learning HTML',
            'journey.t1Desc': 'Began my web development journey by learning the foundational building blocks of the web. Mastered semantic markup and document structure.',
            'journey.t2Date': 'Next Step',
            'journey.t2Title': 'Learned CSS',
            'journey.t2Desc': 'Discovered the art of styling and layout. Learned Flexbox, Grid, animations, and responsive design principles.',
            'journey.t3Date': 'Growing',
            'journey.t3Title': 'Learned JavaScript',
            'journey.t3Desc': 'Added interactivity and dynamic behavior to websites. Mastered DOM manipulation, events, and modern ES6+ features.',
            'journey.t4Date': 'Building',
            'journey.t4Title': 'Built Real Projects',
            'journey.t4Desc': 'Applied my skills to build complete, production-ready websites and applications. Learned by doing and solving real problems.',
            'journey.t5Date': 'Present',
            'journey.t5Title': 'Continuous Improvement',
            'journey.t5Desc': 'Never stop learning. Currently exploring advanced concepts, best practices, and new technologies to stay at the cutting edge.',
            'contact.label': 'Get In Touch',
            'contact.title': "Let's Work ",
            'contact.titleGradient': 'Together',
            'contact.desc': "Have a project in mind? I'd love to hear about it. Let's create something amazing.",
            'contact.phone': 'Phone',
            'contact.callNow': 'Call Now',
            'contact.yourName': 'Your Name',
            'contact.emailAddress': 'Email Address',
            'contact.message': 'Message',
            'contact.nameError': 'Please enter your name',
            'contact.emailError': 'Please enter a valid email',
            'contact.messageError': 'Please enter your message',
            'contact.sendMessage': 'Send Message',
            'footer.tagline': 'Front-End Developer crafting modern web experiences.',
            'footer.quickLinks': 'Quick Links',
            'footer.navigation': 'Navigation',
            'footer.contact': 'Contact',
            'footer.resume': 'Resume',
            'footer.rights': 'All rights reserved.',
            'footer.crafted': 'Crafted with passion and precision.',
        },
        ar: {
            'nav.home': 'الرئيسية',
            'nav.about': 'عني',
            'nav.skills': 'المهارات',
            'nav.services': 'الخدمات',
            'nav.projects': 'المشاريع',
            'nav.journey': 'المسيرة',
            'nav.contact': 'تواصل معي',
            'hero.available': 'متاح للفرص الجديدة',
            'hero.description': 'أصنع تجارب ويب جميلة وسريعة وسهلة الاستخدام. شغوف بالكود النظيف والتصميم العصري، وإنشاء منتجات تُحدث فارقاً حقيقياً.',
            'hero.viewProjects': 'عرض المشاريع',
            'hero.contactMe': 'تواصل معي',
            'hero.downloadResume': 'تحميل السيرة الذاتية',
            'hero.scroll': 'مرر للاستكشاف',
            'about.label': 'عني',
            'about.title': 'شغوف ببناء ',
            'about.titleGradient': 'الويب الحديث',
            'about.card1Title': 'هيكل برمجي نظيف',
            'about.card1Text': 'كتابة كود قابل للصيانة والتوسع يصمد أمام اختبار الزمن.',
            'about.card2Title': 'الأداء أولاً',
            'about.card2Text': 'تحسين كل ميللي ثانية لتقديم أفضل تجربة مستخدم.',
            'about.p1': 'أنا <strong>مطور واجهات أمامية</strong> متفاني، لديّ شغف عميق بإنشاء تجارب رقمية استثنائية. بدأت رحلتي في تطوير الويب بفضول حول آلية عمل المواقع، سرعان ما تحول إلى سعي دؤوب لإتقان هذه الحرفة.',
            'about.p2': 'أؤمن بقوة <strong>التعلم المستمر</strong> ومواكبة أحدث التطورات. كل مشروع هو فرصة لدفع الحدود وحل تحديات معقدة وتسليم منتجات يستمتع بها المستخدمون.',
            'about.p3': 'يجمع أسلوبي بين <strong>التميز التقني</strong> وحسٍّ تصميمي متطور. أنا لا أكتب كوداً فقط — بل أصنع تجارب. من التصميم المتجاوب إلى الحركات السلسة، كل تفصيل يهم.',
            'about.h1Title': 'حلّال مشكلات',
            'about.h1Text': 'مواجهة التحديات المعقدة بحلول إبداعية',
            'about.h2Title': 'متعلم مستمر',
            'about.h2Text': 'دائماً في استكشاف التقنيات والأساليب الجديدة',
            'about.h3Title': 'مُركّز على المستخدم',
            'about.h3Text': 'إنشاء تجارب يحبها المستخدمون ويتذكرونها',
            'stats.projects': 'مشروع منجز',
            'stats.tech': 'تقنية مُتعلَّمة',
            'stats.years': 'سنوات تعلّم',
            'skills.label': 'مهاراتي',
            'skills.title': 'التقنيات ',
            'skills.titleGradient': 'والخبرات',
            'skills.desc': 'مجموعة أدوات شاملة لبناء تجارب ويب حديثة.',
            'skills.html': 'توصيف دلالي، إتاحة، هيكل حديث',
            'skills.css': 'حركات، Grid، Flexbox، تنسيق حديث',
            'skills.js': 'ES6+، معالجة DOM، البرمجة غير المتزامنة',
            'skills.responsiveName': 'التصميم المتجاوب',
            'skills.responsive': 'أولوية الجوال، تخطيطات تكيفية لجميع الأجهزة',
            'skills.git': 'التحكم بالإصدار، التفريع، التعاون',
            'skills.github': 'المستودعات، المصدر المفتوح، استضافة المشاريع',
            'skills.uiName': 'تصميم واجهات المستخدم',
            'skills.ui': 'تصميم مرئي، نمذجة، واجهات مستخدم',
            'skills.a11yName': 'إمكانية الوصول',
            'skills.a11y': 'معايير WCAG، تصميم شامل، ARIA',
            'skills.perfName': 'الأداء',
            'skills.perf': 'تحسين، Lighthouse، تحميل سريع',
            'services.label': 'الخدمات',
            'services.title': 'ما يمكنني ',
            'services.titleGradient': 'بناؤه',
            'services.desc': 'تحويل الأفكار إلى واقع باستخدام تقنيات الويب الحديثة.',
            'services.c1Title': 'مواقع الأعمال',
            'services.c1Desc': 'مواقع مؤسسية احترافية تُرسّخ المصداقية وتحقق التحويلات.',
            'services.c2Title': 'صفحات الهبوط',
            'services.c2Desc': 'صفحات هبوط عالية التحويل لالتقاط العملاء المحتملين.',
            'services.c3Title': 'مواقع المحافظ الشخصية',
            'services.c3Desc': 'مواقع محفظة مذهلة تعرض أعمالك وتبهر العملاء.',
            'services.c4Title': 'المنصات التعليمية',
            'services.c4Desc': 'منصات تعلم تفاعلية بتجارب مستخدم جذابة.',
            'services.c5Title': 'المواقع المتجاوبة',
            'services.c5Desc': 'مواقع تبدو وتعمل بشكل مثالي على كل جهاز.',
            'services.c6Title': 'واجهات تفاعلية',
            'services.c6Desc': 'واجهات غنية بالحركات والانتقالات والتفاعلات المبهجة.',
            'services.c7Title': 'لوحات التحكم',
            'services.c7Desc': 'لوحات بيانات غنية بالرسوم والجداول والتنقل السلس.',
            'services.c8Title': 'تطبيقات الويب الحديثة',
            'services.c8Desc': 'تطبيقات ويب متكاملة بوظائف ديناميكية وتكامل API.',
            'projects.label': 'أعمالي',
            'projects.title': 'المشاريع ',
            'projects.titleGradient': 'المميزة',
            'projects.desc': 'مختارات من أفضل أعمالي. كل مشروع يمثّل تحدياً فريداً وحلاً إبداعياً.',
            'projects.featured': 'مميز',
            'projects.best': 'أفضل مشروع',
            'projects.visitSite': 'زيارة الموقع',
            'projects.liveDemo': 'عرض حي',
            'projects.codecoachDesc': 'منصة تعليمية مدعومة بالذكاء الاصطناعي لتعلم البرمجة من خلال تجارب تفاعلية. تتضمن إرشاداً ذكياً للكود ومسارات تعلّم مخصصة.',
            'projects.otherProjects': 'مشاريع أخرى',
            'projects.aitoolsDesc': 'دليل شامل لأدوات الذكاء الاصطناعي مصنّفة للاستكشاف السهل.',
            'projects.mohamedDesc': 'موقع محفظة شخصية عصري بتصميم أنيق وتفاعلات سلسة.',
            'projects.decorationDesc': 'موقع ديكور وتصميم داخلي عصري بعرض بصري راقٍ.',
            'journey.label': 'مسيرتي',
            'journey.title': 'مسار ',
            'journey.titleGradient': 'التعلم',
            'journey.desc': 'المحطات التي شكّلت مسيرتي في التطوير.',
            'journey.t1Date': 'نقطة البداية',
            'journey.t1Title': 'بدأت تعلّم HTML',
            'journey.t1Desc': 'بدأت رحلتي في تطوير الويب بتعلّم اللبنات الأساسية للويب. أتقنت التوصيف الدلالي وهيكل المستند.',
            'journey.t2Date': 'الخطوة التالية',
            'journey.t2Title': 'تعلّمت CSS',
            'journey.t2Desc': 'اكتشفت فن التنسيق والتخطيط. تعلّمت Flexbox وGrid والحركات ومبادئ التصميم المتجاوب.',
            'journey.t3Date': 'النمو',
            'journey.t3Title': 'تعلّمت JavaScript',
            'journey.t3Desc': 'أضفت التفاعلية والسلوك الديناميكي للمواقع. أتقنت معالجة DOM والأحداث وميزات ES6+ الحديثة.',
            'journey.t4Date': 'البناء',
            'journey.t4Title': 'بنيت مشاريع حقيقية',
            'journey.t4Desc': 'طبّقت مهاراتي لبناء مواقع وتطبيقات كاملة جاهزة للإنتاج. تعلّمت بالتطبيق وحل المشكلات الحقيقية.',
            'journey.t5Date': 'الحاضر',
            'journey.t5Title': 'التحسين المستمر',
            'journey.t5Desc': 'لا أتوقف أبداً عن التعلّم. أستكشف حالياً مفاهيم متقدمة وأفضل الممارسات والتقنيات الجديدة للبقاء في الطليعة.',
            'contact.label': 'تواصل معي',
            'contact.title': 'لنعمل ',
            'contact.titleGradient': 'معاً',
            'contact.desc': 'هل لديك مشروع في ذهنك؟ يسعدني الاستماع إليك. لنصنع شيئاً رائعاً.',
            'contact.phone': 'الهاتف',
            'contact.callNow': 'اتصل الآن',
            'contact.yourName': 'اسمك',
            'contact.emailAddress': 'البريد الإلكتروني',
            'contact.message': 'الرسالة',
            'contact.nameError': 'يرجى إدخال اسمك',
            'contact.emailError': 'يرجى إدخال بريد إلكتروني صحيح',
            'contact.messageError': 'يرجى إدخال رسالتك',
            'contact.sendMessage': 'إرسال الرسالة',
            'footer.tagline': 'مطور واجهات أمامية يصنع تجارب ويب عصرية.',
            'footer.quickLinks': 'روابط سريعة',
            'footer.navigation': 'التنقل',
            'footer.contact': 'تواصل',
            'footer.resume': 'السيرة الذاتية',
            'footer.rights': 'جميع الحقوق محفوظة.',
            'footer.crafted': 'صُنع بشغف ودقة.',
        }
    };

    const TYPEWRITER_TEXTS = {
        en: ['Front-End Developer', 'UI Designer', 'Problem Solver', 'Continuous Learner'],
        ar: ['مطور واجهات أمامية', 'مصمم UI', 'محلّل مشكلات', 'متعلم مستمر'],
    };

    // ========================================
    // DOM ELEMENTS
    // ========================================
    const DOM = {
        get body() { return document.body; },
        get html() { return document.documentElement; },
        loadingScreen: document.getElementById('loading-screen'),
        loadingBar: document.getElementById('loading-bar'),
        loadingPercentage: document.getElementById('loading-percentage'),
        loadingStatus: document.getElementById('loading-status'),
        cursor: document.getElementById('cursor'),
        cursorDot: document.getElementById('cursor-dot'),
        themeToggle: document.getElementById('theme-toggle'),
        bgCanvas: document.getElementById('bg-canvas'),
        navbar: document.getElementById('navbar'),
        navToggle: document.getElementById('nav-toggle'),
        navMenu: document.getElementById('nav-menu'),
        mobileDrawer: document.getElementById('mobile-drawer'),
        mobileDrawerClose: document.getElementById('mobile-drawer-close'),
        mobileOverlay: document.getElementById('mobile-menu-overlay'),
        langToggle: document.getElementById('lang-toggle'),
        langLabel: document.getElementById('lang-label'),
        backToTop: document.getElementById('back-to-top'),
        currentYear: document.getElementById('current-year'),
        typewriter: document.getElementById('typewriter'),
        contactForm: document.getElementById('contact-form'),
    };

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    const utils = {
        lerp: (start, end, factor) => start + (end - start) * factor,
        clamp: (value, min, max) => Math.min(Math.max(value, min), max),
        random: (min, max) => Math.random() * (max - min) + min,
        isTouchDevice: () => window.matchMedia('(hover: none)').matches,
        prefersReducedMotion: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        debounce: (fn, delay) => {
            let timeout;
            return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => fn(...args), delay); };
        },
        throttle: (fn, limit) => {
            let inThrottle;
            return (...args) => {
                if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => inThrottle = false, limit); }
            };
        },
    };

    // ========================================
    // LANGUAGE SYSTEM
    // ========================================
    const LanguageSystem = {
        currentLang: 'en',

        init() {
            const saved = localStorage.getItem('language') || 'en';
            this.apply(saved, false);
            DOM.langToggle?.addEventListener('click', () => this.toggle());
        },

        toggle() {
            const next = this.currentLang === 'en' ? 'ar' : 'en';
            this.apply(next, true);
        },

        apply(lang, save = true) {
            this.currentLang = lang;
            const html = document.documentElement;

            if (lang === 'ar') {
                html.setAttribute('lang', 'ar');
                html.setAttribute('dir', 'rtl');
                if (DOM.langLabel) DOM.langLabel.textContent = 'EN';
            } else {
                html.setAttribute('lang', 'en');
                html.setAttribute('dir', 'ltr');
                if (DOM.langLabel) DOM.langLabel.textContent = 'AR';
            }

            // Translate all elements with data-i18n
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const text = TRANSLATIONS[lang]?.[key];
                if (text !== undefined) {
                    el.innerHTML = text;
                }
            });

            // Update placeholders
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const msgInput = document.getElementById('message');
            if (nameInput) nameInput.placeholder = lang === 'ar' ? 'محمد أحمد' : 'John Doe';
            if (emailInput) emailInput.placeholder = lang === 'ar' ? 'example@mail.com' : 'john@example.com';
            if (msgInput) msgInput.placeholder = lang === 'ar' ? 'أخبرني عن مشروعك...' : 'Tell me about your project...';

            // Update typewriter texts
            TypewriterEffect.texts = TYPEWRITER_TEXTS[lang];
            TypewriterEffect.textIndex = 0;
            TypewriterEffect.charIndex = 0;
            TypewriterEffect.isDeleting = false;

            if (save) localStorage.setItem('language', lang);
        }
    };

    // ========================================
    // LOADING SCREEN
    // ========================================
    const LoadingScreen = {
        init() {
            if (!DOM.loadingScreen) return;
            const steps = [
                { progress: 15, text: 'Loading assets...' },
                { progress: 35, text: 'Initializing animations...' },
                { progress: 55, text: 'Setting up particles...' },
                { progress: 75, text: 'Preparing content...' },
                { progress: 90, text: 'Almost ready...' },
                { progress: 100, text: 'Welcome!' },
            ];
            let currentStep = 0;
            const stepDuration = CONFIG.loadingDuration / steps.length;
            const update = () => {
                if (currentStep >= steps.length) { this.hide(); return; }
                const step = steps[currentStep];
                if (DOM.loadingBar) DOM.loadingBar.style.width = step.progress + '%';
                if (DOM.loadingPercentage) DOM.loadingPercentage.textContent = step.progress;
                if (DOM.loadingStatus) DOM.loadingStatus.textContent = step.text;
                currentStep++;
                setTimeout(update, stepDuration);
            };
            update();
        },
        hide() {
            DOM.loadingScreen.classList.add('hidden');
            DOM.body.classList.remove('loading');
            DOM.body.classList.add('loaded');
            setTimeout(() => {
                DOM.loadingScreen.style.display = 'none';
                ScrollReveal.refresh();
            }, 800);
        }
    };

    // ========================================
    // CUSTOM CURSOR
    // ========================================
    const CustomCursor = {
        mouseX: 0, mouseY: 0, cursorX: 0, cursorY: 0, dotX: 0, dotY: 0,
        init() {
            if (utils.isTouchDevice() || !DOM.cursor || !DOM.cursorDot) return;
            DOM.body.classList.add('custom-cursor');
            DOM.cursor.style.display = 'block';
            DOM.cursorDot.style.display = 'block';
            document.addEventListener('mousemove', (e) => { this.mouseX = e.clientX; this.mouseY = e.clientY; });
            this.setupHoverEffects();
            this.animate();
        },
        setupHoverEffects() {
            const els = document.querySelectorAll('a, button, .magnetic-btn, .skill-card, .project-card, .carousel-card');
            els.forEach(el => {
                el.addEventListener('mouseenter', () => DOM.cursor?.classList.add('hover'));
                el.addEventListener('mouseleave', () => DOM.cursor?.classList.remove('hover'));
            });
        },
        animate() {
            this.cursorX = utils.lerp(this.cursorX, this.mouseX, CONFIG.cursorSmoothness);
            this.cursorY = utils.lerp(this.cursorY, this.mouseY, CONFIG.cursorSmoothness);
            this.dotX = utils.lerp(this.dotX, this.mouseX, 0.5);
            this.dotY = utils.lerp(this.dotY, this.mouseY, 0.5);
            if (DOM.cursor) { DOM.cursor.style.left = this.cursorX + 'px'; DOM.cursor.style.top = this.cursorY + 'px'; }
            if (DOM.cursorDot) { DOM.cursorDot.style.left = this.dotX + 'px'; DOM.cursorDot.style.top = this.dotY + 'px'; }
            requestAnimationFrame(() => this.animate());
        }
    };

    // ========================================
    // MAGNETIC BUTTONS
    // ========================================
    const MagneticButtons = {
        init() {
            if (utils.isTouchDevice()) return;
            document.querySelectorAll('.magnetic-btn').forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    btn.style.transform = `translate(${x * CONFIG.magneticStrength}px, ${y * CONFIG.magneticStrength}px)`;
                });
                btn.addEventListener('mouseleave', () => btn.style.transform = 'translate(0, 0)');
            });
        }
    };

    // ========================================
    // THEME SWITCHER
    // ========================================
    const ThemeSwitcher = {
        currentTheme: 'dark',
        init() {
            const saved = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.currentTheme = saved || (prefersDark ? 'dark' : 'light');
            this.applyTheme(this.currentTheme);
            DOM.themeToggle?.addEventListener('click', () => this.toggle());
        },
        toggle() {
            this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.applyTheme(this.currentTheme);
            localStorage.setItem('theme', this.currentTheme);
        },
        applyTheme(theme) {
            DOM.html.setAttribute('data-theme', theme);
        }
    };

    // ========================================
    // PARTICLE BACKGROUND
    // ========================================
    const ParticleBackground = {
        canvas: null, ctx: null, particles: [], isActive: true,
        init() {
            if (utils.prefersReducedMotion() || !DOM.bgCanvas) return;
            this.canvas = DOM.bgCanvas;
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            this.createParticles();
            this.animate();
            window.addEventListener('resize', utils.debounce(() => { this.resize(); this.createParticles(); }, 250));
            document.addEventListener('visibilitychange', () => { this.isActive = !document.hidden; if (this.isActive) this.animate(); });
        },
        resize() { this.canvas.width = window.innerWidth; this.canvas.height = window.innerHeight; },
        createParticles() {
            this.particles = [];
            for (let i = 0; i < CONFIG.particleCount; i++) {
                this.particles.push({
                    x: utils.random(0, this.canvas.width), y: utils.random(0, this.canvas.height),
                    vx: utils.random(-0.3, 0.3), vy: utils.random(-0.3, 0.3),
                    radius: utils.random(1, 3), opacity: utils.random(0.1, 0.4),
                });
            }
        },
        animate() {
            if (!this.isActive) return;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.particles.forEach((p, i) => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = this.canvas.width;
                if (p.x > this.canvas.width) p.x = 0;
                if (p.y < 0) p.y = this.canvas.height;
                if (p.y > this.canvas.height) p.y = 0;
                this.ctx.beginPath(); this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`; this.ctx.fill();
                for (let j = i + 1; j < this.particles.length; j++) {
                    const p2 = this.particles[j];
                    const dx = p.x - p2.x, dy = p.y - p2.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < 150) {
                        this.ctx.beginPath(); this.ctx.moveTo(p.x, p.y); this.ctx.lineTo(p2.x, p2.y);
                        this.ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - dist / 150)})`;
                        this.ctx.lineWidth = 0.5; this.ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(() => this.animate());
        }
    };

    // ========================================
    // NAVIGATION
    // ========================================
    const Navigation = {
        isOpen: false, lastScroll: 0,
        init() {
            window.addEventListener('scroll', utils.throttle(() => this.handleScroll(), 100));

            // Desktop hamburger (should be hidden, but safety)
            DOM.navToggle?.addEventListener('click', () => this.toggleMobileDrawer());

            // Mobile drawer close
            DOM.mobileDrawerClose?.addEventListener('click', () => this.closeMobileDrawer());
            DOM.mobileOverlay?.addEventListener('click', () => this.closeMobileDrawer());

            // Mobile nav links close drawer
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.addEventListener('click', () => this.closeMobileDrawer());
            });

            // Desktop nav link click close
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.closeMobileDrawer());
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    const href = anchor.getAttribute('href');
                    if (href === '#') return;
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offset = DOM.navbar?.offsetHeight || 72;
                        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                });
            });

            // Keyboard: close drawer on Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) this.closeMobileDrawer();
            });
        },
        handleScroll() {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) DOM.navbar?.classList.add('scrolled');
            else DOM.navbar?.classList.remove('scrolled');
            if (currentScroll > 500) DOM.backToTop?.classList.add('visible');
            else DOM.backToTop?.classList.remove('visible');
            this.lastScroll = currentScroll;
        },
        toggleMobileDrawer() {
            this.isOpen ? this.closeMobileDrawer() : this.openMobileDrawer();
        },
        openMobileDrawer() {
            this.isOpen = true;
            DOM.mobileDrawer?.classList.add('open');
            DOM.mobileDrawer?.removeAttribute('aria-hidden');
            DOM.mobileOverlay?.classList.add('active');
            DOM.navToggle?.classList.add('active');
            DOM.navToggle?.setAttribute('aria-expanded', 'true');
            DOM.body.style.overflow = 'hidden';
        },
        closeMobileDrawer() {
            this.isOpen = false;
            DOM.mobileDrawer?.classList.remove('open');
            DOM.mobileDrawer?.setAttribute('aria-hidden', 'true');
            DOM.mobileOverlay?.classList.remove('active');
            DOM.navToggle?.classList.remove('active');
            DOM.navToggle?.setAttribute('aria-expanded', 'false');
            DOM.body.style.overflow = '';
        }
    };

    // ========================================
    // SCROLL REVEAL
    // ========================================
    const ScrollReveal = {
        observer: null,
        init() {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        const statNumber = entry.target.querySelector('.stat-number');
                        if (statNumber) CounterAnimation.animate(statNumber);
                        this.observer.unobserve(entry.target);
                    }
                });
            }, { root: null, rootMargin: `0px 0px -${CONFIG.scrollRevealOffset}px 0px`, threshold: 0.1 });
            this.refresh();
        },
        refresh() {
            document.querySelectorAll('[data-reveal]').forEach(el => this.observer.observe(el));
        }
    };

    // ========================================
    // COUNTER ANIMATION
    // ========================================
    const CounterAnimation = {
        animate(element) {
            const target = parseInt(element.dataset.target) || 0;
            const suffix = element.dataset.suffix || '';
            const duration = CONFIG.counterDuration;
            const startTime = performance.now();
            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                element.textContent = Math.round(target * easeOut) + suffix;
                if (progress < 1) requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
        }
    };

    // ========================================
    // TYPEWRITER EFFECT
    // ========================================
    const TypewriterEffect = {
        texts: TYPEWRITER_TEXTS.en,
        textIndex: 0, charIndex: 0, isDeleting: false,
        init() {
            if (!DOM.typewriter) return;
            this.type();
        },
        type() {
            const currentText = this.texts[this.textIndex % this.texts.length];
            if (this.isDeleting) {
                DOM.typewriter.textContent = currentText.substring(0, this.charIndex - 1);
                this.charIndex--;
            } else {
                DOM.typewriter.textContent = currentText.substring(0, this.charIndex + 1);
                this.charIndex++;
            }
            let typeSpeed = CONFIG.typewriterSpeed;
            if (this.isDeleting) typeSpeed /= 2;
            if (!this.isDeleting && this.charIndex === currentText.length) { typeSpeed = 2000; this.isDeleting = true; }
            else if (this.isDeleting && this.charIndex === 0) { this.isDeleting = false; this.textIndex = (this.textIndex + 1) % this.texts.length; typeSpeed = 500; }
            setTimeout(() => this.type(), typeSpeed);
        }
    };

    // ========================================
    // 3D CAROUSEL
    // ========================================
    const Carousel3D = {
        currentIndex: 0,
        totalCards: 3,
        isDragging: false,
        startX: 0,
        dragThreshold: 60,
        cards: [],

        init() {
            this.cards = Array.from(document.querySelectorAll('.carousel-card'));
            if (this.cards.length === 0) return;
            this.totalCards = this.cards.length;
            this.render();
            this.bindEvents();
        },

        render() {
            this.cards.forEach((card, i) => {
                card.classList.remove('pos-center', 'pos-left', 'pos-right', 'pos-hidden-left', 'pos-hidden-right');
                const offset = (i - this.currentIndex + this.totalCards) % this.totalCards;
                if (offset === 0) {
                    card.classList.add('pos-center');
                } else if (offset === 1) {
                    card.classList.add('pos-right');
                } else if (offset === this.totalCards - 1) {
                    card.classList.add('pos-left');
                } else if (offset === 2) {
                    card.classList.add('pos-hidden-right');
                } else {
                    card.classList.add('pos-hidden-left');
                }
            });

            // Update dots
            document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === this.currentIndex);
            });
        },

        next() {
            this.currentIndex = (this.currentIndex + 1) % this.totalCards;
            this.render();
        },

        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
            this.render();
        },

        goTo(index) {
            this.currentIndex = index;
            this.render();
        },

        bindEvents() {
            // Arrow buttons
            document.getElementById('carousel-prev')?.addEventListener('click', () => this.prev());
            document.getElementById('carousel-next')?.addEventListener('click', () => this.next());

            // Dot buttons
            document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                dot.addEventListener('click', () => this.goTo(i));
            });

            // Click on side cards to navigate
            const container = document.getElementById('carousel-container');
            if (!container) return;

            // Mouse drag
            container.addEventListener('mousedown', (e) => {
                this.isDragging = true;
                this.startX = e.clientX;
                container.style.cursor = 'grabbing';
            });
            window.addEventListener('mousemove', (e) => {
                if (!this.isDragging) return;
            });
            window.addEventListener('mouseup', (e) => {
                if (!this.isDragging) return;
                this.isDragging = false;
                container.style.cursor = '';
                const diff = e.clientX - this.startX;
                if (Math.abs(diff) > this.dragThreshold) {
                    if (diff > 0) this.prev();
                    else this.next();
                }
            });

            // Touch swipe
            container.addEventListener('touchstart', (e) => {
                this.startX = e.touches[0].clientX;
            }, { passive: true });
            container.addEventListener('touchend', (e) => {
                const diff = e.changedTouches[0].clientX - this.startX;
                if (Math.abs(diff) > this.dragThreshold) {
                    const isRTL = document.documentElement.dir === 'rtl';
                    if (isRTL) { if (diff > 0) this.next(); else this.prev(); }
                    else { if (diff > 0) this.prev(); else this.next(); }
                }
            }, { passive: true });

            // Click on pos-left or pos-right cards
            this.cards.forEach((card, i) => {
                card.addEventListener('click', (e) => {
                    if (card.classList.contains('pos-left')) { e.preventDefault(); this.prev(); }
                    else if (card.classList.contains('pos-right')) { e.preventDefault(); this.next(); }
                });
            });

            // Auto-advance every 5s
            let autoPlay = setInterval(() => this.next(), 5000);
            container.addEventListener('mouseenter', () => clearInterval(autoPlay));
            container.addEventListener('mouseleave', () => { autoPlay = setInterval(() => this.next(), 5000); });
        }
    };

    // ========================================
    // FORM VALIDATION
    // ========================================
    const FormValidation = {
        init() {
            if (!DOM.contactForm) return;
            DOM.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
            ['name', 'email', 'message'].forEach(fieldName => {
                const field = document.getElementById(fieldName);
                field?.addEventListener('blur', () => this.validateField(field));
                field?.addEventListener('input', () => field.closest('.form-group')?.classList.remove('has-error'));
            });
        },
        validateField(field) {
            const formGroup = field.closest('.form-group');
            let isValid = true;
            if (field.hasAttribute('required') && !field.value.trim()) isValid = false;
            if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) isValid = false;
            if (!isValid) formGroup?.classList.add('has-error');
            return isValid;
        },
        handleSubmit(e) {
            e.preventDefault();
            let isValid = true;
            ['name', 'email', 'message'].forEach(fn => {
                const field = document.getElementById(fn);
                if (field && !this.validateField(field)) isValid = false;
            });
            if (isValid) {
                const submitBtn = DOM.contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Message Sent!`;
                submitBtn.disabled = true;
                setTimeout(() => { submitBtn.innerHTML = originalText; submitBtn.disabled = false; DOM.contactForm.reset(); }, 3000);
            }
        }
    };

    // ========================================
    // ACTIVE NAV LINK
    // ========================================
    const ActiveNavLink = {
        init() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
            window.addEventListener('scroll', utils.throttle(() => {
                let current = '';
                const scrollPos = window.pageYOffset + (DOM.navbar?.offsetHeight || 72) + 100;
                sections.forEach(section => { if (section.offsetTop <= scrollPos) current = section.getAttribute('id'); });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
                });
            }, 100));
        }
    };

    // ========================================
    // SKILL CARD BORDERS
    // ========================================
    const SkillCardBorders = {
        init() {
            document.querySelectorAll('.skill-card').forEach(card => {
                const border = card.querySelector('.skill-card-border');
                if (!border) return;
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    border.style.background = `radial-gradient(circle 120px at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(139, 92, 246, 0.6), rgba(59, 130, 246, 0.3), transparent)`;
                });
                card.addEventListener('mouseleave', () => { border.style.background = 'var(--gradient-primary)'; });
            });
        }
    };

    // ========================================
    // TIMELINE ANIMATION
    // ========================================
    const TimelineAnimation = {
        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            document.querySelectorAll('.timeline-item').forEach((item, i) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s`;
                observer.observe(item);
            });
        }
    };

    // ========================================
    // PARALLAX EFFECT
    // ========================================
    const ParallaxEffect = {
        init() {
            if (utils.isTouchDevice() || utils.prefersReducedMotion()) return;
            const heroGlows = document.querySelectorAll('.hero-glow, .hero-glow-2');
            window.addEventListener('scroll', utils.throttle(() => {
                const scrollY = window.pageYOffset;
                heroGlows.forEach((glow, i) => {
                    glow.style.transform = `translateY(${scrollY * (i === 0 ? 0.2 : -0.15)}px)`;
                });
            }, 16));
        }
    };

    // ========================================
    // STAT COUNTER TRIGGER
    // ========================================
    const StatCounterTrigger = {
        init() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const statNumber = entry.target.querySelector('.stat-number');
                        if (statNumber) CounterAnimation.animate(statNumber);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            document.querySelectorAll('.stat-card').forEach(card => observer.observe(card));
        }
    };

    // ========================================
    // BACK TO TOP & YEAR
    // ========================================
    const BackToTop = {
        init() {
            DOM.backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        }
    };

    const CurrentYear = {
        init() {
            if (DOM.currentYear) DOM.currentYear.textContent = new Date().getFullYear();
        }
    };

    // ========================================
    // INITIALIZATION
    // ========================================
    function init() {
        DOM.body.classList.add('loading');

        // Initialize all modules
        LoadingScreen.init();
        ThemeSwitcher.init();
        LanguageSystem.init();
        CustomCursor.init();
        MagneticButtons.init();
        ParticleBackground.init();
        Navigation.init();
        ScrollReveal.init();
        TypewriterEffect.init();
        FormValidation.init();
        BackToTop.init();
        CurrentYear.init();
        ParallaxEffect.init();
        ActiveNavLink.init();
        SkillCardBorders.init();
        TimelineAnimation.init();
        StatCounterTrigger.init();
        Carousel3D.init();

        console.log('%c Youssef Shaaban Portfolio ', 'background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: #fff; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
        console.log('%c Built with passion and precision | عُني بالشغف والدقة ', 'color: #8b5cf6; font-size: 14px;');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
