module.exports = function(context, event) {

    // context.log("event: %j", event);
    const rawText = event.body.split('&').find((pair) => {
        return pair.startsWith('text=');
    });
    const userName = event.body.split('&').find((pair) => {
        return pair.startsWith('user_name=');
    });

    context.log("userName: %j", userName);
    if (rawText === undefined || userName === undefined || userName === 'user_name=slackbot') {
        context.done();
        return;
    }

    const text = decodeURIComponent(rawText.substr(5));
    context.log("text:%s", text);

    // この辺でいろいろやってみる
    if text == "ポニョ"{
      context.res = {
          body: {
              text: "ぽにょっ " + text + "@ GitHub"
          }
      };
    }else{
      context.res = {
          body: {
              text: "Hello " + text + "@ GitHub"
          }
      };
    }

    // context.bindngs.outputDocument = {text};
    context.done();
};
