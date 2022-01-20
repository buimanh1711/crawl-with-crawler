const Crawler = require("crawler");
const detectAddress = require("./utils/detect_address");
const parseUrl = require("./utils/parse_url");

async function main() {
  var checked = {};
  var crawler = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;
        const content = $("body").text(); //all text content
        console.log(detectAddress(content))
        //parse content here

        // //get all nest link
        // const linkTags = $("a");

        // for (const key in linkTags) {
        //   const href = linkTags[key]?.attribs?.href;
        //   //ignore
        //   if (
        //     href &&
        //     !checked[href] &&
        //     !href.includes("javascript") &&
        //     !href.includes("https") &&
        //     !href.includes("http") &&
        //     href !== "#" &&
        //     href !== "/"
        //   ) {
        //     checked[href] = true;
        //     console.log(href);
        //     //recursive handle nest links
        //     crawler.queue(parseUrl(href));
        //   }
        // }
      }
      done();
    },
  });

  crawler.queue("https://bscscan.com");
}

main();
