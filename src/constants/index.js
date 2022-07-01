import React from 'react';
export const ROUTER = {
  LOGIN: 'LOGIN',
  TAB_NAVIGATION: 'TAB_NAVIGATION',
  RECIPE_FEED: 'RECIPE_FEED',
  MAIN_NAVIGATION: 'MAIN_NAVIGATION',
  SIGN_UP: 'SIGN_UP',
  BROWSE_MY_RECIPES: 'BROWSE_MY_RECIPES',
  SETTING_SCREEN: 'SETTING_SCREEN',
  NEW_RECIPE: 'NEW_RECIPE',
  OTHER_USER_PROFILE: 'OTHER_USER_PROFILE',
  EDIT_RECIPES: 'EDIT_RECIPE',
  VIEW_RECIPES: 'VIEW_RECIPES',
  AUTH_NAVIGATION: 'AUTH_NAVIGATION',
  EDIT_PROFILE: 'EDIT_PROFILE',
};

export const SAVE_OPTION = [
  {
    id: 1,
    name: 'Western',
  },
  {
    id: 2,
    name: 'Quick Lunch',
  },
  {
    id: 3,
    name: 'Veggies',
  },
];

export const STATE_TEXT = {
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  FULL_NAME: 'FULL_NAME',
  TEXT_MODAL: 'TEXT_MODAL',
};

const UseContext = React.createContext({});
export const UseProvider = UseContext.Provider;
export default UseContext;

export const ASYNC_STORAGE = {
  ACCOUNT: 'ACCOUNT',
};

export const DATA_RECIPE = [
  {
    id: 1,
    userName: 'Nhi Cute',
    timePost: '2h ago',
    nameImage: 'Bánh Xèo miền tây',
    description:
      'Một loại bánh cực kỳ được yêu thích bởi hương vị thơm ngon, chân chất hương quê với những nguyên liệu dễ dàng tìm thấy',
    image:
      'https://1.bp.blogspot.com/-KDESzRbUpAg/XfmGLUR3RBI/AAAAAAAAAS8/v2f9TGWyYw4ica4KFmLVaptc8rw3WY2ZwCEwYBhgL/s640/banh-xeo-3.jpg',
    like: 32,
    comment: 8,
    imageAvatar:
      'https://anhdephd.vn/wp-content/uploads/2022/03/hinh-chibi-meo-dang-yeu-cuc-ki.jpg',
  },
  {
    id: 2,
    userName: 'Nhân Đẹp Trai',
    timePost: '2h ago',
    nameImage: 'Bánh khọt Vũng Tàu',
    description:
      'Vàng thơm đẹp mắt, cộng với 1 chút béo từ nước cốt dừa, vị bùi bùi từ đậu xanh.',
    image:
      'https://cdn.eva.vn/upload/3-2020/images/2020-07-17/1594988789-198-thumbnail-width640height480.jpg',
    like: 32,
    comment: 8,
    imageAvatar:
      'https://thuthuatnhanh.com/wp-content/uploads/2019/09/Hinh-anh-chibi-meo-cute.jpg',
  },
  {
    id: 3,
    userName: 'Huy Menly',
    timePost: '3h ago',
    nameImage: 'Chuối nướng',
    description:
      'Xôi nếp thì nấu chín, không bị sượng, bọc chuối nướng lên thơm lừng.',
    image:
      'https://yt.cdnxbvn.com/medias/webnauan.vn/34/34127/cach-lam-chuoi-nuong-nuoc-cot-dua-ngon.jpg',
    like: 32,
    comment: 8,
    imageAvatar:
      'https://img5.thuthuatphanmem.vn/uploads/2021/11/30/hinh-anh-meo-cute-chibi-ngau-nhat_095500531.jpg',
  },
];

export const DATA_USER = {
  imageAvatar:
    'https://anhdephd.vn/wp-content/uploads/2022/03/hinh-chibi-meo-dang-yeu-cuc-ki.jpg',
  name: 'Nhi Cute',
  position: 'Potato Master',
  follower: '10k',
  like: '23k',
};

export const DATA_MY_RECIPE = [
  {
    id: 1,
    name: 'Các món mì dân dã',
    image: 'https://cdn.tgdd.vn/2020/12/CookProduct/9-1200x676-1.jpg',
  },
  {
    id: 2,
    name: 'Canh bún Sài Gòn',
    image:
      'https://www.sgtiepthi.vn/wp-content/uploads/2021/03/T2_Canhbunbachtuoc_Dienmayxanh.jpg',
  },
  {
    id: 3,
    name: 'Đặc sản Đồng Tháp',
    image:
      'https://dongthap.top/wp-content/uploads/2022/02/com-goi-la-sen-mon-dac-san-dan-da-ma-ban-nhat-dinh-phai-thu-khi-den-dong-thap-1643009062-1.jpeg',
  },
  {
    id: 4,
    name: 'Bữa cơm gia đình',
    image:
      'https://comngon16.com/upload/userfiles/images/mam-com-gia-dinh-gianh-cho-mua-he-3.jpg',
  },
  {
    id: 5,
    name: 'Món ăn từ gà',
    image:
      'https://cdn.beptruong.edu.vn/wp-content/uploads/2020/05/ga-nuong-muoi-ot.jpg',
  },
  {
    id: 6,
    name: 'Món gỏi miền Tây',
    image:
      'https://media.cooky.vn/recipe/g3/27606/s800x500/recipe-cover-r27606.JPG',
  },
];

export const DATA_MY_RECIPE_DESCRIPTION = [
  {
    idMyRecipe: 1,
    nameMyRecipe: 'Các món mì dân dã',
    data: [
      {
        idItem: 1,
        name: 'Mì xào hải sản',
        image:
          'https://cdn.tgdd.vn/2021/11/CookRecipe/Avatar/mi-xao-hai-san-thumbnail.jpg',
      },
      {
        idItem: 2,
        name: 'Mì xào bò',
        image:
          'https://cdn-www.vinid.net/2020/10/488c647a-c%C3%A1ch-l%C3%A0m-m%C3%AC-x%C3%A0o-b%C3%B2.png',
      },
      {
        idItem: 3,
        name: 'Mì quảng',
        image:
          'https://danang.huongnghiepaau.com/images/mon-ngon-mien-trung/mi-quang-ga.jpg',
      },
      {
        idItem: 4,
        name: 'Mì cay',
        image:
          'https://monngonmoingay.com/wp-content/uploads/2019/11/mi-cay-500.jpg',
      },
      {
        idItem: 5,
        name: 'Mì lạnh',
        image:
          'https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/mi-lanh-naengmyeon-mul-thumbnail.jpg',
      },
    ],
  },
  {
    idMyRecipe: 2,
    nameMyRecipe: 'Canh bún Sài Gòn',
    data: [
      {
        idItem: 1,
        name: 'Bún riêu cua',
        image:
          'https://ngonaz.com/wp-content/uploads/2021/09/cach-nau-bun-rieu-cua-dong-20.jpg',
      },
      {
        idItem: 2,
        name: 'Bánh canh giò heo',
        image:
          'https://vietcuongthinh.com.vn/wp-content/uploads/2021/02/cach-nau-banh-canh-gio-heo.png',
      },
      {
        idItem: 3,
        name: 'Hủ tiếu xương',
        image:
          'https://photo2.tinhte.vn/data/attachment-files/2021/02/5346409_image.jpg',
      },
      {
        idItem: 4,
        name: 'Bún ốc chuối đậu',
        image:
          'https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/05/oc-nau-chuoi-dau.jpg',
      },
      {
        idItem: 5,
        name: 'Bún măng Vịt',
        image:
          'http://khoquet.vn/wp-content/uploads/2017/08/cach-lam-bun-mang-vit-ngon.jpg',
      },
    ],
  },
  {
    idMyRecipe: 3,
    nameMyRecipe: 'Đặc sản Đồng Tháp',
    data: [
      {
        idItem: 1,
        name: 'Lẩu mắm cá linh',
        image:
          'https://cdn.tgdd.vn/Files/2021/08/30/1379043/cach-nau-lau-mam-ca-linh-ngon-dung-chuan-vi-don-gian-tai-nha-202201060142070358.jpeg',
      },
      {
        idItem: 2,
        name: 'Cá linh kho lạt',
        image:
          'https://www.sgtiepthi.vn/wp-content/uploads/2018/08/Ca-linh-kho-lat.jpg',
      },
      {
        idItem: 3,
        name: 'Chuột đồng nướng muối ớt',
        image:
          'https://caubacantho.files.wordpress.com/2018/06/chuot-nuong1.jpg',
      },
      {
        idItem: 4,
        name: 'Gỏi ngó sen tôm thịt',
        image:
          'https://cdn.tgdd.vn/Files/2020/05/25/1258272/cach-lam-goi-ngo-sen-tom-thit-gion-ngon-don-gian-t-760x367.png',
      },
      {
        idItem: 5,
        name: 'Lẩu cua đồng',
        image:
          'https://cdn.cet.edu.vn/wp-content/uploads/2018/09/lau-cua-dong.jpg',
      },
    ],
  },
  {
    idMyRecipe: 4,
    nameMyRecipe: 'Bửa cơm gia đình',
    data: [
      {
        idItem: 1,
        name: 'Canh chua cá lóc',
        image:
          'https://daubepgiadinh.com/wp-content/uploads/2021/07/canh-chua-ca-loc.jpg',
      },
      {
        idItem: 2,
        name: 'Cá kho tộ',
        image:
          'https://cdn.tgdd.vn/Files/2019/09/02/1194292/cach-lam-ca-loc-kho-to-ngon-com-chuan-vi-mien-nam-202201041313092690.jpg',
      },
      {
        idItem: 3,
        name: 'Thịt kho hột vịt',
        image:
          'https://thucphamquocte.vn/wp-content/uploads/2021/09/2021-09-10-Thit-kho-trung-vit-600x400.jpg',
      },
      {
        idItem: 4,
        name: 'Cá he chiên giòn',
        image: 'https://cdn.tgdd.vn/2020/09/CookProduct/1260-1200x676-65.jpg',
      },
      {
        idItem: 5,
        name: 'Bò xào lúc lắc',
        image:
          'https://hyhouse.com.vn/wp-content/uploads/2018/10/hyhouse-bo-luc-lac-600x400.jpg',
      },
    ],
  },
  {
    idMyRecipe: 5,
    nameMyRecipe: 'Đặc sản từ gà',
    data: [
      {
        idItem: 1,
        name: 'Lẩu gà ớt hiểm',
        image:
          'https://eatgo.vn/news/wp-content/uploads/2021/08/cach-nau-lau-ga-ot-hiem-1-680x375.jpg',
      },
      {
        idItem: 2,
        name: 'Gà nướng muối ớt',
        image:
          'https://cdn.beptruong.edu.vn/wp-content/uploads/2020/05/ga-nuong-muoi-ot.jpg',
      },
      {
        idItem: 3,
        name: 'Gà khìa nước dừa',
        image: 'https://cdn3.ivivu.com/2020/06/ga-khia-nuoc-dua-ivivu-3.jpg',
      },
      {
        idItem: 4,
        name: 'Gà bó xôi',
        image:
          'https://thefood.vn/wp-content/uploads/ga%CC%80-quay-cha%CC%80-bo%CC%82ng.jpeg',
      },
      {
        idItem: 5,
        name: 'Cháo gà',
        image:
          'https://marvelvietnam.com/wp-content/uploads/2022/03/An-Chao-Co-Map-Khong-Cau-Tra-Loi-Han-Se-Khien-Nhieu-Nguoi-Bat-Ngo.jpg',
      },
    ],
  },
  {
    idMyRecipe: 6,
    nameMyRecipe: 'Món gỏi miền Tây',
    data: [
      {
        idItem: 1,
        name: 'Gỏi xoài',
        image:
          'https://cdn.tgdd.vn/Files/2021/08/24/1377553/cach-lam-goi-xoai-tom-kho-chua-ngot-cuc-ngon-202112310944493617.jpg',
      },
      {
        idItem: 2,
        name: 'Gỏi đu đủ',
        image:
          'https://cdn.cet.edu.vn/wp-content/uploads/2019/07/goi-du-du-chua-ngot.jpg',
      },
      {
        idItem: 3,
        name: 'Gỏi vịt',
        image:
          'https://file.hstatic.net/1000357278/file/goi-vit-ngon_4603fb07d5804492976bd94cb2031873_grande.jpg',
      },
      {
        idItem: 4,
        name: 'Gỏi cá sặc sầu đâu',
        image:
          'https://image.thanhnien.vn/w2048/Uploaded/2022/ahuuohu/2015_11_15/goi_sau_dau_nb_mrsi.jpg',
      },
      {
        idItem: 5,
        name: 'Gỏi măng cụt',
        image:
          'https://cdn.bepcuoi.com/media/720-goi-mang-cut-mien-tay-bepcuoi-347.jpg',
      },
    ],
  },
];

export const TRENDING_RECIPES = {
  title: 'Món hot hiện nay',
  data: [
    {
      id: 1,
      name: 'Bánh trứng cút nướng',
      image: 'https://bepmenau.com/wp-content/uploads/2018/04/xonefm.com1_.jpg',
    },
    {
      id: 2,
      name: 'Bánh rán vừng',
      image: 'https://bepmenau.com/wp-content/uploads/2018/04/banh_cam.jpg',
    },
    {
      id: 3,
      name: 'Bánh tráng nướng',
      image:
        'https://bepmenau.com/wp-content/uploads/2018/04/banh-trang-nuong-mo-hanh-pizza-cua-nguoi-viet-229-122811.jpg',
    },
    {
      id: 4,
      name: 'Bánh Plan',
      image:
        'https://bepmenau.com/wp-content/uploads/2018/04/taophocaramen.jpg',
    },
    {
      id: 5,
      name: 'Bánh Plan',
      image:
        'https://bepmenau.com/wp-content/uploads/2018/04/trai-cay-dam-sua-4.jpg',
    },
  ],
};
export const CATEGORY_MAKE_IT = [
  {
    idLine: 1,
    nameLine: 'Khoai tây',
  },
  {
    idLine: 2,
    nameLine: 'Chuối',
  },
  {
    idLine: 3,
    nameLine: 'Cà chua',
  },
  {
    idLine: 4,
    nameLine: 'Sầu riêng',
  },
];
export const MAKE_IT = {
  title: 'Món ngon từ rau quả ...',
  data: [
    {
      idLine: 1,
      nameLine: 'Khoai tây',
      data: [
        {
          id: 1,
          name: 'Khoai tây hầm thịt viên',
          image:
            'https://cdn.24h.com.vn/upload/1-2020/images/2020-02-10/8-cach-che-bien-khoai-tay-thanh-mon-dai-bo-an-hoai-ca-tuan-cung-khong-thay-ngan-5-1581317039-576-width650height429.jpg',
        },
        {
          id: 2,
          name: 'Khoai tây chiên phủ bột thì là',
          image:
            'https://cdn.24h.com.vn/upload/1-2020/images/2020-02-10/8-cach-che-bien-khoai-tay-thanh-mon-dai-bo-an-hoai-ca-tuan-cung-khong-thay-ngan-4-1581317029-231-width650height432.jpg',
        },
        {
          id: 3,
          name: 'Khoai tây hấp với thịt xông khói',
          image:
            'https://cdn.24h.com.vn/upload/1-2020/images/2020-02-10/8-cach-che-bien-khoai-tay-thanh-mon-dai-bo-an-hoai-ca-tuan-cung-khong-thay-ngan-7-1581317059-584-width650height432.jpg',
        },
        {
          id: 4,
          name: 'Bánh khoai tây giòn rụm',
          image:
            'https://monanngon.vn/wp-content/uploads/2020/07/an-vat-khoai-tay.jpg',
        },
      ],
    },
    {
      idLine: 2,
      nameLine: 'Chuối',
      data: [
        {
          id: 1,
          name: 'Bánh chuối hấp',
          image:
            'http://wiki-travel.com.vn/Uploads/picture/camnhi-190605100643-banh-chuoi-hap.jpg',
        },
        {
          id: 2,
          name: 'Bánh chuối nướng',
          image:
            'http://wiki-travel.com.vn/Uploads/picture/camnhi-190705100708-banh-chuoi-nuong.jpg',
        },
        {
          id: 3,
          name: 'Kem chuối nước cốt dừa',
          image:
            'http://wiki-travel.com.vn/Uploads/picture/camnhi-190805100837-kem-chuoi.png',
        },
        {
          id: 4,
          name: 'Chè chuối',
          image:
            'http://wiki-travel.com.vn/Uploads/picture/camnhi-190905100909-che-chuoi.jpg',
        },
      ],
    },
    {
      idLine: 3,
      nameLine: 'Cà chua',
      data: [
        {
          id: 1,
          name: 'Cà chua nhồi thịt',
          image:
            'https://sites.google.com/site/beptuvadodungnhabep/_/rsrc/1444730882081/tin-tuc/cachuanhoithitmonngondongiandechebien/mach-ban-cach-lam-mon-ca-chua-nhoi-thit.jpg',
        },
        {
          id: 2,
          name: 'Cá hồi sốt cà chua',
          image:
            'https://cdn.tgdd.vn/Files/2020/05/30/1259475/cach-lam-ca-hoi-sot-ca-chua-thom-ngon-dam-da-hap-dan-dua-com-10.jpg',
        },
        {
          id: 3,
          name: 'Đậu hủ sốt cà chua',
          image:
            'https://cdn3.ivivu.com/2020/09/dau-hu-chien-sot-ca-chua-ivivu-3.jpg',
        },
        {
          id: 4,
          name: 'Salad cà chua',
          image:
            'https://hoaquadaklak.com/image/data/tin-tuc/022020/salad%20-%20ca-chua.jpg',
        },
      ],
    },
    {
      idLine: 4,
      nameLine: 'Sầu riêng',
      data: [
        {
          id: 1,
          name: 'Bánh crepe sầu riêng',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88bM_gqS0z_M2H6wYXQaNTIUpCftZO7113NI2Q80Poo_TPObj1EoqlNuPtigqSnyLvZQ&usqp=CAU',
        },
        {
          id: 2,
          name: 'Bingsu sầu riêng',
          image:
            'https://cdn.24h.com.vn/upload/3-2019/images/2019-08-30/1567137872-26e7ab875eec53f6b762f9742b320e44.jpg',
        },
        {
          id: 3,
          name: 'Bánh bao sầu riêng',
          image:
            'https://cdn.24h.com.vn/upload/3-2019/images/2019-08-30/1567137872-0580afb59b6ab80aec14d8ad754ef06b.jpg',
        },
        {
          id: 4,
          name: 'Mochi sầu riêng',
          image:
            'https://cdn.24h.com.vn/upload/3-2019/images/2019-08-30/1567137873-3c1bc4e23ca5fdcc40fac7dd63138337.jpg',
        },
      ],
    },
  ],
};

export const EVENT = {
  MODAL: 'EVENT_MODAL',
};

export const OPTION_VIEW_RECIPES = [
  {
    option: 1,
    nameOption: 'Ingredients',
  },
  {
    option: 2,
    nameOption: 'How to Cook',
  },
  {
    option: 3,
    nameOption: 'Additional Info',
  },
];
export const INFO_OF_RECIPE = [
  {
    idMyRecipe: 1,
    idRecipe: 1,
    dataImage: [
      {
        idImage: 1,
        image:
          'https://cdn.tgdd.vn/Files/2018/07/28/1104915/cach-lam-mi-xao-hai-san-hap-dan-la-mieng-cho-ca-nha-2.jpg',
      },
      {
        idImage: 2,
        image:
          'https://cdn.tgdd.vn/Files/2018/07/28/1104915/cach-lam-mi-xao-hai-san-hap-dan-la-mieng-cho-ca-nha-9.jpg',
      },
      {
        idImage: 3,
        image:
          'https://cdn.tgdd.vn/Files/2018/07/28/1104915/cach-lam-mi-xao-hai-san-hap-dan-la-mieng-cho-ca-nha-10.jpg',
      },
      {
        idImage: 4,
        image:
          'https://cdn.tgdd.vn/Files/2018/07/28/1104915/cach-lam-mi-xao-hai-san-hap-dan-la-mieng-cho-ca-nha-7.jpg',
      },
      {
        idImage: 4,
        image:
          'https://cdn.tgdd.vn/Files/2018/07/28/1104915/cach-lam-mi-xao-hai-san-hap-dan-la-mieng-cho-ca-nha-7.jpg',
      },
    ],
    ingredients: [
      {
        idItem: 1,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/7/73/Mama_instant_noodle_block.jpg',
      },
      {
        idItem: 2,
        image:
          'https://bazanfood.vn/wp-content/uploads/2020/06/muc-hap-thuyen.jpg',
      },
      {
        idItem: 3,
        image:
          'https://file.hstatic.net/1000030244/file/z3091440817595_480c13063b6626426c1483155f8f3841__5___1__b8e3b50ecfa941acb30cc2b498fb6f9e_grande.png',
      },
      {
        idItem: 4,
        image:
          'https://www.hoteljob.vn/files/Anh-HTJ-Hong/cac-loai-gia-vi-thao-moc-trong-mon-au-1.jpg',
      },
    ],
    howToCook: [
      {
        idHowto: 1,
        description: 'Sơ chế nguyên liệu',
      },
      {
        idHowto: 2,
        description: 'Sơ chế mì',
      },
      {
        idHowto: 3,
        description: 'Xào tôm, mực, rau',
      },
      {
        idHowto: 4,
        description: 'Thành phẩm',
      },
    ],
    additionalInfo: {
      servingTime: '12 Mins',
      nutritionFacts:
        '222 calories \n6.2 g fat \n7.2 g carbohydrates \n28.6 g protein \n68 mg cholesterol \n268 mg sodium',
      tags: `Sweet, Coconut, Quick, Easy, Homemade`,
    },
  },
  {
    idMyRecipe: 1,
    idRecipe: 2,
    dataImage: [
      {
        idImage: 1,
        image:
          'https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/so-che-va-uop-thit-bo-8.jpg',
      },
      {
        idImage: 2,
        image:
          'https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/so-che-cac-nguyen-lieu-khac-51.jpg',
      },
      {
        idImage: 3,
        image:
          'https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/xao-mi-thit-bo.jpg',
      },
      {
        idImage: 4,
        image:
          'https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/xao-mi-thit-bo-1.jpg',
      },
      {
        idImage: 5,
        image:
          'https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/xao-mi-thit-bo-2.jpg',
      },
      {
        idImage: 6,
        image:
          'https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/xao-mi-thit-bo-3.jpg',
      },
      {
        idImage: 7,
        image:
          'https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/thanh-pham-372.jpg',
      },
    ],
    ingredients: [
      {
        idItem: 1,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/7/73/Mama_instant_noodle_block.jpg',
      },
      {
        idItem: 2,
        image:
          'https://cdn.tgdd.vn/2022/01/CookDish/10-meo-nau-thit-bo-ngay-tet-khong-dai-avt-1200x676.jpg',
      },
      {
        idItem: 3,
        image:
          'https://vnn-imgs-f.vgcloud.vn/2019/05/22/10/cach-chon-rau-cu-qua-sach-tuoi-ngon-khong-ngam-doc.jpg',
      },
      {
        idItem: 4,
        image:
          'https://www.hoteljob.vn/files/Anh-HTJ-Hong/cac-loai-gia-vi-thao-moc-trong-mon-au-1.jpg',
      },
      {
        idItem: 5,
        image:
          'https://ondinhtieuduong.com/wp-content/uploads/2020/07/1-Rau-can-tay-gom-nhieu-thanh-phan-co-ich-cho-chung-huyet-ap-cao.jpg',
      },
    ],
    howToCook: [
      {
        idHowto: 1,
        description: 'Sơ chế và ướp thịt bò',
      },
      {
        idHowto: 2,
        description: 'Sơ chế các nguyên liệu khác',
      },
      {
        idHowto: 3,
        description: 'Xào mì thịt bò',
      },
      {
        idHowto: 4,
        description: 'Thành phẩm',
      },
    ],
    additionalInfo: {
      servingTime: '12 Mins',
      nutritionFacts:
        '222 calories \n6.2 g fat \n7.2 g carbohydrates \n28.6 g protein \n68 mg cholesterol \n268 mg sodium',
      tags: `Sweet, Coconut, Quick, Easy, Homemade`,
    },
  },
  {
    idMyRecipe: 1,
    idRecipe: 3,
    dataImage: [
      {
        idImage: 1,
        image:
          'https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/uop-ga-va-luoc-trung-cut.jpg',
      },
      {
        idImage: 2,
        image:
          'https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/nau-nuoc-dung-mi-quang-1.jpg',
      },
      {
        idImage: 3,
        image:
          'https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/nau-nuoc-dung-mi-quang-2.jpg',
      },
      {
        idImage: 4,
        image:
          'https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/BeFunky-collage(46).jpg',
      },
      {
        idImage: 5,
        image:
          'https://cdn.tgdd.vn/Files/2018/07/28/1104915/cach-lam-mi-xao-hai-san-hap-dan-la-mieng-cho-ca-nha-7.jpg',
      },
    ],
    ingredients: [
      {
        idItem: 1,
        image:
          'https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/so-che-nguyen-lieu-464.jpg',
      },
      {
        idItem: 2,
        image:
          'https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/so-che-nguyen-lieu-465.jpg',
      },
      {
        idItem: 3,
        image:
          'https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/so-che-nguyen-lieu-466.jpg',
      },
      {
        idItem: 4,
        image:
          'https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/so-che-nguyen-lieu-467.jpg',
      },
      {
        idItem: 5,
        image:
          'https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/uop-ga-va-luoc-trung-cut-2.jpg',
      },
    ],
    howToCook: [
      {
        idHowto: 1,
        description: 'Sơ chế nguyên liệu',
      },
      {
        idHowto: 2,
        description: 'Ướp gà và luộc trứng cút',
      },
      {
        idHowto: 3,
        description: 'Nấu nước dùng mì quảng',
      },
      {
        idHowto: 4,
        description: 'Thành phẩm',
      },
    ],
    additionalInfo: {
      servingTime: '12 Mins',
      nutritionFacts:
        '222 calories \n6.2 g fat \n7.2 g carbohydrates \n28.6 g protein \n68 mg cholesterol \n268 mg sodium',
      tags: `Sweet, Coconut, Quick, Easy, Homemade`,
    },
  },
  {
    idMyRecipe: 1,
    idRecipe: 4,
    dataImage: [
      {
        idImage: 1,
        image:
          'https://cdn.tgdd.vn/2021/10/CookRecipe/GalleryStep/nau-nuoc-dung-3.jpg',
      },
      {
        idImage: 2,
        image:
          'https://cdn.tgdd.vn/2021/10/CookRecipe/GalleryStep/nau-nuoc-dung-4.jpg',
      },
      {
        idImage: 3,
        image:
          'https://cdn.tgdd.vn/2021/10/CookRecipe/GalleryStep/nau-nuoc-dung-5.jpg',
      },
      {
        idImage: 4,
        image:
          'https://cdn.tgdd.vn/2021/10/CookRecipe/GalleryStep/nau-mi-cay.jpg',
      },
      {
        idImage: 4,
        image:
          'https://cdn.tgdd.vn/2021/10/CookRecipe/GalleryStep/nau-mi-cay-1.jpg',
      },
    ],
    ingredients: [
      {
        idItem: 1,
        image:
          'https://cdn.tgdd.vn/2021/10/CookRecipe/GalleryStep/so-che-nguyen-lieu-52.jpg',
      },
      {
        idItem: 2,
        image:
          'https://cdn.tgdd.vn/2021/10/CookRecipe/GalleryStep/so-che-nguyen-lieu-71.jpg',
      },
      {
        idItem: 3,
        image:
          'https://cdn.tgdd.vn/2021/10/CookRecipe/GalleryStep/so-che-nguyen-lieu-70.jpg',
      },
      {
        idItem: 4,
        image:
          'https://cdn.tgdd.vn/2021/10/CookRecipe/GalleryStep/so-che-nguyen-lieu-69.jpg',
      },
    ],
    howToCook: [
      {
        idHowto: 1,
        description: 'Sơ chế nguyên liệu',
      },
      {
        idHowto: 2,
        description: 'Nấu nước dùng',
      },
      {
        idHowto: 3,
        description: 'Nấu mì cay',
      },
      {
        idHowto: 4,
        description: 'Thành phẩm',
      },
    ],
    additionalInfo: {
      servingTime: '12 Mins',
      nutritionFacts:
        '222 calories \n6.2 g fat \n7.2 g carbohydrates \n28.6 g protein \n68 mg cholesterol \n268 mg sodium',
      tags: `Sweet, Coconut, Quick, Easy, Homemade`,
    },
  },
  {
    idMyRecipe: 1,
    idRecipe: 5,
    dataImage: [
      {
        idImage: 1,
        image:
          'https://cdn.tgdd.vn/Files/2020/04/30/1252855/2-cach-lam-mi-lanh-naengmyeon-han-quoc-don-gian-hap-dan-thom-ngon-chuan-vi-4.jpg',
      },
      {
        idImage: 2,
        image:
          'https://cdn.tgdd.vn/Files/2020/04/30/1252855/2-cach-lam-mi-lanh-naengmyeon-han-quoc-don-gian-hap-dan-thom-ngon-chuan-vi-8.jpg',
      },
      {
        idImage: 3,
        image:
          'https://cdn.tgdd.vn/Files/2020/04/30/1252855/2-cach-lam-mi-lanh-naengmyeon-han-quoc-don-gian-hap-dan-thom-ngon-chuan-vi-9.jpg',
      },
      {
        idImage: 4,
        image:
          'https://cdn.tgdd.vn/Files/2020/04/30/1252855/2-cach-lam-mi-lanh-naengmyeon-han-quoc-don-gian-hap-dan-thom-ngon-chuan-vi-11.jpg',
      },
      {
        idImage: 5,
        image:
          'https://cdn.tgdd.vn/Files/2020/04/30/1252855/2-cach-lam-mi-lanh-naengmyeon-han-quoc-don-gian-hap-dan-thom-ngon-chuan-vi-13.jpg',
      },
    ],
    ingredients: [
      {
        idItem: 1,
        image:
          'https://cdn.tgdd.vn/Files/2020/04/30/1252855/2-cach-lam-mi-lanh-naengmyeon-han-quoc-don-gian-hap-dan-thom-ngon-chuan-vi.jpg',
      },
      {
        idItem: 2,
        image:
          'https://cdn.tgdd.vn/Files/2020/04/30/1252855/2-cach-lam-mi-lanh-naengmyeon-han-quoc-don-gian-hap-dan-thom-ngon-chuan-vi-1.jpg',
      },
      {
        idItem: 3,
        image:
          'https://cdn.tgdd.vn/Files/2020/04/30/1252855/2-cach-lam-mi-lanh-naengmyeon-han-quoc-don-gian-hap-dan-thom-ngon-chuan-vi-1.jpg',
      },
      {
        idItem: 4,
        image:
          'https://cdn.tgdd.vn/Files/2020/04/30/1252855/2-cach-lam-mi-lanh-naengmyeon-han-quoc-don-gian-hap-dan-thom-ngon-chuan-vi-12.jpg',
      },
    ],
    howToCook: [
      {
        idHowto: 1,
        description: 'Sơ chế nguyên liệu và nấu nước dùng',
      },
      {
        idHowto: 2,
        description: 'Pha nước dùng mì lạnh',
      },
      {
        idHowto: 3,
        description: 'Làm các món ăn kèm',
      },
      {
        idHowto: 4,
        description: 'Trụng mì',
      },
      {
        idHowto: 5,
        description: 'Thành phẩm',
      },
    ],
    additionalInfo: {
      servingTime: '12 Mins',
      nutritionFacts:
        '222 calories \n6.2 g fat \n7.2 g carbohydrates \n28.6 g protein \n68 mg cholesterol \n268 mg sodium',
      tags: `Sweet, Coconut, Quick, Easy, Homemade`,
    },
  },
];

export const getDataInfoItemRecipe = (idMyRecipe, idRecipe) => {
  const data = INFO_OF_RECIPE.filter(
    item => item.idMyRecipe == idMyRecipe && item.idRecipe == idRecipe,
  );
  return data;
};
