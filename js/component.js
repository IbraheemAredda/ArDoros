/**
 * IMPORTANT WARNING:
 * Requires JQuery 
 * */ 

function createListViewItem (imagePath, title, grade, subject, type, semester)
{
    var item_container = $("<div class='col-md-4 p-3'></div>");
    var item = $("<div class='list-view-item border shadow'></div>");
    var item_image = $("<img src='" + imagePath + "' />");
    var item_title = $("<h4 class='text-first font-weight-bold px-3 pt-3 pb-0'>" + title + "</h4>");
    var item_tags = $("<div class='card-tags px-3 pb-3'></div>");

    item_tags.append ($("<span class='text-second'> " + subject + " </span>"));
    item_tags.append ($("<span class='text-second-dark'> " + grade + " </span>"));
    item_tags.append ($("<span class='text-second'> " + semester + " </span>"));
    item_tags.append ($("<span class='text-second-dark'> " + type + " </span>"));

    item.append (item_image);
    item.append (item_title);
    item.append (item_tags);

    item_container.append (item);

    return item_container;
}