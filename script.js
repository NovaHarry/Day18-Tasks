var maindiv = document.createElement('div');
maindiv.classList.add('container-fluid','text-center','my-0' );
document.body.append(maindiv);

var header = document.createElement('h1');
header.classList.add("header");
header.innerText = "Weather Page";
maindiv.append(header);

var out = document.createElement('div');
out.classList.add("sticky-top","outs");
out.innerText = '';
maindiv.append(out);

var rows = document.createElement('div');
rows.classList.add("row");
maindiv.append(rows);



let arr1 =[];
async function api(){
    url = 'https://restcountries.com/v3.1/all';
    var v = fetch(url)
    var out1 = await v;
    var prom = out1.json();
    var output = await prom;


    for(let i of output){


        var cols = document.createElement('div');
        cols.classList.add("col-lg-3","col-md-6",);
        rows.append(cols);
    
        var cards = document.createElement('div');
        cards.classList.add("card","hg","my-3");
        cols.append(cards);
        
    
        var cardheader = document.createElement('div');
        cardheader.classList.add("card-header" , "head");
        cards.append(cardheader);
        cardheader.innerText = `${i.name.common}`;
    
        var cardbody = document.createElement('div');
        cardbody.classList.add("card-body");
        cards.append(cardbody);
    
        var image = document.createElement('img');
        image.setAttribute('src',`${i.flags.png}`);
        image.classList.add('mb-5',"img-fluid");
        cardbody.append(image);
    
        let arr = [`Capital : ${i.capital}`,`Region : ${i.region}`,`Country Code: ${i.cioc}`];
    
        for(let i = 0; i < arr.length; i++){
    
        var carditems = document.createElement('p');
        carditems.classList.add('carditem');
        carditems.innerText = arr[i];
        cardbody.append(carditems);
    
        }
    
        var cardfooter = document.createElement('div');
        cardfooter.classList.add("card-footer" ,"vis");
        cards.append(cardfooter);
    
        var buttons = document.createElement('a');
        buttons.setAttribute("href", "#");
        buttons.innerText = "Click for Weather";
        buttons.classList.add("btn", "sticky-top","btn-block","btns");
        cardfooter.append(buttons);


        

        async function api1(){
            var API = '7dc9fe3c5371faad1d781f40506109d4';
            var weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${i.latlng[0]}&lon=${i.latlng[1]}&appid=${API}`;
            var v1 = fetch(weatherurl)
            var out11 = await v1;
            var prom1 = out11.json();
            var output1 = await prom1;
            var caps = `${output1.weather[0].main} ,${output1.weather[0].description}`;
            out.innerText= caps.toUpperCase();
            

            }
            buttons.addEventListener('click',(e)=>{
            e.preventDefault();
            out.style.visibility="visible";
            api1();
            

            
            
        })

    }
    
}
api();
