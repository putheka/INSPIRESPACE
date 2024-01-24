// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          welcome: {
            text: "<span> MAKE</span> Your Comfort Is <span> HAPPINESS </span>",
            p:"Welcome to FURNITURE, where joy meets design. Elevate your space with our curated furniture collection, crafted to bring happiness and style into your home.",
            button:" Discover More About Us"
          },
          partner:{
            title:"OUR PARTNER",
            partner1_h3:"Global Innovation Partner",
            partner1_p:"Proud to collaborate with Google, a leader in cutting-edge technology and innovation. Together, we strive to create modern and intelligent living spaces.",
            partner2_h3:"Entertainment Excellence",
            partner2_p:"Partnering with Netflix to bring the ultimate cinematic experience into your home. Enjoy unparalleled comfort and style while indulging in your favorite shows and movies.",
            partner3_h3:"Coffeehouse Collaboration",
            partner3_p:"Sip in style with our Starbucks collaboration. Elevate your coffee moments at home with furniture that complements the warmth and inviting ambiance of your favorite coffeehouse.",
            partner4_h3:"Driving Design Forward",
            partner4_p:"Accelerate your living spaces with our Tesla partnership. Inspired by the innovation of electric mobility, our furniture reflects the sleek design and forward-thinking ethos of Tesla."

          },
          about:{
            title:"About Us",
            description:"At INSPIRE SPACE, we are passionate about transforming houses into homes. Our journey began with a simple belief – that well-crafted furniture has the power to enhance the quality of life. With an unwavering commitment to craftsmanship and design, we curate collections that not only reflect timeless elegance but also encapsulate the unique stories of those who make a house a home. Join us in creating spaces that inspire, comfort, and tell your story. Welcome to a world where furniture isn't just functional, it's an expression of living well..",
            why:"Why Choose Us?",
            craftsmanship: "Craftsmanship Excellence",
            timelessDesign: "Timeless Design",
            customization: "Customization Options",
            qualityMaterials: "Quality Materials",
            exceptionalComfort: "Exceptional Comfort",
            affordableLuxury: "Affordable Luxury",
            dedicatedCustomerService: "Dedicated Customer Service",
            sustainabilityCommitment: "Sustainability Commitment",
          },
          comment:{
            title:"what our client say",
            comment1_p:"Incredible service and attention to detail! InspireSpace turned our house into a dream home. Every piece reflects quality craftsmanship and timeless design. Highly recommended!",
            comment2_p:"InspireSpace exceeded our expectations. From personalized consultations to prompt delivery, their team made the furniture selection process a joy. Our home is now a true reflection of our style",
            comment3_p:"Impressed with the level of customization offered by InspireSpace. They brought our vision to life, creating furniture that perfectly fits our space. The quality is unmatched, and we couldn't be happier.!",
            comment4_p:"Exceptional service from start to finish. The team at InspireSpace ensured that every detail was considered. Our living room is now a cozy haven thanks to their thoughtfully curated pieces.",
            comment5_p:"InspireSpace is our go-to for stylish and sustainable furniture. Their commitment to eco-friendly materials aligns with our values, and the results are stunning. Our home feels both chic and environmentally conscious.!"

          },
          team:{
            title:"Meet the Team",
            p:"Get to know the talented individuals shaping the InspireSpace experience, where passion meets craftsmanship in every piece."
          },
          contact:{
            h2:"Get In Touch",
            p:"Please fill out the form below to send us an email, and we will get back to you as soon as possible"
          },
          navbar:{
            home:"Home",
            products:"Products",
            dashboard:"Dashboard",
            User_Dashboard:"User Dashboard"
          }
          
        }
      },
      kh: {
        translation: {
          welcome: {
            text: "<span>ធ្វើ</span>ឱ្យការលួងលោមរបស់អ្នកគឺជា<span>សុភមង្គលរបស់យើង។</span>",

            p:"សូមស្វាគមន៍មកកាន់ FURNITURE ជាកន្លែងដែលសេចក្តីរីករាយជួបនឹងការរចនា។ បង្កើនទំហំរបស់អ្នកជាមួយនឹងការប្រមូលគ្រឿងសង្ហារិមដែលបានរៀបចំឡើងរបស់យើង ដែលរៀបចំឡើងដើម្បីនាំមកនូវសុភមង្គល និងរចនាប័ទ្មចូលទៅក្នុងផ្ទះរបស់អ្នក។",
            button:"ស្វែងយល់បន្ថែម"
          },
          partner:{
            title:"ដៃគូរបស់យើង",
            parent1_h3:"ដៃគូច្នៃប្រឌិតសកល",
            partner1_p:"មានមោទនភាពក្នុងការសហការជាមួយ Google ដែលជាក្រុមហ៊ុនឈានមុខគេខាងបច្ចេកវិទ្យាទំនើប និងការច្នៃប្រឌិត។ យើងរួមគ្នាបង្កើតកន្លែងរស់នៅទំនើប និងឆ្លាតវៃ។",
            partner2_h3:"ឧត្តមភាពនៃការកម្សាន្ត",
            partner2_p:"ភាពជាដៃគូជាមួយក្រុមហ៊ុន Netflix ដើម្បីនាំយកបទពិសោធន៍ភាពយន្តចុងក្រោយចូលទៅក្នុងផ្ទះរបស់អ្នក។ រីករាយជាមួយការលួងលោម និងរចនាប័ទ្មដែលមិនអាចប្រៀបផ្ទឹមបាន ខណៈពេលដែលរីករាយជាមួយកម្មវិធី និងភាពយន្តដែលអ្នកចូលចិត្ត។",
            partner3_h3:"សហប្រតិបត្តិការហាងកាហ្វេ",
            partner3_p:"រីករាយជាមួយការសហការរបស់ Starbucks របស់យើង។ លើកពេលកាហ្វេរបស់អ្នកនៅផ្ទះជាមួយគ្រឿងសង្ហារឹមដែលបំពេញបន្ថែមភាពកក់ក្តៅ និងបរិយាកាសទាក់ទាញនៃហាងកាហ្វេដែលអ្នកចូលចិត្ត។",
            partner4_h3:"ការរចនាបើកបរទៅមុខ",
            partner4_p:"បង្កើនល្បឿនកន្លែងរស់នៅរបស់អ្នកជាមួយភាពជាដៃគូ Tesla របស់យើង។ ការបំផុសគំនិតដោយការច្នៃប្រឌិតនៃការចល័តអគ្គិសនី គ្រឿងសង្ហារឹមរបស់យើងឆ្លុះបញ្ចាំងពីការរចនាដ៏ស្រស់បំព្រង និងការគិតឆ្ពោះទៅមុខរបស់ Tesla ។"
          },
          about:{
            title:"អំពី​ពួក​យើង",
            description:"នៅ INSPIRE SPACE យើងមានចិត្តចង់បំប្លែងផ្ទះទៅជាផ្ទះ។ ដំណើររបស់យើងបានចាប់ផ្តើមជាមួយនឹងជំនឿដ៏សាមញ្ញមួយ គ្រឿងសង្ហារិមដែលផលិតយ៉ាងល្អមានថាមពលក្នុងការលើកកម្ពស់គុណភាពជីវិត។ ជាមួយនឹងការប្តេជ្ញាចិត្តដែលមិនផ្លាស់ប្តូរចំពោះសិល្បៈហត្ថកម្ម និងការរចនា យើងរៀបចំបណ្តុំដែលមិនត្រឹមតែឆ្លុះបញ្ចាំងពីភាពឆើតឆាយមិនចេះចប់ប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំងបង្កប់នូវរឿងរ៉ាវប្លែកៗរបស់អ្នកដែលបង្កើតផ្ទះមួយខ្នងផងដែរ។ ចូលរួមជាមួយពួកយើងដើម្បីបង្កើតកន្លែងដែលបំផុសគំនិត លួងលោម និងប្រាប់រឿងរបស់អ្នក។ សូមស្វាគមន៍មកកាន់ពិភពមួយដែលគ្រឿងសង្ហារឹមមិនត្រឹមតែមានមុខងារប៉ុណ្ណោះទេ វាគឺជាការបង្ហាញពីការរស់នៅដ៏ល្អ..",
            why:"ហេតុអ្វីបានជាជ្រើសរើសយើង",
            craftsmanship: "ឧត្តមភាពសិល្បៈ",
            timelessDesign: "ការរចនាគ្មានពេលកំណត់",
            customization: "ជម្រើសប្ដូរតាមបំណង",
            qualityMaterials: "សម្ភារៈគុណភាព",
            exceptionalComfort: "ការលួងលោមពិសេស",
            affordableLuxury: "ប្រណីតតម្លៃសមរម្យ",
            dedicatedCustomerService: "សេវាកម្មអតិថិជនពិសេស",
            sustainabilityCommitment: "ការប្តេជ្ញាចិត្តប្រកបដោយនិរន្តរភាព",
          },
          comment:{
            title:"អ្វីដែលអតិថិជនរបស់យើងនិយាយ",
            comment1_p:"សេវាកម្មមិនគួរឱ្យជឿ និងការយកចិត្តទុកដាក់ចំពោះព័ត៌មានលម្អិត! InspireSpace បានប្រែក្លាយផ្ទះរបស់យើងទៅជាផ្ទះក្នុងក្តីស្រមៃ។ បំណែកនីមួយៗឆ្លុះបញ្ចាំងពីសិល្បៈហត្ថកម្មប្រកបដោយគុណភាព និងការរចនាមិនចេះចប់។ ផ្តល់អនុសាសន៍ខ្ពស់!",
            comment2_p:"InspireSpace លើសពីការរំពឹងទុករបស់យើង។ ពីការពិគ្រោះយោបល់ផ្ទាល់ខ្លួនរហូតដល់ការចែកចាយភ្លាមៗ ក្រុមរបស់ពួកគេបានធ្វើឱ្យដំណើរការជ្រើសរើសគ្រឿងសង្ហារឹមមានភាពរីករាយ។ ផ្ទះរបស់យើងឥឡូវនេះគឺជាការឆ្លុះបញ្ចាំងពិតប្រាកដនៃរចនាប័ទ្មរបស់យើង។",
            comment3_p:"មានការចាប់អារម្មណ៍ជាមួយនឹងកម្រិតនៃការប្ដូរតាមបំណងដែលផ្តល់ដោយ InspireSpace ។ ពួកគេបាននាំចក្ខុវិស័យរបស់យើងទៅជាជីវិត ដោយបង្កើតនូវគ្រឿងសង្ហារឹមដែលសាកសមនឹងកន្លែងរបស់យើងយ៉ាងល្អឥតខ្ចោះ។ គុណភាពគឺមិនអាចប្រៀបផ្ទឹមបាន ហើយយើងមិនអាចសប្បាយចិត្តជាងនេះទេ!",
            comment4_p:"សេវាកម្មពិសេសពីដើមដល់ចប់។ ក្រុមនៅ InspireSpace ធានាថារាល់ព័ត៌មានលម្អិតត្រូវបានពិចារណា។ បន្ទប់ទទួលភ្ញៀវរបស់យើងឥឡូវនេះជាជម្រកដ៏កក់ក្ដៅមួយ ដោយសារបំណែកដែលបានរៀបចំយ៉ាងល្អិតល្អន់របស់ពួកគេ។",
            comment5_p:"InspireSpace គឺជាគ្រឿងសង្ហារិមទាន់សម័យ និងនិរន្តរភាពរបស់យើង។ ការប្តេជ្ញាចិត្តរបស់ពួកគេចំពោះសម្ភារៈដែលមិនប៉ះពាល់ដល់បរិស្ថាន ស្របតាមតម្លៃរបស់យើង ហើយលទ្ធផលគឺគួរឱ្យភ្ញាក់ផ្អើល។ ផ្ទះ​យើង​មាន​អារម្មណ៍​ថា​ឡូយ​ទាំង​បរិស្ថាន​ផង.!"
          },
          team:{
            title:"ជួបជាមួយក្រុម",
            p:"ស្វែងយល់ពីបុគ្គលដែលមានទេពកោសល្យបង្កើតបទពិសោធន៍ InspireSpace ដែលចំណង់ចំណូលចិត្តជួបនឹងភាពប៉ិនប្រសប់ក្នុងគ្រប់Y ្នែក។"
          },
          contact:{
            h2:"ទាក់ទង",
            p:"សូមបំពេញទម្រង់ខាងក្រោម ដើម្បីផ្ញើអ៊ីមែលមកយើង ហើយយើងនឹងឆ្លើយតបទៅអ្នកវិញឱ្យបានឆាប់តាមដែលអាចធ្វើទៅបាន។"
          },
          navbar:{
            home:"ផ្ទះ",
            products:"ផលិតផល",
            dashboard:"ផ្ទាំងគ្រប់គ្រង",
            User_Dashboard:"ផ្ទាំងគ្រប់គ្រងអ្នកប្រើប្រាស់"
          }
          
          
        }
      },
      kr: {
        translation: {
          welcome: {
            text: "<span>당신의</span> 편안함이 우리의 <span>행복입니다</span>",
            p:"즐거움이 디자인과 만나는 FURNITURE에 오신 것을 환영합니다. 집에 행복과 스타일을 더해 줄 수 있도록 엄선된 가구 컬렉션으로 공간을 업그레이드해보세요.",
            button:"더 발견하다"
          },
          partner:{
            title:"우리의 파트너",
            parent1_h3:"글로벌 혁신 파트너",
            partner1_p:"최첨단 기술과 혁신의 선두주자인 Google과 협력하게 된 것을 자랑스럽게 생각합니다. 우리는 함께 현대적이고 지능적인 생활 공간을 만들기 위해 노력합니다.",
            partner2_h3:"엔터테인먼트 우수성",
            partner2_p:"Netflix와 협력하여 최고의 영화 경험을 집에서 경험해보세요. 좋아하는 쇼와 영화를 감상하면서 비교할 수 없는 편안함과 스타일을 즐겨보세요.",
            partner3_h3:"커피하우스 협업",
            partner3_p:"스타벅스 콜라보레이션으로 스타일리시하게 즐겨보세요. 좋아하는 커피하우스의 따뜻함과 매력적인 분위기를 더욱 돋보이게 하는 가구로 집에서 커피를 마시는 순간을 더욱 즐겁게 만들어보세요.",
            partner4_h3:"디자인을 발전시키다",
            partner4_p:"Tesla 파트너십을 통해 귀하의 생활 공간을 가속화하십시오. 전기 이동성의 혁신에서 영감을 받은 당사의 가구는 Tesla의 세련된 디자인과 미래 지향적인 정신을 반영합니다."
          },
          about:{
            title:"회사 소개",
            description:"INSPIRE SPACE에서는 주택을 주택으로 변화시키는 데 열정을 쏟고 있습니다. 우리의 여정은 잘 만들어진 가구에는 삶의 질을 높이는 힘이 있다는 단순한 믿음에서 시작되었습니다. 장인정신과 디자인에 대한 변함없는 헌신으로 우리는 시대를 초월한 우아함을 반영할 뿐만 아니라 집을 집으로 만드는 사람들의 독특한 이야기를 담은 컬렉션을 선별합니다. 영감을 주고, 위로하고, 이야기를 전달하는 공간을 만드는 데 동참해 보세요. 가구가 단지 기능적인 것이 아니라, 잘 사는 것의 표현인 세상에 오신 것을 환영합니다.",
            why:"우리를 선택하는 이유",
            craftsmanship: "장인정신의 우수성",
            timelessDesign: "시대를 초월한 디자인",
            customization: "사용자 정의 옵션",
            qualityMaterials: "고품질 재료",
            exceptionalComfort: "탁월한 편안함",
            affordableLuxury: "저렴한 럭셔리",
            dedicatedCustomerService: "전담 고객 서비스",
            sustainabilityCommitment: "지속 가능성에 대한 약속",
          },
          comment:{
            title:"고객이 말하는 것",
            comment1_p:"놀라운 서비스와 세심한 배려! InspireSpace는 우리 집을 꿈의 집으로 만들었습니다. 모든 제품에는 고품질의 장인정신과 시대를 초월한 디자인이 반영되어 있습니다. 추천!",
            comment2_p:"InspireSpace는 우리의 기대를 뛰어넘었습니다. 맞춤형 상담부터 신속한 배송까지, 그들의 팀은 가구 선택 과정을 즐겁게 만들었습니다. 우리 집은 이제 우리 스타일을 그대로 반영하고 있습니다.",
            comment3_p:"InspireSpace가 제공하는 사용자 정의 수준에 깊은 인상을 받았습니다. 그들은 우리의 비전에 생명을 불어넣고 우리 공간에 완벽하게 어울리는 가구를 만들었습니다. 품질은 타의 추종을 불허하며 이보다 더 행복할 수 없습니다.!",
            comment4_p:"처음부터 끝까지 탁월한 서비스. InspireSpace 팀은 모든 세부 사항을 고려했습니다. 이제 우리 거실은 세심하게 선별된 작품 덕분에 아늑한 안식처가 되었습니다.",
            comment5_p:"InspireSpace는 세련되고 지속 가능한 가구를 위한 우리의 선택입니다. 친환경 소재에 대한 그들의 헌신은 우리의 가치와 일치하며, 그 결과는 놀랍습니다. 우리 집은 시크하면서도 친환경적인 느낌을 줍니다.!"
          },
          team:{
            title:"팀을 만나보세요",
            p:"모든 작품에서 열정과 장인정신이 만나는 InspireSpace 경험을 형성하는 재능 있는 개인들을 알아보세요."
          },
          contact:{
            h2:"연락하다",
            p:"아래 양식을 작성하여 이메일을 보내주시면 최대한 빨리 연락드리겠습니다."
          },
          navbar:{
            home:"집",
            products:"제품",
            dashboard:"계기반",
            User_Dashboard:"사용자 대시보드"

          }
         

        }
      },
    },
    fallbackLng: "en", 
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
