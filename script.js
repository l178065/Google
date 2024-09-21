const products = [
  { name: "商品1", price: 100 },
  { name: "商品2", price: 200 },
];

bot.onText(/\/products/, (msg) => {
  const chatId = msg.chat.id;
  let response = "可用商品：\n";
  products.forEach((product, index) => {
    response += `${index + 1}. ${product.name} - $${product.price}\n`;
  });
  bot.sendMessage(chatId, response);
});
