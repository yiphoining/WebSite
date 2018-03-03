const yImages = [
  "https://scontent-arn2-1.cdninstagram.com/vp/50cb9367150d448e36b807770fafb599/5B25AD61/t51.2885-15/s640x640/sh0.08/e35/12237322_172268243123288_1624620774_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/941b4fecc1b16fde4eb8e83c517eb0df/5B256049/t51.2885-15/e15/11085165_1599692086909063_385866296_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/82ccf09ba0e096c0596cd577f213a10b/5B0E133E/t51.2885-15/e15/10246116_849772451705121_1149335642_n.jpg",
  "https://scontent-arn2-1.cdninstagram.com/vp/5da91663bfeaf9092e0cc32fcf022927/5B05A10A/t51.2885-15/e15/11032964_847127232015263_535778849_n.jpg",
  "https://raw.githubusercontent.com/jonathanlau0/YWebSite/master/S%2BJ_Eshoot_Copenhagen(25of266)CA2_4827.jpg",
  "https://cdn.shopify.com/s/files/1/1693/8467/files/santorini_blog_2_2048x2048.jpg?v=1517850471",
  "https://cdn.shopify.com/s/files/1/1693/8467/files/santorini_blog1_2048x2048.jpg?v=1517850510",
  "https://cdn.shopify.com/s/files/1/1693/8467/files/Santorini_blog3_2048x2048.jpg?v=1517850538",
  "https://cdn.shopify.com/s/files/1/1693/8467/files/Santorini_blog_5_2048x2048.jpg?v=1517850558",
  "https://cdn.shopify.com/s/files/1/1693/8467/files/santorini_blog4_2048x2048.jpg?v=1517850603",
  "https://cdn.shopify.com/s/files/1/1693/8467/files/santorini_blog7_2048x2048.jpg?v=1517850630",
  "https://cdn.shopify.com/s/files/1/1693/8467/files/santorini_blog_6_2048x2048.jpg?v=1517850666"
]

const node = document.getElementById("image-head");

const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
    setTimeout(() => {
        container.style.backgroundImage = `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url(${image})`  
    }, step * (index + 1))
  ))
  setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(yImages, node, 3000)