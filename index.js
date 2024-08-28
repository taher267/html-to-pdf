var html_to_pdf = require("html-pdf-node"),
  path = require("path"),
  fs = require("fs");
const jsonData = require("./server-10.json");
let options = { format: "A4" };
// Example of options with args //
// let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };
const platformsSrc = {
    "reddit.com": "https://app.bizreply.co/platforms/reddit.png",
    "quora.com": "https://app.bizreply.co/platforms/quora.png",
    "twitter.com": "https://app.bizreply.co/platforms/twitter.png",
    "linkedin.com": "https://app.bizreply.co/platforms/linkedin.png",
  },
  brandLogo = "https://app.bizreply.co/platforms/linkedin.png",
  headerObj = {
    title: "title",
    snippet: "Short Description",
    reply: "Reply",
    updatedAt: "Date of Reply",
    link: "Post Link",
    keyword: "Keyword",
    platform: "Social",
  },
  title = "title",
  snippet = "Short Description",
  reply = "Reply",
  updatedAt = "Date of Reply",
  link = "Post Link",
  keyword = "Keyword",
  platform = "Social";
const mentions = jsonData?.[0]?.organic;
const platforms = ["reddit.com", "twitter.com", "quora.com", "linkedin.com"],
  keywords = ["saas", "dot"];
let file = {
  content: `<html lang='en'><head><meta charset='UTF-8'/><meta name='viewport'content='width=device-width, initial-scale=1.0'/><title>Export to CSV</title></head><body><div style='width: 210mm;height: 297mm;padding: 35px;'><div class='template-top'style='margin-bottom:20px;display: flex;justify-content:space-between;'><div class='template-top-left'><div class='brand-logo'style=''><img src='${brandLogo}'style='height:30px;'alt='brand-logo'/></div><div class='socials'style='display:flex;justify-content:space-between;'>${platforms
    .map(
      (platform) =>
        `<p style='margin:0;padding:0;'><img src='${platformsSrc[platform]}'style='height:30px;'alt='${platform}'/></p>`
    )
    .join(
      ""
    )}</div></div><div class='template-top-left'><p style='display: flex;align-items: center;'><span> Total replies: </span><span> 10 </span></p><p style=''><p style=''>Date:</p><p style='display:flex;align-items:center;'><span> date </span><span> to </span><span> date</span></p></p><div class='keywords'style='display:flex;justify-content:space-between;'><p style='margin:0;padding:0;'>${keywords.join(
    ", "
  )}</p></div></div></div><div class='template-bottom'style=''><div class='header'><div class='template-bottom'style='margin-bottom:10px;display: flex;justify-content:space-between;'><p>Title</p><p>Short Description</p><p>Date of Reply</p><p>Post Link</p><p>Keyword</p><p>Social</p></div><p>Reply</p></div></div><div class='table-row' style=''>${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}${jsonData
    .map(({ organic }) => {
      return organic
        .map(
          ({ title, snippet, keyword, platform, link, reply, updatedAt }) =>
            `<div class='table-row-top' style='margin-bottom:10px;display: flex;justify-content:space-between; border-bottom:1px solid #ddd'><p>${title}</p><p>${snippet}</p><p>${updatedAt}</p><p>${link}</p><p>${keyword}</p><p>${platform}</p></div><p class='table-row-reply'>${reply}</p>`
        )
        .join("");
    })
    .join("")}</div></div></body></html>`,
};

fs.writeFileSync(path.join(__dirname, "outputAll2.txt"), file.content);
// or //
// let file = { url: "https://example.com" };
html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
  fs.writeFileSync(path.join(__dirname, `${Date.now()}.pdf`), pdfBuffer);
  console.log("Alhamdu lillah done");
});
