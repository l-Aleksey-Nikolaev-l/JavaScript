
const myArray = ["asd", "ery", "mio", 23, 65, {pop:3}, 45, "dv", "cv"];

for (let i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] === "number") {
        console.log(myArray[i]);
    }
}


//////////////////////////////////////////////
//
// const blogPost = [
//     {
//         title: "What is JavaScript?",
//         author: "Alexey Nikolaev",
//         publishData: "Dec 20, 2020",
//         content: "some post content here"
//     },
//     {
//         title: "How do arrays work?",
//         author: "Alexey Nikolaev",
//         publishData: "Jan 1, 2021",
//         content: "some post content here"
//     },
//     {
//         title: "How long does it take to learn coding?",
//         author: "Alexey Nikolaev",
//         publishData: "Jan 20, 2021",
//         content: "some post content here"
//     },
// ];
//
// for(let i = 0; i < blogPost.length; i++) {
//     const postTitle = blogPost[i].title;
//     const postAuthor = blogPost[i].author;
//     const postDate = blogPost[i].publishData;
//     const postContent = blogPost[i].content;
//
//     console.log(postTitle);
//     console.log(postAuthor);
//     console.log(postDate);
//     console.log(postContent);
// }



// node 6_Loops.js // FOR RUN