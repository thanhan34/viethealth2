import type { Product } from "@/types/product";

const belowKneeFeatures: Product["features"] = [
  { title: "Socket thiết kế theo từng người", description: "Ôm vừa phần chi còn lại, hỗ trợ phân bố lực và tăng cảm giác thoải mái.", icon: "Settings" },
  { title: "Bàn chân hỗ trợ đi lại ổn định", description: "Giúp bước đi chắc chắn hơn trong các hoạt động sinh hoạt hằng ngày.", icon: "Footprints" },
  { title: "Trọng lượng nhẹ, dễ làm quen", description: "Cấu hình tối ưu để người dùng tập đi và thích nghi thuận lợi.", icon: "Activity" },
  { title: "Dễ bảo trì và điều chỉnh", description: "Thuận tiện kiểm tra, căn chỉnh định kỳ khi cơ thể và nhu cầu thay đổi.", icon: "Wrench" },
  { title: "Tăng sự tự tin", description: "Hỗ trợ người dùng chủ động hơn trong di chuyển, công việc và giao tiếp.", icon: "Star" },
];

const aboveKneeFeatures: Product["features"] = [
  { title: "Hỗ trợ khớp gối ổn định", description: "Cấu hình khớp gối phù hợp giúp đứng, bước và chuyển pha an toàn hơn.", icon: "Bone" },
  { title: "Kiểm soát bước đi an toàn", description: "Hỗ trợ người dùng kiểm soát dáng đi và giảm cảm giác thiếu chắc chắn.", icon: "ShieldCheck" },
  { title: "Theo mức độ vận động", description: "Linh kiện được lựa chọn dựa trên thói quen sinh hoạt và nhu cầu di chuyển.", icon: "Activity" },
  { title: "Thoải mái khi dùng dài giờ", description: "Socket và lớp tiếp xúc được căn chỉnh để giảm tì đè không mong muốn.", icon: "Clock" },
  { title: "Theo dõi sau lắp", description: "VietHealth đồng hành kiểm tra, hướng dẫn và điều chỉnh trong quá trình sử dụng.", icon: "Users" },
];

const armFeatures: Product["features"] = [
  { title: "Tăng thẩm mỹ và sự tự tin", description: "Hình dáng hài hòa với cơ thể, hỗ trợ người dùng tự tin hơn khi giao tiếp.", icon: "Star" },
  { title: "Hỗ trợ sinh hoạt cơ bản", description: "Có thể lựa chọn cấu hình phù hợp để hỗ trợ cầm nắm hoặc cân bằng cơ thể.", icon: "Hand" },
  { title: "Thiết kế theo cơ thể", description: "Màu sắc, hình dáng và kích thước được cá nhân hóa cho từng người.", icon: "Settings" },
  { title: "Trọng lượng nhẹ", description: "Tối ưu cảm giác đeo để dễ sử dụng trong sinh hoạt hằng ngày.", icon: "Activity" },
  { title: "Nhiều lựa chọn theo nhu cầu", description: "Từ thẩm mỹ đến chức năng điện, phù hợp mục tiêu sử dụng khác nhau.", icon: "PackageCheck" },
];

const braceFeatures: Product["features"] = [
  { title: "Thiết kế theo số đo", description: "Ghi nhận số đo và hình dạng cơ thể để tạo thiết bị vừa vặn hơn.", icon: "Settings" },
  { title: "Ổn định khớp và trục cơ thể", description: "Hỗ trợ kiểm soát tư thế, trục chi hoặc cột sống theo chỉ định.", icon: "Bone" },
  { title: "Giảm nguy cơ té ngã", description: "Tăng độ vững khi đứng, tập đi hoặc phục hồi chức năng.", icon: "ShieldCheck" },
  { title: "Phù hợp phục hồi chức năng", description: "Đồng hành trong quá trình điều trị, tập luyện và theo dõi lâu dài.", icon: "Activity" },
  { title: "Điều chỉnh định kỳ", description: "Có thể kiểm tra và căn chỉnh để phù hợp với tiến triển của người dùng.", icon: "Wrench" },
];

const flatFootFeatures: Product["features"] = [
  { title: "Nâng đỡ vòm bàn chân", description: "Hỗ trợ vòm bàn chân thấp và cải thiện cảm giác khi đứng, đi lại.", icon: "Footprints" },
  { title: "Cải thiện phân bố áp lực", description: "Giúp giảm điểm tì đè quá mức và hỗ trợ dáng đi cân bằng hơn.", icon: "Activity" },
  { title: "Hỗ trợ trục chi dưới", description: "Góp phần điều chỉnh liên kết bàn chân – cổ chân – gối trong giai đoạn phát triển.", icon: "Bone" },
  { title: "Giảm mỏi khi vận động", description: "Hỗ trợ trẻ thoải mái hơn khi đi lại, vui chơi hoặc vận động lâu.", icon: "Clock" },
  { title: "Thiết kế riêng cho trẻ", description: "Theo hình dạng bàn chân và nhu cầu sử dụng thực tế của từng trẻ.", icon: "Settings" },
];

export const products: Product[] = [
  {
    slug: "chan-gia-duoi-goi-co-ban",
    group: "Chân dưới",
    category: "Chân dưới",
    shortName: "Chân dưới gối cơ bản",
    title: "Chân giả dưới gối cơ bản",
    summary: "Giải pháp kinh tế cho nhu cầu đi lại hằng ngày. Socket nhựa PP, lớp lót EVA mềm và bàn chân gót mềm giúp di chuyển ổn định, êm ái và dễ làm quen.",
    longDescription: [
      "Chân giả dưới gối cơ bản là giải pháp kinh tế cho nhu cầu đi lại hằng ngày.",
      "Socket nhựa PP kết hợp lớp lót mút EVA mềm và bàn chân gót mềm giúp di chuyển ổn định, êm ái và dễ làm quen.",
    ],
    suitableFor: "Người có nhu cầu đi lại và sinh hoạt hằng ngày ở mức vừa phải.",
    image: "/images/products/chan-gia-duoi-goi-co-ban.png",
    features: belowKneeFeatures,
  },
  {
    slug: "chan-gia-duoi-goi-silicone-khoa-chot",
    group: "Chân dưới",
    category: "Chân dưới",
    shortName: "Chân silicon khóa chốt",
    title: "Chân giả dưới gối Silicone khóa chốt",
    summary: "Lớp lót silicone kết hợp khóa chốt giúp bám giữ chắc chắn, thoải mái và tăng sự tự tin khi di chuyển.",
    longDescription: [
      "Lớp lót silicone kết hợp khóa chốt mang lại cảm giác bám giữ chắc chắn và thoải mái.",
      "Socket nhựa PP cùng bàn chân một trục giúp tăng độ ổn định và tự tin hơn khi di chuyển.",
    ],
    suitableFor: "Người đi lại thường xuyên và mong muốn cảm giác bám giữ chắc chắn.",
    image: "/images/products/chan-gia-duoi-goi-silicone-khoa-chot.png",
    features: belowKneeFeatures,
  },
  {
    slug: "chan-gia-duoi-goi-ossur-my",
    group: "Chân dưới",
    category: "Chân dưới",
    shortName: "Chân chính hãng Össur Mỹ",
    title: "Chân giả dưới gối cao cấp Össur Mỹ",
    summary: "Sử dụng linh kiện chính hãng Össur Mỹ, socket carbon siêu nhẹ và bàn chân lưỡi carbon cho cảm giác bước đi tự nhiên, bền bỉ.",
    longDescription: [
      "Sử dụng linh kiện chính hãng Össur Mỹ, socket sợi carbon siêu nhẹ kết hợp bàn chân lưỡi carbon cho cảm giác bước đi tự nhiên, dễ dàng và độ bền cao.",
      "Thiết kế phù hợp với người có nhu cầu vận động thường xuyên, cần sự nhẹ nhàng, ổn định và hiệu suất cao.",
    ],
    suitableFor: "Người có nhu cầu đi lại thường xuyên hoặc hoạt động nhiều trong ngày.",
    image: "/images/products/chan-gia-duoi-goi-ossur-my.png",
    features: belowKneeFeatures,
  },
  {
    slug: "chan-gia-tren-goi-co-ban",
    group: "Chân trên",
    category: "Chân trên",
    shortName: "Chân cơ bản",
    title: "Chân giả trên gối cơ bản",
    summary: "Sử dụng hệ thống dây đeo kết hợp khớp gối cơ học, mang lại sự ổn định, dễ sử dụng và chi phí hợp lý.",
    longDescription: [
      "Chân giả trên gối cơ bản sử dụng hệ thống dây đeo kết hợp khớp gối cơ học, mang lại sự ổn định và dễ sử dụng trong sinh hoạt hằng ngày.",
      "Thiết kế bền bỉ, dễ bảo trì và có chi phí hợp lý.",
    ],
    suitableFor: "Người mới tập đi, nhu cầu đi lại vừa phải và ưu tiên giải pháp tiết kiệm.",
    image: "/images/products/chan-gia-tren-goi-co-ban.png",
    features: aboveKneeFeatures,
  },
  {
    slug: "chan-gia-tren-goi-silicone-khoa-chot",
    group: "Chân trên",
    category: "Chân trên",
    shortName: "Chân silicon khóa chốt",
    title: "Chân giả trên gối Silicone khóa chốt",
    summary: "Lớp lót silicone kết hợp khóa chốt giúp bám giữ chắc chắn. Khớp gối khí lực hỗ trợ dáng đi mượt hơn và giảm tốn sức.",
    longDescription: [
      "Lớp lót silicone kết hợp khóa chốt giúp bám giữ chắc chắn và tăng sự thoải mái khi sử dụng.",
      "Khớp gối khí lực Đài Loan mang lại dáng đi mượt hơn, hỗ trợ kiểm soát bước chân và giảm tốn sức khi di chuyển.",
    ],
    suitableFor: "Người đi lại thường xuyên, mong muốn cảm giác chắc chắn và chuyển động tự nhiên hơn.",
    image: "/images/products/chan-gia-tren-goi-silicone-khoa-chot.png",
    features: aboveKneeFeatures,
  },
  {
    slug: "chan-gia-tren-goi-ossur-my",
    group: "Chân trên",
    category: "Chân trên",
    shortName: "Chân chính hãng Össur Mỹ",
    title: "Chân giả trên gối cao cấp Össur Mỹ",
    summary: "Trang bị lớp lót silicon khóa chốt, khớp gối khí lực có phanh hãm an toàn và bàn chân carbon chính hãng Össur Mỹ.",
    longDescription: [
      "Trang bị lớp lót silicon khóa chốt, khớp gối khí lực có phanh hãm an toàn và bàn chân carbon chính hãng Össur Mỹ, giúp bước đi tự nhiên, ổn định và an toàn hơn.",
      "Thiết kế nhẹ, bền và hiệu suất cao, đáp ứng nhu cầu vận động trong thời gian dài.",
    ],
    suitableFor: "Người có mức độ vận động cao, cần sự an toàn, độ bền và trải nghiệm vận động tối ưu.",
    image: "/images/products/chan-gia-tren-goi-ossur-my.png",
    features: aboveKneeFeatures,
  },
  {
    slug: "tay-gia-tham-my",
    group: "Tay giả",
    category: "Tay giả",
    shortName: "Tay giả thẩm mỹ",
    title: "Tay giả thẩm mỹ",
    summary: "Tay giả thẩm mỹ có hình dáng và màu sắc gần giống tay thật, giúp tăng sự tự tin.",
    longDescription: [
      "Tay giả thẩm mỹ được thiết kế với hình dáng và màu sắc gần giống tay thật, giúp tăng sự tự tin trong sinh hoạt, giao tiếp và công việc hằng ngày.",
      "Sản phẩm có trọng lượng nhẹ, đeo thoải mái và được chế tạo phù hợp với từng người sử dụng.",
    ],
    suitableFor: "Người mong muốn cải thiện ngoại hình, tăng sự tự tin và hỗ trợ các hoạt động sinh hoạt cơ bản.",
    image: "/images/products/tay-gia-tham-my.png",
    features: armFeatures,
  },
  {
    slug: "tay-gia-chuc-nang-dien",
    group: "Tay giả",
    category: "Tay giả",
    shortName: "Tay giả chức năng",
    title: "Tay giả chức năng điện",
    summary: "Tay giả điện sử dụng cảm biến cơ để điều khiển thao tác đóng mở bàn tay.",
    longDescription: [
      "Tay giả điện sử dụng cảm biến cơ để điều khiển các thao tác đóng mở bàn tay, giúp cầm nắm nhiều loại vật dụng trong sinh hoạt và công việc.",
      "Thiết kế hiện đại, vận hành linh hoạt và có thể lựa chọn nhiều kiểu bàn tay phù hợp với nhu cầu sử dụng.",
    ],
    suitableFor: "Người cần phục hồi chức năng cầm nắm, làm việc và mong muốn tăng tính độc lập trong cuộc sống hằng ngày.",
    image: "/images/products/tay-gia-chuc-nang-dien.png",
    features: armFeatures,
  },
  {
    slug: "nep-afo-co-chan-ban-chan",
    group: "Nẹp chỉnh hình",
    category: "Nẹp chỉnh hình",
    shortName: "Nẹp dưới gối AFO",
    title: "Nẹp AFO cổ chân - bàn chân",
    summary: "Nẹp AFO giúp giữ bàn chân và cổ chân ổn định, hạn chế bàn chân rủ và giảm nguy cơ té ngã.",
    longDescription: [
      "Nẹp AFO giúp giữ bàn chân và cổ chân ở vị trí ổn định, hạn chế tình trạng bàn chân rủ, tăng khả năng đi lại và giảm nguy cơ té ngã.",
      "Sản phẩm được thiết kế theo hình dạng chân của từng người, đảm bảo thoải mái và hiệu quả khi sử dụng.",
    ],
    suitableFor: "Người bị bàn chân rủ sau đột quỵ, chấn thương thần kinh, bại não hoặc các bệnh lý ảnh hưởng đến khả năng đi lại.",
    image: "/images/products/nep-afo-co-chan-ban-chan.png",
    features: braceFeatures,
  },
  {
    slug: "nep-kafo-goi-co-chan-ban-chan",
    group: "Nẹp chỉnh hình",
    category: "Nẹp chỉnh hình",
    shortName: "Nẹp trên gối KAFO",
    title: "Nẹp KAFO gối - cổ chân - bàn chân",
    summary: "Nẹp KAFO hỗ trợ đồng thời khớp gối, cổ chân và bàn chân, giúp giữ vững đầu gối khi đứng và đi lại.",
    longDescription: [
      "Nẹp KAFO hỗ trợ đồng thời khớp gối, cổ chân và bàn chân, giúp giữ vững đầu gối khi đứng và đi lại.",
      "Thiết kế theo từng người bệnh, có thể kết hợp các khớp gối cơ học phù hợp với mức độ vận động.",
    ],
    suitableFor: "Người yếu hoặc liệt chi dưới, bại liệt, tổn thương thần kinh, sau chấn thương hoặc cần hỗ trợ vững chắc khi tập đi.",
    image: "/images/products/nep-kafo-goi-co-chan-ban-chan.png",
    features: braceFeatures,
  },
  {
    slug: "ao-chinh-hinh-cong-veo-cot-song",
    group: "Nẹp chỉnh hình",
    category: "Nẹp chỉnh hình",
    shortName: "Áo nẹp cột sống",
    title: "Áo chỉnh hình cong vẹo cột sống",
    summary: "Áo chỉnh hình được chế tạo theo số đo và tình trạng cong vẹo của từng bệnh nhân.",
    longDescription: [
      "Áo chỉnh hình được chế tạo theo số đo và tình trạng cong vẹo của từng bệnh nhân, giúp kiểm soát tiến triển của đường cong cột sống trong giai đoạn phát triển.",
      "Sản phẩm ôm sát cơ thể, đảm bảo hiệu quả điều trị và thuận tiện trong sinh hoạt hằng ngày.",
    ],
    suitableFor: "Trẻ em và thanh thiếu niên bị cong vẹo cột sống theo chỉ định của bác sĩ, hoặc người cần hỗ trợ chỉnh trục thân mình trong một số bệnh lý chỉnh hình.",
    image: "/images/products/ao-chinh-hinh-cong-veo-cot-song.png",
    features: braceFeatures,
  },
  {
    slug: "lot-chinh-hinh-ban-chan-bet",
    group: "Lót bàn chân",
    category: "Lót bàn chân",
    shortName: "Lót bàn chân bẹt",
    title: "Lót chỉnh hình bàn chân bẹt",
    summary: "Lót chỉnh hình được thiết kế theo hình dạng bàn chân của từng trẻ, giúp nâng đỡ vòm bàn chân và cải thiện dáng đi.",
    longDescription: [
      "Lót chỉnh hình được thiết kế theo hình dạng bàn chân của từng trẻ, giúp nâng đỡ vòm bàn chân, cải thiện sự phân bố áp lực và hỗ trợ điều chỉnh trục bàn chân – cổ chân – chi dưới trong quá trình phát triển.",
      "Sản phẩm góp phần cải thiện dáng đi, giảm mệt khi vận động và hỗ trợ các trường hợp lệch trục chi dưới liên quan đến bàn chân.",
    ],
    suitableFor: "Trẻ có bàn chân bẹt, vòm bàn chân thấp, dáng đi bất thường, dễ mỏi chân khi vận động hoặc có lệch trục chi dưới liên quan đến bàn chân.",
    image: "/images/products/lot-chinh-hinh-ban-chan-bet.png",
    features: flatFootFeatures,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products.filter((item) => item.group === product.group && item.slug !== product.slug).slice(0, limit);
}