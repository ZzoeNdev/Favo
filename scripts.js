
// Navegar pelo header
const topicsHeader = document.querySelectorAll("#topicHeader");
var topicsLength = topicsHeader.length;

topicsHeader.forEach((topic, i) => {

    topic.addEventListener("click", () => {
        if (topic.classList.contains("selectedTopic")) {
            topic.classList.remove("selectedTopic");
        } else {
            topicsHeader.forEach((topic, i) => {
                topic.classList.remove("selectedTopic");
            })
            topic.classList.add("selectedTopic");
        }
    })
});