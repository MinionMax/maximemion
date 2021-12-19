export async function getWords(){
    const res = await fetch("https://random-word-api.herokuapp.com/word?number=10");
    return res.json();
}