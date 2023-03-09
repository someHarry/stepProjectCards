export function hide(element){
    if(!element.classList.contains("hidden")){
        element.classList.add("hidden");
    }
}

export function show(element){
    if(element.classList.contains("hidden")){
        element.classList.remove("hidden");
    }
}