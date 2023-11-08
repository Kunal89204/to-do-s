// Creating Variables
let btn = document.querySelector(".button");
let task_box = document.querySelector(".add-task-box");

btn.addEventListener("click", () => {
    task_box.style.scale = "1";

    // scale back to 0 when clicked on cancel
    let cancel = document.querySelector(".fa-xmark")
    cancel.addEventListener("click", () => {
        task_box.style.scale = "0";
    })

    let input = document.getElementById("task");
    let task_add = document.getElementById("task-add")

    // adding tasks
    task_add.addEventListener("click", () => {
        if (input.value.trim() !== "") {
            let lists = document.querySelector(".lists");

            let div = document.createElement("div");
            div.classList.add("list");
            let list = document.createElement("li");
            list.textContent = input.value;
            let icon = document.createElement("i");
            icon.classList.add("fa-regular");
            icon.classList.add("fa-circle");
            icon.classList.add("i");

            div.appendChild(list);
            div.appendChild(icon);

            lists.appendChild(div);
            task_box.style.scale = "0";

            // Add the click event listener for the new task
            icon.addEventListener("click", () => {
                icon.classList.toggle("fa-solid");
                icon.classList.toggle("fa-check");
                const li = icon.parentElement;
                if (icon.classList.contains("fa-check")) {
                    list.style.textDecoration = "line-through";
                } else {
                    list.style.textDecoration = "none";
                }
            });

            // Clear the input field
            input.value = "";
        } else {
            // alert("Task can't be empty");
        }
    });
});
