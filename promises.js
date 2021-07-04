const delay = (seconds) =>
    new Promise((resolve, reject) => {
    if(typeof seconds !== "number") {
        reject(new Error("secomnds must be a number"))
    }
    setTimeout(resolve, seconds*1000);
    });

console.log("Zero seconds");
delay(1).then(() => console.log("one second"));
delay(5).then(() => console.log("five seconds"));

const spacePeople = () => {
    return new Promise((resolves, rejects) => {
        const api =
        "http://api.open-notify.org/astros.json";
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () => {
            if(request.status == 200) {
                resolves(JSON.parse(request.response));
            } else {
                rejects(Error(request.statusText));
            }
        };
        request.onerror = (err) => {
            rejects(err);
        };
        request.send();
    })
}

spacePeople().then((spaceData) =>
 console.log(spaceData),
 err => console.error(new Error("Can't load people"))
 );

 
 let getSpacePeople = () =>
 fetch("http://api.open-notify.org/astros.json").then(
     (res) => res.json()
 );

 spaceNames = () => getSpacePeople().then(json => json.people)
 .then((people) => people.map((p) => p.name))
 .then((names) => names.join(","));

 spaceNames().then(console.log);


 const delay1 = (seconds) =>
    new Promise((resolves) => setTimeout(resolves, seconds * 1000));

 const countToFive = async() => {
     console.log("zero seconds");
     await delay1(1);
     console.log("one second");
     await delay1(2);
     console.log("two seconds");
 }

 countToFive();

 const githubRequest = async(login) => {
     let response = await fetch(
         `https://api.github.com/users/${login}`
     );
     let json = await response.json();
     let summary = `${json.name}, ${json.company}`
     console.log(summary)
 }
 githubRequest("eveporcello");
