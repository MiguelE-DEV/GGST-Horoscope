document.querySelector('#char').addEventListener('click', char)

function char (){

    let day = document.querySelector('#day').value
    let month = document.querySelector('#month').value

    if(((month == 12 && day >= 22) ||(month == 1 && day < 8)) && (document.getElementById('image').src !== 'axlLow.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Axl Low!'
        document.querySelector('#discription').innerText = 'Axl is spacetime controlling long range character who likes to use his chains sickles to wreck havok from afar.'
        document.getElementById("image").src = 'axlLow.jpg'
    
    }else if(((month == 1 && day >= 8 && day < 25) || (month == 1 && day < 25)) && (document.getElementById('image').src !== 'anjiMito.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Anji Mito!'
        document.querySelector('#discription').innerText = 'Anji is a fighter who relys on risky reads of his opponents to predict and parry their attacks with his fans and punish.'
        document.getElementById("image").src = 'anjiMito.jpg'
    
    }else if(((month == 1 && day >= 25) || (month == 2 && day < 11)) && (document.getElementById('image').src !== 'happyChaos.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Happy Chaos!'
        document.querySelector('#discription').innerText = 'Happy Chaos is tricky long range gunslinger who curses his opponents to make it easier for him to shoot.'
        document.getElementById("image").src = 'happyChaos.jpg'
    
    }else if((month == 2 && day >= 11 && day < 27) || (month == 2 && day <= 27) && (document.getElementById('image').src !== 'zato-1.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Zato-1'
        document.querySelector('#discription').innerText = 'Zato-1 utilizes the help of his familiar eddy to mix-up and devestate his opponents!'
        document.getElementById("image").src = 'zato-1.jpg'
    
    }else if((month == 2 && day >= 28) || (month == 3 && day <= 13) && (document.getElementById('image').src !== 'chippZanuff.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Chipp Zanuff!'
        document.querySelector('#discription').innerText = 'Chipp Zanuff is a hyper fast ninja who uses his agility to mix-up his opponents with an onslaught of attacks!'
        document.getElementById("image").src = 'chippZanuff.jpg'
    
    }else if((month == 3 && day >= 14 && day < 31) || (month == 3 && day <= 30) && (document.getElementById('image').src !== 'baiken.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Baiken'
        document.querySelector('#discription').innerText = 'Baiken is an agressive mid range samurai who have access to many close range mix-ups and a parry'
        document.getElementById("image").src = 'baiken.jpg'
    
    }else if((month == 3 && day >= 31) || (month == 4 && day <= 16) && (document.getElementById('image').src !== 'Nagoriyuki.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Nagoriyuki!'
        document.querySelector('#discription').innerText = 'Nagoriyuki is a powerhouse that can link extremely fast and oppressive special moves while managing his Rage'
        document.getElementById("image").src = 'Nagoriyuki.jpg'
    
    }else if((month == 4 && day >= 17) || (month == 5 && day <= 2)&& (document.getElementById('image').src !== 'may.jpg')){
        document.querySelector('#character').innerText = 'You\'re like May'
        document.querySelector('#discription').innerText = 'May is simple, fast and powerful. With the help of her cute friends from the sea she can really cause some damage!'
        document.getElementById("image").src = 'may.jpg'
    
    }else if((month == 5 && day >= 3 && day <= 19) || (month == 5 && day <= 19) && (document.getElementById('image').src !== 'testament.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Testament!'
        document.querySelector('#discription').innerText = 'Testament is an elagant grim reaper and with the help of their succubi familiars can mix up opponents from mid-long range!'
        document.getElementById("image").src = 'testament.jpg'
    
    }else if((month == 5 && day >= 20) || (month == 6 && day <= 5) && (document.getElementById('image').src !== 'jack-oValentine.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Jack-O Valentine!'
        document.querySelector('#discription').innerText = 'Jack-O is a close-mid range fighter who can sommon her minion friends to help her in battle!'
        document.getElementById("image").src = 'jack-oValentine.jpg'
    
    }else if((month == 6 && day >= 6 && day <= 22) || (month == 6 && day <= 22) && (document.getElementById('image').src !== 'solBadGuy.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Sol BadGuy!'
        document.querySelector('#discription').innerText = 'Sol BadGuy is a powerful rushdown character who likes to get up close and personal!'
        document.getElementById("image").src = 'solBadGuy.jpg'
    
    }else if((month == 6 && day >= 23) || (month == 7 && day <= 8) && (document.getElementById('image').src !== 'milliaRage.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Millia Rage!'
        document.querySelector('#discription').innerText = 'Millia rage is a quick mix-up heavy fighter who  uses her hair to take out her enemies!'
        document.getElementById("image").src = 'milliaRage.jpg'
    
    }else if((month == 7 && day >= 9 && day <= 25) || (month == 7 && day <= 25) && (document.getElementById('image').src !== 'ramlethalValentine.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Ramlethal Valentine!'
        document.querySelector('#discription').innerText = 'Ramlethal is a strong mid-long ranger fighter who uses her sword-lazers to keep her foes under pressure!'
        document.getElementById("image").src = 'ramlethalValentine.jpg'
    
    }else if((month == 7 && day >= 26 ) || (month == 8 && day <= 11) && (document.getElementById('image').src !== 'leoWhitefang.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Leo Whitefang!'
        document.querySelector('#discription').innerText = 'Leo is a quick mix-up heavy character who uses his many tools to take charge!'
        document.getElementById("image").src = 'leoWhitefang.jpg'
    
    }else if((month == 8 && day >= 12 && day <= 28 ) || (month == 8 && day <= 28) && (document.getElementById('image').src !== 'faust.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Faust'
        document.querySelector('#discription').innerText = 'Faust is a fun item based character that randomly throws items from bannna peels to meteors!'
        document.getElementById("image").src = 'faust.jpg'
    
    }else if((month == 8 && day >= 29  ) || (month == 9 && day <= 14) && (document.getElementById('image').src !== 'goldlewisDickinson.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Goldlewis Dickinson!'
        document.querySelector('#discription').innerText = 'Goldlewis is a tanky rushdown character who uses his coffin to completly decimate and lock down his opponents!'
        document.getElementById("image").src = 'goldlewisDickinson.jpg'
    
    }else if((month == 9 && day >= 15 ) || (month == 9 && day <= 31) && (document.getElementById('image').src !== 'potemkin.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Potemkin!'
        document.querySelector('#discription').innerText = 'Potemkin is a heavy grappler who uses his grab mixups to devistate his foes.'
        document.getElementById("image").src = 'potemkin.jpg'
    
    }else if((month == 10 && day >= 1  && day <= 17) || (month == 10 && day <= 17 ) && (document.getElementById('image').src !== 'bridget.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Bridget!'
        document.querySelector('#discription').innerText = 'Bridget is a fast rushdown character that can change her air momentem with the help of her Yo-Yo\'s!'
        document.getElementById("image").src = 'bridget.jpg'
    
    }else if((month == 10 && day >= 18 ) || (month == 11 && day <= 3 ) && (document.getElementById('image').src !== 'giovanna.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Giovanna!'
        document.querySelector('#discription').innerText = 'Giovanna is a fast character who gains power from her wolf familiar and use has an onslaught of kicks to pressure her foes!'
        document.getElementById("image").src = 'giovanna.jpg'
    
    }else if((month == 11 && day >= 4 && day <= 20 ) || (month == 11 && day <= 20) && (document.getElementById('image').src !== 'kyKiske.jpg')){
        document.querySelector('#character').innerText = 'You\'re like Ky Kiske!'
        document.querySelector('#discription').innerText = 'King Ky Kiske is a very well balanced mid ranged fighter who uses his sword and electricity to keep his foes at bay!'
        document.getElementById("image").src = 'kyKiske.jpg'

    }else if(((month == 11 && day >= 21 && day <= 21 ) || (month == 12 && day <= 21)) && (document.getElementById('image').src !== 'i-no.jpg')){
        document.querySelector('#character').innerText = 'You\'re like I-No!'
        document.querySelector('#discription').innerText = 'In-o is a powerful mage who uses with her guitar and can mix-up opponent from various angles with her unquie flying movements!'
        document.getElementById("image").src = 'i-no.jpg'

    }
}