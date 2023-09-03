export default async function getPostData(){
    const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    return result.json();
}