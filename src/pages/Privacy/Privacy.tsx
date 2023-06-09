import { Container } from 'react-bootstrap';
import './Privacy.scss';

const Privacy = () => {
  return (
    <section className='privacy'>
      <div className='top_sec'>
        <h2>سياسة الخصوصية</h2>
      </div>

      <Container>
        <div className='privacy_conditions'>
          <p>
            في Aram Tech ، يمكن الوصول إليه من
            https://almanara.arambs.com/ar/landing/ ، تتمثل إحدى أولوياتنا
            الرئيسية في خصوصية زوارنا. تحتوي وثيقة سياسة الخصوصية هذه على أنواع
            المعلومات التي يتم جمعها وتسجيلها بواسطة Aram Tech وكيفية استخدامها.
          </p>
          <p>
            إذا كانت لديك أسئلة إضافية أو تحتاج إلى مزيد من المعلومات حول سياسة
            الخصوصية الخاصة بنا ، فلا تتردد في الاتصال بنا.
          </p>
          <p>
            تنطبق سياسة الخصوصية هذه فقط على أنشطتنا عبر الإنترنت وهي صالحة
            لزوار موقعنا الإلكتروني فيما يتعلق بالمعلومات التي شاركوها و / أو
            يجمعونها في Aram Tech. لا تنطبق هذه السياسة على أي معلومات يتم جمعها
            في وضع عدم الاتصال أو عبر قنوات أخرى غير هذا الموقع. تم إنشاء سياسة
            الخصوصية الخاصة بنا بمساعدة منشئ سياسة الخصوصية المجانية.
          </p>

          <div className='consent'>
            <h5>
              <strong>موافقة</strong>
            </h5>
            <p>
              باستخدام موقعنا ، فإنك بذلك توافق على سياسة الخصوصية الخاصة بنا
              وتوافق على شروطها.
            </p>
          </div>
          <div className='collect_information'>
            <h5>
              <strong>المعلومات التي نجمعها</strong>
            </h5>
            <p>
              سيتم توضيح المعلومات الشخصية التي يُطلب منك تقديمها ، وأسباب
              مطالبتك بتقديمها ، في الوقت الذي نطلب منك فيه تقديم معلوماتك
              الشخصية.
            </p>
            <p>
              إذا اتصلت بنا مباشرة ، فقد نتلقى معلومات إضافية عنك مثل اسمك
              وعنوان بريدك الإلكتروني ورقم هاتفك ومحتويات الرسالة و / أو
              المرفقات التي قد ترسلها إلينا وأي معلومات أخرى قد تختار تقديمها.
            </p>
            <p>
              عند التسجيل للحصول على حساب ، قد نطلب معلومات الاتصال الخاصة بك ،
              بما في ذلك عناصر مثل الاسم واسم الشركة والعنوان وعنوان البريد
              الإلكتروني ورقم الهاتف.
            </p>
          </div>
          <div className='how_to_us_info'>
            <h5>
              <strong>كيف نستخدم معلوماتك</strong>
            </h5>
            <ul>
              <li>نستخدم المعلومات التي نجمعها بطرق مختلفة ، بما في ذلك:</li>
              <li>توفير وتشغيل وصيانة موقعنا</li>
              <li>تحسين وتخصيص وتوسيع موقعنا</li>
              <li>فهم وتحليل كيفية استخدامك لموقعنا</li>
              <li>تطوير منتجات وخدمات وميزات ووظائف جديدة</li>
              <li>
                التواصل معك ، إما بشكل مباشر أو من خلال أحد شركائنا ، بما في ذلك
                لخدمة العملاء ، لتزويدك بالتحديثات والمعلومات الأخرى المتعلقة
                بالموقع ولأغراض تسويقية وترويجية
              </li>
              <li>أرسل لك رسائل البريد الإلكتروني</li>
              <li>البحث عن ومنع الاحتيال</li>
            </ul>
          </div>
          <div className='log_files'>
            <h5>
              <strong>ملفات الدخول</strong>
            </h5>
            <p>
              تتبع Aram Tech إجراءً قياسيًا لاستخدام ملفات السجل. تسجل هذه
              الملفات الزوار عندما يزورون مواقع الويب. تقوم جميع شركات الاستضافة
              بذلك وجزء من تحليلات خدمات الاستضافة. تتضمن المعلومات التي يتم
              جمعها بواسطة ملفات السجل عناوين بروتوكول الإنترنت (IP) ونوع
              المستعرض وموفر خدمة الإنترنت (ISP) وختم التاريخ والوقت وصفحات
              الإحالة / الخروج وربما عدد النقرات. هذه ليست مرتبطة بأي معلومات
              لتحديد الهوية الشخصية. الغرض من المعلومات هو تحليل الاتجاهات
              وإدارة الموقع وتتبع حركة المستخدمين على الموقع وجمع المعلومات
              الديموغرافية.
            </p>
          </div>
          <div className='cookies'>
            <h5>
              <strong>ملفات تعريف الارتباط وإشارات الويب</strong>
            </h5>
            <p>
              مثل أي موقع ويب آخر ، تستخدم Aram Tech "ملفات تعريف الارتباط".
              تُستخدم ملفات تعريف الارتباط هذه لتخزين المعلومات بما في ذلك
              تفضيلات الزوار والصفحات الموجودة على موقع الويب التي قام الزائر
              بالوصول إليها أو زيارتها. تُستخدم المعلومات لتحسين تجربة
              المستخدمين من خلال تخصيص محتوى صفحة الويب الخاصة بنا بناءً على نوع
              متصفح الزوار و / أو معلومات أخرى.
            </p>
          </div>
          <div className='google_doubleClick'>
            <h5>
              <strong>كوكيز دبل كليك DoubleClick DART</strong>
            </h5>
            <p>
              جوجل هو أحد البائعين الخارجيين على موقعنا. كما تستخدم ملفات تعريف
              الارتباط ، المعروفة باسم ملفات تعريف الارتباط DART ، لعرض
              الإعلانات على زوار موقعنا بناءً على زيارتهم لموقع www.website.com
              والمواقع الأخرى على الإنترنت. ومع ذلك ، قد يختار الزوار رفض
              استخدام ملفات تعريف الارتباط DART من خلال زيارة سياسة الخصوصية
              الخاصة بإعلانات Google وشبكة المحتوى على عنوان URL التالي -
              https://policies.google.com/technologies/ads
            </p>
          </div>
          <div className='advertising'>
            <h5>
              <strong>سياسات خصوصية شركاء الإعلانات</strong>
            </h5>
            <p>
              يمكنك الرجوع إلى هذه القائمة للعثور على سياسة الخصوصية لكل من
              شركاء الإعلان في Aram Tech.
            </p>
            <p>
              تستخدم خوادم الإعلانات الخارجية أو شبكات الإعلانات تقنيات مثل
              ملفات تعريف الارتباط أو جافا سكريبت أو إشارات الويب المستخدمة في
              الإعلانات والروابط الخاصة بكل منها والتي تظهر على Aram Tech ،
              والتي يتم إرسالها مباشرة إلى متصفح المستخدمين. يتلقون عنوان IP
              الخاص بك تلقائيًا عند حدوث ذلك. تُستخدم هذه التقنيات لقياس فعالية
              حملاتهم الإعلانية و / أو لتخصيص محتوى الإعلان الذي تراه على مواقع
              الويب التي تزورها.
            </p>
            <p>
              لاحظ أن Aram Tech ليس لديها حق الوصول أو التحكم في ملفات تعريف
              الارتباط هذه التي يستخدمها معلنون تابعون لجهات خارجية.
            </p>
          </div>
          <div className='third_privacy'>
            <h5>
              <strong>سياسات خصوصية الطرف الثالث</strong>
            </h5>
            <p>
              لا تنطبق سياسة خصوصية Aram Tech على المعلنين أو المواقع
              الإلكترونية الأخرى. وبالتالي ، فإننا ننصحك بالرجوع إلى سياسات
              الخصوصية الخاصة بخوادم إعلانات الجهات الخارجية للحصول على معلومات
              أكثر تفصيلاً. قد يتضمن ممارساتهم وتعليماتهم حول كيفية الانسحاب من
              بعض الخيارات.
            </p>
            <p>
              يمكنك اختيار تعطيل ملفات تعريف الارتباط من خلال خيارات المتصفح
              الفردية الخاصة بك. لمعرفة المزيد من المعلومات التفصيلية حول إدارة
              ملفات تعريف الارتباط مع متصفحات الويب المحددة ، يمكن العثور عليها
              في مواقع الويب الخاصة بالمتصفحات.
            </p>
          </div>
          <div className='CCPA_privacy'>
            <h5>
              <strong>حقوق خصوصية CCPA (لا تبيع معلوماتي الشخصية)</strong>
            </h5>
            <ul>
              <li>
                بموجب قانون حماية خصوصية المستهلك في كاليفورنيا ، من بين حقوق
                أخرى ، يحق للمستهلكين في كاليفورنيا:
              </li>
              <li>
                اطلب من الشركة التي تجمع البيانات الشخصية للمستهلك أن تكشف عن
                فئات وأجزاء معينة من البيانات الشخصية التي جمعتها الشركة عن
                المستهلكين.
              </li>
              <li>
                اطلب من شركة ما حذف أي بيانات شخصية عن المستهلك جمعتها الشركة.
              </li>
              <li>
                اطلب من الشركة التي تبيع البيانات الشخصية للمستهلك ، ألا تبيع
                البيانات الشخصية للمستهلك.
              </li>
              <li>
                إذا قمت بتقديم طلب ، فلدينا شهر واحد للرد عليك. إذا كنت ترغب في
                ممارسة أي من هذه الحقوق ، يرجى الاتصال بنا.
              </li>
            </ul>
          </div>
          <div className='GDPR'>
            <h5>
              <strong>حقوق حماية بيانات GDPR</strong>
            </h5>
            <ul>
              <li>
                نود التأكد من أنك على دراية كاملة بجميع حقوق حماية البيانات
                الخاصة بك. يحق لكل مستخدم ما يلي:
              </li>
              <li>
                الحق في الوصول - يحق لك طلب نسخ من بياناتك الشخصية. قد نفرض عليك
                رسومًا رمزية مقابل هذه الخدمة.
              </li>
              <li>
                الحق في التصحيح - يحق لك أن تطلب منا تصحيح أي معلومات تعتقد أنها
                غير دقيقة. لديك أيضًا الحق في طلب إكمال المعلومات التي تعتقد
                أنها غير كاملة.
              </li>
              <li>
                الحق في المسح - يحق لك طلب مسح بياناتك الشخصية ، في ظل ظروف
                معينة.
              </li>
              <li>
                الحق في تقييد المعالجة - يحق لك طلب تقييد معالجة بياناتك الشخصية
                ، في ظل ظروف معينة.
              </li>
              <li>
                الحق في الاعتراض على المعالجة - يحق لك الاعتراض على معالجتنا
                لبياناتك الشخصية ، في ظل ظروف معينة.
              </li>
              <li>
                الحق في نقل البيانات - يحق لك أن تطلب منا نقل البيانات التي
                جمعناها إلى مؤسسة أخرى ، أو إليك مباشرةً ، في ظل ظروف معينة.
              </li>
              <li>
                إذا قمت بتقديم طلب ، فلدينا شهر واحد للرد عليك. إذا كنت ترغب في
                ممارسة أي من هذه الحقوق ، يرجى الاتصال بنا.
              </li>
            </ul>
          </div>
          <div className='children_info'>
            <h5>
              <strong>معلومات الأطفال</strong>
            </h5>
            <p>
              جزء آخر من أولوياتنا هو إضافة حماية للأطفال أثناء استخدام
              الإنترنت. نشجع الآباء والأوصياء على مراقبة نشاطهم عبر الإنترنت
              والمشاركة فيه و / أو مراقبته وتوجيهه.
            </p>
            <p>
              لا تجمع Aram Tech عن قصد أي معلومات تعريف شخصية من الأطفال دون سن
              13 عامًا. إذا كنت تعتقد أن طفلك قدم هذا النوع من المعلومات على
              موقعنا ، فنحن نشجعك بشدة على الاتصال بنا على الفور وسنبذل قصارى
              جهدنا على الفور إزالة هذه المعلومات من سجلاتنا.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Privacy;
