exports.damage = function (spellString) {
    var array = spellString.split("fe");
    if (array.length != 2) {
        console.log("there is no 'fe' or 'fe' is more than once")
        return 0;
    }
    else {
        var newSpellingText = array[1];
        if (newSpellingText.indexOf("ai") == -1) {
            console.log("text doesn't ends with 'ai'")
            return 0;
        }
        var suma = -1;
        while (newSpellingText.indexOf('ai') >= 0) {
            var splitIndex = newSpellingText.lastIndexOf('ai');
            newSpellingText2 = newSpellingText.substr(0, splitIndex);
            var temp = count(newSpellingText2);
            if (temp > suma) {
                suma = temp;
            }
            newSpellingText = newSpellingText2;
        }
        return suma;
    }
}
function count(text) {
    var withoutDai = text.split('dai');
    var suma = 3;
    for (var i = 0; i < withoutDai.length; i++) {
        if (i != 0) {
            suma += 5;
        }
        var withAiNe = withoutDai[i].split('aine');
        for (var h = 0; h < withAiNe.length; h++) {
            if (h != 0) {
                suma += 4;
            }
            var withoutAin = withAiNe[h].split('ain');
            for (var j = 0; j < withoutAin.length; j++) {
                if (j != 0) {
                    suma += 3;
                }
                var withoutNe = withoutAin[j].split('ne');
                for (var z = 0; z < withoutNe.length; z++) {
                    if (z != 0) {
                        suma += 2;
                    }
                    withoutJee = withoutNe[z].split('jee');
                    for (var b = 0; b < withoutJee.length; b++) {
                        if (b != 0) {
                            suma += 3;
                        }
                        withoutJe = withoutJee[b].split('je');
                        for (var n = 0; n < withoutJe.length; n++) {
                            if (n != 0) {
                                suma += 2;
                            }
                            withoutAi = withoutJe[n].split('ai');
                            for (var m = 0; m < withoutAi.length; m++) {
                                if (m != 0) {
                                    suma += 2;
                                }
                                var splitLetter = withoutAi[m].split('');
                                for (var s = 0; s < splitLetter.length; s++) {

                                    suma -= 1;

                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return suma;
}