// ==================== البيانات ====================
let coursesData = {
    courses: [
        {
            id: "nadhari",
            name: "اساسيات التمريض - نظري",
            description: "المفاهيم الأساسية والنظريات التمريضية",
            icon: "📖",
            bookUrl: "",
            bookChapters: [
                { name: "شابتر 1 - Asepsis", url: "https://www.mediafire.com/file/3ngj0dww90i5i7f/Asepsis.pdf/file" },
                { name: "شابتر 2 - Infection Control", url: "https://www.mediafire.com/file/14d312yhv4x1x7d/Infection_Control.pdf/file" },
                { name: "شابتر 3 - Safety", url: "https://www.mediafire.com/file/ofe0j0gqca2knxb/Safety.pdf/file" },
                { name: "شابتر 4 - Admission, Discharge, Transfer", url: "https://www.mediafire.com/file/jy3g11m8l3tt9g5/Admission%252C_Discharge%252C_Transfer%252C.pdf/file" },
                { name: "شابتر 5 - Recording and Reporting", url: "https://www.mediafire.com/file/5om84r45wbfeo70/Recording_and_Reporting.pdf/file" },
                { name: "شابتر 6 - Vital Signs", url: "https://www.mediafire.com/file/r4hiqhu8hedmx29/Vital_Signs.pdf/file" },
                { name: "شابتر 7 - Hygiene", url: "https://www.mediafire.com/file/q74kdfr41cit84g/Hygiene.pdf/file" },
                { name: "شابتر 8 - Body Mechanics, Positioning", url: "https://www.mediafire.com/file/hchz5hf38cszt1o/Body_Mechanics%252C_Positioning.pdf/file" }
            ],
            chapters: [
                { name: "Asepsis", pdfUrl: "https://www.mediafire.com/file/3ngj0dww90i5i7f/Asepsis.pdf/file", description: "مفهوم العقامة وأهميتها في التمريض، طرق منع انتقال العدوى" },
                { name: "Infection Control", pdfUrl: "https://www.mediafire.com/file/14d312yhv4x1x7d/Infection_Control.pdf/file", description: "مكافحة العدوى، أنواعها، وطرق الوقاية منها" },
                { name: "Safety", pdfUrl: "https://www.mediafire.com/file/ofe0j0gqca2knxb/Safety.pdf/file", description: "سلامة المريض والعاملين في المجال الصحي" },
                { name: "Admission, Discharge, Transfer", pdfUrl: "https://www.mediafire.com/file/jy3g11m8l3tt9g5/Admission%252C_Discharge%252C_Transfer%252C.pdf/file", description: "إجراءات قبول وتحويل وخروج المريض" },
                { name: "Recording and Reporting", pdfUrl: "https://www.mediafire.com/file/5om84r45wbfeo70/Recording_and_Reporting.pdf/file", description: "طرق التسجيل والتقرير في التمريض" },
                { name: "Vital Signs", pdfUrl: "https://www.mediafire.com/file/r4hiqhu8hedmx29/Vital_Signs.pdf/file", description: "العلامات الحيوية وقياساتها الطبيعية" },
                { name: "Hygiene", pdfUrl: "https://www.mediafire.com/file/q74kdfr41cit84g/Hygiene.pdf/file", description: "النظافة الشخصية وأهميتها للمريض" },
                { name: "Body Mechanics, Positioning", pdfUrl: "https://www.mediafire.com/file/hchz5hf38cszt1o/Body_Mechanics%252C_Positioning.pdf/file", description: "الميكانيكا الحيوية للجسم وطرق وضع المريض" }
            ],
            lectures: [
                { title: "محاضرة 1 الجزء الأول - Asepsis", url: "https://youtu.be/Fj_cHc7qiHI" },
                { title: "محاضرة 1 الجزء الثاني - Asepsis", url: "https://youtu.be/O1qCfxoZxXE" },
                { title: "محاضرة 2 - Infection Control", url: "https://youtu.be/6AydMEgD2V0" },
                { title: "محاضرة 3 - Safety", url: "https://youtu.be/YVBFkQ9gsoU" },
                { title: "محاضرة 4 الجزء الأول - Admission, Discharge, Transfer", url: "https://youtu.be/tt1ifco00W8" },
                { title: "محاضرة 4 الجزء الثاني - Admission, Discharge, Transfer", url: "https://youtu.be/tt1ifco00W8" },
                { title: "محاضرة 5 - Recording and Reporting", url: "https://youtu.be/tt1ifco00W8" },
                { title: "محاضرة 6 جزء أول - Vital Signs", url: "https://youtu.be/B3gQJsvhuMs" },
                { title: "محاضرة 6 جزء ثاني - Vital Signs", url: "https://youtu.be/a3jdPLWsLbY" },
                { title: "محاضرة 7 - Hygiene", url: "https://youtu.be/Us-PuSaWMaE" },
                { title: "محاضرة 8 - Body Mechanics, Positioning", url: "https://youtu.be/nnwa61B0PVA" }
            ]
        },
        {
            id: "amali",
            name: "اساسيات التمريض - عملي",
            description: "المهارات السريرية والإجراءات العملية",
            icon: "💉",
            bookUrl: "",
            bookChapters: [],
            chapters: [
                { name: "المهارات التمريضية الأساسية", pdfUrl: "", description: "المهارات العملية الأساسية في التمريض" }
            ],
            lectures: []
        },
        {
            id: "tashreeh",
            name: "التشريح",
            description: "دراسة تركيب الجسم البشري",
            icon: "🧠",
            bookUrl: "",
            bookChapters: [],
            chapters: [
                { name: "الجهاز الهيكلي", pdfUrl: "", description: "دراسة العظام والمفاصل والهيكل العظمي" },
                { name: "الجهاز العضلي", pdfUrl: "", description: "دراسة العضلات وأنواعها ووظائفها" },
                { name: "الجهاز العصبي", pdfUrl: "", description: "دراسة الدماغ والحبل الشوكي والأعصاب" },
                { name: "الجهاز الدوري", pdfUrl: "", description: "دراسة القلب والأوعية الدموية" },
                { name: "الجهاز التنفسي", pdfUrl: "", description: "دراسة الرئتين والمجاري التنفسية" },
                { name: "الجهاز الهضمي", pdfUrl: "", description: "دراسة الجهاز الهضمي ووظائفه" },
                { name: "الجهاز البولي", pdfUrl: "", description: "دراسة الكلى والمسالك البولية" }
            ],
            lectures: [
                { title: "محاضرة رقم 1 - محاضرة التشريح ووظائف اعضاء 1 2025 2026 المحاضرة الاولى", url: "https://youtu.be/zLoMS9bqnZY" },
                { title: "محاضرة رقم 2 - محاضرة التشريح الثانية 11 04 2026", url: "https://youtu.be/t7GbRUIYOxk" },
                { title: "محاضرة رقم 3 - محاضرة التشريح الثالثة 11 04 2026", url: "https://youtu.be/tMa5FO7hRgA" },
                { title: "محاضرة رقم 4 - INTEGUMENTARY SYSTEM 4 المحاضرة الرابعة", url: "https://youtu.be/KCSViIGdhqY" },
                { title: "محاضرة رقم 5 - Skeletal system 1 المحاضرة الخامسة", url: "https://youtu.be/T8KcYEFgilU" }
            ]
        },
        {
            id: "ahyaa",
            name: "الاحياء",
            description: "الأساسيات البيولوجية للجسم",
            icon: "🔬",
            bookUrl: "https://drive.google.com/drive/folders/1ZuP4XNRreseUwH3GMTiTZNP8IdI2miuJ",
            bookChapters: [],
            chapters: [
                { name: "مقدمة في علم الأحياء", pdfUrl: "", description: "تعريف علم الأحياء وفروعه" },
                { name: "الخلية", pdfUrl: "", description: "تركيب الخلية ووظائفها" },
                { name: "الوراثة", pdfUrl: "", description: "المبادئ الأساسية لعلم الوراثة" },
                { name: "التمثيل الغذائي", pdfUrl: "", description: "عمليات الأيض في الجسم" },
                { name: "الأحياء الدقيقة", pdfUrl: "", description: "دراسة الكائنات الحية الدقيقة" },
                { name: "جهاز المناعة", pdfUrl: "", description: "آليات الدفاع في الجسم" },
                { name: "الجهاز الهرموني", pdfUrl: "", description: "الغدد الصماء والهرمونات" },
                { name: "التكاثر", pdfUrl: "", description: "عمليات التكاثر في الكائنات الحية" },
                { name: "النمو والتطور", pdfUrl: "", description: "مراحل النمو والتطور" },
                { name: "علم البيئة", pdfUrl: "", description: "العلاقات بين الكائنات وبيئتها" }
            ],
            lectures: [
                { title: "محاضرة 1 - Chapter 1 Introduction to Microbiology", url: "https://www.youtube.com/watch?v=JUwqdnDMnv4&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-" },
                { title: "محاضرة 2 الجزء الأول - Chapter 2 Bacterial cell structure (part 1)", url: "https://www.youtube.com/watch?v=mOLOMgInvTU&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-" },
                { title: "محاضرة 2 الجزء الثاني - Chapter 2 Bacterial cell structure (part 2)", url: "https://www.youtube.com/watch?v=NP5P6m7pT6M&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-&index=3" },
                { title: "محاضرة 3 - Chapter 3: Bacterial growth and multiplication", url: "https://www.youtube.com/watch?v=NbUqxwae4R8&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-&index=4" },
                { title: "محاضرة 4 - Chapter 4: Bacterial Identification and Diagnosis", url: "https://www.youtube.com/watch?v=XUBKO_IKyVo&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-&index=5" },
                { title: "محاضرة 5 الجزء الأول - Chapter 5 (Part 1): Sterilization and disinfection", url: "https://www.youtube.com/watch?v=DV-8CJ1z9xg&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-&index=6" },
                { title: "محاضرة 5 الجزء الثاني - Chapter 5 (Part 2): Sterilization and disinfection", url: "https://www.youtube.com/watch?v=BNAM6oAk_6o&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-&index=7" },
                { title: "محاضرة 6 جزء أول - Chapter 6: Classification of bacteria (Part 1)", url: "https://www.youtube.com/watch?v=McWHmMMF8cc&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-&index=8" },
                { title: "محاضرة 6 الجزء الثاني - Chapter 6: Classification of bacteria (Part 2)", url: "https://www.youtube.com/watch?v=KxZuGg26Z4Q&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-&index=9" },
                { title: "محاضرة 6 الجزء الثالث - Chapter 6: Classification of bacteria (Part 3)", url: "https://www.youtube.com/watch?v=7gMBsyQLS90&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-&index=10" },
                { title: "محاضرة 6 الجزء الرابع - Chapter 6: Classification of bacteria (Part 4)", url: "https://www.youtube.com/watch?v=nmJd45pTF9Q&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-&index=11" },
                { title: "محاضرة 6 الجزء الخامس - Chapter 6: Classification of bacteria (Part 5)", url: "https://www.youtube.com/watch?v=NoyDyLmDvjQ&list=PLGtcDK7BxqpKkYpAwmLXdAjecJG1KZcc-&index=12" }
            ]
        }
    ]
};

// بيانات الأسئلة
let quizData = {
    nadhari: {
        0: [
            { question: "ما هو تعريف Asepsis؟", options: ["تعقيم", "منع العدوى", "نظافة", "تطهير"], correct: 1 },
            { question: "ما هي أهم طرق منع العدوى؟", options: ["غسل اليدين", "القفازات", "الكمامة", "كل ما سبق"], correct: 3 }
        ]
    },
    tashreeh: {
        0: [
            { question: "كم عدد عظام الإنسان البالغ؟", options: ["200", "206", "210", "215"], correct: 1 },
            { question: "أي من هذه ليس جزءاً من الجهاز الهيكلي؟", options: ["الجمجمة", "القفص الصدري", "الكبد", "العمود الفقري"], correct: 2 }
        ]
    },
    ahyaa: {
        0: [
            { question: "ما هي الوحدة الأساسية للحياة؟", options: ["النسيج", "العضو", "الخلية", "الجزيء"], correct: 2 }
        ]
    }
};

// حفظ واسترجاع البيانات
function saveData() {
    localStorage.setItem('nursingCourses', JSON.stringify(coursesData));
    localStorage.setItem('nursingQuizzes', JSON.stringify(quizData));
}

function loadData() {
    const savedCourses = localStorage.getItem('nursingCourses');
    const savedQuizzes = localStorage.getItem('nursingQuizzes');
    if (savedCourses) coursesData = JSON.parse(savedCourses);
    if (savedQuizzes) quizData = JSON.parse(savedQuizzes);
}

// جلسة المستخدم
let currentUser = localStorage.getItem('nursingUser');
if (!currentUser) {
    currentUser = "زائر_" + Math.floor(Math.random() * 1000);
    localStorage.setItem('nursingUser', currentUser);
}

// ==================== نظام الصفحات ====================
function navigateTo(page, params = {}) {
    let url = `#${page}`;
    if (params.courseId) url += `/${params.courseId}`;
    if (params.chapterIndex !== undefined && params.chapterIndex !== null) url += `/${params.chapterIndex}`;
    window.location.hash = url;
}

function renderPage() {
    const main = document.getElementById('mainContent');
    if (!main) return;
    
    const hash = window.location.hash.slice(1);
    const parts = hash.split('/');
    const page = parts[0] || 'home';
    
    if (page === 'home' || page === '') {
        renderHome(main);
    } else if (page === 'course' && parts[1]) {
        renderCourse(main, parts[1]);
    } else if (page === 'chapter' && parts[1] && parts[2]) {
        renderChapter(main, parts[1], parseInt(parts[2]));
    } else if (page === 'lectures' && parts[1]) {
        renderLectures(main, parts[1]);
    } else if (page === 'book' && parts[1]) {
        renderBook(main, parts[1]);
    } else if (page === 'quiz' && parts[1] && parts[2]) {
        renderQuiz(main, parts[1], parseInt(parts[2]));
    } else {
        renderHome(main);
    }
}

// ==================== عرض الصفحة الرئيسية ====================
function renderHome(container) {
    container.innerHTML = `
        <div class="welcome-card">
            <div class="avatar">👩‍⚕️</div>
            <div class="user-greeting">
                <h3>مرحباً، ${currentUser}</h3>
                <p>اختر المساق الذي ترغب بدراسته</p>
            </div>
        </div>
        
        <h2 class="section-title">📚 المساقات المتاحة</h2>
        <div class="courses-grid" id="coursesGrid"></div>
    `;
    
    const grid = document.getElementById('coursesGrid');
    if (grid) {
        grid.innerHTML = coursesData.courses.map(c => `
            <div class="course-card" data-course-id="${c.id}">
                <div class="course-icon">${c.icon}</div>
                <h3>${c.name}</h3>
                <p>${c.description}</p>
            </div>
        `).join('');
        
        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const courseId = card.getAttribute('data-course-id');
                navigateTo('course', { courseId });
            });
        });
    }
}

// ==================== عرض صفحة المساق ====================
function renderCourse(container, courseId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) {
        navigateTo('home');
        return;
    }
    
    container.innerHTML = `
        <div class="nav-bar">
            <button class="back-btn" id="backBtn">↩ رجوع</button>
            <span class="breadcrumb">${course.name}</span>
        </div>
        
        <div class="welcome-card">
            <div class="avatar">${course.icon}</div>
            <div class="user-greeting">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
            </div>
        </div>
        
        <div class="button-group">
            <button class="add-btn" id="chaptersBtn">📖 الشباتر والدروس</button>
            <button class="add-btn" id="lecturesBtn">🎥 المحاضرات</button>
            <button class="add-btn" id="bookBtn">📕 الكتاب المقرر</button>
            <button class="add-btn" id="quizzesBtn">📝 الاختبارات</button>
        </div>
        
        <div id="dynamicContent"></div>
    `;
    
    document.getElementById('backBtn').addEventListener('click', () => navigateTo('home'));
    document.getElementById('chaptersBtn').addEventListener('click', () => {
        const contentDiv = document.getElementById('dynamicContent');
        if (contentDiv) contentDiv.innerHTML = renderChaptersList(course);
    });
    document.getElementById('lecturesBtn').addEventListener('click', () => navigateTo('lectures', { courseId: course.id }));
    document.getElementById('bookBtn').addEventListener('click', () => navigateTo('book', { courseId: course.id }));
    document.getElementById('quizzesBtn').addEventListener('click', () => {
        const contentDiv = document.getElementById('dynamicContent');
        if (contentDiv) contentDiv.innerHTML = renderQuizzesList(course);
    });
    
    const contentDiv = document.getElementById('dynamicContent');
    if (contentDiv) contentDiv.innerHTML = renderChaptersList(course);
}

function renderChaptersList(course) {
    return `
        <h2 class="section-title">📖 الشباتر والدروس</h2>
        <div class="chapters-grid">
            ${course.chapters.map((ch, idx) => `
                <div class="chapter-item" data-chapter="${idx}">
                    <div class="chapter-name">
                        <span class="chapter-icon">📘</span>
                        شابتر ${idx+1}: ${ch.name}
                    </div>
                    <span class="quiz-badge">اختبار</span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderQuizzesList(course) {
    return `
        <h2 class="section-title">📝 الاختبارات</h2>
        <div class="chapters-grid">
            ${course.chapters.map((ch, idx) => `
                <div class="chapter-item" data-quiz="${idx}">
                    <div class="chapter-name">
                        <span class="chapter-icon">📝</span>
                        اختبار شابتر ${idx+1}: ${ch.name}
                    </div>
                    <span class="quiz-badge">ابدأ</span>
                </div>
            `).join('')}
        </div>
    `;
}

// ==================== عرض صفحة الشابتر ====================
function renderChapter(container, courseId, chapterIndex) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course || !course.chapters[chapterIndex]) {
        navigateTo('home');
        return;
    }
    
    const chapter = course.chapters[chapterIndex];
    
    container.innerHTML = `
        <div class="nav-bar">
            <button class="back-btn" id="backBtn">↩ رجوع</button>
            <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
            <span class="breadcrumb">${course.name} / شابتر ${chapterIndex+1}: ${chapter.name}</span>
        </div>
        
        <div class="welcome-card">
            <div class="avatar">📖</div>
            <div class="user-greeting">
                <h3>شابتر ${chapterIndex+1}: ${chapter.name}</h3>
                <p>ملخصات وشرح مفصل للشابتر</p>
            </div>
        </div>
        
        <div class="chapter-content">
            <div class="chapter-description">
                <strong>📝 وصف الشابتر:</strong><br>
                ${chapter.description || "محتوى الشابتر قيد التجهيز..."}
            </div>
            ${chapter.pdfUrl ? `<a href="${chapter.pdfUrl}" target="_blank" class="book-link" style="display: block; text-align: center; margin-top: 15px;">📥 تحميل ملف الشابتر PDF</a>` : ''}
            <button class="submit-btn" id="takeQuizBtn" style="margin-top: 20px;">📝 إجراء اختبار الشابتر</button>
        </div>
    `;
    
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());
    document.getElementById('backToCourse').addEventListener('click', () => navigateTo('course', { courseId }));
    document.getElementById('takeQuizBtn').addEventListener('click', () => navigateTo('quiz', { courseId, chapterIndex }));
}

// ==================== عرض المحاضرات ====================
function renderLectures(container, courseId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) {
        navigateTo('home');
        return;
    }
    
    container.innerHTML = `
        <div class="nav-bar">
            <button class="back-btn" id="backBtn">↩ رجوع</button>
            <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
            <span class="breadcrumb">${course.name} / المحاضرات</span>
        </div>
        
        <h2 class="section-title">🎥 محاضرات يوتيوب</h2>
        <div class="lectures-grid" id="lecturesGrid"></div>
    `;
    
    const grid = document.getElementById('lecturesGrid');
    if (grid) {
        const lectures = course.lectures || [];
        if (lectures.length === 0) {
            grid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 20px;">لا توجد محاضرات حالياً</p>';
            return;
        }
        
        grid.innerHTML = lectures.map((lec, idx) => `
            <div class="lecture-item">
                <a href="${lec.url}" target="_blank" class="lecture-link">🎬 ${lec.title}</a>
                <button class="watch-btn" onclick="window.open('${lec.url}', '_blank')">مشاهدة ▶</button>
            </div>
        `).join('');
    }
    
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());
    document.getElementById('backToCourse').addEventListener('click', () => navigateTo('course', { courseId }));
}

// ==================== عرض الكتاب المقرر ====================
function renderBook(container, courseId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) {
        navigateTo('home');
        return;
    }
    
    // التحقق إذا كان المساق يحتوي على شباتر كتب منفصلة
    const hasBookChapters = course.bookChapters && course.bookChapters.length > 0;
    const hasMainBook = course.bookUrl && course.bookUrl !== "";
    
    if (hasBookChapters) {
        // عرض الشباتر كقائمة (لاساسيات التمريض نظري)
        container.innerHTML = `
            <div class="nav-bar">
                <button class="back-btn" id="backBtn">↩ رجوع</button>
                <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
                <span class="breadcrumb">${course.name} / الكتاب المقرر</span>
            </div>
            
            <div class="book-card">
                <div style="font-size: 48px; margin-bottom: 15px;">📚</div>
                <h3 style="margin-bottom: 10px;">الكتب والمراجع</h3>
                <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 20px;">${course.name}</p>
                <div class="chapters-grid" style="margin-top: 20px;">
                    ${course.bookChapters.map((ch, idx) => `
                        <div class="chapter-item" style="cursor: default;">
                            <div class="chapter-name">
                                <span class="chapter-icon">📘</span>
                                ${ch.name}
                            </div>
                            <a href="${ch.url}" target="_blank" class="pdf-badge" style="text-decoration: none;">📥 تحميل PDF</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (hasMainBook) {
        // عرض رابط واحد (للاحياء)
        container.innerHTML = `
            <div class="nav-bar">
                <button class="back-btn" id="backBtn">↩ رجوع</button>
                <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
                <span class="breadcrumb">${course.name} / الكتاب المقرر</span>
            </div>
            
            <div class="book-card">
                <div style="font-size: 48px; margin-bottom: 15px;">📕</div>
                <h3 style="margin-bottom: 10px;">الكتاب المقرر</h3>
                <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 20px;">${course.name}</p>
                <a href="${course.bookUrl}" target="_blank" class="book-link">📥 تحميل الكتاب</a>
            </div>
        `;
    } else {
        // لا يوجد كتب
        container.innerHTML = `
            <div class="nav-bar">
                <button class="back-btn" id="backBtn">↩ رجوع</button>
                <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
                <span class="breadcrumb">${course.name} / الكتاب المقرر</span>
            </div>
            
            <div class="book-card">
                <div style="font-size: 48px; margin-bottom: 15px;">📕</div>
                <h3 style="margin-bottom: 10px;">الكتاب المقرر</h3>
                <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 20px;">${course.name}</p>
                <p style="color: #e74c3c;">⚠️ لم يتم إضافة الكتاب بعد</p>
            </div>
        `;
    }
    
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());
    document.getElementById('backToCourse').addEventListener('click', () => navigateTo('course', { courseId }));
}

// ==================== عرض الاختبار ====================
function renderQuiz(container, courseId, chapterIndex) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course || !course.chapters[chapterIndex]) {
        navigateTo('home');
        return;
    }
    
    const chapter = course.chapters[chapterIndex];
    const questions = quizData[courseId]?.[chapterIndex] || [];
    
    container.innerHTML = `
        <div class="nav-bar">
            <button class="back-btn" id="backBtn">↩ رجوع</button>
            <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
            <span class="breadcrumb">${course.name} / اختبار شابتر ${chapterIndex+1}: ${chapter.name}</span>
        </div>
        
        <div class="quiz-container">
            <h2 style="font-size: 1rem; margin-bottom: 15px;">📝 اختبار: ${chapter.name}</h2>
            ${questions.length === 0 ? '<p style="text-align: center; color: #e74c3c;">⚠️ لا توجد أسئلة لهذا الشابتر بعد</p>' : `
                <div id="quizQuestions"></div>
                <button class="submit-btn" id="submitQuiz">تأكيد الإجابات</button>
                <div id="quizResult"></div>
            `}
        </div>
    `;
    
    if (questions.length > 0) {
        const quizDiv = document.getElementById('quizQuestions');
        if (quizDiv) {
            quizDiv.innerHTML = questions.map((q, idx) => `
                <div class="question-item">
                    <div class="question-text">${idx+1}. ${q.question}</div>
                    <div class="options">
                        ${q.options.map((opt, optIdx) => `
                            <label class="option">
                                <input type="radio" name="q${idx}" value="${optIdx}">
                                ${opt}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
        
        document.getElementById('submitQuiz').addEventListener('click', () => {
            let score = 0;
            questions.forEach((q, idx) => {
                const selected = document.querySelector(`input[name="q${idx}"]:checked`);
                if (selected && parseInt(selected.value) === q.correct) score++;
            });
            const resultDiv = document.getElementById('quizResult');
            const percent = Math.round(score/questions.length*100);
            if (resultDiv) {
                resultDiv.innerHTML = `
                    <div class="result-box" style="background: ${percent >= 60 ? '#4caf50' : '#e74c3c'}; color: white;">
                        ✅ نتيجتك: ${score} من ${questions.length} (${percent}%)
                        ${percent >= 60 ? '🎉 ممتاز! اجتزت الاختبار' : '📚 حاول مراجعة الشابتر مرة أخرى'}
                    </div>
                `;
            }
        });
    }
    
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());
    document.getElementById('backToCourse').addEventListener('click', () => navigateTo('course', { courseId }));
}

// ==================== أحداث إضافية ====================
function attachDynamicEvents() {
    document.querySelectorAll('.chapter-item[data-chapter]').forEach(el => {
        el.removeEventListener('click', handleChapterClick);
        el.addEventListener('click', handleChapterClick);
    });
    
    document.querySelectorAll('.chapter-item[data-quiz]').forEach(el => {
        el.removeEventListener('click', handleQuizClick);
        el.addEventListener('click', handleQuizClick);
    });
}

function handleChapterClick(e) {
    const target = e.target;
    if (target.classList.contains('quiz-badge') || target.closest('.quiz-badge')) return;
    
    const el = e.currentTarget;
    const chapterIndex = el.getAttribute('data-chapter');
    const courseId = getCurrentCourseIdFromPage();
    if (courseId && chapterIndex !== null) {
        navigateTo('chapter', { courseId, chapterIndex: parseInt(chapterIndex) });
    }
}

function handleQuizClick(e) {
    const el = e.currentTarget;
    const chapterIndex = el.getAttribute('data-quiz');
    const courseId = getCurrentCourseIdFromPage();
    if (courseId && chapterIndex !== null) {
        navigateTo('quiz', { courseId, chapterIndex: parseInt(chapterIndex) });
    }
}

function getCurrentCourseIdFromPage() {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb && breadcrumb.textContent) {
        const course = coursesData.courses.find(c => breadcrumb.textContent.includes(c.name));
        if (course) return course.id;
    }
    return null;
}

function observeDynamicContent() {
    const observer = new MutationObserver(() => {
        attachDynamicEvents();
    });
    observer.observe(document.getElementById('mainContent'), { childList: true, subtree: true });
}

// ==================== الوضع الليلي ====================
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    }
    
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });
}

// ==================== بدء التشغيل ====================
loadData();

window.addEventListener('hashchange', renderPage);
window.addEventListener('load', () => {
    renderPage();
    observeDynamicContent();
});

setInterval(saveData, 5000);
