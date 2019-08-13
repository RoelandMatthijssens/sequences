function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

var n = 1;
var sequence = [1, 1];

function getNthElement(n, sequence){
    let previous = sequence[n-1];
    let GCD = gcd(previous, n);
    let next;
    if(GCD > 1){
        next = previous / GCD;
    } else {
        next = previous + n + 1;
    }
    return next
}

function calculate_sequence(n){
    let sequence = [1, 1]
    for(var i=2; i < n; i++){
        sequence[i] = getNthElement(i, sequence);
    }
    return sequence
}

function range(n){
    return [...Array(n).keys()]
}

function plot(sequence, element){
    let trace = {
        x: range(sequence.length),
        y: sequence,
        mode: 'markers',
        type: 'scatter',
        marker: { size: 4 }
      };
    let layout = {}
    Plotly.newPlot(element, [trace], layout);
}

plot(calculate_sequence(1000), 'plot');