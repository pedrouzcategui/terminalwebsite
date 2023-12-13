const ASCII_ART = "";
let terminal = document.querySelector("#terminal");
let terminal_text = document.querySelector("#terminal_text");

const commands = [
  {
    name: "help",
    desc: "I believe you know that this does...",
  },
  {
    name: "whoami",
    desc: "Brief description of myself",
  },
  {
    name: "github",
    desc: "Opens my github",
  },
  {
    name: "clear",
    desc: "Clean the workspace",
  },
  {
    name: "projects",
    desc: "Links to my projects",
  },
  {
    name: "nudes",
    desc: "See my nudes",
  },
];

const projects = [
  {
    name: "Agency Dashboard",
    desc: "ReTool + SQL",
  },
  {
    name: "Vuela Barato",
    desc: "Best prices on traveling, Next.js + Prisma",
  },
  {
    name: "Compiler",
    desc: "Made my own compiler because why not",
  },
];

function cleanTerminal() {
  terminal_text.innerHTML = "";
}
function setInputToBlank() {
  terminal.value = "";
}
function handleCommand(cmd) {
  let result = `the term '${cmd}' is not recognized.`;
  if (commands.find((x) => x.name == cmd)) {
    switch (cmd) {
      case "help":
        result = "<ul>";
        commands.map((_cmd) => {
          result += `<li><b>${_cmd.name}</b> - ${_cmd.desc}</li>`;
        });
        result += "</ul>";
        break;
      case "whoami":
        let date = new Date();
        result = `I am Pedro Uzcategui, I'm currently ${
          date.getFullYear() - 2001
        } years old, and my biggest passion is to learn. I did start to code at 17 years old, and I never stopped since. I like experiences, I like to create things that truly help humanity. To create really amazing things, you need to learn math. That's the reason I started this page, as a blog for others to learn the underlying principles of math and not just a formula resolution.`;
        break;
      case "github":
        open("https://github.com/pedrouzcategui");
        result =
          "You can visit my github here: https://github.com/pedrouzcategui :)";
        break;
      case "projects":
        result = "<ul>";
        projects.map((project) => {
          result += `<li><b>${project.name}</b> - ${project.desc}</li>`;
        });
        result += "</ul>";
        break;
      case "nudes":
        result = "Well... you asked for it.";
        setTimeout(() => {
          open("https://www.youtube.com/watch?v=AwwYBkuBftw");
        }, 2000);
        break;
      case "clear":
        result = "";
        cleanTerminal();
        break;
    }
  }
  return result;
}

function appendResultToTerminalContainer(cmd, value) {
  if (cmd == "help") {
    let command = document.createElement("p");
    command.style.color = "lightgreen";
    command.innerHTML = `$ ${cmd}`;
    terminal_text.appendChild(command);
    terminal_text.innerHTML += value;
  } else if (cmd != "clear") {
    let command = document.createElement("p");
    command.style.color = "lightgreen";
    command.innerHTML = `$ ${cmd}`;
    let result = document.createElement("p");
    result.innerHTML = value;
    terminal_text.appendChild(command);
    terminal_text.appendChild(result);
  }
}

function handleEnter(e) {
  let { value } = e.target;
  value = value.toLowerCase();
  if (e.key === "Enter") {
    let result = handleCommand(value);
    appendResultToTerminalContainer(value, result);
    setInputToBlank();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  terminal.addEventListener("keypress", handleEnter);

  console.log(
    "%c YOU FOUND A TREASURE :0",
    "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
  );
});
