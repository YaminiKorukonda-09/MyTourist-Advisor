import { TouchableOpacity } from "react-native-gesture-handler";

export const categories = [
  {
    id: 0,
    name: 'Andhra Pradesh',
    photo_url:
    'https://upload.wikimedia.org/wikipedia/commons/5/5c/Ap-districts.png'
  },
  {
    id: 1,
    name: 'Arunachal Pradesh',
    photo_url: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-548700815_full.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4'
  },
  {
    id: 2,
    name: 'Assam',
    photo_url:
      'https://tse1.mm.bing.net/th?id=OIP.zJtjoPTyruS2P4k7oKTvLAHaEK&pid=Api&P=0'
  },
  {
    id: 3,
    name: 'Bihar',
    photo_url:
    'https://tse4.mm.bing.net/th?id=OIP.1jX0K9n-gFfUCCoWzP9TbwHaEK&pid=Api&P=0'
  },
  {
    id: 4,
    name: 'Chhattisgarh',
    photo_url: 'https://qph.fs.quoracdn.net/main-qimg-a6afa181c3a06004fdf0c4411dcb8bc0-c'
  },
  {
    id: 5,
    name: 'Goa',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.jL4glGbw1c7-apR5phWYjAHaEj&pid=Api&P=0'
  },
  {
    id: 6,
    name: 'Gujarat',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.Z0-UrhDAZAjFSDczQxTiDwHaDF&pid=Api&P=0'
  },
  {
    id: 7,
    name: 'Haryana',
    photo_url: '\https://tse2.mm.bing.net/th?id=OIP.JMpLS1uOl_5J6sf-Wjc0twHaEK&pid=Api&P=0'
  },
  {
    id: 8,
    name: 'Himachal Pradesh',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.-pV16dLBQneEUCHtVvZA1wHaE9&pid=Api&P=0'
  },
  {
    id: 9,
    name: 'Jharkhand',
    photo_url: 'https://www.delhimetrotimes.in/photos/2021/03/deoghar.jpg'
  },
  {
    id: 10,
    name: 'Karnataka',
    photo_url: 'http://techstory.in/wp-content/uploads/2016/09/Karnataka-tourism.jpg'
  },
  {
    id: 11,
    name: 'Kerala',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.LdlhjTg3nrgs5ty91XiEkwHaEK&pid=Api&P=0'
  },
  {
    id: 12,
    name: 'Madhya Pradesh',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.Yms0RNCeV3bFcJgXYdktlwHaE8&pid=Api&P=0'
  },
  {
    id: 13,
    name: 'Maharashtra',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.c-C9GlBhOnZC98pLmM2fkwHaFP&pid=Api&P=0'
  },
  {
    id: 14,
    name: 'Manipur',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.VU-iKB-f66Sd4X-k64VLVQHaEz&pid=Api&P=0'
  },
  {
    id: 15,
    name: 'Meghalaya',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.XR-5-qHJNepLVE5RxQivtAHaE8&pid=Api&P=0'
  },
  {
    id: 16,
    name: 'Mizoram',
    photo_url: 'https://www.taleof2backpackers.com/wp-content/uploads/2019/12/Night-view-of-Aizawl-city.jpg'
  },
  {
    id: 17,
    name: 'Nagaland',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.XGQ_QEpCTxib6cXoRajrBQHaE8&pid=Api&P=0'
  },
  {
    id: 18,
    name: 'Odisha',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.06sFy0UHuT0YiogWLgAReAHaE8&pid=Api&P=0'
  },
  {
    id: 19,
    name: 'Punjab',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.xZ08vHkVSUDr-xuhhMWgHwHaEo&pid=Api&P=0'
  },
  {
    id: 20,
    name: 'Rajasthan',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.DBdFDm0rsgnKNWPvoSDcgQHaEK&pid=Api&P=0'
  },
  {
    id: 21,
    name: 'Sikkim',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.D2nMWEA8HPsVT-TaeRLVLAHaE8&pid=Api&P=0'
  },
  {
    id: 22,
    name: 'Tamil Nadu',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.XEFiXuo6MistIkImMC6M9QHaFj&pid=Api&P=0'
  },
  {
    id: 23,
    name: 'Telangana',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.4ii05MLxTOYCwdMWOOf6DwHaD3&pid=Api&P=0'
  },
  {
    id: 24,
    name: 'Tripura',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.YWEC8zJU5CCnZAohAdM0OwHaEj&pid=Api&P=0'
  },
  {
    id: 25,
    name: 'Uttar Pradesh',
    photo_url: 'https://qph.fs.quoracdn.net/main-qimg-377177bdf7939074f84a47d02977f846-c'
  },
  {
    id: 26,
    name: 'Uttarakhand',
    photo_url: 'https://www.india.com/wp-content/uploads/2016/06/Uttarakhand.jpg'
  },
  {
    id: 27,
    name: 'West Bengal',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.KLNe20u-KEwbflPMknvoVAHaEK&pid=Api&P=0'
  },


];

export const recipes = [
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Places',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.vMk-sDoCVC2kxjE9dUlmBwHaEK&pid=Api&P=0',
    photosArray: [
      'https://tse1.mm.bing.net/th?id=OIP.vMk-sDoCVC2kxjE9dUlmBwHaEK&pid=Api&P=0',
      'https://www.holidify.com/images/bgImages/ARAKU-VALLEY.jpg',
      'https://www.holidify.com/images/bgImages/VISAKHAPATNAM.jpg',
      'https://www.holidify.com/images/bgImages/AMARAVATHI.jpg',
      'https://www.holidify.com/images/bgImages/GANDIKOTA.jpg',
      'https://www.holidify.com/images/bgImages/TIRUPATI.jpg',
      'https://www.holidify.com/images/bgImages/VIJAYAWADA.jpg',
      'https://www.holidify.com/images/bgImages/KURNOOL.jpg',
    ],
    ingredients: [[0, 'RK BEACH'], [1, 'Araku'], [2, 'Amaravati'],[3,'Gandikota'],[4,'Tirupati']],
    description:
      '1<=>Araku Valley is a comparatively unexplored hill station mostly visited by locals as a weekend getaway and is situated some 120 kilometres away from Vishakhapatnam.                                             2<=>Visakhapatnam, also commonly known as Vizag, is one of the oldest port cities in the country. Situated in the heart of Andhra Pradesh.                                               3<=>Known as the Capital of Andhra Pradesh, Amaravathi is a planned city on the banks of the River Krishna. Amaravathi is renowned for being a site of a Buddhist Stupa that is a semi-hemispherical structure containing Buddhist relics and often called the Abode of God.                                                                                  4<=>Endearingly known as the ‘Grand Canyon of India’, Gandikota is a small and quaint village in the Kadapa district of Andhra Pradesh. Flanked by River Pennar on the right side, the village is famous for the spectacular gorges formed by the river cutting through Erramala Hills.  ',
         
    },
  
  {
    recipeId: 1,
    categoryId: 0,
    title: 'Restaurants',
    photo_url:'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    photosArray: [
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
      'https://tse3.mm.bing.net/th?id=OIP.Y2-ixM-IjX0-Ma_VleznxgHaE8&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.jMJaldLrmnsozpftY46PSwHaE8&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.DdLomrqv3tslU9IVNZtCNwHaE7&pid=Api&P=0'
    ],
    ingredients: [
      [5, 'Cascades'],
      [6, 'Sweet Magic'],
      [7, 'Nine Flavours'],
    ],
    description:
      '1.Dabagardens Dolphin Hotel, Visakhapatnam 530020 India ,contact number-+91 891 666 6677                                                              2.100 Ft Road, Mg Road, Opposite D V Manor Hotel Adhikari Complex, Vijayawada 520007 India contact number-+91 76077 29856                                            3.Tirumala Bypass Road C/O Hotel Vihas, Door 18-8-40/B, Leela Mahal Center, Tirupati 517502 India contact number-+91 88866 01608'
  },
  {
    recipeId: 2,
    categoryId: 11,
    title: 'Places',
    photo_url:
      'https://www.tripsavvy.com/thmb/vLEE2GuEfSVAMZIEYdMLYnMjoNU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-458071515-5c61149f46e0fb000127c9c4.jpg',
    photosArray: [
      'https://www.tripsavvy.com/thmb/vLEE2GuEfSVAMZIEYdMLYnMjoNU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-458071515-5c61149f46e0fb000127c9c4.jpg',
    ],
    time: '10',
    ingredients: [
      [0, ''],
      [60, '1/2 lbs'],
      [61, '1/2 liters'],
    ],
    description: ''
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Hotels',
    photo_url:
      'https://tse2.mm.bing.net/th?id=OIP.8wdYVYPE3iigjGyIrhae7AHaE8&pid=Api&P=0',
    photosArray: [
      'https://tse2.mm.bing.net/th?id=OIP.8wdYVYPE3iigjGyIrhae7AHaE8&pid=Api&P=0',
    ],
    time: '45',
    ingredients: [
      [0, '2 tablespoons'],
      [22, '1/2'],
      [23, '2 tablespoons'],
      [7, '2 cloves'],
      [3, '1 teaspoon'],
      [24, '1 tablespoon'],
      [25, '1 lb'],
      [1, '2 teaspoons'],
      [4, '2 teaspoons'],
      [26, '15 oz'],
      [27, '8'],
      [28, '2'],
      [29, '1 cup']
    ],
    description:
      ''
  },
  {
    recipeId: 4,
    categoryId: 0,
    title: 'Hotels',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.P29oCF91TD50sep4q6tKYQHaEX&pid=Api&P=0',
    photosArray: [
      'https://tse3.mm.bing.net/th?id=OIP.P29oCF91TD50sep4q6tKYQHaEX&pid=Api&P=0',
    ],
    time: '30',
    ingredients: [
      [8, 'Novotel Visakhapatnam Varun Beach'],
      [9, 'Marasa Sarovar Premiere'],
      [10, 'Fortune Select Grand Ridge'],
    ],
    description:'1.Beach Road, Visakhapatnam 530002 India 089128 22222                                                               2.Karakambadi Road Next to Grandworld, Tirupati 517507 India                                                 3.Tiruchanoor Road Chenni Bangalore Highway, Tirupati 517501 India',
  },
  {
    recipeId: 5,
    categoryId: 2,
    title: 'Places',
    photo_url: 'https://www.holidify.com/images/cmsuploads/square/attr_3540.jpg',
    photosArray: [
      'https://www.holidify.com/images/cmsuploads/square/attr_3540.jpg',
    ],
    time: '35',
    ingredients: [
      [30, 'jucie of 1 '],
      [24, '2 teaspoons'],
      [0, '3 tablespoons'],
      [3, '1 teaspoon'],
      [31, '1/2 teaspoons'],
      [32, '1/2 teaspoons'],
      [4, '2 teaspoons'],
      [33, '1/2 lb'],
      [27, '8'],
      [14, '2 teasponns'],
      [34, '1']
    ],
    description:
      ''
  },
  {
    recipeId: 6,
    categoryId: 6,
    title: 'Restaurant',
    photo_url:
      'https://tse3.mm.bing.net/th?id=OIP.vhzqxa8_G_mn8BiebY-FaAHaFI&pid=Api&P=0',
    photosArray: [
      'https://tse3.mm.bing.net/th?id=OIP.vhzqxa8_G_mn8BiebY-FaAHaFI&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: 35,
    ingredients: [
      [5, 'R Kitchen'],
      [6, 'Rajwada'],
      [7, 'Terrakotta'],
     
    ],
    description:
      '1.Sarkhej Gandhinagar Highway Sola Road Behind Ganesh Meridian Complex, Ahmedabad 380060 India  +91 75748 47178                                          2.Ambaji Temple, Malay Talav Paldi, Near Jivraj Tolnaka, Ahmedabad 380026 India +91 79 2664 3845                                            3.Airport Gandhinagar Highway A-101, Pramukh Arcade 2, Near Reliance Cross Road, Kudasan, Gandhinagar India+91 80808 02804'
  },
  {
    recipeId: 7,
    categoryId: 20,
    title: 'Hotels',
    photo_url:
      'https://tse2.mm.bing.net/th?id=OIP.nkdcZaLLzBp_QVMorgXBmgHaEO&pid=Api&P=0',
    photosArray: [
      'https://tse2.mm.bing.net/th?id=OIP.nkdcZaLLzBp_QVMorgXBmgHaEO&pid=Api&P=0',
    ],
    time: 50,
    ingredients: [
      [39, '1 lb'],
      [40, '1 cup'],
      [41, '1/2 cup'],
      [42, '1/4 cup'],
      [43, '2 tablespoons'],
      [44, '1/2 cup'],
      [7, '1/4 teaspoons'],
      [5, '1/4 teaspoons'],
      [30, '1/4 teaspoons'],
      [45, '2 oz'],
      [12, 'for dusting'],
      [4, '1/2 teaspoons'],
      [47, '2'],
      [46, '9 oz']
    ],
    description:
      ''
  },
  {
    recipeId: 8,
    categoryId: 26,
    title: 'Places',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.crjS7rDMdQecO2CX3XsTCwHaEh&pid=Api&P=0',
    photosArray: [
      "https://tse4.mm.bing.net/th?id=OIP.crjS7rDMdQecO2CX3XsTCwHaEh&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 9,
    categoryId: 9,
    title: 'Restaurant',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.qiuZB-nkOWjf5vnSd7FGIwHaEo&pid=Api&P=0',
    photosArray: [
      'https://tse1.mm.bing.net/th?id=OIP.qiuZB-nkOWjf5vnSd7FGIwHaEo&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: 15,
    ingredients: [
      [5, '50g'],
      [6, '100g'],
      [7, '350g'],
    ],
    description:
      ''
  },
  {
    recipeId: 10,
    categoryId: 18,
    title: 'Hotels',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.VmwpHHGmURj4rHXa92P_tgHaFD&pid=Api&P=0',
    photosArray: [
      'https://tse1.mm.bing.net/th?id=OIP.VmwpHHGmURj4rHXa92P_tgHaFD&pid=Api&P=0',
    ],
    time: 60,
    ingredients: [
      [36, '1 large'],
      [25, '1 pound'],
      [51, '5 cloves'],
      [52, '1 pound'],
      [53, '1 pound'],
      [54, '1 28 ounce can'],
      [23, '2 6 ounce can'],
      [55, '2 tablespoons'],
      [56, '1/4 cup'],
      [10, '1/2 cup'],
      [1, '1/2 teaspoons'],
      [58, '1 teaspoon'],
      [4, '1/4 teaspoons'],
      [16, '1 large'],
      [46, '1 pound'],
      [48, '1 cup'],
      [57, '30 ounces']
    ],
    description:
      ''
  },
  {
    recipeId: 11,
    categoryId: 1,
    title: 'Places',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.WiVPMthFzAa0pfzTXCpB2gHaEK&pid=Api&P=0',
    photosArray: [
      "https://tse3.mm.bing.net/th?id=OIP.WiVPMthFzAa0pfzTXCpB2gHaEK&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 12,
    categoryId: 26,
    title: 'Places',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.crjS7rDMdQecO2CX3XsTCwHaEh&pid=Api&P=0',
    photosArray: [
      "https://tse4.mm.bing.net/th?id=OIP.crjS7rDMdQecO2CX3XsTCwHaEh&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 13,
    categoryId: 1,
    title: 'Hotels',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.EClwwWTUj_YAFNyExG1JZQHaE6&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.EClwwWTUj_YAFNyExG1JZQHaE6&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 14,
    categoryId: 2,
    title: 'Restaurants',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.TYrRTXGERt4f_PlwZPI7-wHaEl&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.TYrRTXGERt4f_PlwZPI7-wHaEl&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, '200ml'], [6, '5g'], [7, '300g']],
    description:
      ''
  },
  {
    recipeId: 15,
    categoryId: 3,
    title: 'Places',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.OxVjglTcS5Bmbi94OfL1TQHaE8&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.OxVjglTcS5Bmbi94OfL1TQHaE8&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 16,
    categoryId: 1,
    title: 'Restauarants',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.QHgErxoV3m9eNb5c_sBSsAHaEK&pid=Api&P=0',
    photosArray: [
      "https://tse3.mm.bing.net/th?id=OIP.QHgErxoV3m9eNb5c_sBSsAHaEK&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, '200ml'], [6, '5g'], [7, '300g']],
    description:
      ''
  },
  {
    recipeId: 17,
    categoryId: 3,
    title: 'Restauarants',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.X5h999_tE2VMVl_vVfnsHwHaE2&pid=Api&P=0',
    photosArray: [
      "https://tse3.mm.bing.net/th?id=OIP.X5h999_tE2VMVl_vVfnsHwHaE2&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, '200ml'], [6, '5g'], [7, '300g']],
    description:
      ''
  },
  {
    recipeId: 18,
    categoryId: 2,
    title: 'Hotels',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.ssrgGVr4pv9ybmJ-VpWicQHaEB&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.ssrgGVr4pv9ybmJ-VpWicQHaEB&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 19,
    categoryId: 5,
    title: 'Places',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.JMoqPyd8FJrHEP3gBqTomQHaE5&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.JMoqPyd8FJrHEP3gBqTomQHaE5&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 20,
    categoryId: 7,
    title: 'Places',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.2GNvIf7JwSaFHaV5z8USdwHaEc&pid=Api&P=0',
    photosArray: [
      "https://tse3.mm.bing.net/th?id=OIP.2GNvIf7JwSaFHaV5z8USdwHaEc&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 21,
    categoryId: 6,
    title: 'Hotels',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.o_ypQGbz2T3CtXzz50iVCgHaFI&pid=Api&P=0',
    photosArray: [
      "https://tse4.mm.bing.net/th?id=OIP.o_ypQGbz2T3CtXzz50iVCgHaFI&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 22,
    categoryId: 4,
    title: 'Restauarants',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.sabA5Y0Ws2gxy9nP7IaqPQHaE9&pid=Api&P=0',

    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.sabA5Y0Ws2gxy9nP7IaqPQHaE9&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, '200ml'], [6, '5g'], [7, '300g']],
    description:
      ''
  },
  {
    recipeId: 23,
    categoryId: 7,
    title: 'Hotels',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.MOO8W3cS5JQPOQCzP73GtAHaFh&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.MOO8W3cS5JQPOQCzP73GtAHaFh&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 24,
    categoryId: 6,
    title: 'Places',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.Gw5R5RWwZQgle9fI9rsOFwHaFB&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.Gw5R5RWwZQgle9fI9rsOFwHaFB&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 25,
    categoryId: 4,
    title: 'Places',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.5Rl_bxF5iMcZ-tPGKrD1nAHaFj&pid=Api&P=0',
    photosArray: [
      "https://tse3.mm.bing.net/th?id=OIP.5Rl_bxF5iMcZ-tPGKrD1nAHaFj&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 26,
    categoryId: 5,
    title: 'Hotels',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.-9YvXcbcPf5ZIQdyKvUbVgHaE6&pid=Api&P=0',
    photosArray: [
      "https://tse3.mm.bing.net/th?id=OIP.-9YvXcbcPf5ZIQdyKvUbVgHaE6&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 27,
    categoryId: 4,
    title: 'Hotels',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.5SYGOfmcO1GsSOPgEKBt8wHaE7&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.5SYGOfmcO1GsSOPgEKBt8wHaE7&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 28,
    categoryId: 7,
    title: 'Restauarants',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.XGJUmUVkUq9D85FXRtgvvgEzDL&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.XGJUmUVkUq9D85FXRtgvvgEzDL&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, '200ml'], [6, '5g'], [7, '300g']],
    description:
      ''
  },
  {
    recipeId: 29,
    categoryId: 5,
    title: 'Restauarants',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.mEqHAyjd7ML07H2LgctxqgHaFl&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.mEqHAyjd7ML07H2LgctxqgHaFl&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, '200ml'], [6, '5g'], [7, '300g']],
    description:
      ''
  },
  {
    recipeId: 30,
    categoryId: 8,
    title: 'Places',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.ncyWpzK_ksu5Z2YewfSywwHaE8&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.ncyWpzK_ksu5Z2YewfSywwHaE8&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 31,
    categoryId: 8,
    title: 'Hotels',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.jMl-sGzYagFvjwmKdmEKKQHaE7&pid=Api&P=0',
    photosArray: [
      "https://tse3.mm.bing.net/th?id=OIP.jMl-sGzYagFvjwmKdmEKKQHaE7&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 32,
    categoryId: 8,
    title: 'Restauarants',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.PEsOFOtqqyOcRF-JFP3O5QHaDp&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.PEsOFOtqqyOcRF-JFP3O5QHaDp&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, '200ml'], [6, '5g'], [7, '300g']],
    description:
      ''
  },
  {
    recipeId: 33,
    categoryId: 9,
    title: 'Hotels',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP._zMV1o7sBs-1t8MJqKqNgQHaFD&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP._zMV1o7sBs-1t8MJqKqNgQHaFD&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 34,
    categoryId: 9,
    title: 'Places',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.YGpARAjN_XrtWOWmDPvC2AHaEK&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.YGpARAjN_XrtWOWmDPvC2AHaEK&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 35,
    categoryId: 10,
    title: 'Places',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.z_a7GIqBPwiZpFnh_IspvQHaFj&pid=Api&P=0',
    photosArray: [
      "https://tse4.mm.bing.net/th?id=OIP.z_a7GIqBPwiZpFnh_IspvQHaFj&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 36,
    categoryId: 10,
    title: 'Restaurants',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.SIYlqsmbka9pYW2YezL5BwHaE8&pid=Api&P=0',
    photosArray: [
      "https://tse4.mm.bing.net/th?id=OIP.SIYlqsmbka9pYW2YezL5BwHaE8&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, '200ml'], [6, '5g'], [7, '300g']],
    description:
      ''
  },
  {
    recipeId: 37,
    categoryId: 10,
    title: 'Hotels',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.aLCone2OC25uKJ9WbeBTkwHaEl&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.aLCone2OC25uKJ9WbeBTkwHaEl&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 38,
    categoryId: 11,
    title: 'Restaurants',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.rSYwH_OTDTUQlCpU8nEmCAHaHa&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.rSYwH_OTDTUQlCpU8nEmCAHaHa&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, '200ml'], [6, '5g'], [7, '300g']],
    description:
      ''
  },
  {
    recipeId: 39,
    categoryId: 11,
    title: 'Hotels',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.l16b0cVB4pcmlff7YlexXwHaEU&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.l16b0cVB4pcmlff7YlexXwHaEU&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 40,
    categoryId: 12,
    title: 'Places',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.ncyWpzK_ksu5Z2YewfSywwHaE8&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.ncyWpzK_ksu5Z2YewfSywwHaE8&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 41,
    categoryId: 12,
    title: 'Hotels',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.l16b0cVB4pcmlff7YlexXwHaEU&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.l16b0cVB4pcmlff7YlexXwHaEU&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 42,
    categoryId: 12,
    title: 'Restaurants',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.w5U60IxQe9hjn129BQbsKQHaE7&pid=Api&P=0',
    photosArray: [
      "https://tse3.mm.bing.net/th?id=OIP.w5U60IxQe9hjn129BQbsKQHaE7&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, 'Jail The InDorii Cafe'], [6, 'Nafees Restaurant'], [7, 'Sanchi']],
    description:
      '1.1-2 Shakuntala Complex, Janki Nagar, A.B. Road near Holkar College, Indore 452020 India+91 98939 97949                                                                2.1-2 Shakuntala Complex, Janki Nagar, A.B. Road near Holkar College, Indore 452020 India+91 98939 97949                                                                       3.A B Road Scheme 54 Sayaji Hotel, Vijay Nagar, Indore 452010 India+91 731 400 6666'
  },
  {
    recipeId: 43,
    categoryId: 13,
    title: 'Places',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.xCqZi2Z_IirFfhGMzHPZtQHaG_&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.xCqZi2Z_IirFfhGMzHPZtQHaG_&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 44,
    categoryId: 13,
    title: 'Hotels',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.s8CX3chIvivJ1XV84P7jWQHaFM&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.s8CX3chIvivJ1XV84P7jWQHaFM&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 45,
    categoryId: 13,
    title: 'Restaurants',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.pn1u0tdWlVL6wL1RmhV1iAHaE5&pid=Api&P=0',
    photosArray: [
      "https://tse3.mm.bing.net/th?id=OIP.pn1u0tdWlVL6wL1RmhV1iAHaE5&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, 'Tanatan'], [6, 'Mostly Grills'], [7, 'Mabruk']],
    description:
      '1.462 A B Nair Road Opposite Novotel, Mumbai 400049 India+91 70455 93074                                             2.70/C Nehru Road The Orchid Ecotel, Mumbai 400099 India+91 22 2616 4000                                                 3.Domestic Airport Western Express Highway Hotel Sahara Star, Mumbai 400099 India+91 86574 11561'
  },
  {
    recipeId: 46,
    categoryId: 14,
    title: 'Places',
    photo_url: 'hhttps://tse2.mm.bing.net/th?id=OIP.3Esx57AgIZTpt_0451aluQHaFj&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.3Esx57AgIZTpt_0451aluQHaFj&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 47,
    categoryId: 14,
    title: 'Hotels',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.f_mIzirOCI0KyiFfUG9T_QHaE8&pid=Api&P=0',
    photosArray: [
      "https://tse4.mm.bing.net/th?id=OIP.f_mIzirOCI0KyiFfUG9T_QHaE8&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 48,
    categoryId: 14,
    title: 'Restaurants',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.IQaBMR45EfJO5V0NVNqf4QHaES&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.IQaBMR45EfJO5V0NVNqf4QHaES&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, 'Mangoli Restaurant'], [6, 'Zoo Foods'], [7, 'Octangle']],
    description:
      '1.Zarkawt B - 49/1 Hotel Regency, Aizawl 796001 India+91 389 234 9334                                                                        2.Near Vanapa Hall, Aizawl 796001 India                                                                            3.Dawrpui Vengthar, Aizawl 796001 India'
  },
  {
    recipeId: 49,
    categoryId: 15,
    title: 'Restauarants',
    photo_url: 'https://tse2.mm.bing.net/th?id=OIP.PEsOFOtqqyOcRF-JFP3O5QHaDp&pid=Api&P=0',
    photosArray: [
      "https://tse2.mm.bing.net/th?id=OIP.PEsOFOtqqyOcRF-JFP3O5QHaDp&pid=Api&P=0",
      'https://tse4.mm.bing.net/th?id=OIP.32OcFo9Oi97QiVmdsJJ5sgHaFP&pid=Api&P=0',
      'https://tse4.mm.bing.net/th?id=OIP.zBI6vIIqypyU2_UtUP7HRAHaE7&pid=Api&P=0',
      'https://tse1.mm.bing.net/th?id=OIP.C6RvKJCae71qejoyvKZTGQHaE6&pid=Api&P=0',
    ],
    time: '15',
    ingredients: [[5, 'City Hut Family Dhaba'], [6, 'Jiva Grill Sohra'], [7, 'Dejavu']],
    description:
      '1.Oakland Road Earle Holiday Home, Shillong 793001 India                                                                                    2.Saitsohpen Jiva Resort, Sohra 793108 India                                                                           3.Police Point, Laitumkhrah Dejavu Restuarant 3rd Floor,Branto Complex Building,Red hill Rd, Shillong 793003 India'
  },
  {
    recipeId: 50,
    categoryId: 15,
    title: 'Hotels',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP._zMV1o7sBs-1t8MJqKqNgQHaFD&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP._zMV1o7sBs-1t8MJqKqNgQHaFD&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },
  {
    recipeId: 51,
    categoryId: 15,
    title: 'Places',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.YGpARAjN_XrtWOWmDPvC2AHaEK&pid=Api&P=0',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.YGpARAjN_XrtWOWmDPvC2AHaEK&pid=Api&P=0",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      ''
  },

  
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Beach',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.9ciWl9ZEGdr1sYQI1nm7fQHaEe&pid=Api&P=0',
  },
  {
    ingredientId: 1,
    name: 'Nature View',
    photo_url:
      'https://www.holidify.com/images/bgImages/ARAKU-VALLEY.jpg'
  },
  {
    ingredientId: 2,
    name: 'Buddha',
    photo_url: 'https://www.holidify.com/images/bgImages/AMARAVATHI.jpg'
  },
  {
    ingredientId: 3,
    name: 'River',
    photo_url:
      'https://www.holidify.com/images/bgImages/GANDIKOTA.jpg'
  },
  {
    ingredientId: 4,
    name: 'Temple',
    photo_url: 'https://www.holidify.com/images/bgImages/TIRUPATI.jpg'
  },
  {
    ingredientId: 5,
    name: 'Restaurant',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.Y2-ixM-IjX0-Ma_VleznxgHaE8&pid=Api&P=0'
  },
  {
    ingredientId: 6,
    name: 'Restaurant',
    photo_url:
      'https://tse1.mm.bing.net/th?id=OIP.jMJaldLrmnsozpftY46PSwHaE8&pid=Api&P=0'
  },
  {
    ingredientId: 7,
    name: 'Restaurant',
    photo_url:
      'https://tse4.mm.bing.net/th?id=OIP.DdLomrqv3tslU9IVNZtCNwHaE7&pid=Api&P=0'
  },
  {
    ingredientId: 8,
    name: 'Hotel',
    photo_url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/65/41/cc/fortune-select-grand.jpg?w=500&h=500&s=1'
  },
  {
    ingredientId: 9,
    name: 'Hotel',
    photo_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/4e/59/05/hotel-bliss.jpg?w=500&h=500&s=1'
  },
  {
    ingredientId: 10,
    name: 'Hotel',
    photo_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b5/21/96/keys-hotel-visakhapatnam.jpg?w=500&h=500&s=1'
  },
  {
    ingredientId: 11,
    name: 'Dried marjoram',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'All-purpose flour',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Brown sugar',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Kosher salt',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Whole chicken',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Eggs',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Quarts neutral oil',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Water',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Onion Powder',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Chicken Breast',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Onion chopped',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Tomato paste',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Chilli Powder',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Ground Beef',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Can kidney beans, rinsed and drained ',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Large Tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Shredded cheddar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Ground cumin',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Cayenne pepper',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Flaky white fish',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocado',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Red Pepper Flakes',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Onions',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Green Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza dough',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup sauce',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Hot Sauce',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Butter',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Heavy Cream',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'whole-milk plain yogurt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'celery stalks',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Garlic',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lasagna noodles',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Italian sauce',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Crushed Tomatoes',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Sugar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'minced fresh parsley',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'ricotta cheese',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' fennel seed',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Frozen Straberries',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Greek Yogurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
];
