

const schemaInfo = {
  load_date_time: "Fri Apr 29 2016 01:45:15 GMT-0700 (PDT)",
  __v: 0,
  _id: "57231f1b30e4351f4e9f4bf6",
};

// Create init users.

const im = {
  _id: "57231f1a30e4351f4e9f4bd7",
  first_name: "Ian",
  last_name: "Malcolm",
  location: "Austin, TX",
  description: "Should've stayed in the car.",
  occupation: "Mathematician",
};
const er = {
  _id: "57231f1a30e4351f4e9f4bd8",
  first_name: "Ellen",
  last_name: "Ripley",
  location: "Nostromo",
  description: "Lvl 6 rating. Pilot.",
  occupation: "Warrant Officer",
};
const pt = {
  _id: "57231f1a30e4351f4e9f4bd9",
  first_name: "Peregrin",
  last_name: "Took",
  location: "Gondor",
  description:
    "Home is behind, the world ahead... " +
    "And there are many paths to tread. Through shadow, to the edge of night, " +
    "until the stars are all alight... Mist and shadow, cloud and shade, " +
    "all shall fade... all... shall... fade... ",
  occupation: "Thain",
};
const rk = {
  _id: "57231f1a30e4351f4e9f4bda",
  first_name: "Rey",
  last_name: "Kenobi",
  location: "D'Qar",
  description: "Excited to be here!",
  occupation: "Rebel",
};
const al = {
  _id: "57231f1a30e4351f4e9f4bdb",
  first_name: "April",
  last_name: "Ludgate",
  location: "Pawnee, IN",
  description: "Witch",
  occupation: "Animal Control",
};
const jo = {
  _id: "57231f1a30e4351f4e9f4bdc",
  first_name: "John",
  last_name: "Ousterhout",
  location: "Stanford, CA",
  description: "<i>CS142!</i>",
  occupation: "Professor",
};

const users = [im, er, pt, rk, al, jo];

// Create initial photos.
const photo1 = {
  _id: "57231f1a30e4351f4e9f4bdd",
  date_time: "2012-08-30 10:44:23",
  file_name: "ouster.jpg",
  user_id: jo._id,
};
const photo2 = {
  _id: "57231f1a30e4351f4e9f4bde",
  date_time: "2009-09-13 20:00:00",
  file_name: "malcolm2.jpg",
  user_id: im._id,
};
const photo3 = {
  _id: "57231f1a30e4351f4e9f4bdf",
  date_time: "2009-09-13 20:05:03",
  file_name: "malcolm1.jpg",
  user_id: im._id,
};
const photo4 = {
  _id: "57231f1a30e4351f4e9f4be0",
  date_time: "2013-11-18 18:02:00",
  file_name: "ripley1.jpg",
  user_id: er._id,
};
const photo5 = {
  _id: "57231f1a30e4351f4e9f4be1",
  date_time: "2013-09-20 17:30:00",
  file_name: "ripley2.jpg",
  user_id: er._id,
};
const photo6 = {
  _id: "57231f1a30e4351f4e9f4be2",
  date_time: "2009-07-10 16:02:49",
  file_name: "kenobi1.jpg",
  user_id: rk._id,
};
const photo7 = {
  _id: "57231f1a30e4351f4e9f4be3",
  date_time: "2010-03-18 23:48:00",
  file_name: "kenobi2.jpg",
  user_id: rk._id,
};
const photo8 = {
  _id: "57231f1a30e4351f4e9f4be4",
  date_time: "2010-08-30 14:26:00",
  file_name: "kenobi3.jpg",
  user_id: rk._id,
};
const photo9 = {
  _id: "57231f1a30e4351f4e9f4be5",
  date_time: "2013-12-03 09:02:00",
  file_name: "took1.jpg",
  user_id: pt._id,
};
const photo10 = {
  _id: "57231f1a30e4351f4e9f4be6",
  date_time: "2013-12-03 09:03:00",
  file_name: "took2.jpg",
  user_id: pt._id,
};
const photo11 = {
  _id: "57231f1a30e4351f4e9f4be7",
  date_time: "2013-09-04 09:16:32",
  file_name: "ludgate1.jpg",
  user_id: al._id,
};
const photo12 = {
  _id: "57231f1a30e4351f4e9f4be8",
  date_time: "2008-10-16 17:12:28",
  file_name: "kenobi4.jpg",
  user_id: rk._id,
};

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
];

// Create initial comments.
const comment1 = {
  _id: "57231f1a30e4351f4e9f4be9",
  date_time: "2012-09-02 14:01:00",
  comment:
    "Learning new programming languages is hard... " +
    "it's so easy to forget a </div>!",
  user: jo,
  photo_id: photo1._id,
};

const comment2 = {
  _id: "57231f1a30e4351f4e9f4bea",
  date_time: "2013-09-06 14:02:00",
  comment:
    "This is another comment, with a bit more text; " +
    "if the text gets long enough, does it wrap properly " +
    "from line to line?",
  user: jo,
  photo_id: photo1._id,
};

const comment3 = {
  _id: "57231f1a30e4351f4e9f4beb",
  date_time: "2013-09-08 14:06:00",
  comment:
    "If you see this text in <b>boldface</b> " +
    "then HTML escaping isn't working properly.",
  user: jo,
  photo_id: photo1._id,
};

const comment4 = {
  _id: "57231f1a30e4351f4e9f4bec",
  date_time: "2009-09-14 18:07:00",
  comment:
    "If there is one thing the history of evolution has" +
    " taught us it's that life will not be contained. Life breaks " +
    "free, it expands to new territories and crashes through " +
    "barriers, painfully, maybe even dangerously, but, uh... well, " +
    "there it is. Life finds a way.",
  user: im,
  photo_id: photo2._id,
};

const comment5 = {
  _id: "57231f1a30e4351f4e9f4bed",
  date_time: "2013-11-28 17:45:13",
  comment:
    "Back from my trip. Did IQs just... drop sharply while I was " + "away?",
  user: er,
  photo_id: photo5._id,
};

const comment6 = {
  _id: "57231f1a30e4351f4e9f4bee",
  date_time: "2013-11-02 14:07:00",
  comment:
    "Hey Rey, great form. Love what " +
    "you do with the scavenged tech, got any tips?",
  user: er,
  photo_id: photo7._id,
};

const comment7 = {
  _id: "57231f1a30e4351f4e9f4bef",
  date_time: "2013-11-02 14:09:15",
  comment:
    "Definitely! I love your work! I'm away on a trip at " +
    "the moment, but let's meet up when I get back! :)",
  user: rk,
  photo_id: photo7._id,
};

const comment8 = {
  _id: "57231f1a30e4351f4e9f4bf0",
  date_time: "2010-09-06 13:59:33",
  comment: "Made a new friend today! Well, they followed me " + "home, anyway.",
  user: rk,
  photo_id: photo8._id,
};

const comment9 = {
  _id: "57231f1a30e4351f4e9f4bf1",
  date_time: "2008-10-16 18:04:55",
  comment:
    "Wouldn't get anywhere without this beauty! " +
    "Completely built from scraps by hand, but she goes at top " +
    "speeds that'll rival any First Order piece of junk.",
  user: rk,
  photo_id: photo12._id,
};

const comment10 = {
  _id: "57231f1a30e4351f4e9f4bf2",
  date_time: "2013-12-04 13:12:00",
  comment: "What do you mean you haven't heard of second " + "breakfast?",
  user: pt,
  photo_id: photo10._id,
};

const comment11 = {
  _id: "57231f1a30e4351f4e9f4bf3",
  date_time: "2013-09-04 10:14:32",
  comment:
    "Beautiful yet cold and aloof. Loner. Does not obey, " +
    "occasionally chooses to cooperate. ",
  user: al,
  photo_id: photo11._id,
};

const comment12 = {
  _id: "57231f1a30e4351f4e9f4bf4",
  date_time: "2016-01-04 2:00:01",
  comment: "Which one are you?",
  user: al,
  photo_id: photo9._id,
};

const comment13 = {
  _id: "57231f1a30e4351f4e9f4bf5",
  date_time: "2016-01-04 2:04:01",
  comment: "The tall one.",
  user: pt,
  photo_id: photo9._id,
};

const comments = [
  comment1,
  comment2,
  comment3,
  comment4,
  comment5,
  comment6,
  comment7,
  comment8,
  comment9,
  comment10,
  comment11,
  comment12,
  comment13,
];
const product1 = {
  name: "Asus Vivobook Go 15",
  type_product: "laptop",
  price: "650$",
  description: "Asus Vivobook Go 15 là mẫu laptop phù hợp cho sinh viên và nhân viên văn phòng với thiết kế nhẹ, màn hình 15.6 inch và chip xử lý AMD Ryzen 5 mạnh mẽ.",
  file_name: "https://cdn.tgdd.vn/Products/Images/44/311178/asus-vivobook-go-15-e1504fa-r5-nj776w-thumb-600x600.jpg",
};

const product2 = {
  name: "HP 15 FD0234TU",
  type_product: "laptop",
  price: "700$",
  description: "HP 15 FD0234TU được trang bị bộ vi xử lý Intel Core i5 thế hệ 12 cùng màn hình 15.6 inch, phù hợp cho nhu cầu học tập và công việc.",
  file_name: "https://cdn.tgdd.vn/Products/Images/44/323920/hp-15-fd0234tu-i5-9q969pa-thumb-1-600x600.jpg",
};

const product3 = {
  name: "Lenovo Ideapad Slim 3",
  type_product: "laptop",
  price: "750$",
  description: "Lenovo Ideapad Slim 3 sở hữu thiết kế mỏng nhẹ, phù hợp cho người dùng di chuyển nhiều và hiệu suất mạnh mẽ với Intel Core i5.",
  file_name: "https://cdn.tgdd.vn/Products/Images/44/313333/lenovo-ideapad-slim-3-15iah8-i5-83er00evn-thumb-600x600.jpg",
};

const product4 = {
  name: "Dell Inspiron 15 3520",
  type_product: "laptop",
  price: "800$",
  description: "Dell Inspiron 15 3520 được trang bị màn hình 15.6 inch Full HD và bộ vi xử lý Intel Core i5, phù hợp cho công việc và giải trí.",
  file_name: "https://cdn.tgdd.vn/Products/Images/44/325242/dell-inspiron-15-3520-i5-n5i5052w1-thumb-600x600.jpg",
};

const product5 = {
  name: "Lenovo LOQ Gaming",
  type_product: "laptop",
  price: "950$",
  description: "Lenovo LOQ Gaming là lựa chọn lý tưởng cho game thủ với màn hình lớn và card đồ họa rời, mang đến trải nghiệm gaming mượt mà.",
  file_name: "https://cdn.tgdd.vn/Products/Images/44/322072/lenovo-loq-gaming-15iax9-i5-83gs000jvn-thumb-new-600x600.jpg",
};

const product6 = {
  name: "Acer Aspire Lite 14",
  type_product: "laptop",
  price: "600$",
  description: "Acer Aspire Lite 14 cung cấp hiệu suất tốt với bộ vi xử lý Intel Core i5, phù hợp cho nhu cầu học tập và làm việc hàng ngày.",
  file_name: "https://cdn.tgdd.vn/Products/Images/44/326637/acer-aspire-lite-14-51m-59bn-i5-nxktxsv001-100624-101857-600x600.jpg",
};

const product7 = {
  name: "HP Pavilion 15",
  type_product: "laptop",
  price: "850$",
  description: "HP Pavilion 15 sở hữu màn hình lớn và hiệu suất mạnh mẽ với chip Intel Core i5, phù hợp cho cả làm việc và giải trí.",
  file_name: "https://cdn.tgdd.vn/Products/Images/44/309565/hp-pavilion-15-eg2081tu-i5-7c0q4pa-thumb-600x600.jpg",
};

const product8 = {
  name: "iPhone 16 Pro Max",
  type_product: "smartphone",
  price: "1.500$",
  description: "iPhone 16 Pro Max sở hữu thiết kế titan sa mạc độc đáo, màn hình lớn và camera chất lượng cao.",
  file_name: "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-titan-sa-mac.png",
};

const product9 = {
  name: "iPhone 16 Pro",
  type_product: "smartphone",
  price: "1.300$",
  description: "iPhone 16 Pro có thiết kế titan tự nhiên, hiệu năng vượt trội với chip A17 và nhiều tính năng hiện đại.",
  file_name: "https://cdn.tgdd.vn/Products/Images/42/329143/iphone-16-pro-titan-tu-nhien.png",
};

const product10 = {
  name: "Samsung Galaxy A55 5G",
  type_product: "smartphone",
  price: "500$",
  description: "Samsung Galaxy A55 5G có thiết kế tinh tế, hỗ trợ mạng 5G và camera chất lượng cao.",
  file_name: "https://cdn.tgdd.vn/Products/Images/42/322096/samsung-galaxy-a55-5g-xanh-thumb-1-600x600.jpg",
};

const product11 = {
  name: "Samsung Galaxy Z Flip6",
  type_product: "smartphone",
  price: "1.200$",
  description: "Samsung Galaxy Z Flip6 có thiết kế gập hiện đại, phù hợp với những người yêu thích sự tiện lợi và thời trang.",
  file_name: "https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-xanh-thumbn-600x600.jpg",
};

const product12 = {
  name: "Samsung Galaxy M15 5G",
  type_product: "smartphone",
  price: "450$",
  description: "Samsung Galaxy M15 5G hỗ trợ kết nối mạng 5G và có thiết kế thanh lịch, phù hợp cho nhiều nhu cầu khác nhau.",
  file_name: "https://cdn.tgdd.vn/Products/Images/42/325073/samsung-galaxy-m15-5g-blue-thumb-1-600x600.jpg",
};

const product13 = {
  name: "Samsung Galaxy M35 5G",
  type_product: "smartphone",
  price: "550$",
  description: "Samsung Galaxy M35 5G cung cấp hiệu suất mạnh mẽ với màn hình lớn và khả năng kết nối 5G, phù hợp cho người dùng năng động.",
  file_name: "https://cdn.tgdd.vn/Products/Images/42/323563/samsung-galaxy-m35-5g-xanhdam-thumb-600x600.jpg",
};

const product14 = {
  name: "Samsung Galaxy S23 FE",
  type_product: "smartphone",
  price: "900$",
  description: "Samsung Galaxy S23 FE sở hữu hiệu năng mạnh mẽ, màn hình đẹp và camera chất lượng, phù hợp cho người dùng cao cấp.",
  file_name: "https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-mint-thumbnew-600x600.jpg",
};

const product15 = {
  name: "Bàn phím Bluetooth Logitech K380s",
  type_product: "keyboard",
  price: "40$",
  description: "Bàn phím Bluetooth Logitech K380s có thiết kế nhỏ gọn và kết nối không dây linh hoạt, phù hợp cho người dùng di động.",
  file_name: "https://cdn.tgdd.vn/Products/Images/4547/323008/ban-phim-bluetooth-logitech-k380s-hong-thumb-600x600.jpg",
};

const product16 = {
  name: "Bàn phím có dây Gaming Rapoo V500 Alloy",
  type_product: "keyboard",
  price: "50$",
  description: "Bàn phím có dây Gaming Rapoo V500 Alloy sở hữu thiết kế bền bỉ với tính năng anti-ghosting, mang đến trải nghiệm chơi game tốt.",
  file_name: "https://cdn.tgdd.vn/Products/Images/4547/246137/co-co-day-gaming-rapoo-v500alloy-den-thumb-600x600.jpeg",
};

const product17 = {
  name: "Bàn phím Bluetooth Logitech Signature K650",
  type_product: "keyboard",
  price: "60$",
  description: "Bàn phím Bluetooth Logitech Signature K650 mang đến sự thoải mái khi gõ phím và khả năng kết nối không dây tiện lợi.",
  file_name: "https://cdn.tgdd.vn/Products/Images/4547/326735/ban-phim-bluetooth-logitech-signature-k650-den-600x600.jpg",
};

const product18 = {
  name: "Bàn phím Bluetooth Asus Marshmallow KW100",
  type_product: "keyboard",
  price: "55$",
  description: "Bàn phím Bluetooth Asus Marshmallow KW100 có thiết kế thời trang với màu sắc hiện đại, phù hợp cho người dùng trẻ.",
  file_name: "https://cf.shopee.vn/file/9d6ffb68042d2b3903b6d93af13fd7a0",
};
const product19 = {
  name: "Bàn phím Bluetooth Logitech Key-To-Go 2",
  type_product: "keyboard",
  price: "65$",
  description: "Bàn phím Bluetooth Logitech Key-To-Go 2 siêu mỏng và nhẹ, lý tưởng cho người dùng di động cần tính linh hoạt.",
  file_name: "https://cdn.tgdd.vn/Products/Images/4547/328212/ban-phim-bluetooth-logitech-key-to-go-2-240724-023119-600x600.jpg",
};

const product20 = {
  name: "Bàn phím có dây Logitech K120",
  type_product: "keyboard",
  price: "20$",
  description: "Bàn phím có dây Logitech K120 đơn giản nhưng hiệu quả, với độ bền cao, phù hợp cho các môi trường làm việc văn phòng.",
  file_name: "https://cdn.tgdd.vn/Products/Images/4547/323001/ban-phim-co-day-logitech-k120-thumb-600x600.jpg",
};

const product21 = {
  name: "Bộ bàn phím chuột không dây Logitech MK240",
  type_product: "keyboard",
  price: "45$",
  description: "Bộ bàn phím chuột không dây Logitech MK240 kết hợp sự tiện lợi và gọn nhẹ với khả năng kết nối không dây đáng tin cậy.",
  file_name: "https://cdn.tgdd.vn/Products/Images/4547/323006/bo-ban-phim-chuot-khong-day-logitech-mk240-thumb-2-600x600.jpg",
};

const product22 = {
  name: "Chuột có dây Silent Rapoo N1200",
  type_product: "mouse",
  price: "10$",
  description: "Chuột có dây Silent Rapoo N1200 với thiết kế yên tĩnh và thao tác mượt mà, phù hợp cho môi trường làm việc yên tĩnh.",
  file_name: "https://cdn.tgdd.vn/Products/Images/86/235979/chuot-co-day-silent-rapoo-n1200-den-01-600x600.jpg",
};

const product23 = {
  name: "Chuột không dây DareU LM106G",
  type_product: "mouse",
  price: "15$",
  description: "Chuột không dây DareU LM106G có kết nối ổn định và thiết kế nhẹ nhàng, phù hợp cho công việc hàng ngày.",
  file_name: "https://cdn.tgdd.vn/Products/Images/86/293996/chuot-khong-day-dareu-lm106g-den-thumb-1-600x600.jpg",
};

const product24 = {
  name: "Chuột Bluetooth Silent Logitech M240",
  type_product: "mouse",
  price: "30$",
  description: "Chuột Bluetooth Silent Logitech M240 với thiết kế nhỏ gọn và yên tĩnh, hoàn hảo cho công việc văn phòng di động.",
  file_name: "https://cdn.tgdd.vn/Products/Images/86/311113/chuot-bluetooth-silent-logitech-m240-thumb-600x600.jpg",
};

const product25 = {
  name: "Chuột không dây Logitech M170",
  type_product: "mouse",
  price: "20$",
  description: "Chuột không dây Logitech M170 có kết nối không dây đáng tin cậy và thiết kế đơn giản, hiệu quả.",
  file_name: "https://cdn.tgdd.vn/Products/Images/86/195376/chuot-khong-day-logitech-m170-den-thumb3-600x600.jpeg",
};

const product26 = {
  name: "Chuột có dây Zadez M213",
  type_product: "mouse",
  price: "8$",
  description: "Chuột có dây Zadez M213 với giá thành hợp lý và thiết kế bền bỉ, thích hợp cho công việc văn phòng hoặc học tập.",
  file_name: "https://cdn.tgdd.vn/Products/Images/86/229586/chuot-co-day-zadez-m213-den01-600x600.jpg",
};

const product27 = {
  name: "Chuột không dây Logitech M185",
  type_product: "mouse",
  price: "25$",
  description: "Chuột không dây Logitech M185 với khả năng kết nối không dây linh hoạt, sử dụng pin lâu và thiết kế vừa vặn tay.",
  file_name: "https://cdn.tgdd.vn/Products/Images/86/223821/chuot-khong-day-logitech-m185-thumb2-1-600x600.jpeg",
};

const product28 = {
  name: "Chuột gaming Logitech G102 Gen2 Lightsync",
  type_product: "mouse",
  price: "35$",
  description: "Chuột gaming Logitech G102 Gen2 Lightsync mang đến trải nghiệm chơi game tối ưu với độ nhạy cao và đèn LED RGB.",
  file_name: "https://cdn.tgdd.vn/Products/Images/86/234490/chuot-gaming-logitech-g102-gen2-lightsync-01-600x600.jpg",
};


const product = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
  product25,
  product26,
  product27,
  product28
];

comments.forEach(function (comment) {
  const photo = photos.filter(function (photo) {
    return photo._id === comment.photo_id;
  })[0]; // Only one match. Return the content of the match inside the array

  if (!photo.comments) {
    photo.comments = [];
  }
  photo.comments.push(comment);
});

const userListModel = function () {
  return users;
};
const productListModel = function () {
  return product;
};
const userModel = function (userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === userId) {
      return users[i];
    }
  }
  return null;
};

const photoOfUserModel = function (userId) {
  return photos.filter(function (photo) {
    return photo.user_id === userId;
  });
};

const schemaModel = function () {
  return schemaInfo;
};

const models = {
  userListModel: userListModel,
  productListModel:productListModel,
  userModel: userModel,
  photoOfUserModel: photoOfUserModel,
  schemaInfo: schemaModel,
};

module.exports = models;
