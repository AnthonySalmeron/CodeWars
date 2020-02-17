var backspaceCompare = function(S, T) {
    for(let i=0;i<S.length;i++){
        if(S[i]=="#"){
            S=  (i ? S.slice(0,i-1) : '') + S.slice(i+1)
            i-=2
        }
    }
    for(let i=0;i<T.length;i++){
        if(T[i]=="#"){
            T= (i ? T.slice(0,i-1) : '') + T.slice(i+1)
            i-=2
        }
    }
    return S===T
};
