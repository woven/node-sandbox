exports.postActivity = function() {
    console.log('ready.postmsg');
    console.log(this.model);
    model = this.model;

    $test = model.push("activities.list",
        {'content': "More Items to be added", "comments": [{content:'MyComment',author:"I'm His User"},{content:'Cool',author:'David'}]}
    );

    console.log(model.get('activities.list'));
    console.log("CountOfITems:" + $test);
}