// scriptp.js - JavaScript for  Profile and Login

        const loginContainer = document.getElementById('login-container');
        const signupContainer = document.getElementById('signup-container');

        function showLoginForm() {
            if (loginContainer && signupContainer) {
                loginContainer.style.display = 'block';
                signupContainer.style.display = 'none';
            }
        }

        function showSignupForm() {
            if (loginContainer && signupContainer) {
                loginContainer.style.display = 'none';
                signupContainer.style.display = 'block';
            }
        } 







// Array to store children names.
let children = []; 

    document.getElementById('user-name').value = userData.name;
    document.getElementById('user-email').value = userData.email;

    // display the list of children 
    renderChildrenList();
    

//Function to update Personal Information 
function updatePersonalInfo() {
    const newName = document.getElementById('user-name').value;
    
    if (newName.trim() === "") {
        alert("Name cannot be empty!");
        return;
    }

    alert(`Personal information updated successfully! New Name: ${newName}`);
}


// Add Children Page 

function goToAddChildrenPage() {
    alert("Redirecting to the Add Child Registration Page...");
}

// delete a child
function deleteChild(index) {
    const deletedName = children[index];
    
    children.splice(index, 1);
    
    renderChildrenList();
    
    alert(`Child ${deletedName} has been deleted.`);
}
/** This function is crucial for updating the UI after loading, adding, or deleting a child.*/
function renderChildrenList() {
    // 1. Get the list container element from the HTML
    const listElement = document.getElementById('children-list');
    
    // 2. Clear the existing content to prevent duplicates when re-rendering
    listElement.innerHTML = ''; 

    // 3. Check if there are any children in the array
    if (children.length === 0) {
        // If empty, display a placeholder message
        const messageItem = document.createElement('li');
        messageItem.textContent = 'No children added yet.';
        listElement.appendChild(messageItem);
    } else {
        // Loop through the children array (using forEach, similar to loop examples)
        children.forEach((childName, index) => {
            const listItem = document.createElement('li');
            
            // Populate the list item with the child's name and a Delete button.
            // The onclick handler is a simple way to call deleteChild() with the correct index.
            listItem.innerHTML = `
                ${childName} 
                <button class="delete-btn" onclick="deleteChild(${index})">Delete</button>
            `;
            // Append the new list item to the main list
            listElement.appendChild(listItem);
        });
    }
}

// log out the user
function logoutUser() {
    const confirmed = confirm("Are you sure you want to log out?");
    if (confirmed) {
        alert("You have been logged out successfully. Redirecting...");
        window.location.replace("login.html");
    }
}