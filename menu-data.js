const CURRENCY = "ر.س";

const I18N = {
  ar: {
    all: "الكل",
    items: "صنف",
    itemsMany: "أصناف",
    itemOne: "صنف واحد",
    prev: "السابق",
    next: "التالي",
    swipeClose: "اسحب للإغلاق",
    ingredients: "المكوّنات",
    addons: "إضافات",
    notes: "ملاحظات",
    notesPh: "مثال: بدون بصل، حار زيادة، تقطيع…",
    addToOrder: "أضف للطلب",
    yourOrder: "طلبك",
    total: "مجموع الحساب",
    emptyCart: "السلة فاضية.",
    notePrefix: "ملاحظة:",
    remove: "حذف",
    askQ: "تمام كذا<br>يا طويل العمر؟",
    askYes: "إي، تمام",
    askEdit: "أرجع أعدّل",
    tableQ: "كم رقم طاولتك؟",
    tableSub: "عشان النادل يعرف يجيكم مباشرة.",
    tablePh: "مثال: 7",
    send: "أرسل الطلب",
    doneEy: "الطلب وصل",
    doneTitle: "تمام.",
    doneSub: "أقل من دقيقة ويجيك النادل وياخذ الطلب من الطاولة",
    close: "إغلاق",
    done: "تم",
    table: "الطاولة",
    loading: "جاري التحميل…",
    hint: "اسحب",
    best: "الأفضل مبيعاً",
    neu: "منتج جديد",
    askReview: "راجع طلبك والمجموع، وإذا كله تمام نحدد الطاولة.",
    currency: "ر.س",
    cal: "cal"
  },
  en: {
    all: "All",
    items: "items",
    itemsMany: "items",
    itemOne: "1 item",
    prev: "Prev",
    next: "Next",
    swipeClose: "Swipe to close",
    ingredients: "Ingredients",
    addons: "Add-ons",
    notes: "Notes",
    notesPh: "e.g. no onion, extra spicy…",
    addToOrder: "Add to order",
    yourOrder: "Your order",
    total: "Total",
    emptyCart: "Your cart is empty.",
    notePrefix: "Note:",
    remove: "Remove",
    askQ: "Does this look<br>right?",
    askYes: "Yes, send it",
    askEdit: "Edit order",
    tableQ: "What's your table number?",
    tableSub: "So the waiter can come straight to you.",
    tablePh: "e.g. 7",
    send: "Send order",
    doneEy: "Order received",
    doneTitle: "Done.",
    doneSub: "The waiter will collect your order from table",
    close: "Close",
    done: "Done",
    table: "Table",
    loading: "Loading…",
    hint: "Scroll",
    best: "Best seller",
    neu: "New",
    askReview: "Check your order and total, then we’ll take the table number.",
    currency: "SAR",
    cal: "cal"
  }
};

const BRAND = {
  name: "ملفا",
  nameEn: "Malva",
  sub: "بيتزا نابولي",
  subEn: "Neapolitan Pizza",
  heroEy: "بيتزا · برجر · حلويات",
  heroEyEn: "Pizza · Burgers · Desserts",
  heroEyAlt: "تعجن · تنضج · تقدّم",
  heroEyAltEn: "Knead · Fire · Serve",
  heroTitleHtml: "نكهات تجمع بين<br><em>الأصالة</em> والابتكار",
  heroTitleHtmlEn: "Flavors that blend<br><em>heritage</em> and innovation",
  heroWordDry: "",
  heroWordSauced: "تطلع من الفرن.",
  heroCta: "شاهد المنيو",
  heroCtaEn: "View menu",
  phone: "tel:+",
  socialLabel: "",
  socialUrl: "#",
  orderNote: "جاهز تطلب؟ <strong>اسأل الكاشير</strong>",
  atlasHref: "#",
  footHtml: "ملفا<br>نكهات تجمع بين الأصالة والابتكار",
  footHtmlEn: "Malva<br>Flavors that blend heritage and innovation"
};

const TAG_EN = {
  "حليب": "Milk",
  "قلوتين": "Gluten",
  "بيض": "Eggs",
  "مكسرات": "Nuts",
  "الخردل": "Mustard",
  "سمسم": "Sesame"
};

const ADDON_EN = {
  "اضافة شريحة": "Extra patty"
};

const ITEM_EN = {
  "لحم حاشي": { n: "Hashi Beef", p: "Hashi beef, onion jam, mozzarella, smoked BBQ, parmesan" },
  "دجاج اللومي": { n: "Loomi Chicken", p: "Chicken, Hasawi loomi, mozzarella, parmesan, chili flakes, jalapeño" },
  "بيبروني حبحر شقراء": { n: "Pepperoni Shaqra Chili", p: "Pepperoni, mozzarella, burrata, date molasses, Shaqra chili, dried thyme" },
  "بيتزا ترافل": { n: "Truffle Pizza", p: "Truffle sauce, mozzarella, mushrooms" },
  "بيتزا مارجريتا": { n: "Margherita", p: "Tomato sauce, mozzarella, basil" },
  "بيتزا روكا": { n: "Rocca Pizza", p: "Kashkaval, mozzarella, arugula, feta, pine nuts, pomegranate molasses, thyme, parmesan" },
  "برجر نابولي": { n: "Napoli Burger", p: "Two Black Angus patties on soft Napoli dough, cheese, creamy sauce, and pickles" },
  "برجر نابولي دجاج": { n: "Napoli Chicken Burger", p: "Two smashed grilled chicken pieces, melted Monterey Jack, creamy sauce, fresh lettuce, on soft Napoli dough" },
  "فيلي ستيك": { n: "Philly Steak", p: "Grilled striploin with fresh onion and melted Monterey Jack in airy Napoli bread, finished with smoked chipotle sauce" },
  "بطاطس": { n: "Fries", p: "Crispy fries topped with grated parmesan" },
  "سلطة مربى التوت": { n: "Berry Jam Salad", p: "Fresh kale and arugula salad with coriander, pomegranate, feta, toasted sesame, and berry jam" },
  "كركديه": { n: "Hibiscus", p: "" },
  "شاي مثلج بالخوخ": { n: "Peach Iced Tea", p: "" },
  "لومي نيد": { n: "Loomi Need", p: "Refreshing Hasawi loomi drink with lemongrass, served iced" },
  "كولا": { n: "Cola", p: "" },
  "كولا زيرو": { n: "Cola Zero", p: "" },
  "سبرايت": { n: "Sprite", p: "" },
  "قهوة اليوم": { n: "Coffee of the Day", p: "" },
  "تيراميسو بالبندق": { n: "Hazelnut Tiramisu", p: "Rich tiramisu layered with cream and coffee, topped with hazelnut cream" },
  "كريم كراميل": { n: "Crème Caramel", p: "Silky Madagascar vanilla crème caramel" },
  "مربى التوت": { n: "Berry Jam", p: "Balanced berry jam with a smooth texture and a clear, rich flavor." },
  "العسل الحار": { n: "Hot Honey", p: "A balanced mix of honey and three chilies, sweet and spicy" },
  "دبس التمر": { n: "Date Molasses", p: "Smooth, rich date molasses extracted from dates in their natural flavor." }
};

const CC = {
  "68e520249e80914fe586c736": "#C9A84C",
  "692bf006e1163f2c94ce2729": "#E87722",
  "692bee61e1163f2c94ce2592": "#E8320A",
  "68e516609e80914fe586c48a": "#C9A84C",
  "68e516609e80914fe586c489": "#E87722",
  "68e516609e80914fe586c48b": "#E8320A",
  "6a20eb2e242634dae5bd29bf": "#C9A84C"
};

const CAT_META = {
  "68e520249e80914fe586c736": {
    "title": "بيتزا",
    "titleEn": "Pizza",
    "desc": "عجينة نابولي من الفرن.",
    "descEn": "Neapolitan dough from the oven."
  },
  "692bf006e1163f2c94ce2729": {
    "title": "برجر & ساندوتش",
    "titleEn": "Burgers & Sandwiches",
    "desc": "على عجينة النابولي.",
    "descEn": "On Napoli dough."
  },
  "692bee61e1163f2c94ce2592": {
    "title": "أطباق جانبية",
    "titleEn": "Sides",
    "desc": "للمائدة.",
    "descEn": "For the table."
  },
  "68e516609e80914fe586c48a": {
    "title": "مشروبات باردة",
    "titleEn": "Cold drinks",
    "desc": "منعشة وباردة.",
    "descEn": "Cold and refreshing."
  },
  "68e516609e80914fe586c489": {
    "title": "مشروبات ساخنة",
    "titleEn": "Hot drinks",
    "desc": "من المشروبات الساخنة.",
    "descEn": "From the hot bar."
  },
  "68e516609e80914fe586c48b": {
    "title": "حلويات",
    "titleEn": "Desserts",
    "desc": "بعد الأكل.",
    "descEn": "After the meal."
  },
  "6a20eb2e242634dae5bd29bf": {
    "title": "جارات ملفا",
    "titleEn": "Malva jars",
    "desc": "من منتجات ملفا.",
    "descEn": "From Malva."
  }
};

const CAT_ORDER = ["68e520249e80914fe586c736", "692bf006e1163f2c94ce2729", "692bee61e1163f2c94ce2592", "68e516609e80914fe586c48a", "68e516609e80914fe586c489", "68e516609e80914fe586c48b", "6a20eb2e242634dae5bd29bf"];

const GR = {
  DEFAULT: ["#2e1c08,#0d0800", "#241608,#0c0700", "#1e1206,#0a0600", "#281a08,#0e0802"]
};

function photoUrl(ph) {
  if (!ph) return "";
  return ph;
}

const FL = [
  {
    "n": "لحم حاشي",
    "c": "68e520249e80914fe586c736",
    "h": 0,
    "p": "لحم حاشي ، مربى بصل ، موزريلا ، باربكيو مدخن ، بارميزان",
    "o": "833 سعرة",
    "s": "لحم حاشي ، مربى بصل ، موزريلا ، باربكيو مدخن ، بارميزان",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764484520436-jr20cu-img8152.jpeg",
    "pr": 43,
    "b": "الأفضل مبيعاً",
    "so": false,
    "t": [
      "حليب",
      "قلوتين"
    ],
    "cal": 833,
    "addons": [],
    "catName": "بيتزا"
  },
  {
    "n": "دجاج اللومي",
    "c": "68e520249e80914fe586c736",
    "h": 0,
    "p": "دجاج ، لومي حساوي ، موزريلا ، بارميزان ، فلفل مجروش ، هلابينو",
    "o": "630 سعرة",
    "s": "دجاج ، لومي حساوي ، موزريلا ، بارميزان ، فلفل مجروش ، هلابينو",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764483406941-cauir4-img8140.jpeg",
    "pr": 39,
    "b": "الأفضل مبيعاً",
    "so": false,
    "t": [
      "قلوتين",
      "حليب"
    ],
    "cal": 630,
    "addons": [],
    "catName": "بيتزا"
  },
  {
    "n": "بيبروني حبحر شقراء",
    "c": "68e520249e80914fe586c736",
    "h": 0,
    "p": "بيبروني ، موزريلا ، بوراتا ، دبس التمر ، حبحر شقراء ، زعتر مجفف",
    "o": "717 سعرة",
    "s": "بيبروني ، موزريلا ، بوراتا ، دبس التمر ، حبحر شقراء ، زعتر مجفف",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764482951231-01xm4g-img8139.jpeg",
    "pr": 39,
    "b": "",
    "so": false,
    "t": [
      "حليب",
      "قلوتين"
    ],
    "cal": 717,
    "addons": [],
    "catName": "بيتزا"
  },
  {
    "n": "بيتزا ترافل",
    "c": "68e520249e80914fe586c736",
    "h": 0,
    "p": "صوص الترافل ، جبنة موزريلا ، فطر",
    "o": "701 سعرة",
    "s": "صوص الترافل ، جبنة موزريلا ، فطر",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764483638204-atueb2-img8144.jpeg",
    "pr": 34,
    "b": "",
    "so": false,
    "t": [
      "حليب",
      "قلوتين"
    ],
    "cal": 701,
    "addons": [],
    "catName": "بيتزا"
  },
  {
    "n": "بيتزا مارجريتا",
    "c": "68e520249e80914fe586c736",
    "h": 0,
    "p": "صلصة الطماطم ، موزريلا ، والريحان",
    "o": "589 سعرة",
    "s": "صلصة الطماطم ، موزريلا ، والريحان",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764483847770-9f35x8-img8141.jpeg",
    "pr": 32,
    "b": "",
    "so": false,
    "t": [
      "حليب",
      "قلوتين"
    ],
    "cal": 589,
    "addons": [],
    "catName": "بيتزا"
  },
  {
    "n": "بيتزا روكا",
    "c": "68e520249e80914fe586c736",
    "h": 0,
    "p": "قشقوان ، موزريلا ، جرجير ، فيتا ، صنوبر ، دبس رمان ، زعتر ، بارميزان",
    "o": "672 سعرة",
    "s": "قشقوان ، موزريلا ، جرجير ، فيتا ، صنوبر ، دبس رمان ، زعتر ، بارميزان",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764484072738-4prt74-img8142.jpeg",
    "pr": 33,
    "b": "",
    "so": false,
    "t": [
      "بيض",
      "مكسرات",
      "قلوتين"
    ],
    "cal": 672,
    "addons": [],
    "catName": "بيتزا"
  },
  {
    "n": "برجر نابولي",
    "c": "692bf006e1163f2c94ce2729",
    "h": 0,
    "p": "برجر يحتوي على شريحتين من لحم البلاك انجوس ، بعجينة النابولي الطرية ، وشريحة الجبنة وصوص كريمي ، مع شريحتين مخلل",
    "o": "580 سعرة",
    "s": "برجر يحتوي على شريحتين من لحم البلاك انجوس ، بعجينة النابولي الطرية ، وشريحة الجبنة وصوص كريمي ، مع شريحتين مخلل",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764487295157-fclefn-img8146.jpeg",
    "pr": 33,
    "b": "الأفضل مبيعاً",
    "so": false,
    "t": [
      "حليب",
      "الخردل",
      "قلوتين"
    ],
    "cal": 580,
    "addons": [
      {
        "n": "اضافة شريحة",
        "pr": 7
      }
    ],
    "catName": "برجر & ساندوتش"
  },
  {
    "n": "برجر نابولي دجاج",
    "c": "692bf006e1163f2c94ce2729",
    "h": 0,
    "p": "قطعتين دجاج سماش مشوية بعناية، مع جبنة مونتري جاك الذائبة، صوص كريمي غني، ولمسة خس طازج تحت، مقدّم داخل عجينة نابولي طرية",
    "o": "535 سعرة",
    "s": "قطعتين دجاج سماش مشوية بعناية، مع جبنة مونتري جاك الذائبة، صوص كريمي غني، ولمسة خس طازج تحت، مقدّم داخل عجينة نابولي طرية",
    "ph": "https://assets.easesignage.com/media/68e5161e9e80914fe586c463/media/0e2adfb0-6b96-4cb1-a8ad-0d3119315cab.jpeg",
    "pr": 30,
    "b": "",
    "so": false,
    "t": [
      "حليب",
      "قلوتين"
    ],
    "cal": 535,
    "addons": [
      {
        "n": "اضافة شريحة",
        "pr": 5
      }
    ],
    "catName": "برجر & ساندوتش"
  },
  {
    "n": "فيلي ستيك",
    "c": "692bf006e1163f2c94ce2729",
    "h": 0,
    "p": "لحم بقري ستريبلوين مطبوخ على الشواية مع البصل الطازج، مغطى بجبن مونتيري جاك الذائب، يقدم داخل خبز نابولي متجدد الهواء مع ملمس خفيف ورقيق. تم الانتهاء من صلصة الشيبوتل المدخنة للحصول على نكهة غنية ومتوازنة.",
    "o": "485 سعرة",
    "s": "لحم بقري ستريبلوين مطبوخ على الشواية مع البصل الطازج، مغطى بجبن مونتيري جاك الذائب، يقدم داخل خبز نابولي متجدد الهواء مع ملمس خفيف ورقيق. تم الانتهاء من صلصة الشيبوتل المدخنة للحصول على نكهة غنية ومتوازنة.",
    "ph": "https://assets.easesignage.com/media/68e5161e9e80914fe586c463/media/38062e35-ca3f-4077-929e-96bca9e92fb8.jpeg",
    "pr": 29,
    "b": "منتج جديد",
    "so": false,
    "t": [
      "حليب",
      "قلوتين"
    ],
    "cal": 485,
    "addons": [],
    "catName": "برجر & ساندوتش"
  },
  {
    "n": "بطاطس",
    "c": "692bee61e1163f2c94ce2592",
    "h": 0,
    "p": "بطاطس مقرمشه مغطاه بجبنة البارميزان المبشورة",
    "o": "355 سعرة",
    "s": "بطاطس مقرمشه مغطاه بجبنة البارميزان المبشورة",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764486887112-31xzrh-img8143.jpeg",
    "pr": 23,
    "b": "",
    "so": false,
    "t": [
      "حليب"
    ],
    "cal": 355,
    "addons": [],
    "catName": "أطباق جانبية"
  },
  {
    "n": "سلطة مربى التوت",
    "c": "692bee61e1163f2c94ce2592",
    "h": 0,
    "p": "سلطة مربى التوت الطازجة تحتوي على أوراق الكيل والجرجير ،الكزبرة العطرية مع حبات الرمان ، جبنة فيتا ، وسمسم محمص ، ممزوجة بمربى التوت",
    "o": "362 سعرة",
    "s": "سلطة مربى التوت الطازجة تحتوي على أوراق الكيل والجرجير ،الكزبرة العطرية مع حبات الرمان ، جبنة فيتا ، وسمسم محمص ، ممزوجة بمربى التوت",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764487055947-96kqus-img8148.jpeg",
    "pr": 29,
    "b": "",
    "so": false,
    "t": [
      "حليب",
      "سمسم"
    ],
    "cal": 362,
    "addons": [],
    "catName": "أطباق جانبية"
  },
  {
    "n": "كركديه",
    "c": "68e516609e80914fe586c48a",
    "h": 0,
    "p": "",
    "o": "",
    "s": "",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764486523260-mh1m87-img8149.jpeg",
    "pr": 21,
    "b": "",
    "so": false,
    "t": [],
    "cal": 0,
    "addons": [],
    "catName": "مشروبات باردة"
  },
  {
    "n": "شاي مثلج بالخوخ",
    "c": "68e516609e80914fe586c48a",
    "h": 0,
    "p": "",
    "o": "",
    "s": "",
    "ph": "https://d3v1m2rg0v7fyj.cloudfront.net/media/68e5161e9e80914fe586c463/product/1764486465659-ezycim-img8150.jpeg",
    "pr": 21,
    "b": "الأفضل مبيعاً",
    "so": false,
    "t": [],
    "cal": 0,
    "addons": [],
    "catName": "مشروبات باردة"
  },
  {
    "n": "لومي نيد",
    "c": "68e516609e80914fe586c48a",
    "h": 0,
    "p": "مشروب منعش باللومي الحساوي الطازج ، مع لمسة الليمون جراس العطرية ، يقدم مثلجاً",
    "o": "126 سعرة",
    "s": "مشروب منعش باللومي الحساوي الطازج ، مع لمسة الليمون جراس العطرية ، يقدم مثلجاً",
    "ph": "https://assets.easesignage.com/media/68e5161e9e80914fe586c463/media/937a800c-aaa6-4e86-bee3-9da5c3f30c65.jpeg",
    "pr": 19,
    "b": "منتج جديد",
    "so": false,
    "t": [],
    "cal": 126,
    "addons": [],
    "catName": "مشروبات باردة"
  },
  {
    "n": "كولا",
    "c": "68e516609e80914fe586c48a",
    "h": 0,
    "p": "",
    "o": "",
    "s": "",
    "ph": "",
    "pr": 6,
    "b": "",
    "so": false,
    "t": [],
    "cal": 0,
    "addons": [],
    "catName": "مشروبات باردة"
  },
  {
    "n": "كولا زيرو",
    "c": "68e516609e80914fe586c48a",
    "h": 0,
    "p": "",
    "o": "",
    "s": "",
    "ph": "",
    "pr": 6,
    "b": "",
    "so": false,
    "t": [],
    "cal": 0,
    "addons": [],
    "catName": "مشروبات باردة"
  },
  {
    "n": "سبرايت",
    "c": "68e516609e80914fe586c48a",
    "h": 0,
    "p": "",
    "o": "",
    "s": "",
    "ph": "",
    "pr": 6,
    "b": "",
    "so": false,
    "t": [],
    "cal": 0,
    "addons": [],
    "catName": "مشروبات باردة"
  },
  {
    "n": "قهوة اليوم",
    "c": "68e516609e80914fe586c489",
    "h": 0,
    "p": "",
    "o": "",
    "s": "",
    "ph": "https://assets.easesignage.com/media/68e5161e9e80914fe586c463/media/312c9d39-34a9-483f-9ffd-f8aac4d1dcb2.jpeg",
    "pr": 13,
    "b": "",
    "so": false,
    "t": [],
    "cal": 0,
    "addons": [],
    "catName": "مشروبات ساخنة"
  },
  {
    "n": "تيراميسو بالبندق",
    "c": "68e516609e80914fe586c48b",
    "h": 0,
    "p": "تيراميسو غني بطبقات الكريمه والقهوة ، يعلوه كريمة البندق الفاخرة",
    "o": "410 سعرة",
    "s": "تيراميسو غني بطبقات الكريمه والقهوة ، يعلوه كريمة البندق الفاخرة",
    "ph": "https://assets.easesignage.com/media/68e5161e9e80914fe586c463/media/d468c91c-ce02-45b1-922b-c9fcd2d85ef5.jpeg",
    "pr": 26,
    "b": "الأفضل مبيعاً",
    "so": false,
    "t": [
      "حليب",
      "مكسرات",
      "بيض"
    ],
    "cal": 410,
    "addons": [],
    "catName": "حلويات"
  },
  {
    "n": "كريم كراميل",
    "c": "68e516609e80914fe586c48b",
    "h": 0,
    "p": "كريم كراميل ناعم وغني محضّر بفانيليا مدغشقر، بقوام مخملي ونكهة متوازنة في كل ملعقة",
    "o": "190 سعرة",
    "s": "كريم كراميل ناعم وغني محضّر بفانيليا مدغشقر، بقوام مخملي ونكهة متوازنة في كل ملعقة",
    "ph": "https://assets.easesignage.com/media/68e5161e9e80914fe586c463/media/cedb38fd-9d6a-4f65-98bb-70777f631647.jpeg",
    "pr": 17,
    "b": "منتج جديد",
    "so": false,
    "t": [
      "حليب",
      "بيض"
    ],
    "cal": 190,
    "addons": [],
    "catName": "حلويات"
  },
  {
    "n": "مربى التوت",
    "c": "6a20eb2e242634dae5bd29bf",
    "h": 0,
    "p": "مربى توت بطعم متوازن وقوام ناعم، بنكهة واضحة وغنية.",
    "o": "",
    "s": "مربى توت بطعم متوازن وقوام ناعم، بنكهة واضحة وغنية.",
    "ph": "https://assets.easesignage.com/media/68e5161e9e80914fe586c463/media/1fed44e3-3a8f-4153-a4c4-c15f7613cb00.jpeg",
    "pr": 42,
    "b": "",
    "so": false,
    "t": [],
    "cal": 0,
    "addons": [],
    "catName": "جارات ملفا"
  },
  {
    "n": "العسل الحار",
    "c": "6a20eb2e242634dae5bd29bf",
    "h": 0,
    "p": "مزيج متوازن من العسل وثلاثة أنواع من الفلفل بنكهة حلوة وحارة",
    "o": "",
    "s": "مزيج متوازن من العسل وثلاثة أنواع من الفلفل بنكهة حلوة وحارة",
    "ph": "https://assets.easesignage.com/media/68e5161e9e80914fe586c463/media/05d26dbc-810a-408a-8e41-d3ef95ffafdb.jpeg",
    "pr": 35,
    "b": "",
    "so": false,
    "t": [],
    "cal": 0,
    "addons": [],
    "catName": "جارات ملفا"
  },
  {
    "n": "دبس التمر",
    "c": "6a20eb2e242634dae5bd29bf",
    "h": 0,
    "p": "دبس تمر بقوام ناعم وطعم غني، مستخلص من التمر بنكهته الطبيعية.",
    "o": "",
    "s": "دبس تمر بقوام ناعم وطعم غني، مستخلص من التمر بنكهته الطبيعية.",
    "ph": "https://assets.easesignage.com/media/68e5161e9e80914fe586c463/media/8fe013d2-9135-4783-8456-80309fd84054.jpeg",
    "pr": 33,
    "b": "",
    "so": false,
    "t": [],
    "cal": 0,
    "addons": [],
    "catName": "جارات ملفا"
  }
];

FL.forEach((item) => {
  const en = ITEM_EN[item.n];
  if (en) {
    item.nEn = en.n;
    item.pEn = en.p;
  }
  (item.addons || []).forEach((a) => {
    if (ADDON_EN[a.n]) a.nEn = ADDON_EN[a.n];
  });
});
