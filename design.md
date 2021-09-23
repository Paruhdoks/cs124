# Design 

### Design Decisions
    We decided to choose a soothing dark mode theme in order to reduce eye strain on users (and because we liked it). We decided to restrict our color palette to only four colors in order to remain consistent: grey, slightly darker grey, mint green, and white. 
    
    Instead of words, we decided to use icons to represent each function in order to reduce visual clutter (and avoid arguments about whether "incomplete" or "uncompleted" is a better word to use). We chose our icons based on representative images for each function: A trash can for delete, a pencil for edit, a plus sign for add, etc. Some of the other buttons were a little more complicated: for "show uncompleted," we went with an icon of an eye and an unchecked box, and for "delete completed," we created an icon of a trash can with a checked box. Additionally, the "toggled" version of "show uncompleted" changes to an icon of an eye with two boxes - one checked and one unchecked - to represent that pressing it again will show all tasks, completed and uncompleted. 

    Consistent with many other mobile-based applications, we placed our  three main functions (delete copmleted, new task, and show uncompleted) in a menu bar across the bottom of the screen. Individual tasks appear above this menu, with their individual options (check, delete, and edit) located beside them. Each task's options are thus associated with a single task to avoid confusion with the overall main functions.

    When the list is empty, we chose to put explanatory text on the screen in the task area, prompting users to use the "plus" icon to add a task to the list. We did this to reduce user confusion surrounding the concerningly empty screen.


### Alternative Design Ideas
    For the "show uncompleted" button, we briefly considered an alternate icon depicting a checklist with the incomplete items at the top, and complete items at the bottom; however, upon further analysis, we realized that this icon was not only a poor representation of the function of the button, but it was also a little vague, and the sizing would have been fairly small and difficult to see. 

    For the toggled version of the aforementioned button, we considered also using an icon of the eye and checkbox with a slash through it; however, we thought that this would probably be read by users as "hide uncompleted," where its real function would be more akin to "show all" (both uncompleted and completed). We instead made a design that shows the same eye icon, but with both a checked and unchecked box, to better represent that pressing it will make both uncompleted and completed tasks visible.

    Initially, our design had the edit and delete options swapped on the task options. We decided instead that edit should be on the left, closer to the text that you're editing, and delete should be further to the side of the screen, so you're less likely to accidentally click it. 

### Final Design
    
    ![An empty list.](/screenshots/empty-list.png)
    ![Adding the task "Buy John Grisham Book" to a new list.](/screenshots/john-grisham-adding.png)
    ![The task "Buy John Grisham Book" has been added to a new list.](/screenshots/john-grisham-added.png)

    ![Adding the task "Eat Lunch" to an existing list.](/screenshots/eat-lunch-adding.png)
    ![The task "Eat Lunch" has been added to an existing list.](/screenshots/eat-lunch-added.png)

    ![Marking the task "Call Mom" completed.](/screenshots/eat-lunch-added.png)
    ![The task "Call Mom" has been marked completed.](/screenshots/call-mom-checked.png)

    ![Renaming the task "Text John".](/screenshots/text-john-renaming.png)
    ![The task "Text John" has been renamed to "Text John about bank statements".](/screenshots/text-john-renamed.png)

    ![Before selecting "view all uncompleted".](/screenshots/text-john-renamed.png)
    ![After selecting "view all uncompleted".](/screenshots/view-all-incomplete.png)

    ![Before selecting "delete all completed".](/screenshots/text-john-renamed.png)
    ![After selecting "delete all uncompleted".](/screenshots/delete-all-completed.png)


### Challenges
    One challenge was designing checkboxes that would fit with the overall aesthetic of the rest of our UI. The default checkboxes with HTML don't fit our "dark mode" theme and are inconsistent across browsers. Thus, An adapted some available code for custom checkboxes in order to improve the overall quality of our design.


### The CROWN JEWEL of our App Design
    The icons are our favorite part of the design. We think that the two versions of the eye icon really get the idea of "show uncompleted"/"show all" across without having to use too many words or a messy-looking, complicated icon.

