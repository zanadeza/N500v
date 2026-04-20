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
                { 
                    name: "Asepsis",
                    pdfUrl: "https://www.mediafire.com/file/3ngj0dww90i5i7f/Asepsis.pdf/file",
                    contentPages: [
                        `📖 **الصفحة 1: مقدمة عن Asepsis والكائنات الحية الدقيقة**
                        
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Asepsis (العقامة)** - طريقة النطق: أسيبسيس

Preventing infections is one of the most important priorities in nursing.

يُعد منع العدوى أحد أهم الأولويات في مهنة التمريض.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Microorganisms (الكائنات الحية الدقيقة)** - طريقة النطق: مايكروأورجانيزمز

Microorganisms, living animals or plants visible only with a microscope, are commonly called germs.

الكائنات الحية الدقيقة، وهي حيوانات أو نباتات حية لا تُرى إلا بالمجهر، تُسمى عادةً بالجراثيم.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **ما تفتقر إليه هذه الكائنات في الحجم تعوضه بالعدد**

What they lack in size, they make up for in numbers.

وما تفتقر إليه هذه الكائنات في الحجم، تعوضه في أعدادها الكبيرة.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **أماكن تواجد الكائنات الحية الدقيقة**

Microorganisms are everywhere: in the air, soil, and water, and on and within virtually everything and everyone.

تتواجد الكائنات الحية الدقيقة في كل مكان: في الهواء والتربة والماء، وعلى (وفي داخل) كل شيء وكل شخص تقريباً.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **الشرح:**
أوضح أن كلمة "Asepsis" هي مصطلح طبي يتكون من مقطعين: "A" وتعني "بدون" (نافية)، و "sepsis" وتعني "عدوى" (Infection)، ليصبح المعنى الإجمالي هو منع العدوى، وهو من الأولويات القصوى في التمريض.
عرف الكائنات الحية الدقيقة (Microorganisms) بأنها كائنات حية صغيرة (حيوانات أو نباتات) لا تُرى بالعين المجردة، بل فقط عبر الميكروسكوب، وغالباً ما تسمى "جراثيم".
أشار إلى أن هذه الكائنات موجودة في كل مكان: في الهواء، الرمل، الماء، وعلى كل شيء تقريباً.`,

                        `📖 **الصفحة 2: أنواع الكائنات الحية الدقيقة**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Types of Microorganisms (أنواع الكائنات الحية الدقيقة)**

Microorganisms are divided into two main groups: nonpathogens or normal flora and pathogens.

تنقسم الكائنات الحية الدقيقة إلى مجموعتين رئيسيتين: غير الممرضة (أو الفلورا الطبيعية) والممرضة.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Non Pathogens (غير الممرضة)** - طريقة النطق: نون باثوجنز

Non Pathogens: Mutually beneficial, or neither harming nor helping the host.

غير الممرضة: مفيدة بشكل متبادل، أو لا تضر ولا تنفع العائل (المضيف).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Pathogens (الممرضة)** - طريقة النطق: باثوجنز

Pathogens have high potential for causing infectious communicable diseases also called contagious diseases and community-acquired infections.

الممرضة: لديها إمكانية عالية للتسبب في أمراض معدية منقولة، وتسمى أيضاً بالأمراض السارية (المعدية) والعدوى المكتسبة من المجتمع.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **أمثلة على المسببات المرضية:**

• **Bacteria (البكتيريا)** - طريقة النطق: باكتيريا
  Single-celled microorganisms.
  كائنات حية دقيقة وحيدة الخلية.

• **Viruses (الفيروسات)** - طريقة النطق: فايروسيز
  The smallest microorganisms.
  أصغر الكائنات الحية الدقيقة.

• **Fungi (الفطريات)** - طريقة النطق: فانجاي
  Include yeasts and molds.
  تشمل الخمائر والعفن.

• **Rickettsiae (الريكتسيا)** - طريقة النطق: ريكيتسي
  Resemble bacteria; like viruses presented in fleas and lice.
  تشبه البكتيريا؛ وتوجد مثل الفيروسات في البراغيث والقمل.

• **Protozoans (البروتوزوا/الأوليات)** - طريقة النطق: بروتوزونز
  Single-celled animals like amebia.
  حيوانات وحيدة الخلية مثل الأميبا.

• **Mycoplasmas (الميكوبلازما)** - طريقة النطق: مايكوبلازما
  Lack a cell wall. They are referred to as pleomorphic.
  تفتقر إلى جدار خلوي، ويشار إليها بأنها "متعددة الأشكال".

• **Helminths (الديدان الطفيلية)** - طريقة النطق: هيلمينثس
  Are infectious worms.
  هي ديدان معدية.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **الشرح:**
تنقسم الكائنات الدقيقة إلى مجموعتين أساسيتين:
1. غير مسببة للمرض (Non-pathogens): وتسمى أيضاً "نورمال فلورا" (Normal flora). هي كائنات مفيدة أو متعايشة (تبادل منفعة) ولا تسبب ضرراً للعائل.
2. مسببة للمرض (Pathogens): وهي مصدر للعدوى وتسبب أمراضاً معدية أو سارية.`,

                        `📖 **الصفحة 3: بقاء الميكروبات وسلسلة العدوى**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Survival of Microorganisms (بقاء الكائنات الحية الدقيقة)**

Many pathogens have mutated to adapt to hostile environments and unfavorable living conditions. Such adaptability has ensured that they continue to pose a threat to humans.

لقد تحورت العديد من مسببات الأمراض للتكيف مع البيئات المعادية وظروف المعيشة غير المواتية. وقد ضمنت هذه القدرة على التكيف استمرارها في تشكيل تهديد للبشر.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Spore (البوغة)** - طريقة النطق: سبور

A spore is a temporarily inactive microbial life form that can resist heat and destructive chemicals and survive without moisture.

البوغة (A spore): هي شكل من أشكال الحياة الميكروبية غير النشطة مؤقتاً، والتي يمكنها مقاومة الحرارة والمواد الكيميائية المدمرة والبقاء على قيد الحياة دون رطوبة.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Chain of Infection (سلسلة العدوى)**

By interfering with the conditions that perpetuate the transmission of microorganisms, humans can avoid acquiring infectious diseases.

من خلال التدخل في الظروف التي تسمح باستمرار انتقال الكائنات الحية الدقيقة، يمكن للبشر تجنب الإصابة بالأمراض المعدية.

The six essential components of the chain of infection must be in place if pathogens are to be transmitted.

يجب أن تكتمل المكونات الستة الأساسية لسلسلة العدوى لكي تنتقل مسببات الأمراض.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **المكونات الستة لسلسلة العدوى:**

1️⃣ **Infectious Agent (العامل المعدي)** - الميكروب المسبب للمرض
2️⃣ **Reservoir (المستودع)** - مكان نمو وتكاثر الميكروب
3️⃣ **Exit Route (طريق الخروج)** - كيف يخرج الميكروب من المستودع
4️⃣ **Mode of Transmission (طريقة الانتقال)** - كيف ينتقل الميكروب
5️⃣ **Port of Entry (منفذ الدخول)** - مكان دخول الميكروب للعائل الجديد
6️⃣ **Susceptible Host (العائل القابل للإصابة)** - الشخص ضعيف المناعة

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **الشرح:**
أكد المحاضر أن منع انتشار العدوى يعتمد على "كسر" حلقة من حلقات سلسلة العدوى الست.
تحدث عن الأبواغ أو الحويصلات (Spores)، وهي بكتيريا في طور غير نشط تقاوم الحرارة والمواد الكيميائية والجفاف حتى تجد الظروف المناسبة لتنشط مرة أخرى.`,

                        `📖 **الصفحة 4: طرق انتقال العدوى والعائل القابل للإصابة**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Methods of Transmission (طرق الانتقال)**

📌 **Contact Transmission (الانتقال بالتلامس/التماس)**
  • Direct contact (التلامس المباشر): Actual physical transfer from one infected person to another
  • Indirect contact (التلامس غير المباشر): Contact between a susceptible person and a contaminated object

📌 **Droplet Transmission (الانتقال بالقطيرات/الرذاذ)**
  • Transfer of moist particles from an infected person who is within a radius of 3 ft
  • Example: Inhalation of droplets released during sneezing, coughing, or talking

📌 **Airborne Transmission (الانتقال المحمول جواً)**
  • Movement of microorganisms attached to evaporated water droplets or dust particles
  • Example: Inhalation of spores

📌 **Vehicle Transmission (الانتقال بواسطة ناقل غير حي)**
  • Transfer of microorganisms present on or in contaminated items such as food, water, medications, devices, and equipment
  • Example: Consumption of water contaminated with microorganisms

📌 **Vector Transmission (الانتقال بواسطة ناقل حي)**
  • Transfer of microorganisms from an infected animal carrier
  • Example: Diseases spread by mosquitoes, fleas, ticks, or rats

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Susceptible Host (العائل القابل للإصابة)**

Humans become susceptible to infections when their defense mechanisms are diminished or impaired.

يصبح البشر عرضة للإصابة بالعدوى عندما تضعف أو تتعطل آليات دفاعهم.

**الأشخاص الأكثر عرضة للعدوى:**
• Older adults or premature infants (كبار السن والأطفال الخدج)
• Burn victims (مرضى الحروق)
• Major trauma (رضوض كبيرة/صدمات شديدة)
• Invasive procedures such as endoscopy (إجراءات تدخلية مثل التنظير)
• Indwelling equipment such as a urinary catheter (معدات مقيمة مثل القسطرة البولية)
• Antibiotics inappropriately (مضادات حيوية بطريقة غير مناسبة)
• Anticancer drugs and corticosteroids (أدوية مضادة للسرطان وكورتيكوستيرويدات)
• Infected with HIV (مصابون بفيروس نقص المناعة البشرية)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **Nosocomial Infection (العدوى المكتسبة من المستشفيات)**
Infections acquired while a person is receiving care in a health care agency.
العدوى التي تُكتسب أثناء تلقّي الشخص للرعاية في إحدى مؤسسات الرعاية الصحية.`,

                        `📖 **الصفحة 5: أنواع Asepsis وقواعدها وممارساتها**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Definition of Asepsis (تعريف العقامة)**

Asepsis means those practices that decrease or eliminate infectious agents, their reservoirs, and vehicles for transmission. It is the major method for controlling infection.

العقامة تعني الممارسات التي تقلل أو تقضي على العوامل المعدية ومستودعاتها ووسائل نقلها. وهي الطريقة الرئيسية لمكافحة العدوى.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Types of Asepsis (أنواع العقامة)**

1️⃣ **Medical Asepsis (العقامة الطبية)** - Clean technique (التقنية النظيفة)
   Practices that confine or reduce the numbers of microorganisms.
   الممارسات التي تحد أو تقلل من أعداد الكائنات الحية الدقيقة.

2️⃣ **Surgical Asepsis (العقامة الجراحية)** - Sterile technique (التقنية المعقمة)
   Eliminates all microorganisms, including spores.
   تقضي على جميع الكائنات الحية الدقيقة بما فيها الأبواغ.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Principles of Medical Asepsis (قواعد العقامة الطبية)**

• Microorganisms exist everywhere except on sterilized equipment.
• Frequent hand hygiene and maintaining intact skin are the best methods.
• Blood, body fluids, cells, and tissues are considered major reservoirs.
• Personal protective equipment (gloves, gowns, masks, goggles) serves as a barrier.
• A clean environment reduces microorganisms.
• Cleaning should be done from cleaner to dirtier areas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Antimicrobial Agents (العوامل المضادة للميكروبات)**

• **Soap (الصابون)**: Lowers surface tension - used for Hygiene
• **Alcohol (الكحول 70%)**: Injures protein structures - used for skin, instruments
• **Iodine (اليود/Betadine)**: Damages cell membrane - used for cleansing skin
• **Chlorine (الكلور/Bleach)**: Interferes with enzyme systems - used for disinfecting
• **Chlorhexidine (الكلورهيكسيدين/Hibiclens)**: Damages cell membrane

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Hand Washing (غسل اليدين)**
• Minimum 15 seconds (15 ثانية كحد أدنى)
• Most effective way to prevent infections (الطريقة الأكثر فعالية لمنع العدوى)

🔹 **Surgical Scrub (الفرك الجراحي)**
• Lasts 2-6 minutes (يستمر 2-6 دقائق)
• Hands held higher than elbows (اليدين مرفوعتين فوق المرفقين)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **الفرق بين Antiseptics و Disinfectants:**
المطهرات (Antiseptics) تمنع نمو الميكروبات وتستخدم على الجلد.
المعقمات (Disinfectants) تقتل الميكروبات النشطة وتستخدم للأسطح والجدران.`
                    ],
                    summary: "ملخص كامل لشابتر Asepsis مقسم إلى 5 صفحات"
                },
                { 
                    name: "Infection Control", 
                    pdfUrl: "https://www.mediafire.com/file/14d312yhv4x1x7d/Infection_Control.pdf/file",
                    contentPages: [
                        `📖 **الصفحة 1: Infection Control - مكافحة العدوى**
                        
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 **محتوى هذا الشابتر قيد التجهيز...**

سيتم إضافة الملخص الكامل لشابتر Infection Control قريباً.

يمكنك حالياً تحميل ملف PDF الخاص بهذا الشابتر من قسم "الكتاب المقرر".`
                    ],
                    summary: "ملخص شابتر Infection Control - قيد التجهيز"
                },
                { 
                    name: "Safety", 
                    pdfUrl: "https://www.mediafire.com/file/ofe0j0gqca2knxb/Safety.pdf/file",
                    contentPages: [
                        `📖 **الصفحة 1: Safety - السلامة**
                        
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 **محتوى هذا الشابتر قيد التجهيز...**

سيتم إضافة الملخص الكامل لشابتر Safety قريباً.

يمكنك حالياً تحميل ملف PDF الخاص بهذا الشابتر من قسم "الكتاب المقرر".`
                    ],
                    summary: "ملخص شابتر Safety - قيد التجهيز"
                },
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
                { 
                    name: "المهارات التمريضية الأساسية", 
                    pdfUrl: "", 
                    summary: `📝 **تلخيص شابتر 1 - المهارات التمريضية الأساسية:**\n\n• **المهارات الأساسية التي يجب على الممرض إتقانها:**\n\n**1. قياس العلامات الحيوية:**\n  - درجة الحرارة (فموي، إبطي، شرجي، طبلي)\n  - النبض (السرعة، الانتظام، القوة)\n  - التنفس (السرعة، العمق، النمط)\n  - ضغط الدم (الانقباضي والانبساطي)\n\n**2. العناية بالجروح:**\n  - تنظيف الجرح من الداخل إلى الخارج\n  - تغيير الضمادات بانتظام\n  - مراقبة علامات الالتهاب\n\n**3. إعطاء الأدوية:**\n  - الحقن العضلي، الوريدي، تحت الجلد\n  - التأكد من الدواء والجرعة المناسبة\n  - الالتزام بالقواعد الخمس الصحيحة`
                },
                { 
                    name: "المهارات المتقدمة", 
                    pdfUrl: "", 
                    summary: `📝 **تلخيص شابتر 2 - المهارات التمريضية المتقدمة:**\n\n• **الإنعاش القلبي الرئوي (CPR):**\n  - الضغطات على الصدر (30 ضغطة)\n  - التنفس الاصطناعي (نفختين)\n  - النسبة 30:2\n\n• **القسطرة البولية:**\n  - تعقيم المنطقة\n  - استخدام تقنية معقمة\n  - مراقبة كمية البول ولونه\n\n• **التنفس الصناعي:**\n  - جهاز التنفس الصناعي\n  - شفط الإفرازات\n  - مراقبة تشبع الأكسجين`
                },
                { 
                    name: "الرعاية التمريضية المتخصصة", 
                    pdfUrl: "", 
                    summary: `📝 **تلخيص شابتر 3 - الرعاية التمريضية المتخصصة:**\n\n• **رعاية مرضى الحروق:**\n  - تقييم مساحة الحرق وعمقه\n  - تنظيف وتعقيم الحرق\n  - تغطية الحرق بضمادات معقمة\n  - مراقبة علامات الصدمة\n\n• **رعاية مرضى السكري:**\n  - قياس نسبة السكر في الدم\n  - إعطاء الأنسولين\n  - مراقبة أعراض نقص أو ارتفاع السكر\n  - التثقيف الصحي للمريض\n\n• **رعاية مرضى الضغط المرتفع:**\n  - مراقبة ضغط الدم بانتظام\n  - التوعية بأهمية الأدوية والغذاء الصحي`
                }
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
                { 
                    name: "الجهاز الهيكلي", 
                    pdfUrl: "", 
                    summary: `📝 **تلخيص شابتر 1 - الجهاز الهيكلي (Skeletal System):**\n\n• **وظائف الجهاز الهيكلي:**\n  - دعم الجسم وإعطائه الشكل\n  - حماية الأعضاء الداخلية\n  - تخزين الكالسيوم والفوسفور\n  - إنتاج خلايا الدم (النخاع العظمي)\n\n• **أقسام الهيكل العظمي:**\n  - الهيكل المحوري (الجمجمة، العمود الفقري، القفص الصدري)\n  - الهيكل الطرفي (الأطراف العلوية والسفلية، الحوض)\n\n• **أنواع العظام:**\n  - عظام طويلة (الفخذ، الساق)\n  - عظام قصيرة (الرسغ، الكاحل)\n  - عظام مسطحة (الجمجمة، عظم الكتف)\n  - عظام غير منتظمة (الفقرات)\n\n• **عدد عظام الإنسان البالغ:** 206 عظمة`
                },
                { 
                    name: "الجهاز العضلي", 
                    pdfUrl: "", 
                    summary: `📝 **تلخيص شابتر 2 - الجهاز العضلي (Muscular System):**\n\n• **أنواع العضلات:**\n  - العضلات الهيكلية (إرادية)\n  - العضلات الملساء (لا إرادية - توجد في الأمعاء والأوعية الدموية)\n  - العضلة القلبية (لا إرادية - توجد في القلب فقط)\n\n• **وظائف العضلات:**\n  - الحركة\n  - الحفاظ على الوضعية\n  - إنتاج الحرارة\n  - تثبيت المفاصل\n\n• **أهم عضلات الجسم:**\n  - العضلة القلبية\n  - الحجاب الحاجز (التنفس)\n  - العضلة ذات الرأسين والعضلة ثلاثية الرؤوس`
                },
                { 
                    name: "الجهاز العصبي", 
                    pdfUrl: "", 
                    summary: `📝 **تلخيص شابتر 3 - الجهاز العصبي (Nervous System):**\n\n• **أقسام الجهاز العصبي:**\n  - الجهاز العصبي المركزي (الدماغ + الحبل الشوكي)\n  - الجهاز العصبي الطرفي (الأعصاب المتفرعة)\n\n• **أجزاء الدماغ:**\n  - المخ (الوعي، الذاكرة، الحركة الإرادية)\n  - المخيخ (التوازن والتناسق الحركي)\n  - جذع الدماغ (الوظائف الحيوية: التنفس، النبض)\n\n• **الخلية العصبية (العصبون):**\n  - جسم الخلية\n  - محور عصبي\n  - زوائد شجرية\n\n• **الجهاز العصبي الذاتي:**\n  - الجهاز السمبثاوي (الاستجابة للطوارئ)\n  - الجهاز نظير السمبثاوي (الاسترخاء والهضم)`
                },
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
                { 
                    name: "مقدمة في علم الأحياء", 
                    pdfUrl: "", 
                    summary: `📝 **تلخيص شابتر 1 - مقدمة في علم الأحياء (Introduction to Biology):**\n\n• **تعريف علم الأحياء:** هو العلم الذي يدرس الكائنات الحية من حيث تركيبها، وظائفها، نموها، وتكاثرها.\n\n• **خصائص الكائنات الحية:**\n  - التنظيم الخلوي\n  - النمو والتطور\n  - التكاثر\n  - الاستجابة للمؤثرات\n  - التمثيل الغذائي\n  - التوازن الداخلي\n\n• **فروع علم الأحياء:**\n  - علم الخلايا\n  - علم الوراثة\n  - علم الأحياء الدقيقة\n  - علم البيئة\n  - علم التشريح`
                },
                { 
                    name: "الخلية", 
                    pdfUrl: "", 
                    summary: `📝 **تلخيص شابتر 2 - الخلية (The Cell):**\n\n• **الخلية هي وحدة الحياة الأساسية.**\n\n• **مكونات الخلية الحيوانية:**\n  - النواة (تحوي المادة الوراثية)\n  - الغشاء الخلوي (ينظم مرور المواد)\n  - السيتوبلازم (الوسط الهلامي)\n  - الميتوكوندريا (مركز الطاقة)\n  - الشبكة الإندوبلازمية (تصنيع البروتينات)\n  - جهاز جولجي (تعبئة المواد)\n\n• **أنواع الخلايا:**\n  - خلية بدائية النواة (لا تحتوي نواة)\n  - خلية حقيقية النواة (تحتوي نواة)\n\n• **الفرق بين الخلية النباتية والحيوانية:**\n  - النباتية: جدار خلوي، بلاستيدات خضراء، فجوة عصارية كبيرة\n  - الحيوانية: لا تحتوي جدار خلوي أو بلاستيدات`
                },
                { 
                    name: "الوراثة", 
                    pdfUrl: "", 
                    summary: `📝 **تلخيص شابتر 3 - الوراثة (Genetics):**\n\n• **تعريف الوراثة:** انتقال الصفات من الآباء إلى الأبناء.\n\n• **الحمض النووي (DNA):**\n  - المادة الوراثية التي تحمل الشفرة الوراثية\n  - يتكون من سلسلتين ملتفتين حول بعضهما (اللولب المزدوج)\n  - الوحدة الأساسية هي النيوكليوتيدات\n\n• **الجينات:** هي قطع من DNA تحدد صفة معينة.\n\n• **الكروموسومات:**\n  - الإنسان لديه 46 كروموسوم (23 زوج)\n  - 22 زوج من الكروموسومات الجسدية\n  - زوج واحد من الكروموسومات الجنسية (XX أنثى، XY ذكر)\n\n• **قواعد مندل:**\n  - قانون السيادة\n  - قانون الانعزال\n  - قانون التوزيع المستقل`
                },
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
        ],
        1: [
            { question: "ما هي مراحل العدوى؟", options: ["الحضانة-البادرات-الذروة-النقاهة", "الذروة-الحضانة-البادرات-النقاهة", "البادرات-الحضانة-الذروة-النقاهة", "النقاهة-الذروة-البادرات-الحضانة"], correct: 0 }
        ],
        2: [
            { question: "ما هي أكثر المخاطر شيوعاً بين كبار السن في المستشفى؟", options: ["الحروق", "السقوط", "التسمم الدوائي", "الاختناق"], correct: 1 }
        ]
    },
    amali: {
        0: [
            { question: "ما هي النسبة الصحيحة للضغطات إلى التنفس في الإنعاش القلبي الرئوي؟", options: ["30:2", "15:2", "30:1", "15:1"], correct: 0 },
            { question: "من أين يتم قياس درجة الحرارة بشكل أدق؟", options: ["الإبط", "الفم", "الشرج", "الجبين"], correct: 2 }
        ],
        1: [
            { question: "ما هي التقنية المستخدمة في القسطرة البولية؟", options: ["معقمة", "نظيفة", "عادية", "لا شيء مما سبق"], correct: 0 }
        ]
    },
    tashreeh: {
        0: [
            { question: "كم عدد عظام الإنسان البالغ؟", options: ["200", "206", "210", "215"], correct: 1 },
            { question: "أي من هذه ليس جزءاً من الجهاز الهيكلي؟", options: ["الجمجمة", "القفص الصدري", "الكبد", "العمود الفقري"], correct: 2 }
        ],
        1: [
            { question: "أي نوع من العضلات يوجد في القلب؟", options: ["هيكلية", "ملساء", "قلبية", "إرادية"], correct: 2 }
        ],
        2: [
            { question: "أي جزء من الدماغ مسؤول عن التوازن؟", options: ["المخ", "المخيخ", "جذع الدماغ", "الحبل الشوكي"], correct: 1 }
        ]
    },
    ahyaa: {
        0: [
            { question: "ما هي الوحدة الأساسية للحياة؟", options: ["النسيج", "العضو", "الخلية", "الجزيء"], correct: 2 }
        ],
        1: [
            { question: "أين توجد الميتوكوندريا في الخلية؟", options: ["النواة", "السيتوبلازم", "الغشاء", "الجدار"], correct: 1 },
            { question: "ما هي وظيفة الميتوكوندريا؟", options: ["هضم الطعام", "إنتاج الطاقة", "تخزين الماء", "تصنيع البروتين"], correct: 1 }
        ],
        2: [
            { question: "كم عدد الكروموسومات لدى الإنسان؟", options: ["23", "46", "48", "24"], correct: 1 }
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
    if (params.pageNum !== undefined) url += `/${params.pageNum}`;
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
        const pageNum = parts[3] ? parseInt(parts[3]) : 0;
        renderChapter(main, parts[1], parseInt(parts[2]), pageNum);
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
            <button class="add-btn" id="chaptersBtn">📖 ملخصات</button>
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
        <h2 class="section-title">📖 الملخصات</h2>
        <div class="chapters-grid">
            ${course.chapters.map((ch, idx) => `
                <div class="chapter-item" data-chapter="${idx}">
                    <div class="chapter-name">
                        <span class="chapter-icon">📘</span>
                        شابتر ${idx+1}: ${ch.name}
                    </div>
                    <span class="quiz-badge">عرض الملخص</span>
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

// ==================== عرض صفحة الملخص مع تقسيم الصفحات ====================
function renderChapter(container, courseId, chapterIndex, pageNum = 0) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course || !course.chapters[chapterIndex]) {
        navigateTo('home');
        return;
    }
    
    const chapter = course.chapters[chapterIndex];
    const totalPages = chapter.contentPages ? chapter.contentPages.length : 1;
    const currentPage = Math.min(pageNum, totalPages - 1);
    const content = chapter.contentPages ? chapter.contentPages[currentPage] : (chapter.summary || chapter.description || "📝 الملخص قيد التجهيز...");
    
    // إنشاء أزرار التنقل بين الصفحات
    let pageButtons = '';
    if (totalPages > 1) {
        pageButtons = `
            <div style="display: flex; justify-content: center; gap: 10px; margin: 20px 0; flex-wrap: wrap;">
                ${Array.from({ length: totalPages }, (_, i) => `
                    <button class="page-nav-btn" data-page="${i}" style="background: ${i === currentPage ? 'var(--primary-color)' : 'var(--card-bg)'}; color: ${i === currentPage ? 'white' : 'var(--text-primary)'}; border: 1px solid var(--border-color); padding: 6px 12px; border-radius: 20px; cursor: pointer; font-family: 'Tajawal', sans-serif;">
                        صفحة ${i + 1}
                    </button>
                `).join('')}
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="nav-bar">
            <button class="back-btn" id="backBtn">↩ رجوع</button>
            <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
            <span class="breadcrumb">${course.name} / ملخص شابتر ${chapterIndex+1}: ${chapter.name}</span>
        </div>
        
        <div class="welcome-card">
            <div class="avatar">📖</div>
            <div class="user-greeting">
                <h3>ملخص شابتر ${chapterIndex+1}: ${chapter.name}</h3>
                <p>${totalPages > 1 ? `صفحة ${currentPage + 1} من ${totalPages}` : 'مراجعة سريعة وشاملة للمادة'}</p>
            </div>
        </div>
        
        ${pageButtons}
        
        <div class="chapter-content">
            <div class="chapter-description" style="white-space: pre-line; line-height: 1.8; font-size: 0.9rem; direction: ltr; text-align: left;">
                ${content.replace(/\n/g, '<br>')}
            </div>
            ${chapter.pdfUrl ? `<a href="${chapter.pdfUrl}" target="_blank" class="book-link" style="display: block; text-align: center; margin-top: 20px;">📥 تحميل ملف PDF للشابتر</a>` : ''}
            <button class="submit-btn" id="takeQuizBtn" style="margin-top: 20px;">📝 إجراء اختبار الشابتر</button>
        </div>
        
        ${totalPages > 1 ? `
        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
            <button class="back-btn" id="prevPage" ${currentPage === 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>◀ الصفحة السابقة</button>
            <button class="back-btn" id="nextPage" ${currentPage === totalPages - 1 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>الصفحة التالية ▶</button>
        </div>
        ` : ''}
    `;
    
    // إضافة أحداث التنقل
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());
    document.getElementById('backToCourse').addEventListener('click', () => navigateTo('course', { courseId }));
    document.getElementById('takeQuizBtn').addEventListener('click', () => navigateTo('quiz', { courseId, chapterIndex }));
    
    if (totalPages > 1) {
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        
        if (prevBtn && currentPage > 0) {
            prevBtn.addEventListener('click', () => {
                navigateTo('chapter', { courseId, chapterIndex, pageNum: currentPage - 1 });
            });
        }
        
        if (nextBtn && currentPage < totalPages - 1) {
            nextBtn.addEventListener('click', () => {
                navigateTo('chapter', { courseId, chapterIndex, pageNum: currentPage + 1 });
            });
        }
        
        // أزرار الصفحات
        document.querySelectorAll('.page-nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.dataset.page);
                navigateTo('chapter', { courseId, chapterIndex, pageNum: page });
            });
        });
    }
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
    
    const hasBookChapters = course.bookChapters && course.bookChapters.length > 0;
    const hasMainBook = course.bookUrl && course.bookUrl !== "";
    
    if (hasBookChapters) {
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
        navigateTo('chapter', { courseId, chapterIndex: parseInt(chapterIndex), pageNum: 0 });
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
