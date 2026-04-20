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
                        `📖 **الصفحة 1: مفهوم اللا إنتانية (Asepsis) والكائنات الحية الدقيقة**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **أولاً: مفهوم Asepsis (اللا إنتانية / منع العدوى)**

📌 **التعريف الطبي الدقيق:**
Asepsis means those practices that decrease or eliminate infectious agents, their reservoirs, and vehicles for transmission. It is the major method for controlling infection.

**الترجمة الطبية:**
اللا إنتانية (Asepsis) تعني الممارسات التي تقلل أو تقضي على العوامل المعدية ومستودعاتها ووسائل نقلها. وهي الطريقة الرئيسية لمكافحة العدوى.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **التحليل اللغوي للمصطلح:**
• "A" → أداة نفي بمعنى "بدون" (Without)
• "Sepsis" → تعني "إنتان" أو "تعفن دم" (وليس عدوى)

**إذن المعنى الكامل: بدون إنتان → منع العدوى**

⚠️ **ملاحظة مهمة:**
• Infection = عدوى
• Sepsis = إنتان / تعفن دم (حالة خطيرة نتيجة العدوى)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **الأولوية التمريضية:**
Preventing infections is one of the most important priorities in nursing.

**الترجمة:**
يُعد منع العدوى أحد أهم الأولويات في مهنة التمريض.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **ثانياً: الكائنات الحية الدقيقة (Microorganisms)**

📌 **التعريف:**
Microorganisms, living animals or plants visible only with a microscope, are commonly called germs.

**الترجمة الطبية:**
الكائنات الحية الدقيقة، وهي كائنات حية (حيوانات أو نباتات) لا تُرى إلا بالمجهر، تُسمى عادةً بالميكروبات أو الكائنات الممرضة.

⚠️ **ملاحظة:** كلمة "جراثيم" ليست دقيقة لكل الأنواع، الأفضل استخدام "ميكروبات".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **الحجم مقابل العدد:**
What they lack in size, they make up for in numbers.

**الترجمة:**
وما تفتقر إليه هذه الكائنات في الحجم، تعوضه في أعدادها الكبيرة.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **أماكن التواجد:**
Microorganisms are everywhere: in the air, soil, and water, and on and within virtually everything and everyone.

**الترجمة:**
تتواجد الكائنات الحية الدقيقة في كل مكان: في الهواء والتربة والماء، وعلى (وفي داخل) كل شيء وكل شخص تقريباً.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **الخلاصة العلمية:**
فهم طبيعة هذه الميكروبات وانتشارها الواسع هو الخطوة الأولى لتحقيق هدف التمريض الأساسي وهو "اللا إنتانية" أو منع العدوى.`,
                        `📖 **الصفحة 2: أنواع الكائنات الحية الدقيقة**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Types of Microorganisms (أنواع الكائنات الحية الدقيقة)**

📌 **التقسيم الرئيسي:**
Microorganisms are divided into two main groups: nonpathogens or normal flora and pathogens.

**الترجمة الطبية:**
تنقسم الكائنات الحية الدقيقة إلى مجموعتين رئيسيتين: غير الممرضة (أو الفلورا الطبيعية) والممرضة.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **1. Non-Pathogens (غير الممرضة)**

📌 **التعريف:**
Non Pathogens: Mutually beneficial, or neither harming nor helping the host.

**الترجمة الطبية الدقيقة:**
غير الممرضة: كائنات متعايشة (Commensal) أو نافعة أحياناً، ولا تسبب ضرراً للعائل.

⚠️ **ملاحظة:** بعضها مفيد فعلاً (مثل بكتيريا الأمعاء التي تساعد في إنتاج فيتامين K).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **2. Pathogens (الممرضة)**

📌 **التعريف:**
Pathogens have high potential for causing infectious communicable diseases also called contagious diseases and community-acquired infections.

**الترجمة:**
الممرضة: لديها إمكانية عالية للتسبب في أمراض معدية منقولة، وتسمى أيضاً بالأمراض السارية (المعدية) والعدوى المكتسبة من المجتمع.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **أنواع الميكروبات المسببة للأمراض (بالتفصيل):**

🦠 **1. Bacteria (البكتيريا)**
   • Single-celled microorganisms.
   • كائنات حية دقيقة وحيدة الخلية.

🦠 **2. Viruses (الفيروسات)**
   • The smallest microorganisms.
   • أصغر الكائنات الحية الدقيقة.

🦠 **3. Fungi (الفطريات)**
   • Include yeasts and molds.
   • تشمل الخمائر والعفن.

🦠 **4. Rickettsiae (الريكتسيا)**
   • Resemble bacteria; like viruses presented in fleas and lice.
   • بكتيريا داخل خلوية إجبارية تنتقل عبر الحشرات (مثل البراغيث والقمل).

⚠️ **ملاحظة:** التشبيه بالفيروسات غير دقيق علمياً، الريكتسيا هي بكتيريا داخل خلوية إجبارية.

🦠 **5. Protozoans (البروتوزوا/الأوليات)**
   • Single-celled animals like amebia.
   • كائنات أولية وحيدة الخلية مثل الأميبا.

⚠️ **ملاحظة:** ليست "حيوانات" حرفياً، بل كائنات أولية.

🦠 **6. Mycoplasmas (الميكوبلازما)**
   • Lack a cell wall. They are referred to as pleomorphic.
   • تفتقر إلى جدار خلوي، ويشار إليها بأنها "متعددة الأشكال".

🦠 **7. Helminths (الديدان الطفيلية)**
   • Are infectious worms.
   • هي ديدان معدية.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **معلومة إضافية:**
بعض الكائنات الدقيقة أقل خطورة من غيرها. على سبيل المثال، تساعد البكتيريا المعوية في إنتاج فيتامين K، والذي بدوره يساعد في السيطرة على النزيف.`,
                        `📖 **الصفحة 3: بقاء الميكروبات على قيد الحياة (Survival)**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Survival of Microorganisms (بقاء الكائنات الحية الدقيقة)**

📌 **قدرة الميكروبات على التكيف:**
Many pathogens have mutated to adapt to hostile environments and unfavorable living conditions. Such adaptability has ensured that they continue to pose a threat to humans.

**الترجمة:**
لقد تحورت العديد من مسببات الأمراض للتكيف مع البيئات المعادية وظروف المعيشة غير المواتية. وقد ضمنت هذه القدرة على التكيف استمرارها في تشكيل تهديد للبشر.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Spore (البوغة)**

📌 **التعريف الطبي:**
A spore is a temporarily inactive microbial life form that can resist heat and destructive chemicals and survive without moisture.

**الترجمة:**
البوغة (Spore): هي شكل من أشكال الحياة الميكروبية غير النشطة مؤقتاً، والتي يمكنها مقاومة الحرارة والمواد الكيميائية المدمرة والبقاء على قيد الحياة دون رطوبة.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **خصائص البوغة (Spore):**

✅ 1. طور غير نشط مؤقتاً (Temporarily inactive)
✅ 2. تقاوم الحرارة العالية (Resist heat)
✅ 3. تقاوم المواد الكيميائية (Resist chemicals)
✅ 4. تعيش بدون رطوبة (Survive without moisture)
✅ 5. تنشط مرة أخرى عندما تجد الظروف المناسبة

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **الأهمية السريرية:**
• الأبواغ تجعل بعض البكتيريا مقاومة للتعقيم العادي
• تتطلب القضاء عليها تعقيمًا جراحياً (Sterilization) وليس تطهيراً عادياً
• مثال: بكتيريا Clostridium difficile (C. diff) تنتج أبواغاً مقاومة`,
                        `📖 **الصفحة 4: سلسلة العدوى (Chain of Infection) - المكونات الستة**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Chain of Infection (سلسلة العدوى)**

📌 **المبدأ الأساسي:**
By interfering with the conditions that perpetuate the transmission of microorganisms, humans can avoid acquiring infectious diseases.

**الترجمة:**
من خلال التدخل في الظروف التي تسمح باستمرار انتقال الكائنات الحية الدقيقة، يمكن للبشر تجنب الإصابة بالأمراض المعدية.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **المكونات الستة الأساسية لسلسلة العدوى:**

1️⃣ **Infectious Agent (العامل المعدي)**
   • الميكروب المسبب للمرض (بكتيريا، فيروس، فطريات، إلخ)

2️⃣ **Reservoir (المستودع/الخزان)**
   • المكان الذي ينمو فيه الميكروب ويتكاثر
   • أمثلة: إنسان، حيوان، ماء، طعام، بيئة، معدات

3️⃣ **Portal of Exit (منفذ خروج العامل الممرض من الجسم)**
   • كيف يخرج الميكروب من المستودع
   • أمثلة: الدم، السعال، الإفرازات، البول، البراز، القطيرات

4️⃣ **Mode of Transmission (طريقة الانتقال)**
   • كيف ينتقل الميكروب من مكان إلى آخر

5️⃣ **Portal of Entry (منفذ الدخول)**
   • مكان دخول الميكروب إلى العائل الجديد
   • أمثلة: الأغشية المخاطية، الجهاز التنفسي، الهضمي، البولي، الجروح

6️⃣ **Susceptible Host (العائل القابل للإصابة)**
   • الشخص الذي لديه استعداد للمرض بسبب تثبيط المناعة

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **تفاصيل كل مكون:**

📌 **1. Infectious Agent (العامل المعدي):**
   • Bacteria (البكتيريا)
   • Viruses (الفيروسات)
   • Fungi (الفطريات)
   • Rickettsiae (الريكتسيا)
   • Protozoans (الأوالي)
   • Mycoplasmas (الميكوبلازما)
   • Helminths (الديدان الطفيلية)
   • Prions (البريونات)

📌 **2. Reservoirs (المستودعات):**
   • People (الأشخاص)
   • Equipment (المعدات)
   • Water (المياه)

📌 **3. Portal of Exit (منفذ الخروج):**
   • GU tract (السبيل البولي التناسلي)
   • Secretions (الإفرازات)
   • Excretions (المفرزات/الفضلات)
   • Droplets (القطيرات/الرذاذ)

📌 **4. Portal of Entry (منفذ الدخول):**
   • Mucous membrane (الغشاء المخاطي)
   • GI tract (السبيل المعدي المعوي)
   • Respiratory tract (السبيل التنفسي)
   • Broken skin (الجلد المكسور)
   • Skin (الجلد السليم)

📌 **5. Means of Transmission (وسائل الانتقال):**
   • Direct contact (التماس المباشر)
   • Ingestion (البلع/الابتلاع)
   • Fomites (الأسطح الملوثة)
   • Airborne (المحمول جواً)

📌 **6. Susceptible Host (العائل القابل للإصابة):**
   • Immunosuppression (تثبيط المناعة)
   • Diabetes (السكري)
   • Surgery (الجراحة)
   • Burns (الحروق)
   • Old age (كبار السن)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **المبدأ الوقائي:**
منع انتشار العدوى يعتمد على **"كسر"** حلقة واحدة على الأقل من حلقات سلسلة العدوى الست.`,
                        `📖 **الصفحة 5: طرق انتقال العدوى (Methods of Transmission)**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Methods of Transmission (طرق الانتقال)**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **1. CONTACT TRANSMISSION (الانتقال بالتلامس/التماس)**

• **Direct contact (التلامس المباشر):**
  Actual physical transfer from one infected person to another (body surface to body surface contact)
  انتقال فيزيائي فعلي من شخص مصاب إلى آخر (تلامس سطح الجسم مع سطح الجسم)

• **Indirect contact (التلامس غير المباشر):**
  Contact between a susceptible person and a contaminated object
  تلامس بين شخص قابل للإصابة وجسم ملوث

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **2. DROPLET TRANSMISSION (الانتقال بالقطيرات/الرذاذ)**

• Transfer of moist particles from an infected person who is within a radius of 3 ft (حوالي 90 سم)
  انتقال جزيئات رطبة من شخص مصاب ضمن نطاق نصف قطر 3 أقدام

• **Example:** Inhalation of droplets released during sneezing, coughing, or talking
  **مثال:** استنشاق القطيرات المنطلقة أثناء العطاس أو السعال أو التحدث

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **3. AIRBORNE TRANSMISSION (الانتقال المحمول جواً)**

• Movement of microorganisms attached to evaporated water droplets or dust particles that have been suspended and carried over distances greater than 3 ft
  حركة الكائنات الدقيقة المرتبطة بقطيرات ماء متبخرة أو جزيئات غبار علقت في الهواء وانتقلت لمسافات تزيد عن 3 أقدام

• **Example:** Inhalation of spores
  **مثال:** استنشاق الأبواغ (السبورات)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **4. VEHICLE TRANSMISSION (الانتقال عبر وسائط)**

• Transfer of microorganisms present on or in contaminated items such as food, water, medications, devices, and equipment
  انتقال الكائنات الدقيقة الموجودة على أو داخل مواد ملوثة مثل الطعام، الماء، الأدوية، الأجهزة، والمعدات

• **Example:** Consumption of water contaminated with microorganisms
  **مثال:** تناول ماء ملوث بالكائنات الدقيقة

⚠️ **ملاحظة:** "Vehicle" هنا تعني وسائط (غذاء، ماء، أدوات) وليس مجرد "ناقل".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **5. VECTOR TRANSMISSION (الانتقال بواسطة ناقل حيوي)**

• Transfer of microorganisms from an infected animal carrier
  انتقال الكائنات الدقيقة من حيوان حامل مصاب

• **Example:** Diseases spread by mosquitoes, fleas, ticks, or rats
  **مثال:** أمراض ينقلها البعوض، البراغيث، القراد، أو الجرذان

⚠️ **ملاحظة:** "Vector" تعني ناقل حيوي (مثل البعوض).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **ملخص طرق الانتقال:**

• Direct Contact → لمس شخص مصاب
• Indirect Contact → لمس سطح ملوث
• Droplet → رذاذ العطاس أو السعال
• Airborne → استنشاق الأبواغ
• Vehicle → طعام أو ماء ملوث
• Vector → لدغة بعوضة`,
                        `📖 **الصفحة 6: العائل القابل للإصابة (Susceptible Host)**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Susceptible Host (العائل القابل للإصابة)**

📌 **التعريف:**
Humans become susceptible to infections when their defense mechanisms are diminished or impaired. A susceptible host, the last link in the chain of infection, is one whose biologic defense mechanisms are weakened in some way.

**الترجمة:**
يصبح البشر عرضة للإصابة بالعدوى عندما تضعف أو تتعطل آليات دفاعهم. العائل القابل للإصابة، وهو الحلقة الأخيرة في سلسلة العدوى، هو الذي تكون آلياته الدفاعية البيولوجية ضعيفة بشكل ما.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **المرضى الأكثر عرضة للإصابة (Particularly susceptible clients):**

✅ 1. Older adults (كبار السن)
✅ 2. Premature infants (الرضع المبتسرون)
✅ 3. Burn victims (ضحايا الحروق)
✅ 4. Major trauma (رضوض كبيرة/صدمات شديدة)
✅ 5. Invasive procedures such as endoscopy (إجراءات تدخلية مثل التنظير الداخلي)
✅ 6. Indwelling equipment such as urinary catheter (معدات مقيمة مثل القسطرة البولية)
✅ 7. Implantable devices such as intravenous catheters (أجهزة قابلة للزرع مثل القسطرات الوريدية)
✅ 8. Antibiotics inappropriately (مضادات حيوية بطريقة غير مناسبة - تعزز مقاومة الميكروبات)
✅ 9. Anticancer drugs (أدوية مضادة للسرطان)
✅ 10. Corticosteroids (الكورتيكوستيرويدات - تثبط المناعة)
✅ 11. Infected with HIV (مصابون بفيروس نقص المناعة البشرية)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Nosocomial Infection (العدوى المكتسبة من المستشفيات)**

📌 **التعريف:**
Nurses must understand and practice methods to prevent nosocomial infections (infections acquired while a person is receiving care in a health care agency).

**الترجمة:**
يجب على الممرضين فهم وممارسة أساليب الوقاية من العدوى المكتسبة في المستشفى (العدوى التي تُكتسب أثناء تلقّي الشخص للرعاية في إحدى مؤسسات الرعاية الصحية).

📌 **معلومات إضافية:**
• تسمى أيضاً Hospital-acquired infection
• غالباً ما تنتج عن خلل في إجراءات التعقيم أو نظافة الطاقم الطبي
• من أخطر أنواع العدوى لأن الميكروبات في المستشفى تكون غالباً مقاومة للمضادات الحيوية`,
                        `📖 **الصفحة 7: أنواع اللا إنتانية (Asepsis) وقواعدها**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Types of Asepsis (أنواع اللا إنتانية)**

📌 **1. Medical Asepsis (اللا إنتانية الطبية)**
   • Called: Clean technique (التقنية النظيفة)
   • Definition: Practices that confine or reduce the numbers of microorganisms
   • الهدف: تقليل عدد الميكروبات ومنع انتشارها

📌 **2. Surgical Asepsis (اللا إنتانية الجراحية)**
   • Called: Sterile technique (التقنية المعقمة)
   • Definition: Eliminates all microorganisms, including spores
   • الهدف: القضاء التام على جميع الميكروبات بما فيها الأبواغ

⚠️ **ملاحظة مهمة:**
• Asepsis (اللا إنتانية) ≠ Sterilization (التعقيم)
• اللا إنتانية تهدف لمنع العدوى، بينما التعقيم يهدف للقتل التام

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Principles of Medical Asepsis (قواعد اللا إنتانية الطبية)**

1. Microorganisms exist everywhere except on sterilized equipment.
   الميكروبات موجودة في كل مكان إلا في الأدوات المعقمة.

2. Frequent hand hygiene and maintaining intact skin are the best methods for reducing the transmission of microorganisms.
   غسل اليدين المتكرر والحفاظ على سلامة الجلد هما أفضل طرق للحد من انتقال الميكروبات.

3. Blood, body fluids, cells, and tissues are considered major reservoirs of microorganisms.
   الدم، سوائل الجسم، الخلايا، والأنسجة تعتبر مستودعات رئيسية للميكروبات.

4. Personal protective equipment (gloves, gowns, masks, goggles, hair and shoe covers) serves as a barrier to microbial transmission.
   معدات الوقاية الشخصية (قفازات، أردية، أقنعة، نظارات، أغطية الرأس والحذاء) تشكل حاجزاً ضد انتقال الميكروبات.

5. A clean environment reduces microorganisms.
   البيئة النظيفة تقلل من الميكروبات.

6. Certain areas (floor, toilets, insides of sinks) are more contaminated than others.
   بعض المناطق (الأرضية، المراحيض، داخل الأحواض) أكثر تلوثاً من غيرها.

7. Cleaning should be done from cleaner to dirtier areas.
   يجب أن يتم التنظيف من المناطق النظيفة إلى المناطق المتسخة.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Examples of medical aseptic practices (أمثلة على ممارسات اللا إنتانية الطبية):**

✅ Using antimicrobial agents (استخدام العوامل المضادة للميكروبات)
✅ Performing hand hygiene (القيام بنظافة اليدين)
✅ Wearing hospital garments (ارتداء الملابس المستشفوية)
✅ Confining and containing soiled materials appropriately (حصر المواد المتسخة بشكل مناسب)
✅ Keeping the environment as clean as possible (الحفاظ على البيئة نظيفة قدر الإمكان)`,
                        `📖 **الصفحة 8: العوامل المضادة للميكروبات (Antimicrobial Agents)**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Antimicrobial Agents (العوامل المضادة للميكروبات)**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **1. Soap (الصابون)**
   • Mechanism: Lowers surface tension of oil on skin, facilitates removal during rinsing
   • الآلية: يخفض التوتر السطحي للزيت على الجلد، ويسهل إزالتها أثناء الشطف
   • Use: Hygiene (النظافة)

📌 **2. Detergent (المنظف)**
   • Mechanism: Acts like soap, no precipitate with water
   • الآلية: يعمل مثل الصابون، لا يشكل راسباً مع الماء
   • Use: Sanitizing eating utensils, laundry (تعقيم أدوات الأكل، الغسيل)

📌 **3. Alcohol (الكحول - تركيز 70%)**
   • Mechanism: Injures protein and lipid structures in cellular membrane
   • الآلية: يصيب تركيب البروتين والدهون في الغشاء الخلوي
   • Use: Cleansing skin, instruments (تنظيف الجلد، الأدوات)

📌 **4. Iodine (اليود / Betadine)**
   • Mechanism: Damages cell membrane, disrupts enzyme functions
   • الآلية: يتلف الغشاء الخلوي، ويعطل وظائف الإنزيمات
   • Note: Not effective against Pseudomonas (غير فعال ضد الزائفة)
   • Use: Cleansing skin (تنظيف الجلد)

📌 **5. Chlorine (الكلور / Bleach)**
   • Mechanism: Interferes with microbial enzyme systems
   • الآلية: يتداخل مع أنظمة الإنزيمات الميكروبية
   • Use: Disinfecting water, utensils, blood spills (تطهير الماء، أدوات الأكل، انسكابات الدم)

📌 **6. Chlorhexidine (الكلورهيكسيدين / Hibiclens)**
   • Mechanism: Damages cell membrane, ineffective against spores and most viruses
   • الآلية: يتلف الغشاء الخلوي، لكنه غير فعال ضد الأبواغ ومعظم الفيروسات
   • Use: Cleansing skin and equipment (تنظيف الجلد والمعدات)

📌 **7. Mercury (الزئبق)**
   • Mechanism: Alters microbial cellular proteins
   • الآلية: يغير بروتينات الخلايا الميكروبية
   • Use: Disinfecting skin (تطهير الجلد)

📌 **8. Glutaraldehyde (الغلوتارالدهيد / Cidex)**
   • Mechanism: Inactivates cellular proteins of bacteria, viruses, and spores
   • الآلية: يعطل بروتينات الخلايا للبكتيريا والفيروسات والأبواغ
   • Use: Sterilizing equipment (تعقيم المعدات)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **الفرق بين Antiseptics و Disinfectants:**

📌 **Antiseptics (المطهرات)**
   • تستخدم على الجلد
   • تمنع نمو الميكروبات
   • خفيفة وآمنة للأنسجة الحية
   • مثال: الكحول، البيتادين

📌 **Disinfectants (المُطهِّرات / مبيدات الميكروبات)**
   • تستخدم للأسطح والجدران والمعدات
   • تقتل الميكروبات النشطة
   • قوية جداً لا تصلح للجلد
   • مثال: الكلور، الفينول

⚠️ **تنبيه مهم:**
• Disinfectant ≠ معقم (Sterilization)
• المُطهِّر يقتل الميكروبات النشطة لكن ليس بالضرورة الأبواغ
• التعقيم (Sterilization) يقضي على جميع أشكال الحياة الميكروبية بما فيها الأبواغ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Anti-Infective Drugs (الأدوية المضادة للعدوى):**

📌 **Antibiotics (المضادات الحيوية):**
   • Alter the metabolic processes of bacteria but not viruses
   • تؤثر فقط على البكتيريا ولا تعالج الفيروسات
   • Damage or destroy bacterial cell walls
   • تتلف أو تدمر جدران الخلايا البكتيرية

📌 **Antivirals (مضادات الفيروسات):**
   • Do not destroy the infecting viruses
   • لا تدمر الفيروسات المسببة للعدوى
   • Control viral replication or their release from infected cells
   • تتحكم في تكاثر الفيروسات أو إطلاقها من الخلايا المصابة`,
                        `📖 **الصفحة 9: غسل اليدين (Hand Washing) والفرك الجراحي**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Hand Washing (غسل اليدين)**

📌 **الأهمية:**
Hand washing is an aseptic practice that involves scrubbing the hands with soap, water, and friction. Considering how often health care personnel use their hands with clients, it is no surprise that handwashing is the single most effective way to prevent infections.

**الترجمة:**
غسل اليدين هو ممارسة تعقيمية تتضمن فرك اليدين بالصابون والماء والاحتكاك. وبالنظر إلى مدى تكرار استخدام العاملين في الرعاية الصحية لأيديهم مع المرضى، فليس من المستغرب أن يكون غسل اليدين هو الطريقة الأكثر فعالية لمنع العدوى.

📌 **المدة المطلوبة:**
يجب الفرك بالصابون لمدة لا تقل عن **15 إلى 20 ثانية**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Alcohol-based hand rubs (معقمات اليدين الكحولية)**

📌 **آلية العمل:**
Alcohol-based hand rubs remove microorganisms on the hands.

**الترجمة:**
فرك اليدين بالكحول يزيل الكائنات الدقيقة من اليدين.

📌 **مميزات معقمات اليدين الكحولية:**

✅ Take less time (تستغرق وقتاً أقل)
✅ More accessible (أكثر سهولة في الوصول)
✅ Increase compliance (تزيد الالتزام بممارسات النظافة)
✅ Provide convenience based on their location at the client's point of care (توفر الراحة لوجودها في نقطة رعاية المريض)

📌 **ملاحظة مهمة:**
Alcohol formulations have a brief rather than sustained antiseptic effect, however, nurses must reuse them over the course of a day.

التركيبات الكحولية لها تأثير مطهر قصير وليس طويل الأمد، ومع ذلك، يجب على الممرضين إعادة استخدامها على مدار اليوم.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Performing a Surgical Scrub (الفرك الجراحي)**

📌 **التعريف:**
A surgical scrub, a type of skin and nail antisepsis, is performed before donning sterile gloves and garments when the nurse is actively involved in an operative or obstetric procedure. The purpose is to more extensively remove transient microorganisms from the nails, hands, and forearms.

**الترجمة:**
الفرك الجراحي، وهو نوع من تعقيم الجلد والأظافر، يُؤدى قبل ارتداء القفازات والملابس المعقمة عندما يشارك الممرض بنشاط في إجراء عملية جراحية أو توليدية. الهدف هو إزالة الكائنات الدقيقة العابرة بشكل أكثر شمولاً من الأظافر واليدين والساعدين.

📌 **قواعد الفرك الجراحي:**

✅ يتم قبل لبس الملابس المعقمة والعمليات
✅ يستغرق من 2 إلى 6 دقائق
✅ يجب خلع جميع المجوهرات والساعات
✅ يجب إبقاء اليدين مرفوعتين (فوق مستوى الكوع) بعد الغسل`,
                        `📖 **الصفحة 10: الفرق بين غسل اليدين والتعقيم الجراحي**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **الفرق بين غسل اليدين العادي والتعقيم الجراحي لليدين**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **Hand Washing (غسل اليدين العادي):**

• يمكن ارتداء خاتم الزواج العادي (غير المرصع)
• تُستخدم حنفيات ذات تحكم يدوي؛ ويفضل استخدام تحكم بالكوع أو الركبة أو القدم
• يُستخدم صابون سائل أو قطعة صابون أو صابون بودرة أو منظف
• يستمر الغسل لمدة 15 ثانية كحد أدنى
• تُحفظ اليدين بمستوى أقل من المرفقين أثناء الغسل والشطف والتجفيف
• يتم غسل المناطق الموجودة تحت الأظافر
• يُولد الاحتكاك بحك اليدين ببعضهما
• تُجفف اليدين بمناشف ورقية؛ ويُستخدم الورق لإغلاق حنفيات التحكم اليدوي
• تُلبس قفازات نظيفة إذا كانت لدى الممرض جروح مفتوحة أو إذا كان هناك احتمال للتلامس مع الدم أو سوائل الجسم

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **Surgical Hand Antisepsis (التعقيم الجراحي لليدين):**

• تُخلع جميع حلي اليد بما في ذلك الساعات
• تُشغل الحنفيات بواسطة تحكم بالكوع أو الركبة أو القدم
• يُستخدم صابون سائل مضاد للبكتيريا؛ وقد تُدمج أدوات مثل الإسفنج مع الصابون المضاد للبكتيريا
• يستمر التعقيم لمدة 2-6 دقائق، حسب العامل المضاد للبكتيريا والفاصل الزمني بين التكرارات التالية
• تُحفظ اليدين بمستوى أعلى من المرفقين أثناء الغسل والشطف والتجفيف
• تُنظف المناطق الموجودة تحت الأظافر باستخدام عود برتقالي أو مادة مماثلة لتنظيف الأظافر
• يُولد الاحتكاك بالفرك بفرشاة و/أو إسفنجة
• تُجفف اليدين بمناشف معقمة
• تُلبس القفازات المعقمة فور تجفيف اليدين

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Wearing Personal Protective Equipment (ارتداء معدات الوقاية الشخصية - PPE)**

📌 **مكونات PPE:**

✅ Uniforms (الزي الرسمي)
✅ Scrub suits or gowns (البدلات الجراحية أو الأردية)
✅ Masks (الأقنعة)
✅ Gloves (القفازات)
✅ Protective eyewear (النظارات الواقية)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Gloves (القفازات)**

📌 **القفازات النظيفة (Clean/Examination Gloves):**
   تُلبس عند احتمال ملامسة الدم، السوائل، الإفرازات، أو الجلد غير السليم

📌 **القفازات المعقمة (Sterile Gloves):**
   تُلبس في الإجراءات الجراحية

📌 **ملاحظة:**
القفازات مصنوعة من اللاتكس، الذي قد يسبب حساسية لبعض الناس`,
                        `📖 **الصفحة 11: حصر المواد المتسخة ونظافة البيئة**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Confining Soiled Articles (حصر المواد المتسخة)**

📌 **Utility Rooms (غرف الخدمات/المرافق):**

• Health care agencies have at least two utility rooms: one designated clean and the other considered dirty.
  تمتلك مؤسسات الرعاية الصحية غرفتي خدمة على الأقل: واحدة مخصصة للنظيف والأخرى تعتبر متسخة.

• Personnel must not place soiled articles in the clean utility room.
  يجب على الموظفين عدم وضع المواد المتسخة في غرفة الخدمات النظيفة.

📌 **Waste Receptacles (حاويات النفايات):**

• Agencies rely on various methods to contain soiled articles until they can be discarded.
  تعتمد المؤسسات على طرق متنوعة لحصر المواد المتسخة حتى يمكن التخلص منها.

• Most client rooms have a wall-mounted puncture-resistant container for needles or other sharp objects.
  تحتوي معظم غرف المرضى على حاوية مثبتة على الحائط مقاومة للثقب للإبر أو الأشياء الحادة الأخرى.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **Environmental Hygiene (نظافة البيئة والمستشفى)**

📌 **نقاط مهمة:**

✅ غرف الأدوات (Utility Rooms): يوجد نوعان؛ "نظيفة" و"متسخة"، ويمنع وضع المخلفات في الغرف النظيفة

✅ صناديق الأدوات الحادة (Sharps Container): للتخلص من الإبر والشفرات

✅ التطهير النهائي (Terminal Disinfection): تنظيف شامل للغرفة والسرير والجدران بالكلور بعد خروج المريض (Discharge)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **مصطلحات إضافية (مهن طبية):**

🔹 1. Nurse (ممرض)
🔹 2. Doctor (طبيب)
🔹 3. Pharmacist (صيدلي)
🔹 4. Dentist (طبيب أسنان)
🔹 5. Physician (طبيب باطني)
🔹 6. Veterinarian (طبيب بيطري)
🔹 7. Psychiatrist (طبيب نفسي)
🔹 8. Social worker (أخصائي اجتماعي)
🔹 9. Teacher (معلم)
🔹 10. Engineer (مهندس)`,
                        `📖 **الصفحة 12: الملخص النهائي لشابتر Asepsis**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **الخلاصة النهائية لشابتر اللا إنتانية (Asepsis)**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **1. مفهوم Asepsis:**
   كلمة Asepsis = A (بدون) + Sepsis (إنتان) = منع الإنتان / اللا إنتانية
   ⚠️ ملاحظة: Sepsis = إنتان (وليس عدوى)

📌 **2. الكائنات الحية الدقيقة:**
   • موجودة في كل مكان (هواء، تربة، ماء، أسطح، أجسام)
   • تنقسم إلى: ممرضة (Pathogens) وغير ممرضة (Non-pathogens / متعايشة)

📌 **3. سلسلة العدوى (6 مكونات):**
   عامل معدٍ → مستودع → منفذ خروج → طريقة انتقال → منفذ دخول → عائل قابل للإصابة

📌 **4. طرق انتقال العدوى (6 طرق):**
   تلامس مباشر، تلامس غير مباشر، رذاذ، محمول جواً، وسائط، ناقل حيوي

📌 **5. أنواع Asepsis:**
   • Medical Asepsis (تقنية نظيفة) → تقليل الميكروبات
   • Surgical Asepsis (تقنية معقمة) → قضاء تام على الميكروبات

📌 **6. أهم إجراءات الوقاية:**
   • غسل اليدين (15-20 ثانية)
   • استخدام معقمات الكحول
   • ارتداء معدات الوقاية الشخصية (PPE)
   • التعقيم والتطهير المناسب
   • نظافة البيئة

📌 **7. الفرق بين المطهر والمُطهِّر:**
   • Antiseptic (مطهر) → للجلد
   • Disinfectant (مُطهِّر) → للأسطح

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 **المفتاح الذهبي للنجاح في الامتحان:**

💡 تذكر دائماً: غسل اليدين هو الطريقة الأكثر فعالية لمنع انتشار العدوى!

💡 لكسر سلسلة العدوى، يمكنك التدخل في أي من مكوناتها الستة!

💡 الفرق بين Medical Asepsis و Surgical Asepsis:
   • Medical → يقلل العدد
   • Surgical → يقضي على الجميع (بما فيها الأبواغ)

💡 الفرق بين Infection و Sepsis:
   • Infection = عدوى
   • Sepsis = إنتان / تعفن دم

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 **نهاية ملخص شابتر 1 - Asepsis (اللا إنتانية)**
📌 **تم بحمد الله**`
                    ],
                    summary: "ملخص كامل لشابتر Asepsis (اللا إنتانية) مقسم إلى 12 صفحة"
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

// ==================== عرض صفحة الملخص ====================
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
            <div class="chapter-description" style="white-space: pre-line; line-height: 1.8; font-size: 0.9rem;">
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
