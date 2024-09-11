function fonction1(N) {
    let somme = 0;
    for (let i = 1; i < N; i++) { 
      somme += i;
    }
    return somme;
  }
  
  const N = 10;
console.log(fonction1(N));
