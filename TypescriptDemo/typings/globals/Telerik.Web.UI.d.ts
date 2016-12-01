declare module Telerik.Web {
    export interface Box {
        top: number;
        right: number;
        bottom: number;
        left: number;
        horizontal: number;
        vertical: number;
    }

    export interface Bounds {
        height: number;
        width: number;
        x: number;
        y: number;
    }

    export interface Point {
        x: number;
        y: number;
    }

    export interface Size {
        width: number;
        height: number;
    }
}

declare module Telerik.Web.UI.ClientDataSource {
    class Aggregate   {
        /**
none
@method
@returns 
*/
get_aggregate(): void;
        /**
Telerik.Web.UI.ClientDataSource.AggregateFunction
@method
@returns 
*/
set_aggregate(): void;
    }


    class AggregateCollection  extends Telerik.Web.UI.ClientDataSource.CollectionBase {
        /**

@method
@returns 
*/
add(): void;
    }


    class CollectionBase   {
        /**

@method
@returns 
*/
toList(): void;
        /**

@method
@returns 
*/
indexOf(): void;
        /**

@method
@returns 
*/
forEach(): void;
        /**

@method
@returns 
*/
remove(): void;
        /**

@method
@returns 
*/
insert(): void;
        /**

@method
@returns 
*/
removeAt(): void;
        /**

@method
@returns 
*/
add(): void;
        /**

@method
@returns 
*/
clear(): void;
        /**

@method
@returns 
*/
get_count(): void;
        /**

@method
@returns 
*/
getItem(): void;
    }


    class FilterEntry   {
        /**
none
@method
@returns 
*/
get_operator(): void;
        /**
Telerik.Web.UI.ClientDataSource.FilterOperator
@method
@returns 
*/
set_operator(): void;
        /**
Telerik.Web.UI.ClientDataSource.FilterOperator
@method
@returns 
*/
get_value(): void;
        /**
string
@method
@returns 
*/
set_value(): void;
    }


    class FilterExpression   {
    }


    class FilterExpressionCollection  extends Telerik.Web.UI.ClientDataSource.CollectionBase {
        /**

@method
@returns 
*/
add(): void;
    }


    class GroupExpression   {
        /**
none
@method
@returns 
*/
get_aggregates(): void;
        /**
none
@method
@returns 
*/
get_sortOrder(): void;
        /**
Telerik.Web.UI.ClientDataSource.SortOrder
@method
@returns 
*/
set_sortOrder(): void;
    }


    class GroupExpressionCollection  extends Telerik.Web.UI.ClientDataSource.CollectionBase {
        /**

@method
@returns 
*/
add(): void;
    }


    class SortExpression   {
        /**
none
@method
@returns 
*/
get_sortOrder(): void;
        /**
Telerik.Web.UI.ClientDataSource.SortOrder
@method
@returns 
*/
set_sortOrder(): void;
    }


    class SortExpressionCollection  extends Telerik.Web.UI.ClientDataSource.CollectionBase {
        /**

@method
@returns 
*/
add(): void;
    }


}
declare module Telerik.Web.UI {
    class AjaxLoadingPanelEventArgs  extends Sys.EventArgs {
        /**
Returns the boolean representation of the LoadingPanel default behvaiour
@method
@returns 
*/
get_cancelNativeDisplay(): boolean;
        /**
Gets the DOM element of the RadAjaxLoadingPanel.
@method
@returns 
*/
get_loadingElement(): any;
        /**
Gets the DOM element of the ajax updated control, over which the loading panel is about to be displayed.
@method
@returns 
*/
get_updatedElement(): boolean;
        /**
lets you cancel the default behavior of the RadAjaxLoadingPanel.
@method
@param value - 
@returns 
*/
set_cancelNativeDisplay(value: boolean): void;
    }


    class AnimationSettings   {
        /**

@method
@returns 
*/
get_duration(): void;
        /**

@method
@returns 
*/
get_type(): void;
        /**

@method
@returns 
*/
set_duration(): void;
        /**

@method
@returns 
*/
set_type(): void;
    }


    class AttributeCollection   {
        /**

@method
@returns 
*/
getAttribute(): void;
        /**

@method
@returns 
*/
get_count(): void;
        /**

@method
@returns 
*/
removeAttribute(): void;
        /**

@method
@returns 
*/
setAttribute(): void;
    }


    class AutoCompleteBoxEntry   {
        /**
Returns the value of the specified entry.
@method
@returns string
*/
get_value(): string;
        /**
Returns a reference to the HTML element representing the specified entry.
@method
@returns DOM object
*/
get_token(): string;
        /**
Gets the AutoCompleteBoxEntry's index inside the AutoCompleteBoxEntryCollection.
@method
@returns The index of the AutoCompleteBoxEntry.
*/
get_index(): number;
        /**
Returns the parent object of the specified entry.
@method
@returns RadAutoCompleteBox
*/
get_parent(): Telerik.Web.UI.RadAutoCompleteBox;
        /**
Returns the text of the specified entry.
@method
@returns string
*/
get_text(): string;
    }


    class AutoCompleteBoxEntryCollection   {
        /**
Gets the index of an Entry.
@method
@param item - The Entry to get the index of.
@returns int
*/
indexOf(item: Telerik.Web.UI.AutoCompleteBoxEntry): number;
        /**
Removes an entry from the Entries collection
@method
@param item - The Entry to remove.
@returns 
*/
remove(item: Telerik.Web.UI.AutoCompleteBoxEntry): void;
        /**
Inserts an entry into the Entries collection at the position specified by the first (index) parameter.
@method
@param index - The index to insert at.
@param item - The Entry to insert.
@returns 
*/
insert(index: number, item: Telerik.Web.UI.AutoCompleteBoxEntry): void;
        /**
Inserts a AutoCompleteBoxEntry into the AutoCompleteBoxEntryCollection.
@method
@param entry - The AutoCompleteBoxEntry to insert
@returns 
*/
add(entry: Telerik.Web.UI.AutoCompleteBoxEntry): void;
        /**
Clears the Entries collection of RadAutoCompleteBox.
@method
@returns 
*/
clear(): void;
        /**
Returns the number of Entries in the collection.
@method
@returns The number of the Entries.
*/
get_count(): number;
        /**
Gets the Entry from the Entries collection residing at the index specified by the parameter.
@method
@param index - The index of the Entry that should be returned.
@returns AutoCompleteBoxEntry.
*/
getEntry(index: number): Telerik.Web.UI.AutoCompleteBoxEntry;
    }


    class CalendarClickEventArgs  extends Sys.CancelEventArgs {
        /**

@method
@returns 
*/
get_domElement(): void;
        /**

@method
@returns 
*/
get_index(): void;
    }


    class CalendarDateClickEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the DOM event object for the mouse click event.
@method
@returns 
*/
get_domEvent(): Sys.UI.DomEvent;
        /**
Returns the client-side RenderDay object that represents the day that was just clicked.
@method
@returns 
*/
get_renderDay(): Telerik.Web.UI.Calendar.RenderDay;
    }


    class CalendarDateSelectedEventArgs  extends Sys.EventArgs {
        /**
Returns the client-side RenderDay object for the day that was just selected or unselected.
@method
@returns 
*/
get_renderDay(): Telerik.Web.UI.Calendar.RenderDay;
    }


    class CalendarDateSelectingEventArgs  extends Sys.CancelEventArgs {
        /**
Returns true if the day is about to be selected, false  if it is about to be unselected.
@method
@returns 
*/
get_isSelecting(): boolean;
        /**
Returns the client-side RenderDay object that represents the day being selected or unselected.
@method
@returns 
*/
get_renderDay(): Telerik.Web.UI.Calendar.RenderDay;
    }


    class CalendarDayRenderEventArgs  extends Sys.EventArgs {
        /**
Returns object for the cell being rendered.
@method
@returns 
*/
get_cell(): any;
        /**
Returns the triplet for the date the cell represents.
@method
@returns 
*/
get_date(): any;
        /**
Returns the client-side RenderDay object that represents the day being rendered. This value is null if the cell represents a value outside the range specified by RangeMinDate and RangeMaxDate.
@method
@returns 
*/
get_renderDay(): Telerik.Web.UI.Calendar.RenderDay;
    }


    class CalendarViewChangedEventArgs  extends Sys.EventArgs {
        /**
Returns the number of views by which the calendar has changed.
@method
@returns 
*/
get_step(): number;
    }


    class CalendarViewChangingEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the number of views by which the calendar is about to change.
@method
@returns 
*/
get_step(): number;
    }


    class ClientDataSourceSchema   {
    }


    class Collection   {
        /**
Add the spe item to the collection.
@method
@param item - 
@returns 
*/
add(item: any): void;
        /**
Clears the collection.
@method
@returns 
*/
clear(): void;
        /**
Iterates through the array.
@method
@param lambda - 
@returns 
*/
forEach(lambda: any): void;
        /**
Returns the item at the specified index.
@method
@param index - 
@returns 
*/
getItem(index: number): any;
        /**
Returns the number of items in the colletion.
@method
@returns 
*/
get_count(): number;
        /**
Returns the index at which the specified item is located.
@method
@param item - 
@returns 
*/
indexOf(item: number): void;
        /**
Insert the item at the specified index.
@method
@param index - 
@param item - 
@returns 
*/
insert(index: number, item: any): void;
        /**
Removes the specified item from the collection.
@method
@param item - 
@returns 
*/
remove(item: any): void;
        /**
Removes the item at the specified index.
@method
@param index - 
@returns 
*/
removeAt(index: number): void;
        /**
Returns the array represenation of the specified collection.
@method
@returns 
*/
toList(): void;
    }


    class ControlItem   {
        /**
Searches the ControlItem for a client control with the specified id parameter.
@method
@param id - 
@returns 
*/
findControl(id: string): void;
        /**
Gets the arbitrary attributes collection
@method
@returns The arbitrary attributes collection
*/
get_attributes(): Telerik.Web.UI.AttributeCollection;
        /**
Gets he DOM element for the ControlItem
@method
@returns The DOM element for the ControlItem
*/
get_element(): HTMLElement;
        /**
Gets a value indicating whether the ControlItem is enabled or disabled
@method
@returns Value indicating whether the ControlItem is enabled or disabled
*/
get_enabled(): boolean;
        /**
Gets the ControlItem's index inside the ControlItemCollection
@method
@returns The index of the ControlItem
*/
get_index(): number;
        /**
Gets a value indicating whether the ControlItem is the first item in the ControlItemCollection
@method
@returns Value indicating whether the ControlItem is the first item in the ContorolCollection
*/
get_isFirst(): boolean;
        /**
Gets a value indicating whether the ControlItem is the last item in the ControlItemCollection
@method
@returns Value indicating whether the ControlItem is the last item in the ContorolCollection
*/
get_isLast(): boolean;
        /**
Gets the Level of the item in the ControlItemContainer structure.
@method
@returns The level of the ContolItem
*/
get_level(): number;
        /**
Gets an instance of the next sibling of a ControlItem
@method
@returns The next sibling
*/
get_nextSibling(): Telerik.Web.UI.ControlItem;
        /**
The ControlItem's parent
@method
@returns Gets the ControlItem
*/
get_parent(): any;
        /**
Gets an instance of the previous sibling of a ControlItem.
@method
@returns The previous sibling
*/
get_previousSibling(): Telerik.Web.UI.ControlItem;
        /**
Gets the ControlItem's text
@method
@returns The text of the ControlItem
*/
get_text(): string;
        /**
Gets the ControlItem's value
@method
@returns The value of the ControlItem
*/
get_value(): string;
        /**
Gets a value indicating whether the ControlItem is visible or not
@method
@returns Value indicating whether the ControlItem is visible or not
*/
get_visible(): boolean;
        /**
Sets the ControlItem's DOM element
@method
@param value - DOM element
@returns 
*/
set_element(value: HTMLElement): void;
        /**
Enables or disables the ControlItem
@method
@param value - Boolean value indicating whether the ControlItem is enabled or disabled
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the ControlItem's parent
@method
@param value - DOM element
@returns 
*/
set_parent(value: HTMLElement): void;
        /**
Sets the ControlItem's text
@method
@param text - The new ControlItem text
@returns 
*/
set_text(text: string): void;
        /**

@method
@param value - The new ControlItem text
@returns 
*/
set_value(value: string): void;
        /**
Sets the visibility of the COontrolItem
@method
@param value - Boolean value indicating whether the ControlItem is visible or not
@returns 
*/
set_visible(value: boolean): void;
        /**
The JSON representation of the ControlItem
@method
@returns Returns the JSON representation of the ControlItem
*/
toJsonString(): string;
    }


    class ControlItemCollection <TClass extends Telerik.Web.UI.ControlItem>  {
        /**
Adds ControlItem to the ControlItemCollection.
@method
@param item - The ControlItem to be added to the collection.
*/
add(item: TClass): void;
        /**
Clears the Items collection of ControlItemContainer.
@method
@returns 
*/
clear(): void;
        /**
Iterates through the Items collection.
@method
@param lambda - The function to execute on each iteration.
@returns 
*/
forEach(lambda: Function): void;
        /**
Gets the item from the Items collection residing at the index specified by the parameter.
@method
@param index - The index of the item that should be returned.
@returns Returns ControlItem.
*/
getItem(index: number): TClass;
        /**
Returns the number of items in the Items collection.
@method
@returns The number of the items.
*/
get_count(): number;
        /**
Gets the index of an item.
@method
@param item - The item to get the index of.
@returns int
*/
indexOf(item: TClass): number;
        /**
Inserts an item into the Items collection at the position;specified by the first (index) parameter.
@method
@param index - The index to insert at.
@param item - The item to insert.
@returns 
*/
insert(index: number, item: TClass): void;
        /**
Removes an item from the Items collection.
@method
@param item - The item to remove.
@returns 
*/
remove(item: TClass): void;
        /**
Removes the item at the specified index.
@method
@param index - The index to remove at.
@returns 
*/
removeAt(index: number): void;
        /**
Returns the collection represented as array.
@method
@returns 
*/
toArray(): TClass[];
    }


    class ControlItemContainer  extends Telerik.Web.UI.RadWebControl {
        /**
Commits the changes made to the ControlItemContainer that will be preserved over post-backs.
@method
@returns 
*/
commitChanges(): void;
        /**
Returns the collection of arbitrary attributes
@method
@returns The attribute collection
*/
get_attributes(): Telerik.Web.UI.AttributeCollection;
        /**
Boolean value indicating whether the ControlItemCotaniner is enabled or disabled
@method
@returns Returns boolean value indicating whether the ControlItemContainer is enabled or disabled
*/
get_enabled(): boolean;
        /**
Enables the ControlItemContainer
@method
@param value - A boolean value to enable
@returns 
*/
set_enabled(value: boolean): void;
        /**
Starts tracking changes made to the ControlItemContainer that will be preserved over post-backs.
@method
@returns 
*/
trackChanges(): void;
    }


    class DataPagerPageIndexChangingEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the new page index for the RadDataPager control when paging.
@method
@returns 
*/
get_newPageIndex(): number;
        /**
Returns the old page index for the RadDataPager control when paging.
@method
@returns 
*/
get_oldPageIndex(): number;
        /**
Sets the new page index for the RadDataPager control when paging.
@method
@param index - 
@returns 
*/
set_newPageIndex(index: number): void;
    }


    class DataPagerPageSizeChangingEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the new page size for the RadDataPager control when paging.
@method
@returns 
*/
get_newPageSize(): number;
        /**
Returns the old page size for the RadDataPager control when paging.
@method
@returns 
*/
get_oldPageSize(): number;
        /**
Sets the new page size for the RadDataPager control when paging.
@method
@param size - 
@returns 
*/
set_newPageSize(size: number): void;
    }


    class DataSourceSettings   {
    }


    class DateInputValueChangedEventArgs   {
        /**

@method
@returns 
*/
static Telerik(): void;
        /**
Returns the new value of the control as a Date object
@method
@returns 
*/
static get_newDate(): Date;
        /**
Returns the old value of the control as a Date object
@method
@returns 
*/
static get_oldDate(): Date;
    }


    class DatePickerPopupClosingEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the client object for the time view or calendar that is about to close.
@method
@returns 
*/
get_popupControl(): Telerik.Web.UI.RadCalendar;
    }


    class DatePickerPopupOpeningEventArgs  extends Sys.CancelEventArgs {
        /**
Lets you prevent the popup control from synchronizing its value to the value in the input area.
@method
@returns 
*/
get_cancelCalendarSynchronization(): boolean;
        /**
Returns the client object for the time view or calendar that is about to be displayed.
@method
@returns 
*/
get_popupControl(): Telerik.Web.UI.RadCalendar;
        /**
Lets you prevent the popup from appearing.
@method
@param value - 
@returns 
*/
set_cancelCalendarSynchronization(value: boolean): void;
    }


    class DockCloseCommand  extends Telerik.Web.UI.DockCommand {
        /**

@method
@param e - 
@returns 
*/
onCommand(e: Sys.UI.DomEvent): void;
    }


    class DockCommand  extends Sys.UI.Control {
        /**
Performs a postback if the dock has AutoPostBack enabled.
@method
@param parameter - The parameter passed to the server when postback is performed.
@returns 
*/
conditionalPostback(parameter: string): void;
        /**
Gets the bool value indicating whether the command will perform postback.
@method
@returns The bool value indicating whether the command will perform postback.
*/
get_autoPostBack(): boolean;
        /**

@method
@returns 
*/
get_clientTypeName(): string;
        /**
Gets the CSS class of the DockCommand.
@method
@returns The CSS class of the DockCommand.
*/
get_cssClass(): string;
        /**
Gets the name of the command.
@method
@returns The name of the command.
*/
get_name(): string;
        /**
Gets the parent Telerik.Web.UI.RadDock control.
@method
@returns The parent Telerik.Web.UI.RadDock control.
*/
get_radDock(): Telerik.Web.UI.RadDock;
        /**
Gets the text of the command.
@method
@returns The text of the command
*/
get_text(): string;
        /**
The Command item's main method. Override this method to implement custom logic.
@method
@param e - 
@returns 
*/
onCommand(e: Sys.UI.DomEvent): void;
        /**
Raises the OnClientCommand event.
@method
@param args - 
@returns 
*/
raise_command(args: Sys.CancelEventArgs): void;
        /**
Sets a bool value indicating whether the command will perform postback.
@method
@param value - The bool value indicating whether the command will perform postback.
@returns 
*/
set_autoPostBack(value: boolean): void;
        /**

@method
@param value - 
@returns 
*/
set_clientTypeName(value: string): void;
        /**
Sets a CSS class to the DockCommand.
@method
@param value - The CSS class of the DockCommand.
@returns 
*/
set_cssClass(value: string): void;
        /**
Sets a name to the command.
@method
@param value - The name of the command.
@returns 
*/
set_name(value: string): void;
        /**
Sets a parent Telerik.Web.UI.RadDock control.
@method
@param value - The parent Telerik.Web.UI.RadDock control.
@returns 
*/
set_radDock(value: Telerik.Web.UI.RadDock): void;
        /**
Sets a text to the command.
@method
@param value - The text of the command.
@returns 
*/
set_text(value: string): void;
        /**
Adds a handler to the OnClientCommand event. The OnClientCommand client-side event occurs when the user clicks on a command in the RadDock title bar.
*/
add_command(handler: Function): void;
        /**
Removes a handler from the OnClientCommand event. The OnClientCommand client-side event occurs when the user clicks on a command in the RadDock title bar.
*/
remove_command(handler: Function): void;
    }


    class DockExpandCollapseCommand  extends Telerik.Web.UI.DockToggleCommand {
        /**

@method
@param e - 
@returns 
*/
onCommand(e: Sys.UI.DomEvent): void;
    }


    class DockPinUnpinCommand  extends Telerik.Web.UI.DockToggleCommand {
        /**

@method
@param e - 
@returns 
*/
onCommand(e: Sys.UI.DomEvent): void;
    }


    class DockToggleCommand  extends Telerik.Web.UI.DockCommand {
        /**
Gets the CSS class that corresponds with the "Alternate" state of the ToggleCommand.
@method
@returns The Alternate CSS class.
*/
get_alternateCssClass(): string;
        /**
Gets the text corresponding to the "Alternate" state of the ToggleCommand.
@method
@returns The alternate text of the command.
*/
get_alternateText(): string;
        /**
Gets the state of the ToggleCommand. It can be Primary(1) or Alternate(2).
@method
@returns The state of the ToggleCommand.
*/
get_state(): number;
        /**
Sets a CSS class that corresponds to the "Alternate" state of the ToggleCommand.
@method
@param value - The Alternate CSS class.
@returns 
*/
set_alternateCssClass(value: string): void;
        /**
Sets a text corresponding to the "Alternate" state of the ToggleCommand.
@method
@param value - The text of the ToggleCommand corresponding to the
@returns 
*/
set_alternateText(value: string): void;
        /**
Sets a state to the ToggleCommand.
@method
@param value - Set 1
@returns 
*/
set_state(value: number): void;
        /**
Updates the state of the DockToggleCommand.
@method
@returns 
*/
updateState(): void;
    }


    class DropDownListItem  extends Telerik.Web.UI.ControlItem {
        /**
Returns the img element of the item
@method
@returns HTML element that holds the item
*/
get_imageElement(): HTMLElement;
        /**
Gets a value indicating whether the ControlItem is the first item in the ControlItemCollection
@method
@returns Value indicating whether the ControlItem is the first item in the ContorolCollection
*/
get_isFirst(): boolean;
        /**
Gets the RadDropDownList client-object
@method
@returns Returns the parent RadDropDownList
*/
get_dropDownList(): Telerik.Web.UI.RadDropDownList;
        /**
Gets the Text of the item
@method
@returns The value of the Text property
*/
get_text(): string;
        /**
Gets the value of the ImageUrl property
@method
@returns 
*/
get_imageUrl(): string;
        /**
Returns the span element of the item
@method
@returns HTML element that holds the item
*/
get_textElement(): HTMLElement;
        /**
Gets the arbitrary attributes collection
@method
@returns The arbitrary attributes collection
*/
get_attributes(): Telerik.Web.UI.AttributeCollection;
        /**
Selects the item (equal to set_selected(true))
@method
@returns 
*/
select(): void;
        /**
Evaluates the template against the DropDownListItem's data item and applies it.
@method
@returns 
*/
bindTemplate(): void;
        /**
Sets the item's dom element
@method
@param value - The HTML element of the item
@returns 
*/
set_element(value: HTMLElement): void;
        /**
Sets the DropDownListItem's text
@method
@param text - The new DropDownListItem text
@returns 
*/
set_text(text: string): void;
        /**
The DropDownListItem's parent
@method
@returns Gets the DropDownListItem
*/
get_parent(): HTMLElement;
        /**

@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Returns whether the item is selected
@method
@returns Value indicating whether the item is selected
*/
get_selected(): boolean;
        /**
Selects the item
@method
@param value - Bool value indicating whether the item is selected
@returns 
*/
set_selected(value: boolean): void;
        /**
Unselects the item (equal to set_selected(false))
@method
@returns 
*/
unselect(): void;
        /**
Gets th Value of the item
@method
@returns The value of the Value propert
*/
get_value(): string;
        /**
The JSON representation of the DropDownListItem
@method
@returns Returns the JSON representation of the DropDownListItem
*/
toJsonString(): string;
        /**
Gets an instance of the next sibling of a ControlItem
@method
@returns The next sibling
*/
get_nextSibling(): Telerik.Web.UI.ControlItem;
        /**
Sets the DropDownListItem's parent
@method
@param value - DOM element
@returns 
*/
set_parent(value: HTMLElement): void;
        /**
Gets an instance of the previous sibling of a ControlItem.
@method
@returns The previous sibling
*/
get_previousSibling(): Telerik.Web.UI.ControlItem;
        /**
Searches the DropDownListItem for a client control with the specified id parameter.
@method
@param id - The id of the control to search for
@returns 
*/
findControl(id: string): void;
        /**
Sets whether the item is visible
@method
@param value - Indicates whether the item is visible.
@returns 
*/
set_visible(value: boolean): void;
        /**
Sets the value of the DropDownListItem's ClientTemplate property.
@method
@param value - value
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Returns the value of the DropDownListItem's ClientTemplate property.
@method
@returns 
*/
get_clientTemplate(): void;
        /**
Gets a value indicating whether the DropDownListItem is visible or not
@method
@returns Value indicating whether the DropDownListItem is visible or not
*/
get_visible(): boolean;
        /**
Gets the DropDownListItem's index inside the DropDownListItemCollection
@method
@returns The index of the DropDownListItem
*/
get_index(): number;
        /**

@method
@param value - The new DropDownListItem text
@returns 
*/
set_value(value: string): void;
        /**
Sets the ImageUrl property of the item
@method
@param value - String value for the ImageUrl property
@returns 
*/
set_imageUrl(value: string): void;
        /**
Gets a value indicating whether the DropDownListItem is the last item in the ControlItemCollection
@method
@returns Value indicating whether the ControlItem is the last item in the ContorolCollection
*/
get_isLast(): boolean;
        /**
Removes the img element of the item
*/
remove_imageElement(handler: Function): void;
    }


    class DropDownListItemCollection  extends Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.DropDownListItem> {
        /**
Removes the item at the specified index.
@method
@param index - The index to remove at
@returns 
*/
removeAt(index: number): void;
        /**
Iterates through the Items collection
@method
@param lambda - The function to execute on each iteration
@returns 
*/
forEach(lambda: Function): void;
        /**
Gets the index of an item.
@method
@returns 
*/
indexOf(): any;
        /**
Clears the Items collection of RadDropDownList
@method
@returns 
*/
clear(): void;
        /**
Returns the number of items in the Items collection.
@method
@returns The number of the items
*/
get_count(): number;
        /**
Gets the item from the Items collection residing at the index specified by the parameter.
@method
@param index - 
@returns 
*/
getItem(index: any): any;
    }


    class DropDownTreeEntry   {
        /**
Returns the value of the selected entry
@method
@returns 
*/
get_value(): string;
    }


    class DropDownTreeEntryCollection   {
        /**

@method
@returns 
*/
clear(): void;
        /**

@method
@returns 
*/
get_count(): void;
        /**
The index of the entry passed as parameter.
@method
@param entry - The entry whose index will be searched.
@returns Returns the index of the entry passed as parameter.
*/
indexOf(entry: Telerik.Web.UI.DropDownTreeEntry): Telerik.Web.UI.DropDownTreeEntry;
        /**

@method
@returns 
*/
getEntry(): void;
    }


    class EditorButton  extends Sys.UI.Control {
        /**

@method
@returns 
*/
click(): void;
        /**

@method
@returns 
*/
getAnchorElement(): void;
        /**

@method
@returns 
*/
getSpanElement(): void;
        /**

@method
@returns 
*/
get_contentAreaMode(): void;
        /**

@method
@returns 
*/
get_enableAriaSupport(): void;
        /**

@method
@returns 
*/
get_enabled(): void;
        /**

@method
@returns 
*/
get_height(): void;
        /**

@method
@returns 
*/
get_text(): void;
        /**

@method
@returns 
*/
get_tooltipDecrease(): void;
        /**

@method
@returns 
*/
get_tooltipIncrease(): void;
        /**

@method
@returns 
*/
get_width(): void;
        /**

@method
@returns 
*/
isOn(): void;
        /**

@method
@returns 
*/
isTarget(): void;
        /**

@method
@returns 
*/
raiseEvent(): void;
        /**

@method
@returns 
*/
setFocus(): void;
        /**

@method
@returns 
*/
setOn(): void;
        /**

@method
@returns 
*/
setState(): void;
        /**

@method
@returns 
*/
set_contentAreaMode(): void;
        /**

@method
@returns 
*/
set_enableAriaSupport(): void;
        /**

@method
@returns 
*/
set_enabled(): void;
        /**

@method
@returns 
*/
set_height(): void;
        /**

@method
@returns 
*/
set_text(): void;
        /**

@method
@returns 
*/
set_tooltipDecrease(): void;
        /**

@method
@returns 
*/
set_tooltipIncrease(): void;
        /**

@method
@returns 
*/
set_width(): void;
        /**

*/
add_valueSelected(handler: Function): void;
        /**

*/
remove_valueSelected(handler: Function): void;
    }


    class EditorCommandEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the command name
@method
@returns 
*/
get_name(): string;
        /**
Returns the command name
@method
@returns 
*/
get_commandName(): string;
        /**
Returns the object instance of the tool fired the command
@method
@returns 
*/
get_tool(): any;
        /**
Returns the value fetched by the tool
@method
@returns 
*/
get_value(): string;
        /**
Sets the value for the command to execute with
@method
@param value - The command value with which the command to be executed
@returns 
*/
get_value(value: string): void;
    }


    class FileExplorerItem   {
        /**

@method
@returns 
*/
get_url(): void;
        /**
Returns a Boolean value that indicates whether the selected item is a folder or not
@method
@returns 
*/
isDirectory(): boolean;
        /**

@method
@returns 
*/
set_url(): void;
    }


    class GridCellSelection  extends Sys.Component {
        /**

@method
@param element - 
@returns 
*/
current(element: HTMLElement): void;
        /**
Deselects the specified cell.
@method
@param items - Array of cell dom elements.
@returns 
*/
deselect(items: any): void;
        /**
Returns the parent Table of the specified element.
@method
@param element - 
@returns 
*/
getParentTable(element: HTMLElement): HTMLElement;
        /**
Returns the column to which the cell belong.
@method
@param uniqueName - 
@returns 
*/
get_column(uniqueName: string): Telerik.Web.UI.GridColumn;
        /**
Returns a boolean value that indicates whether the column is selectable.
@method
@returns 
*/
get_columnSelect(): boolean;
        /**
Returns the owner TableView object of the specified element.
@method
@param thElement - 
@returns 
*/
get_currentTableView(thElement: HTMLElement): Telerik.Web.UI.GridTableView;
        /**
Returns a boolean value that indicates whether multiple columns could be selected.
@method
@returns 
*/
get_multiColumnSelect(): boolean;
        /**
Returns boolean value that indicates where the multi-cell selection is enabled.
@method
@returns 
*/
get_multiple(): boolean;
        /**
Returns the owner HTML element.
@method
@returns 
*/
get_owner(): any;
        /**
Selects the specified cell.
@method
@param items - Array of cell dom elements.
@returns 
*/
select(items: any): void;
        /**
Sets the column selectable state.
@method
@param value - 
@returns 
*/
set_columnSelect(value: boolean): void;
        /**
Property that indicates whether multiple columns could be selected.
@method
@param value - 
@returns 
*/
set_multiColumnSelect(value: boolean): void;
        /**
Enables or disables the multi-cell selection mode.
@method
@param value - 
@returns 
*/
set_multiple(value: boolean): void;
    }


    class GridColumn  extends Sys.UI.Control {
        /**
Returns a value, indicating the data type of the column, for exampe "System.Boolean"
@method
@returns 
*/
get_dataType(): string;
        /**
Boolean
@method
@returns 
*/
get_visible(): void;
        /**
Returns a value, indicating the current filter function
@method
@returns 
*/
get_filterFunction(): string;
        /**
Sets a value, indicating the current filter function
@method
@param value - 
@returns 
*/
set_filterFunction(value: string): void;
        /**
Shows the hader menu of a GridColumn
@method
@param e - 
@param offsetLeft - 
@param offsetTop - 
@returns 
*/
showHeaderMenu(e: any, offsetLeft: number, offsetTop: number): void;
        /**
Returns the name of the datafield associated with the column
@method
@returns 
*/
get_dataField(): string;
        /**
Sets the filter delay for the column
@method
@param value - 
@returns 
*/
set_filterDelay(value: number): void;
        /**
HTML element
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Returns the unique name of the column
@method
@returns 
*/
get_uniqueName(): string;
        /**
Returns a Boolean value, indicating whether a specific column is ReadOnly
@method
@returns 
*/
get_readOnly(): boolean;
        /**
Returns the parent element of the GridColumn, the masterTableView instance
@method
@returns 
*/
get_owner(): any;
        /**
Returns a Boolean Value, indicating whether the column is reorerable.
@method
@returns 
*/
get_reorderable(): boolean;
        /**
Returns a value, specifying the filter delay for the column
@method
@returns 
*/
get_filterDelay(): number;
        /**
Sets whether the column should be resizable or not
@method
@param value - 
@returns 
*/
set_resizable(value: boolean): void;
        /**
Returns a Boolean Value, indicating whether the column is resizable.
@method
@returns 
*/
get_resizable(): boolean;
        /**
Sets whether the column should be reorderable or not
@method
@param value - 
@returns 
*/
set_reorderable(value: boolean): void;
    }


    class GridColumnCancelEventArgs  extends Sys.CancelEventArgs {
        /**
Returns a reference to the DomEvent that was raised
@method
@returns 
*/
get_domEvent(): Sys.UI.DomEvent;
        /**
Returns a reference to the GridColumn
@method
@returns 
*/
get_gridColumn(): Telerik.Web.UI.GridColumn;
    }


    class GridColumnEventArgs  extends Sys.EventArgs {
        /**
Returns a reference to the DomEvent that was raised
@method
@returns 
*/
get_domEvent(): Sys.UI.DomEvent;
        /**
Returns a reference to the GridColumn object
@method
@returns 
*/
get_gridColumn(): any;
    }


    class GridColumnResizer   {
    }


    class GridDataItem  extends Sys.UI.Control {
        /**
Returns an array, containing the nestedViews of an element. Meaningful when we have a hierarchical structure.
@method
@returns 
*/
get_nestedViews(): any;
        /**
Gets a Boolean value, indicating whether the dataItem is selectable or not.
@method
@param value - 
@returns 
*/
get_selectable(value: boolean): void;
        /**
This method takes control id for an argument and returns the corresponding client object of RadControl or ASP.NET AJAX control inside the grid row. Useful to reference client objects of controls inside a grid item cell on the client.
@method
@param id - 
@returns 
*/
findControl(id: string): any;
        /**
Sets a Boolean value, indicating whether the dataItem is displayed or not.
@method
@param value - 
@returns 
*/
set_display(value: boolean): void;
        /**
Sets a Boolean value, indicating whether the dataItem is expanded or not.
@method
@param value - 
@returns 
*/
set_expanded(value: boolean): void;
        /**
Returns the dataKeyValue, associated with the dataItem.
@method
@param columnName - 
@returns 
*/
getDataKeyValue(columnName: string): string;
        /**
Returns a value of type Boolean and specifies if the row is visible.
@method
@returns 
*/
get_display(): boolean;
        /**
The method toggles the visibility of an item on and off. It takes a boolean value indicating whether the item will be visible or not..
@method
@param value - 
@returns 
*/
set_visible(value: boolean): void;
        /**
Returns a String, representing the client_id for the element.
@method
@returns 
*/
get_id(): string;
        /**
HTML element
@method
@returns 
*/
get_editFormItem(): void;
        /**
Boolean
@method
@returns 
*/
get_isInEditMode(): void;
        /**
HTML element
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Returns a Boolean value, indicating whether the dataItem is selected or not.
@method
@returns 
*/
get_selected(): boolean;
        /**
Returns the parent element of the GridColumn, the masterTableView instance
@method
@returns 
*/
get_owner(): any;
        /**
Returns the hierarchical item index of the GridDataItem object.
@method
@returns 
*/
get_itemIndexHierarchical(): any;
        /**
This method takes control id for an argument and returns the corresponding DOM element of html or rendered server control inside the grid row. Useful to reference html elements of controls inside a grid item cell on the client.
@method
@param id - 
@returns 
*/
findElement(id: string): any;
        /**
This method provides reference to the DataItem object (data container). Useful to obtain data from a particular row cell passing the unique name of the column as an indexer.
@method
@returns 
*/
get_dataItem(): any;
        /**
Returns a Boolean value, indicating whether the element is expanded or not.
@method
@returns 
*/
get_expanded(): boolean;
        /**
Sets a Boolean value, indicating whether the dataItem is selected or not.
@method
@param value - 
@returns 
*/
set_selected(value: boolean): void;
        /**
Returns a specific cell from a dataItem, given the unique name of a column
@method
@param columnUniqueName - 
@returns 
*/
get_cell(columnUniqueName: string): any;
    }


    class GridDataItemCancelEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the DataKeyValue for the current row.
@method
@param columnName - 
@returns 
*/
getDataKeyValue(columnName: string): string;
        /**
Returns the DOM even that was raised for the current event.
@method
@returns 
*/
get_domEvent(): Sys.UI.DomEvent;
        /**
Returns a reference to the GridDataItem object.
@method
@returns 
*/
get_gridDataItem(): Telerik.Web.UI.GridDataItem;
        /**
Returns the ID of the row object.
@method
@returns 
*/
get_id(): string;
        /**
Returns the hierarchical item index.
@method
@returns 
*/
get_itemIndexHierarchical(): string;
        /**
Returns the owner TableView object.
@method
@returns 
*/
get_tableView(): Telerik.Web.UI.GridTableView;
    }


    class GridDataItemEventArgs  extends Sys.EventArgs {
        /**
Returns the DataKeyValue for the current row.
@method
@param columnName - 
@returns 
*/
getDataKeyValue(columnName: string): string;
        /**
Returns the DOM even that was raised for the current event.
@method
@returns 
*/
get_domEvent(): Sys.UI.DomEvent;
        /**
Returns a reference to the GridDataItem object.
@method
@returns 
*/
get_gridDataItem(): Telerik.Web.UI.GridDataItem;
        /**
Returns the ID of the row object.
@method
@returns 
*/
get_id(): string;
        /**
Returns a reference to the HTML TR element.
@method
@returns 
*/
get_item(): any;
        /**
Returns the hierarchical item index.
@method
@returns 
*/
get_itemIndexHierarchical(): string;
        /**
Returns the owner TableView object.
@method
@returns 
*/
get_tableView(): Telerik.Web.UI.GridTableView;
    }


    class GridDataSourceResolvedEventArgs  extends Sys.EventArgs {
        /**
Returns the data to which the RadGrid instance is bound.
@method
@returns 
*/
get_data(): any;
        /**
Sets the data to which the RadGrid instance will be bound.
@method
@returns 
*/
set_data(): void;
    }


    class GridDragDropCancelEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the DataKeyValue for the destination Telerik.Web.UI.GridDataItem object.
@method
@param columnName - 
@returns 
*/
get_TargetDataKeyValue(columnName: string): string;
        /**
Returns the HTML element onto the item was dropped.
@method
@returns 
*/
get_destinationHtmlElement(): any;
        /**
Returns the DOM event that was raised for the drag operation.
@method
@returns 
*/
get_domEvent(): Sys.UI.DomEvent;
        /**
Returns a collection of the dragged GridDataItem objects.
@method
@returns 
*/
get_draggedItems(): any;
        /**
Returns the  position on which the item is dropped.
@method
@returns 
*/
get_dropPosition(): string;
        /**
Returns a reference to the destination Telerik.Web.UI.GridDataItem object.
@method
@returns 
*/
get_targetGridDataItem(): Telerik.Web.UI.GridDataItem;
        /**
Returns the ID of the destination Telerik.Web.UI.GridDataItem object.
@method
@returns 
*/
get_targetItemId(): string;
        /**
Returns the hierarchical item index of the destination Telerik.Web.UI.GridDataItem object.
@method
@returns 
*/
get_targetItemIndexHierarchical(): string;
        /**
Returns the owner TableView of the destination Telerik.Web.UI.GridDataItem object.
@method
@returns 
*/
get_targetItemTableView(): Telerik.Web.UI.GridTableView;
        /**
Returns the RadGrid instance onto the item was dropped.
@method
@returns 
*/
get_targetRadGrid(): Telerik.Web.UI.RadGrid;
        /**
Sets the HTML element onto the item will be dropped.
@method
@param value - 
@returns 
*/
set_destinationHtmlElement(value: any): void;
    }


    class GridFilterExpression   {
        /**
Returns the data type of the dataservice.
@method
@param value - 
@returns 
*/
getDataServiceValue(value: any): any;
        /**
Returns the value of the DynamicLinq expression.
@method
@param value - 
@returns 
*/
getDynamicLinqValue(value: Telerik.Web.UI.GridFilterExpressions): string;
        /**
Returns the string represenation of the data type name.
@method
@param value - 
@returns 
*/
getQuotedValue(value: string): string;
        /**
Returns the unique name of the column.
@method
@returns 
*/
get_columnUniqueName(): string;
        /**
Returns the type name of the data field.
@method
@returns 
*/
get_dataTypeName(): string;
        /**
Returns the field name of the sort expression.
@method
@returns 
*/
get_fieldName(): string;
        /**
Returns the field value.
@method
@returns 
*/
get_fieldValue(): any;
        /**
Returns the current filter function.
@method
@returns 
*/
get_filterFunction(): string;
        /**
Sets the unique name of the column.
@method
@param parameter - 
@returns 
*/
set_columnUniqueName(parameter: string): void;
        /**
Returns the type name of the data field.
@method
@param parameter - 
@returns 
*/
set_dataTypeName(parameter: string): void;
        /**
Set the field name of the sort expression.
@method
@param parameter - 
@returns 
*/
set_fieldName(parameter: string): void;
        /**
Sets the field value.
@method
@param parameter - 
@returns 
*/
set_fieldValue(parameter: string): void;
        /**
Returns the current filter function.
@method
@param parameter - 
@returns 
*/
set_filterFunction(parameter: string): void;
        /**
Initializes DataService string.
@method
@returns 
*/
toDataService(): string;
        /**
Returns the DynamicLinq represenation of the filter expression.
@method
@param value - 
@returns 
*/
toDynamicLinq(value: Telerik.Web.UI.GridFilterExpressions): string;
        /**
Returns the OQL represenation of the filter expression.
@method
@param parameter - 
@returns 
*/
toOql(parameter: Telerik.Web.UI.GridFilterExpressions): any;
        /**
Returns the string representation of the specified filter expression.
@method
@param parameter - 
@returns 
*/
toString(parameter: string): string;
    }


    class GridFilterExpressions  extends Telerik.Web.UI.Collection {
        /**
Returns the filter expression by a given column unique name.
@method
@param columnUniqueName - 
@returns 
*/
find(columnUniqueName: Telerik.Web.UI.GridColumn): void;
        /**
Initializes DataService string.
@method
@returns 
*/
toDataService(): void;
        /**
Returns the DynamicLinq represenation of the filter expression.
@method
@param value - 
@returns 
*/
toDynamicLinq(value: Telerik.Web.UI.GridFilterExpressions): void;
        /**
Returns the OQL represenation of the filter expression.
@method
@param parameter - 
@returns 
*/
toOql(parameter: any): void;
        /**
Returns the string represenation of the specified parameter.
@method
@param parameter - 
@returns 
*/
toString(parameter: any): void;
    }


    class GridGroupPanel  extends Sys.UI.Control {
    }


    class GridGroupPanelItem  extends Sys.UI.Control {
    }


    class GridHeaderMenuCancelEventArgs  extends Telerik.Web.UI.GridColumnCancelEventArgs {
        /**
Returns a reference to the column's header menu
@method
@returns 
*/
get_menu(): any;
    }


    class GridItemResizer   {
    }


    class GridKeyPressEventArgs  extends Sys.CancelEventArgs {
        /**

@method
@returns 
*/
get_domEvent(): Sys.UI.DomEvent;
        /**

@method
@returns 
*/
get_isAltPressed(): boolean;
        /**

@method
@returns 
*/
get_isCtrlPressed(): boolean;
        /**

@method
@returns 
*/
get_isShiftPressed(): boolean;
        /**
Returns the key code of the pressed key
@method
@returns 
*/
get_keyCode(): number;
    }


    class GridScrollEventArgs  extends Sys.EventArgs {
        /**
Returns a Boolean value, indicating whether the scrollable area is scrolled to the bottom.
@method
@returns 
*/
get_isOnBottom(): boolean;
        /**
Returns a Boolean value, indicating whether the scrollable area is scrolled to the top.
@method
@returns 
*/
get_isOnTop(): boolean;
        /**
Returns the gridDataDiv element of the grid
@method
@returns 
*/
get_scrollControl(): any;
        /**
Returns the scrollLeft value for the element
@method
@returns 
*/
get_scrollLeft(): number;
        /**
Returns the scrollTop value for the element
@method
@returns 
*/
get_scrollTop(): number;
    }


    class GridScrolling  extends Sys.Component {
        /**

@method
@returns 
*/
applyFrozenScroll(): void;
        /**
Sets the height of the data Div element
@method
@returns 
*/
setDataDivHeight(): void;
        /**
Set the width of the header and footer Div elements
@method
@returns 
*/
setHeaderAndFooterDivsWidth(): void;
    }


    class GridSelection  extends Sys.Component {
        /**
Get the owner.
@method
@returns 
*/
get_owner(): Telerik.Web.UI.RadGrid;
        /**
Sets the owner.
@method
@param value - 
@returns 
*/
set_owner(value: Telerik.Web.UI.RadGrid): void;
    }


    class GridSortExpression   {
        /**
Returns the name of the associated field.
@method
@returns 
*/
get_fieldName(): string;
        /**
Returns the sort order. Possible values are: Descending, Ascending, and Natural
@method
@returns 
*/
get_sortOrder(): string;
        /**
Sets the name of the associated field.
@method
@returns 
*/
set_fieldName(): void;
        /**
Sets the sort order. Possible values are: Descending, Ascending, and Natural
@method
@returns 
*/
set_sortOrder(): void;
    }


    class GridSortExpressions  extends Telerik.Web.UI.Collection {
        /**
Finds the data field by given field name.
@method
@param fieldName - 
@returns 
*/
find(fieldName: any): void;
        /**
Returns the string represenation of the GridSortExpressions object.
@method
@returns 
*/
toString(): void;
    }


    class GridTableView  extends Sys.UI.Control {
        /**
Method which deletes all selected items in the grid.
@method
@returns 
*/
deleteSelectedItems(): void;
        /**
Hides the filter item for the tableview instance
@method
@returns 
*/
hideFilterItem(): void;
        /**
Returns a string which represents the Name property (set on the server) for the corresponding GridTableView client object. Can be used to identify table in grid hierarchy client-side
@method
@returns 
*/
get_name(): string;
        /**
Sets a boolean value indicating whether multi-column sorting is enabled for the grid instance
@method
@param size - 
@returns 
*/
set_allowMultiColumnSorting(size: boolean): void;
        /**
Explicitly shows a column.
@method
@param index - 
@returns 
*/
showColumn(index: number): void;
        /**
Explicitly collapses an item.
@method
@param index - 
@returns 
*/
collapseItem(index: number): void;
        /**
Returns the table filter row element
@method
@returns 
*/
get_tableFilterRow(): any;
        /**
Method which triggers paging action with page command passed as an argument. All server-side paging capabilities of RadGrid are applicable here as well. See the topic describing the fireCommand method for further details.
@method
@param pageCommand - 
@returns 
*/
page(pageCommand: string): void;
        /**
Explicitly expands an item.
@method
@param index - 
@returns 
*/
expandItem(index: number): void;
        /**
Method which switches the table row passed as an argument or the row corresponding to the index passed as an argument in edit mode. If you set AllowMultiRowEdit to true, you can switch multiple grid items in edit mode with subsequent calls to this method.
@method
@param index - 
@returns 
*/
editItem(index: number): void;
        /**
Exports the grid to MS Excel 2003 or later
@method
@returns 
*/
exportToExcel(): void;
        /**
Explicitly shows an item.
@method
@param index - 
@returns 
*/
showItem(index: number): void;
        /**
Method which can be used to assign data source for the corresponding GridTableView client instance. This data source should be of JSON format which can be serialized by a web service or page method.
@method
@param dataSource - 
@returns 
*/
set_dataSource(dataSource: any): void;
        /**
Deselects the table row passed as an argument or the row corresponding to the index passed as an argument.
@method
@param rowElement - 
@returns 
*/
deselectItem(rowElement: any): void;
        /**
Cancels the edit mode for all grid items that are switched in edit mode prior to the method call.
@method
@returns 
*/
cancelAll(): void;
        /**
Returns a one-dimensional array which holds the key fields set through the ClientDataKeyNames property of GridTableView on the server
@method
@returns 
*/
get_clientDataKeyNames(): any;
        /**
Method which extracts the old values from the edited table row passed as an argument or the row corresponding to the index passed as an argument. The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.
@method
@param index - 
@returns 
*/
extractOldValuesFromItem(index: number): any;
        /**
Reorders two columns, specified by the two parameters to the function
@method
@param columnName1 - 
@param columnName2 - 
@returns 
*/
reorderColumns(columnName1: string, columnName2: string): void;
        /**
Method which switches the grid in insert mode and displays the insertion form.
@method
@returns 
*/
showInsertItem(): void;
        /**
Returns a Boolean property. Gets a value indicating if the GridTableView is currently in insert mode.
@method
@returns 
*/
get_isItemInserted(): boolean;
        /**
Selects the table row passed as an argument or the row corresponding to the index passed as an argument.
@method
@param rowElement - 
@returns 
*/
selectItem(rowElement: any): void;
        /**
Swaps the two columns, the names of which are passed as arguments to the method
@method
@param columnName1 - 
@param columnName2 - 
@returns 
*/
swapColumns(columnName1: string, columnName2: string): void;
        /**
Returns a boolean value indicating whether multi-column sorting is enabled for the grid instance
@method
@returns 
*/
get_allowMultiColumnSorting(): boolean;
        /**
Returns a cell specified by a row and a column unique name.
@method
@param rowObject - 
@param uniqueName - 
@returns 
*/
getCellByColumnUniqueName(rowObject: Telerik.Web.UI.GridDataItem, uniqueName: string): any;
        /**
Moves a column one position to the right.
@method
@param columnIndex - 
@returns 
*/
moveColumnToRight(columnIndex: number): void;
        /**
Returns a collection of c
@method
@returns 
*/
get_columns(): any;
        /**
Returns the page size for the respective GridTableView object
@method
@returns 
*/
get_pageSize(): number;
        /**
Sets the virtual item count value for the respective GridTableView object. Applies to client-side RadGrid binding only.
@method
@param size - 
@returns 
*/
set_virtualItemCount(size: number): void;
        /**
Method which triggers specific command for the grid when executed. The method is called for the GridTableView client instance and its arguments depend on the command which will be processed.
@method
@param comandName - 
@param commandArgument - 
@returns 
*/
fireCommand(comandName: string, commandArgument: string): void;
        /**
Returns a column, specified by the argument of the function
@method
@param uniqueName - 
@returns 
*/
getColumnByUniqueName(uniqueName: string): Telerik.Web.UI.GridColumn;
        /**
Returns the current page index
@method
@returns 
*/
get_currentPageIndex(): number;
        /**
Gets the virtual item count value for the respective GridTableView object. Applies to client-side RadGrid binding only.
@method
@returns 
*/
get_virtualItemCount(): number;
        /**
Resizes a row in the grid to a specified height
@method
@param rowIndex - 
@param rowHeight - 
@returns 
*/
resizeItem(rowIndex: number, rowHeight: any): void;
        /**
Resizes a row in the grid to a specified height
@method
@param columnIndex - 
@param columnWidth - 
@returns 
*/
resizeColumn(columnIndex: number, columnWidth: number): void;
        /**
Explicitly hides an item.
@method
@param index - 
@returns 
*/
hideItem(index: number): void;
        /**
Returns the page count for the respective GridTableView object, i.e. the number of pages
@method
@returns 
*/
get_pageCount(): number;
        /**
The method will automatically send a result (holding all filter and sort expressions in appropriate format and will apply paging on server using skip and top) to the query method of the ADO.NET Data Service. The resulting value from the getDataServiceQuery(entityName) method will generate an expression that can be recognized by the corresponding data service.
@method
@param entityName - 
@returns 
*/
getDataServiceQuery(entityName: string): any;
        /**
Sets the page size for the respective GridTableView object
@method
@param size - 
@returns 
*/
set_pageSize(size: number): void;
        /**
Returns the unique name of the column by given header row and cell index passed as first and second arguments.
@method
@param rowEl - 
@param index - 
@returns 
*/
getColumnUniqueNameByCellIndex(rowEl: any, index: number): any;
        /**
Returns a collection of all selected items (of type GridDataItem) for the respective GridTableView instance. This collection will include the selected items from the table's child tables (meaningful in hierarchical grid only).
@method
@returns 
*/
get_selectedItems(): any;
        /**
Method which extracts the key values (added to the ClientDataKeyNames collection of the master/detail table) from the edited table row passed as an argument or the row corresponding to the index passed as an argument. The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.
@method
@param index - 
@returns 
*/
extractKeysFromItem(index: number): any;
        /**
Method which performs ungroup action for the column with UniqueName specified as an argument.
@method
@param colUniqueName - 
@returns 
*/
ungroupColumn(colUniqueName: string): void;
        /**
Explicitly hides a column.
@method
@param index - 
@returns 
*/
hideColumn(index: number): void;
        /**
HTML element
@method
@returns 
*/
get_insertItem(): void;
        /**
Shows the filter item for the tableview instance
@method
@returns 
*/
showFilterItem(): void;
        /**
Method which clears the selected items for the respective GridTableView client object. This method will clear the selected items from the table's child tables (meaningful in hierarchical grid only).
@method
@returns 
*/
clearSelectedItems(): void;
        /**
Method which cancels the insert action and switches the grid in regular mode.
@method
@returns 
*/
cancelInsert(): void;
        /**
A collection of Telerik.Web.UI.GridSortExpression objects. Represents the sort expressions applied for the grid instance. The toString() javascript method executed over this collection will return coma separated string of all expressions (in case of AllowMultiColumnSorting) or a single sort expression if multi-column sorting is disabled. You can also utilize the toList() method in order to pass an array of items (representing the sort expressions applied) to the server and operate with them using GridSortExpression server object. Each sort expression (of type Telerik.Web.UI.GridSortExpression) has fieldName and sortOrder properties which hold the DataField of the sorted column and the sort direction (Ascending, Descending or None). To retrieve the values from these properties use the get_fieldName() and get_sortOrder() properties of the corresponding GridSortExpression.
@method
@returns 
*/
get_sortExpressions(): Telerik.Web.UI.GridSortExpressions;
        /**
Exports the grid to CSV format (comma-separated values).
@method
@returns 
*/
exportToCsv(): void;
        /**
Method which switches all GridDataItems in edit mode.
@method
@returns 
*/
editAllItems(): void;
        /**
Sets the current page index
@method
@param index - 
@returns 
*/
set_currentPageIndex(index: number): void;
        /**
Selects all items in the GridTableView for which the method is invoked.
@method
@returns 
*/
selectAllItems(): void;
        /**
Method which groups the grid by the column with UniqueName specified as an argument. All server grouping capabilities of RadGrid are applicable for this case as well.
@method
@param colUniqueName - 
@returns 
*/
groupColumn(colUniqueName: string): void;
        /**
Method which extracts the new values from the edited table row passed as an argument or the row corresponding to the index passed as an argument. The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.
@method
@param index - 
@returns 
*/
extractValuesFromItem(index: number): any;
        /**
Method which triggers sort command for the column with DataField (set on the server) passed as an argument. If you set AllowMultiColumnSorting to true server-side, each subsequent call to this method will sort the corresponding column. All server-side sorting capabilities of RadGrid are applicable here as well.
@method
@param sortExpression - 
@returns 
*/
sort(sortExpression: string): void;
        /**
Method which updates all edited items in the grid. The new data will be taken from the edit form editors.
@method
@returns 
*/
updateEditedItems(): void;
        /**
Method which cancels the update for the edited table row passed as an argument or the row corresponding to the index passed as an argument. If you have several items switched in edit mode, you can cancel the update for all of them with subsequent calls to this method.
@method
@param index - 
@returns 
*/
cancelUpdate(index: number): void;
        /**
Method which triggers filter command for the column with UniqueName (set on the server) passed as a first argument. The second argument should be value to compare (or two values separated by [space] for between filter pattern) or an empty string for EqualTo, NoFilter, IsNull, etc. The last third argument has to be a value from the Telerik.Web.UI.GridFilterFunction enumeration which internally recognizes the filter criteria that should be applied. All server-side filtering capabilities of RadGrid are applicable here as well. See the topic describing the fireCommand method for further details.
@method
@param colUniqueName - 
@param valueToCompare - 
@param filterFunction - 
@param shouldUpdateFilterControl - 
@returns 
*/
filter(colUniqueName: string, valueToCompare: string, filterFunction: string, shouldUpdateFilterControl: boolean): void;
        /**
Exports the grid to PDF format.
@method
@returns 
*/
exportToPdf(): void;
        /**
If called from a nested GridTableView returns the parent item for the current nested hierarchical GridTableView; returns null if called from the MasterTableView.
@method
@returns 
*/
get_parentRow(): any;
        /**
Returns a Boolean value, specifying whether the filtering item is visible
@method
@returns 
*/
get_isFilterItemVisible(): boolean;
        /**
Returns HTML table which represents the respective table for the GridTableView object rendered on the client.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
A collection of Telerik.Web.UI.GridFilterExpression objects. Represents the filter expressions applied for the grid instance. The toString() javascript method executed over this collection will return SQL string representation of all filter expressions concatenated by "AND" reserved words. While filter expressions toString() method will create SQL syntax representing current grid filtering, you can also take advantage of the toDynamicLinq() method which will create LINQ expression that can be used directly with Dynamic LINQ library. Furthermore, you can also utilize the toList() method in order to pass an array of items (representing the filter expression elements) to the server and operate with them using GridFilterExpression server object.
@method
@returns 
*/
get_filterExpressions(): Telerik.Web.UI.GridFilterExpressions;
        /**
Method which will force client rebind of the grid and will refresh its state when a new data source is assigned using the set_dataSource() method. Meaningful in this scenario only.
@method
@returns 
*/
dataBind(): void;
        /**
Retuens a collection of all data items for the respective GridTableView instance.
@method
@returns 
*/
get_dataItems(): any;
        /**
Array
@method
@returns 
*/
get_editItems(): void;
        /**
Moves a column one position to the left.
@method
@param columnIndex - 
@returns 
*/
moveColumnToLeft(columnIndex: number): void;
        /**
Method which switches all selected items in the grid in edit mode.
@method
@returns 
*/
editSelectedItems(): void;
        /**
Returns a property which is of type RadGrid and present the parent of the current object.
@method
@returns 
*/
get_owner(): any;
        /**
Method which updates the edited table row passed as an argument or the row corresponding to the index passed as an argument. If you have several items switched in edit mode, you can update all of them with subsequent calls to this method. The updated data will be taken from the edit form editors.
@method
@param index - 
@returns 
*/
updateItem(index: number): void;
        /**
Method which deletes the table row passed as an argument or the row corresponding to the index passed as an argument.
@method
@param index - 
@returns 
*/
deleteItem(index: number): void;
        /**
If called from a nested GridTableView returns the parent GridTableView in the grid hierarchy; returns null if called from the MasterTableView.
@method
@returns 
*/
get_parentView(): any;
        /**
Exports the grid to a Word document
@method
@returns 
*/
exportToWord(): void;
        /**
Method which inserts new table row to the grid. The new data will be taken from the insertion form editors fields.
@method
@returns 
*/
insertItem(): void;
    }


    class ISchedulerModel   {
        /**
Gets the time slot that will contain the specified appointment if it's added to the scheduler.
@method
@param appointment - The appointment for which to find the time slot.
@returns The time slot instance associated with the specified DOM element.
*/
getTimeSlotForAppointment(appointment: Telerik.Web.UI.SchedulerAppointment): Telerik.Web.UI.ISchedulerTimeSlot;
        /**
Gets the time slot associated with the specified DOM element.
@method
@param domElement - The time slot DOM element
@returns The time slot instance associated with the specified DOM element.
*/
getTimeSlotFromDomElement(domElement: HTMLElement): Telerik.Web.UI.ISchedulerTimeSlot;
        /**
Gets the last visible date of the current view.
@method
@returns The last visible date of the current view.
*/
get_visibleRangeEnd(): Date;
        /**
Gets the first visible date of the current view.
@method
@returns The first visible date of the current view.
*/
get_visibleRangeStart(): Date;
    }


    class ISchedulerTimeSlot   {
        /**
Gets the DOM elment of this time slot.
@method
@returns The DOM elment of this time slot.
*/
get_domElement(): HTMLElement;
        /**
Gets the duration of the time slot in milliseconds.
@method
@returns The duration of the time slot in milliseconds.
*/
get_duration(): number;
        /**
Gets the duration of the time slot in minutes.
@method
@returns The duration of the time slot in minutes.
*/
get_durationInMinutes(): number;
        /**
Gets the end time of the time slot.
@method
@returns The end time of the time slot.
*/
get_endTime(): Date;
        /**
Gets the hierarchical index of the time slot.
@method
@returns The hierarchical index of the time slot.
*/
get_index(): string;
        /**
Gets a value indicating if the time slot is an all-day or not.
@method
@returns true if this is an all
*/
get_isAllDay(): boolean;
        /**
Gets the start time of the time slot.
@method
@returns The start time of the time slot.
*/
get_startTime(): Date;
    }


    class InputButtonClickEventArgs  extends Sys.CancelEventArgs {
        /**

@method
@returns 
*/
get_buttonType(): Telerik.Web.UI.RadButtonType;
    }


    class InputErrorEventArgs  extends Sys.CancelEventArgs {
        /**

@method
@returns 
*/
get_inputText(): string;
        /**

@method
@returns 
*/
get_reason(): Telerik.Web.UI.InputErrorReason;
    }


    class InputKeyPressEventArgs  extends Sys.CancelEventArgs {
        /**

@method
@returns 
*/
get_domEvent(): Sys.UI.DomEvent;
        /**

@method
@returns 
*/
get_keyCharacter(): string;
        /**

@method
@returns 
*/
get_keyCode(): number;
    }


    class InputManagerErrorEventArgs  extends Telerik.Web.UI.InputErrorEventArgs {
        /**

@method
@returns 
*/
get_targetInput(): HTMLElement;
        /**

@method
@param value - 
@returns 
*/
set_inputText(value: string): void;
    }


    class InputManagerEventArgs  extends Sys.EventArgs {
        /**

@method
@returns 
*/
get_domEvent(): Sys.UI.DomEvent;
        /**

@method
@returns 
*/
get_targetInput(): HTMLElement;
    }


    class InputManagerKeyPressEventArgs  extends Telerik.Web.UI.InputKeyPressEventArgs {
        /**

@method
@returns 
*/
get_targetInput(): HTMLElement;
    }


    class InputManagerValidatingEventArgs  extends Sys.CancelEventArgs {
        /**

@method
@returns 
*/
get_context(): any;
        /**

@method
@returns 
*/
get_input(): HTMLElement;
        /**

@method
@returns 
*/
get_isValid(): boolean;
        /**

@method
@param value - 
@returns 
*/
set_context(value: any): void;
        /**

@method
@param value - 
@returns 
*/
set_isValid(value: boolean): void;
    }


    class InputValueChangedEventArgs  extends Sys.CancelEventArgs {
        /**

@method
@returns 
*/
get_newValue(): string;
        /**

@method
@returns 
*/
get_oldValue(): string;
    }


    class InputValueChangingEventArgs  extends Telerik.Web.UI.InputValueChangedEventArgs {
        /**

@method
@param value - 
@returns 
*/
set_newValue(value: string): void;
    }


    class MaskedTextBoxEventArgs  extends Sys.CancelEventArgs {
        /**

@method
@returns 
*/
get_currentPart(): string;
        /**

@method
@returns 
*/
get_newValue(): string;
        /**

@method
@returns 
*/
get_oldValue(): string;
    }


    class MonthYearPickerDateSelectedEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the selected date.
@method
@returns 
*/
get_selectedDate(): Date;
    }


    class MonthYearPickerMonthSelectedEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the new date.
@method
@returns 
*/
get_newDate(): Date;
        /**
Returns the previously selected date.
@method
@returns 
*/
get_oldDate(): Date;
        /**
Returns the selected cell.
@method
@returns 
*/
get_selectedCell(): HTMLElement;
    }


    class MonthYearPickerPopupClosingEventArgs  extends Sys.CancelEventArgs {
        /**
Returns a reference to the month-year picker control.
@method
@returns 
*/
get_pickerControl(): Telerik.Web.UI.RadMonthYearPicker;
    }


    class MonthYearPickerPopupOpeningEventArgs  extends Sys.CancelEventArgs {
        /**
Returns a reference to the month-year picker control.
@method
@returns 
*/
get_pickerControl(): Telerik.Web.UI.RadMonthYearPicker;
    }


    class MonthYearPickerViewChangedEventArgs  extends Sys.CancelEventArgs {
        /**
Returns a reference to the month-year picker control.
@method
@returns 
*/
get_pickerControl(): Telerik.Web.UI.RadMonthYearPicker;
    }


    class MonthYearPickerYearSelectedEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the new date.
@method
@returns 
*/
get_newDate(): Date;
        /**
Returns the previously selected date.
@method
@returns 
*/
get_oldDate(): Date;
        /**
Returns the selected cell.
@method
@returns 
*/
get_selectedCell(): HTMLElement;
    }


    class NumberFormat   {
        /**

@method
@returns 
*/
Format(): void;
        /**

@method
@returns 
*/
Pad(): void;
        /**

@method
@returns 
*/
Parse(): void;
        /**

@method
@returns 
*/
ParseExact(): void;
        /**

@method
@returns 
*/
ReplaceN(): void;
        /**

@method
@returns 
*/
ReturnZeroIfEmpty(): void;
        /**

@method
@returns 
*/
Round(): void;
        /**

@method
@returns 
*/
SplitGroup(): void;
        /**

@method
@returns 
*/
ToFixed(): void;
    }


    class NumericInputErrorEventArgs  extends Telerik.Web.UI.InputErrorEventArgs {
        /**

@method
@returns 
*/
get_inputText(): string;
        /**

@method
@returns 
*/
get_keyCharacter(): string;
        /**

@method
@returns 
*/
get_keyCode(): number;
        /**

@method
@returns 
*/
get_reason(): Telerik.Web.UI.InputErrorReason;
    }


    class NumericInputManagerErrorEventArgs  extends Telerik.Web.UI.NumericInputErrorEventArgs {
        /**

@method
@returns 
*/
get_targetInput(): HTMLElement;
    }


    class OrgChartGroupItem   {
    }


    class OrgChartNode   {
    }


    class PivotGridConfigurationPanel  extends Sys.UI.Control {
        /**
Gets the html input element which determines if the updates will be made on every operation or only when clicking the Update button.
@method
@returns Gets the html input element which determines if the updates will be made on every operation or only when clicking the Update button.
*/
get_deferLayoutUpdateCheckBox(): any;
        /**
Gets the collection of Telerik.Web.UI.PivotGridField items which are part of the configuration panel.
@method
@returns The collection of Telerik.Web.UI.PivotGridField items which are part of the configuration panel.
*/
get_fields(): any;
        /**
Gets if the defered layout update is enabled which determines if the changes will be applied after every operation or only when clicking the Update button.
@method
@returns The defered layout update determines if the changes will be applied after every operation or only when clicking the Update button.
*/
get_isDeferedLayoutUpdate(): boolean;
        /**
Gets the panel layout which could be altered on the client and its default type could be changed by setting on of the four available values.
@method
@returns The current configuration panel layout type.
*/
get_layoutType(): Telerik.Web.UI.PivotGridConfigurationPanelLayoutType;
        /**
Gets the owner pivot grid.
@method
@returns The owner pivot grid.
*/
get_owner(): Telerik.Web.UI.RadPivotGrid;
        /**

@method
@returns 
*/
get_treeView(): void;
        /**
Gets the html button element which is enabled when get_isDeferedLayoutUpdate returns true and performs postback updating the RadPivotGrid control.
@method
@returns The
*/
get_updateButton(): any;
        /**
Sets a value indicating whether the row header zone of the PivotGrid will be shown.
@method
@param value - The new layout type.
@returns 
*/
set_layoutType(value: Telerik.Web.UI.PivotGridConfigurationPanelLayoutType): void;
        /**
Updates the RadPivotGrid layout after configuration panel operations.
@method
@param forceUpdate - Set to true if update should happen no matter what.
@returns 
*/
update(forceUpdate: boolean): void;
    }


    class PivotGridField  extends Sys.UI.Control {
        /**
Gets the aggregate operator of the field.
@method
@returns The aggregate operator of the field.
*/
get_aggregate(): Telerik.Web.UI.PivotGridAggregate;
        /**
Gets the field positioned after the current field.
@method
@returns Returns the field positioned after the current field.
*/
get_nextField(): Telerik.Web.UI.PivotGridField;
        /**
Gets the owner pivot grid.
@method
@returns The owner pivot grid.
*/
get_owner(): Telerik.Web.UI.RadPivotGrid;
        /**
Gets the field positioned before the current field.
@method
@returns Returns the field positioned before the current field.
*/
get_previousField(): Telerik.Web.UI.PivotGridField;
        /**
Gets the unique name of the field which is assigned dynamically during runtime or set by the user.
@method
@returns The unique name.
*/
get_uniqueName(): string;
        /**
Gets the zone index of the field which determines its position in the same zone.
@method
@returns The zone index of the field which determines its position in the same zone.
*/
get_zoneIndex(): number;
        /**
Gets the zone type of the field which determines in which zone the field is positioned.
@method
@returns The zone type of the field which determines in which zone the field is positioned.
*/
get_zoneType(): Telerik.Web.UI.PivotGridFieldZoneType;
        /**
Performs postback and sets the field IsHidden property to true which excludes the field from the pivot table calculations.
@method
@returns 
*/
hide(): void;
        /**
Performs postback and calls the Show function of the field server-side in order to sets the IsHidden property to false and sets the ZoneIndex so the field will be placed as last in the zone
@method
@returns 
*/
show(): void;
        /**
Tries to reorder the field with new ZoneType and/or new ZoneIndex.
@method
@param zoneType - The new ZoneType for the field
@param zoneIndex - The new ZoneIndex for the field
@returns If the reorder happened or not which could happen if the zoneType and zoneIndex are the same
*/
tryReorder(zoneType: Telerik.Web.UI.PivotGridFieldZoneType, zoneIndex: number): boolean;
    }


    class PivotGridFieldSettings  extends Sys.UI.Control {
        /**
Shows the field settings window.
@method
@returns 
*/
displayFieldSettingsWindow(): void;
        /**
Gets Cancel button element.
@method
@returns Returns Cancel button element.
*/
get_cancelButton(): HTMLElement;
        /**
Gets the RadWindow client-side object for the RadPivotGrid field settings window.
@method
@returns Returns the RadWindow client
*/
get_fieldSettingsWindow(): Telerik.Web.UI.RadWindow;
        /**
Gets the RadListBox client-side object of the aggregates function list box.
@method
@returns RGets the RadListBox client
*/
get_functionsBox(): Telerik.Web.UI.RadListBox;
        /**
Gets OK button element.
@method
@returns Returns OK button element.
*/
get_okButton(): HTMLElement;
        /**
Gets the owner pivot grid.
@method
@returns The owner pivot grid.
*/
get_owner(): Telerik.Web.UI.RadPivotGrid;
    }


    class RadAjaxControl  extends Sys.UI.Control {
        /**
Initiates a generic AJAX request through the RadAjax instance
@method
@param args - The parameters
@returns 
*/
ajaxRequest(args: string): void;
        /**
Simulates a postback/AJAX request send by the control with the specified UniqueID and specified arguments
@method
@param eventTarget - The control which should raise postback event. You should always use the control
@param eventArgument - This is optional argument for the event
@returns 
*/
ajaxRequestWithTarget(eventTarget: string, eventArgument: string): void;
        /**
Returns the RadAjaxManager client-side events handler names. Example: get_clientEvents().OnRequestStart - returns the name of the RadAjax OnRequestStart client-side event handler. get_clientEvents().OnResponseEnd - returns the name of the RadAjax OnResponseEnd client-side event handler.
@method
@returns 
*/
get_clientEvents(): any;
        /**
Retuns a Boolean value indicating if the RadAjax ajax is enabled
@method
@returns 
*/
get_enableAJAX(): boolean;
        /**
Retuns a Boolean value indicating if the RadAjax history is enabled
@method
@returns 
*/
get_enableHistory(): boolean;
        /**
Gets the size of the RadAjax ajax requests queue
@method
@returns 
*/
get_requestQueueSize(): number;
        /**
Sets the RadAjax client-side events handler names.
@method
@param value - 
@returns 
*/
set_clientEvents(value: any): void;
        /**
Accepts a Boolean value indicating if the RadAjax ajax is enabled
@method
@param value - 
@returns 
*/
set_enableAJAX(value: boolean): void;
        /**
Accepts a Boolean value indicating if the RadAjax ajax is enabled
@method
@param value - 
@returns 
*/
set_enableHistory(value: boolean): void;
        /**
Sets the size of the RadAjax ajax requests queue
@method
@param value - 
@returns 
*/
set_requestQueueSize(value: number): void;
    }


    class RadAjaxLoadingPanel  extends Telerik.Web.UI.RadWebControl {
        /**
Clones the loading panel element passed as first parameter and the clone is used to be displayed over the element specified by the second parameter
@method
@param panelElement - The DOM element of the RadAjaxLoadingPanel
@param updatedElementID - The id of the updated element
@returns 
*/
cloneLoadingPanel(panelElement: any, updatedElementID: string): void;
        /**
Displays the loading panel element over the updated element
@method
@param loadingElement - The DOM element of the RadAjaxLoadingPanel
@param updatedElement - The DOM element of the updated control
@returns 
*/
displayLoadingElement(loadingElement: any, updatedElement: any): void;
        /**
Gets the specified as a parameter element position and dimensions. Example: getElementRactangle(element).top - returns the top position of the element; getElementRactangle(element).left - returns the left position of the element; getElementRactangle(element).width - returns the width of the element; getElementRactangle(element).height - returns the height of the element.
@method
@param element - The DOM element which rectangles should be returned
@returns 
*/
getElementRectangle(element: any): any;
        /**
Gets the time in milliseconds of the animation duration of the RadAjaxLoadingPanel
@method
@returns 
*/
get_animationDuration(): number;
        /**
Gets the initial delay time of the RadAjaxLoadingPanel
@method
@returns 
*/
get_initialDelayTime(): number;
        /**
Gets the value of the IsSticky property of the RadAjaxLoadingPanel
@method
@returns 
*/
get_isSticky(): boolean;
        /**
Gets the minimum time in milliseconds that the RadAjaxLoadingPanel will last
@method
@returns 
*/
get_minDisplayTime(): number;
        /**
Gets the Transparency value of the RadAjaxLoadingPanel in percentage (values 0-100)
@method
@returns 
*/
get_transparency(): number;
        /**
Gets the unique id of the RadAjaxLoadingPanel
@method
@returns 
*/
get_uniqueID(): string;
        /**
Gets the zIndex of the RadAjaxLoadingPanel
@method
@returns 
*/
get_zIndex(): number;
        /**
Hides the loading panel which is displayed over the element passed as a parameter
@method
@param updatedElementID - The id of the updated element
@returns 
*/
hide(updatedElementID: string): void;
        /**
Sets the time in milliseconds of the animation duration of the RadAjaxLoadingPanel
@method
@param value - 
@returns 
*/
set_animationDuration(value: number): void;
        /**
Sets the initial delay time of the RadAjaxLoadingPanel
@method
@param value - 
@returns 
*/
set_initialDelayTime(value: number): void;
        /**
Sets the value of the IsSticky property of the RadAjaxLoadingPanel
@method
@param value - 
@returns 
*/
set_isSticky(value: boolean): void;
        /**
Sets the minimum time in milliseconds that the RadAjaxLoadingPanel will last
@method
@param value - 
@returns 
*/
set_minDisplayTime(value: number): void;
        /**
Sets the Transparency value of the RadAjaxLoadingPanel in percentage (values 0-100)
@method
@param value - 
@returns 
*/
set_transparency(value: number): void;
        /**
Sets the unique id of the RadAjaxLoadingPanel
@method
@param value - 
@returns 
*/
set_uniqueID(value: string): void;
        /**
Sets the zIndex of the RadAjaxLoadingPanel
@method
@param value - 
@returns 
*/
set_zIndex(value: number): void;
        /**
Displays the loading panel over the element passed as a parameter
@method
@param updatedElementID - The id of the updated element
@returns 
*/
show(updatedElementID: string): void;
    }


    class RadAjaxManager  extends Telerik.Web.UI.RadAjaxControl {
        /**
Updates the html of the DOM element with the specified id
@method
@param id - The id of the DOM element to update
@param html - The html which is to be assigned to the specified DOM element
@returns 
*/
updateElement(id: string, html: string): void;
        /**
Sets the current ajax settings of the RadAjaxManager
@method
@param value - 
@returns 
*/
set_ajaxSettings(value: any): void;
        /**
true
@method
@param boolean - 
@returns 
*/
set_enableHistory(boolean: any): any;
        /**
True
@method
@returns 
*/
get_enableHistory(): any;
        /**
Sets the current update panels render mode of the RadAjaxManager
@method
@param value - 
@returns 
*/
set_updatePanelsRenderMode(value: number): void;
        /**
Shows loading panels over the updated controls from the ajax request initiator specified as a parameter
@method
@param id - The id of the ajax request initiator control
@param ajaxSettings - The RadAjaxManager ajax settings
@returns 
*/
showLoadingPanels(id: string, ajaxSettings: any): void;
        /**
Gets the current ajax settings of the RadAjaxManager
@method
@returns 
*/
get_ajaxSettings(): any;
        /**
true
@method
@param boolean - 
@returns 
*/
set_enableAJAX(boolean: any): any;
        /**
Gets the id of the default loading panel of the RadAjaxManager
@method
@returns 
*/
get_defaultLoadingPanelID(): string;
        /**
Gets the current update panels render mode of the RadAjaxManager
@method
@returns 
*/
get_updatePanelsRenderMode(): number;
        /**
True
@method
@returns 
*/
get_enableAJAX(): any;
        /**
Sets the id of the default loading panel of the RadAjaxManager
@method
@param value - 
@returns 
*/
set_defaultLoadingPanelID(value: string): void;
    }


    class RadAjaxPanel  extends Telerik.Web.UI.RadAjaxControl {
        /**
Gets the id of the loading panel of the RadAjaxPanel
@method
@returns 
*/
get_loadingPanelID(): string;
        /**
Allows browser history during AJAX requests. Pass True to allow browser history during AJAX requests.
@method
@param boolean - 
@returns 
*/
set_enableHistory(boolean: any): any;
        /**
Sets the DefaultLoadingPanelID
@method
@param string - 
@returns 
*/
set_defaultLoadingPanelID(string: any): any;
        /**
True if browser history is enabled during AJAX requests.
@method
@returns 
*/
get_enableHistory(): any;
        /**
Sets the array of objects representing the AjaxSettings.
@method
@param Array - 
@returns 
*/
set_ajaxSettings(Array: any): any;
        /**
Allows or blocks the request to be executed through AJAX. Pass True to allow AJAX, False to have the request fulfilled through a standard postback.
@method
@param boolean - 
@returns 
*/
set_enableAJAX(boolean: any): any;
        /**
Sets the id of the loading panel of the RadAjaxPanel
@method
@returns 
*/
set_loadingPanelID(): string;
    }


    class RadAjaxRequestEventArgs  extends Sys.EventArgs {
        /**
Retuns a Boolean value indicating if the RadAjax ajax is enabled
@method
@returns 
*/
get_enableAjax(): boolean;
        /**
Gets the string passed in the initial AJAX request.
@method
@returns 
*/
get_eventArgument(): string;
        /**
Gets the UniqueID of the element that had raised the request.
@method
@returns 
*/
get_eventTarget(): any;
        /**
Gets the instance of the client-side object that raised the AJAX request. You can iterate each of the settings and retrieve the initiating control id and yet another array of objects that represent updated controls.
@method
@returns 
*/
get_eventTargetElement(): any;
        /**
Accepts a Boolean value indicating if the RadAjax ajax is enabled
@method
@returns 
*/
set_enableAjax(): boolean;
    }


    class RadAsyncUpload  extends Telerik.Web.UI.RadWebControl {
        /**

@method
@returns 
*/
get_multipleFileSelectionEnabled(): void;
        /**

@method
@returns 
*/
get_dropZones(): void;
        /**
RadAsyncUpload
@method
@returns 
*/
get_initialFileInputsCount(): any;
        /**
RadAsyncUpload
@method
@returns 
*/
get_element(): HTMLElement;
        /**

@method
@returns 
*/
get_loadedModuleName(): void;
        /**
RadAsyncUpload
@method
@param integer - 
@returns 
*/
set_maxFileCount(integer: any): any;
        /**
When FileAPI module is used the method pauses the upload. Keep in mind that it stops right after the uploading chunk is uploaded.
@method
@returns 
*/
pauseUpload(): void;
        /**

@method
@returns 
*/
get_fileFilter(): void;
        /**
Saves the client state to the client state hidden field.
@method
@returns 
*/
saveClientState(): void;
        /**
When FileAPI module is used the method resumes the upload when its paused.
@method
@returns 
*/
resumeUpload(): void;
        /**
Deletes all file inputs.
@method
@returns 
*/
deleteAllFileInputs(): void;
        /**
Sets a boolean value indicating whether the RadAsyncUpload is enabled.
@method
@param enable - enable
@returns 
*/
set_enabled(enable: boolean): void;
        /**
RadAsyncUpload
@method
@param string - 
@returns 
*/
getID(string: any): any;
        /**

@method
@returns 
*/
get_handlerUrl(): void;
        /**

@method
@returns 
*/
set_dropZones(): void;
        /**
Gets a value indicating whether the file extension is valid.
@method
@returns True if the file extension is valid
*/
isExtensionValid(): boolean;
        /**

@method
@returns 
*/
getUploadedFiles(): void;
        /**

@method
@returns 
*/
set_allowedFileExtensions(): void;
        /**

@method
@returns 
*/
get_allowedFileExtensions(): void;
        /**
Deletes the file input at the the specified index
@method
@param index - The index to delete at
@param skipEvent - Specifies whether the onRowDeleting event should be skipped or not
@returns 
*/
deleteFileInputAt(index: number, skipEvent: boolean): void;
        /**

@method
@returns 
*/
getInvalidFiles(): void;
        /**
Adds a new row to the RadAsyncUpload control.
@method
@returns 
*/
addFileInput(): void;
        /**
Starts the upload when ManualUplaod is set and files are selected.
@method
@returns 
*/
startUpload(): void;
        /**
Gets a value indicating whether the RadAsyncUpload is enabled.
@method
@returns True if the RadAsyncUpload is enabled
*/
get_enabled(): boolean;
        /**
RadAsyncUpload
@method
@returns 
*/
get_maxFileCount(): any;
    }


    class RadAsyncUploadFileUploadingArguments  extends Sys.CancelEventArgs {
        /**

@method
@returns 
*/
get_fileName(): void;
        /**

@method
@returns 
*/
get_queryStringParams(): void;
        /**

@method
@returns 
*/
get_row(): void;
        /**

@method
@returns 
*/
set_queryStringParams(): void;
    }


    class RadAutoCompleteBox  extends Telerik.Web.UI.RadWebControl {
        /**
Starts tracking changes made to the RadAutoCompleteBox that will be preserved over post-backs.
@method
@returns 
*/
trackChanges(): void;
        /**
Creates a new entry.
@method
@param entryText - A string that contains the text of the entry.
@param entryValue - A string that contains the value of the entry.
@returns 
*/
createEntry(entryText: string, entryValue: string): void;
        /**
Disables the control.
@method
@returns 
*/
disable(): void;
        /**
Gets a value indicating whether OData Source is used.
@method
@returns 
*/
get_isUsingODataSource(): void;
        /**
Gets the empty message text.
@method
@returns 
*/
get_emptyMessage(): void;
        /**
Gets entries texts.
@method
@returns The entries texts.
*/
get_text(): string;
        /**
Enables the control.
@method
@returns 
*/
enable(): void;
        /**
Gets a the dropDown element.
@method
@returns The dropDown element.
*/
get_dropDownElement(): HTMLElement;
        /**
Returns the Entries collection for the RadAutoCompleteBox.
@method
@returns AutoCompleteBoxEntryCollection
*/
get_entries(): Telerik.Web.UI.AutoCompleteBoxEntryCollection;
        /**
Gets a the input element.
@method
@returns The input element.
*/
get_inputElement(): HTMLElement;
        /**
Gets the string used for requesting data
@method
@returns 
*/
get_searchString(): void;
        /**
Gets an object containing Web Service settings.
@method
@returns 
*/
get_webServiceSettings(): Telerik.Web.UI.WebServiceSettings;
        /**
Clears the data in control dropdown.
@method
@returns 
*/
clear(): void;
        /**
Gets the binding mode.
@method
@returns The binding mode type.
*/
get_bindingMode(): string;
        /**
Commits the changes made to the RadAutoCompleteBox that will be preserved over post-backs.
@method
@returns 
*/
commitChanges(): void;
        /**
Sends request to the server against the value passed as an argument.
@method
@param string - 
@returns 
*/
query(string: any): any;
    }


    class RadBaseTile   {
        /**
Clears both time interval set by the ShowInterval and CloseDelay properties of the peek template settings
@method
@returns 
*/
clearShowHideIntervals(): void;
        /**
Returns the interval after which the peek template is shown
@method
@returns Interval in milliseconds
*/
get_peekShowInterval(): number;
        /**
Returns the Name property of a tile
@method
@returns 
*/
get_name(): string;
        /**
Sets the titleData.imageUrl property and updates the title image in the bottom left corner of the tile.
@method
@param imageUrl - 
@returns 
*/
setTitleImageUrl(imageUrl: string): void;
        /**
Returns if the peek template should be hidden on mouse out
@method
@returns 
*/
get_hidePeekTemplateOnMouseOut(): boolean;
        /**
Sets the target window or frame in which to display the Web page content linked to when the NavigateUrl property when the control is clicked
@method
@param value - 
@returns 
*/
set_target(value: string): void;
        /**
Starts the time interval set by the ShowInterval property of the peek template settings
@method
@returns 
*/
startPeekShowInterval(): void;
        /**
Starts the time interval set by the CloseDelay property of the peek template settings
@method
@returns 
*/
startPeekHideInterval(): void;
        /**
Sets the URL of the page to navigate to, without posting the page back to the server
@method
@param value - 
@returns 
*/
set_navigateUrl(value: string): void;
        /**
Returns if the tile is selected
@method
@returns 
*/
get_selected(): boolean;
        /**
Clears the time interval set by the CloseDelay property of the peek template settings
@method
@returns 
*/
clearPeekHideInterval(): void;
        /**
Sets the interval after which the peek template is shown
@method
@param value - Interval in milliseconds
@returns 
*/
set_peekShowInterval(value: number): void;
        /**
Sets the Name property of a tile
@method
@param value - 
@returns 
*/
set_name(value: string): void;
        /**
Sets the titleData.text property and updates the title text displayed in the bottom left corner of the tile.
@method
@param text - 
@returns 
*/
setTitleText(text: string): void;
        /**
Returns the PeekAnimationManager responsible for showing / hiding the peek template
@method
@returns 
*/
get_peekAnimationManager(): Telerik.Web.UI.Tile.PeekAnimationManager;
        /**
Sets if the peek template should be shown on mouse over
@method
@returns 
*/
set_showPeekTemplateOnMouseOver(): boolean;
        /**
Sets the interval after which the peek template is hidden
@method
@param value - Interval in milliseconds
@returns 
*/
set_peekCloseDelay(value: number): void;
        /**
Returns the Id property of a tile.
@method
@returns 
*/
get_id(): string;
        /**
Sets the badgeData.imageUrl property and updates the image in the bottom right corner of the tile.
@method
@param imageUrl - 
@returns 
*/
setBadgeImageUrl(imageUrl: string): void;
        /**
Sets the badgeData.value property and updates the number displayed in the bottom right corner of the tile.
@method
@param value - 
@returns 
*/
setBadgeValue(value: number): void;
        /**
Sets the badgeData.predefinedType property and updates the image in the bottom right corner of the tile.
@method
@param predefindedType - 
@returns 
*/
setBadgePredefinedType(predefindedType: string): void;
        /**
Returns if the peek template should be shown on mouse over
@method
@returns 
*/
get_showPeekTemplateOnMouseOver(): boolean;
        /**
Sets the interval after which the peek template is hidden, the interval is in milliseconds.
@method
@returns 
*/
get_peekCloseDelay(): number;
        /**
Shows the peek template
@method
@returns 
*/
showPeekTemplate(): void;
        /**
Gets the URL of the page to navigate to, without posting the page back to the server
@method
@returns 
*/
get_navigateUrl(): string;
        /**
Clears the time interval set by the ShowInterval property of the peek template settings
@method
@returns 
*/
clearPeekShowInterval(): void;
        /**
Gets the target window or frame in which to display the Web page content linked to when the NavigateUrl property when the control is clicked
@method
@returns 
*/
get_target(): string;
        /**
Sets if the peek template should be hidden on mouse out
@method
@param value - 
@returns 
*/
set_hidePeekTemplateOnMouseOut(value: boolean): void;
        /**
Toggles the selection state of the tile
@method
@returns 
*/
toggleSelection(): void;
        /**
Sets the selected state of the tile
@method
@param value - 
@param triggerEvents - If false the selecting and selected client events are not fired.
@returns 
*/
set_selected(value: boolean, triggerEvents: boolean): void;
        /**
Hides the peek template
@method
@returns 
*/
hidePeekTemplate(): void;
        /**
Returns the name of the tile type
@method
@returns The name of the tile type
*/
get_tileType(): string;
        /**
Removes a handler for the selected tile client event.
*/
remove_selected(handler: Function): void;
        /**
Adds a handler for the clicking tile client event.
*/
add_clicking(handler: Function): void;
        /**
Adds a handler for the selected tile client event.
*/
add_selected(handler: Function): void;
        /**
Removes a handler for the selecting tile client event.
*/
remove_selecting(handler: Function): void;
        /**
Removes a handler for the init tile client event.
*/
remove_init(handler: Function): void;
        /**
Adds a handler for the init tile client event.
*/
add_init(handler: Function): void;
        /**
Removes a handler for the load tile client event.
*/
remove_load(handler: Function): void;
        /**
Adds a handler for the load tile client event.
*/
add_load(handler: Function): void;
        /**
Adds a handler for the selecting tile client event.
*/
add_selecting(handler: Function): void;
        /**
Removes a handler for the clicking tile client event.
*/
remove_clicking(handler: Function): void;
        /**
Removes a handler for the clicked tile client event.
*/
remove_clicked(handler: Function): void;
        /**
Adds a handler for the clicked tile client event.
*/
add_clicked(handler: Function): void;
    }


    class RadButton  extends Telerik.Web.UI.RadWebControl {
        /**
Gets a collection of RadButtonToggleState objects that belong to the RadButton control.
@method
@returns A collection of RadButtonToggleState objects that belong to the RadButton control.
*/
get_toggleStates(): any;
        /**
Gets a bool value indicating whether the button is visible.
@method
@returns 
*/
get_visible(): void;
        /**
Gets a bool value indicating whether the RadButton control automatically posts back to the server when clicked.
@method
@returns A bool value indicating whether the RadButton control automatically posts back to the server when clicked.
*/
get_autoPostBack(): boolean;
        /**
Sets a value, indicating whether the button control is in read-only mode.
@method
@param value - The new value for the ReadOnly property.
@returns 
*/
set_readOnly(value: boolean): void;
        /**
Gets a reference to the HTML element that holds the text of the RadButton control.
@method
@returns A reference to the HTML element that holds the text of the RadButton control.
*/
get_textElement(): HTMLElement;
        /**
Brings the focus to the RadButton control.
@method
@returns 
*/
focus(): void;
        /**
Sets the Value property of the RadButton control.
@method
@param value - The Value property of the RadButton control.
@returns 
*/
set_value(value: string): void;
        /**
Sets the URL to link to when the RadButton control is clicked.
@method
@param value - The URL to link to when the RadButton control is clicked.
@returns 
*/
set_navigateUrl(value: string): void;
        /**
Gets the name of ValidationGroup that the button is assigned to.
@method
@returns the name of ValidationGroup that the button is assigned to.
*/
get_validationGroup(): string;
        /**
Gets the height of the RadButton control.
@method
@returns The height of the RadButton control.
*/
get_height(): number;
        /**
Sets or sets a bool value indicating whether the RadButton control automatically posts back to the server when clicked.
@method
@param value - A bool value indicating whether the RadButton control automatically posts back to the server when clicked.
@returns 
*/
set_autoPostBack(value: boolean): void;
        /**
Gets the toggle type of the RadButton when used as a toggle button
@method
@returns 
*/
get_toggleType(): Telerik.Web.UI.ButtonToggleType;
        /**
Gets the currently selected ToggleState of the RadButton control when used as a custom toggle button.
@method
@returns The currently selected ToggleState of the RadButton control when used as a custom toggle button.
*/
get_selectedToggleState(): Telerik.Web.UI.RadButtonToggleState;
        /**
Gets the Cascading Style Sheet (CSS) class rendered by the RadButton control on the client.
@method
@returns The Cascading Style Sheet
*/
get_cssClass(): string;
        /**
Clears the checked state of the Radio buttons with the specified GroupName.
@method
@param uniqueGroupName - The GroupName of the RadButton controls
@returns 
*/
clearCheckedRadios(uniqueGroupName: string): void;
        /**
Gets a reference to the HTML element that holds the secondary icon.
@method
@returns A reference to the HTML element that holds the secondary icon.
*/
get_secondaryIconElement(): HTMLElement;
        /**
Gets a bool value indicating whether the RadButton control will be immediately disabled after the user has clicks it. (i.e. enables/disables "Single Click" functionality)
@method
@returns 
*/
get_singleClick(): void;
        /**
Gets the URL to link to when the RadButton control is clicked.
@method
@returns The URL to link to when the RadButton control is clicked.
*/
get_navigateUrl(): string;
        /**
Gets a bool value indicating whether the button is an image button
@method
@returns 
*/
IsImageButton(): void;
        /**
Gets the target window or frame in which to display the Web page content linked to when the RadButton control is clicked.
@method
@returns 
*/
get_target(): string;
        /**
Gets the unique, hierarchically qualified identifier for the RadButton control.
@method
@returns The unique
*/
get_uniqueID(): string;
        /**
Specifies whether the "Split Button" functionality is Enabled/Disabled.
@method
@returns 
*/
get_enableSplitButton(): boolean;
        /**
Returns a value, indicating whether the button control is enabled.
@method
@returns The value of the Enabled property.
*/
get_enabled(): boolean;
        /**
Enables the button and restores the button's text, after it has been disabled by a single click.
@method
@returns 
*/
enableAfterSingleClick(): void;
        /**
Sets the command name associated with the RadButton control that is passed to the Command event.
@method
@param value - The command name associated with the RadButton control that is passed to the Command event.
@returns 
*/
set_commandName(value: string): void;
        /**
Gets the command name associated with the RadButton control that is passed to the Command event.
@method
@returns The command name associated with the RadButton control that is passed to the Command event
*/
get_commandName(): string;
        /**
Sets whether the button is enabled.
@method
@param value - The new value for the Enabled property.
@returns 
*/
set_enabled(value: boolean): void;
        /**
Gets the text displayed in the RadButton control.
@method
@returns The text displayed in the RadButton control.
*/
get_text(): string;
        /**
Sets the index of the currently selected ToggleState of the RadButton control, when used as a custom toggle button.
@method
@param value - The index of the currently selected ToggleState of the RadButton control
@returns 
*/
set_selectedToggleStateIndex(value: number): void;
        /**
Gets an optional parameter passed to the Command event along with the associated CommandName.
@method
@returns An optional parameter passed to the Command event along with the associated CommandName.
*/
get_commandArgument(): string;
        /**
Sets the target window or frame in which to display the Web page content linked to when the RadButton control is clicked.
@method
@param value - The target window or frame in which to display the Web page content linked to when the RadButton control is clicked.
@returns 
*/
set_target(value: string): void;
        /**
Gets a bool value indicating whether the button is a submit button
@method
@returns 
*/
IsInputTypeSubmit(): void;
        /**
Executes programmatic button click.
@method
@param raiseClicking? - Bool value indicating whether the
@returns 
*/
click(raiseClicking?: boolean): void;
        /**
Gets the CSS class applied when the control is disabled.
@method
@returns The CSS class applied when the control is disabled.
*/
get_disabledCssClass(): string;
        /**
Sets the text displayed in the RadButton control.
@method
@param value - The text that will be displayed in the RadButton control.
@returns 
*/
set_text(value: string): void;
        /**
Gets the width of the RadButton control.
@method
@returns The width of the RadButton control.
*/
get_width(): number;
        /**
Sets a bool value indicating whether the RadButton control is checked.
@method
@param value - A bool value indicating whether the RadButton control is checked.
@returns 
*/
set_checked(value: boolean): void;
        /**
Gets the Value property of the RadButton control.
@method
@returns The Value property of the RadButton control.
*/
get_value(): string;
        /**
Gets the CSS class applied to the RadButton control when the control is pressed.
@method
@returns The CSS class applied to the RadButton control when the control is pressed.
*/
get_pressedCssClass(): string;
        /**
Gets a bool value indicating whether the RadButton control is checked.
@method
@returns A bool value
*/
get_checked(): boolean;
        /**
Sets the validation group to which RadButton should be assigned.
@method
@param value - The name of the validation group to which RadButton should be assigned.
@returns 
*/
set_validationGroup(value: string): void;
        /**
Shows/hides the button.
@method
@param value - A bool value indicating whether the RadButton control is visible or not.
@returns 
*/
set_visible(value: boolean): void;
        /**
Sets the text displayed when the mouse pointer hovers over the RadButton control.
@method
@param value - The text that will be displayed on hover.
@returns 
*/
set_toolTip(value: string): void;
        /**
Sets an optional parameter passed to the Command event along with the associated CommandName.
@method
@param value - An optional parameter passed to the Command event along with the associated CommandName.
@returns 
*/
set_commandArgument(value: string): void;
        /**
Gets the text displayed when the mouse pointer hovers over the RadButton control.
@method
@returns The text displayed when the mouse pointer hovers over the RadButton control.
*/
get_toolTip(): string;
        /**
Gets the CSS class applied to the RadButton control when the mouse pointer is over the control.
@method
@returns The CSS class applied to the RadButton control when the mouse pointer is over the control.
*/
get_hoveredCssClass(): string;
        /**
Gets the name of the group that the RadButton of ToggleType=Radio, belongs to.
@method
@returns The name of the group that the RadButton of ToggleType
*/
get_groupName(): string;
        /**
Gets the index of the currently selected ToggleState of the RadButton control, when used as a custom toggle button.
@method
@returns The index of the currently selected ToggleState of the RadButton control
*/
get_selectedToggleStateIndex(): number;
        /**
Returns a value, indicating whether the button control is in read-only mode.
@method
@returns A value
*/
get_readOnly(): boolean;
        /**
Gets a reference to the HTML element that holds the primary icon.
@method
@returns A reference to the HTML element that holds the primary icon.
*/
get_primaryIconElement(): HTMLElement;
        /**
Gets the text displayed in the RadButton control after the button is being clicked and disabled. (i.e. the text used for the "Single Click" functionality)
@method
@returns 
*/
get_singleClickText(): void;
        /**
Gets the type of the button.
@method
@returns 
*/
get_buttonType(): Telerik.Web.UI.RadButtonType;
        /**
The name of the javascript function called when the RadButton control is clicked.
*/
add_clicking(handler: Function): void;
        /**
The name of the javascript function called when the Checked property of the RadButton control is about to be changed.
*/
add_checkedChanging(handler: Function): void;
        /**
The name of the javascript function called when the SelectedToggleStateIndex property of the RadButton control is about to be changed.
*/
add_toggleStateChanging(handler: Function): void;
        /**
The name of the javascript function when the mouse leaves the control.
*/
add_mouseOut(handler: Function): void;
        /**
The name of the javascript function called when the mouse hovers over the control.
*/
add_mouseOver(handler: Function): void;
        /**
Removes a handler for the mouseOut event.
*/
remove_mouseOut(handler: Function): void;
        /**
Removes a handler for the checkedChanged event.
*/
remove_checkedChanged(handler: Function): void;
        /**
Removes a handler for the checkedChanging event.
*/
remove_checkedChanging(handler: Function): void;
        /**
Removes a handler for the toggleStateChanging event.
*/
remove_toggleStateChanging(handler: Function): void;
        /**
Removes a handler for the toggleStateChanged event.
*/
remove_toggleStateChanged(handler: Function): void;
        /**
Removes a handler for the mouseOver event.
*/
remove_mouseOver(handler: Function): void;
        /**
The name of the javascript function called when the RadButton control is clicked.
*/
add_clicked(handler: Function): void;
        /**
The name of the javascript function called when the control loads.
*/
add_load(handler: Function): void;
        /**
The name of the javascript function called after the Checked property of the RadButton control is changed.
*/
add_checkedChanged(handler: Function): void;
        /**
Removes a handler for the clicking event.
*/
remove_clicking(handler: Function): void;
        /**
Removes a handler for the clicked event
*/
remove_clicked(handler: Function): void;
        /**
The name of the javascript function called after the SelectedToggleStateIndex property of the RadButton control is changed.
*/
add_toggleStateChanged(handler: Function): void;
        /**
Removes a handler for the load event
*/
remove_load(handler: Function): void;
    }


    class RadButtonToggleState   {
        /**
Gets the CSS class applied to the RadButton control.
@method
@returns The CSS class applied to the RadButton control.
*/
get_cssClass(): string;
        /**
Gets the height of the RadButton control.
@method
@returns The height of the RadButton control.
*/
get_height(): number;
        /**
Gets the CSS class applied to the RadButton control when the mouse pointer is over the control.
@method
@returns The CSS class applied to the RadButton control when the mouse pointer is over the control.
*/
get_hoveredCssClass(): string;
        /**
Gets the location of an image to display in the RadButton control, when the mouse pointer is over the control.
@method
@returns The location of an image to display in the RadButton control
*/
get_hoveredImageUrl(): string;
        /**
Gets the location of an image to display in the RadButton control.
@method
@returns The location of an image to display in the RadButton control.
*/
get_imageUrl(): string;
        /**
Gets the 0-based index of the ToggleState object in the ToggleStates collection.
@method
@returns The 0
*/
get_index(): number;
        /**
Gets a bool value indicating how the iImage is used - i.e. as a background image or as an Image Button.
@method
@returns A bool value indicating how the iImage is used
*/
get_isBackgroundImage(): boolean;
        /**
Gets the CSS class applied to the RadButton control when the control is pressed.
@method
@returns The CSS class applied to the RadButton control when the control is pressed.
*/
get_pressedCssClass(): string;
        /**
Gets the location of an image to display in the RadButton control, when the control is pressed.
@method
@returns The location of an image to display in the RadButton control
*/
get_pressedImageUrl(): string;
        /**
Gets the URL to the image showed when the Primary Icon is hovered.
@method
@returns The URL to the image showed when the Primary Icon is hovered.
*/
get_primaryHoveredIconUrl(): string;
        /**
Gets the bottom edge of the Primary Icon, relative to the RadButton control's wrapper element.
@method
@returns the bottom edge of the Primary Icon
*/
get_primaryIconBottom(): number;
        /**
Gets the CSS class applied to the Primary Icon.
@method
@returns The CSS class applied to the Primary Icon.
*/
get_primaryIconCssClass(): string;
        /**
Gets the Height of the Primary Icon.
@method
@returns The Height of the Primary Icon.
*/
get_primaryIconHeight(): number;
        /**
Gets the left edge of the Primary Icon, relative to the RadButton control's wrapper element.
@method
@returns The left edge of the Primary Icon
*/
get_primaryIconLeft(): number;
        /**
Gets the right edge of the Primary Icon, relative to the RadButton control's wrapper element.
@method
@returns The right edge of the Primary Icon
*/
get_primaryIconRight(): number;
        /**
Gets the top edge of the Primary Icon, relative to the RadButton control's wrapper element.
@method
@returns The top edge of the Primary Icon
*/
get_primaryIconTop(): number;
        /**
Gets the URL to the image used as Primary Icon.
@method
@returns The URL to the image used as Primary Icon.
*/
get_primaryIconUrl(): string;
        /**
Gets the Width of the Primary Icon.
@method
@returns The Width of the Primary Icon.
*/
get_primaryIconWidth(): number;
        /**
Gets the URL to the image showed when the Primary Icon is pressed.
@method
@returns The URL to the image showed when the Primary Icon is pressed.
*/
get_primaryPressedIconUrl(): string;
        /**
Gets the URL to the image showed when the Secondary Icon is hovered.
@method
@returns The URL to the image showed when the Secondary Icon is hovered.
*/
get_secondaryHoveredIconUrl(): string;
        /**
Gets the bottom edge of the Secondary Icon, relative to the RadButton control's wrapper element.
@method
@returns The bottom edge of the Secondary Icon
*/
get_secondaryIconBottom(): number;
        /**
Gets the CSS class applied to the Secondary Icon.
@method
@returns The CSS class applied to the Secondary Icon.
*/
get_secondaryIconCssClass(): string;
        /**
Gets the Height of the Secondary Icon.
@method
@returns The Height of the Secondary Icon.
*/
get_secondaryIconHeight(): number;
        /**
Gets the left edge of the Secondary Icon, relative to the RadButton control's wrapper element.
@method
@returns The left edge of the Secondary Icon
*/
get_secondaryIconLeft(): number;
        /**
Gets the right edge of the Secondary Icon, relative to the RadButton control's wrapper element.
@method
@returns The right edge of the Secondary Icon
*/
get_secondaryIconRight(): number;
        /**
Gets the top edge of the Secondary Icon, relative to the RadButton control's wrapper element.
@method
@returns The top edge of the Secondary Icon
*/
get_secondaryIconTop(): number;
        /**
Gets the URL to the image used as Secondary Icon.
@method
@returns The URL to the image used as Secondary Icon.
*/
get_secondaryIconUrl(): string;
        /**
Gets the Width of the Secondary Icon.
@method
@returns The Width of the Secondary Icon.
*/
get_secondaryIconWidth(): number;
        /**
Gets the URL to the image showed when the Secondary Icon is pressed.
@method
@returns The URL to the image showed when the Secondary Icon is pressed.
*/
get_secondaryPressedIconUrl(): string;
        /**
Gets the text displayed in the RadButton control.
@method
@returns The text displayed in the RadButton control.
*/
get_text(): string;
        /**
Gets the Value property applied in the ToggleState object.
@method
@returns The Value property applied in the ToggleState object.
*/
get_value(): string;
        /**
Gets the width of the RadButton control.
@method
@returns The width of the RadButton control.
*/
get_width(): number;
    }


    class RadCalendar  extends Telerik.Web.UI.RadWebControl {
        /**
Returns the triplet that represents the maximum date that can be selected.
@method
@returns 
*/
GetRangeMaxDate(): any;
        /**
Returns the triplet that represents the minimum date that can be selected.
@method
@returns 
*/
GetRangeMinDate(): any;
        /**
Returns an array of triplets that represent the selected dates in the calendar.
@method
@returns 
*/
GetSelectedDates(): any;
        /**
Sets the maximum date that can be selected to the date that the array parameter represents.
@method
@param date - 
@returns 
*/
SetRangeMaxDate(date: any): void;
        /**
Sets the minimum date that can be selected to the date that the array parameter represents.
@method
@param date - 
@returns 
*/
SetRangeMinDate(date: any): void;
        /**
Returns the triplet for the date that is offset by the specified number of days from the current month. If the parameter is positive, the days are offset from the last day of the month. If the parameter is negative, the days are offset from the first day of the month.
@method
@param step - 
@returns 
*/
calculateDateFromStep(step: number): void;
        /**
Returns the value of the AutoPostBack property.
@method
@returns 
*/
get_autoPostBack(): boolean;
        /**
Returns whether the month/year navigation popup is enabled.
@method
@returns 
*/
get_calendarEnableMonthYearFastNavigation(): boolean;
        /**
Returns whether the navigation buttons appear on the title bar.
@method
@returns 
*/
get_calendarEnableNavigation(): boolean;
        /**
Returns the cell date format
@method
@returns 
*/
get_cellDayFormat(): string;
        /**
Returns the RadCalendar culture name.
@method
@returns 
*/
get_culture(): string;
        /**
Returns the separator string that will be put between start and end months in a multi view title.
@method
@returns 
*/
get_dateRangeSeparator(): string;
        /**
Get the format of the date that appears when the user hovers the mouse over a cell in the calendar.
@method
@returns 
*/
get_dayCellToolTipFormat(): string;
        /**
Returns a value indicating whether the Aria support is enabled.
@method
@returns 
*/
get_enableAriaSupport(): boolean;
        /**
Returns true if the calendar allows multiple dates to be selected.
@method
@returns 
*/
get_enableMultiSelect(): boolean;
        /**
Returns true if navigation animation is enabled.
@method
@returns 
*/
get_enableNavigationAnimation(): boolean;
        /**
Returns true if the repeatable days are enabled
@method
@returns 
*/
get_enableRepeatableDaysOnClient(): boolean;
        /**
Returns true if the control is enabled.
@method
@returns 
*/
get_enabled(): boolean;
        /**
Returns the number of months by which the view changes when the user clicks the fast navigation buttons.
@method
@returns 
*/
get_fastNavigationStep(): number;
        /**
Returns the triplet that represents the currently focused date. The focused Date is the date that determines which view the calendar displays.
@method
@returns 
*/
get_focusedDate(): any;
        /**
Returns a boolean value indicating whether the navigation controls are hidden.
@method
@returns 
*/
get_hideNavigationControls(): boolean;
        /**
Returns an array with the fast navigation settings. The settings are, in order, TodayButtonCaption, OkButtonCaption, CancelButtonCaption, DateIsOutOfRangeMessage, EnableTodayButtonSelection.
@method
@returns 
*/
get_monthYearNavigationSettings(): any;
        /**
Returns the number of columns when the calendar is in multi-view mode (the number of months in each row).
@method
@returns 
*/
get_multiViewColumns(): number;
        /**
Returns the number of rows when the calendar is in multi-view mode (the number of months in each column).
@method
@returns 
*/
get_multiViewRows(): number;
        /**
Returns 1 if the orientation is "RenderInRows", 2 if it is "RenderInColumns".
@method
@returns 
*/
get_orientation(): number;
        /**
Returns the current presentation type (Interactive - 1, Preview - 2)
@method
@returns 
*/
get_presentationType(): number;
        /**
Returns the triplet that represents the maximum date that can be selected.
@method
@returns 
*/
get_rangeMaxDate(): any;
        /**
Returns the triplet that represents the minimum date that can be selected.
@method
@returns 
*/
get_rangeMinDate(): any;
        /**
Returns last date form the selected range when when RadCalendar's range selection is enabled.
@method
@returns 
*/
get_rangeSelectionEndDate(): Date;
        /**
Returns first date form the selected range when when RadCalendar's range selection is enabled.
@method
@returns 
*/
get_rangeSelectionStartDat(): Date;
        /**
Returns an array of triplets that represent the selected dates in the calendar.
@method
@returns 
*/
get_selectedDates(): any;
        /**
Returns a value indicating whether the day cell tooltips should be shown.
@method
@returns 
*/
get_showDayCellToolTips(): boolean;
        /**
Returns true if the calendar displays days from months other than the focused month.
@method
@returns 
*/
get_showOtherMonthsDays(): boolean;
        /**
Returns the number of columns in each month view.
@method
@returns 
*/
get_singleViewColumns(): number;
        /**
Returns the number of rows in each month view.
@method
@returns 
*/
get_singleViewRows(): number;
        /**
Returns the name of the current skin
@method
@returns 
*/
get_skin(): string;
        /**
Returns an array (0-offset)containing information about the special days that are defined. Each element in the array is an array (1-offset) with the following elements (in order): a triplet for the date, four elements that are not used client-side, an indicator of the repeatable status of the special day, another unused element, the tool tip for the day, and array with the style settings for the special day.
@method
@returns 
*/
get_specialDaysArray(): any;
        /**
Returns an array that specifies the CSS classes, set for the predefined styles. For example: CalendarTableStyle - rcMainTable
@method
@returns 
*/
get_stylesHash(): any;
        /**
Returns the header (title) date format
@method
@returns 
*/
get_titleFormat(): string;
        /**
Returns whether the column selection is enabled.
@method
@returns 
*/
get_useColumnHeadersAsSelectors(): boolean;
        /**
Returns whether the row selection is enabled.
@method
@returns 
*/
get_useRowHeadersAsSelectors(): boolean;
        /**
Causes the calendar to switch to the view containing the specified date.
@method
@param date - 
@returns 
*/
navigateToDate(date: any): void;
        /**
Raises the calendarViewChanged event.
@method
@param handler - 
@returns 
*/
raise_calendarViewChanged(handler: Function): void;
        /**
Raises the calendarViewChanging event.
@method
@param handler - 
@returns 
*/
raise_calendarViewChanging(handler: Function): void;
        /**
Raises the columnHeaderClick event.
@method
@param handler - 
@returns 
*/
raise_columnHeaderClick(handler: Function): void;
        /**
Raises the dateClick event.
@method
@param handler - 
@returns 
*/
raise_dateClick(handler: Function): void;
        /**
Raises the dateSelected event.
@method
@param handler - 
@returns 
*/
raise_dateSelected(handler: Function): void;
        /**
Raises the dateSelecting event.
@method
@param handler - 
@returns 
*/
raise_dateSelecting(handler: Function): void;
        /**
Raises the dayRender event.
@method
@param handler - 
@returns 
*/
raise_dayRender(handler: Function): void;
        /**
Raises the init event.
@method
@param handler - 
@returns 
*/
raise_init(handler: Function): void;
        /**
Raises the load event.
@method
@param handler - 
@returns 
*/
raise_load(handler: Function): void;
        /**
Raises the rowHeaderClick event.
@method
@param handler - 
@returns 
*/
raise_rowHeaderClick(handler: Function): void;
        /**
Raises the viewSelectorClick event.
@method
@param handler - 
@returns 
*/
raise_viewSelectorClick(handler: Function): void;
        /**
Selects the specified date.
@method
@param date - The DateTime object which should be selected.
@param navigate - Boolean value that indicates whether the calendar should navigate to the specified date.
@returns 
*/
selectDate(date: Date, navigate: boolean): void;
        /**
Selects the set of dates in the first parameter, where each date is represented by triplet. If the second parameter is true, the calendar navigates to the view containing the newly selected dates.
@method
@param dates - 
@param navigate - 
@returns 
*/
selectDates(dates: any, navigate: boolean): void;
        /**
Sets the value of the AutoPostBack property.
@method
@param value - 
@returns 
*/
set_autoPostBack(value: boolean): void;
        /**
Sets whether the month/year navigation popup is enabled.
@method
@param value - 
@returns 
*/
set_calendarEnableMonthYearFastNavigation(value: boolean): void;
        /**
Returns whether the navigation buttons appear on the title bar. NOTE: Setting this property on the client has no effect.
@method
@param value - 
@returns 
*/
set_calendarEnableNavigation(value: boolean): void;
        /**
Sets the cell day format
@method
@param value - 
@returns 
*/
set_cellDayFormat(value: string): void;
        /**
Sets the separator string that will be put between start and end months in a multi view title.
@method
@param value - 
@returns 
*/
set_dateRangeSeparator(value: string): void;
        /**
Selects all dates between startDate and endDate, when RadCalendar's range selection is enabled.
@method
@param startDate - 
@param endDate - 
@returns 
*/
set_datesInRange(startDate: Date, endDate: Date): void;
        /**
Set the format of the date that appears when the user hovers the mouse over a cell in the calendar.
@method
@param value - 
@returns 
*/
set_dayCellToolTipFormat(value: string): void;
        /**
Sets whether the calendar allows multiple dates to be selected.
@method
@param value - 
@returns 
*/
set_enableMultiSelect(value: boolean): void;
        /**
If set to true, this causes the RadCalendar control to display animated effects when the user changes the current month using the navigation controls in the title bar:
@method
@param value - 
@returns 
*/
set_enableNavigationAnimation(value: boolean): void;
        /**
Enables/disabled the repeatable days
@method
@param value - 
@returns 
*/
set_enableRepeatableDaysOnClient(value: boolean): void;
        /**
Enables/disables the control
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the number of months by which the view changes when the user clicks the fast navigation buttons.
@method
@param value - 
@returns 
*/
set_fastNavigationStep(value: number): void;
        /**
Sets the focused Date - it determines which view the calendar displays.
@method
@param date - 
@returns 
*/
set_focusedDate(date: any): void;
        /**
Sets a value indicating whether the naviagation control should be visible
@method
@param value - 
@returns 
*/
set_hideNavigationControls(value: boolean): void;
        /**
Sets the fast navigation settings. The settings are, in order, TodayButtonCaption, OkButtonCaption, CancelButtonCaption, DateIsOutOfRangeMessage, EnableTodayButtonSelection. Changes you make to these settings have an effect only if you make them before the first time the month/year navigation popup is displayed.
@method
@param value - 
@returns 
*/
set_monthYearNavigationSettings(value: any): void;
        /**
Sets the number of columns when the calendar is in multi-view mode (the number of months in each row).
@method
@param value - 
@returns 
*/
set_multiViewColumns(value: number): void;
        /**
Sets the number of rows when the calendar is in multi-view mode (the number of months in each column).
@method
@param value - 
@returns 
*/
set_multiViewRows(value: number): void;
        /**
Sets the orientation (1 - RenderInRows, 2 - RenderInColumns)
@method
@param value - 
@returns 
*/
set_orientation(value: number): void;
        /**
Sets the current presentation type (Interactive - 1, Preview - 2)
@method
@param value - 
@returns 
*/
set_presentationType(value: number): void;
        /**
Sets the maximum date that can be selected to the date that the array parameter represents.
@method
@param date - 
@returns 
*/
set_rangeMaxDate(date: any): void;
        /**
Sets the minimum date that can be selected to the date that the array parameter represents.
@method
@param date - 
@returns 
*/
set_rangeMinDate(date: any): void;
        /**
Sets a value indication whether the day cell tooltips should be visible.
@method
@param value - 
@returns 
*/
set_showDayCellToolTips(value: boolean): void;
        /**
Sets whether the calendar displays days from months other than the focused month.
@method
@param value - 
@returns 
*/
set_showOtherMonthsDays(value: boolean): void;
        /**
Sets the number of columns in each month view.
@method
@param value - 
@returns 
*/
set_singleViewColumns(value: number): void;
        /**
Sets the number of rows in each month view.
@method
@param value - 
@returns 
*/
set_singleViewRows(value: number): void;
        /**
Changes the current skin
@method
@param value - 
@returns 
*/
set_skin(value: string): void;
        /**
Sets the special days. Each element in the array is an array (1-offset) with the following elements (in order): a triplet for the date, four elements that are not used client-side, an indicator of the repeatable status of the special day, another unused element, the tool tip for the day, and array with the style settings for the special day.
@method
@param value - 
@returns 
*/
set_specialDaysArray(value: any): void;
        /**
Sets the predefined RadCalendar styles.
@method
@param value - 
@returns 
*/
set_stylesHash(value: any): void;
        /**
Sets the headers (title) date format
@method
@param value - 
@returns 
*/
set_titleFormat(value: string): void;
        /**
Enables/disables the column selection
@method
@param value - 
@returns 
*/
set_useColumnHeadersAsSelectors(value: boolean): void;
        /**
Enables/disables the row selection
@method
@param value - 
@returns 
*/
set_useRowHeadersAsSelectors(value: boolean): void;
        /**
Un-selects the date represented by the parameter if it is currently selected.
@method
@param date - 
@returns 
*/
unselectDate(date: any): void;
        /**
Un-selects all the dates represented by triplets in the array if they are currently selected.
@method
@param dates - 
@returns 
*/
unselectDates(dates: any): void;
        /**
Adds a handler for the calendarViewChanged event.
*/
add_calendarViewChanged(handler: Function): void;
        /**
Adds a handler for the calendarViewChanging event.
*/
add_calendarViewChanging(handler: Function): void;
        /**
Adds a handler for the columnHeaderClick event.
*/
add_columnHeaderClick(handler: Function): void;
        /**
Adds a handler for the dateClick event.
*/
add_dateClick(handler: Function): void;
        /**
Adds a handler for the dateSelected event.
*/
add_dateSelected(handler: Function): void;
        /**
Adds a handler for the dateSelecting event.
*/
add_dateSelecting(handler: Function): void;
        /**
Adds a handler for the dayRender event.
*/
add_dayRender(handler: Function): void;
        /**
Adds a handler for the init event.
*/
add_init(handler: Function): void;
        /**
Adds a handler for the load event.
*/
add_load(handler: Function): void;
        /**
Adds a handler for the rowHeaderClick event.
*/
add_rowHeaderClick(handler: Function): void;
        /**
Adds a handler for the viewSelectorClick event.
*/
add_viewSelectorClick(handler: Function): void;
        /**
Removes a handler for the calendarViewChanged event.
*/
remove_calendarViewChanged(handler: Function): void;
        /**
Removes a handler for the calendarViewChanging event.
*/
remove_calendarViewChanging(handler: Function): void;
        /**
Removes a handler for the columnHeaderClick event.
*/
remove_columnHeaderClick(handler: Function): void;
        /**
Removes a handler for the dateClick event.
*/
remove_dateClick(handler: Function): void;
        /**
Removes a handler for the dateSelected event.
*/
remove_dateSelected(handler: Function): void;
        /**
Removes a handler for the dateSelecting event.
*/
remove_dateSelecting(handler: Function): void;
        /**
Removes a handler for the dayRender event.
*/
remove_dayRender(handler: Function): void;
        /**
Removes a handler for the init event.
*/
remove_init(handler: Function): void;
        /**
Removes a handler for the load event.
*/
remove_load(handler: Function): void;
        /**
Removes a handler for the rowHeaderClick event.
*/
remove_rowHeaderClick(handler: Function): void;
        /**
Removes a handler for the viewSelectorClick event.
*/
remove_viewSelectorClick(handler: Function): void;
    }


    class RadCaptcha  extends Telerik.Web.UI.RadWebControl {
    }


    class RadClientDataSource  extends Sys.Component {
        /**
Returns the data items which correspond to the current page, filter, sort and group configuration.
@method
@returns 
*/
view(): void;
        /**
Returns the data item at the specified index.
@method
@returns 
*/
getItemByIndex(): void;
        /**
Gets the RadClientDataSource.AllowBatchOperations value.
@method
@returns The RadClientDataSource.AllowBatchOperations value.
*/
get_allowBatchOperations(): boolean;
        /**
Removes the specified data item from the data source.
@method
@returns 
*/
remove(): void;
        /**
Gets the collection of Telerik.Web.UI.ClientDataSourceSortExpression in RadClientDataSource.
@method
@returns The collection of Telerik.Web.UI.ClientDataSource.SortExpression items which are part of the RadClientDataSource.
*/
get_sortExpressions(): Telerik.Web.UI.ClientDataSource.SortExpressionCollection;
        /**
Cancels any pending changes in the data source. Used with batch editing
@method
@returns 
*/
cancelChanges(): void;
        /**
Gets the JSON data of the RadClientDataSource
@method
@returns The data of the RadClientDataSource
*/
get_data(): any;
        /**
Gets the RadClientDataSource.EnableServerGrouping value.
@method
@returns The RadClientDataSource.EnableServerGrouping value.
*/
get_enableServerGrouping(): boolean;
        /**
Sets the RadClientDataSource.EnableServerSorting value.
@method
@returns The RadClientDataSource.EnableServerSorting value.
*/
set_enableServerSorting(): boolean;
        /**
Gets the RadClientDataSource.EnableServerSorting value.
@method
@returns The RadClientDataSource.EnableServerSorting value.
*/
get_enableServerSorting(): boolean;
        /**
Gets the total number of pages in the RadClientDataSource
@method
@returns The total number of pages in the RadClientDataSource.
*/
get_totalPagesCount(): number;
        /**
Sets the RadClientDataSource.EnableServerFiltering value.
@method
@returns The RadClientDataSource.EnableServerFiltering value.
*/
set_enableServerFiltering(): boolean;
        /**
Gets the kendoDataSource underlying widget.
@method
@returns The the kendoDataSource object.
*/
get_dataSourceObject(): any;
        /**
Checks if the data items have changed.
@method
@returns 
*/
hasChanges(): void;
        /**
Gets the RadClientDataSource.EnableServerPaging value.
@method
@returns The RadClientDataSource.EnableServerPaging value.
*/
get_enableServerPaging(): boolean;
        /**
Sets the RadClientDataSource.AllowBatchOperations value.
@method
@returns The RadClientDataSource.AllowBatchOperations value.
*/
set_allowBatchOperations(): boolean;
        /**
Sets the RadClientDataSource.EnableServerGrouping value.
@method
@returns The RadClientDataSource.EnableServerGrouping value.
*/
set_enableServerGrouping(): boolean;
        /**
Inserts a data item in the data source at the specified index.
@method
@param index - the index at which the item will be inserted
@returns 
*/
insert(index: number): void;
        /**
Sets the RadClientDataSource.AllowPaging value.
@method
@returns The RadClientDataSource.AllowPaging value.
*/
set_allowPaging(): boolean;
        /**
Sets the RadClientDataSource.EnableServerPaging value.
@method
@returns The RadClientDataSource.EnableServerPaging value.
*/
set_enableServerPaging(): boolean;
        /**
Sets the RadClientDataSource.PageSize value.
@method
@returns The RadClientDataSource.PageSize value.
*/
set_pageSize(): number;
        /**
Gets the RadClientDataSource.AllowPaging value.
@method
@returns The RadClientDataSource.AllowPaging value.
*/
get_allowPaging(): boolean;
        /**
Gets the data item with the specified model id.
@method
@returns 
*/
getDataItemById(): void;
        /**
Gets the total number of items in the RadClientDataSource
@method
@returns The total number of items in the RadClientDataSource.
*/
get_totalItemsCount(): number;
        /**
Gets the collection of Telerik.Web.UI.ClientDataSource.GroupExpression in RadClientDataSource.
@method
@returns The collection of Telerik.Web.UI.ClientDataSource.GroupExpression items which are part of the RadClientDataSource.
*/
get_groupExpressions(): Telerik.Web.UI.ClientDataSource.GroupExpressionCollection;
        /**
Gets the RadClientDataSource.EnableServerAggregates value.
@method
@returns The RadClientDataSource.EnableServerAggregates value.
*/
get_enableServerAggregates(): boolean;
        /**
Sets the RadClientDataSource.CurrentPageIndex value.
@method
@returns The RadClientDataSource.CurrentPageIndex value.
*/
set_currentPageIndex(): number;
        /**
A method to returned the calculated aggregate values of the RadClientDataSource
@method
@returns Returns the aggregated values of the RadClientDataSource
*/
aggregates(): any;
        /**
Parameters
@method
@param Description - 
@returns 
*/
Method(Description: any): void;
        /**
Sets the RadClientDataSource.EnableServerAggregates value.
@method
@returns The RadClientDataSource.EnableServerAggregates value.
*/
set_enableServerAggregates(): boolean;
        /**
updates the values of the items with the specified model id
@method
@param newValues - JSON formated values to update in the item
@returns 
*/
update(newValues: any): void;
        /**
Gets the collection of Telerik.Web.UI.ClientDataSourceAggregate in RadClientDataSource.
@method
@returns The collection of Telerik.Web.UI.ClientDataSourceAggregate items which are part of the RadClientDataSource.
*/
get_aggregates(): Telerik.Web.UI.ClientDataSource.AggregateCollection;
        /**
Method which return data from the web service after calling the select method from the transport settings
@method
@param callback - the callback function that will hold the returned data
@returns 
*/
fetch(callback: Function): void;
        /**
Gets the RadClientDataSource.PageSize value.
@method
@returns The RadClientDataSource.PageSize value.
*/
get_pageSize(): number;
        /**
Gets the RadClientDataSource.DataSource.WebServiceDataSourceSettings value.
@method
@returns The RadClientDataSource.DataSource.WebServiceDataSourceSettings value.
*/
get_transport(): Telerik.Web.UI.DataSourceSettings.WebServiceDataSourceSettings;
        /**
Gets the RadClientDataSource.CurrentPageIndex value.
@method
@returns The RadClientDataSource.CurrentPageIndex value.
*/
get_currentPageIndex(): number;
        /**
Persists any data item changes to the datasource. Calls the respective CRUd methods from the transport
@method
@returns 
*/
sync(): void;
        /**
Appends a data item to the data source.
@method
@param values - JSON formated values to insert as a new item
@returns 
*/
add(values: any): void;
        /**
Gets the RadClientDataSource.EnableServerFiltering value.
@method
@returns The RadClientDataSource.EnableServerFiltering value.
*/
get_enableServerFiltering(): boolean;
        /**
Gets the collection of Telerik.Web.UI.ClientDataSourceFilterExpression in RadClientDataSource.
@method
@returns The collection of Telerik.Web.UI.ClientDataSourceFilterExpression items which are part of the RadClientDataSource.
*/
get_filterExpressions(): Telerik.Web.UI.ClientDataSource.FilterExpressionCollection;
        /**
Sets the JSON data of the RadClientDataSource
@method
@returns 
*/
set_data(): void;
        /**
Gets the RadClientDataSource.Schema value.
@method
@returns The RadClientDataSource.Schema value.
*/
get_schema(): Telerik.Web.UI.ClientDataSourceSchema;
    }


    class RadCloudUpload  extends Telerik.Web.UI.RadWebControl {
        /**
Get the control's state.
@method
@returns 
*/
get_enabled(): void;
        /**
Get the control's localization.
@method
@returns 
*/
get_localization(): void;
        /**
Get the name of the loaded upload module.
@method
@returns 
*/
get_loadedModuleName(): void;
        /**
Set the control's state.
@method
@returns 
*/
set_enabled(): void;
        /**
Get the uploaded files.
@method
@returns 
*/
get_uploadedFiles(): void;
    }


    class RadColorPicker  extends Telerik.Web.UI.RadWebControl {
        /**
Returns the element of the color picker's palette
@method
@returns The element of the color picker
*/
getPaletteContainer(): any;
        /**
Gets the title, associated with the selected color of the color picker control
@method
@returns The title of the selected color
*/
get_selectedColorTitle(): string;
        /**
Hides the palette in case ShowIcon=true
@method
@returns 
*/
hidePalette(): void;
        /**
Gets a value indicating whether the ColorPicker popup will show in the visible viewport of the browser window
@method
@returns The current keep
*/
get_keepInScreenBounds(): boolean;
        /**
Sets a value indicating whether the colorpicker will create an overlay element for its palette, in case ShowIcon=true
@method
@param value - The new value for the Overlay property
@returns 
*/
set_overlay(value: boolean): void;
        /**
Returns the element that represents the button of the color picker, in case ShowIcon=true
@method
@returns The element of the color picker
*/
getIconContainer(): any;
        /**
Returns a value, indicating whether the color picker control is enabled
@method
@returns The current value of the Enabled property
*/
get_enabled(): boolean;
        /**
Shows the palette in case ShowIcon=true
@method
@returns 
*/
showPalette(): void;
        /**
Gets the selected color of the color picker control
@method
@returns The currently selected color
*/
get_selectedColor(): string;
        /**
Gets the value of the PaletteModes property of the color picker control
@method
@returns The current value of the PaletteModes property
*/
get_paletteModes(): Telerik.Web.UI.PaletteModes;
        /**
Gets a value indicating whether the color picker control will create an overlay element for its palette, in case ShowIcon=true
@method
@returns The current value of the Overlay property
*/
get_overlay(): boolean;
        /**
Returns a value indicating whether a palette mode is enabled for the color picker control
@method
@param paletteMode - The palette mode to check
@returns A value
*/
isModeEnabled(paletteMode: Telerik.Web.UI.PaletteModes): boolean;
        /**
Enables or disables the color picker control. This property is not part of the client state of the control and the new value will not be persisted after postback.
@method
@param value - The new value for the Enabled property
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets a value indicating whether the ColorPicker popup will show in the visible viewport of the browser window
@method
@param value - The new keep
@returns 
*/
set_keepInScreenBounds(value: boolean): void;
        /**
Sets the selected color of the color picker control
@method
@param value - The new value for the SelectedColor property
@param skipRefreshView - A value
@returns 
*/
set_selectedColor(value: string, skipRefreshView: boolean): void;
        /**
Adds a handler for the color changing event
*/
add_colorChanging(handler: Function): void;
        /**
Removes a handler for the color change event
*/
remove_colorChange(handler: Function): void;
        /**
Remove a handler from the ColorSelecting event
*/
remove_colorSelecting(handler: Function): void;
        /**
Adds a handler for the pop-up show event
*/
add_popUpShow(handler: Function): void;
        /**
Removes a handler for the color preview event
*/
remove_colorPreview(handler: Function): void;
        /**
Removes a handler for the pop-up show event
*/
remove_popUpShow(handler: Function): void;
        /**
Add a handler to the ColorSelecting event
*/
add_colorSelecting(handler: Function): void;
        /**
Add a handler to the loaded event
*/
add_loaded(handler: Function): void;
        /**
Remove a handler from the loaded event
*/
remove_loaded(handler: Function): void;
        /**
Adds a handler for the color change event
*/
add_colorChange(handler: Function): void;
        /**
Removes a handler for the color changing event
*/
remove_colorChanging(handler: Function): void;
        /**
Adds a handler for the color preview event
*/
add_colorPreview(handler: Function): void;
    }


    class RadComboBox  extends Telerik.Web.UI.ControlItemContainer {
        /**
Gets the DIV element of the RadComboBox drop down.
@method
@returns The DIV element of the RadComboBox drop down.
*/
get_dropDownElement(): HTMLElement;
        /**
Sets the Items collection for the RadComboBox.
@method
@param value - value
@returns 
*/
set_items(value: Telerik.Web.UI.RadComboBoxItemCollection): void;
        /**
Sets an object containing RadComboBox" drop down expand animation settings.
@method
@param value - value
@returns 
*/
set_expandAnimation(value: Telerik.Web.UI.AnimationSettings): void;
        /**
Highlights the first Item starting with the specified letter and positioned after the currently highlighted one. The method sets the text of the new Item to the input or appends it to the current text if an autocomplete separator is specified.
@method
@param letter - letter
@returns 
*/
highlightNextItem(letter: string): void;
        /**
Returns the first RadComboBoxItem object whose Value property equals the passed parameter.
@method
@param value - value
@returns RadComboBoxItem
*/
findItemByValue(value: string): Telerik.Web.UI.RadComboBoxItem;
        /**
Sets the MarkFirstMatch property.
@method
@param value - value
@returns 
*/
set_markFirstMatch(value: boolean): void;
        /**
Closes the drop down.
@method
@returns 
*/
hideDropDown(): void;
        /**
Commits the changes made to the RadComboBox that will be preserved over post-backs.
@method
@returns 
*/
commitChanges(): void;
        /**
Clears all items of the RadComboBox.
@method
@returns 
*/
clearItems(): void;
        /**
Sets the selected Index of the RadComboBox. The method does not actually select an Item.
@method
@param value - value
@returns 
*/
set_selectedIndex(value: number): void;
        /**
Initiates a load-on-demand callback request with the specified text, causing the ItemsRequested server event to fire or a request to be sent to a WebService. The second bool parameter instructs the combobox to append the new items (true) or clear items (false).
@method
@param text - text
@param appendItems - Indicates whether to append the received items to the current set of items.
@returns 
*/
requestItems(text: string, appendItems: boolean): void;
        /**
Enables the RadComboBox.
@method
@returns 
*/
enable(): void;
        /**
Returns the indices of all checked items
@method
@returns Returns array of Integers
*/
get_checkedIndices(): number[];
        /**
True
@method
@returns 
*/
get_enableTextSelection(): boolean;
        /**
Opens the drop down.
@method
@returns 
*/
showDropDown(): void;
        /**
Enables the control client-side event emitting. Events are enabled by default.
@method
@returns 
*/
enableEvents(): void;
        /**
Clears the selection.
@method
@returns 
*/
clearSelection(): void;
        /**
Gets the word after the last separator in the text of the RadComboBox. If a separator is not set, returns the text itself.
@method
@returns string
*/
get_lastWord(): string;
        /**
Gets the value of the RadComboBox.
@method
@returns The value of the RadComboBox.
*/
get_value(): string;
        /**
Gets a value indicating whether the Item caching is enabled (in Load On Demand scenario).
@method
@returns True if the Item caching is enabled
*/
get_enableItemCaching(): boolean;
        /**
Sets the EmptyMessage text of the RadComboBox;
@method
@param value - value
@returns 
*/
set_emptyMessage(value: string): void;
        /**
EnableTextSelection
@method
@param boolean - 
@returns 
*/
set_enableTextSelection(boolean: any): any;
        /**
Gets a value indicating whether the RadComboBox" AllowCustomText property is true or false.
@method
@returns true or false
*/
get_allowCustomText(): boolean;
        /**
Gets an array of the checked RadComboBoxItem objects.
@method
@returns All checked items
*/
get_checkedItems(): Telerik.Web.UI.RadComboBoxItem[][];
        /**
Gets a reference to the MoreResultsBox Message DOM element.
@method
@returns The MoreResultsBox Message DOM element.
*/
get_moreResultsBoxMessageElement(): HTMLElement;
        /**
Clears the items cache if EnableItemCaching is True.
@method
@returns 
*/
clearCache(): void;
        /**
Returns the first RadComboBoxItem object whose Text property equals the passed parameter.
@method
@param text - text
@returns RadComboBoxItem
*/
findFirstMatch(text: string): Telerik.Web.UI.RadComboBoxItem;
        /**
Checks if the current rendering mode is "Simple rendering mode".
@method
@returns True if simple rendering mode
*/
get_simpleRendering(): boolean;
        /**
Highlights the first Item which starts with the currently typed text if the MarkFirstMatch property is set to true.
@method
@returns 
*/
highlightMatches(): void;
        /**
Enables/disables item caching (when Load On Demand is enabled).
@method
@param value - value
@returns 
*/
set_enableItemCaching(value: boolean): void;
        /**
Gets the scrollable DIV element of the RadComboBox drop down (which contains the UL element with Items).
@method
@returns The scrollable DIV element of the RadComboBox drop down.
*/
get_childListElementWrapper(): HTMLElement;
        /**
Gets a value indicating whether the RadComboBox is enabled.
@method
@returns True if the RadComboBox is enabled
*/
get_enabled(): boolean;
        /**
Highlights the first Item starting with the specified letter and positioned before the currently highlighted one. The method sets the text of the new Item to the input or appends it to the current text if an autocomplete separator is specified.
@method
@returns 
*/
highlightPreviousItem(): void;
        /**
Gets a value indicating whether the RadComboBox causes validation.
@method
@returns true or false
*/
get_causesValidation(): boolean;
        /**
Checks if the IE mode is 8.
@method
@returns True if IE mode is 8
*/
isIEDocumentMode8(): boolean;
        /**
Returns an object containing the drop down's collapse animation settings.
@method
@returns 
*/
get_collapseAnimation(): Telerik.Web.UI.AnimationSettings;
        /**
Starts tracking changes made to the RadComboBox that will be preserved over post-backs.
@method
@returns 
*/
trackChanges(): void;
        /**
Returns the value of the RadComboBox" ClientItemTemplate property.
@method
@returns 
*/
get_clientTemplate(): void;
        /**
Selects a text range in the input specified by the startIndex and endIndex parameters.
@method
@returns 
*/
selectText(): void;
        /**
Gets a value indicating whether the RadComboBox is read-only.
@method
@returns True if the RadComboBox is read
*/
get_readOnly(): boolean;
        /**
Sets a boolean value indicating whether the RadComboBox causes validation.
@method
@param value - value
@returns 
*/
set_causesValidation(value: boolean): void;
        /**
Sets an object containing RadComboBox" drop down collapse animation settings.
@method
@param value - value
@returns 
*/
set_collapseAnimation(value: Telerik.Web.UI.AnimationSettings): void;
        /**
Highlights the first visible and enabled Item in the drop down.
@method
@returns 
*/
highlightFirstVisibleEnabledItem(): void;
        /**
True
@method
@returns 
*/
get_dropDownVisible(): boolean;
        /**
Sets the direction of the drop down slide animation. It can be Up or Down.
@method
@returns value
*/
set_slideDirection(): Telerik.Web.UI.jSlideDirection;
        /**
Gets a the RadComboBox table DOM element (containing the input and toggle image).
@method
@returns The RadComboBox table DOM element.
*/
get_tableElement(): HTMLElement;
        /**
Gets the currently selected Item.
@method
@returns RadComboBoxItem
*/
get_selectedItem(): Telerik.Web.UI.RadComboBoxItem;
        /**
Gets the MoreResultsBox DOM element.
@method
@returns The MoreResultsBox DOM element.
*/
get_moreResultsBoxElement(): HTMLElement;
        /**
Filters Items by the passed text argument. The filter criteria is specified by the Filter property.
@method
@param text - text
@returns 
*/
highlightAllMatches(text: string): void;
        /**
Returns the collection of arbitrary attributes.
@method
@returns The attribute collection.
*/
get_attributes(): Telerik.Web.UI.AttributeCollection;
        /**
showDropDown
@method
@param Boolean - 
@returns 
*/
set_closeDropDownOnBlur(Boolean: boolean): any;
        /**
Gets the direction of the drop down slide animation.
@method
@returns The direction of the dropdown slide animation
*/
get_slideDirection(): Telerik.Web.UI.jSlideDirection;
        /**
Returns the word after the last autocomplete separator of the RadComboBox in the passed text argument.
@method
@param text - text
@returns string
*/
getLastWord(text: string): string;
        /**
Gets a value indicating whether templated Items should be highlighted. (False by default.)
@method
@returns True if the templated Items are highlighted
*/
get_highlightTemplatedItems(): boolean;
        /**
Returns the first RadComboBoxItem object whose;Text property equals to the passed parameter.
@method
@param text - text
@returns 
*/
findItemByText(text: string): Telerik.Web.UI.RadComboBoxItem;
        /**
Gets the text which has been rendered from the server.
@method
@returns The text of the RadComboBox rendered from the server.
*/
get_originalText(): string;
        /**
Gets the currently highlighted item.
@method
@returns 
*/
get_highlightedItem(): Telerik.Web.UI.RadComboBoxItem;
        /**
Sets the selected Item.
@method
@param value - value
@returns 
*/
set_selectedItem(value: Telerik.Web.UI.RadComboBoxItem): void;
        /**
Gets the EmptyMessage text of the RadComboBox.
@method
@returns string
*/
get_emptyMessage(): string;
        /**
RadComboBox
@method
@returns 
*/
get_id(): any;
        /**
Enables the control client-side event emitting. Events are enabled by default.
@method
@returns 
*/
disableEvents(): void;
        /**
Gets an object containing Web Service settings.
@method
@returns 
*/
get_webServiceSettings(): Telerik.Web.UI.WebServiceSettings;
        /**
Sets the value of RadComboBox.
@method
@param value - value
@returns 
*/
set_value(value: string): void;
        /**
Gets the UL element of the RadComboBox drop down. This element contains the Items of the RadComboBox.
@method
@returns The UL element of the RadComboBox.
*/
get_childListElement(): HTMLElement;
        /**
Gets the index of the currently selected Item.
@method
@returns The index of the currently selected Item.
*/
get_selectedIndex(): number;
        /**
Use it in this scenario: Ajaxified control in ItemTemplate does a full postback.
@method
@returns 
*/
attachDropDown(): void;
        /**
Check if the RadComboBox has instantiated template.
@method
@returns 
*/
get_isTemplated(): boolean;
        /**
Sets a boolean value indicating whether templated Items should be highlighted.
@method
@param value - value
@returns 
*/
set_highlightTemplatedItems(value: boolean): void;
        /**
Gets a the input DOM element.
@method
@returns The input DOM element.
*/
get_inputDomElement(): HTMLElement;
        /**
Gets the DomElement of the DropDown in simple rendering mode.
@method
@returns The DOM element of the DropDown.
*/
get_selectElement(): HTMLElement;
        /**
Gets the text in the input field.
@method
@returns The text in the input field.
*/
get_text(): string;
        /**
Returns all visible Items.
@method
@returns An array containing all visible Items.
*/
get_visibleItems(): Telerik.Web.UI.RadComboBoxItem[][];
        /**
Toggles the drop down visibility.
@method
@returns 
*/
toggleDropDown(): void;
        /**
Sets all items visible / invisible
@method
@param value - value
@returns 
*/
setAllItemsVisible(value: boolean): void;
        /**
Saves the client state to the client state hidden field.
@method
@returns 
*/
saveClientState(): void;
        /**
True
@method
@returns 
*/
get_changeText(): boolean;
        /**
Returns the dom element for the check all checkbox.
@method
@returns 
*/
get_checkAllCheckBoxDivElement(): HTMLElement;
        /**
ChangeTextOnKeyBoardNavigation
@method
@param Boolean - 
@returns 
*/
set_changeText(Boolean: boolean): any;
        /**
Sets a boolean value indicating whether the RadComboBox is enabled.
@method
@param value - value
@returns 
*/
set_enabled(value: boolean): void;
        /**
Gets a the image DOM element (drop down toggle image).
@method
@returns The image DOM element.
*/
get_imageDomElement(): HTMLElement;
        /**
True if MarkFirstMatch is true; false otherwise.
@method
@returns boolean
*/
get_markFirstMatch(): boolean;
        /**
Sets an object containing Web Service settings.
@method
@param value - value
@returns 
*/
set_webServiceSettings(value: Telerik.Web.UI.WebServiceSettings): void;
        /**
Disables the RadComboBox.
@method
@returns 
*/
disable(): void;
        /**
Returns the Items collection for the RadComboBox.
@method
@returns RadComboBoxItemCollection
*/
get_items(): Telerik.Web.UI.RadComboBoxItemCollection;
        /**
Repaints RadComboBox" "fake input" (IE8 only) and Label.
@method
@returns 
*/
repaint(): void;
        /**
Sets the value of the RadComboBox" ClientItemTemplate property.
@method
@param value - value
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Enables the "CheckAll" checkbox, when multiple selection is enabled.
@method
@returns 
*/
enableCheckAllCheckBox(): void;
        /**
Returns an object containing the drop down's expand animation settings.
@method
@returns 
*/
get_expandAnimation(): Telerik.Web.UI.AnimationSettings;
        /**
Sets the text of the input field to the value of the specified parameter.
@method
@param value - value
@returns 
*/
set_text(value: string): void;
        /**
Sets the AllowCustomText property.
@method
@param value - value
@returns 
*/
set_allowCustomText(value: boolean): void;
    }


    class RadComboBoxItem  extends Telerik.Web.UI.ControlItem {
        /**
Evaluates the template against the RadComboBox" data item and applies it.
@method
@returns 
*/
bindTemplate(): void;
        /**
Checks the item
@method
@returns 
*/
check(): void;
        /**
Disables the Item.
@method
@returns 
*/
disable(): void;
        /**
Enables the Item.
@method
@returns 
*/
enable(): void;
        /**
Searches the RadComboBoxItem for a client control with the specified id parameter.
@method
@param id - The id of the control to search for.
@returns 
*/
findControl(id: string): void;
        /**
Gets the arbitrary attributes collection
@method
@returns The arbitrary attributes collection
*/
get_attributes(): Telerik.Web.UI.AttributeCollection;
        /**
Gets the DOM Element of the checkbox.
@method
@returns DOM Element for the checkbox.
*/
get_checkBoxElement(): HTMLElement;
        /**
Gets the checked state of a RadComboBoxItem. The RadComboBoxItem is checked if get_checked() returns true.
@method
@returns 
*/
get_checked(): boolean;
        /**
Returns the value of the RadComboBoxItem's ClientTemplate property.
@method
@returns 
*/
get_clientTemplate(): void;
        /**
Gets the parent RadComboBox control.
@method
@returns RadComboBox
*/
get_comboBox(): Telerik.Web.UI.RadComboBox;
        /**
Returns the full path to the image of a disabled Item.
@method
@returns string
*/
get_disabledImageUrl(): string;
        /**
Gets he DOM element for the RadComboBoxItem.
@method
@returns The DOM element for the RadComboBoxItem.
*/
get_element(): HTMLElement;
        /**
Gets a value indicating whether the RadComboBoxItem is enabled or disabled.
@method
@returns Value indicating whether the RadComboBoxItem is enabled or disabled.
*/
get_enabled(): boolean;
        /**
Gets a value indicating whether the Item is highlighted. To highlight an Item use the highlight method.
@method
@returns boolean
*/
get_highlighted(): boolean;
        /**
Get the image DOM element of the Item.
@method
@returns The Item image DOM element.
*/
get_imageElement(): HTMLElement;
        /**
Returns the full path to the Item's image.
@method
@returns string
*/
get_imageUrl(): string;
        /**
Gets the RadComboBoxItem's index inside the RadComboBoxItemCollection.
@method
@returns The index of the RadComboBoxItem.
*/
get_index(): number;
        /**
Gets a value indicating whether the RadComboBoxItem is the first item in the RadComboBoxItemCollection
@method
@returns Value indicating whether the RadComboBoxItem is the first item in the RadComboBoxItemCollection
*/
get_isFirst(): boolean;
        /**
Gets a value indicating whether the RadComboBoxItem is the last item in the RadComboBoxItemCollection.
@method
@returns Value indicating whether the RadComboBoxItem is the last item in the RadComboBoxItemCollection.
*/
get_isLast(): boolean;
        /**
Gets a value indicating whether the Item is a Separator.
@method
@returns boolean
*/
get_isSeparator(): boolean;
        /**
The RadComboBoxItem's parent.
@method
@returns Gets the RadComboBoxItem
*/
get_parent(): HTMLElement;
        /**
Gets a value indicating whether the Item is selected.
@method
@returns boolean
*/
get_selected(): boolean;
        /**
Gets the text of the Item.
@method
@returns string
*/
get_text(): string;
        /**
Gets the DOM element containing the text of the Item.
@method
@returns The DOM element containing the text of the Item.
*/
get_textElement(): HTMLElement;
        /**
Gets the value of the Item.
@method
@returns string
*/
get_value(): string;
        /**
Gets a value indicating whether the RadComboBoxItem is visible or not.
@method
@returns Value indicating whether the RadComboBoxItem is visible or not.
*/
get_visible(): boolean;
        /**
Makes the Item invisible, same as set_visible(false).
@method
@returns 
*/
hide(): void;
        /**
Highlights the Item.
@method
@returns 
*/
highlight(): void;
        /**
Highlights the current RadComboBoxItem.
@method
@returns 
*/
highlightText(): void;
        /**
Gets the next Item.
@method
@returns RadComboBoxItem
*/
nextItem(): Telerik.Web.UI.RadComboBoxItem;
        /**
Scrolls the Item into view (if is currently not visible).
@method
@returns 
*/
scrollIntoView(): void;
        /**
Scrolls the Item on the top of the drop down list.
@method
@returns 
*/
scrollOnTop(): void;
        /**
Selects the Item.
@method
@returns 
*/
select(): void;
        /**
Marks or unmarks the checkbox for a RadComboBoxItem.
@method
@param value - Boolean
@returns 
*/
set_checked(value: boolean): void;
        /**
Sets the value of the RadComboBoxItem's ClientTemplate property.
@method
@param value - value
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Sets the DisabledImageUrl property of the Item.
@method
@param value - value
@returns 
*/
set_disabledImageUrl(value: string): void;
        /**
Sets the RadComboBoxItem's DOM element
@method
@param value - DOM element
@returns 
*/
set_element(value: HTMLElement): void;
        /**
Sets a value indicating whether the Item is enabled and updates its ImageUrl.
@method
@param value - value
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the ImageUrl property of the Item.
@method
@param value - value
@returns 
*/
set_imageUrl(value: string): void;
        /**
Sets a value indicating whether the Item is a Separator.
@method
@param value - value
@returns 
*/
set_isSeparator(value: boolean): void;
        /**
Sets the RadComboBoxItem's parent.
@method
@param value - DOM element.
@returns 
*/
set_parent(value: HTMLElement): void;
        /**
Sets a value indicating whether the Item is selected.
@method
@param value - value
@returns 
*/
set_selected(value: boolean): void;
        /**
Sets the RadComboBoxItem's text.
@method
@param text - The new RadComboBoxItem text.
@returns 
*/
set_text(text: string): void;
        /**

@method
@param value - The new RadComboBoxItem text.
@returns 
*/
set_value(value: string): void;
        /**
Sets a value indicating whether the Item is visible.
@method
@param value - value
@returns 
*/
set_visible(value: boolean): void;
        /**
Makes the Item visible, same as set_visible(true).
@method
@returns 
*/
show(): void;
        /**
The JSON representation of the RadComboBoxItem.
@method
@returns Returns the JSON representation of the RadComboBoxItem.
*/
toJsonString(): string;
        /**
Unhighlights the Item.
@method
@returns 
*/
unHighlight(): void;
        /**
Unchecks the item
@method
@returns 
*/
uncheck(): void;
    }


    class RadComboBoxItemCollection  extends Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.RadComboBoxItem> {
        /**
Clears the Items collection of RadComboBox.
@method
@returns 
*/
clear(): void;
        /**
Iterates through the Items collection
@method
@param lambda - The function to execute on each iteration.
@returns 
*/
forEach(lambda: Function): void;
        /**
Returns the number of Items in the collection.
@method
@returns The number of the Items.
*/
get_count(): number;
        /**
Inserts an item into the Items collection at the position specified by the first (index) parameter.
@method
@param index - The index to insert at.
@param item - The Item to insert.
@returns 
*/
insert(index: number, item: Telerik.Web.UI.RadComboBoxItem): void;
        /**
Removes the RadComboBoxItem at the specified index.
@method
@param index - The index to remove at.
@returns 
*/
removeAt(index: number): void;
        /**
Adds an item to the Items collection.
@method
@param item - The item that will ba added.
@returns 
*/
add(item: Telerik.Web.UI.RadComboBoxItem): void;
        /**
Gets the Item from the Items collection residing at the index specified by the parameter.
@method
@param index - The index of the Item that should be returned.
@returns item Telerik.Web.UI.RadComboBoxItem
*/
getItem(index: number): Telerik.Web.UI.RadComboBoxItem;
    }


    class RadContentTemplateTile  extends Telerik.Web.UI.RadBaseTile {
    }


    class RadDataPager  extends Telerik.Web.UI.RadWebControl {
        /**
Gets the unique id of RadDataPager's container.
@method
@returns 
*/
get_uniqueID(): string;
        /**
Example: fireCommand("PageSizeChange", 10)
@method
@param RadDataPager - 
@returns 
*/
PageSizeChange(RadDataPager: Telerik.Web.UI.RadDataPager): any;
        /**
argument details
@method
@param Typeofobjectusedtoinvokethemethod - 
@returns 
*/
CommandName(Typeofobjectusedtoinvokethemethod: any): any;
        /**
Gets the total number of records that are displayed in the underlying data source.
@method
@returns 
*/
get_totalRowCount(): number;
        /**
Fires command with command name and command argument specified as arguments
@method
@param commandName - The name of the command that will be executed. Possible values are listed here
@param commandArgument - The command argument with which the command will be executed. Possible values are listed here
@returns 
*/
fireCommand(commandName: string, commandArgument: string): void;
        /**
Sets the page size for the RadDataPager control.
@method
@param size - The page size that will be set to the RadDataPager control.
@returns 
*/
set_pageSize(size: number): void;
        /**
Gets the index of the first record that is displayed on a page of data.
@method
@returns 
*/
get_startRowIndex(): number;
        /**
Sets the current page index for the RadDataPager control.
@method
@param index - The 0
@returns 
*/
set_currentPageIndex(index: number): void;
        /**
Gets the current page index for the RadDataPager control.
@method
@returns 
*/
get_currentPageIndex(): number;
        /**
Gets the page count for the RadDatePager control.
@method
@returns 
*/
get_pageCount(): number;
        /**
Gets the page size for the RadDataPager control.
@method
@returns 
*/
get_pageSize(): number;
        /**
string argument: "First", "Next", "Prev", "Last", numeric values as string presentation.
@method
@param RadDataPager - 
@returns 
*/
Page(RadDataPager: Telerik.Web.UI.RadDataPager): any;
    }


    class RadDateInput  extends Telerik.Web.UI.RadInputControl {
        /**
Indicating whether RadInputControl loses focus
@method
@returns 
*/
blur(): void;
        /**
Clears the client instance of RadInputControl
@method
@returns 
*/
clear(): void;
        /**
Disables the client instance of RadInputControl
@method
@returns 
*/
disable(): void;
        /**
Enables the client instance of RadInputControl
@method
@returns 
*/
enable(): void;
        /**
Indicating whether RadInputControl enter focus
@method
@returns 
*/
focus(): void;
        /**
Returns the value of the AutoPostBack property
@method
@returns 
*/
get_autoPostBack(): boolean;
        /**
Returns the current position of the caret.
@method
@returns 
*/
get_caretPosition(): number;
        /**
Returns the format string for the control when it has focus
@method
@returns 
*/
get_dateFormat(): string;
        /**
Returns the Date Format Info object, which includes the settings used to parse date values
@method
@returns 
*/
get_dateFormatInfo(): Telerik.Web.UI.DateParsing.DateTimeFormatInfo;
        /**
Returns the format string for the control when it does not have focus
@method
@returns 
*/
get_displayDateFormat(): string;
        /**
Gets the value of RadInputControl as it is formatted when the input does not have focus
@method
@returns 
*/
get_displayValue(): string;
        /**
Gets the value of RadInputControl as it is formatted when the input has focus
@method
@returns 
*/
get_editValue(): string;
        /**
Returns the message that appears when the input value is an empty string
@method
@returns 
*/
get_emptyMessage(): string;
        /**
Returns true if the input is enabled
@method
@returns 
*/
get_enabled(): boolean;
        /**
Returns the Increment Settings object, which you can use to change the way the control responds to arrow keys and the mouse wheel
@method
@returns 
*/
get_incrementSettings(): any;
        /**
Gets the invalid style duration of RadInputControl
@method
@returns 
*/
get_invalidStyleDuration(): number;
        /**
Returns the latest valid date value
@method
@returns 
*/
get_maxDate(): Date;
        /**
Returns the latest valid date value as a string
@method
@returns 
*/
get_maxDateStr(): string;
        /**
Returns the earliest valid date value
@method
@returns 
*/
get_minDate(): Date;
        /**
Returns the earliest valid date value as a string
@method
@returns 
*/
get_minDateStr(): string;
        /**
Gets the selected date of the RadDateInput control
@method
@returns 
*/
get_selectedDate(): Date;
        /**
Returns the value of the SelectionOnFocus property
@method
@returns 
*/
get_selectionOnFocus(): Telerik.Web.UI.SelectionOnFocus;
        /**
Returns true if the input has an associated image button
@method
@returns 
*/
get_showButton(): boolean;
        /**
Returns the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded
@method
@returns 
*/
get_styles(): any;
        /**
Gets the string that the user typed into the input
@method
@returns 
*/
get_textBoxValue(): string;
        /**
Returns the value of the text box
@method
@returns 
*/
get_value(): string;
        /**
Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element
@method
@returns 
*/
get_visible(): boolean;
        /**
Gets the DOM element for the DIV wrapper element
@method
@returns 
*/
get_wrapperElement(): HTMLElement;
        /**
Returns true if the value of the RadInputControl is empty
@method
@returns 
*/
isEmpty(): void;
        /**
Returns true if the value of the RadInputControl is multi line
@method
@returns 
*/
isMultiLine(): void;
        /**
Returns true if the value of the RadInputControl is a negative number
@method
@returns 
*/
isNegative(): void;
        /**
Returns true if the value of the RadInputControl is read only
@method
@returns 
*/
isReadOnly(): void;
        /**
Parses a string using the DateFormatInfo object and returns the resulting date
@method
@param value - 
@param baseDate - 
@returns 
*/
parseDate(value: string, baseDate: Date): void;
        /**
Raises the postback event of RadInputControl
@method
@returns 
*/
raisePostBackEvent(): void;
        /**
Raises the blur event
@method
@param args - 
@returns 
*/
raise_blur(args: Sys.EventArgs): void;
        /**
Raises the buttonClick event
@method
@param args - 
@returns 
*/
raise_buttonClick(args: Sys.EventArgs): void;
        /**
Raises the handler for the mouseOver event
@method
@param args - 
@returns 
*/
raise_disable(args: Sys.EventArgs): void;
        /**
Raises the enable event
@method
@param args - 
@returns 
*/
raise_enable(args: Sys.EventArgs): void;
        /**
Raises the enumerationChanged event
@method
@param args - 
@returns 
*/
raise_enumerationChanged(args: Sys.EventArgs): void;
        /**
Raises the error event
@method
@param args - 
@returns 
*/
raise_error(args: Sys.EventArgs): void;
        /**
Raises the focus event
@method
@param args - 
@returns 
*/
raise_focus(args: Sys.EventArgs): void;
        /**
Raises the keyPress event
@method
@param args - 
@returns 
*/
raise_keyPress(args: Sys.EventArgs): void;
        /**
Raises the load event
@method
@param args - 
@returns 
*/
raise_load(args: Sys.EventArgs): void;
        /**
Raises the mouseOut event
@method
@param args - 
@returns 
*/
raise_mouseOut(args: Sys.EventArgs): void;
        /**
Raises the mouseOver event
@method
@param args - 
@returns 
*/
raise_mouseOver(args: Sys.EventArgs): void;
        /**
Raises the moveDown event
@method
@param args - 
@returns 
*/
raise_moveDown(args: Sys.EventArgs): void;
        /**
Raises the moveUp event
@method
@param args - 
@returns 
*/
raise_moveUp(args: Sys.EventArgs): void;
        /**
Raises the valueChanged event
@method
@param newValue - 
@param oldValue - 
@returns 
*/
raise_valueChanged(newValue: any, oldValue: any): void;
        /**
Raises the valueChanging event
@method
@param args - 
@returns 
*/
raise_valueChanging(args: Sys.EventArgs): void;
        /**
Redraws the client side object on the client
@method
@returns 
*/
repaint(): void;
        /**
Saves the client state of the RadDateInput control
@method
@returns 
*/
saveClientState(): void;
        /**
Selects all text in the RadInputControl
@method
@returns 
*/
selectAllText(): void;
        /**
Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range
@method
@param start - 
@param end - 
@returns 
*/
selectText(start: number, end: number): void;
        /**
Enables or disables postbacks when the user changes the text in the input
@method
@param value - 
@returns 
*/
set_autoPostBack(value: boolean): void;
        /**
Sets the position of the caret
@method
@param position - 
@returns 
*/
set_caretPosition(position: number): void;
        /**
Sets the format string for the control when it has focus
@method
@param value - 
@returns 
*/
set_dateFormat(value: string): void;
        /**
Sets the Date Format Info object, which includes the settings used to parse date values
@method
@param value - 
@returns 
*/
set_dateFormatInfo(value: Telerik.Web.UI.DateParsing.DateTimeFormatInfo): void;
        /**
Sets the format string for the control when it does not have focus
@method
@param value - 
@returns 
*/
set_displayDateFormat(value: string): void;
        /**
Sets the message that appears when the input value is an empty string
@method
@param value - 
@returns 
*/
set_emptyMessage(value: string): void;
        /**
Sets true if the input is enabled
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the Increment Settings object, which you can use to change the way the control responds to arrow keys and the mouse wheel
@method
@param value - 
@returns 
*/
set_incrementSettings(value: any): void;
        /**
Sets the invalid style duration of RadInputControl
@method
@param value - 
@returns 
*/
set_invalidStyleDuration(value: number): void;
        /**
Sets the latest date the user can enter
@method
@param value - 
@returns 
*/
set_maxDate(value: Date): void;
        /**
Sets the earliest date the user can enter
@method
@param value - 
@returns 
*/
set_minDate(value: Date): void;
        /**
Sets the selected date of the RadDateInput control
@method
@param value - 
@returns 
*/
set_selectedDate(value: Date): void;
        /**
Sets the SelectionOnFocus property
@method
@param value - 
@returns 
*/
set_selectionOnFocus(value: Telerik.Web.UI.SelectionOnFocus): void;
        /**
Accepts true if the input has an associated image button
@method
@param value - 
@returns 
*/
set_showButton(value: boolean): void;
        /**
Sets the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded
@method
@param value - 
@returns 
*/
set_styles(value: any): void;
        /**
Sets the string that the user typed into the input
@method
@param value - 
@returns 
*/
set_textBoxValue(value: string): void;
        /**
Sets the value of the text box
@method
@param newValue - 
@returns 
*/
set_value(newValue: string): void;
        /**
Sets the input element as hidden on the client
@method
@param value - 
@returns 
*/
set_visible(value: boolean): void;
        /**
Updates the css class of RadInputControl
@method
@returns 
*/
updateCssClass(): void;
        /**
Updates the css text of RadInputControl
@method
@param styleCssText - 
@returns 
*/
updateCssText(styleCssText: string): void;
        /**
Updates the display value of RadInputControl
@method
@returns 
*/
updateDisplayValue(): void;
        /**
Adds the handler for the blur event
*/
add_blur(handler: Function): void;
        /**
Adds the handler for the buttonClick event
*/
add_buttonClick(handler: Function): void;
        /**
Adds the handler for the disable event
*/
add_disable(handler: Function): void;
        /**
Adds the handler for the enable event
*/
add_enable(handler: Function): void;
        /**
Adds the handler for the enumerationChanged event
*/
add_enumerationChanged(handler: Function): void;
        /**
Adds the handler for the error event
*/
add_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
add_focus(handler: Function): void;
        /**
Adds the handler for the keyPress event
*/
add_keyPress(handler: Function): void;
        /**
Adds the handler for the load event
*/
add_load(handler: Function): void;
        /**
Adds a handler for the mouseOut event
*/
add_mouseOut(handler: Function): void;
        /**
Adds the handler for the mouseOver event
*/
add_mouseOver(handler: Function): void;
        /**
Adds the handler for the moveDown event
*/
add_moveDown(handler: Function): void;
        /**
Adds the handler for the moveUp event
*/
add_moveUp(handler: Function): void;
        /**
Adds the handler for the valueChanged event
*/
add_valueChanged(handler: Function): void;
        /**
Adds the handler for the valueChanging event
*/
add_valueChanging(handler: Function): void;
        /**
Removes the handler for the blur event
*/
remove_blur(handler: Function): void;
        /**
Removes the handler for the buttonClick event
*/
remove_buttonClick(handler: Function): void;
        /**
Removes the handler for the disable event
*/
remove_disable(handler: Function): void;
        /**
Removes the handler for the enable event
*/
remove_enable(handler: Function): void;
        /**
Removes the handler for the enumerationChanged event
*/
remove_enumerationChanged(handler: Function): void;
        /**
Removes the handler for the error event
*/
remove_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
remove_focus(handler: Function): void;
        /**
Removes the handler for the keyPress event
*/
remove_keyPress(handler: Function): void;
        /**
Removes the handler for the load event
*/
remove_load(handler: Function): void;
        /**
Removes the handler for the mouseOut event
*/
remove_mouseOut(handler: Function): void;
        /**
Removes the handler for the mouseOver event
*/
remove_mouseOver(handler: Function): void;
        /**
Removes the handler for the moveDown event
*/
remove_moveDown(handler: Function): void;
        /**
Removes the handler for the moveUp event
*/
remove_moveUp(handler: Function): void;
        /**
Removes the handler for the valueChanged event
*/
remove_valueChanged(handler: Function): void;
        /**
Removes the handler for the valueChanging event
*/
remove_valueChanging(handler: Function): void;
    }


    class RadDateInputComponent  extends Sys.Component {
        /**
Returns the format string for the control when it has focus
@method
@returns 
*/
get_dateFormat(): string;
        /**
Returns the Date Format Info object, which includes the settings used to parse date values
@method
@returns 
*/
get_dateFormatInfo(): Telerik.Web.UI.DateParsing.DateTimeFormatInfo;
        /**
Returns the format string for the control when it does not have focus
@method
@returns 
*/
get_displayDateFormat(): string;
        /**
Returns the latest valid date value
@method
@returns 
*/
get_maxDate(): Date;
        /**
Returns the earliest valid date value
@method
@returns 
*/
get_minDate(): Date;
        /**
Gets the selected date
@method
@returns 
*/
get_selectedDate(): Telerik.Web.UI.DateParsing.DateTimeFormatInfo;
        /**
Sets the format string for the control when it has focus
@method
@param value - 
@returns 
*/
set_dateFormat(value: string): void;
        /**
Sets the Date Format Info object, which includes the settings used to parse date values
@method
@param value - 
@returns 
*/
set_dateFormatInfo(value: Telerik.Web.UI.DateParsing.DateTimeFormatInfo): void;
        /**
Sets the format string for the control when it does not have focus
@method
@param value - 
@returns 
*/
set_displayDateFormat(value: string): void;
        /**
Sets the latest valid date value
@method
@param value - 
@returns 
*/
set_maxDate(value: Date): void;
        /**
Sets the earliest valid date value
@method
@param value - 
@returns 
*/
set_minDate(value: Date): void;
        /**
Sets the selected date
@method
@returns 
*/
set_selectedDate(): Telerik.Web.UI.DateParsing.DateTimeFormatInfo;
    }


    class RadDateInputExtender   {
        /**
Returns the format display value of RadDateInputExtender
@method
@param value - 
@returns 
*/
formatDisplayValue(value: any): void;
        /**
Returns the format edit value of RadDateInputExtender
@method
@param value - 
@returns 
*/
formatEditValue(value: any): void;
        /**
Gets the selected date of RadDateInputExtender
@method
@returns 
*/
get_selectedDate(): Date;
        /**
Parses a string using the DateFormatInfo object and returns the resulting date
@method
@param value - 
@param baseDate - 
@returns 
*/
parseDate(value: string, baseDate: Date): void;
        /**
Returns a Boolean value, indicating whether error is raised
@method
@param args - 
@returns 
*/
raise_error(args: boolean): void;
        /**
Returns the validate input value of RadDateInputExtender
@method
@param value - 
@returns 
*/
validateInputValue(value: Date): void;
    }


    class RadDatePicker  extends Telerik.Web.UI.RadWebControl {
        /**
Clears the selection, leaving the value as unassigned.
@method
@returns 
*/
clear(): void;
        /**
Returns the dimensions of the specified child element.
@method
@param element - 
@returns 
*/
getElementDimensions(element: any): any;
        /**
Returns the x and y coordinates of the specified child element.
@method
@param el - 
@returns 
*/
getElementPosition(el: any): any;
        /**
Returns a reference to the client object for the popup calendar.
@method
@returns 
*/
get_calendar(): Telerik.Web.UI.RadCalendar;
        /**
Returns a reference to the client object for the input area. For details on using this object, see the RadInput documentation.
@method
@returns 
*/
get_dateInput(): Telerik.Web.UI.RadDateInput;
        /**
Returns whether the screen boundary detection will be applied.
@method
@returns 
*/
get_enableScreenBoundaryDetection(): boolean;
        /**
Returns true if the control is enabled
@method
@returns 
*/
get_enabled(): boolean;
        /**
Returns the date that determines the view the popup calendar uses when the value of the date picker is not assigned.
@method
@returns 
*/
get_focusedDate(): Date;
        /**
Returns the latest date the user can select.
@method
@returns 
*/
get_maxDate(): Date;
        /**
Returns the latest date the user can select as string.
@method
@returns 
*/
get_maxDateStr(): string;
        /**
Returns the earliest date the user can select.
@method
@returns 
*/
get_minDate(): Date;
        /**
Returns the earliest date the user can select as string.
@method
@returns 
*/
get_minDateStr(): string;
        /**
Returns the DOM element for the calendar popup button.
@method
@returns 
*/
get_popupButton(): any;
        /**
Returns the DOM element for the DIV element that contains the popup calendar.
@method
@returns 
*/
get_popupContainer(): any;
        /**
Set the popup direction
@method
@returns 
*/
get_popupDirection(): string;
        /**
Returns the selected date, or null if no date is selected.
@method
@returns 
*/
get_selectedDate(): Date;
        /**
Returns whether the popup control (Calendar or TimeView) will be displayed when the DateInput textbox is focused.
@method
@returns 
*/
get_showPopupOnFocus(): boolean;
        /**
Returns the DOM element for the text box that implements the input area.
@method
@returns 
*/
get_textBox(): any;
        /**
Returns whether the control is visible
@method
@returns 
*/
get_visible(): boolean;
        /**
Hides the popup calendar if it is showing.
@method
@returns 
*/
hidePopup(): void;
        /**
Returns true if the value is unassigned.
@method
@returns 
*/
isEmpty(): void;
        /**
Returns whether the popup calendar is visible.
@method
@returns 
*/
isPopupVisible(): void;
        /**
Repaints the control
@method
@returns 
*/
repaint(): void;
        /**

@method
@returns 
*/
set_calendar(): void;
        /**

@method
@returns 
*/
set_dateInput(): void;
        /**
Sets whether the screen boundary detection will be applied.
@method
@param value - 
@returns 
*/
set_enableScreenBoundaryDetection(value: boolean): void;
        /**
Enables/disables the control
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the date that determines the view the popup calendar uses when the value of the date picker is not assigned.
@method
@param value - 
@returns 
*/
set_focusedDate(value: Date): void;
        /**
Sets the latest date the user can select.
@method
@param value - 
@returns 
*/
set_maxDate(value: Date): void;
        /**
Sets the earliest date the user can select.
@method
@param value - 
@returns 
*/
set_minDate(value: Date): void;
        /**
Returns the popup direction
@method
@param value - 
@returns 
*/
set_popupDirection(value: string): void;
        /**
Assigns the value of the date picker.
@method
@param newDate - 
@returns 
*/
set_selectedDate(newDate: Date): void;
        /**
Sets whether the popup control (Calendar or TimeView) will be displayed when the DateInput textbox is focused.
@method
@param value - 
@returns 
*/
set_showPopupOnFocus(value: boolean): void;
        /**
Shows/hides the control
@method
@param value - 
@returns 
*/
set_visible(value: boolean): void;
        /**
Displays the popup calendar at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.
@method
@param x - 
@param y - 
@returns 
*/
showPopup(x: number, y: number): void;
        /**
Toggles the visible state of the popup calendar.
@method
@returns 
*/
togglePopup(): void;
    }


    class RadDateTimePicker  extends Telerik.Web.UI.RadDatePicker {
        /**
Returns the DOM element for the DIV element that contains the popup time view.
@method
@returns 
*/
GetTimePopupContainer(): any;
        /**
Gets a value indicating whether a postback to the server automatically occurs when the user changes the list selection.
@method
@returns 
*/
get_autoPostBackControl(): boolean;
        /**
Returns the DOM element for the time popup button.
@method
@returns 
*/
get_timePopupButton(): any;
        /**
Returns the DOM element for the DIV element that contains the popup time view.
@method
@returns 
*/
get_timePopupContainer(): any;
        /**
Returns a reference to the client object for the popup time view.
@method
@returns 
*/
get_timeView(): Telerik.Web.UI.RadTimeView;
        /**
Hides the popup time view if it is showing.
@method
@returns 
*/
hideTimePopup(): void;
        /**
Returns whether the popup time view is visible.
@method
@returns 
*/
isTimePopupVisible(): boolean;
        /**
Sets a value indicating whether a postback to the server automatically occurs when the user changes the list selection.
@method
@param value - 
@returns 
*/
set_autoPostBackControl(value: boolean): void;
        /**
Enables/disabled the control.
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**

@method
@returns 
*/
set_timeView(): void;
        /**
Displays the popup time view at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.
@method
@param x - 
@param y - 
@returns 
*/
showTimePopup(x: number, y: number): void;
        /**
Toggles the visible state of the popup time view.
@method
@returns 
*/
toggleTimePopup(): void;
    }


    class RadDock  extends Telerik.Web.UI.RadWebControl {
        /**
Sets a title to the control.(Use the Title property in order for the changes to take effect on the server-side and not on the client-side only)
@method
@param value - The text that will be assigned to the control
@returns 
*/
set_title(value: string): void;
        /**
Gets the bool value indicating whether the dock is closed or not.
@method
@returns Bool value indicating whether the dock is closed or not.
*/
get_closed(): boolean;
        /**
Gets the DockMode of the RadDock control. It can be: 1. Floating; 2. Docked; 3. Default;
@method
@returns The Telerik.Web.UI.DockMode of the RadDock control. It can be
*/
get_dockMode(): Telerik.Web.UI.DockMode;
        /**
Gets the bool value indicating whether the control is pinned.
@method
@returns The bool value indicating whether the control is pinned.
*/
get_pinned(): number;
        /**
Enables/Disables the resizing of the control.
@method
@param value - The value indicating whether the control can be resized or not.
@returns 
*/
set_resizable(value: boolean): void;
        /**
Sets a DockMode to the dock.(Use the DockMode property in order for the changes to take effect on the server-side and not on the client-side only)
@method
@param value - Whether the dock will be
@returns 
*/
set_dockMode(value: Telerik.Web.UI.DockMode): void;
        /**
Collapses/Expands the RadDock control.
@method
@param value - The value indicating whether the dock is collapsed or expanded.
@param playAnimation - Whether or not animation should be played.
@returns 
*/
set_collapsed(value: boolean, playAnimation: boolean): void;
        /**
Gets the (0-offset) docking position of the control within its parent docking zone.
@method
@returns The
*/
get_index(): number;
        /**
Sets a value enabling or disabling the ability of the user to drag the control to a new location. (Use the EnableDrag property in order for the changes to take effect on the server-side and not on the client-side only)
@method
@param value - The bool value indicating whether the user can drag the control to a new location.
@returns 
*/
set_enableDrag(value: boolean): void;
        /**
Gets the current handle by which the dock can be dragged.
@method
@returns The handle by which the dock can be dragged.
*/
get_handle(): any;
        /**
If the control is docked, returns the object for the parent docking zone.
@method
@returns 
*/
get_parent(): any;
        /**
Gets the element containing the title text of the dock (the EM element).
@method
@returns The element that contains the dock
*/
get_titleElement(): any;
        /**
Gets the bool value indicating whether the dock will perform postback.
@method
@returns The bool value indicating whether the dock will perform postback.
*/
get_autoPostBack(): boolean;
        /**
Sets a width to the control.
@method
@param value - The width of the control.
@returns 
*/
set_width(value: number): void;
        /**
Sets forbidden zones (DockZones where the dock cannot be docked to) to the dock. (Use the ForbiddenZones property in order for the changes to take effect on the server-side and not on the client-side only)
@method
@param value - A string array containing the DockZone UniqueNames where the dock cannot docked to.
@returns 
*/
set_forbiddenZones(value: any): void;
        /**
Gets the X-coordinate of the dock (relative to the top-left corner of the browser window).
@method
@returns The number indicating the X
*/
get_left(): number;
        /**
Gets an array containing the DockZone UniqueNames where the dock cannot be docked to.
@method
@returns A string array containing the DockZone UniqueNames where the dock cannot docked to.
*/
get_forbiddenZones(): any;
        /**
Gets the height of the control.
@method
@returns The height of the control.
*/
get_height(): number;
        /**
Sets a drag handle to the element passed as a parameter.
@method
@param element - 
@returns 
*/
set_handle(element: any): void;
        /**
Clones the current Telerik.Web.UI.RadDock object.
@method
@param id - The string that will be set to the UniqueId of the cloned object.
@returns The cloned Telerik.Web.UI.RadDock object.
*/
clone(id: string): Telerik.Web.UI.RadDock;
        /**
Gets an array containing the DockZone UniqueNames where the dock is allowed to dock.
@method
@returns A string array containing the DockZone UniqueNames where the dock is allowed to dock.
*/
get_allowedZones(): any;
        /**
Gets the UniqueID of the control.
@method
@returns The UniqueID of the control.
*/
get_uniqueID(): string;
        /**
Gets the bool value indicating whether the animation is enabled.
@method
@returns The bool value indicating whether the animation is enabled.
*/
get_enableAnimation(): boolean;
        /**
Gets the bool value indicating whether the control can be resized.
@method
@returns The bool value indicating whether the control can be resized.
*/
get_resizable(): boolean;
        /**
Gets the parent zone(Telerik.Web.UI.RadDockZone object) to which the dock is docked.
@method
@returns The parent DockZone.
*/
get_dockZone(): Telerik.Web.UI.RadDockZone;
        /**
Closes/Opens the RadDock control.
@method
@param value - The value indicating whether the dock will be opened or closed.
@param playAnimation - Whether or not animation should be played.
@returns 
*/
set_closed(value: boolean, playAnimation: boolean): void;
        /**
Gets the bool value indicating whether the user can drag the control to a new location.
@method
@returns The bool value indicating whether the user can drag the control to a new location.
*/
get_enableDrag(): boolean;
        /**
Causes a floating control to become pinned or unpinned. Dock with DockMode="Floating" can be pinned only. (Use the Pinned property in order for the changes to take effect on the server-side and not on the client-side only)
@method
@param value - The bool value indicating whether the control will be pinned
@returns 
*/
set_pinned(value: boolean): void;
        /**
Gets the ID of the Telerik.Web.UI.RadDockLayout that manages the state of the RadDock control.
@method
@returns The ID of the Telerik.Web.UI.RadDockLayout that manages the state of the RadDock control.
*/
get_layoutID(): string;
        /**
Gets a reference to the element of the dock's content container.
@method
@returns The element of the dock
*/
get_contentContainer(): any;
        /**
Sets a height to the control.
@method
@param value - The height of the control.
@returns 
*/
set_height(value: number): void;
        /**
Gets an object containing all present (enabled) dock commands. A single command can be accessed in the following way: "objCommands.CommandName" or "objCommands["CommandName"]".
@method
@returns 
*/
get_commands(): any;
        /**
Tag
@method
@returns 
*/
get_tag(): any;
        /**
Gets the serialized client state of the dock control.
@method
@returns 
*/
saveClientState(): void;
        /**
Gets the command by the name specified.
@method
@param name - The name of the command.
@returns The command with the given name.
*/
getCommand(name: string): Telerik.Web.UI.DockCommand;
        /**
Gets the width of the control.
@method
@returns The width of the control.
*/
get_width(): number;
        /**
Performs a postback if the dock has AutoPostBack enabled.
@method
@param parameter - The parameter passed to the server when postback is performed.
@returns 
*/
conditionalPostback(parameter: string): void;
        /**
Sets a bool value indicating whether the dock will perform postback.
@method
@param value - Parameter indicating whether the dock will perform postback.
@returns 
*/
set_autoPostBack(value: boolean): void;
        /**
Gets the bool value indicating whether the dock is collapsed or not.
@method
@returns Bool value indicating whether the dock is collapsed or not.
*/
get_collapsed(): boolean;
        /**
Gets the ID of the zone where the RadDock control is docked to.
@method
@returns The ID of the zone where the RadDock control is docked to.
*/
get_dockZoneID(): string;
        /**
Gets the currently applied skin to the control.
@method
@returns The control
*/
get_skin(): string;
        /**
Gets the title text of the dock control.
@method
@returns The text of the dock
*/
get_title(): string;
        /**
Calls the _doPostBack global function, passing the UniqueID of the control as event target paramenter.
@method
@param parameter - The parameter passed to the server when postback is performed.
@returns 
*/
doPostBack(parameter: string): void;
        /**
Returns the DOM element for this control.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Undocks the RadDock control from its containing zone.
@method
@returns 
*/
undock(): void;
        /**
Sets a X-coordinate to the dock (relative to the top-left corner of the browser window).
@method
@param value - The value set to the X
@returns 
*/
set_left(value: number): void;
        /**
Gets a reference to the element container of the dock's commands.
@method
@returns The element containing dock
*/
get_commandsContainer(): any;
        /**
Returns an array which contains all dock zones.
@method
@returns 
*/
get_dockZones(): any;
        /**
Sets allowed zones (DockZones where the dock is allowed to dock) to the dock. (Use the AllowedZones property in order for the changes to take effect on the server-side and not on the client-side only)
@method
@param value - A string array containing the DockZone UniqueNames where the dock is allowed to dock.
@returns 
*/
set_allowedZones(value: any): void;
        /**
Gets the Y-coordinate of the dock (relative to the top-left corner of the browser window).
@method
@returns The number indicating the Y
*/
get_top(): number;
        /**
Gets a reference to the element of the dock's TitleBar template.
@method
@returns The element of the dock
*/
get_titleBar(): any;
        /**
Enables or disables the dock animations. (Use the EnableAnimation property in order for the changes to take effect on the server-side and not on the client-side only)
@method
@param value - The bool value indicating whether the animation will be enabled
@returns 
*/
set_enableAnimation(value: boolean): void;
        /**
Sets a Y-coordinate to the dock (relative to the top-left corner of the browser window).
@method
@param value - The value set to the Y
@returns 
*/
set_top(value: number): void;
        /**
Gets the UniqueName of the control.
@method
@returns The UniqueName of the control.
*/
get_uniqueName(): string;
        /**
Adds a handler to the OnClientDockPositionChanged event. The OnClientDockPositionChanged client-side event occurs when the user has just changed the position of a RadDock control by dragging it to a new location. This event occurs before the server-side OnDockPositionChanged event or client-side OnClientDragEnd event.
*/
add_dockPositionChanged(handler: Function): void;
        /**
Adds a handler to the OnClientInitialize event. The OnClientInitialize client-side event occurs when when the client-side object for the RadDock control is initialized.
*/
add_initialize(handler: Function): void;
        /**
Removes a client-side event handler for a specific event.
*/
add_event(handler: Function): void;
        /**
Removes a handler from the OnClientDockPositionChanged event.  The OnClientDockPositionChanged client-side event occurs when the user has just changed the position of a RadDock control by dragging it to a new location. This event occurs before the server-side OnDockPositionChanged event or client-side OnClientDragEnd event.
*/
remove_dockPositionChanged(handler: Function): void;
        /**
Removes a handler from the OnClientCommand event. The OnClientCommand client-side event occurs when the user clicks on a command in the RadDock title bar.
*/
remove_command(handler: Function): void;
        /**
Adds a handler to the OnClientResizeStart event. The OnClientResizeStart client-side event occurs when the user starts to resize the RadDock control.
*/
add_resizeStart(handler: Function): void;
        /**
Adds a handler to the OnClientDrag event. The OnClientDrag client-side event occurs when the user moves the mouse while dragging a RadDock control.
*/
add_drag(handler: Function): void;
        /**
Removes a handler from the OnClientDragStart event. The OnClientDragStart client-side event occurs when the user begins to drag the RadDock control from its current position.
*/
remove_dragStart(handler: Function): void;
        /**
Adds a handler to the OnClientCommand event. The OnClientCommand client-side event occurs when the user clicks on a command in the RadDock title bar.
*/
add_command(handler: Function): void;
        /**
Removes a handler from the OnClientResizeEnd event. The OnClientResizeEnd client-side event occurs when the user finishes resizing the RadDock control.
*/
remove_resizeEnd(handler: Function): void;
        /**
Removes a handler from the OnClientInitialize event. The OnClientInitialize client-side event occurs when when the client-side object for the RadDock control is initialized.
*/
remove_initialize(handler: Function): void;
        /**
Adds a handler to the OnClientResizeEnd event. The OnClientResizeEnd client-side event occurs when the user finishes resizing the RadDock control.
*/
add_resizeEnd(handler: Function): void;
        /**
Adds a handler to the OnClientDragEnd event. The OnClientDragEnd client-side event occurs when the user drops a RadDock control after a drag operation. This event occurs after the OnClientDockPositionChanged event.
*/
add_dragEnd(handler: Function): void;
        /**
Removes a handler from the OnClientDrag event. The OnClientDrag client-side event occurs when the user moves the mouse while dragging a RadDock control.
*/
remove_drag(handler: Function): void;
        /**
Adds a handler to the OnClientDockPositionChanging event. The OnClientDockPositionChanging client-side event occurs when the user tries to drop the RadDock control in a new location.
*/
add_dockPositionChanging(handler: Function): void;
        /**
Removes a handler from the OnClientDockPositionChanging event. The OnClientDockPositionChanging client-side event occurs when the user tries to drop the RadDock control in a new location.
*/
remove_dockPositionChanging(handler: Function): void;
        /**
Adds a handler to the OnClientDragStart event. The OnClientDragStart client-side event occurs when the user begins to drag the RadDock control from its current position.
*/
add_dragStart(handler: Function): void;
        /**
Removes a handler from the OnClientResizeStart event. The OnClientResizeStart client-side event occurs when the user starts to resize the RadDock control.
*/
remove_resizeStart(handler: Function): void;
        /**
Removes a handler from the OnClientDragEnd event. The OnClientDragEnd client-side event occurs when the user drops a RadDock control after a drag operation. This event occurs after the OnClientDockPositionChanged event.
*/
remove_dragEnd(handler: Function): void;
    }


    class RadDockZone  extends Telerik.Web.UI.RadWebControl {
        /**
Places (docks) the RadDock control in the zone, at the specified (0-offset) position.
@method
@param radDock - The dock control to be docked.
@param index - The
@returns 
*/
dock(radDock: Telerik.Web.UI.RadDock, index: number): void;
        /**
Clones the current Telerik.Web.UI.RadDockZone object.
@method
@param id - The string that will be set to the UniqueId of the cloned object.
@returns The cloned Telerik.Web.UI.RadDockZone object.
*/
clone(id: string): Telerik.Web.UI.RadDockZone;
        /**
Gets the UniqueName of the control.
@method
@returns The UniqueName of the control.
*/
get_uniqueName(): string;
        /**
Sets a CSS class that is applied when a dock is over the zone and is about to be docked. (Use the HighlightedCssClass property in order for the changes to take effect on the server-side and not on the client-side only)
@method
@param value - The CSS class to be applied.
@returns 
*/
set_highlightedCssClass(value: string): void;
        /**
Gets the ID of the Telerik.Web.UI.RadDockLayout that manages the state of the RadDockZone control.
@method
@returns The ID of the DockLayout that manages the state of the RadDockZone control.
*/
get_layoutID(): string;
        /**
Sets a bool value indicating whether the docks are resized to fit within the zone. (Use the FitDocks property in order for the changes to take effect on the server-side and not on the client-side only)
@method
@param value - The value indicating whether the docks should be resized to fit within the zone.
@returns 
*/
set_fitDocks(value: boolean): void;
        /**
Gets the CSS class that is applied when a dock is over the zone and is about to be docked.
@method
@returns The CSS class that is applied when a dock is over the zone and is about to be docked.
*/
get_highlightedCssClass(): string;
        /**
Gets the array of all Telerik.Web.UI.RadDock controls placed inside the zone.
@method
@returns The array of all Telerik.Web.UI.RadDock controls placed inside the zone.
*/
get_docks(): any;
        /**
Gets the client ID of the RadDockZone control.
@method
@returns The client ID of the RadDockZone control.
*/
get_clientID(): string;
        /**
Gets the value indicating whether the zone has Horizontal orientaion (Orientation can be Horizontal and Vertical).
@method
@returns The value indicating whether the zone has Horizontal orientaion.
*/
get_isHorizontal(): boolean;
        /**
Gets the bool value indicating whether the docks are resized to fit within the zone.
@method
@returns The bool value indicating whether the docks are resized to fit within the zone.
*/
get_fitDocks(): boolean;
    }


    class RadDropDownList  extends Telerik.Web.UI.ControlItemContainer {
        /**
Returns the first DropDownListItem object whose Text property equals to the passed parameter.
@method
@param theText - The text tosearch for
@returns 
*/
findItemByText(theText: string): Telerik.Web.UI.DropDownListItem;
        /**
Returns the first DropDownListItem object whose Value property equals to the passed parameter.
@method
@param theValue - The value to search for
@returns Returns the first DropDownListItem whose Value property matches the passed parameter
*/
findItemByValue(theValue: string): Telerik.Web.UI.DropDownListItem;
        /**
Enables RadDropDownList
@method
@param value - true if the RadDropDownList should be enabled. False otherwise
@returns 
*/
set_enabled(value: boolean): void;
        /**
Gets a collection with all items
@method
@returns 
*/
get_items(): Telerik.Web.UI.DropDownListItemCollection;
        /**
Gets the selected item.
@method
@returns 
*/
get_selectedItem(): Telerik.Web.UI.DropDownListItem;
        /**
Closes the DropDown
@method
@returns 
*/
closeDropDown(): void;
        /**
Gets the DOM element of the RadDropDownList where the text of the currently selected item is shown.
@method
@returns DOM element of the RadDropDownList where the text of the currently selected item is shown.
*/
get_textElement(): HTMLElement;
        /**
Gets the root DOM element of the RadDropDownList
@method
@returns The root DOM element of the RadDropDownList
*/
get_dropDownElement(): HTMLElement;
        /**
Opens the DropDown
@method
@returns 
*/
openDropDown(): void;
        /**
Returns the value of the RadDropDownList's ClientItemTemplate property.
@method
@returns 
*/
get_clientTemplate(): void;
        /**
Toggles the DropDown state between opened and closed.
@method
@returns 
*/
toggleDropDown(): void;
        /**
Returns the value of the RadDropDownList's EmptySelectionMessage property.
@method
@returns 
*/
get_emptySelectionMessage(): any;
        /**
Returns the value of the RadDropDownList's DefaultMessage property.
@method
@returns 
*/
get_defaultMessage(): void;
        /**
Sets the value of the RadDropDownList's ClientItemTemplate property.
@method
@param value - value
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Refreshes the RadDropDownList UI
@method
@returns 
*/
repaint(): void;
        /**
Gets the UL element of the RadDropDownList
@method
@returns The UL element of the RadDropDownList
*/
get_childListElement(): HTMLElement;
        /**
Saves the client state to the client state hidden field
@method
@returns 
*/
saveClientState(): void;
        /**
Gets the item from the Items collection residing at the index specified by the parameter.
@method
@param index - 
@returns 
*/
getItem(index: number): Telerik.Web.UI.DropDownListItem;
        /**
Sets the value of the RadDropDownList's EmptySelectionMessage property.
@method
@param String - 
@returns 
*/
set_emptySelectionMessage(String: string): any;
        /**
Writes the changes to the dropDownList that were made since a previous call to trackChanges, so that they are preserved over post-backs.
@method
@returns 
*/
commitChanges(): void;
        /**
Sets the value of the RadDropDownList's DefaultMessage property.
@method
@param value - value
@returns 
*/
set_defaultMessage(value: string): void;
    }


    class RadDropDownTree  extends Telerik.Web.UI.RadWebControl {
        /**
Gets the dropDown element.
@method
@returns The dropDown element.
*/
get_dropDownElement(): HTMLElement;
        /**
Gets the embedded tree - the integrated RadTreeView control.
@method
@returns - the integrated RadTreeView control.
*/
get_embeddedTree(): Telerik.Web.UI.RadTreeView;
        /**
Closes the drop down of the current instance.
@method
@returns 
*/
closeDropDown(): void;
        /**
Returns the text of an entry(or a collection of entries separated by semicolon) in the entry area
@method
@returns 
*/
get_selectedText(): string;
        /**
Opens the drop down of the current instance.
@method
@returns 
*/
openDropDown(): void;
        /**
Returns the RadDropDownTree Entries collection
@method
@returns 
*/
get_entries(): any;
        /**
Opens the drop down of the current instance.
@method
@returns 
*/
toggleDropDown(): void;
        /**
Returns  the Default message in the entry area
@method
@returns 
*/
get_defaultMessage(): string;
        /**
Returns the value of an entry (or a collection of entries separated by semicolon) in the entry area
@method
@returns 
*/
get_selectedValue(): string;
        /**
Returns true if the RadDropDownTree is enabled and false if the control is disabled
@method
@param Boolean - 
@returns 
*/
get_enabled(Boolean: boolean): boolean;
        /**
Enables the RadDropDownTree control
@method
@param Boolean - 
@returns 
*/
set_enabled(Boolean: boolean): boolean;
        /**
Sets the Default message in the entry area
@method
@param String - 
@returns 
*/
set_defaultMessage(String: string): any;
    }


    class RadEditor  extends Telerik.Web.UI.RadWebControl {
        /**
Re-renders the editor on the client. Useful when the editor is in an invisible container that is shown dynamically.
@method
@returns 
*/
repaint(): void;
        /**
IE ONLY. Alias of setFocus
@method
@returns 
*/
setActive(): void;
        /**
Select an element from the content area
@method
@param element - Element to be selected
@param fireEvent - Specifies whether to fire or not selectionChange event
@returns 
*/
selectElement(element: any, fireEvent: boolean): void;
        /**
Returns the editor's mode
@method
@returns returned value
*/
get_mode(): number;
        /**
Returns a reference to the RadEditor's TextArea in Html mode
@method
@returns 
*/
get_textArea(): any;
        /**
Returns whether RadEditor is using RadWindow windows or browser popup windows for its dialogs.
@method
@returns 
*/
get_useClassicDialogs(): boolean;
        /**
Sets a shortcut. If it does not exist in the ShortCutManager list it will be added as well
@method
@param shortcutName - Name of the shortcut
@param shortcutString - The key combination of the shortcut
@returns 
*/
setShortCut(shortcutName: string, shortcutString: string): void;
        /**
Returns a reference to the context menu object
@method
@param tagName - The Tag name of the context menu
@returns Reference to the context menu object
*/
getContextMenuByTagName(tagName: string): any;
        /**
Sets mode of the RadEditor's content area
@method
@param editable - Specifies whether to enable or disalbe editing
@returns 
*/
set_editable(editable: boolean): void;
        /**
Executes RadEditor commands.
@method
@param commandName - The name of the command to be executed
@param args - The parameters to be passed to the executed command
@returns 
*/
fire(commandName: string, args: any): void;
        /**
Adds shortcut to the RadEditor's ShortCutManager
@method
@param shortcutName - Name of the shortcut
@param shortcutString - The key combination of the shortcut
@returns 
*/
addShortCut(shortcutName: string, shortcutString: string): void;
        /**
Return a reference to the RadEditor's wrapping DOM element
@method
@returns a reference to the RadEditor
*/
get_mainTable(): any;
        /**
Detaches an event handler.
@method
@param eventName - The name of the event to be handled
@param fnRef - The function to be removed from the eventListenerList
@returns 
*/
detachEventHandler(eventName: string, fnRef: Function): void;
        /**
Returns a reference to a specified tool
@method
@param toolName - The name of the tool
@returns 
*/
getToolByName(toolName: string): Telerik.Web.UI.EditorButton;
        /**
Returns boolean value that represents if the Editor is visible on the page
@method
@returns 
*/
isVisible(): void;
        /**
Returns current state of a tool
@method
@param toolName - The name of the tool
@returns Current state of a tool Disabled
*/
getToolState(toolName: string): number;
        /**
Raise a RadEditor's event
@method
@param evName - Name of the event to be raised
@param args - Arguments to be sent
@returns 
*/
raiseEvent(evName: string, args: any): void;
        /**
Removes a shortcut from the RadEditor's ShortCutManager
@method
@param shortcutName - Name of the the shortcut
@returns 
*/
removeShortCut(shortcutName: string): void;
        /**
Returns current value of a tool
@method
@param toolName - The name of the tool
@returns Current value of a tool
*/
getToolValue(toolName: string): string;
        /**
Pastes HTML content to the cursor position.
@method
@param content - The content to be pasted
@param commandName? - The name of the command using PasteHtml for Undo
@param bSelectText? - Specifies whether to select pasted text
@param bFireSelChanged? - Specifies whether to fire the selection change event
@param bAddUndo? - specifies whether to add the command in the Undo
@returns 
*/
pasteHtml(content: string, commandName?: string, bSelectText?: boolean, bFireSelChanged?: boolean, bAddUndo?: boolean): void;
        /**
Fire RadEditor's Undo command
@method
@param depth - Number of commands to undo
@returns 
*/
undo(depth: number): void;
        /**
Returns a reference to the currently selected HTML element in the editor's content area
@method
@returns 
*/
getSelectedElement(): any;
        /**
Toogles screen mode of RadEditor
@method
@returns 
*/
toggleScreenMode(): void;
        /**
Returns the HTML of the selection
@method
@returns 
*/
getSelectionHtml(): string;
        /**
Open a dialog, placed in an external page
@method
@param url - 
@param argument - The client parameters to be passed to the dialog. Optional.
@param width - The width of the RadWindow dialog. Required.
@param height - The height of the RadWindow dialog. Required.
@param callbackFunction - 
@param callbackArgs - The additional parameters to be passed to the callbackFunction when it is executed. Optional.
@param title - The text in the RadWindow title bar. Optional.
@param modal - Specifies whether RadWindow should be modal or not. The default is true. Optional.
@param behaviors - Enum
@param showStatusbar - Specifies whether RadWindow displays its statusbar or not. The default is true. Optional.
@param showTitlebar - Specifies whether RadWindow displays its titlebar or not. The default is true. Optional.
@returns 
*/
showExternalDialog(url: string, argument: any, width: number, height: number, callbackFunction: Function, callbackArgs: any, title: string, modal: string, behaviors: Telerik.Web.UI.WindowBehaviors, showStatusbar: boolean, showTitlebar: boolean): void;
        /**
Ability to programatically disable/enable editing in editor while retaining its looks
@method
@param enable - Specifies whether enable or disable editing
@param editingOptions - Which editing options to enable
@param optionalIgnoredTools - Array of tool names to enable
@returns 
*/
enableEditing(enable: boolean, editingOptions: Telerik.Web.UI.EditingOptions, optionalIgnoredTools: any): void;
        /**
Open a dialog
@method
@param dialogName - 
@param argument - The client parameters to be passed to the dialog
@param callbackFunction - 
@returns 
*/
showDialog(dialogName: string, argument: any, callbackFunction: Function): void;
        /**
Returns a reference to the RadEditor's content area's IFRAME
@method
@returns 
*/
get_contentAreaElement(): any;
        /**
Returns the editor content as plain text
@method
@returns 
*/
get_text(): string;
        /**
Sets the focus on RadEditor
@method
@returns 
*/
setFocus(): void;
        /**
Replaces the current content with a new one.
@method
@param content - The HTML content to be inserted.
@param title? - The command's title shown in the Undo stack.
@param setFocus? - Specifies whether setFocus to be fired after the command execution
@returns 
*/
set_html(content: string, title?: string, setFocus?: boolean): void;
        /**
Returns the editor content as HTML
@method
@param isFiltered - If the bool parameter is set to true
@returns Returns the editor content as HTML
*/
get_html(isFiltered: boolean): string;
        /**
Specifies whether RadEditor will use RadWindow windows or browser popup windows for its dialogs. If the parameter is set to true the editor will use the browser windows.
@method
@param value - 
@returns 
*/
set_useClassicDialogs(value: boolean): void;
        /**
Returns a reference to the RadEditor's content area's body element
@method
@returns 
*/
get_contentArea(): any;
        /**
You can store and restore the exact position of the cursor using createRestorePoint and select method. Use getSelection().getRange()instead of the obsolete createRestorePoint()
@method
@returns 
*/
createRestorePoint(): void;
        /**
Returns a reference to the RadEditor's content area's document object
@method
@returns 
*/
get_document(): any;
        /**
Returns a reference to the Toolbar container DOM element
@method
@returns 
*/
get_toolContainer(): any;
        /**
Fire RadEditor's Redo command
@method
@param depth - Number of commands to redo
@returns 
*/
redo(depth: number): void;
        /**
Returns the initial content of RadEditor
@method
@returns The current initial content of RadEditor
*/
get_initialContent(): string;
        /**
Creates DOM element and return reference to it
@method
@param tagName - Element
@param styleWidth - Width of the element
@param styleHeight - Height of the element
@param sId - ID of the element
@param sName - Name of the element
@param sValue - Value of the element
@returns 
*/
createElement(tagName: string, styleWidth: string, styleHeight: string, sId: string, sName: string, sValue: string): void;
        /**
Force the editor to start the spellchecker
@method
@returns 
*/
startSpellCheck(): void;
        /**
Force RadEditor to save current content
@method
@returns 
*/
saveContent(): void;
        /**
Returns an associative array of RadEditor's localization
@method
@returns 
*/
get_localization(): any;
        /**
Returns whether the RadEditor's content area is editable or not
@method
@returns 
*/
get_editable(): boolean;
        /**
Sets the RadEditor visible on the client
@method
@param toShow - 
@returns 
*/
set_visible(toShow: boolean): void;
        /**
Returns a reference to the current RadEditorSelection object
@method
@returns 
*/
getSelection(): Telerik.Web.UI.Editor.Selection;
        /**
Sets the width and height of the RadEditor (in pixels)
@method
@param width - Width to be set
@param height - Height to be set
@returns 
*/
setSize(width: number, height: number): void;
        /**
Returns a reference to RadEditor's filters manager
@method
@returns 
*/
get_filtersManager(): Telerik.Web.UI.Editor.FiltersManager;
        /**
Attaches an event to RadEditor
@method
@param eventName - The name of the event to be handled
@param fnRef - The function to be registered to the event
@returns 
*/
attachEventHandler(eventName: string, fnRef: Function): void;
        /**
Returns a reference to the used SpellCheckService
@method
@returns 
*/
get_spellCheckService(): Telerik.Web.UI.SpellCheckService;
        /**
Returns the Fullscreen state of RadEditor
@method
@returns 
*/
isFullScreen(): void;
        /**
Sets RadEditor in HTML, Preview or Design mode
@method
@param value - value
@returns 
*/
set_mode(value: number): void;
        /**
Returns current language
@method
@returns 
*/
get_language(): string;
        /**
Adds a handler for the editReady client editor event.
*/
add_editReady(handler: Function): void;
        /**
Removes a handler for the commandExecuting client editor event.
*/
remove_commandExecuting(handler: Function): void;
        /**
Adds a handler for the toggleScreenMode client editor event.
*/
add_toggleScreenMode(handler: Function): void;
        /**
Adds a handler for the submit client editor event.
*/
add_submit(handler: Function): void;
        /**
Removes a handler for the editReady client editor event.
*/
remove_editReady(handler: Function): void;
        /**
Adds a handler for the init client editor event.
*/
add_init(handler: Function): void;
        /**
Adds a handler for the commandExecuting client editor event.
*/
add_commandExecuting(handler: Function): void;
        /**
Adds a handler for the load client editor event.
*/
add_load(handler: Function): void;
        /**
Removes a handler for the spellCheckLoaded client editor event.
*/
remove_spellCheckLoaded(handler: Function): void;
        /**
Removes a handler for the pasteHtml client editor event.
*/
remove_pasteHtml(handler: Function): void;
        /**
Removes a handler for the selectionChange client editor event.
*/
remove_selectionChange(handler: Function): void;
        /**
Adds a handler for the modeChange client editor event.
*/
add_modeChange(handler: Function): void;
        /**
Removes a handler for the init client editor event.
*/
remove_init(handler: Function): void;
        /**
This event is fired after a command is executed.
*/
add_domChange(handler: Function): void;
        /**
Removes a handler for the submit client editor event.
*/
remove_submit(handler: Function): void;
        /**
Removes a handler for the modeChange client editor event.
*/
remove_modeChange(handler: Function): void;
        /**
Removes a handler for the commandExecuted client editor event.
*/
remove_commandExecuted(handler: Function): void;
        /**
Removes a handler for the toggleScreenMode client editor event.
*/
remove_toggleScreenMode(handler: Function): void;
        /**
Adds a handler for the selectionChange client editor event.
*/
add_selectionChange(handler: Function): void;
        /**
Adds a handler for the firstShow client editor event.
*/
add_firstShow(handler: Function): void;
        /**
Adds a handler for the commandExecuted client editor event.
*/
add_commandExecuted(handler: Function): void;
        /**
Adds a handler for the spellCheckLoaded client editor event.
*/
add_spellCheckLoaded(handler: Function): void;
        /**
Removes a handler for the firstShow client editor event.
*/
remove_firstShow(handler: Function): void;
        /**
Adds a handler for the pasteHtml client editor event.
*/
add_pasteHtml(handler: Function): void;
        /**
Removes a handler for the load client editor event.
*/
remove_load(handler: Function): void;
        /**
Gets a reference to the tool adapter.
*/
get_toolAdapter(handler: Function): void;
    }


    class RadFileExplorer  extends Telerik.Web.UI.RadWebControl {
        /**
Force the server to do the filtering
@method
@param keyWord - 
@returns 
*/
serverFilter(keyWord: any): any;
        /**
Sets the default text that will be shown in the CreateNewFolder dialog
@method
@param newDefaultName - 
@returns 
*/
set_newFolderDefaultValue(newDefaultName: string): void;
        /**
Copies the selected items from the specified control.
@method
@param fromControl - The control
@returns 
*/
copy(fromControl: Telerik.Web.UI.FileExplorerControls): void;
        /**
Performs delete operation for all of the currently selected items on the Grid
@method
@param showConfirmDialog - Show or not the confirmation dialog. If
@returns 
*/
deleteSelectedItems(showConfirmDialog: boolean): void;
        /**
Marks the provided items as copied and appends them to the previously copied ones.
@method
@param items - The items to copy
@returns 
*/
copyMoreItems(items: any): void;
        /**
Returns a string value that represents the path to the currently selected directory. The returned path is a virtual path, such as "/RootProjectFolder/SelectedDir"
@method
@returns 
*/
get_currentDirectory(): string;
        /**
Returns the first selected item on the Grid. Returns the selected item on the TreeView if there is no selected items in the Grid
@method
@returns 
*/
get_selectedItem(): Telerik.Web.UI.FileExplorerItem;
        /**
Shortcut method for set_dataSource(data); dataBind().
@method
@param data - 
@returns 
*/
bindToData(data: any): any;
        /**
Attach/detach the event handlers
@method
@param toAttach - 
@returns 
*/
attachEventHandlers(toAttach: any): any;
        /**
Pastes the copied items into the provided destination directory
@method
@param destinationDirectory - 
@returns 
*/
paste(destinationDirectory: Telerik.Web.UI.FileExplorerItem): void;
        /**
Loads a new folder and sets the focus on it. The second parameter accepts a Boolean value that determines whether the current change of the directory to be stored in the Previous/Next stack
@method
@param path - The path to the folder
@param addToStack - Indicates whether the loaded path to be added to the Back
@returns 
*/
loadFolder(path: string, addToStack: boolean): void;
        /**
Filters the items in the currently selected directory.
@method
@returns 
*/
filter(): void;
        /**
Find a file by its name
@method
@param fileName - 
@returns 
*/
findFileByName(fileName: any): any;
        /**
Returns the permissions set to the currently selected folder in the TreeView
@method
@returns 
*/
get_currentPermissions(): Telerik.Web.UI.FileExplorerItemPermissions;
        /**
Returns a reference to the FileList object. Returns "null" when the FileList is not visible, i.e. only the RadTreeView is shown
@method
@returns 
*/
get_fileList(): Telerik.Web.UI.FileExplorer.FileList;
        /**
Refreshes the current folder
@method
@returns 
*/
refresh(): void;
        /**
Renames the item with the new name
@method
@param item - 
@param newName - 
@returns 
*/
rename(item: Telerik.Web.UI.FileExplorerItem, newName: string): void;
        /**
Gets the FileExplorerItem by the passed grid data item object
@method
@param item - A data item from the Grid
@returns 
*/
getFileExplorerItemFromGridDataItem(item: Telerik.Web.UI.GridDataItem): Telerik.Web.UI.FileExplorerItem;
        /**
Removes items from the file name invalid characters list. Default list is ["\", "/", ":", "*", "?", """, "<", ">", "|"]
@method
@param char - The char to remove from the file name invalid chars list
@returns 
*/
removeFileNameInvalidChar(char: string): void;
        /**
Gets the extension of the item - txt for example if it is a text file, ‘null’ when the selected item does not have extension(i.e. if the selected item is a folder)
@method
@returns 
*/
get_extension(): void;
        /**
Gets the FileExplorerItem by the passed TreeNode object
@method
@param node - A node from the TreeView
@returns 
*/
getFileExplorerItemFromNode(node: Telerik.Web.UI.RadTreeNode): Telerik.Web.UI.FileExplorerItem;
        /**
Returns a reference to the embedded RadListView object. Returns "null" when the embedded ListView is not visible
@method
@returns 
*/
get_listView(): Telerik.Web.UI.RadListView;
        /**
Sort the file list
@method
@param sortExpression - 
@returns 
*/
sort(sortExpression: any): any;
        /**
Adds additional characters to the file name invalid characters list. Default list is ["\", "/", ":", "*", "?", """, "<", ">", "|"]
@method
@param char - The char to add to the file name invalid chars list
@returns 
*/
addFileNameInvalidChar(char: string): void;
        /**
Filter the file list on the client only. Note that only the items displayed items will be filtered, i.e. paged content will filter only the current page
@method
@param keyWord - 
@returns 
*/
clientFilter(keyWord: any): any;
        /**
Sets whether a file can be opened for preview
@method
@param value - 
@returns 
*/
set_enableOpenFile(value: boolean): void;
        /**
Get the page size as maximum number of items per page
@method
@returns 
*/
get_pageSize(): any;
        /**
Show the content of a particular page
@method
@param startIndex - 
@param pageSize - 
@returns 
*/
showPageContent(startIndex: any, pageSize: any): any;
        /**
Force a server call to collect the content of the folder
@method
@param folderPath - 
@returns 
*/
refreshFileList(folderPath: any): any;
        /**
Set the size of the page, i.e. the maximum number of items per page
@method
@param value - 
@returns 
*/
set_pageSize(value: any): any;
        /**
Changes the currently selected directory
@method
@param value - The new path
@param addToStack - Determines whether the current change of the directory to be stored in the Previous ï
@returns 
*/
set_currentDirectory(value: string, addToStack: boolean): void;
        /**
Returns the size of the currently selected item. NaN if the selected item is a folder
@method
@returns 
*/
get_size(): void;
        /**
Get the data source provided to the control
@method
@returns 
*/
get_dataSource(): any;
        /**
Creates a new directory. The path parameter should be a virtual path. In case that the second parameter is not specified a radprompt dialog appears and asks for the new name.
@method
@param path - The virtual path to the item
@param newName - 
@returns 
*/
createNewDirectory(path: string, newName: string): void;
        /**
Bind the data to the underlying bindable control
@method
@param serverData - 
@param pageIndex - 
@returns 
*/
bindToServerData(serverData: any, pageIndex: any): any;
        /**
Clear any item selection in the file list
@method
@returns 
*/
clearSelection(): any;
        /**
Deletes an item by its virtual path
@method
@param pathToItem - The virtual path to the item
@param showConfirmDialog - Show or not the confirmation dialog. If
@returns 
*/
deleteItem(pathToItem: string, showConfirmDialog: boolean): void;
        /**
Returns the virtual path to the item
@method
@returns 
*/
get_path(): void;
        /**
Returns a reference to a RadMenu object. Returns "null" when the embedded grid is not visible
@method
@returns 
*/
get_gridContextMenu(): Telerik.Web.UI.RadMenu;
        /**
Returns an array of the selected items on the Grid. The items are of type Telerik.Web.UI.FileExplorerItem Returns the selected item on the TreeView if there is no selected items in the Grid
@method
@returns 
*/
get_selectedItems(): any;
        /**
Select a file item from the file list by the provided name
@method
@param fileName - 
@returns 
*/
selectFileByName(fileName: any): any;
        /**
Returns the applied current permissions to the item - enumerable value of type Telerik.Web.UI.FileExplorerItemPermissions
@method
@returns 
*/
get_permissions(): void;
        /**
Returns the symbol used as path separator
@method
@returns 
*/
get_pathSeparator(): string;
        /**
Clears the filtering by reseting the filter and clearing the filter text box
@method
@returns 
*/
clearFilter(): any;
        /**
Opens a file
@method
@param currentItem - The item that will be opened. If the passed parameter is null then the currently selected item will be opened
@returns 
*/
open(currentItem: Telerik.Web.UI.FileExplorerItem): void;
        /**
Get the selected files(Telerik.Web.UI.FileExplorerItem) from the file list
@method
@returns 
*/
getSelectedFiles(): any;
        /**
Find a file by its path
@method
@param path - 
@returns 
*/
findFileByPath(path: any): any;
        /**
Has the same functionality as the get_path() function
@method
@returns 
*/
get_url(): void;
        /**
When "Rename" is performed returns the new name of the item. When the "Move" is performed returns the new destination of the moved folder (see the OnClientMove example bellow)
@method
@returns 
*/
get_newPath(): void;
        /**
Returns the ClientID of the input that shows the currently selected folder. Returns an empty string when the AddressBox is not visible
@method
@returns 
*/
get_addressBox(): string;
        /**
Filter the file list by the provided keyword. This method raises a filter event
@method
@param keyWord - 
@returns 
*/
filterList(keyWord: any): any;
        /**
Select an item from the file list
@method
@param file - 
@returns 
*/
selectFile(file: any): any;
        /**
Returns a Boolean value that indicates whether the selected item is a folder or not
@method
@returns 
*/
isDirectory(): void;
        /**
Returns a reference to the embedded RadTreeView object. Returns "null" when the embedded TreeView is not visible
@method
@returns 
*/
get_tree(): Telerik.Web.UI.RadTreeView;
        /**
Get a reference to the RadFileExplorer that used this instance of FileList
@method
@returns 
*/
get_fileExplorer(): any;
        /**
Returns whether the Grid's paging is enabled
@method
@returns 
*/
get_allowPaging(): boolean;
        /**
Focus the underlying control's DOM element
@method
@returns 
*/
focus(): any;
        /**
Clears the copied items from the control state.
@method
@returns 
*/
clearCopyItems(): void;
        /**
Returns the type of the item – one of the enumerable values in the  Telerik.Web.UI.FileExplorerItemType enumerable
@method
@returns 
*/
get_type(): void;
        /**
Returns a reference to the embedded RadGrid object. Returns "null" when the embedded Grid is not visible
@method
@returns 
*/
get_grid(): Telerik.Web.UI.RadGrid;
        /**
Focus the paging control of the file list
@method
@returns 
*/
focusPagerControl(): any;
        /**
Try to select a default item from the file list. Usually this is the first item, or none if list is empty
@method
@returns 
*/
selectDefaultFile(): any;
        /**
Select a list of files by their names
@method
@param fileNames - 
@returns 
*/
selectFileList(fileNames: any): any;
        /**
Returns an object of type Telerik.Web.UI.FileExplorerItem
@method
@returns 
*/
get_item(): void;
        /**
Returns the name of the item
@method
@returns 
*/
get_name(): void;
        /**
Gets the DOM element, where the file list resides.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Bind the already provided data(use set_dataSource(data)) to the underlying bindable control
@method
@returns 
*/
dataBind(): any;
        /**
Filter the file list by the provided keyword. This method does not raise a filter event
@method
@param keyWord - 
@returns 
*/
doFiltering(keyWord: any): any;
        /**
Get a reference to the context menu that is utilized by the file list
@method
@returns 
*/
get_contextMenu(): any;
        /**
Get the items displayed in the file list.
@method
@returns 
*/
get_items(): any;
        /**
Returns a reference to the embedded RadWindowManager object
@method
@returns 
*/
get_windowManager(): Telerik.Web.UI.RadWindowManager;
        /**
Set the data needed for the data bindable control
@method
@param data - 
@returns 
*/
set_dataSource(data: any): any;
        /**
Get a reference to the underlying bindable control
@method
@returns 
*/
get_control(): any;
        /**
Show the content of a folder. This method takes advantage of a cached folder content, if the folder has already been loaded
@method
@param folderPath - 
@returns 
*/
showFolderFileList(folderPath: any): any;
        /**
Create a FileExplorerItem from the provided path by looking at all file controls (tree or fileList)
@method
@param path - The path of the file
@returns The found item
*/
createItemFromPath(path: string): Telerik.Web.UI.FileExplorerItem;
        /**
Returns a reference to the embedded RadToolBar object. Returns "null" when the embedded ToolBar is not visible
@method
@returns 
*/
get_toolbar(): Telerik.Web.UI.RadToolBar;
        /**
Disposes the control. Does not dispose the underlying bindable control
@method
@returns 
*/
dispose(): any;
        /**
Returns a reference to the embedded RadAjaxLoadingPanel object
@method
@returns 
*/
get_ajaxLoadingPanel(): Telerik.Web.UI.RadAjaxLoadingPanel;
        /**
Marks the provided items as copied. Only the provided items will be copied when the paste occurs.
@method
@param items - The items to copy
@returns 
*/
copyItems(items: any): void;
        /**
Returns whether a file can be opened for preview
@method
@returns 
*/
get_enableOpenFile(): boolean;
        /**
Clears the cached data on the browser
@method
@returns 
*/
clearFolderCache(): void;
        /**
Returns the default text that is shown in the CreateNewFolder dialog
@method
@returns 
*/
get_newFolderDefaultValue(): string;
        /**
Adds a handler for the eventHandlersAttached event - the event just after the event handlers for the dependent controls have been attached, but before the binding
*/
add_eventHandlersAttached(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the eventHandlersAttached event
*/
remove_eventHandlersAttached(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the folderChange event
*/
remove_folderChange(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the ajaxRequestEnd event
*/
remove_ajaxRequestEnd(handler: Function): void;
        /**
Adds a handler for the itemSelected event
*/
add_itemSelected(handler: Function): void;
        /**
Adds a handler for the ajaxRequestStart event
*/
add_ajaxRequestStart(handler: Function): void;
        /**
Adds a handler for the init event
*/
add_init(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the ajaxRequestStart event
*/
remove_ajaxRequestStart(handler: Function): void;
        /**
Adds a handler for the load event
*/
add_load(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the init event
*/
remove_init(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the createNewFolder event
*/
remove_createNewFolder(handler: Function): void;
        /**
Adds a handler for the folderChange event
*/
add_folderChange(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the copy event
*/
remove_copy(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the folderLoaded event
*/
remove_folderLoaded(handler: Function): void;
        /**
Adds a handler for the move event
*/
add_move(handler: Function): void;
        /**
Adds a handler for the copy event
*/
add_copy(handler: Function): void;
        /**
Adds a handler for the folderLoaded event
*/
add_folderLoaded(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the delete event
*/
remove_delete(handler: Function): void;
        /**
Adds a handler for the fileOpen event
*/
add_fileOpen(handler: Function): void;
        /**
Adds a handler for the ajaxRequestEnd event
*/
add_ajaxRequestEnd(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the itemSelected event
*/
remove_itemSelected(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the move event
*/
remove_move(handler: Function): void;
        /**
Adds a handler for the delete event
*/
add_delete(handler: Function): void;
        /**
Adds a handler for the createNewFolder event
*/
add_createNewFolder(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the fileOpen event
*/
remove_fileOpen(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the load event
*/
remove_load(handler: Function): void;
    }


    class RadFileExplorerEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the selected/affected FileExplorerItem.
@method
@returns 
*/
get_item(): void;
        /**
Returns the new or updated path of the selected/affected FileExplorerItem.
@method
@returns 
*/
get_newPath(): void;
        /**
Returns the current path of the selected/affected FileExplorerItem.
@method
@returns 
*/
get_path(): void;
    }


    class RadFileExplorerFilterEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the DOM event.
@method
@returns 
*/
get_domEvent(): Sys.UI.DomEvent;
        /**
Returns the selected filter text.
@method
@returns 
*/
get_text(): void;
        /**
Sets the selected filter text.
@method
@returns 
*/
set_text(): void;
    }


    class RadFilter  extends Telerik.Web.UI.RadWebControl {
        /**
Fires command with the specified command name and argument.
@method
@param commandName - The command name to be fired.
@param commandArgument - Optional argument to be passed.
@returns 
*/
fireCommand(commandName: string, commandArgument: string): void;
        /**
Returns a reference to the filter context menu.
@method
@returns 
*/
get_contextMenu(): any;
        /**
Returns the unique ID of the filter control.
@method
@returns 
*/
get_uniqueID(): string;
        /**
Changes the associated filter function for the expression item with the specified index.
@method
@param ownerIndex - Index of the expression item.
@param filterFunction - The name of the filter function to be used.
@returns 
*/
changeFilterFunction(ownerIndex: number, filterFunction: string): void;
        /**
Adds group for the expression at the specified index.
@method
@param ownerIndex - Index of the expression item.
@returns 
*/
addGroup(ownerIndex: number): void;
        /**
Returns the client ID of the filter control.
@method
@returns 
*/
get_clientID(): string;
        /**
Adds expression for the expression at the specified index.
@method
@param ownerIndex - Index of the expression item.
@returns 
*/
addExpression(ownerIndex: number): void;
        /**
Repaints the client area of the RadFilter control.
@method
@returns 
*/
repaint(): void;
        /**
Changes the group operator for the expression at the specified index.
@method
@param ownerIndex - Index of the expression item.
@param groupOperator - The group operator that should be applied.
@returns 
*/
changeGroupOperator(ownerIndex: number, groupOperator: string): void;
        /**
Applies the created expressions.
@method
@returns 
*/
applyExpressions(): void;
        /**
Changes the name of the used field in the expression by given index and field name.
@method
@param ownerIndex - Index of the expression item.
@param filterName - The name of the filed to be filtered over.
@returns 
*/
changeExpressionFieldName(ownerIndex: number, filterName: string): void;
        /**
This client-side event is fired before the RadFilter is created.
*/
add_filterCreating(handler: Function): void;
        /**
This client-side event is fired when RadFilter object is destroyed, i.e. on each window.onunload.
*/
add_filterDestroying(handler: Function): void;
        /**
This client-side event is fired before the RadFilter.ContextMenu is shown.
*/
add_menuShowing(handler: Function): void;
        /**
This client-side event is fired when the RadFilter.ContextMenu is shown.
*/
add_menuShown(handler: Function): void;
    }


    class RadFormDecorator  extends Telerik.Web.UI.RadWebControl {
        /**
Explicitly decorates the elements
@method
@param rootElement - 
@param addCssClassesToElement - 
@returns 
*/
decorate(rootElement: HTMLElement, addCssClassesToElement: string): void;
        /**
Decorates a single button element, passed as parameter
@method
@param realButton - 
@returns 
*/
decorateButton(realButton: any): void;
        /**
Decorates the buttons inside the passed rootElement. If the passed parameter is null then decorates all buttons on the page
@method
@param rootElement - 
@returns 
*/
decorateButtons(rootElement: any): void;
        /**
Decorates a single input element, passed as parameter
@method
@param input - 
@returns 
*/
decorateInput(input: any): void;
        /**
Decorates a single select element, passed as parameter
@method
@param select - 
@returns 
*/
decorateSelect(select: any): void;
        /**
Decorates the selects inside the passed rootElement. If the passed parameter is null then decorates all selects on the page
@method
@param rootElement - 
@returns 
*/
decorateSelects(rootElement: any): void;
        /**
Decorates the textboxes inside the passed rootElement. If the passed parameter is null then decorates all TextBoxes on the page
@method
@param rootElement - 
@returns 
*/
decorateTextboxes(rootElement: any): void;
        /**
Returns the currently decorated controls (Telerik.Web.UI.FormDecoratorDecoratedControls)
@method
@returns 
*/
get_decoratedControls(): Telerik.Web.UI.FormDecoratorDecoratedControls;
        /**
Returns ID of the element that is set as decoration zone. Returns null if the DecorationZoneID is not set
@method
@returns 
*/
get_decorationZoneID(): string;
        /**
Removes the decoration on the HTML select element
@method
@param select - The already decorated select
@returns 
*/
removeSelectDecoration(select: any): void;
        /**
Sets what controls to be decorated
@method
@param value - 
@returns 
*/
set_decoratedControls(value: Telerik.Web.UI.FormDecoratorDecoratedControls): void;
        /**
Updates the decoration on the HTML select element
@method
@param select - The already decorated select that should be updated
@returns 
*/
updateSelect(select: any): void;
    }


    class RadGauge   {
        /**
Gets the value of the control.
@method
@returns 
*/
get_value(): void;
        /**
Gets the width of the control.
@method
@returns 
*/
get_width(): void;
        /**
Causes the control to repaint (re-render).
@method
@returns 
*/
repaint(): void;
        /**
Sets the height of the control.
@method
@returns 
*/
set_height(): void;
        /**
Sets the value of the control. Does nothing if an invalid argument is supplied. If the passed value is outside of the range of the gauge
                the value is set to the min/max.
@method
@returns 
*/
set_value(): void;
        /**
Sets the width of the control.
@method
@returns 
*/
set_width(): void;
        /**
Gets a reference to the Kendo Gauge widget.
@method
@returns 
*/
kendoWidget(): void;
    }


    class RadGaugeControl  extends Telerik.Web.UI.RadWebControl {
    }


    class RadGrid  extends Telerik.Web.UI.RadWebControl {
        /**
Resizes the modal background of the grid, when the window is resized
@method
@returns 
*/
onWindowResize(): void;
        /**
Returns a collection of selected items in the grid instance
@method
@returns 
*/
get_selectedItems(): any;
        /**
Sets a Boolean value, indicating whether we have enabled multi row selection for the control
@method
@param value - 
@returns 
*/
set_allowMultiRowSelection(value: boolean): void;
        /**
Returns the master table view header instance of the grid
@method
@returns 
*/
get_masterTableViewHeader(): any;
        /**
Returns a Boolean value, indicating whether the control is in edit mode, based on the passed Hierarchical index
@method
@param hierarchicalIndex - 
@returns 
*/
isInEditModeByHierarchicalIndex(hierarchicalIndex: string): boolean;
        /**
Clears the selected items collection of RadGrid
@method
@returns 
*/
clearSelectedItems(): void;
        /**
Clears the current active row for the control
@method
@returns 
*/
clearActiveRow(): void;
        /**
Gets an internal collection of selected items in the grid
@method
@returns 
*/
get_selectedItemsInternal(): number;
        /**
Saves the client state of the grid instance
@method
@returns 
*/
saveClientState(): void;
        /**
Returns a Boolean value, indicating whether KeyboardNavigationSettings AllowActiveRowCycle="true"
@method
@returns 
*/
get_allowActiveRowCycle(): boolean;
        /**
Gets the header menu of the grid instance
@method
@returns 
*/
get_headerMenu(): any;
        /**

@method
@returns 
*/
get_editItems(): any;
        /**
Returns a Boolean value, indicating whether we have enabled multi row selection for the control
@method
@returns 
*/
get_allowMultiRowSelection(): boolean;
        /**
Sets an internal collection of selected items in the grid
@method
@param value - 
@returns 
*/
set_selectedItemsInternal(value: number): void;
        /**
Resizes the modal background of the grid, when the window is resized
@method
@returns 
*/
resizeModalBackground(): void;
        /**

@method
@returns 
*/
get_element(): HTMLElement;
        /**
Redraws the client side object on the client
@method
@returns 
*/
repaint(): void;
        /**

@method
@returns 
*/
set_visible(): any;
        /**

@method
@returns 
*/
get_id(): string;
        /**
Returns the master table view instance of the grid
@method
@returns 
*/
get_masterTableView(): Telerik.Web.UI.GridTableView;
        /**
Shows a confirm window
@method
@param text - 
@param e - 
@param title - 
@param width - 
@param height - 
@returns 
*/
confirm(text: string, e: any, title: string, width: number, height: number): void;
        /**
Returns a collection of detail tables in RadGrid
@method
@returns 
*/
get_detailTables(): any;
        /**
Boolean
@method
@returns 
*/
get_visible(): void;
        /**
Returns the master table view footer instance of the grid
@method
@returns 
*/
get_masterTableViewFooter(): any;
        /**
Sets a value, indicating whether AllowActiveRowCycle="true"
@method
@returns 
*/
set_allowActiveRowCycle(): boolean;
        /**
Adds a handler for the filterMenuShowing event
*/
add_filterMenuShowing(handler: Function): void;
        /**
Adds a handler for the rowDeselecting event
*/
add_rowDeselecting(handler: Function): void;
        /**
Adds a handler for the columnCreated event
*/
add_columnCreated(handler: Function): void;
        /**
Removes the handler for the rowHidden event
*/
remove_rowHidden(handler: Function): void;
        /**
Removes the handler for the columnCreating event
*/
remove_columnCreating(handler: Function): void;
        /**
Removes the handler for the columnHiding event
*/
remove_columnHiding(handler: Function): void;
        /**
Adds a handler for the columnContextMenu event
*/
add_columnContextMenu(handler: Function): void;
        /**
Removes the handler for the rowMouseOut event
*/
remove_rowMouseOut(handler: Function): void;
        /**
Adds a handler for the dataBindingFailed event
*/
add_dataBindingFailed(handler: Function): void;
        /**
Adds a handler for the columnResizing event
*/
add_columnResizing(handler: Function): void;
        /**
Adds a handler for the rowMouseOut event
*/
add_rowMouseOut(handler: Function): void;
        /**
Removes the handler for the columnContextMenu event
*/
remove_columnContextMenu(handler: Function): void;
        /**
Adds a handler for the scroll event
*/
add_scroll(handler: Function): void;
        /**
Removes the handler for the columnMovedToRight event
*/
remove_columnMovedToRight(handler: Function): void;
        /**
Adds a handler for the groupExpanded event
*/
add_groupExpanded(handler: Function): void;
        /**
Removes the handler for the gridCreating event
*/
remove_gridCreating(handler: Function): void;
        /**
Removes the handler for the hierarchyCollapsed event
*/
remove_hierarchyCollapsed(handler: Function): void;
        /**
Adds a handler for the rowDblClick event
*/
add_rowDblClick(handler: Function): void;
        /**
Adds a handler for the columnMovedToRight event
*/
add_columnMovedToRight(handler: Function): void;
        /**
Removes the handler for the keyPress event
*/
remove_keyPress(handler: Function): void;
        /**
Adds a handler for the hierarchyCollapsed event
*/
add_hierarchyCollapsed(handler: Function): void;
        /**
Removes the handler for the tableDestroying event
*/
remove_tableDestroying(handler: Function): void;
        /**
Removes the handler for the filterMenuShowing event
*/
remove_filterMenuShowing(handler: Function): void;
        /**
Removes the handler for the masterTableViewCreated event
*/
remove_masterTableViewCreated(handler: Function): void;
        /**
Removes the handler for the rowMouseOver event
*/
remove_rowMouseOver(handler: Function): void;
        /**
Adds a handler for the masterTableViewCreated event
*/
add_masterTableViewCreated(handler: Function): void;
        /**
Removes the handler for the columnResizing event
*/
remove_columnResizing(handler: Function): void;
        /**
Removes the handler for the rowCreating event
*/
remove_rowCreating(handler: Function): void;
        /**
Adds a handler for the rowMouseOver event
*/
add_rowMouseOver(handler: Function): void;
        /**
Removes the handler for the hierarchyExpanded event
*/
remove_hierarchyExpanded(handler: Function): void;
        /**
Removes the handler for the activeRowChanging event
*/
remove_activeRowChanging(handler: Function): void;
        /**
Adds a handler for the gridDestroying event
*/
add_gridDestroying(handler: Function): void;
        /**
Removes the handler for the rowDeselected event
*/
remove_rowDeselected(handler: Function): void;
        /**
Adds a handler for the columnHidden event
*/
add_columnHidden(handler: Function): void;
        /**
Removes the handler for the rowDragging event
*/
remove_rowDragging(handler: Function): void;
        /**
Adds a handler for the dataSourceResolved event
*/
add_dataSourceResolved(handler: Function): void;
        /**
Removes the handler for the columnMovingToLeft event
*/
remove_columnMovingToLeft(handler: Function): void;
        /**
Removes the handler for the tableCreated event
*/
remove_tableCreated(handler: Function): void;
        /**
Removes the handler for the gridCreated event
*/
remove_gridCreated(handler: Function): void;
        /**
Adds a handler for the rowShown event
*/
add_rowShown(handler: Function): void;
        /**
Adds a handler for the rowHidden event
*/
add_rowHidden(handler: Function): void;
        /**
Adds a handler for the columnShown event
*/
add_columnShown(handler: Function): void;
        /**
Adds a handler for the dataBinding event
*/
add_dataBinding(handler: Function): void;
        /**
Removes the handler for the dataSourceResolved event
*/
remove_dataSourceResolved(handler: Function): void;
        /**
Removes the handler for the columnShowing event
*/
remove_columnShowing(handler: Function): void;
        /**
Adds a handler for the columnCreating event
*/
add_columnCreating(handler: Function): void;
        /**
Adds a handler for the columnSwapping event
*/
add_columnSwapping(handler: Function): void;
        /**
Removes the handler for the columnShown event
*/
remove_columnShown(handler: Function): void;
        /**
Adds a handler for the rowShowing event
*/
add_rowShowing(handler: Function): void;
        /**
Adds a handler for the activeRowChanging event
*/
add_activeRowChanging(handler: Function): void;
        /**
Adds a handler for the columnResized event
*/
add_columnResized(handler: Function): void;
        /**
Removes the handler for the rowResized event
*/
remove_rowResized(handler: Function): void;
        /**
Removes the handler for the columnMouseOut event
*/
remove_columnMouseOut(handler: Function): void;
        /**
Adds a handler for the rowResizing event
*/
add_rowResizing(handler: Function): void;
        /**
Removes the handler for the rowContextMenu event
*/
remove_rowContextMenu(handler: Function): void;
        /**
Adds a handler for the rowResized event
*/
add_rowResized(handler: Function): void;
        /**
Removes the handler for the rowDropping event
*/
remove_rowDropping(handler: Function): void;
        /**
Adds a handler for the rowSelecting event
*/
add_rowSelecting(handler: Function): void;
        /**
Adds a handler for the rowCreating event
*/
add_rowCreating(handler: Function): void;
        /**
Removes the handler for the activeRowChanged event
*/
remove_activeRowChanged(handler: Function): void;
        /**
Removes the handler for the gridDestroying event
*/
remove_gridDestroying(handler: Function): void;
        /**
Removes the handler for the popUpShowing event
*/
remove_popUpShowing(handler: Function): void;
        /**
Removes the handler for the rowSelected event
*/
remove_rowSelected(handler: Function): void;
        /**
Removes the handler for the dataBinding event
*/
remove_dataBinding(handler: Function): void;
        /**
Removes the handler for the tableCreating event
*/
remove_tableCreating(handler: Function): void;
        /**
Adds a handler for the columnShowing event
*/
add_columnShowing(handler: Function): void;
        /**
Adds a handler for the groupCollapsing event
*/
add_groupCollapsing(handler: Function): void;
        /**
Removes the handler for the rowDestroying event
*/
remove_rowDestroying(handler: Function): void;
        /**
Removes the handler for the columnClick event
*/
remove_columnClick(handler: Function): void;
        /**
Removes the handler for the groupExpanded event
*/
remove_groupExpanded(handler: Function): void;
        /**
Adds a handler for the hierarchyExpanding event
*/
add_hierarchyExpanding(handler: Function): void;
        /**
Adds a handler for the rowDeselected event
*/
add_rowDeselected(handler: Function): void;
        /**
Adds a handler for the gridCreating event
*/
add_gridCreating(handler: Function): void;
        /**
Removes the handler for the rowDeleting event
*/
remove_rowDeleting(handler: Function): void;
        /**
Adds a handler for the columnDblClick event
*/
add_columnDblClick(handler: Function): void;
        /**
Adds a handler for the columnSwapped event
*/
add_columnSwapped(handler: Function): void;
        /**
Adds a handler for the columnMovingToLeft event
*/
add_columnMovingToLeft(handler: Function): void;
        /**
Adds a handler for the columnMouseOut event
*/
add_columnMouseOut(handler: Function): void;
        /**
Adds a handler for the rowDragStarted event
*/
add_rowDragStarted(handler: Function): void;
        /**
Removes the handler for the columnMovingToRight event
*/
remove_columnMovingToRight(handler: Function): void;
        /**
Adds a handler for the rowDropped event
*/
add_rowDropped(handler: Function): void;
        /**
Removes the handler for the rowHiding event
*/
remove_rowHiding(handler: Function): void;
        /**
Removes the handler for the rowResizing event
*/
remove_rowResizing(handler: Function): void;
        /**
Adds a handler for the keyPress event
*/
add_keyPress(handler: Function): void;
        /**
Adds a handler for the tableDestroying event
*/
add_tableDestroying(handler: Function): void;
        /**
Removes the handler for the rowDropped event
*/
remove_rowDropped(handler: Function): void;
        /**
Removes the handler for the rowShowing event
*/
remove_rowShowing(handler: Function): void;
        /**
Adds a handler for the gridCreated event
*/
add_gridCreated(handler: Function): void;
        /**
Removes the handler for the columnMovedToLeft event
*/
remove_columnMovedToLeft(handler: Function): void;
        /**
Adds a handler for the columnMovingToRight event
*/
add_columnMovingToRight(handler: Function): void;
        /**
Adds a handler for the rowDropping event
*/
add_rowDropping(handler: Function): void;
        /**
Adds a handler for the dataBound event
*/
add_dataBound(handler: Function): void;
        /**
Removes the handler for the rowDragStarted event
*/
remove_rowDragStarted(handler: Function): void;
        /**
Adds a handler for the rowContextMenu event
*/
add_rowContextMenu(handler: Function): void;
        /**
Adds a handler for the command event
*/
add_command(handler: Function): void;
        /**
Adds a handler for the columnDestroying event
*/
add_columnDestroying(handler: Function): void;
        /**
Removes the handler for the columnCreated event
*/
remove_columnCreated(handler: Function): void;
        /**
Adds a handler for the rowDeleted event
*/
add_rowDeleted(handler: Function): void;
        /**
Adds a handler for the columnMovedToLeft event
*/
add_columnMovedToLeft(handler: Function): void;
        /**
Removes the handler for the rowClick event
*/
remove_rowClick(handler: Function): void;
        /**
Removes the handler for the groupCollapsed event
*/
remove_groupCollapsed(handler: Function): void;
        /**
Removes the handler for the command event
*/
remove_command(handler: Function): void;
        /**
Removes the handler for the hierarchyExpanding event
*/
remove_hierarchyExpanding(handler: Function): void;
        /**
Adds a handler for the rowDeleting event
*/
add_rowDeleting(handler: Function): void;
        /**
Removes the handler for the columnDblClick event
*/
remove_columnDblClick(handler: Function): void;
        /**
Removes the handler for the rowSelecting event
*/
remove_rowSelecting(handler: Function): void;
        /**
Removes the handler for the rowDblClick event
*/
remove_rowDblClick(handler: Function): void;
        /**
Removes the handler for the dataBindingFailed event
*/
remove_dataBindingFailed(handler: Function): void;
        /**
Removes the handler for the groupExpanding event
*/
remove_groupExpanding(handler: Function): void;
        /**
Adds a handler for the rowDragging event
*/
add_rowDragging(handler: Function): void;
        /**
Adds a handler for the columnClick event
*/
add_columnClick(handler: Function): void;
        /**
Removes the handler for the masterTableViewCreating event
*/
remove_masterTableViewCreating(handler: Function): void;
        /**
Removes the handler for the scroll event
*/
remove_scroll(handler: Function): void;
        /**
Adds a handler for the rowDestroying event
*/
add_rowDestroying(handler: Function): void;
        /**
Adds a handler for the rowCreated event
*/
add_rowCreated(handler: Function): void;
        /**
Adds a handler for the hierarchyExpanded event
*/
add_hierarchyExpanded(handler: Function): void;
        /**
Removes the handler for the columnResized event
*/
remove_columnResized(handler: Function): void;
        /**
Adds a handler for the rowDataBound event
*/
add_rowDataBound(handler: Function): void;
        /**
Adds a handler for the columnMouseOver event
*/
add_columnMouseOver(handler: Function): void;
        /**
Removes the handler for the columnHidden event
*/
remove_columnHidden(handler: Function): void;
        /**
Adds a handler for the columnHiding event
*/
add_columnHiding(handler: Function): void;
        /**
Removes the handler for the columnMouseOver event
*/
remove_columnMouseOver(handler: Function): void;
        /**
Removes the handler for the groupCollapsing event
*/
remove_groupCollapsing(handler: Function): void;
        /**
Removes the handler for the rowShown event
*/
remove_rowShown(handler: Function): void;
        /**
Removes the handler for the rowCreated event
*/
remove_rowCreated(handler: Function): void;
        /**
Removes the handler for the dataBound event
*/
remove_dataBound(handler: Function): void;
        /**
Adds a handler for the masterTableViewCreating event
*/
add_masterTableViewCreating(handler: Function): void;
        /**
Adds a handler for the tableCreated event
*/
add_tableCreated(handler: Function): void;
        /**
Adds a handler for the groupExpanding event
*/
add_groupExpanding(handler: Function): void;
        /**
Removes the handler for the rowDeselecting event
*/
remove_rowDeselecting(handler: Function): void;
        /**
Adds a handler for the popUpShowing event
*/
add_popUpShowing(handler: Function): void;
        /**
Removes the handler for the hierarchyCollapsing event
*/
remove_hierarchyCollapsing(handler: Function): void;
        /**
Adds a handler for the headerMenuShowing event
*/
add_headerMenuShowing(handler: Function): void;
        /**
Adds a handler for the activeRowChanged event
*/
add_activeRowChanged(handler: Function): void;
        /**
Removes the handler for the headerMenuShowing event
*/
remove_headerMenuShowing(handler: Function): void;
        /**
Adds a handler for the tableCreating event
*/
add_tableCreating(handler: Function): void;
        /**
Adds a handler for the rowHiding event
*/
add_rowHiding(handler: Function): void;
        /**
Adds a handler for the rowClick event
*/
add_rowClick(handler: Function): void;
        /**
Removes the handler for the columnSwapping event
*/
remove_columnSwapping(handler: Function): void;
        /**
Adds a handler for the groupCollapsed event
*/
add_groupCollapsed(handler: Function): void;
        /**
Adds a handler for the rowSelected event
*/
add_rowSelected(handler: Function): void;
        /**
Removes the handler for the rowDataBound event
*/
remove_rowDataBound(handler: Function): void;
        /**
Adds a handler for the hierarchyCollapsing event
*/
add_hierarchyCollapsing(handler: Function): void;
        /**
Removes the handler for the columnDestroying event
*/
remove_columnDestroying(handler: Function): void;
        /**
Removes the handler for the columnSwapped event
*/
remove_columnSwapped(handler: Function): void;
        /**
Removes the handler for the rowDeleted event
*/
remove_rowDeleted(handler: Function): void;
    }


    class RadHtmlChart  extends Telerik.Web.UI.RadWebControl {
        /**
Sets a boolean value indicating whether an animation is played when the chart is rendered.
@method
@param value - 
@returns 
*/
set_transitions(value: boolean): void;
        /**
Sets the dataSource of the Chart as a JSON string
@method
@param value - 
@returns 
*/
set_dataSource(value: string): void;
        /**
Gets a boolean value indicating whether an animation is played when the chart is rendered.
@method
@returns 
*/
get_transitions(): boolean;
        /**
Returns the SVG representation of the current chart (a string which is a self-contained SVG document)
@method
@returns 
*/
getSVGString(): string;
        /**
Sets new height to the chart
@method
@param value - 
@returns 
*/
set_height(value: number): void;
        /**
Repaints the chart
@method
@returns 
*/
repaint(): void;
        /**
Gets the dataSource of the Chart as a JSON string
@method
@returns 
*/
get_dataSourceJSON(): string;
        /**
Sets new width to the chart
@method
@param value - 
@returns 
*/
set_width(value: number): void;
        /**
Gets the height of the chart
@method
@returns 
*/
get_height(): number;
        /**
Gets the width of the chart
@method
@returns 
*/
get_width(): number;
        /**
Gets a reference to the Kendo Chart widget.
@method
@returns 
*/
kendoWidget(): void;
        /**
Triggers data to be loaded when LoadDataInvocation="FromCode"
@method
@returns 
*/
loadData(): void;
    }


    class RadIconTile  extends Telerik.Web.UI.RadImageTile {
    }


    class RadImageAndTextTile  extends Telerik.Web.UI.RadBaseTile {
        /**
Return the URL of the image dispalyed in the upper content container
@method
@returns 
*/
get_imageUrl(): string;
        /**
Sets the URL of the image dispalyed in the upper content container
@method
@param value - 
@returns 
*/
set_imageUrl(value: string): void;
        /**
Sets the text displayed in the lower content container
@method
@param value - 
@returns 
*/
set_text(value: string): void;
        /**
Return the text displayed in the lower content container
@method
@returns 
*/
get_text(): string;
    }


    class RadImageEditor  extends Telerik.Web.UI.RadWebControl {
        /**
Gets a flag whether the a undo command is available in the undo stack
@method
@returns Is undo available flag
*/
get_isUndoAvailable(): boolean;
        /**
(Un)checks a ToolBar button
@method
@param toolName - The name of the button
@param value - The value of the state
@returns 
*/
setToggleState(toolName: string, value: boolean): void;
        /**
Gets a reference to the top docking zone of the ToolBar panel.
@method
@returns The reference to the top docking zone of the ToolBar panel
*/
get_topZone(): any;
        /**
Gets a reference to the current EditableImage
@method
@returns The current EditableImage
*/
getEditableImage(): Telerik.Web.UI.ImageEditor.EditableImage;
        /**
Gets the current tool widget, i.e. the object holding the dialog's functionality
@method
@returns A reference to the widget
*/
get_currentToolWidget(): Telerik.Web.UI.ImageEditor.ToolWidget;
        /**
Gets the left/x coordinate of the element's location
@method
@returns The value of the left
*/
get_left(): number;
        /**
Rotates the current image 90 degrees counterclockwise, i.e. 270 degrees clockwise
@method
@returns 
*/
rotateLeft90(): void;
        /**
Downloads the image through the browser's save dialog on the user's PC
@method
@param fileName - The name of the file
@returns 
*/
saveImageOnClient(fileName: any): void;
        /**
Gets the lower limit of the zoom level. This is the lowest percentage value up to which the user can zoom out the image in the RadImageEditor.
@method
@returns The lower zoom limit. The default is 25.
*/
get_lowerZoomBound(): number;
        /**
Redoes the previously undone editing steps of the image
@method
@param depth - The depth
@returns 
*/
redo(depth: number): void;
        /**
Sets a shortcut with the specified name (keyword) and shortcut string (the combination of keys). If the shortcut name exists, the existing shortcut is removed.
@method
@param shortcutName - The shortcut name
@param shortcutString - The Keyboard combination for the shortcut. Letter case is ignored.
@returns 
*/
setShortCut(shortcutName: string, shortcutString: string): void;
        /**
Gets a reference to the left docking zone of the ToolBar panel.
@method
@returns The reference to the left docking zone of the ToolBar panel
*/
get_leftZone(): any;
        /**
Gets a reference to the  Tools" panel
@method
@returns The reference to the Tools
*/
get_toolsPanel(): any;
        /**
Fires an ImageEditor's command with the full set of client-side events
@method
@param commandName - The name of the command to fire
@param args - Event arguments accompanying the firing of the command
@returns 
*/
fire(commandName: string, args: any): void;
        /**
Gets the currently executing command
@method
@returns The name of the command
*/
get_currentCommand(): string;
        /**
Gets the ToolBar Mode of the ImageEditor control.
@method
@returns The ToolBar Mode of the ImageEditor control.
*/
get_toolBarMode(): Telerik.Web.UI.ImageEditor.ToolBarMode;
        /**
Gets shortcuts set to the ImageEditor control on the server.
@method
@returns Two dimensional array containing the shortcuts of the ImageEditor set on the server.
*/
get_shortcuts(): any;
        /**
Zooms the image to best fit in the viewport
@method
@returns 
*/
zoomBestFit(): void;
        /**
Zooms in the current image by 50%, i.e. if the current zoom level is 100, after zoom in the level will be 150
@method
@returns 
*/
zoomIn(): void;
        /**
Gets a reference to the image element being edited
@method
@returns The reference to the DOM image element
*/
getImage(): any;
        /**
Flips the image in the Horizontal direction
@method
@returns 
*/
flipHorizontal(): void;
        /**
Gets the height of the ImageEditor control's element
@method
@returns The height of the control
*/
get_height(): number;
        /**
Removes a shortcut with the specified name (keyword).
@method
@param shortcutName - The shortcut name
@returns 
*/
removeShortCut(shortcutName: string): void;
        /**
Initiates an ASP.NET client callback to the server and raises the ImageEditing server side event. The EditableImage can be retrieved from the event arguments, and edited accordingly.
@method
@param commandName - The command name that will be passed to the server and respective client events. It should be unique.
@param commandText - The command text that will be used to record the operation in the Undo
@param commandArgument - The additional command argument that will be passed to the server. By default empty string is passed.
@param callbackFunction - The function that will be called after response is received from the server. Two parameters are sent to this function
@returns 
*/
editImageOnServer(commandName: string, commandText: string, commandArgument: string, callbackFunction: Function): void;
        /**
Gets the upper limit of the zoom level. This is the highest percentage value up to which the user can zoom in the image in the RadImageEditor.
@method
@returns The upper zoom limit. The default is 400.
*/
get_upperZoomBound(): number;
        /**
Rotates the current image clockwise with the specified enum angle value
@method
@param rotation - Enum to determine the angle value. Only orthogonal values
@param shouldUpdateUI - Flag whether the UI
@returns 
*/
rotateImage(rotation: Telerik.Web.UI.ImageEditor.Rotation, shouldUpdateUI: boolean): void;
        /**
Opens the tools panel with the current tool widget
@method
@returns 
*/
openToolsPanel(): void;
        /**
Gets a reference to the bottom docking zone of the ToolBar panel.
@method
@returns The reference to the bottom docking zone of the ToolBar panel
*/
get_bottomZone(): any;
        /**
Forces the changes made to the image to be applied on the server
@method
@returns 
*/
applyChangesOnServer(): void;
        /**
Sets the current tool widget
@method
@param value - The new current widget
@returns 
*/
set_currentToolWidget(value: Telerik.Web.UI.ImageEditor.ToolWidget): void;
        /**
Stores the client-state changes made during the client-side existence of the control
@method
@returns 
*/
saveClientState(): void;
        /**
Gets a reference to the right docking zone of the ToolBar panel.
@method
@returns The reference to the right docking zone of the ToolBar panel
*/
get_rightZone(): any;
        /**
Executes the provided filter against the current editable image and adds the operation to the undo stack
@method
@param filter - The filter to be applied
@returns 
*/
applyFilter(filter: Telerik.Web.UI.ImageEditor.Filters.IPixelFilter): void;
        /**
Gets a reference to the resizing handle element, i.e. the element, by which the user resizes the ImageEditor's element
@method
@returns A reference ot the resize handle
*/
get_resizeHandle(): any;
        /**
Adds a shortcut with the specified name (keyword) and shortcut string (the combination of keys).
@method
@param shortcutName - The shortcut name
@param shortcutString - The Keyboard combination for the shortcut. Letter case is ignored.
@returns 
*/
addShortCut(shortcutName: string, shortcutString: string): void;
        /**
Gets a reference to the XmlHttpPanel that manages the loading of the dialogs
@method
@returns A reference to the XmlHttpPanel
*/
get_xmlHttpPanel(): Telerik.Web.UI.RadXmlHttpPanel;
        /**
Adds text to the image in the specified position
@method
@param x - The X coordinate of the text
@param y - The Y coordinate of the text
@param text - The text to add to the image
@returns 
*/
addTextToImage(x: number, y: number, text: Telerik.Web.UI.ImageEditor.ImageText): void;
        /**
Sets the height of the ImageEditor control's element
@method
@param value - The value in pixels
@returns 
*/
set_height(value: number): void;
        /**
Initializes an internal callback using a XmlHttpPanel
@method
@param target - Data to send to the server
@returns 
*/
initCallback(target: string): void;
        /**
Zooms out the current image by 50%, i.e. if the current zoom level is 100, after zoom in the level will be 50
@method
@returns 
*/
zoomOut(): void;
        /**
Gets the undo stack of operations
@method
@returns The undo stack
*/
get_operationsToUndo(): any;
        /**
Inserts image (clip art) into the editable image at the specified position
@method
@param x - The X coordinate of the image
@param y - The Y coordinate of the image
@param imgSrc - The client URL of the image to insert.
@param operations - Array of operations to apply to the clip art image
@returns 
*/
insertImage(x: number, y: number, imgSrc: string, operations: any): void;
        /**
Zooms(scales) the image by the specified level in percents. This operation does not change the image
@method
@param zoomLevel - The level
@param shouldUpdateUI - Flag whether the UI
@returns 
*/
zoomImage(zoomLevel: number, shouldUpdateUI: boolean): void;
        /**
Rotates the current image 90 degrees clockwise
@method
@returns 
*/
rotateRight90(): void;
        /**
Gets a flag whether the a redo command is available in the redo stack
@method
@returns Is redo available flag
*/
get_isRedoAvailable(): boolean;
        /**
Gets the width of the ImageEditor control's element
@method
@returns The width of the control
*/
get_width(): number;
        /**
Enables/disables the resizing of the ImageEditor control
@method
@param value - Flag to enable
@returns 
*/
set_enableResize(value: boolean): void;
        /**
Gets a reference to the Toolbar's container DOM element
@method
@returns The Toolbar
*/
get_toolBarContainer(): any;
        /**
Gets the flag to indicate whether the resizing of the ImageEditor control is enabled
@method
@returns Is resize enabled flag
*/
get_enableResize(): boolean;
        /**
Undoes the last editing steps of the image
@method
@param depth - The depth
@returns 
*/
undo(depth: number): void;
        /**
Saves the image to the server in the same directory as the original image
@method
@param fileName - The name of the file
@param overwrite - Flag to allow an image with the same name to be overwritten
@returns 
*/
saveImageOnServer(fileName: any, overwrite: boolean): void;
        /**
Resizes the current image. This operation changes the image.
@method
@param width - The width
@param height - The height
@param shouldUpdateUI - Flag whether the UI
@returns 
*/
resizeImage(width: number, height: number, shouldUpdateUI: boolean): void;
        /**
Gets the redo stack of operations
@method
@returns The redo stack
*/
get_operationsToRedo(): any;
        /**
Gets a reference to the DOM element holding the edited image
@method
@returns The reference to the viewport
*/
get_viewport(): any;
        /**
Flips the image in the Vertical direction
@method
@returns 
*/
flipVertical(): void;
        /**
Closes the tools panel
@method
@returns 
*/
closeToolsPanel(): void;
        /**
Executes an ImageEditor's command and opens the corresponding dialog. Does not fire the client-side events.
@method
@param commandName - The name of the command to execute
@returns 
*/
executeCommand(commandName: string): void;
        /**
Gets a collection of the different tool groups in the Tools" panel
@method
@returns The collection of the different tool groups in the Tools
*/
get_toolGroups(): any;
        /**
Redraws the ImageEditor
@method
@returns 
*/
repaint(): void;
        /**
Gets the location of the ImageEditor control's element
@method
@param forceCalculation - Flag to force recalculation of the element
@returns The position of the control
*/
get_location(forceCalculation: boolean): Sys.UI.Point;
        /**
Gets a dictionary of the present tools in the Tools" panel
@method
@returns The dictionary of the present tools in the Tools
*/
get_tools(): any;
        /**
Sets the currently executing command
@method
@param value - The name of the command
@returns 
*/
set_currentCommand(value: string): void;
        /**
Sets the width of the ImageEditor control's element
@method
@param value - The value in pixels
@returns 
*/
set_width(value: number): void;
        /**
Resets the changes to the current image and reverts it to the original one
@method
@returns 
*/
resetChanges(): void;
        /**
Gets the top/y coordinate of the element's location
@method
@returns The value of the top
*/
get_top(): number;
        /**
Changes the opacity of the image
@method
@param opacity - The opacity that is applied to the image
@param shouldUpdateUI - Flag whether the UI
@returns 
*/
changeImageOpacity(opacity: number, shouldUpdateUI: boolean): void;
        /**
Flips the image in a horizontal or vertical direction
@method
@param flipDirection - The direction of flipping
@param shouldUpdateUI - Flag whether the UI
@param forceChanges - Flag whether the previously set flip direction should be taken under consideration
@returns 
*/
flipImage(flipDirection: Telerik.Web.UI.ImageEditor.FlipDirection, shouldUpdateUI: boolean, forceChanges: boolean): void;
        /**
Gets the FormDecorator, used in decorating the dialog's UI
@method
@returns A reference to the RadFormDecorator
*/
get_formDecorator(): Telerik.Web.UI.RadFormDecorator;
        /**
Gets a reference to the ToolBar panel(the movable dock container).
@method
@returns The reference to the ToolBar panel
*/
get_toolBarPanel(): any;
        /**
Gets the position of the RadImageEditor ToolBar.
@method
@returns The position of the RadImageEditor ToolBar.
*/
get_toolBarPosition(): Telerik.Web.UI.ImageEditor.ToolBarPosition;
        /**
Adds a handler to the resizeStart event (OnClientResizeStart server-side property). This client-side event occurs when the user starts resizing the control by the resize handle.
*/
add_resizeStart(handler: Function): void;
        /**
Removes a handler from the commandExecuting event (OnClientCommandExecuting server-side property). This client-side event occurs immediately after the user has fired a command. Built-in commands include: Print, Rotate, Flip.
*/
remove_commandExecuting(handler: Function): void;
        /**
Adds a handler to the imageChanged event (OnClientImageChanged server-side property). This client-side event occurs after the user has edited the image (i.e. after it has been changed).
*/
add_imageChanged(handler: Function): void;
        /**
Removes a handler from the toolsDialogClosed event (OnClientToolsDialogClosed server-side property). This client-side event occurs after the user has closed the dialog that loads the image editor tools.
*/
remove_toolsDialogClosed(handler: Function): void;
        /**
Removes a handler from the saved event (OnClientSaved server-side property). This client-side event occurs after the user has saved the image.
*/
remove_saved(handler: Function): void;
        /**
Adds a handler to the commandExecuting event (OnClientCommandExecuting server-side property). This client-side event occurs immediately after the user has fired a command. Built-in commands include: Print, Rotate, Flip.
*/
add_commandExecuting(handler: Function): void;
        /**
Removes a handler from the saving event (OnClientSaving server-side property). This client-side event occurs before the user has saved the image. The event can be cancelled - thus the saving can be cancelled.
*/
remove_saving(handler: Function): void;
        /**
Removes a handler from the shortCutHit event (OnClientShortCutHit server-side property). This client-side event occurs when the user has pressed the shortcut combination on the keyboard. In order for the event to be fired the shortcut has to be registered with the RadImageEditor control. This event can be cancelled, and custom behavior implemented.
*/
remove_shortCutHit(handler: Function): void;
        /**
Adds a handler to the resizeEnd event (OnClientResizeEnd server-side property). This client-side event occurs after the user has finished resizing the control by the resize handle.
*/
add_resizeEnd(handler: Function): void;
        /**
Adds a handler to the load event (OnClientLoad server-side property). This client-side event occurs after the control is initialized.
*/
add_load(handler: Function): void;
        /**
Adds a handler to the toolsDialogClosed event (OnClientToolsDialogClosed server-side property). This client-side event occurs after the user has closed the dialog that loads the image editor tools.
*/
add_toolsDialogClosed(handler: Function): void;
        /**
Adds a handler to the imageChanging event (OnClientImageChanging server-side property). This client-side event occurs immediately before the user has edited the image on the client (i.e. before it is changed).
*/
add_imageChanging(handler: Function): void;
        /**
Removes a handler from the imageChanged event (OnClientImageChanged server-side property). This client-side event occurs after the user has edited the image (i.e. after it has been changed).
*/
remove_imageChanged(handler: Function): void;
        /**
Adds a handler to the shortCutHit event (OnClientShortCutHit server-side property). This client-side event occurs when the user has pressed the shortcut combination on the keyboard. In order for the event to be fired the shortcut has to be registered with the RadImageEditor control. This event can be cancelled, and custom behavior implemented.
*/
add_shortCutHit(handler: Function): void;
        /**
Removes a handler from the imageChanging event (OnClientImageChanging server-side property). This client-side event occurs immediately before the user has edited the image on the client (i.e. before it is changed).
*/
remove_imageChanging(handler: Function): void;
        /**
Adds a handler to the saving event (OnClientSaving server-side property). This client-side event occurs before the user has saved the image. The event can be cancelled - thus the saving can be cancelled.
*/
add_saving(handler: Function): void;
        /**
Removes a handler from the commandExecuted event (OnClientCommandExecuted server-side property). This client-side event occurs immediately after the command has been executed. Built-in commands include: Print, Rotate, Flip.
*/
remove_commandExecuted(handler: Function): void;
        /**
Removes a handler from the load event (OnClientLoad server-side property). This client-side event occurs after the control is initialized.
*/
remove_load(handler: Function): void;
        /**
Adds a handler to the commandExecuted event (OnClientCommandExecuted server-side property). This client-side event occurs immediately after the command has been executed. Built-in commands include: Print, Rotate, Flip.
*/
add_commandExecuted(handler: Function): void;
        /**
Removes a handler from the resizeEnd event (OnClientResizeEnd server-side property). This client-side event occurs after the user has finished resizing the control by the resize handle.
*/
remove_resizeEnd(handler: Function): void;
        /**
Adds a handler to the saved event (OnClientSaved server-side property). This client-side event occurs after the user has saved the image.
*/
add_saved(handler: Function): void;
        /**
Removes a handler from the resizeStart event (OnClientResizeStart server-side property). This client-side event occurs when the user starts resizing the control by the resize handle.
*/
remove_resizeStart(handler: Function): void;
    }


    class RadImageGallery   {
        /**
Returns the URL of the image.
@method
@returns 
*/
get_imageUrl(): void;
        /**
Gets the index of the particular item.
@method
@returns 
*/
get_itemIndex(): void;
        /**
Gets the parent of the current object.
@method
@returns 
*/
get_owner(): void;
        /**
Returns the related thumbnail element.
@method
@returns 
*/
get_thumbnailElement(): void;
        /**
Returns the URL of the thumbnail.
@method
@returns 
*/
get_thumbnailUrl(): void;
        /**
Gets the title of the image.
@method
@returns 
*/
get_title(): void;
        /**
Returns the width of the image.
@method
@returns 
*/
get_width(): void;
    }


    class RadImageTile  extends Telerik.Web.UI.RadBaseTile {
        /**
Return the URL of the image dispalyed in the content container
@method
@returns 
*/
get_imageUrl(): string;
        /**
Sets the URL of the image dispalyed in the content container
@method
@param value - 
@returns 
*/
set_imageUrl(value: string): void;
    }


    class RadInput   {
        /**
string
@method
@returns 
*/
get_editValue(): void;
        /**
string
@method
@returns 
*/
get_displayValue(): void;
    }


    class RadInputComponent  extends Sys.Component {
        /**
Gets the disabled css of RadInputComponent
@method
@returns 
*/
get_disabledCss(): boolean;
        /**
Returns the message that appears when the value is not set
@method
@returns 
*/
get_emptyMessage(): string;
        /**
Returns the message Css that appears when the value is not set
@method
@returns 
*/
get_emptyMessageCss(): string;
        /**
Gets the enabled css of RadInputComponent
@method
@returns 
*/
get_enabledCss(): boolean;
        /**
Gets the error message of RadInputComponent
@method
@returns 
*/
get_errorMessage(): string;
        /**
Gets the focused css of RadInputComponent
@method
@returns 
*/
get_focusedCss(): boolean;
        /**
Gets the hovered css of RadInputComponent
@method
@returns 
*/
get_hoveredCss(): boolean;
        /**
Returns a Boolean value,initializing the client instance of RadInputComponent
@method
@returns 
*/
get_initializeOnClient(): boolean;
        /**
Gets the invalid css of RadInputComponent
@method
@returns 
*/
get_invalidCss(): boolean;
        /**
Returns a Boolean value, indicating whether the value of the input is required
@method
@returns 
*/
get_isRequired(): boolean;
        /**
Gets the location of RadInputComponent
@method
@returns 
*/
get_location(): string;
        /**
Gets the method of RadInputComponent
@method
@returns 
*/
get_method(): string;
        /**
Gets the read only css of RadInputComponent
@method
@returns 
*/
get_readOnlyCss(): boolean;
        /**
Returns the value of the SelectionOnFocus property
@method
@returns 
*/
get_selectionOnFocus(): Telerik.Web.UI.SelectionOnFocus;
        /**
Returns the id of the target control
@method
@returns 
*/
get_targetControlID(): string;
        /**
Returns an Array containing the ids of the target inputs
@method
@returns 
*/
get_targetControlIDs(): any;
        /**
Gets validateOnEvent of RadInputComponent
@method
@returns 
*/
get_validateOnEvent(): number;
        /**
Gets the validation group of RadInputComponent
@method
@returns 
*/
get_validationGroup(): string;
        /**
Returns a Boolean value, indicating whether the value of the input is valid
@method
@param inputId - 
@returns 
*/
isValid(inputId: boolean): void;
        /**
Raises the event of RadInputComponent
@method
@param eventName - 
@param eventArgs - 
@returns 
*/
raiseEvent(eventName: string, eventArgs: Sys.EventArgs): void;
        /**
Raises the blur event
@method
@param args - 
@returns 
*/
raise_blur(args: Sys.EventArgs): void;
        /**
Raises the handler for the error event
@method
@param args - 
@returns 
*/
raise_error(args: Sys.EventArgs): void;
        /**
Raises the focus event
@method
@param args - 
@returns 
*/
raise_focus(args: Sys.EventArgs): void;
        /**
Raises the keyPress event
@method
@param args - 
@returns 
*/
raise_keyPress(args: Sys.EventArgs): void;
        /**
Raises the handler for the validating event
@method
@param args - 
@returns 
*/
raise_validating(args: Sys.EventArgs): void;
        /**
Sets the disabled css of RadInputComponent
@method
@param value - 
@returns 
*/
set_disabledCss(value: boolean): void;
        /**
Sets the message that appears when the value is not set
@method
@param value - 
@returns 
*/
set_emptyMessage(value: string): void;
        /**
Sets the message Css that appears when the value is not set
@method
@param value - 
@returns 
*/
set_emptyMessageCss(value: string): void;
        /**
Sets the enabled css of RadInputComponent
@method
@param value - 
@returns 
*/
set_enabledCss(value: boolean): void;
        /**
Sets the error message of RadInputComponent
@method
@param value - 
@returns 
*/
set_errorMessage(value: string): void;
        /**
Sets the focused css of RadInputComponent
@method
@param value - 
@returns 
*/
set_focusedCss(value: boolean): void;
        /**
Sets the hovered css of RadInputComponent
@method
@param value - 
@returns 
*/
set_hoveredCss(value: boolean): void;
        /**
Accepts  a Boolean value,initializing the client instance of RadInputComponen
@method
@param value - 
@returns 
*/
set_initializeOnClient(value: boolean): void;
        /**
Sets the invalid css of RadInputComponent
@method
@param value - 
@returns 
*/
set_invalidCss(value: boolean): void;
        /**
Accepts a Boolean value, indicating whether the value of the input is required
@method
@param value - 
@returns 
*/
set_isRequired(value: boolean): void;
        /**
Sets the location of RadInputComponent
@method
@param value - 
@returns 
*/
set_location(value: string): void;
        /**
Sets the method of RadInputComponent
@method
@param value - 
@returns 
*/
set_method(value: string): void;
        /**
Sets the read only css of RadInputComponent
@method
@param value - 
@returns 
*/
set_readOnlyCss(value: boolean): void;
        /**
Accepts the value of the SelectionOnFocus property
@method
@param value - 
@returns 
*/
set_selectionOnFocus(value: Telerik.Web.UI.SelectionOnFocus): void;
        /**
Accepts the id of the target control
@method
@param value - 
@returns 
*/
set_targetControlID(value: string): void;
        /**
Accepts an Array containing the ids of the target inputs
@method
@param value - 
@returns 
*/
set_targetControlIDs(value: any): void;
        /**
Sets validateOnEvent of RadInputComponent
@method
@param value - 
@returns 
*/
set_validateOnEvent(value: number): void;
        /**
Sets the validation group of RadInputComponent
@method
@param value - 
@returns 
*/
set_validationGroup(value: string): void;
        /**
Returns a Boolean value, indicating success
@method
@param result - 
@returns 
*/
success(result: boolean): void;
        /**
Adds the handler for the blur event
*/
add_blur(handler: Function): void;
        /**
Adds the handler for the error event
*/
add_error(handler: Function): void;
        /**
Adds the handler for the focus event
*/
add_focus(handler: Function): void;
        /**
Adds the handler for the keyPress event
*/
add_keyPress(handler: Function): void;
        /**
Adds the handler for the validating event
*/
add_validating(handler: Function): void;
        /**
Removes the handler for the blur event
*/
remove_blur(handler: Function): void;
        /**
Removes the handler for the error event
*/
remove_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
remove_focus(handler: Function): void;
        /**
Removes the handler for the keyPress event
*/
remove_keyPress(handler: Function): void;
        /**
Removes the handler for the validating event
*/
remove_validating(handler: Function): void;
    }


    class RadInputControl  extends Telerik.Web.UI.RadWebControl {
        /**
Indicating whether RadInputControl loses focus
@method
@returns 
*/
blur(): void;
        /**
Clears the client instance of RadInputControl
@method
@returns 
*/
clear(): void;
        /**
Disables the client instance of RadInputControl
@method
@returns 
*/
disable(): void;
        /**
Enables the client instance of RadInputControl
@method
@returns 
*/
enable(): void;
        /**
Indicating whether RadInputControl enter focus
@method
@returns 
*/
focus(): void;
        /**
Returns the value of the AutoPostBack property
@method
@returns 
*/
get_autoPostBack(): boolean;
        /**
Returns the current position of the caret.
@method
@returns 
*/
get_caretPosition(): number;
        /**
Gets the value of RadInputControl as it is formatted when the input does not have focus
@method
@returns 
*/
get_displayValue(): string;
        /**
Gets the value of RadInputControl as it is formatted when the input has focus
@method
@returns 
*/
get_editValue(): string;
        /**
Returns the message that appears when the input value is an empty string
@method
@returns 
*/
get_emptyMessage(): string;
        /**
Returns true if the input is enabled
@method
@returns 
*/
get_enabled(): boolean;
        /**
Returns true if the input in error state (riError class is applied)
@method
@returns 
*/
get_invalid(): boolean;
        /**
Gets the invalid style duration of RadInputControl
@method
@returns 
*/
get_invalidStyleDuration(): number;
        /**
Returns the value of the SelectionOnFocus property
@method
@returns 
*/
get_selectionOnFocus(): Telerik.Web.UI.SelectionOnFocus;
        /**
Returns true if the input has an associated image button
@method
@returns 
*/
get_showButton(): boolean;
        /**
Returns the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded
@method
@returns 
*/
get_styles(): any;
        /**
Gets the string that the user typed into the input
@method
@returns 
*/
get_textBoxValue(): string;
        /**
Returns the value of the text box
@method
@returns 
*/
get_value(): string;
        /**
Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element
@method
@returns 
*/
get_visible(): boolean;
        /**
Gets the DOM element for the DIV wrapper element
@method
@returns 
*/
get_wrapperElement(): HTMLElement;
        /**
Returns true if the value of the RadInputControl is empty
@method
@returns 
*/
isEmpty(): void;
        /**
Returns true if the value of the RadInputControl is multi line
@method
@returns 
*/
isMultiLine(): void;
        /**
Returns true if the value of the RadInputControl is a negative number
@method
@returns 
*/
isNegative(): void;
        /**
Returns true if the value of the RadInputControl is read only
@method
@returns 
*/
isReadOnly(): void;
        /**
Raises the postback event of RadInputControl
@method
@returns 
*/
raisePostBackEvent(): void;
        /**
Raises the blur event
@method
@param args - 
@returns 
*/
raise_blur(args: Sys.EventArgs): void;
        /**
Raises the buttonClick event
@method
@param args - 
@returns 
*/
raise_buttonClick(args: Sys.EventArgs): void;
        /**
Raises the handler for the mouseOver event
@method
@param args - 
@returns 
*/
raise_disable(args: Sys.EventArgs): void;
        /**
Raises the enable event
@method
@param args - 
@returns 
*/
raise_enable(args: Sys.EventArgs): void;
        /**
Raises the enumerationChanged event
@method
@param args - 
@returns 
*/
raise_enumerationChanged(args: Sys.EventArgs): void;
        /**
Raises the error event
@method
@param args - 
@returns 
*/
raise_error(args: Sys.EventArgs): void;
        /**
Raises the focus event
@method
@param args - 
@returns 
*/
raise_focus(args: Sys.EventArgs): void;
        /**
Raises the keyPress event
@method
@param args - 
@returns 
*/
raise_keyPress(args: Sys.EventArgs): void;
        /**
Raises the load event
@method
@param args - 
@returns 
*/
raise_load(args: Sys.EventArgs): void;
        /**
Raises the mouseOut event
@method
@param args - 
@returns 
*/
raise_mouseOut(args: Sys.EventArgs): void;
        /**
Raises the mouseOver event
@method
@param args - 
@returns 
*/
raise_mouseOver(args: Sys.EventArgs): void;
        /**
Raises the moveDown event
@method
@param args - 
@returns 
*/
raise_moveDown(args: Sys.EventArgs): void;
        /**
Raises the moveUp event
@method
@param args - 
@returns 
*/
raise_moveUp(args: Sys.EventArgs): void;
        /**
Raises the valueChanged event
@method
@param newValue - 
@param oldValue - 
@returns 
*/
raise_valueChanged(newValue: any, oldValue: any): void;
        /**
Raises the valueChanging event
@method
@param args - 
@returns 
*/
raise_valueChanging(args: Sys.EventArgs): void;
        /**
Redraws the client side object on the client
@method
@returns 
*/
repaint(): void;
        /**
Selects all text in the RadInputControl
@method
@returns 
*/
selectAllText(): void;
        /**
Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range
@method
@param start - 
@param end - 
@returns 
*/
selectText(start: number, end: number): void;
        /**
Enables or disables postbacks when the user changes the text in the input
@method
@param value - 
@returns 
*/
set_autoPostBack(value: boolean): void;
        /**
Sets the position of the caret
@method
@param position - 
@returns 
*/
set_caretPosition(position: number): void;
        /**
Sets the message that appears when the input value is an empty string
@method
@param value - 
@returns 
*/
set_emptyMessage(value: string): void;
        /**
Sets true if the input is enabled
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets if the input should be in error state (riError class to be applied)
@method
@param value - 
@returns 
*/
set_invalid(value: boolean): void;
        /**
Sets the invalid style duration of RadInputControl
@method
@param value - 
@returns 
*/
set_invalidStyleDuration(value: number): void;
        /**
Sets the SelectionOnFocus property
@method
@param value - 
@returns 
*/
set_selectionOnFocus(value: Telerik.Web.UI.SelectionOnFocus): void;
        /**
Accepts true if the input has an associated image button
@method
@param value - 
@returns 
*/
set_showButton(value: boolean): void;
        /**
Sets the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded
@method
@param value - 
@returns 
*/
set_styles(value: any): void;
        /**
Sets the string that the user typed into the input
@method
@param value - 
@returns 
*/
set_textBoxValue(value: string): void;
        /**
Sets the value of the text box
@method
@param newValue - 
@returns 
*/
set_value(newValue: string): void;
        /**
Sets the input element as hidden on the client
@method
@param value - 
@returns 
*/
set_visible(value: boolean): void;
        /**
Updates the css class of RadInputControl
@method
@returns 
*/
updateCssClass(): void;
        /**
Updates the css text of RadInputControl
@method
@param styleCssText - 
@returns 
*/
updateCssText(styleCssText: string): void;
        /**
Updates the display value of RadInputControl
@method
@returns 
*/
updateDisplayValue(): void;
        /**
Adds the handler for the blur event
*/
add_blur(handler: Function): void;
        /**
Adds the handler for the buttonClick event
*/
add_buttonClick(handler: Function): void;
        /**
Adds the handler for the disable event
*/
add_disable(handler: Function): void;
        /**
Adds the handler for the enable event
*/
add_enable(handler: Function): void;
        /**
Adds the handler for the enumerationChanged event
*/
add_enumerationChanged(handler: Function): void;
        /**
Adds the handler for the error event
*/
add_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
add_focus(handler: Function): void;
        /**
Adds the handler for the keyPress event
*/
add_keyPress(handler: Function): void;
        /**
Add the handler for the load event
*/
add_load(handler: Function): void;
        /**
Adds a handler for the mouseOut event
*/
add_mouseOut(handler: Function): void;
        /**
Add the handler for the mouseOver event
*/
add_mouseOver(handler: Function): void;
        /**
Adds the handler for the moveDown event
*/
add_moveDown(handler: Function): void;
        /**
Adds the handler for the moveUp event
*/
add_moveUp(handler: Function): void;
        /**
Adds the handler for the valueChanged event
*/
add_valueChanged(handler: Function): void;
        /**
Adds the handler for the valueChanging event
*/
add_valueChanging(handler: Function): void;
        /**
Removes the handler for the blur event
*/
remove_blur(handler: Function): void;
        /**
Removes the handler for the buttonClick event
*/
remove_buttonClick(handler: Function): void;
        /**
Removes the handler for the disable event
*/
remove_disable(handler: Function): void;
        /**
Removes the handler for the enable event
*/
remove_enable(handler: Function): void;
        /**
Removes the handler for the enumerationChanged event
*/
remove_enumerationChanged(handler: Function): void;
        /**
Removes the handler for the error event
*/
remove_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
remove_focus(handler: Function): void;
        /**
Removes the handler for the keyPress event
*/
remove_keyPress(handler: Function): void;
        /**
Removes the handler for the load event
*/
remove_load(handler: Function): void;
        /**
Removes the handler for the mouseOut event
*/
remove_mouseOut(handler: Function): void;
        /**
Removes the handler for the mouseOver event
*/
remove_mouseOver(handler: Function): void;
        /**
Removes the handler for the moveDown event
*/
remove_moveDown(handler: Function): void;
        /**
Removes the handler for the moveUp event
*/
remove_moveUp(handler: Function): void;
        /**
Removes the handler for the valueChanged event
*/
remove_valueChanged(handler: Function): void;
        /**
Removes the handler for the valueChanging event
*/
remove_valueChanging(handler: Function): void;
    }


    class RadInputExtender   {
        /**
Removes focus from the input, moving it to the next control in the tab order of the page.
@method
@returns 
*/
blur(): void;
        /**
Sets the value of the input to an empty string
@method
@returns 
*/
clear(): void;
        /**
Sets focus to the input so that the user can edit its value
@method
@returns 
*/
focus(): void;
        /**
Returns the format display value of RadInputExtender
@method
@param value - 
@returns 
*/
formatDisplayValue(value: any): void;
        /**
Returns the format edit value of RadInputExtender
@method
@param value - 
@returns 
*/
formatEditValue(value: any): void;
        /**
Gets the id of RadInputExtender
@method
@returns 
*/
get_id(): string;
        /**
Gets the owner of RadInputExtender
@method
@returns 
*/
get_owner(): string;
        /**
Gets the value of RadInputExtender
@method
@returns 
*/
get_value(): string;
        /**
Returns a Boolean value, indicating whether the RadInputExtender is empty
@method
@returns 
*/
isEmpty(): void;
        /**
Returns true if the value of the input extender is negative
@method
@returns 
*/
isNegative(): void;
        /**
Parses a string using the DateFormatInfo object and returns the resulting value
@method
@param value - 
@returns 
*/
parseValue(value: string): void;
        /**
Returns a Boolean value, indicating whether error is raised
@method
@param args - 
@returns 
*/
raise_error(args: boolean): void;
        /**
Selects all text in RadInputExtender
@method
@returns 
*/
selectAllText(): void;
        /**
Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range
@method
@param start - 
@param end - 
@returns 
*/
selectText(start: number, end: number): void;
        /**
Sets the position of the caret.
@method
@param position - 
@returns 
*/
set_caretPosition(position: number): void;
        /**
Sets the new value of RadInputExtender
@method
@param newValue - 
@returns 
*/
set_value(newValue: string): void;
        /**
Updates the css class of RadInputExtender
@method
@returns 
*/
updateCssClass(): void;
        /**
Updates the value of RadInputExtender
@method
@param newValue - 
@returns 
*/
updateValue(newValue: string): void;
        /**
Returns the validate input value of RadInputExtender
@method
@param value - 
@returns 
*/
validateInputValue(value: Date): void;
    }


    class RadInputManager  extends Telerik.Web.UI.RadWebControl {
        /**
Gets the RadInputManager control behaviors
@method
@returns 
*/
get_behaviors(): any;
        /**
Gets the date input settings of the RadInputManager control
@method
@returns 
*/
get_dateInputSettings(): any;
        /**
Gets the input settings of the RadInputManager control
@method
@param behaviorID - 
@returns 
*/
get_inputSettings(behaviorID: string): any;
        /**
Gets the numeric text box settings of the RadInputManager control
@method
@returns 
*/
get_numericTextBoxSettings(): any;
        /**
Gets the regular expression text box settings of the RadInputManager control
@method
@returns 
*/
get_regExpTextBoxSettings(): any;
        /**
Gets the target input of the RadInputManager control
@method
@param id - 
@returns 
*/
get_targetInput(id: string): any;
        /**
Gets the text box settings of the RadInputManager control
@method
@returns 
*/
get_textBoxSettings(): any;
        /**
Sets the RadInputManager control behaviors
@method
@param value - 
@returns 
*/
set_behaviors(value: any): void;
    }


    class RadLightBox   {
        /**
Hides the LightBox control
@method
@returns 
*/
hide(): void;
        /**
Navigates to the next page/image
@method
@returns 
*/
next(): void;
        /**
Navigates backward to the previous page/image
@method
@returns 
*/
prev(): void;
        /**
Shows the first page/image
@method
@returns 
*/
first(): void;
        /**
Shows the last page/image
@method
@returns 
*/
last(): void;
        /**
Returns a collection of RadLightBox items
@method
@returns 
*/
get_items(): void;
        /**
Returns a number represents the current index of the Item
@method
@returns 
*/
get_currentItemIndex(): void;
        /**
Returns a boolean variable which shows whether the slide show will begin from the start page after the last one has been reached
@method
@returns 
*/
get_loopItems(): void;
        /**
Returns a boolean variable which shows whether the window will close when click outside of the container
@method
@returns 
*/
get_modal(): void;
        /**
Returns a value which represents the chosen navigation mode
@method
@returns 
*/
get_navigationMode(): void;
        /**
Determines whether the close button will be displayed in the LightBox
@method
@returns 
*/
showCloseButton(): void;
        /**
Determines whether the next button will be displayed in the LightBox
@method
@returns 
*/
showNextButton(): void;
        /**
Determines whether the previous button will be displayed in the LightBox
@method
@returns 
*/
showPrevButton(): void;
        /**
A method which navigate to an item having the provided index
@method
@returns 
*/
navigateTo(): void;
        /**
Determines whether the slide show will begin from the start page after the last one has been reached
@method
@returns 
*/
set_loopItems(): void;
        /**
A method which set an index to the current item.
@method
@returns 
*/
set_currentItemIndex(): void;
        /**
Accepts true or false as an argument. When its enable the window can be closed by clicking outside of its frame.
@method
@returns 
*/
set_modal(): void;
        /**
A method which accept an enumeration value. You could pass on of the following values Telerik.Web.UI.LightBoxNavigationMode.Button or
		    Telerik.Web.UI.LightBoxNavigationMode.Zone.
@method
@returns 
*/
set_navigationMode(): void;
        /**
A method which accept an enumeration value. You could pass on of the following values Telerik.Web.UI.LightBoxAnimationType.(Fade, Resize, None)
@method
@returns 
*/
set_animation(): void;
        /**
Fires before opening the LightBox popup
*/
add_showing(handler: Function): void;
        /**
Fires when the popup is opened
*/
add_showed(handler: Function): void;
        /**
Fires before closing the LightBox popup
*/
add_closing(handler: Function): void;
        /**
Fires when the popup is closed
*/
add_closed(handler: Function): void;
        /**
Fires when the user navigates out of the current page
*/
add_navigating(handler: Function): void;
        /**
Fires before disposing the control
*/
add_destroying(handler: Function): void;
        /**
Fires when the control is loaded
*/
add_load(handler: Function): void;
    }


    class RadLinearGauge  extends Telerik.Web.UI.RadGaugeControl {
        /**
Gets the height of the gauge
@method
@returns 
*/
get_height(): number;
        /**
Gets the value of the gauge
@method
@returns 
*/
get_value(): number;
        /**
Gets the width of the gauge
@method
@returns 
*/
get_width(): number;
        /**
Repaints the gauge
@method
@returns 
*/
repaint(): void;
        /**
Sets new height to the gauge
@method
@param value - 
@returns 
*/
set_height(value: number): void;
        /**
Sets a new value to the gauge
@method
@param value - 
@returns 
*/
set_value(value: number): void;
        /**
Sets new width to the gauge
@method
@param value - 
@returns 
*/
set_width(value: number): void;
    }


    class RadListBox  extends Telerik.Web.UI.ControlItemContainer {
        /**
Returns the first RadListBoxItem object whose Value property equals to the passed parameter.
@method
@param theValue - The value to search for
@returns Returns the first RadListBoxItem whose Value property matches the passed parameter
*/
findItemByValue(theValue: string): Telerik.Web.UI.RadListBoxItem;
        /**
Gets an array of the selected RadListBoxItem objects
@method
@returns 
*/
get_selectedItems(): any;
        /**
Clears the current selection except the specified Index or Item.
@method
@param value - 
@returns 
*/
clearSelectionExcept(value: number): void;
        /**
Gets the selected item (or the first selected item if the SelectionMode=quot;Multiplequot;).
@method
@returns 
*/
get_selectedItem(): Telerik.Web.UI.RadListBoxItem;
        /**
Gets an array of the checked RadListBoxItem objects
@method
@returns All checked items
*/
get_checkedItems(): any;
        /**
Transfers the specified item from the listbox specified by the TransferToID property
@method
@param item - The item to transfer
@returns 
*/
transferFromDestination(item: Telerik.Web.UI.RadListBoxItem): void;
        /**
Bulk inserts an array of RadListbox items to RadListBox
@method
@param items - Array of items to be bulk inserted
@returns 
*/
insertItems(items: any): void;
        /**
Saves the client state to the client state hidden field
@method
@returns 
*/
saveClientState(): void;
        /**
Gets the last item in the RadListBox items collection.
@method
@returns 
*/
getLastItem(): Telerik.Web.UI.RadListBoxItem;
        /**
Moves the specified item to the specified index
@method
@param item - The item to reorder
@param newIndex - The index to move to
@returns 
*/
reorderItem(item: Telerik.Web.UI.RadListBoxItem, newIndex: number): void;
        /**
Sets the destionation RadListBox
@method
@param Destination - the destination RadListBox
@returns 
*/
set_transferTo(Destination: Telerik.Web.UI.RadListBox): void;
        /**
Returns the value of the RadListBox's ClientItemTemplate property.
@method
@returns 
*/
get_clientTemplate(): void;
        /**
Writes the changes to the listbox that were made since a previous call to trackChanges, so that they are preserved over post-backs.
@method
@returns 
*/
commitChanges(): void;
        /**
Selects all items that are passed as a parameter. The parameter can be either of type array or RadListBoxItemCollection.
@method
@param value - The items to select. Can be either Array or Telerik.Web.UI.RadListBoxItemCollection
@returns 
*/
selectItems(value: any): void;
        /**
Returns the indices of all selected items
@method
@returns Returns array of Integers
*/
get_selectedIndices(): any;
        /**
Returns the first RadListBoxItem object whose Text property equals to the passed parameter.
@method
@param theText - The text tosearch for
@returns 
*/
findItemByText(theText: string): Telerik.Web.UI.RadListBoxItem;
        /**
Enables RadListBox
@method
@param value - true if the RadListBox should be enabled. False otherwise
@returns 
*/
set_enabled(value: boolean): void;
        /**
Gets a collection with all items
@method
@returns 
*/
get_items(): Telerik.Web.UI.RadListBoxItemCollection;
        /**
Transfers the specified item to the listbox specified by the TransferToID property
@method
@param item - The item to transfer
@returns 
*/
transferToDestination(item: Telerik.Web.UI.RadListBoxItem): void;
        /**
Refreshes the RadListBox UI
@method
@returns 
*/
repaint(): void;
        /**
Gets the outer DIV of the RadListBox
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Gets the ClientID of the RadListBox
@method
@returns 
*/
get_id(): string;
        /**
Sets the value of the RadListBox's ClientItemTemplate property.
@method
@param value - value
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Gets the item from the Items collection residing at the index specified by the parameter.
@method
@param index - 
@returns 
*/
getItem(index: number): Telerik.Web.UI.RadListBoxItem;
        /**
Checks all titems that are passed as a parameter. The parameter can be either of type array or RadListBoxItemCollection.
@method
@param value - The items to check. Can be either Array or Telerik.Web.UI.RadListBoxItemCollection
@returns 
*/
checkItems(value: any): void;
        /**
Disables RadListBox client side events
@method
@returns 
*/
disableEvents(): void;
        /**
Unchecks all the items passed that are passed as a parameter. The parameter can be either of type array or RadListBoxItemCollection.
@method
@param value - The items to uncheck. Can be either Array or Telerik.Web.UI.RadListBoxItemCollection
@returns 
*/
uncheckItems(value: any): void;
        /**
Gets the first instance of a RadListBoxItem with the specified attribute/value pair.
@method
@param attributeName - The attribute name to search for
@param attributeValue - The attribute value to search for
@returns Returns the first RadListBoxItem who has attribute that matches the passed parameters
*/
findItemByAttribute(attributeName: string, attributeValue: string): Telerik.Web.UI.RadListBoxItem;
        /**
Returns the indices of all checked items
@method
@returns Returns array of Integers
*/
get_checkedIndices(): any;
        /**
Gets the UL element of the RadListBox
@method
@returns The UL element of the RadListBox
*/
get_childListElement(): HTMLElement;
        /**
Gets the index of the selected item
@method
@returns The index of the selected item. If there the selection mode is set to
*/
get_selectedIndex(): number;
        /**
Enables RadListBox client side events disabled with the disableEvents method
@method
@returns 
*/
enableEvents(): void;
        /**
Returns instance of the destination RadListBox
@method
@returns 
*/
get_transferTo(): string;
        /**
Unselects all items that are passed as a parameter. The parameter can be either of type array or RadListBoxItemCollection.
@method
@param value - The items to unselect. Can be either Array or Telerik.Web.UI.RadListBoxItemCollection
@returns 
*/
unselectItems(value: any): void;
        /**
Transfers the specified item from the source listbox to the destination listbox
@method
@param item - The item to transfer
@param sourceListBox - The source RadListBox
@param destinationListBox - The destination RadListBox
@returns 
*/
transferItem(item: Telerik.Web.UI.RadListBoxItem, sourceListBox: Telerik.Web.UI.RadListBox, destinationListBox: Telerik.Web.UI.RadListBox): void;
        /**
Clears the selection. There will be no selected items.
@method
@returns 
*/
clearSelection(): void;
        /**
Deletes the item passed as an argument
@method
@param item - item
@returns 
*/
deleteItem(item: Telerik.Web.UI.RadListBoxItem): void;
    }


    class RadListBoxItem  extends Telerik.Web.UI.ControlItem {
        /**
Evaluates the template against the RadListBoxItem's data item and applies it.
@method
@returns 
*/
bindTemplate(): void;
        /**
Checks the item (equal to set_checked(true))
@method
@returns 
*/
check(): void;
        /**
Creates a new item by copying the properties of the source item
@method
@returns The cloned RadListBoxItem
*/
clone(): Telerik.Web.UI.RadListBoxItem;
        /**
Disables the item if it is enabled
@method
@returns 
*/
disable(): void;
        /**
Enables the item if it is disabled
@method
@returns 
*/
enable(): void;
        /**
If the item is not visible - puts it at the top of the visible area
@method
@returns 
*/
ensureVisible(): void;
        /**
Checks for equality against other RadListBoxItem
@method
@param item - Item to compare against for equality
@returns 
*/
equals(item: Telerik.Web.UI.RadListBoxItem): void;
        /**
Searches the RadListBoxItem for a client control with the specified id parameter.
@method
@param id - The id of the control to search for
@returns 
*/
findControl(id: string): void;
        /**
Returns whether the item can be dragged
@method
@returns Bool value indicating whether the item can be dragged
*/
get_allowDrag(): boolean;
        /**
Gets the arbitrary attributes collection
@method
@returns The arbitrary attributes collection
*/
get_attributes(): Telerik.Web.UI.AttributeCollection;
        /**
Returns the checkbox input element of the item
@method
@returns HTML element for the item
*/
get_checkBoxElement(): any;
        /**
Returns whether the item can be checked
@method
@returns Bool value indicating whether the item can be checked
*/
get_checkable(): boolean;
        /**
Returns whether the item is checked
@method
@returns Bool value indicating whether the item is checked
*/
get_checked(): boolean;
        /**
Returns the value of the RadListBoxItem's ClientTemplate property.
@method
@returns 
*/
get_clientTemplate(): void;
        /**
Gets he DOM element for the RadListBoxItem
@method
@returns The DOM element for the RadListBoxItem
*/
get_element(): HTMLElement;
        /**
Returns the image img element of the item
@method
@returns HTML element that holds the item
*/
get_imageElement(): HTMLElement;
        /**
Gets the value of the ImageUrl property
@method
@returns 
*/
get_imageUrl(): string;
        /**
Gets the RadListBoxItem's index inside the RadListBoxItemCollection
@method
@returns The index of the RadListBoxItem
*/
get_index(): number;
        /**
Gets a value indicating whether the ControlItem is the first item in the ControlItemCollection
@method
@returns Value indicating whether the ControlItem is the first item in the ContorolCollection
*/
get_isFirst(): boolean;
        /**
Gets a value indicating whether the RadListBoxItem is the last item in the ControlItemCollection
@method
@returns Value indicating whether the ControlItem is the last item in the ContorolCollection
*/
get_isLast(): boolean;
        /**
Returns value indicating whether the item is visible
@method
@returns Value indicating whether the item is visible
*/
get_isVisible(): boolean;
        /**
Gets the RadListBox client-object
@method
@returns Returns the parent RadListBox
*/
get_listBox(): Telerik.Web.UI.RadListBox;
        /**
Gets an instance of the next sibling of a ControlItem
@method
@returns The next sibling
*/
get_nextSibling(): Telerik.Web.UI.ControlItem;
        /**
The RadListBoxItem's parent
@method
@returns Gets the RadListBoxItem
*/
get_parent(): HTMLElement;
        /**
Gets an instance of the previous sibling of a ControlItem.
@method
@returns The previous sibling
*/
get_previousSibling(): Telerik.Web.UI.ControlItem;
        /**
Returns whether the item is selected
@method
@returns Value indicating whether the item is selected
*/
get_selected(): boolean;
        /**
Gets the Text of the item
@method
@returns The value of the Text property
*/
get_text(): string;
        /**
Returns the span element of the item
@method
@returns HTML element that holds the item
*/
get_textElement(): HTMLElement;
        /**
Gets the tooltip of the item
@method
@returns 
*/
get_toolTip(): string;
        /**
Gets th Value of the item
@method
@returns The value of the Value propert
*/
get_value(): string;
        /**
Gets a value indicating whether the RadListBoxItem is visible or not
@method
@returns Value indicating whether the RadListBoxItem is visible or not
*/
get_visible(): boolean;
        /**
Puts the item at the;bottom of the visible area;
@method
@returns 
*/
scrollIntoView(): void;
        /**
Selects the item (equal to set_selected(true))
@method
@returns 
*/
select(): void;
        /**
Sets the AllowDrag property (whether the item can be dragged)
@method
@param value - Bool value indicating whether the item can be dragged
@returns 
*/
set_allowDrag(value: boolean): void;
        /**
Sets whether the item can be checked
@method
@param value - Bool value indicating whether the item can be checked
@returns 
*/
set_checkable(value: boolean): void;
        /**
Checks the item
@method
@param value - Bool velue indicating whether the item should be checked
@returns 
*/
set_checked(value: boolean): void;
        /**
Sets the value of the RadListBoxItem's ClientTemplate property.
@method
@param value - value
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Sets the item's dom element
@method
@param value - The HTML element of the item
@returns 
*/
set_element(value: HTMLElement): void;
        /**

@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the ImageUrl property of the item
@method
@param value - String value for the ImageUrl property
@returns 
*/
set_imageUrl(value: string): void;
        /**
Sets the RadListBoxItem's parent
@method
@param value - DOM element
@returns 
*/
set_parent(value: HTMLElement): void;
        /**
Selects the item
@method
@param value - Bool value indicating whether the item is selected
@returns 
*/
set_selected(value: boolean): void;
        /**
Sets the RadListBoxItem's text
@method
@param text - The new RadListBoxItem text
@returns 
*/
set_text(text: string): void;
        /**
Sets the tooltip of the item
@method
@param value - String value for the ToolTip property
@returns 
*/
set_toolTip(value: string): void;
        /**

@method
@param value - The new RadListBoxItem text
@returns 
*/
set_value(value: string): void;
        /**
Sets whether the item is visible
@method
@param value - Indicates whether the item is visible.
@returns 
*/
set_visible(value: boolean): void;
        /**
The JSON representation of the RadListBoxItem
@method
@returns Returns the JSON representation of the RadListBoxItem
*/
toJsonString(): string;
        /**
Un-checks the item (equal to set_checked(false))
@method
@returns 
*/
uncheck(): void;
        /**
Unselects the item (equal to set_selected(false))
@method
@returns 
*/
unselect(): void;
    }


    class RadListBoxItemCollection  extends Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.RadListBoxItem> {
        /**
Clears the Items collection of RadListBox
@method
@returns 
*/
clear(): void;
        /**
Searches the collection against a match passed as a parameter
@method
@param match - Predicate that that all items in the collection are checked against. The first match is returned.
@returns 
*/
find(match: Function): void;
        /**
Iterates through the Items collection
@method
@param lambda - The function to execute on each iteration
@returns 
*/
forEach(lambda: Function): void;
        /**
Returns the number of items in the Items collection.
@method
@returns The number of the items
*/
get_count(): number;
        /**
Gets the last N items where N is passed as a parameter
@method
@param value - Indicates the last N items that should be returned
@returns 
*/
get_last(value: number): void;
        /**
Removes the item at the specified index.
@method
@param index - The index to remove at
@returns 
*/
removeAt(index: number): void;
        /**
Adds an item to the Items collection.
@method
@param item - The item that will ba added.
@returns 
*/
add(item: Telerik.Web.UI.RadListBoxItem): void;
        /**
Gets the item from the Items collection residing at the index specified by the parameter.
@method
@param index - The index of the Item that should be returned.
@returns item Telerik.Web.UI.RadListBoxItem
*/
getItem(index: number): Telerik.Web.UI.RadListBoxItem;
    }


    class RadListView  extends Telerik.Web.UI.RadWebControl {
        /**
Sets a value indicating whether paging is allowed in RadListView
@method
@param value - A boolean value indicating whether paging is enabled
@returns 
*/
set_allowPaging(value: boolean): void;
        /**
Indicates whether RadListView is setup for client-side databinding
@method
@returns 
*/
get_isDataBoundOnClient(): boolean;
        /**
Rebinds RadListView to its given data source
@method
@returns 
*/
rebind(): void;
        /**
Navigates RadListView to the page specified as an argument. If server-side databinding is used, RadDataPager should be used for page navigation
@method
@param command - The actual page to which the user will be navigated. Possible values are
@param doNotFireCommand - Optional
@returns 
*/
page(command: string, doNotFireCommand: boolean): void;
        /**
Switches RadListView item into edit mode (with index specified as an argument)
@method
@param itemIndex - Index of the item that will be edited
@returns 
*/
editItem(itemIndex: number): void;
        /**
Clears the sorting of the specified field or all the sort expressions if no field is specified.
@method
@param field - Optional
@param doNotFireCommand - Optional
@returns 
*/
clearSort(field: string, doNotFireCommand: boolean): void;
        /**
Gets a value indicating whether natural sort is enabled in RadListView
@method
@returns 
*/
get_allowNaturalSort(): boolean;
        /**
Sets the data source of RadListView
@method
@param value - A javascript array of objects
@returns 
*/
set_dataSource(value: any): void;
        /**
Deselects an item in RadListViews
@method
@param index - An integer index of the item to deselect.
@param doNotRebind - Optional
@returns 
*/
deselectItem(index: number, doNotRebind: boolean): void;
        /**
Cancels insert operation and hides RadListView's insertion form
@method
@returns 
*/
cancelInsert(): void;
        /**
Appends additional data to the current data source and creates new items for the new data. Existing items are not modified.
@method
@param data - A javascript array of objects to append
@returns 
*/
appendData(data: any): void;
        /**
Displays RadListView's insertion form
@method
@param insertItemPosition - Optional
@returns 
*/
showInsertItem(insertItemPosition: number): void;
        /**
Gets the total number of items RadListView can bind to. This value is used for page calculations.
@method
@returns 
*/
get_virtualItemCount(): number;
        /**
Rebinds a single item specified by its index
@method
@param index - The index of the item to rebind
@returns 
*/
rebindItem(index: number): void;
        /**
Gets the page size in RadListView
@method
@returns 
*/
get_pageSize(): number;
        /**
Fires command with command name and command argument specified as arguments
@method
@param commandName - The name of the command that will be executed. Possible values are listed here
@param commandArgument - The command argument with which the command will be executed. Possible values are listed here
@returns 
*/
fireCommand(commandName: string, commandArgument: string): void;
        /**
Sets the page size in RadListView
@method
@param value - An integer value greater than 0
@returns 
*/
set_pageSize(value: number): void;
        /**
Gets the current page index in case paging for RadListView is enabled
@method
@returns 
*/
get_currentPageIndex(): number;
        /**
Gets the unique id of RadListView's container
@method
@returns 
*/
get_uniqueID(): string;
        /**
Clears the cached data when caching is enabled with client-side databinding in RadListView
@method
@param forCurrentState - Optional
@returns 
*/
clearCache(forCurrentState: boolean): void;
        /**
Gets the page count in RadListView
@method
@returns 
*/
get_pageCount(): number;
        /**
Sets the virtual item count in RadListView
@method
@param value - An integer value greater than or equal to 0
@returns 
*/
set_virtualItemCount(value: number): void;
        /**
Deletes RadListView item with index specified as an argument
@method
@param itemIndex - Index of the item that will be deleted
@returns 
*/
deleteItem(itemIndex: number): void;
        /**
Gets a value indicating whether the insert form is currently shown
@method
@returns 
*/
get_isItemInserted(): boolean;
        /**
Clears the filter expressions for the specified field. If no field is specified, clears all filter expression in RadListView
@method
@param field - Optional
@param doNotFireCommand - Optional
@returns 
*/
clearFilter(field: string, doNotFireCommand: boolean): void;
        /**
Gets a value indicating whether multi-item selection is enabled in RadListView
@method
@returns 
*/
get_allowMultiItemSelection(): boolean;
        /**
Cancels RadListView item update (with index specified as an argument)
@method
@param itemIndex - Index of the edited item for which update operation will be aborted
@returns 
*/
cancelUpdate(itemIndex: number): void;
        /**
Selects an item in RadListView
@method
@param index - An integer index of the item to select.
@param doNotRebind - Optional
@returns 
*/
selectItem(index: number, doNotRebind: boolean): void;
        /**
Retrieves the sort expressions collection in RadListView
@method
@returns 
*/
get_sortExpressions(): Telerik.Web.UI.RadListViewSortExpressions;
        /**
Gets the data source javascript array of RadListView
@method
@returns 
*/
get_dataSource(): any;
        /**
Sets the current page index in RadListView
@method
@param value - An integer value greater than or equal to 0
@returns 
*/
set_currentPageIndex(value: number): void;
        /**
Updates RadListView item (with index specified as an argument)
@method
@param itemIndex - Index of the edited item that will be updated
@returns 
*/
updateItem(itemIndex: number): void;
        /**
Selects all items in RadListView
@method
@param doNotRebind - Optional
@returns 
*/
selectAllItems(doNotRebind: boolean): void;
        /**
Specifies whether paging is enabled in RadListView
@method
@returns 
*/
get_allowPaging(): boolean;
        /**
Sorts the data in RadListView
@method
@param field - The field name to sort by. If no sort order is specified
@param order - Optional
@param doNotFireCommand - Optional
@returns 
*/
sort(field: string, order: string, doNotFireCommand: boolean): void;
        /**
Clears all selected items in RadListView
@method
@param doNotRebind - Optional
@returns 
*/
clearSelectedItems(doNotRebind: boolean): void;
        /**
Applies a filter to the data in RadListView
@method
@param field - The field name to filter.
@param filterFunction - The filter function to use. Accepted values are specified by the Telerik.Web.UI.RadListViewFilterFunction object.
@param value - The filter value to use for the specified field.
@param doNotFireCommand - Optional
@returns 
*/
filter(field: string, filterFunction: string, value: string, doNotFireCommand: boolean): void;
        /**
Gets the skin set to the RadListView's control
@method
@returns Gets the skin applied in RadListView
*/
get_skin(): string;
        /**
Gets a two-dimensional array of client key values. Item indices and names stored in the ClientDataKeyNames collection on the server can be used as array indices. Example: get_clientDataKeyValue()[0]["CustomerID"] - returns the CustomerID clinet key value for the first RadListView item.
@method
@returns 
*/
get_clientDataKeyValue(): any;
        /**
Databinds the listview when the client-side data source is set
@method
@returns 
*/
dataBind(): void;
        /**
Indicates whether RadListView is currently databinding on the client-side
@method
@returns 
*/
get_isDataBinding(): boolean;
        /**
Indicates whether RadListView is initialized entirely on the client-side with no server-side control
@method
@returns 
*/
get_isInitializedOnClient(): boolean;
        /**
Gets the current client settings applied for RadListView
@method
@returns 
*/
get_clientSettings(): any;
        /**
Gets the selected indexes array in RadListView. The array should contain the numeric indexes of selected items.
@method
@returns 
*/
get_selectedIndexes(): any;
        /**
Sets the array containing the selected indexes
@method
@param value - A javascript array of integer values representing the selected indexes in RadListView
@returns 
*/
set_selectedIndexes(value: any): void;
        /**
Toggles between the selected and deselected state of an item in RadListViews
@method
@param index - An integer index of the item to toggle.
@param doNotRebind - Optional
@returns 
*/
toggleSelection(index: number, doNotRebind: boolean): void;
        /**
Retrieves the filter expressions collection in RadListView
@method
@returns 
*/
get_filterExpressions(): Telerik.Web.UI.RadListViewFilterExpressions;
        /**
Inserts a new item in RadListView with values taken from its insertion form
@method
@returns 
*/
insertItem(): void;
        /**
Adds a handler for the templateDataBound event
*/
add_templateDataBound(handler: Function): void;
        /**
Adds a handler for the dataBinding event
*/
add_dataBinding(handler: Function): void;
        /**
Removes a handler for the command event
*/
remove_command(handler: Function): void;
        /**
Adds a handler for the itemDeselecting event
*/
add_itemDeselecting(handler: Function): void;
        /**
Adds a handler for the dataBindingFailed event
*/
add_dataBindingFailed(handler: Function): void;
        /**
Adds a handler for the dataBound event
*/
add_dataBound(handler: Function): void;
        /**
Adds a handler for the listViewDestroying event
*/
add_listViewDestroying(handler: Function): void;
        /**
Removes a handler for the listViewCreated event
*/
remove_listViewCreated(handler: Function): void;
        /**
Adds a handler for the command event
*/
add_command(handler: Function): void;
        /**
Adds a handler for the itemDropped event
*/
add_itemDropped(handler: Function): void;
        /**
Adds a handler for the itemDeselected event
*/
add_itemDeselected(handler: Function): void;
        /**
Adds a handler for the itemDragging event
*/
add_itemDragging(handler: Function): void;
        /**
Removes a handler for the dataBound event
*/
remove_dataBound(handler: Function): void;
        /**
Removes a handler for the listViewDestroying event
*/
remove_listViewDestroying(handler: Function): void;
        /**
Adds a handler for the listViewCreating event
*/
add_listViewCreating(handler: Function): void;
        /**
Adds a handler for the itemDragStarted event
*/
add_itemDragStarted(handler: Function): void;
        /**
Adds a handler for the itemSelecting event
*/
add_itemSelecting(handler: Function): void;
        /**
Adds a handler for the itemSelected event
*/
add_itemSelected(handler: Function): void;
        /**
Removes a handler for the templateCreated event
*/
remove_templateCreated(handler: Function): void;
        /**
Removes a handler for the listViewCreating event
*/
remove_listViewCreating(handler: Function): void;
        /**
Removes a handler for the dataBinding event
*/
remove_dataBinding(handler: Function): void;
        /**
Removes a handler for the dataSourceResolved event
*/
remove_dataSourceResolved(handler: Function): void;
        /**
Removes a handler for the itemSelecting event
*/
remove_itemSelecting(handler: Function): void;
        /**
Adds a handler for the listViewCreated event
*/
add_listViewCreated(handler: Function): void;
        /**
Adds a handler for the itemDropping event
*/
add_itemDropping(handler: Function): void;
        /**
Removes a handler for the itemDragging event
*/
remove_itemDragging(handler: Function): void;
        /**
Removes a handler for the itemDeselected event
*/
remove_itemDeselected(handler: Function): void;
        /**
Removes a handler for the templateDataBound event
*/
remove_templateDataBound(handler: Function): void;
        /**
Removes a handler for the itemDropped event
*/
remove_itemDropped(handler: Function): void;
        /**
Removes a handler for the itemDragStarted event
*/
remove_itemDragStarted(handler: Function): void;
        /**
Removes a handler for the itemDeselecting event
*/
remove_itemDeselecting(handler: Function): void;
        /**
Removes a handler for the dataBindingFailed event
*/
remove_dataBindingFailed(handler: Function): void;
        /**
Adds a handler for the templateCreated event
*/
add_templateCreated(handler: Function): void;
        /**
Adds a handler for the dataSourceResolved event
*/
add_dataSourceResolved(handler: Function): void;
        /**
Removes a handler for the itemDropping event
*/
remove_itemDropping(handler: Function): void;
        /**
Removes a handler for the itemSelected event
*/
remove_itemSelected(handler: Function): void;
    }


    class RadListViewFilterExpression   {
        /**
Gets the field name of the expression
@method
@returns 
*/
get_fieldName(): string;
        /**
Gets the filter function of the expression
@method
@returns 
*/
get_filterFunction(): string;
        /**
Gets the filter value of the expression
@method
@returns 
*/
get_value(): any;
        /**
Returns a boolean value indicating whether the current expression is equal to or contains the specified parameters.
@method
@param fieldName - The field name
@param filterFunction - Optional
@param filterValue - Optional
@returns 
*/
isEqualTo(fieldName: Telerik.Web.UI.RadListViewFilterExpression, filterFunction: string, filterValue: any): void;
        /**
Sets the field name of this expression
@method
@param value - The field name of the expression
@returns 
*/
set_fieldName(value: string): void;
        /**
Sets the filter function of this expression
@method
@param value - One of the Telerik.Web.UI.RadListViewFilterFunction enumeration values
@returns 
*/
set_filterFunction(value: string): void;
        /**
Sets the filter value of this expression
@method
@param value - The filter value of this expression
@returns 
*/
set_value(value: any): void;
        /**
Returns a Dynamic LINQ string representation of this expression
@method
@returns 
*/
toLinq(): void;
        /**
Returns an OData string representation of this expression
@method
@returns 
*/
toOData(): void;
        /**
Returns a JSON object representing this field expression The object has the following fields: {field: "ID", filter: "EqualTo", value: 7}.
@method
@returns 
*/
toObject(): void;
        /**
Returns an SQL string representation of this expression
@method
@returns 
*/
toSql(): void;
    }


    class RadListViewFilterExpressionBuilder   {
        /**
Builds a filter expression for a "Contains" filter
@method
@param fieldName - The field name of the expression
@param filterValue - The filter value of the expression
@returns 
*/
contains(fieldName: string, filterValue: string): void;
        /**
Builds a filter expression for a "EndsWith" filter
@method
@param fieldName - The field name of the expression
@param filterValue - The filter value of the expression
@returns 
*/
endsWith(fieldName: string, filterValue: string): void;
        /**
Builds a filter expression for an "EqualTo" filter
@method
@param fieldName - The field name of the expression
@param filterValue - The filter value of the expression
@returns 
*/
equalTo(fieldName: string, filterValue: any): void;
        /**
Builds a filter expression for a "GreaterThan" filter
@method
@param fieldName - The field name of the expression
@param filterValue - The filter value of the expression
@returns 
*/
greaterThan(fieldName: string, filterValue: any): void;
        /**
Builds a filter expression for a "GreaterThanOrEqualTo" filter
@method
@param fieldName - The field name of the expression
@param filterValue - The filter value of the expression
@returns 
*/
greaterThanOrEqualTo(fieldName: string, filterValue: any): void;
        /**
Builds a filter expression for a "Group" filter
@method
@param groupBuilderFunction - The function that builds the expressions in the group. A Telerik.Web.UI.RadListViewFilterExpressionBuilder is passed as a first argument to the function
@returns 
*/
group(groupBuilderFunction: Function): void;
        /**
Builds a filter expression for a "IsEmpty" filter
@method
@param fieldName - The field name to check for empty values
@returns 
*/
isEmpty(fieldName: string): void;
        /**
Builds a filter expression for a "NotIsEmpty" filter
@method
@param fieldName - The field name to check for not empty values
@returns 
*/
isNotEmpty(fieldName: string): void;
        /**
Builds a filter expression for a "NotIsNull" filter
@method
@param fieldName - The field name to check for not null values
@returns 
*/
isNotNull(fieldName: string): void;
        /**
Builds a filter expression for a "IsNull" filter
@method
@param fieldName - The field name to check for null values
@returns 
*/
isNull(fieldName: string): void;
        /**
Builds a filter expression for a "LessThan" filter
@method
@param fieldName - The field name of the expression
@param filterValue - The filter value of the expression
@returns 
*/
lessThan(fieldName: string, filterValue: any): void;
        /**
Builds a filter expression for a "LessThanOrEqualTo" filter
@method
@param fieldName - The field name of the expression
@param filterValue - The filter value of the expression
@returns 
*/
lessThanOrEqualTo(fieldName: string, filterValue: any): void;
        /**
Builds a filter expression for a "NotEqualTo" filter
@method
@param fieldName - The field name of the expression
@param filterValue - The filter value of the expression
@returns 
*/
notEqualTo(fieldName: string, filterValue: any): void;
        /**
Builds a filter expression for a "StartsWith" filter
@method
@param fieldName - The field name of the expression
@param filterValue - The filter value of the expression
@returns 
*/
startsWith(fieldName: string, filterValue: string): void;
    }


    class RadListViewFilterExpressionLogicBuilder   {
        /**
Groups filter expressions with an AND operator
@method
@returns 
*/
and(): void;
        /**
Groups filter expressions with an OR operator
@method
@returns 
*/
or(): void;
    }


    class RadListViewFilterExpressions   {
        /**
Adds a new filter expression to the collection
@method
@param fieldName - The field name of the filter expression or the Telerik.Web.UI.RadListViewFilterExpression instance itself to add
@param filterFunction - Optional
@param filterValue - Optional
@returns 
*/
add(fieldName: Telerik.Web.UI.RadListViewFilterExpression, filterFunction: string, filterValue: any): void;
        /**
Retrieves a Telerik.Web.UI.RadListViewFilterExpressionBuilder instance that can be used for building the filter expressions in this collection
@method
@returns 
*/
build(): void;
        /**
Clears the items of this filter expression collection
@method
@returns 
*/
clear(): void;
        /**
Retrieves the filter expression at the specified index
@method
@param index - The index at which to retrieve
@returns 
*/
getItem(index: number): void;
        /**
Retrieves the count of items in this filter expression collection
@method
@returns 
*/
get_count(): number;
        /**
Retrieves the index of the specified filter expression in the collection
@method
@param fieldName - The field name of the filter expression or the Telerik.Web.UI.RadListViewFilterExpression instance itself whose index to retrieve
@param filterFunction - Optional
@param filterValue - Optional
@returns 
*/
indexOf(fieldName: Telerik.Web.UI.RadListViewFilterExpression, filterFunction: string, filterValue: any): void;
        /**
Inserts a new filter expression to the collection at the specified position
@method
@param index - The index at which to insert
@param fieldName - The field name of the filter expression or the Telerik.Web.UI.RadListViewFilterExpression instance itself to add
@param filterFunction - Optional
@param filterValue - Optional
@returns 
*/
insert(index: number, fieldName: Telerik.Web.UI.RadListViewFilterExpression, filterFunction: string, filterValue: any): void;
        /**
Removes a filter expression from the collection
@method
@param fieldName - The field name of the filter expression or the Telerik.Web.UI.RadListViewFilterExpression instance itself to remove
@param filterFunction - Optional
@param filterValue - Optional
@returns 
*/
remove(fieldName: Telerik.Web.UI.RadListViewFilterExpression, filterFunction: string, filterValue: any): void;
        /**
Removes the filter expression at the specified position
@method
@param index - The index at which to remove
@returns 
*/
removeAt(index: number): void;
        /**
Returns a Dynamic LINQ representation of this filter expressions collection
@method
@returns 
*/
toLinq(): void;
        /**
Returns a javascript array representation of this filter expressions collection
@method
@returns 
*/
toList(): void;
        /**
Returns an OData representation of this filter expressions collection
@method
@returns 
*/
toOData(): void;
        /**
Returns an SQL representation of this filter expressions collection
@method
@returns 
*/
toSql(): void;
    }


    class RadListViewFilterFunction   {
        /**
Enumerates the logial group filter operators in RadListView
@method
@returns 
*/
static Telerik(): void;
    }


    class RadListViewGroupFilterExpression  extends Telerik.Web.UI.RadListViewFilterExpression {
        /**
Gets the filter expressions collection that this group filter expression contains
@method
@returns 
*/
get_filterExpressions(): Telerik.Web.UI.RadListViewFilterExpressions;
        /**
Gets the group operator of this group expression
@method
@returns 
*/
get_groupOperator(): string;
        /**
Sets the filter expression collection of this group filter expression
@method
@param value - The filter expression collection that this group filter expression contains
@returns 
*/
set_filterExpressions(value: Telerik.Web.UI.RadListViewFilterExpressions): void;
        /**
Sets the group operator of this group filter expression
@method
@param value - One of the Telerik.Web.UI.RadListViewGroupFilterOperator values
@returns 
*/
set_groupOpertor(value: string): void;
    }


    class RadListViewSortExpressionBuilder   {
        /**
Adds a sort expression to the collection
@method
@param field - The field name that is sorted
@param order - Optional
@returns 
*/
add(field: string, order: string): void;
        /**
Clears the sort expressions collection
@method
@returns 
*/
clear(): void;
        /**
Removes a field from the sort expressions
@method
@param field - The field name to remove
@returns 
*/
remove(field: string): void;
        /**
Toggles the sort order of the specified field
@method
@param field - The field whose sort order to toggle
@returns 
*/
toggle(field: string): void;
    }


    class RadListViewSortExpressions   {
        /**
Adds a sort expression to the collection
@method
@param field - The field name that is sorted
@param order - Optional
@returns 
*/
add(field: string, order: string): void;
        /**
Retrieves a Telerik.Web.UI.RadListViewSortExpressionBuilder instance that can be used for fluent expression building.
@method
@returns 
*/
build(): void;
        /**
Clears the sort expressions collection
@method
@returns 
*/
clear(): void;
        /**
Retrieves a sort expression by specified index or field name.
@method
@param fieldOrIndex - The field or index to find the expression by
@returns 
*/
getItem(fieldOrIndex: string): void;
        /**
Retrieves the sort order for the specified sort expression
@method
@param field - The field name whose sort order to retrieve
@returns 
*/
getSortOrder(field: string): void;
        /**
Retrieves the number of expressions in the collection
@method
@returns 
*/
get_count(): number;
        /**
Retrieves the index of the sort expression with the specified field name
@method
@param field - The field of the expression whose index to find
@returns 
*/
indexOf(field: string): void;
        /**
Removes a field from the sort expressions
@method
@param field - The field name to remove
@returns 
*/
remove(field: string): void;
        /**
Returns a Dynamic LINQ representation of the current sort expression collection.
@method
@returns 
*/
toLinq(): void;
        /**
Returns a list representation of the current sort expression collection.
@method
@returns 
*/
toList(): void;
        /**
Returns an OData formatted representation of the current sort expression collection.
@method
@returns 
*/
toOData(): void;
        /**
Returns an SQL representation of the current sort expression collection.
@method
@returns 
*/
toSql(): void;
        /**
Toggles the sort order of the specified field
@method
@param field - The field whose sort order to toggle
@returns 
*/
toggle(field: string): void;
    }


    class RadListViewUrlBuilder   {
        /**
Appends the specified name and value to the query parameters of the URL
@method
@param name - The name of the URL parameter to append
@param value - The value of the URL parameter to append
@returns 
*/
appendParameter(name: string, value: any): void;
        /**
Appends the name/value pairs in the specified object to the query parameters
@method
@param data - The object whose fields to use as query parameters
@returns 
*/
appendParameters(data: any): void;
        /**
Appends the specified subpath to the path of the URL
@method
@param path - The subpath to append
@returns 
*/
appendPath(path: string): void;
        /**
Appends the specified URL query part to this URL
@method
@param query - The URL query part to append
@returns 
*/
appendQuery(query: string): void;
        /**
Retrieves the value of the URL parameter with the specified name
@method
@param name - The name of the URL parameter to retrieve
@returns 
*/
getParameter(name: string): void;
        /**
Retrieves the path of the URL
@method
@returns 
*/
getPath(): void;
        /**
Retrieves the query string part of this URL
@method
@returns 
*/
getQuery(): void;
        /**
Parses the specified URL and uses it as a base for building the URL in this builder
@method
@param url - The base URL this builder will use
@returns 
*/
parse(url: string): void;
        /**
Removes the parameter with the specified name from the URL parameters of the URL
@method
@param name - The name of the URL parameter to remove
@returns 
*/
removeParameter(name: string): void;
        /**
Removes the specified subpath from the path of the URL
@method
@param path - The subpath to remove
@returns 
*/
removePath(path: string): void;
    }


    class RadLiveTile  extends Telerik.Web.UI.RadBaseTile {
        /**
Sets the interval (in milliseconds) after which the tile will automatically update the content.
@method
@param value - 
@returns 
*/
set_updateInterval(value: number): void;
        /**
Parameters
@method
@returns 
*/
Name(): void;
        /**
Returns the AnimationManager responsible for showing / hiding the client template
@method
@returns 
*/
get_animationManager(): void;
        /**
Gets the HTML template that will be instantiated in the tile after live data request
@method
@returns 
*/
get_clientTemplate(): void;
        /**
Sets the HTML template that will be instantiated in the tile after live data request
@method
@param value - 
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Returns the interval (in milliseconds) after which the tile will automatically update the content
@method
@returns 
*/
get_updateInterval(): string;
        /**
Removes a handler for the dataLoading client event.
*/
remove_dataLoading(handler: Function): void;
        /**
Removes a handler for the templateDataBound client event.
*/
remove_templateDataBound(handler: Function): void;
        /**
Adds a handler for the templateDataBound client event. The templateDataBound client-side event occurs after the client template is data bound.
*/
add_templateDataBound(handler: Function): void;
        /**
Adds a handler for the dataLoaded client event. The dataLoaded event occurs after the data request returns the data successfully.
*/
add_dataLoaded(handler: Function): void;
        /**
Adds a handler for the dataLoadingError client event. The dataLoadingError event occurs after the data request returns error.
*/
add_dataLoadingError(handler: Function): void;
        /**
Removes a handler for the dataLoadingError client event.
*/
remove_dataLoadingError(handler: Function): void;
        /**
Removes a handler for the dataLoaded client event.
*/
remove_dataLoaded(handler: Function): void;
        /**
Adds a handler for the dataLoading client event. The dataLoading client-side event occurs before the data request is executed.
*/
add_dataLoading(handler: Function): void;
    }


    class RadMaskedTextBox  extends Telerik.Web.UI.RadInputControl {
        /**
Indicating whether RadInputControl loses focus
@method
@returns 
*/
blur(): void;
        /**
Clears the client instance of RadInputControl
@method
@returns 
*/
clear(): void;
        /**
Disables the client instance of RadInputControl
@method
@returns 
*/
disable(): void;
        /**
Enables the client instance of RadInputControl
@method
@returns 
*/
enable(): void;
        /**
Indicating whether RadInputControl enter focus
@method
@returns 
*/
focus(): void;
        /**
Returns true if enumerated mask parts can be set to an empty string
@method
@returns 
*/
get_allowEmptyEnumerations(): boolean;
        /**
Returns the value of the AutoPostBack property
@method
@returns 
*/
get_autoPostBack(): boolean;
        /**
Returns the current position of the caret.
@method
@returns 
*/
get_caretPosition(): number;
        /**
Gets the display format position of the RadMaskedTextBox control
@method
@returns 
*/
get_displayFormatPosition(): Telerik.Web.UI.DisplayFormatPosition;
        /**
Returns the prompt character that is used when the text box does not have focus
@method
@returns 
*/
get_displayPromptChar(): string;
        /**
Gets the value of RadInputControl as it is formatted when the input does not have focus
@method
@returns 
*/
get_displayValue(): string;
        /**
Gets the value of RadInputControl as it is formatted when the input has focus
@method
@returns 
*/
get_editValue(): string;
        /**
Returns the message that appears when the input value is an empty string
@method
@returns 
*/
get_emptyMessage(): string;
        /**
Returns true if the input is enabled
@method
@returns 
*/
get_enabled(): boolean;
        /**
Returns true if the prompt characters and literals are not displayed when the text box is empty and does not have focus
@method
@returns 
*/
get_hideOnBlur(): boolean;
        /**
Returns true if the input in error state (riError class is applied)
@method
@returns 
*/
get_invalid(): boolean;
        /**
Gets the invalid style duration of RadInputControl
@method
@returns 
*/
get_invalidStyleDuration(): number;
        /**
Returns the prompt of the RadMaskTextBox control
@method
@returns 
*/
get_prompt(): string;
        /**
Returns the prompt character
@method
@returns 
*/
get_promptChar(): string;
        /**
Returns true if the text box is read-only
@method
@returns 
*/
get_readOnly(): boolean;
        /**
Returns a Boolean value indicating if the caret position on the RadMaskedTextBox control should be reset on focus
@method
@returns 
*/
get_resetCaretOnFocus(): boolean;
        /**
Returns a Boolean value indicating if the numeric ranges of the RadMaskedTextBox control should be rounded
@method
@returns 
*/
get_roundNumericRanges(): boolean;
        /**
Returns the value of the SelectionOnFocus property
@method
@returns 
*/
get_selectionOnFocus(): Telerik.Web.UI.SelectionOnFocus;
        /**
Returns true if the input has an associated image button
@method
@returns 
*/
get_showButton(): boolean;
        /**
Returns the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded
@method
@returns 
*/
get_styles(): any;
        /**
Gets the string that the user typed into the input
@method
@returns 
*/
get_textBoxValue(): string;
        /**
Returns the value of the text box
@method
@returns 
*/
get_value(): string;
        /**
Returns the value of the text box, including the literal characters from the mask
@method
@returns 
*/
get_valueWithLiterals(): string;
        /**
Returns the value of the text box, including the prompt characters and literal characters from the mask
@method
@returns 
*/
get_valueWithPromptAndLiterals(): string;
        /**
Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element
@method
@returns 
*/
get_visible(): boolean;
        /**
Gets the DOM element for the DIV wrapper element
@method
@returns 
*/
get_wrapperElement(): HTMLElement;
        /**
Returns true if the value of the text box is selected
@method
@param e - 
@returns 
*/
inSelection(e: any): void;
        /**
Returns true if the value of the RadInputControl is empty
@method
@returns 
*/
isEmpty(): void;
        /**
Returns true if the value of the RadInputControl is multi line
@method
@returns 
*/
isMultiLine(): void;
        /**
Returns true if the value of the RadInputControl is a negative number
@method
@returns 
*/
isNegative(): void;
        /**
Returns true if the value of the RadInputControl is read only
@method
@returns 
*/
isReadOnly(): void;
        /**
Raises the postback event of RadInputControl
@method
@returns 
*/
raisePostBackEvent(): void;
        /**
Raises the blur event
@method
@param args - 
@returns 
*/
raise_blur(args: Sys.EventArgs): void;
        /**
Raises the buttonClick event
@method
@param args - 
@returns 
*/
raise_buttonClick(args: Sys.EventArgs): void;
        /**
Raises the handler for the mouseOver event
@method
@param args - 
@returns 
*/
raise_disable(args: Sys.EventArgs): void;
        /**
Raises the enable event
@method
@param args - 
@returns 
*/
raise_enable(args: Sys.EventArgs): void;
        /**
Raises the enumerationChanged event
@method
@param args - 
@returns 
*/
raise_enumerationChanged(args: Sys.EventArgs): void;
        /**
Raises the error event
@method
@param args - 
@returns 
*/
raise_error(args: Sys.EventArgs): void;
        /**
Raises the focus event
@method
@param args - 
@returns 
*/
raise_focus(args: Sys.EventArgs): void;
        /**
Raises the keyPress event
@method
@param args - 
@returns 
*/
raise_keyPress(args: Sys.EventArgs): void;
        /**
Raises the load event
@method
@param args - 
@returns 
*/
raise_load(args: Sys.EventArgs): void;
        /**
Raises the mouseOut event
@method
@param args - 
@returns 
*/
raise_mouseOut(args: Sys.EventArgs): void;
        /**
Raises the mouseOver event
@method
@param args - 
@returns 
*/
raise_mouseOver(args: Sys.EventArgs): void;
        /**
Raises the moveDown event
@method
@param args - 
@returns 
*/
raise_moveDown(args: Sys.EventArgs): void;
        /**
Raises the moveUp event
@method
@param args - 
@returns 
*/
raise_moveUp(args: Sys.EventArgs): void;
        /**
Raises the valueChanged event
@method
@param newValue - 
@param oldValue - 
@returns 
*/
raise_valueChanged(newValue: any, oldValue: any): void;
        /**
Raises the valueChanging event
@method
@param args - 
@returns 
*/
raise_valueChanging(args: Sys.EventArgs): void;
        /**
Redraws the client side object on the client
@method
@returns 
*/
repaint(): void;
        /**
Resets the cursor position
@method
@returns 
*/
resetCursor(): void;
        /**
Saves the client state of the RadMaskedTextBox control
@method
@returns 
*/
saveClientState(): void;
        /**
Selects all text in the RadInputControl
@method
@returns 
*/
selectAllText(): void;
        /**
Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range
@method
@param start - 
@param end - 
@returns 
*/
selectText(start: number, end: number): void;
        /**
Sets true if enumerated mask parts can be set to an empty string
@method
@param value - 
@returns 
*/
set_allowEmptyEnumerations(value: boolean): void;
        /**
Enables or disables postbacks when the user changes the text in the input
@method
@param value - 
@returns 
*/
set_autoPostBack(value: boolean): void;
        /**
Sets the position of the caret
@method
@param position - 
@returns 
*/
set_caretPosition(position: number): void;
        /**
Sets the cursor position of the RadMaskedTextBox control
@method
@param position - 
@returns 
*/
set_cursorPosition(position: number): void;
        /**
Sets the display format position of the RadMaskedTextBox control
@method
@param value - Possible values are Telerik.Web.UI.DisplayFormatPosition.Left and Telerik.Web.UI.DisplayFormatPosition.Right
@returns 
*/
set_displayFormatPosition(value: Telerik.Web.UI.DisplayFormatPosition): void;
        /**
Sets the prompt character that is used when the text box does not have focus.
@method
@param value - 
@returns 
*/
set_displayPromptChar(value: string): void;
        /**
Sets the message that appears when the input value is an empty string
@method
@param value - 
@returns 
*/
set_emptyMessage(value: string): void;
        /**
Sets true if the input is enabled
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets true if the prompt characters and literals are not displayed when the text box is empty and does not have focus
@method
@param value - 
@returns 
*/
set_hideOnBlur(value: boolean): void;
        /**
Sets if the input should be in error state (riError class to be applied)
@method
@param value - 
@returns 
*/
set_invalid(value: boolean): void;
        /**
Sets the invalid style duration of RadInputControl
@method
@param value - 
@returns 
*/
set_invalidStyleDuration(value: number): void;
        /**
Sets the prompt character
@method
@param value - 
@returns 
*/
set_promptChar(value: string): void;
        /**
Sets true if the text box is read-only
@method
@param value - 
@returns 
*/
set_readOnly(value: boolean): void;
        /**
Accepts a Boolean value indicating if the caret position on the RadMaskedTextBox control should be reset on focus
@method
@param value - 
@returns 
*/
set_resetCaretOnFocus(value: boolean): void;
        /**
Accepts a Boolean value indicating if the numeric ranges of the RadMaskedTextBox control should be rounded
@method
@param value - 
@returns 
*/
set_roundNumericRanges(value: boolean): void;
        /**
Sets the SelectionOnFocus property
@method
@param value - 
@returns 
*/
set_selectionOnFocus(value: Telerik.Web.UI.SelectionOnFocus): void;
        /**
Accepts true if the input has an associated image button
@method
@param value - 
@returns 
*/
set_showButton(value: boolean): void;
        /**
Sets the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded
@method
@param value - 
@returns 
*/
set_styles(value: any): void;
        /**
Sets the string that the user typed into the input
@method
@param value - 
@returns 
*/
set_textBoxValue(value: string): void;
        /**
Sets the value of the text box
@method
@param newValue - 
@returns 
*/
set_value(newValue: string): void;
        /**
Sets the input element as hidden on the client
@method
@param value - 
@returns 
*/
set_visible(value: boolean): void;
        /**
Updates the css class of RadInputControl
@method
@returns 
*/
updateCssClass(): void;
        /**
Updates the css text of RadInputControl
@method
@param styleCssText - 
@returns 
*/
updateCssText(styleCssText: string): void;
        /**
Updates the display value of RadInputControl
@method
@returns 
*/
updateDisplayValue(): void;
        /**
Updates the value of the hidden input field
@method
@returns 
*/
updateHiddenValue(): void;
        /**
Adds the handler for the blur event
*/
add_blur(handler: Function): void;
        /**
Adds the handler for the buttonClick event
*/
add_buttonClick(handler: Function): void;
        /**
Adds the handler for the disable event
*/
add_disable(handler: Function): void;
        /**
Adds the handler for the enable event
*/
add_enable(handler: Function): void;
        /**
Adds the handler for the enumerationChanged event
*/
add_enumerationChanged(handler: Function): void;
        /**
Adds the handler for the error event
*/
add_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
add_focus(handler: Function): void;
        /**
Adds the handler for the keyPress event
*/
add_keyPress(handler: Function): void;
        /**
Adds the handler for the load event
*/
add_load(handler: Function): void;
        /**
Adds a handler for the mouseOut event
*/
add_mouseOut(handler: Function): void;
        /**
Adds the handler for the mouseOver event
*/
add_mouseOver(handler: Function): void;
        /**
Adds the handler for the moveDown event
*/
add_moveDown(handler: Function): void;
        /**
Adds the handler for the moveUp event
*/
add_moveUp(handler: Function): void;
        /**
Adds the handler for the valueChanged event
*/
add_valueChanged(handler: Function): void;
        /**
Adds the handler for the valueChanging event
*/
add_valueChanging(handler: Function): void;
        /**
Removes the handler for the blur event
*/
remove_blur(handler: Function): void;
        /**
Removes the handler for the buttonClick event
*/
remove_buttonClick(handler: Function): void;
        /**
Removes the handler for the disable event
*/
remove_disable(handler: Function): void;
        /**
Removes the handler for the enable event
*/
remove_enable(handler: Function): void;
        /**
Removes the handler for the enumerationChanged event
*/
remove_enumerationChanged(handler: Function): void;
        /**
Removes the handler for the error event
*/
remove_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
remove_focus(handler: Function): void;
        /**
Removes the handler for the keyPress event
*/
remove_keyPress(handler: Function): void;
        /**
Removes the handler for the load event
*/
remove_load(handler: Function): void;
        /**
Removes the handler for the mouseOut event
*/
remove_mouseOut(handler: Function): void;
        /**
Removes the handler for the mouseOver event
*/
remove_mouseOver(handler: Function): void;
        /**
Removes the handler for the moveDown event
*/
remove_moveDown(handler: Function): void;
        /**
Removes the handler for the moveUp event
*/
remove_moveUp(handler: Function): void;
        /**
Removes the handler for the valueChanged event
*/
remove_valueChanged(handler: Function): void;
        /**
Removes the handler for the valueChanging event
*/
remove_valueChanging(handler: Function): void;
    }


    class RadMaskedTextBoxComponent  extends Sys.Component {
        /**
Attaches the event handlers to all target RadMaskedTextBoxExtenders
@method
@returns 
*/
_attachEventHandlers(): void;
        /**
Handles the keydown event of the input dom elements extended by the target extenders
@method
@param e - 
@returns 
*/
_onTextBoxKeyDownHandler(e: string): void;
        /**
Set the internal display mask part according to the value of the current extender
@method
@param value - 
@returns 
*/
_resetDisplayPartValues(value: string): void;
        /**
Set the internal mask part according to the value of the current extender
@method
@param value - 
@returns 
*/
_resetPartValues(value: string): void;
        /**
Returns true if empty enumerations are allowed, and false otherwise
@method
@returns 
*/
get_allowEmptyEnumerations(): void;
        /**
Returns initial display mask parts serialized from the server
@method
@returns 
*/
get_initialDisplayMaskParts(): void;
        /**
Returns initial mask parts serialized from the server
@method
@returns 
*/
get_initialMaskParts(): void;
        /**
Returns if the field is required
@method
@returns 
*/
get_isRequiredFields(): void;
        /**
Returns the alignment of numeric ranges.
@method
@returns 
*/
get_numericRangeAlign(): void;
        /**
Returns the prompt char of the Mask
@method
@returns 
*/
get_promptChar(): void;
        /**
Returns if the numberic ranges will be rounded.
@method
@returns 
*/
get_roundNumericRanges(): void;
        /**
Gets the target input of RadMaskedTextBoxComponent
@method
@param id - 
@returns 
*/
get_targetInput(id: number): number;
        /**
Returns if the values of numeric range parts of the mask to have a fixed width
@method
@returns 
*/
get_zeroPadNumericRanges(): void;
        /**
Used by the framework to set initial display mask parts serialized from the server
@method
@returns 
*/
set_initialDisplayMaskParts(): void;
        /**
Used by the framework to set initial mask parts serialized from the server
@method
@returns 
*/
set_initialMaskParts(): void;
        /**
Sets if the field should be required
@method
@returns 
*/
set_isRequiredFields(): void;
    }


    class RadMaskedTextBoxExtender   {
        /**
Returns the value without prompt chars and literals
@method
@returns 
*/
get_pureValue(): void;
        /**
Returns the value or empty string if the empty message is shown currently
@method
@returns 
*/
get_value(): void;
        /**
Returns the value with prompt chars and literals
@method
@returns 
*/
get_valueWithPromptAndLiterals(): void;
        /**
Check if the if the value of RadMaskedTextBoxExtender is empty or null
@method
@returns 
*/
isEmpty(): void;
        /**
Update the value of RadMaskedTextBoxExtender
@method
@param value - 
@returns 
*/
updateValue(value: string): void;
    }


    class RadMediaPlayer   {
        /**
Exits Full Screen mode.
@method
@returns 
*/
exitFullScreen(): void;
        /**
Plays the media.
@method
@returns 
*/
play(): void;
        /**
Proceeds to given time frame.
@method
@returns 
*/
seekTo(): void;
        /**
Pauses playing the media.
@method
@returns 
*/
pause(): void;
        /**
Mutes the media.
@method
@returns 
*/
mute(): void;
        /**
Unmutes the media.
@method
@returns 
*/
unmute(): void;
        /**
Provides a reference to the toolbar object.
@method
@returns 
*/
toolbar(): void;
        /**
Provides a reference to the titlebar object.
@method
@returns 
*/
titlebar(): void;
        /**
Stops playing the media.
@method
@returns 
*/
stop(): void;
        /**
Determines whether the media has ended.
@method
@returns 
*/
isEnded(): void;
        /**
Determines whether the media is paused.
@method
@returns 
*/
isPaused(): void;
        /**
Determines whether the media is muted.
@method
@returns 
*/
isMuted(): void;
        /**
Determines whether the media is playing.
@method
@returns 
*/
isPlaying(): void;
        /**
Gets the exact time which the player is currently on.
@method
@returns 
*/
get_currentTime(): void;
        /**
Controls the Full Screen mode of the media.
@method
@returns 
*/
get_fsActive(): void;
        /**
Controls the HD quality status of the media.
@method
@returns 
*/
get_hdActive(): void;
        /**
Controls a collection of the basic options for the player.
@method
@returns 
*/
get_options(): void;
        /**
Controls the source of the player.
@method
@returns 
*/
get_source(): void;
        /**
Controls the toolbar's position.
@method
@returns 
*/
get_toolbarDocked(): void;
        /**
Controls the volume of the media.
@method
@returns 
*/
get_volume(): void;
        /**
This event is fired after the media finishes playing.
*/
add_ended(handler: Function): void;
        /**
This event is fired after the media pauses.
*/
add_paused(handler: Function): void;
        /**
This event is fired after the media begins playing.
*/
add_play(handler: Function): void;
        /**
This event is fired when any loading is over and the player is ready to start playing the media.
*/
add_ready(handler: Function): void;
        /**
This event is fired when the user selects a new play time.
*/
add_seekStart(handler: Function): void;
        /**
This event is fired upon changing the volume level.
*/
add_volumeChanged(handler: Function): void;
    }


    class RadMenu  extends Telerik.Web.UI.ControlItemContainer {
        /**
Closes all opened items
@method
@returns 
*/
close(): void;
        /**
Writes the changes to the listbox that were made since a previous call to trackChanges, so that they are preserved over post-backs.
@method
@returns 
*/
commitChanges(): void;
        /**
Disables all items in the menu. Clicking on any item will no longer have effect, child items cannot be opened.
@method
@returns 
*/
disable(): void;
        /**
Disables the control client-side event emitting.
@method
@returns 
*/
disableEvents(): void;
        /**
Enables all items in the menu.
@method
@returns 
*/
enable(): void;
        /**
Enables the control client-side event emitting. Events are enabled by default.
@method
@returns 
*/
enableEvents(): void;
        /**
Returns the first RadMenuItem object whose NavigateUrl property is equal to the passed parameter. Note that the parameter should end with "/" for example: var item = sender.findItemByAbsoluteUrl("http://www.test.com/");
@method
@param url - NavigateUrl of the Item
@returns The first RadMenuItem found
*/
findItemByAbsoluteUrl(url: string): Telerik.Web.UI.RadMenuItem;
        /**
Returns the first RadMenuItem object with a custom attribute of the specified name and value.
@method
@param attributeName - The attribute name
@param attributeValue - The attribute value
@returns The first RadMenuItem found
*/
findItemByAttribute(attributeName: string, attributeValue: string): Telerik.Web.UI.RadMenuItem;
        /**
Returns the first RadMenuItem object whose Text property is equal to the passed parameter.
@method
@param text - Text of the Item
@returns The first RadMenuItem found
*/
findItemByText(text: string): Telerik.Web.UI.RadMenuItem;
        /**
Returns the first RadMenuItem object whose NavigateUrl property is equal to the passed parameter.
@method
@param url - NavigateUrl of the Item
@returns The first RadMenuItem found
*/
findItemByUrl(url: string): Telerik.Web.UI.RadMenuItem;
        /**
Returns the first RadMenuItem object whose Value property is equal to the passed parameter.
@method
@param value - Value of the Item
@returns The first RadMenuItem found
*/
findItemByValue(value: string): Telerik.Web.UI.RadMenuItem;
        /**
Brings the focus to the menu so that it can be controlled via the keyboard.
@method
@returns 
*/
focus(): void;
        /**
Gets a linear collection of all items. This includes all root and child items in the menu.
@method
@returns Array
*/
get_allItems(): any;
        /**
Returns the DOM element for the root list of items in the menu.
@method
@returns DOM element for the root item list
*/
get_childListElement(): HTMLElement;
        /**
Returns a boolean value indicating whether click-to-open is enabled
@method
@returns Boolean indicating whether click
*/
get_clickToOpen(): boolean;
        /**
Returns the delay (in milliseconds) before a menu item closes.
@method
@returns The delay in milliseconds to wait before closing a menu item.
*/
get_collapseDelay(): number;
        /**
Returns a boolean value indicating whether auto-scrolling is enabled
@method
@returns Boolean indicating whether auto
*/
get_enableAutoScroll(): boolean;
        /**
Returns a boolean value indicating whether child items should have rounded corners
@method
@returns Boolean indicating whether child items should have rounded corners
*/
get_enableRoundedCorners(): boolean;
        /**
Returns a boolean value indicating whether screen boundary detection is enabled
@method
@returns Boolean indicating whether screen boundary detection is enabled
*/
get_enableScreenBoundaryDetection(): boolean;
        /**
Returns a boolean value whether item selection is enabled
@method
@returns Boolean indicating whether item selection is enabled.
*/
get_enableSelection(): boolean;
        /**
Returns a boolean value indicating whether child items should have shadows
@method
@returns Boolean indicating whether child items should have shadows
*/
get_enableShadows(): boolean;
        /**
Returns the delay (in milliseconds) before a menu item expands.
@method
@returns The delay in milliseconds to wait before expanding a menu item.
*/
get_expandDelay(): number;
        /**
Returns the currently focused root level item. Returns null if no root item has focus.
@method
@returns The focused root item
*/
get_focusedItem(): Telerik.Web.UI.RadMenuItem;
        /**
Returns the collection of root level items.
@method
@returns RadMenuItemCollection
*/
get_items(): Telerik.Web.UI.RadMenuItemCollection;
        /**
Returns the currently opened root level item. If no item is opened at the root level the method will return null.
@method
@returns The opened root item
*/
get_openedItem(): Telerik.Web.UI.RadMenuItem;
        /**
Returns whether items loaded on demand persist on the server.
@method
@returns Boolean indicating whether items loaded on demand persist on the server.
*/
get_persistLoadOnDemandItems(): boolean;
        /**
Returns the selected menu item. If no item is selected returns null.
@method
@returns The selected menu item.
*/
get_selectedItem(): Telerik.Web.UI.RadMenuItem;
        /**
Refreshes the RadMenu UI.
@method
@returns 
*/
repaint(): void;
        /**
Sets whether click-to-open is enabled
@method
@param value - true if click
@returns 
*/
set_clickToOpen(value: boolean): void;
        /**
Sets the delay (in milliseconds) before a menu item closes.
@method
@param delay - The delay in milliseconds to wait before closing a menu item.
@returns 
*/
set_collapseDelay(delay: number): void;
        /**
Sets whether auto-scrolling is enabled
@method
@param value - true if auto
@returns 
*/
set_enableAutoScroll(value: boolean): void;
        /**
Sets whether child items should have rounded corners
@method
@param value - true if child items should have rounded corners
@returns 
*/
set_enableRoundedCorners(value: boolean): void;
        /**
Sets whether screen boundary detection is enabled
@method
@param value - true if screen boundary detection should be enabled
@returns 
*/
set_enableScreenBoundaryDetection(value: boolean): void;
        /**
Sets whether item selection is enabled
@method
@param value - true to enable item selection or false to disable it.
@returns 
*/
set_enableSelection(value: boolean): void;
        /**
Sets whether child items should have shadows
@method
@param value - true if child items should have shadows
@returns 
*/
set_enableShadows(value: boolean): void;
        /**
Disables or enables the entire RadMenu. Items will not open and client events will not firee when the Menu is disabled
@method
@param value - true to enable the Menu or false to disable it.
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the delay (in milliseconds) before a menu item expands.
@method
@param delay - The delay in milliseconds to wait before expanding a menu item.
@returns 
*/
set_expandDelay(delay: number): void;
        /**
Begins tracking changes to the RadMenu items. Only changes to the items that occur between a call to trackChanges and commitChanges persist after a postback.
@method
@returns 
*/
trackChanges(): void;
        /**

*/
load(handler: Function): void;
    }


    class RadMenuItem  extends Telerik.Web.UI.ControlItem {
        /**
Evaluates the template against the Menu Item's data and applies it.
@method
@returns 
*/
bindTemplate(): void;
        /**
Removes focus from the RadMenuItem
@method
@returns 
*/
blur(): void;
        /**
Simulates a click on the RadMenuItem
@method
@returns 
*/
click(): void;
        /**
Closes the RadMenuItem
@method
@returns 
*/
close(): void;
        /**
Disables the RadMenuItem. Clicking on it will no longer have effect, child items cannot be opened.
@method
@returns 
*/
disable(): void;
        /**
Enables the RadMenuItem if it has been previously disabled
@method
@returns 
*/
enable(): void;
        /**
Changes the focus to the RadMenuItem
@method
@returns 
*/
focus(): void;
        /**
Changes the focus to the RadMenuItem's first child
@method
@returns 
*/
focusFirstChild(): void;
        /**
Changes the focus to the RadMenuItem's last child
@method
@returns 
*/
focusLastChild(): void;
        /**
Changes the focus to the RadMenuItem's next sibling
@method
@returns 
*/
focusNextItem(): void;
        /**
Changes the focus to the RadMenuItem's previous sibling
@method
@returns 
*/
focusPreviousItem(): void;
        /**
Gets the DOM element of the list of child items (UL).
@method
@returns 
*/
get_childListElement(): void;
        /**
Returns the Menu Item's css class if clicked.
@method
@returns The Menu Item
*/
get_clickedCssClass(): string;
        /**
Returns the URL of the Menu Item's Image on click.
@method
@returns The Menu Item Image
*/
get_clickedImageURL(): string;
        /**
Returns the value of the Menu Item's ClientTemplate property.
@method
@returns The Menu Item
*/
get_clientTemplate(): string;
        /**
Returns the Menu Item's css class if disabled.
@method
@returns The Menu Item
*/
get_disabledCssClass(): string;
        /**
Returns the URL of the Menu Item's Image if disabled.
@method
@returns The Menu Item
*/
get_disabledImageURL(): string;
        /**
Returns the Menu Item's css class if expanded.
@method
@returns The Menu Item
*/
get_expandedCssClass(): string;
        /**
Returns the URL of the Menu Item's Image for expanding.
@method
@returns The expand Menu Item
*/
get_expandedImageURL(): string;
        /**
Returns the value of the Menu Item's Expand Mode - 0 for Client-Side, 1 for WebService.
@method
@returns The Menu Item
*/
get_expandedMode(): number;
        /**
Indicates whether the menu item is focused.
@method
@returns Boolean
*/
get_focused(): boolean;
        /**
Returns the Menu Item's css class if focused.
@method
@returns The Menu Item
*/
get_focusedCssClass(): string;
        /**
Gets the focused child item. Null if no child item is focused.
@method
@returns RadMenuItem
*/
get_focusedItem(): Telerik.Web.UI.RadMenuItem;
        /**
Gets the URL of the image displayed when the mouse is over the item.
@method
@returns The URL of the image displayed when the mouse is over the item.
*/
get_hoveredImageUrl(): string;
        /**
Gets the image DOM element of the item. If the server side ImageUrl property is not set, returns null.
@method
@returns 
*/
get_imageElement(): void;
        /**
Gets the URL of the item's image.
@method
@returns The URL of the item
*/
get_imageUrl(): string;
        /**

@method
@returns 
*/
get_isOpen(): void;
        /**
Returns true if the item is a separator (sever-side property IsSeparator = true)
@method
@returns Value indicating if the RadMenuItem is a separator
*/
get_isSeparator(): boolean;
        /**
Returns the collection of child items.
@method
@returns RadMenuItemCollection
*/
get_items(): Telerik.Web.UI.RadMenuItemCollection;
        /**
Gets the level of the item. Root level items are first level.
@method
@returns The item
*/
get_level(): number;
        /**
Gets the anchor DOM element of the item (A).
@method
@returns 
*/
get_linkElement(): void;
        /**
Returns an instance of the menu that contains the item.
@method
@returns 
*/
get_menu(): void;
        /**
Gets the URL of the Web page the menu item launches.
@method
@returns 
*/
get_navigateUrl(): void;
        /**
Returns the next sibling of the item. If the item is last, returns null.
@method
@returns RadMenuItem
*/
get_nextItem(): Telerik.Web.UI.RadMenuItem;
        /**
Gets the opened child item. Null if no child item is opened.
@method
@returns RadMenuItem
*/
get_openedItem(): Telerik.Web.UI.RadMenuItem;
        /**
Returns the previous sibling of the item. If the item is first, returns null.
@method
@returns RadMenuItem
*/
get_previousItem(): Telerik.Web.UI.RadMenuItem;
        /**
Returns whether the item is selected
@method
@returns Boolean
*/
get_selected(): boolean;
        /**
Returns the Menu Item's css class if selected.
@method
@returns The Menu Item
*/
get_selectedCssClass(): string;
        /**
Gets the URL of the image displayed when item is selected.
@method
@returns 
*/
get_selectedImageUrl(): string;
        /**
Returns the html representation of the element's template.
@method
@returns The item
*/
get_templateElement(): string;
        /**
Gets the DOM element of the item text (SPAN).
@method
@returns 
*/
get_textElement(): void;
        /**
Hides the RadMenuItem
@method
@returns 
*/
hide(): void;
        /**
Opens the RadMenuItem to show its children
@method
@returns 
*/
open(): void;
        /**
Loads next View's Menu Items.
@method
@returns 
*/
scrollIntoView(): void;
        /**
Selects the RadMenuItem
@method
@returns 
*/
select(): void;
        /**
Sets the Menu Item's css class if clicked.
@method
@param value - The Menu Item
@returns 
*/
set_clickedCssClass(value: string): void;
        /**
Sets the URL of the Menu Item's Image on click.
@method
@param value - The Menu Item Image
@returns 
*/
set_clickedImageURL(value: string): void;
        /**
Sets the value of the Menu Item's ClientTemplate property.
@method
@param value - value
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Sets the Menu Item's css class if disabled.
@method
@param value - The Menu Item
@returns 
*/
set_disabledCssClass(value: string): void;
        /**
Sets the URL of the Menu Item's Image if disabled.
@method
@param value - The Menu Item
@returns 
*/
set_disabledImageURL(value: string): void;
        /**
Sets the enabled state of the item.
@method
@param value - Value indicating the enabled state of the item.
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the Menu Item's css class if expanded.
@method
@param value - The Menu Item
@returns 
*/
set_expandedCssClass(value: string): void;
        /**
Sets the URL of the Menu Item's Image for expanding.
@method
@param value - The expand Menu Item
@returns 
*/
set_expandedImageURL(value: string): void;
        /**
Sets the value of the Menu Item's Expand Mode - 0 for Client-Side, 1 for WebService.
@method
@param value - The Menu Item
@returns 
*/
set_expandedMode(value: number): void;
        /**
Sets focus to the item.
@method
@param value - value
@returns 
*/
set_focused(value: boolean): void;
        /**
Sets the Menu Item's css class if focused.
@method
@param value - The Menu Item
@returns 
*/
set_focusedCssClass(value: string): void;
        /**
Sets the URL of the image displayed when the mouse is over the item.
@method
@param value - The URL of the image displayed when the mouse is over the item.
@returns 
*/
set_hoveredImageUrl(value: string): void;
        /**
Sets the URL of the item's image.
@method
@param value - The URL of the item
@returns 
*/
set_imageUrl(value: string): void;
        /**

@method
@returns 
*/
set_isSeparator(): void;
        /**
Sets the navigateURL property of the item. This is the URL of the Web page the menu item launches. The navigateUrl property must be an absolute URL on the client side: (e.g. "http://mydomain.com/default.aspx" not "default.aspx").
@method
@returns 
*/
set_navigateUrl(): void;
        /**
Sets the selected property of the item.
@method
@param value - value
@returns 
*/
set_selected(value: boolean): void;
        /**
Sets the Menu Item's css class if selected.
@method
@param value - The Menu Item
@returns 
*/
set_selectedCssClass(value: string): void;
        /**
Sets the URL of the image displayed when the item is selected
@method
@param value - The URL of the image displayed when the item is selected.
@returns 
*/
set_selectedImageUrl(value: string): void;
        /**
Sets the text of the item.
@method
@returns 
*/
set_text(): void;
        /**
Sets the visibility of the item
@method
@param value - Boolean value indicating the item should be visible
@returns 
*/
set_visible(value: boolean): void;
        /**
Shows the RadMenuItem if it is hidden
@method
@returns 
*/
show(): void;
        /**
Unselects the RadMenuItem
@method
@returns 
*/
unselect(): void;
    }


    class RadMenuItemCollection  extends Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.RadMenuItem> {
        /**
Adds a child item to the collection.
@method
@param item - item
@returns 
*/
add(item: Telerik.Web.UI.RadMenuItem): void;
        /**
Clears the collection of all the child items it contains.
@method
@returns 
*/
clear(): void;
        /**
Iterates through the items of the RadMenuItemCollection using labmda expression
@method
@param lambda - lambda
@returns 
*/
forEach(lambda: Function): void;
        /**
Returns the item from the collection that resides at the specified index.
@method
@param index - index
@returns RadMenuItem
*/
getItem(index: number): Telerik.Web.UI.RadMenuItem;
        /**
Returns the number of the items in the collection.
@method
@returns int
*/
get_count(): number;
        /**
Returns the index of a the item in the collection.
@method
@param item - item
@returns int
*/
indexOf(item: Telerik.Web.UI.RadMenuItem): number;
        /**
Inserts the item into the collection at the position defined by the first (index) parameter.
@method
@param index - index
@param item - item
@returns 
*/
insert(index: number, item: Telerik.Web.UI.RadMenuItem): void;
        /**
Removes the specified item from the collection.
@method
@param item - item
@returns 
*/
remove(item: Telerik.Web.UI.RadMenuItem): void;
        /**
Removes the item at the specified index.
@method
@param index - index
@returns 
*/
removeAt(index: number): void;
    }


    class RadMonthYearPicker  extends Telerik.Web.UI.RadWebControl {
        /**
Clears the selection, leaving the value as unassigned.
@method
@returns 
*/
clear(): void;
        /**
Returns the dimensions of the specified child element.
@method
@param element - 
@returns 
*/
getElementDimensions(element: any): any;
        /**
Returns the culture used by RadDateInput to format the date.
@method
@returns 
*/
get_culture(): string;
        /**
Returns a reference to the client object for the input area. For details on using this object, see the RadInput documentation.
@method
@returns 
*/
get_dateInput(): Telerik.Web.UI.RadDateInput;
        /**
Returns whether the screen boundary detection will be applied.
@method
@returns 
*/
get_enableScreenBoundaryDetection(): boolean;
        /**
Returns true if the control is enabled
@method
@returns 
*/
get_enabled(): boolean;
        /**
Returns the date that determines the view the popup calendar uses when the value of the date picker is not assigned.
@method
@returns 
*/
get_focusedDate(): Date;
        /**
Returns the latest date the user can select.
@method
@returns 
*/
get_maxDate(): Date;
        /**
Returns the latest date the user can select as string.
@method
@returns 
*/
get_maxDateStr(): string;
        /**
Returns the earliest date the user can select.
@method
@returns 
*/
get_minDate(): Date;
        /**
Returns the earliest date the user can select as string.
@method
@returns 
*/
get_minDateStr(): string;
        /**
Returns an array with the fast navigation settings. The settings are, in order, TodayButtonCaption, OkButtonCaption, CancelButtonCaption, DateIsOutOfRangeMessage, EnableTodayButtonSelection.
@method
@returns 
*/
get_monthYearNavigationSettings(): any;
        /**
Returns the DOM element for the calendar popup button.
@method
@returns 
*/
get_popupButton(): any;
        /**
Set the popup direction
@method
@returns 
*/
get_popupDirection(): string;
        /**
Returns the selected date, or null if no date is selected.
@method
@returns 
*/
get_selectedDate(): Date;
        /**
Returns whether the popup control (Calendar or TimeView) will be displayed when the DateInput textbox is focused.
@method
@returns 
*/
get_showPopupOnFocus(): boolean;
        /**
Returns the real skin name for the control user interface. If Skin is not set, returns "Default".
@method
@returns 
*/
get_skin(): string;
        /**
Returns object containing all styles applied to the control.
@method
@returns 
*/
get_stylesHash(): any;
        /**
Returns the DOM element for the text box that implements the input area.
@method
@returns 
*/
get_textBox(): any;
        /**
Returns whether the control is visible
@method
@returns 
*/
get_visible(): boolean;
        /**
Hides the popup calendar if it is showing.
@method
@returns 
*/
hidePopup(): void;
        /**
Returns true if the value is unassigned.
@method
@returns 
*/
isEmpty(): void;
        /**
Returns whether the popup calendar is visible.
@method
@returns 
*/
isPopupVisible(): void;
        /**
Sets whether the screen boundary detection will be applied.
@method
@param value - 
@returns 
*/
navigateToDate(value: boolean): void;
        /**
Raise the dateSelected event.
@method
@param handler - 
@returns 
*/
raise_dateSelected(handler: Function): void;
        /**
Raise the monthSelected event.
@method
@param handler - 
@returns 
*/
raise_monthSelected(handler: Function): void;
        /**
Raise the popupClosing event.
@method
@param handler - 
@returns 
*/
raise_popupClosing(handler: Function): void;
        /**
Raise the popupOpening event.
@method
@param handler - 
@returns 
*/
raise_popupOpening(handler: Function): void;
        /**
Raise the viewChanged event.
@method
@param handler - 
@returns 
*/
raise_viewChanged(handler: Function): void;
        /**
Raise the yearSelected event.
@method
@param handler - 
@returns 
*/
raise_yearSelected(handler: Function): void;
        /**
Repaints the control
@method
@returns 
*/
repaint(): void;
        /**

@method
@returns 
*/
set_dateInput(): void;
        /**
Sets whether the screen boundary detection will be applied.
@method
@param value - 
@returns 
*/
set_enableScreenBoundaryDetection(value: boolean): void;
        /**
Enables/disables the control
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the date that determines the view the popup calendar uses when the value of the date picker is not assigned.
@method
@param value - 
@returns 
*/
set_focusedDate(value: Date): void;
        /**
Sets the latest date the user can select.
@method
@param value - 
@returns 
*/
set_maxDate(value: Date): void;
        /**
Sets the earliest date the user can select.
@method
@param value - 
@returns 
*/
set_minDate(value: Date): void;
        /**
Sets the fast navigation settings. The settings are, in order, TodayButtonCaption, OkButtonCaption, CancelButtonCaption, DateIsOutOfRangeMessage, EnableTodayButtonSelection. Changes you make to these settings have an effect only if you make them before the first time the month/year navigation popup is displayed.
@method
@param value - 
@returns 
*/
set_monthYearNavigationSettings(value: any): void;
        /**
Returns the popup direction
@method
@param value - 
@returns 
*/
set_popupDirection(value: string): void;
        /**
Assigns the value of the date picker.
@method
@param newDate - 
@returns 
*/
set_selectedDate(newDate: Date): void;
        /**
Sets whether the popup control (Calendar or TimeView) will be displayed when the DateInput textbox is focused.
@method
@param value - 
@returns 
*/
set_showPopupOnFocus(value: boolean): void;
        /**
Shows/hides the control
@method
@param value - 
@returns 
*/
set_visible(value: boolean): void;
        /**
Displays the popup calendar at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.
@method
@param x - 
@param y - 
@returns 
*/
showPopup(x: number, y: number): void;
        /**
Toggles the visible state of the popup calendar.
@method
@returns 
*/
togglePopup(): void;
        /**
Add an event handler for the dateSelected event.
*/
add_dateSelected(handler: Function): void;
        /**
Add an event handler for the monthSelected event.
*/
add_monthSelected(handler: Function): void;
        /**
Add an event handler for the popupClosing event.
*/
add_popupClosing(handler: Function): void;
        /**
Add an event handler for the popupOpening event.
*/
add_popupOpening(handler: Function): void;
        /**
Add an event handler for the viewChanged event.
*/
add_viewChanged(handler: Function): void;
        /**
Add an event handler for the yearSelected event.
*/
add_yearSelected(handler: Function): void;
        /**
Remove an event handler for the dateSelected event.
*/
remove_dateSelected(handler: Function): void;
        /**
Remove an event handler for the monthSelected event.
*/
remove_monthSelected(handler: Function): void;
        /**
Remove an event handler for the popupClosing event.
*/
remove_popupClosing(handler: Function): void;
        /**
Remove an event handler for the popupOpening event.
*/
remove_popupOpening(handler: Function): void;
        /**
Remove an event handler for the viewChanged event.
*/
remove_viewChanged(handler: Function): void;
        /**
Remove an event handler for the yearSelected event.
*/
remove_yearSelected(handler: Function): void;
    }


    class RadMultiPage  extends Telerik.Web.UI.RadWebControl {
        /**
Sets the selected index of the multipage.
@method
@param value - the selected index of the multipage
@returns 
*/
set_selectedIndex(value: number): void;
        /**
Begins tracking changes to the multipage. Only changes that occur between a call to trackChanges and commitChanges persist after a postback.
@method
@returns 
*/
trackChanges(): void;
        /**
Gets the first page view instance, whose id corresponds to the passed parameter.
@method
@param id - The id to look for
@returns 
*/
findPageViewByID(id: string): Telerik.Web.UI.RadPageView;
        /**
Returns the currently selected pageview.
@method
@returns the currently selected pageview
*/
get_selectedPageView(): Telerik.Web.UI.RadPageView;
        /**
Gets the DOM element for the multipage.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Returns the index of the selected pageview.
@method
@returns 
*/
get_selectedIndex(): number;
        /**
Ends tracking changes to the multipage. Only changes that occur between a call to trackChanges and commitChanges persist after a postback.
@method
@returns 
*/
commitChanges(): void;
        /**
Returns a collection of all pageviews.
@method
@returns 
*/
get_pageViews(): Telerik.Web.UI.RadPageViewCollection;
    }


    class RadNotification  extends Telerik.Web.UI.RadWebControl {
        /**
Gets a new overflow value for the notification content area
@method
@returns 
*/
get_contentScrolling(): Telerik.Web.UI.NotificationScrolling;
        /**
Gets the value indicating the opacity of the RadNotification.The value should be between 0 and 100. The default value is 100 which is opaque
@method
@returns 
*/
get_opacity(): number;
        /**
Sets a new horizontal offset relative to the browser window
@method
@param value - 
@returns 
*/
set_offsetX(value: number): void;
        /**
Gets a value indicating whether the notification should be scrolled along with the content or not.
@method
@returns 
*/
get_pinned(): boolean;
        /**
Gets a value indicating whether the notification will open automatically when its parent [aspx] page is loaded on the client.
@method
@returns 
*/
get_visibleOnPageLoad(): boolean;
        /**
Sets a new title to the notification
@method
@param value - 
@returns 
*/
set_title(value: string): void;
        /**
Gets the show interval of the notification
@method
@returns 
*/
get_showInterval(): number;
        /**
Returns a reference to the popup element of RadNotification
@method
@returns 
*/
get_popupElement(): any;
        /**
Gets the content element of the notification
@method
@returns 
*/
get_contentElement(): any;
        /**
Sets a value indicating whether the notification should stay on the screen when hovered (autoclose is delayed until the mouse goes outside the popup)
@method
@param value - 
@returns 
*/
set_keepOnMouseOver(value: boolean): void;
        /**
Returns the size and position of the notification popup
@method
@returns 
*/
getBounds(): Sys.UI.Bounds;
        /**
Sets new show interval to the notification
@method
@param value - 
@returns 
*/
set_showInterval(value: number): void;
        /**
Sets new width to the notification
@method
@param value - 
@returns 
*/
set_width(value: number): void;
        /**
Sets when the content should be loaded
@method
@param value - 
@returns 
*/
set_loadContentOn(value: Telerik.Web.UI.NotificationLoad): void;
        /**
Gets the z-index of the RadNotification
@method
@returns 
*/
get_zIndex(): number;
        /**
Gets the height of the notification
@method
@returns 
*/
get_height(): number;
        /**
Gets animation duration value for the notification
@method
@returns 
*/
get_animationDuration(): number;
        /**
Displays the notification at the proper position, relative to the browser window.
@method
@returns 
*/
show(): void;
        /**
Sets new z-index of the RadNotification
@method
@param value - 
@returns 
*/
set_zIndex(value: number): void;
        /**
Indicates whether the RadNotification popup is currently visible
@method
@returns 
*/
isVisible(): void;
        /**
Gets the vertical offset relative to the browser window
@method
@returns 
*/
get_offsetY(): number;
        /**
Updates the content of the notification.
@method
@returns 
*/
update(): void;
        /**
Gets a value indicating whether the RadNotification should have a visible titlebar
@method
@returns 
*/
get_visibleTitlebar(): boolean;
        /**
Returns a reference to a RadMenu object. Returns "null" when there is no menu configured
@method
@returns 
*/
get_titleMenu(): Telerik.Web.UI.RadMenu;
        /**
Sets a new overflow value for the notification content area
@method
@param value - 
@returns 
*/
set_contentScrolling(value: Telerik.Web.UI.NotificationScrolling): void;
        /**
Gets the horizontal offset relative to the browser window
@method
@returns 
*/
get_offsetX(): number;
        /**
Sets a value indicating whether the notification will create an overlay element.
@method
@param value - 
@returns 
*/
set_overlay(value: boolean): void;
        /**
Gets the animation value of the notification
@method
@returns 
*/
get_animation(): Telerik.Web.UI.NotificationAnimation;
        /**
Sets delay in milliseconds for the notification to close automatically
@method
@param value - 
@returns 
*/
set_autoCloseDelay(value: number): void;
        /**
Moves the notification to the specified coordinates
@method
@param x - 
@param y - 
@returns 
*/
moveTo(x: number, y: number): void;
        /**
Sets the value indicating the opacity of the RadNotification. The value should be between 0 and 100 where 100 is opaque.
@method
@param value - 
@returns 
*/
set_opacity(value: number): void;
        /**
Sets a value indicating whether the notification should be scrolled along with the content or not.
@method
@param value - 
@returns 
*/
set_pinned(value: boolean): void;
        /**
Sets new value to be associated with the RadNotification control
@method
@param value - The value set to the RadNotification control.
@returns 
*/
set_value(value: string): void;
        /**
Gets the text of the notification
@method
@returns 
*/
get_text(): string;
        /**
Sets new height to the notification
@method
@param value - 
@returns 
*/
set_height(value: number): void;
        /**
Sets a new relative to the browser window position for the notification
@method
@param value - 
@returns 
*/
set_position(value: Telerik.Web.UI.NotificationPosition): void;
        /**
Hides the notification
@method
@returns 
*/
hide(): void;
        /**
Gets a value indicating whether the notification is enabled
@method
@returns 
*/
get_enabled(): boolean;
        /**
Sets new text to the notification
@method
@param value - 
@returns 
*/
set_text(value: string): void;
        /**
Gets the width of the notification
@method
@returns 
*/
get_width(): number;
        /**
Gets a value indicating whether the notification has an overlay element.
@method
@returns 
*/
get_overlay(): boolean;
        /**
Sets animation duration value for the notification
@method
@param value - 
@returns 
*/
set_animationDuration(value: number): void;
        /**
Sets a value indicating whether the notification is enabled
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Gets when the content should be loaded
@method
@returns 
*/
get_loadContentOn(): Telerik.Web.UI.NotificationLoad;
        /**
Gets the update interval of the notification
@method
@returns 
*/
get_updateInterval(): number;
        /**
Gets the current value associated with the RadNotification control.
@method
@returns The current value associated with the RadNotification control.
*/
get_value(): string;
        /**
Gets the title of the notification
@method
@returns 
*/
get_title(): string;
        /**
Sets new width and height to the notification
@method
@param width - 
@param height - 
@returns 
*/
setSize(width: number, height: number): void;
        /**
Sets a value indicating whether the RadNotification should have a visible titlebar
@method
@param value - 
@returns 
*/
set_visibleTitlebar(value: boolean): void;
        /**
Gets the relative to the browser window position of the notification
@method
@returns 
*/
get_position(): Telerik.Web.UI.NotificationPosition;
        /**
Sets new animation value for the notification
@method
@param value - 
@returns 
*/
set_animation(value: Telerik.Web.UI.NotificationAnimation): void;
        /**
Sets new update interval to the notification
@method
@param value - 
@returns 
*/
set_updateInterval(value: number): void;
        /**
Gets delay in milliseconds for the notification to close automatically
@method
@returns 
*/
get_autoCloseDelay(): number;
        /**
Gets a value indicating whether the notification should stay on the screen when hovered (autoclose is delayed until the mouse goes outside the popup)
@method
@returns 
*/
get_keepOnMouseOver(): boolean;
        /**
Sets a new vertical offset relative to the browser window
@method
@param value - 
@returns 
*/
set_offsetY(value: number): void;
        /**
Add a handler to the OnClientShown event
*/
add_shown(handler: Function): void;
        /**
Remove a handler from the OnClientUpdateError event
*/
remove_updateError(handler: Function): void;
        /**
Add a handler to the OnClientHidden event
*/
add_hidden(handler: Function): void;
        /**
Remove a handler from the OnClientHiding event
*/
remove_hiding(handler: Function): void;
        /**
Remove a handler from the OnClientShown event
*/
remove_shown(handler: Function): void;
        /**
Remove a handler from the OnClientUpdating event
*/
remove_updating(handler: Function): void;
        /**
Remove a handler from the OnClientShowing event
*/
remove_showing(handler: Function): void;
        /**
Add a handler to the OnClientUpdated event
*/
add_updated(handler: Function): void;
        /**
Add a handler to the OnClientUpdateError event
*/
add_updateError(handler: Function): void;
        /**
Add a handler to the OnClientShowing event
*/
add_showing(handler: Function): void;
        /**
Add a handler to the OnClientHiding event
*/
add_hiding(handler: Function): void;
        /**
Add a handler to the OnClientUpdating event
*/
add_updating(handler: Function): void;
        /**
Remove a handler from the OnClientUpdated event
*/
remove_updated(handler: Function): void;
        /**
Remove a handler from the OnClientHidden event
*/
remove_hidden(handler: Function): void;
    }


    class RadNumericTextBox  extends Telerik.Web.UI.RadInputControl {
        /**
Indicating whether RadInputControl loses focus
@method
@returns 
*/
blur(): void;
        /**
Clears the client instance of RadInputControl
@method
@returns 
*/
clear(): void;
        /**
Disables the client instance of RadInputControl
@method
@returns 
*/
disable(): void;
        /**
Enables the client instance of RadInputControl
@method
@returns 
*/
enable(): void;
        /**
Indicating whether RadInputControl enter focus
@method
@returns 
*/
focus(): void;
        /**
Returns a Boolean value indicating if out-of-range auto correction is allowed
@method
@returns 
*/
get_allowOutOfRangeAutoCorrect(): boolean;
        /**
Returns the value of the AutoPostBack property
@method
@returns 
*/
get_autoPostBack(): boolean;
        /**
Returns the current position of the caret.
@method
@returns 
*/
get_caretPosition(): number;
        /**
Gets the value of RadInputControl as it is formatted when the input does not have focus
@method
@returns 
*/
get_displayValue(): string;
        /**
Gets the value of RadInputControl as it is formatted when the input has focus
@method
@returns 
*/
get_editValue(): string;
        /**
Returns the message that appears when the input value is an empty string
@method
@returns 
*/
get_emptyMessage(): string;
        /**
Returns true if the input is enabled
@method
@returns 
*/
get_enabled(): boolean;
        /**
Returns the Increment Settings object, which you can use to change the way the text box responds to arrow keys, the mouse wheel, and (if they are showing) the spin buttons
@method
@returns 
*/
get_incrementSettings(): any;
        /**
Returns true if the input in error state (riError class is applied)
@method
@returns 
*/
get_invalid(): boolean;
        /**
Gets the invalid style duration of RadInputControl
@method
@returns 
*/
get_invalidStyleDuration(): number;
        /**
Returns the maximum value the user can enter
@method
@returns 
*/
get_maxValue(): number;
        /**
Returns the minimum value the user can enter
@method
@returns 
*/
get_minValue(): number;
        /**
Returns the Number format client object, which you can use to change the way the text box formats its value when it does not have focus
@method
@returns 
*/
get_numberFormat(): Telerik.Web.UI.NumberFormat;
        /**
Returns the value of the SelectionOnFocus property
@method
@returns 
*/
get_selectionOnFocus(): Telerik.Web.UI.SelectionOnFocus;
        /**
Returns true if the input has an associated image button
@method
@returns 
*/
get_showButton(): boolean;
        /**
Returns true if the text box has an associated pair of spin buttons
@method
@returns 
*/
get_showSpinButtons(): boolean;
        /**
Returns the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded
@method
@returns 
*/
get_styles(): any;
        /**
Gets the string that the user typed into the input
@method
@returns 
*/
get_textBoxValue(): string;
        /**
Returns the value of the text box
@method
@returns 
*/
get_value(): string;
        /**
Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element
@method
@returns 
*/
get_visible(): boolean;
        /**
Gets the DOM element for the DIV wrapper element
@method
@returns 
*/
get_wrapperElement(): HTMLElement;
        /**
Returns true if the value of the RadInputControl is empty
@method
@returns 
*/
isEmpty(): void;
        /**
Returns true if the value of the RadInputControl is multi line
@method
@returns 
*/
isMultiLine(): void;
        /**
Returns true if the value of the RadInputControl is a negative number
@method
@returns 
*/
isNegative(): void;
        /**
Returns true if the value of the RadInputControl is read only
@method
@returns 
*/
isReadOnly(): void;
        /**
Raises the postback event of RadInputControl
@method
@returns 
*/
raisePostBackEvent(): void;
        /**
Raises the blur event
@method
@param args - 
@returns 
*/
raise_blur(args: Sys.EventArgs): void;
        /**
Raises the buttonClick event
@method
@param args - 
@returns 
*/
raise_buttonClick(args: Sys.EventArgs): void;
        /**
Raises the handler for the mouseOver event
@method
@param args - 
@returns 
*/
raise_disable(args: Sys.EventArgs): void;
        /**
Raises the enable event
@method
@param args - 
@returns 
*/
raise_enable(args: Sys.EventArgs): void;
        /**
Raises the enumerationChanged event
@method
@param args - 
@returns 
*/
raise_enumerationChanged(args: Sys.EventArgs): void;
        /**
Raises the error event
@method
@param args - 
@returns 
*/
raise_error(args: Sys.EventArgs): void;
        /**
Raises the focus event
@method
@param args - 
@returns 
*/
raise_focus(args: Sys.EventArgs): void;
        /**
Raises the keyPress event
@method
@param args - 
@returns 
*/
raise_keyPress(args: Sys.EventArgs): void;
        /**
Raises the load event
@method
@param args - 
@returns 
*/
raise_load(args: Sys.EventArgs): void;
        /**
Raises the mouseOut event
@method
@param args - 
@returns 
*/
raise_mouseOut(args: Sys.EventArgs): void;
        /**
Raises the mouseOver event
@method
@param args - 
@returns 
*/
raise_mouseOver(args: Sys.EventArgs): void;
        /**
Raises the moveDown event
@method
@param args - 
@returns 
*/
raise_moveDown(args: Sys.EventArgs): void;
        /**
Raises the moveUp event
@method
@param args - 
@returns 
*/
raise_moveUp(args: Sys.EventArgs): void;
        /**
Raises the valueChanged event
@method
@param newValue - 
@param oldValue - 
@returns 
*/
raise_valueChanged(newValue: any, oldValue: any): void;
        /**
Raises the valueChanging event
@method
@param args - 
@returns 
*/
raise_valueChanging(args: Sys.EventArgs): void;
        /**
Redraws the client side object on the client
@method
@returns 
*/
repaint(): void;
        /**
Saves the client state of the RadNumericTextBox control
@method
@returns 
*/
saveClientState(): void;
        /**
Selects all text in the RadInputControl
@method
@returns 
*/
selectAllText(): void;
        /**
Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range
@method
@param start - 
@param end - 
@returns 
*/
selectText(start: number, end: number): void;
        /**
Accepts a Boolean value indicating if out-of-range auto correction is allowed
@method
@param value - 
@returns 
*/
set_allowOutOfRangeAutoCorrect(value: boolean): void;
        /**
Enables or disables postbacks when the user changes the text in the input
@method
@param value - 
@returns 
*/
set_autoPostBack(value: boolean): void;
        /**
Sets the position of the caret
@method
@param position - 
@returns 
*/
set_caretPosition(position: number): void;
        /**
Sets the message that appears when the input value is an empty string
@method
@param value - 
@returns 
*/
set_emptyMessage(value: string): void;
        /**
Sets true if the input is enabled
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the Increment Settings object, which you can use to change the way the text box responds to arrow keys, the mouse wheel, and (if they are showing) the spin buttons
@method
@param value - 
@returns 
*/
set_incrementSettings(value: any): void;
        /**
Sets if the input should be in error state (riError class to be applied)
@method
@param value - 
@returns 
*/
set_invalid(value: boolean): void;
        /**
Sets the invalid style duration of RadInputControl
@method
@param value - 
@returns 
*/
set_invalidStyleDuration(value: number): void;
        /**
Sets the maximum value the user can enter
@method
@param value - 
@returns 
*/
set_maxValue(value: number): void;
        /**
Sets the minimum value the user can enter
@method
@param value - 
@returns 
*/
set_minValue(value: number): void;
        /**
Sets the Number format client object, which you can use to change the way the text box formats its value when it does not have focus
@method
@param value - 
@returns 
*/
set_numberFormat(value: Telerik.Web.UI.NumberFormat): void;
        /**
Sets the SelectionOnFocus property
@method
@param value - 
@returns 
*/
set_selectionOnFocus(value: Telerik.Web.UI.SelectionOnFocus): void;
        /**
Accepts true if the input has an associated image button
@method
@param value - 
@returns 
*/
set_showButton(value: boolean): void;
        /**
Sets true if the text box has an associated pair of spin buttons
@method
@param value - 
@returns 
*/
set_showSpinButtons(value: boolean): void;
        /**
Sets the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded
@method
@param value - 
@returns 
*/
set_styles(value: any): void;
        /**
Sets the string that the user typed into the input
@method
@param value - 
@returns 
*/
set_textBoxValue(value: string): void;
        /**
Sets the value of the text box
@method
@param newValue - 
@returns 
*/
set_value(newValue: string): void;
        /**
Sets the input element as hidden on the client
@method
@param value - 
@returns 
*/
set_visible(value: boolean): void;
        /**
Updates the css class of RadInputControl
@method
@returns 
*/
updateCssClass(): void;
        /**
Updates the css text of RadInputControl
@method
@param styleCssText - 
@returns 
*/
updateCssText(styleCssText: string): void;
        /**
Updates the display value of RadInputControl
@method
@returns 
*/
updateDisplayValue(): void;
        /**
Adds the handler for the blur event
*/
add_blur(handler: Function): void;
        /**
Adds the handler for the buttonClick event
*/
add_buttonClick(handler: Function): void;
        /**
Adds the handler for the disable event
*/
add_disable(handler: Function): void;
        /**
Adds the handler for the enable event
*/
add_enable(handler: Function): void;
        /**
Adds the handler for the enumerationChanged event
*/
add_enumerationChanged(handler: Function): void;
        /**
Adds the handler for the error event
*/
add_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
add_focus(handler: Function): void;
        /**
Adds the handler for the keyPress event
*/
add_keyPress(handler: Function): void;
        /**
Adds the handler for the load event
*/
add_load(handler: Function): void;
        /**
Adds a handler for the mouseOut event
*/
add_mouseOut(handler: Function): void;
        /**
Adds the handler for the mouseOver event
*/
add_mouseOver(handler: Function): void;
        /**
Adds the handler for the moveDown event
*/
add_moveDown(handler: Function): void;
        /**
Adds the handler for the moveUp event
*/
add_moveUp(handler: Function): void;
        /**
Adds the handler for the valueChanged event
*/
add_valueChanged(handler: Function): void;
        /**
Adds the handler for the valueChanging event
*/
add_valueChanging(handler: Function): void;
        /**
Removes the handler for the blur event
*/
remove_blur(handler: Function): void;
        /**
Removes the handler for the buttonClick event
*/
remove_buttonClick(handler: Function): void;
        /**
Removes the handler for the disable event
*/
remove_disable(handler: Function): void;
        /**
Removes the handler for the enable event
*/
remove_enable(handler: Function): void;
        /**
Removes the handler for the enumerationChanged event
*/
remove_enumerationChanged(handler: Function): void;
        /**
Removes the handler for the error event
*/
remove_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
remove_focus(handler: Function): void;
        /**
Removes the handler for the keyPress event
*/
remove_keyPress(handler: Function): void;
        /**
Removes the handler for the load event
*/
remove_load(handler: Function): void;
        /**
Removes the handler for the mouseOut event
*/
remove_mouseOut(handler: Function): void;
        /**
Removes the handler for the mouseOver event
*/
remove_mouseOver(handler: Function): void;
        /**
Removes the handler for the moveDown event
*/
remove_moveDown(handler: Function): void;
        /**
Removes the handler for the moveUp event
*/
remove_moveUp(handler: Function): void;
        /**
Removes the handler for the valueChanged event
*/
remove_valueChanged(handler: Function): void;
        /**
Removes the handler for the valueChanging event
*/
remove_valueChanging(handler: Function): void;
    }


    class RadNumericTextBoxComponent  extends Sys.Component {
        /**
Returns the invalid style duration of RadNumericTextBoxComponent
@method
@returns 
*/
get_invalidStyleDuration(): number;
        /**

@method
@returns 
*/
get_maxValue(): number;
        /**
Returns the minimum value the user can enter
@method
@returns 
*/
get_minValue(): number;
        /**
Returns the negative css of RadNumericTextBoxComponent
@method
@returns 
*/
get_negativeCss(): number;
        /**
Returns the Number format client object, which you can use to change the way the text box formats its value when it does not have focus
@method
@returns 
*/
get_numberFormat(): Telerik.Web.UI.NumberFormat;
        /**
Sets the invalid style duration of RadNumericTextBoxComponent
@method
@param value - 
@returns 
*/
set_invalidStyleDuration(value: number): void;
        /**

@method
@param value - 
@returns 
*/
set_maxValue(value: number): void;
        /**
Sets the minimum value the user can enter.
@method
@param value - 
@returns 
*/
set_minValue(value: number): void;
        /**
Accepts the negative css of RadNumericTextBoxComponent
@method
@param value - 
@returns 
*/
set_negativeCss(value: number): void;
        /**
Sets the Number format client object, which you can use to change the way the text box formats its value when it does not have focus
@method
@param value - 
@returns 
*/
set_numberFormat(value: Telerik.Web.UI.NumberFormat): void;
    }


    class RadNumericTextBoxExtender   {
        /**
Returns the format display value of RadNumericTextBoxExtender
@method
@param value - 
@returns 
*/
formatDisplayValue(value: Telerik.Web.UI.NumberFormat): void;
        /**
Returns the format edit value of RadNumericTextBoxExtender
@method
@param value - 
@returns 
*/
formatEditValue(value: Telerik.Web.UI.NumberFormat): void;
        /**
Returns the value of the numeric text box
@method
@returns 
*/
get_value(): number;
        /**
Returns true if the value of the numeric text box is a negative number
@method
@returns 
*/
isNegative(): void;
        /**
Returns a Boolean value, indicating whether error is raised
@method
@param args - 
@returns 
*/
raise_error(args: boolean): void;
        /**
Sets the value of the numeric text box
@method
@param value - 
@returns 
*/
set_value(value: number): void;
        /**
Returns the validate input value of RadNumericTextBoxExtender
@method
@param value - 
@returns 
*/
validateInputValue(value: Telerik.Web.UI.NumberFormat): void;
    }


    class RadODataDataSource   {
        /**
Sets filters for the request
@method
@param arrayoffilters - 
@returns 
*/
set_filterExpression(arrayoffilters: any): any;
        /**
Returns sort expression
@method
@returns 
*/
get_sortExpression(): any;
        /**
Sets sort expression
@method
@param arrayofsortexpression - 
@returns 
*/
set_sortExpression(arrayofsortexpression: any): any;
    }


    class RadOrgChart  extends Telerik.Web.UI.RadWebControl {
        /**
Returns whether user is allowed to drag and drop group items.
@method
@returns 
*/
get_allowGroupItemDragging(): boolean;
        /**
Gets a collection with all nodes
@method
@returns 
*/
get_nodes(): any;
        /**
Gets the UL element of the RadOrgChart
@method
@returns 
*/
get_nodeListElement(): any;
        /**
DrillDown on particular Node by hierarchical index(e.g. "1:1:0").
@method
@param hierarchicalIndex - The hierarchical index of the node
@returns 
*/
drillDownOnNode(hierarchicalIndex: HTMLElement): void;
        /**
Gets the root DOM element of the RadOrgChart
@method
@returns 
*/
get_element(): HTMLElement;
    }


    class RadPageView   {
        /**
Unselects the pageview.
@method
@returns 
*/
unselect(): void;
        /**
Gets the DOM element for the pageview.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Gets the URL of the page that is opened in the pageView
@method
@returns The URL of the page that is opened in the pageView
*/
get_contentUrl(): string;
        /**
Gets the ID of the pageview.
@method
@returns 
*/
get_id(): string;
        /**
Selects the pageview.
@method
@returns 
*/
select(): void;
        /**
Hides the pageview.
@method
@returns 
*/
hide(): void;
        /**
Gets the identifier for the default button that is contained in the RadPageView control.
@method
@returns 
*/
get_defaultButton(): string;
        /**
Returns the index of the pageview.
@method
@returns the index of the pageview
*/
get_index(): number;
        /**
Gets the MultiPage containing the pageview.
@method
@returns 
*/
get_multiPage(): Telerik.Web.UI.RadMultiPage;
        /**
Sets a value indicating if the pageview is selected.
@method
@param value - A value indicating if the pageview is selected
@returns 
*/
set_selected(value: boolean): void;
        /**
Sets the identifier for the default button that is contained in the RadPageView control.
@method
@param value - A string value corresponding to the ID for a button control contained in the RadPageView. The default is an empty string
@returns 
*/
set_defaultButton(value: string): void;
        /**
Shows the pageview.
@method
@returns 
*/
show(): void;
        /**
Returns true if the pageview is selected.
@method
@returns 
*/
get_selected(): boolean;
        /**
Sets the URL of the page to open in the pageView
@method
@param value - The URL of the page to open in the pageView
@returns 
*/
set_contentUrl(value: string): void;
    }


    class RadPageViewCollection   {
        /**
Adds the specified pageview to the collection.
@method
@param pageView - The pageview to add.
@returns 
*/
add(pageView: Telerik.Web.UI.RadPageView): void;
        /**
Gets the pageview at the specified index in the collection.
@method
@param index - The index from which to retrieve the pageview
@returns The pageview at the specified index.
*/
getPageView(index: number): Telerik.Web.UI.RadPageView;
        /**
Gets the number of pageviews in the collection.
@method
@returns The number of pageviews in the collection
*/
get_count(): number;
        /**
Inserts the specified pageview at the specified index in the collection.
@method
@param index - The index at which to insert the pageview
@param pageView - The pageview to add.
@returns 
*/
insert(index: number, pageView: Telerik.Web.UI.RadPageView): void;
        /**
Removes the specified pageview to the collection.
@method
@param pageView - The pageview to remove.
@returns 
*/
remove(pageView: Telerik.Web.UI.RadPageView): void;
        /**
Removes the pageview at the specified index from the collection.
@method
@param index - The index from which to remove the pageview
@returns 
*/
removeAt(index: number): void;
    }


    class RadPane  extends Telerik.Web.UI.SplitterPaneBase {
        /**
Collapses the pane in the specified direction
@method
@param direction - The direction
@returns A value
*/
collapse(direction: Telerik.Web.UI.SplitterDirection): boolean;
        /**
Expands the pane in the specified direction
@method
@param direction - The direction
@returns A value
*/
expand(direction: Telerik.Web.UI.SplitterDirection): boolean;
        /**
Returns a reference to the HTML element, which is holding the pane content
@method
@returns The HTML element
*/
getContentElement(): any;
        /**
Returns a reference to the IFRAME element, which is holding the pane content
@method
@returns The IFRAME element
*/
getExtContentElement(): any;
        /**
Returns the height of the pane control, excluding the pane borders
@method
@returns 
*/
getInnerHeight(): number;
        /**
Returns the width of the pane control, excluding the pane borders
@method
@returns 
*/
getInnerWidth(): number;
        /**
Returns the HTML content of the pane control. In case the ContentUrl property of the pane is set, returns an empty string
@method
@returns The HTML content of the pane control
*/
get_content(): string;
        /**
Gets the URL of the page that is opened in the pane
@method
@returns The URL of the page that is opened in the pane
*/
get_contentUrl(): string;
        /**
Returns the index of the pane in the items collection of the splitter control
@method
@returns The index of the pane in the items collection of the splitter control
*/
get_index(): number;
        /**
Returns the index of the pane control in the panes collection of the splitter control
@method
@returns The index of the pane control in the panes collection of the splitter control
*/
get_indexInPanes(): number;
        /**
Returns a value, indicating whether the pane is locked, that is, whether the pane can be resized or collapsed
@method
@returns A value
*/
get_locked(): boolean;
        /**
Returns a reference to the splitter control
@method
@returns A reference to the splitter control
*/
get_parent(): Telerik.Web.UI.RadSplitter;
        /**
Returns a reference to the splitter control
@method
@returns A reference to the splitter control
*/
get_splitter(): Telerik.Web.UI.RadSplitter;
        /**
Returns a value, indicating whether the pane control is showing external content (content specified using the ContentUrl property)
@method
@returns A value
*/
isExternalContent(): boolean;
        /**
Returns a value, indicating whether the pane is locked, that is, whether the pane can be resized or collapsed
@method
@returns A value
*/
isLocked(): boolean;
        /**
Returns a value, indicating whether the pane contains a splitter control with ResizeWithParentPane set to true
@method
@returns A value
*/
isSplitterContainer(): boolean;
        /**
Sets the Locked property of the pane control to true
@method
@returns 
*/
lock(): void;
        /**
Prints the content of the pane
@method
@param arrCssFiles - An array with the paths to the style sheets that contain styles for the printed content. This parameter is used only in case the ContentUrl property of the pane is not set
@returns 
*/
print(arrCssFiles: any): void;
        /**
Resizes the pane control with delta pixels in the specified direction
@method
@param delta - The number of pixels
@param resizeDirection - The direction
@returns 
*/
resize(delta: number, resizeDirection: Telerik.Web.UI.SplitterDirection): void;
        /**
Sets the HTML content of the pane control
@method
@param contentHtml - The HTML content of the pane control
@returns 
*/
set_content(contentHtml: string): void;
        /**
Sets the URL of the page to open in the pane
@method
@param value - The URL of the page to open in the pane
@returns 
*/
set_contentUrl(value: string): void;
        /**
Sets the height in pixels of the control
@method
@param value - The new height in pixels of the control
@returns 
*/
set_height(value: number): void;
        /**
Sets the locked state of the pane - whether the pane can be resized or collapsed
@method
@param value - The new value for the Locked property of the pane control
@returns 
*/
set_locked(value: boolean): void;
        /**
Sets the width in pixels of the control
@method
@param value - The new width in pixels of the control
@returns 
*/
set_width(value: number): void;
        /**
Sets the Locked property of the pane control to false
@method
@returns 
*/
unlock(): void;
    }


    class RadPanelBar  extends Telerik.Web.UI.ControlItemContainer {
        /**
Sets the Expand mode of the RadPanelBar
@method
@param value - Expand mode
@returns 
*/
set_expandMode(value: Telerik.Web.UI.ExpandMode): void;
        /**
Sets the RadPanelBar's root items.
@method
@param value - RadPanelBar
@returns 
*/
set_items(value: Telerik.Web.UI.RadPanelItemCollection): void;
        /**
Returns the selected item if it exists. (It does not have to be a root level item). Null if the panel does not have a selected item.
@method
@returns RadPanelItem
*/
get_selectedItem(): Telerik.Web.UI.RadPanelItem;
        /**
Sets the root level item to be expanded.
@method
@param value - Item value
@returns 
*/
set_expandedItem(value: string): void;
        /**
Gets the value of the collapseDelay property.
@method
@returns The collapseDelay value.
*/
get_collapseDelay(): number;
        /**
Sets a RadPanelItem to be expanded in "SingleExpandedItem" mode.
@method
@param value - Item value
@returns 
*/
set_singleExpandedItem(value: string): void;
        /**
Sets the value of the expandDelay property.
@method
@param value - The expandDelay value.
@returns 
*/
set_expandDelay(value: number): void;
        /**
Gets the allowCollapseAllItems property value.
@method
@returns True if the allowCollapseAllItems is enabled
*/
get_allowCollapseAllItems(): boolean;
        /**
Writes the changes to the listbox that were made since a previous call to trackChanges, so that they are preserved over post-backs.
@method
@returns 
*/
commitChanges(): void;
        /**
Returns the first RadPanelItem whose Text property matches the passed parameter.
@method
@param text - The text to search for.
@returns 
*/
findItemByText(text: string): Telerik.Web.UI.RadPanelItem;
        /**
Returns an array of the RadPanelItem objects for every expanded item in the panel bar (including expanded child items).
@method
@returns 
*/
get_expandedItems(): any;
        /**
Gets if the "MultipleExpandedItems" mode of the RadPanelBar is set.
@method
@returns 
*/
get_multiExpandedItem(): void;
        /**
Returns whether the right-to-left support is enabled
@method
@returns True if the right
*/
get_rightToLeft(): boolean;
        /**
Gets the name of the cookie that stores the control state.
@method
@returns Name of the cookie.
*/
get_cookieName(): string;
        /**
Enables all items in the panel.
@method
@returns 
*/
enable(): void;
        /**
Sets a RadPanelItem to be expanded in "FullExpandedItem" mode.
@method
@param value - Item value
@returns 
*/
set_fullExpandedItem(value: string): void;
        /**
Returns the first RadPanelItem whose NavigateUrl property matches the passed parameter.
@method
@param value - NavigateUrl of the Item
@returns 
*/
findItemByUrl(value: string): Telerik.Web.UI.RadPanelItem;
        /**
Disables RadPanelBar client side events
@method
@returns 
*/
disableEvents(): void;
        /**
Begins tracking changes to the RadPanelBar items. Only changes to the items that occur between a call to trackChanges and commitChanges persist after a postback.
@method
@returns 
*/
trackChanges(): void;
        /**
Gets the DOM element for the list of items in the panel.
@method
@returns The UL element of the RadPanelBar.
*/
get_childListElement(): HTMLElement;
        /**
Sets item data for RadPanelItem.
@method
@param value - Item value
@returns 
*/
set_itemData(value: string): void;
        /**
Enables the RadPanelBar client-side event emitting. Events are enabled by default.
@method
@returns 
*/
enableEvents(): void;
        /**
Sets the last root level item to be expanded.
@method
@param value - Item value
@returns 
*/
set_lastExpandedItem(value: string): void;
        /**
Returns the last expanded item.
@method
@returns RadPanelItem
*/
get_lastExpandedItem(): Telerik.Web.UI.RadPanelItem;
        /**
Returns the first RadPanelItem object whose Value property is equal to the passed parameter.
@method
@param value - The value to search for.
@returns Returns the first RadPanelItem whose Value property matches the passed parameter.
*/
findItemByValue(value: string): Telerik.Web.UI.RadPanelItem;
        /**
Returns an array containing the selected items in the panel. Because the panel bar does not allow more than one item to be selected, the array always has 0 or 1 elements.
@method
@returns Array of RadPanelItems
*/
get_selectedItems(): any;
        /**
Sets the selected item
@method
@param value - Item value
@returns 
*/
set_selectedItem(value: string): void;
        /**
Returns the focused root level item. Null if no root level item has focus.
@method
@returns 
*/
get_focusedItem(): Telerik.Web.UI.RadPanelItem;
        /**
Gets a linear collection of all items. This includes all root and child items in the panel.
@method
@returns 
*/
get_allItems(): any;
        /**
Gets if the "SingleExpandedItem" mode of the RadPanelBar is set.
@method
@returns 
*/
get_singleExpandedItem(): void;
        /**
Sets the allowCollapseAllItems property value.
@method
@param value - The value of the allowCollapseAllItems property.
@returns 
*/
set_allowCollapseAllItems(value: boolean): void;
        /**
Returns the collection of custom attributes for the control.
@method
@returns A collection of custom attributes.
*/
get_attributes(): Telerik.Web.UI.AttributeCollection;
        /**
Gets the value of persistStateInCookie property of the control.
@method
@returns True if the persistStateInCookie is enabled
*/
get_persistStateInCookie(): boolean;
        /**
Saves the client state to the client state hidden field
@method
@returns 
*/
saveClientState(): void;
        /**
Enables or disables the control.
@method
@param value - True if the control is enabled
@returns 
*/
set_enabled(value: boolean): void;
        /**
Returns a value indicating if the control is enabled.
@method
@returns True if the control is enabled
*/
get_enabled(): boolean;
        /**
Sets  a RadPanelItem to be expanded in "MultipleExpandedItems" mode.
@method
@param value - Item value
@returns 
*/
set_multiExpandedItem(value: string): void;
        /**
Sets the focus to explicit RadPanelItem.
@method
@param value - Item value
@returns 
*/
set_focusedItem(value: string): void;
        /**
Gets the value of the expandDelay property.
@method
@returns The expandDelay value.
*/
get_expandDelay(): number;
        /**
Disables all items in the panel. Clicking on any item has no effect, child items cannot be opened.
@method
@returns 
*/
disable(): void;
        /**
Returns the first RadPanelItem object whose NavigateUrl property is equal to the passed parameter. Note that the parameter should end with "/" like: var item = sender.findItemByAbsoluteUrl("http://www.test.com/");
@method
@param value - NavigateUrl of the Item
@returns Returns the first RadPanelItem whose NavigateUrl property matches the passed parameter.
*/
findItemByAbsoluteUrl(value: string): Telerik.Web.UI.RadPanelItem;
        /**
Returns the ExpandMode of the RadPanelBar
@method
@returns 
*/
get_expandMode(): Telerik.Web.UI.ExpandMode;
        /**
Returns the collection of root level items.
@method
@returns 
*/
get_items(): Telerik.Web.UI.RadPanelItemCollection;
        /**
Refreshes the RadPanelBar UI.
@method
@returns 
*/
repaint(): void;
        /**
Gets the DOM element for the panel.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Sets the value of the collapseDelay property.
@method
@param value - The collapseDelay value.
@returns 
*/
set_collapseDelay(value: number): void;
        /**
Sets the value of the persistStateInCookie property of the control.
@method
@param value - The value of the persistStateInCookie property.
@returns 
*/
set_persistStateInCookie(value: boolean): void;
        /**
Returns the first RadPanelItem object with a custom attribute of the specified name that has the specified value.
@method
@param attributeName - attributeName
@param attributeValue - attributeValue
@returns 
*/
findItemByAttribute(attributeName: string, attributeValue: string): Telerik.Web.UI.RadPanelItem;
        /**
Sets the name of the cookie to be used for storing the control state.
@method
@param value - Name of the cookie.
@returns 
*/
set_cookieName(value: string): void;
        /**
Returns true if a RadPanelItem is set to be expanded in "FullExpandedItem" mode, false otherwise.
@method
@returns 
*/
get_fullExpandedItem(): void;
        /**
Returns the last root level item that was expanded. Null if no root level items are expanded.
@method
@returns RadPanelItem
*/
get_expandedItem(): Telerik.Web.UI.RadPanelItem;
        /**
Gets item data for RadPanelItem.
@method
@returns 
*/
get_itemData(): void;
        /**
Client-Side Events
*/
add_event(handler: Function): void;
    }


    class RadPanelItem  extends Telerik.Web.UI.ControlItem {
        /**
Returns true if the items is visible or false if the item is invisible.
@method
@returns 
*/
get_visible(): boolean;
        /**
Finds a RadPanelItem by value and sets it to be a separator.
@method
@param value - Finds a RadPanelItem by value and sets it to be a separator.
@returns 
*/
set_isSeparator(value: boolean): void;
        /**
Gets the DOM element of the item text (SPAN).
@method
@returns 
*/
get_textElement(): HTMLElement;
        /**
Sets the CSS class for the item when it is expanded.
@method
@param value - The CSS class for the item when it is expanded.
@returns 
*/
set_expandedCssClass(value: string): void;
        /**
Returns a boolean indicating whether the item has focus.
@method
@returns 
*/
get_focused(): void;
        /**
Sets the root DOM element of the item(LI).
@method
@param value - HTML Element
@returns 
*/
set_element(value: HTMLElement): void;
        /**
Moves focus to the previous item.
@method
@returns 
*/
focusPreviousItem(): void;
        /**
Returns a value indicating if the item has content template.
@method
@returns True if the item has content template
*/
get_hasContentTemplate(): boolean;
        /**
Gets the URL of the image displayed when the mouse if over the item.
@method
@returns 
*/
get_hoveredImageUrl(): string;
        /**
Sets the enabled state of the item.
@method
@param value - The enabled state of the item.
@returns 
*/
set_enabled(value: boolean): void;
        /**
Gets the CSS class for the item when it has focus.
@method
@returns 
*/
get_focusedCssClass(): string;
        /**
Sets a boolean indicating whether the item has focus.
@method
@param Boolean - 
@returns 
*/
set_focused(Boolean: boolean): any;
        /**
Gets the CssClass property of the item.
@method
@returns 
*/
get_cssClass(): string;
        /**
Enables the item if it is disabled.
@method
@returns 
*/
enable(): void;
        /**
Removes focus from the item.
@method
@returns 
*/
blur(): void;
        /**
Sets the URL of the image displayed when item is expanded.
@method
@param value - URL of the image displayed when item is expanded.
@returns 
*/
set_expandedImageUrl(value: string): void;
        /**
Returns the URL of the Web page the panel item launches.
@method
@returns 
*/
get_navigateUrl(): string;
        /**
Returns the value of "target" attribute of the anchor DOM element of the item (A).
@method
@returns 
*/
get_target(): string;
        /**
Returns a value indicating if the item should collapse.
@method
@returns True if the item is should collapse
*/
get_preventCollapse(): boolean;
        /**
Returns the postback value of a RadPanelItem.
@method
@returns 
*/
get_postBack(): boolean;
        /**
Sets the URL of the image displayed when the mouse if over the item.
@method
@param value - URL of the image displayed when the mouse if over the item.
@returns 
*/
set_hoveredImageUrl(value: string): void;
        /**
Sets lastExpandedItem property.
@method
@param value - Finds a RadPanelItem by value and sets it to be a expanded.
@returns 
*/
set_lastExpandedItem(value: boolean): void;
        /**
Returns a value indicating if the item is templated.
@method
@returns True if the item is templated
*/
get_templated(): boolean;
        /**
Sets the focused RadPanelItem
@method
@param value - Value of the item.
@returns 
*/
set_focusedItem(value: string): void;
        /**
Returns true if the item index is first, otherwise returns false.
@method
@returns Indicates whether the item is first.
*/
get_isFirst(): boolean;
        /**
Sets selected item.
@method
@param value - Expanded item.
@returns 
*/
set_selectedItem(value: Telerik.Web.UI.RadPanelItem): void;
        /**
Gets the URL of the image.
@method
@returns 
*/
get_imageUrl(): string;
        /**
Performs an item click. If a the ItemClick server event is wired, it will be fired.
@method
@returns 
*/
click(): void;
        /**
Sets the expanded item
@method
@param value - Expanded item.
@returns 
*/
set_expandedItem(value: Telerik.Web.UI.RadPanelItem): void;
        /**
Returns true if both the item and the panelbar are enabled. If one of them is disabled will return false.
@method
@returns 
*/
get_enabled(): boolean;
        /**
Sets the CssClass property for the item.
@method
@param value - The CssClass property for the item.
@returns 
*/
set_cssClass(value: string): void;
        /**
Gets the URL of the image displayed when item is expanded.
@method
@returns 
*/
get_expandedImageUrl(): string;
        /**
De-selects the item.
@method
@returns 
*/
unSelect(): void;
        /**
Returns the Value property of the item.
@method
@returns 
*/
get_value(): string;
        /**
Returns the next sibling or null if this is the last item at its level.
@method
@returns 
*/
get_nextSibling(): Telerik.Web.UI.RadPanelItem;
        /**
Gets the CSS class for the item when it is clicked.
@method
@returns 
*/
get_clickedCssClass(): string;
        /**
Returns the previous sibling or null if this is the first item at its level.
@method
@returns 
*/
get_previousSibling(): Telerik.Web.UI.RadPanelItem;
        /**
Collapses the item if it is expanded.
@method
@returns 
*/
collapse(): void;
        /**
Expands /Collapses the item.
@method
@param value - Expands
@returns 
*/
set_expanded(value: boolean): void;
        /**
Sets the CSS class for the item when it is disabled.
@method
@param value - The CSS class for the item when it is disabled.
@returns 
*/
set_disabledCssClass(value: string): void;
        /**
Gets the root DOM element of the item (LI).
@method
@returns HTML Element
*/
get_element(): HTMLElement;
        /**
Expands the item and reveals its children if any.
@method
@returns 
*/
expand(): void;
        /**
Moves focus to the next item.
@method
@returns 
*/
focusNextItem(): void;
        /**
Gets the zero-based index of the item inside its parent items collection.
@method
@returns 
*/
get_index(): number;
        /**
Sets the path to an image to display for the item when it is disabled.
@method
@param value - Value of the item.
@returns 
*/
set_disabledImageUrl(value: string): void;
        /**
Returns the path to an image to display for the item when it is disabled.
@method
@returns Gets the path to an image to display for the item when it is disabled.
*/
get_disabledImageUrl(): string;
        /**
Returns the child item that was most recently expanded. Null if no child item is expanded.
@method
@returns 
*/
get_expandedItem(): Telerik.Web.UI.RadPanelItem;
        /**
Gets the image DOM element of the item. If the server side ImageUrl property is not set, returns null.
@method
@returns 
*/
get_imageElement(): HTMLElement;
        /**
Makes the item visible.
@method
@returns 
*/
show(): void;
        /**
Moves focus to the first child of the item.
@method
@returns 
*/
focusFirstChild(): void;
        /**
Gets the selected item.
@method
@returns 
*/
get_selectedItem(): Telerik.Web.UI.RadPanelItem;
        /**
Returns whether the item is clicked.
@method
@returns 
*/
get_clicked(): boolean;
        /**
Returns the collection of custom attributes for the item.
@method
@returns 
*/
get_attributes(): Telerik.Web.UI.AttributeCollection;
        /**
Defines whether the item should navigate after click.
@method
@returns 
*/
get_navigateAfterClick(): boolean;
        /**
Sets if the item should collapse.
@method
@param value - False if the panel item should collapse otherwise true.
@returns 
*/
set_preventCollapse(value: boolean): void;
        /**
Sets the URL of the Web page the panel item launches.
@method
@param value - URL of the Web page the panel item launches.
@returns 
*/
set_navigateUrl(value: string): void;
        /**
Shows/Hides a RadPanelItem
@method
@param value - Shows
@returns 
*/
set_visible(value: boolean): void;
        /**
Sets the URL of the image displayed when item is selected.
@method
@param value - URL of the image displayed when item is selected.
@returns 
*/
set_selectedImageUrl(value: string): void;
        /**

@method
@returns 
*/
get_expandable(): void;
        /**
Returns whether the item is selected.
@method
@returns 
*/
get_selected(): boolean;
        /**
Gets the anchor DOM element of the item (A).
@method
@returns 
*/
get_linkElement(): HTMLElement;
        /**
Moves focus to the last child of the item.
@method
@returns 
*/
focusLastChild(): any;
        /**
Returns the client-side object of the Control with the specified ID nested in the Item's Template. The ID passed as an argument to the function MUST be the ID attribute of the nested Control.
@method
@param id - id
@returns Object
*/
findControl(id: string): any;
        /**
Gets the focused child item. Null if no child item is focused.
@method
@returns 
*/
get_focusedItem(): Telerik.Web.UI.RadPanelItem;
        /**
Sets the CSS class for the item when it is clicked.
@method
@param value - The CSS class for the item when it is clicked.
@returns 
*/
set_clickedCssClass(value: string): void;
        /**
Returns true the item is a separator (sever-side property IsSeparator = true)
@method
@returns 
*/
get_isSeparator(): boolean;
        /**
Sets the Value property of the item.
@method
@param value - Value of the item.
@returns 
*/
set_value(value: string): void;
        /**
Gets the header DOM element for a RadPanelItem.
@method
@returns 
*/
get_headerElement(): HTMLElement;
        /**
Gets the DOM element of the list of child items (UL).
@method
@returns 
*/
get_childListElement(): HTMLElement;
        /**
Returns the postBack value of a RadPanelItem.
@method
@param value - Sets the postback value of a RadPanelItem.
@returns 
*/
set_postBack(value: boolean): void;
        /**
Sets the URL of the image.
@method
@param value - URL of the image
@returns 
*/
set_imageUrl(value: string): void;
        /**
Returns true if the item index is last, otherwise returns false.
@method
@returns Returns true if the RadPanelItem is last
*/
get_isLast(): boolean;
        /**
Gets the CSS class for the item when it is selected.
@method
@returns 
*/
get_selectedCssClass(): string;
        /**
Returns the text of the item.
@method
@returns 
*/
get_text(): string;
        /**
Gets the CSS class for the item when it is expanded.
@method
@returns 
*/
get_expandedCssClass(): string;
        /**
Sets the value of "target" attribute of the anchor DOM element of the item (A).
@method
@param value - The
@returns 
*/
set_target(value: string): void;
        /**
Selects the item.
@method
@returns 
*/
select(): void;
        /**
Makes the item invisible.
@method
@returns 
*/
hide(): void;
        /**
Returns the RadPanelItem as a JSON serialized string.
@method
@returns JSON serialized string.
*/
toJsonString(): string;
        /**
Gets the CSS class for the item when it is disabled.
@method
@returns 
*/
get_disabledCssClass(): string;
        /**
Sets the text of the item.
@method
@param text - Text of the item.
@returns 
*/
set_text(text: string): void;
        /**
Returns an instance of the panel bar that contains the item.
@method
@returns 
*/
get_panelBar(): Telerik.Web.UI.RadPanelBar;
        /**
Gets the expand handle DOM element of a RadPanelItem.
@method
@returns 
*/
get_expandHandleElement(): HTMLElement;
        /**
Moves focus to the item.
@method
@returns 
*/
focus(): void;
        /**
Gets the expanded/collapsed state of a panel bar item
@method
@returns 
*/
get_expanded(): boolean;
        /**
Sets the CSS class for the item when it has focus.
@method
@param value - The CSS class for the item when it has focus.
@returns 
*/
set_focusedCssClass(value: string): void;
        /**
Disables the item.
@method
@returns 
*/
disable(): void;
        /**
Returns the child items of the current item.
@method
@returns 
*/
get_items(): Telerik.Web.UI.RadPanelItemCollection;
        /**
Returns true if both the item and the panelbar are enabled. If one of them is disabled will return false.
@method
@returns 
*/
get_isEnabled(): boolean;
        /**
Sets the CSS class for the item when it is selected.
@method
@param value - The CSS class for the item when it is selected.
@returns 
*/
set_selectedCssClass(value: string): void;
        /**
Gets the level of the item. Root level items are level 0.
@method
@returns Returns the level of the item as number.
*/
get_level(): number;
        /**
Selects or de-selects the item.
@method
@param value - Selects of de
@returns 
*/
set_selected(value: boolean): void;
        /**
Gets the URL of the image displayed when item is selected.
@method
@returns 
*/
get_selectedImageUrl(): string;
    }


    class RadPanelItemCollection  extends Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.RadPanelItem> {
        /**
Clears the Items collection of all the child items it contains.
@method
@returns 
*/
clear(): void;
        /**
Iterates through the items collection.
@method
@param lambda - The function to execute on each iteration.
@returns 
*/
forEach(lambda: Function): void;
        /**
Returns the number of the items in the collection.
@method
@returns 
*/
get_count(): number;
        /**
Removes the item at the specified index.
@method
@param index - index
@returns 
*/
removeAt(index: number): void;
    }


    class RadPivotGrid  extends Telerik.Web.UI.RadWebControl {
        /**
Expands all column groups at the specified level.
@method
@param level - The level which to expand.
@returns 
*/
expandColumnGroupsAtLevel(level: number): void;
        /**
Gets the RadWindow client-side object for the RadPivotGrid Filtering window dialog.
@method
@returns Returns the RadWindow client
*/
get_filterDialog(): Telerik.Web.UI.RadWindow;
        /**
Performs postback and calls Rebind on the RadPivotGrid.
@method
@returns 
*/
rebind(): void;
        /**
Gets the RadWindow client-side object for the RadPivotGrid FieldsWindow.
@method
@returns The RadWindow client
*/
get_fieldsWindow(): Telerik.Web.UI.RadWindow;
        /**
Executes a page command depending on the provided commandName value. The supported values are: "Next", "Prev", "First", "Last".
@method
@param commandName - The page command name which will be executed.
@returns 
*/
page(commandName: string): void;
        /**
Collapses all column groups at the specified level.
@method
@param level - The level which to collapse.
@returns 
*/
collapseColumnGroupsAtLevel(level: number): void;
        /**
Returns the DIV element which holds the horizontal scrollbar of the control.
@method
@returns 
*/
get_hzScrollDiv(): void;
        /**
A method which hides the field it is called upon.
@method
@returns 
*/
show(): void;
        /**
Returns the DIV element which holds the vertical scrollbar of the control.
@method
@returns 
*/
get_verticalScrollDiv(): void;
        /**
Gets the RadWindow client-side object for the RadPivotGrid field settings window.
@method
@returns Returns the RadWindow client
*/
get_fieldSettingsWindow(): Telerik.Web.UI.RadWindow;
        /**
A method which hides the field it is called upon.
@method
@returns 
*/
hide(): void;
        /**
Gets a value indicating whether toolTips for PivotGrid are enable or not (default is false).
@method
@returns true if the toolTips are enabled
*/
get_enableToolTips(): boolean;
        /**
Gets the zone element where all not hidden PivotGridColumnField's are placed.
@method
@returns The the zone element where all not hidden PivotGridColumnField
*/
get_columnZone(): HTMLElement;
        /**
Gets the RadWindow client-side object for the RadPivotGrid Filtering window.
@method
@returns Returns the RadWindow client
*/
get_filterWindow(): Telerik.Web.UI.RadWindow;
        /**
Gets the object holding all properties associated with the field settings window.
@method
@returns Returns the object holding all properties associated with the field settings window.
*/
get_fieldSettings(): Telerik.Web.UI.PivotGridFieldSettings;
        /**
Performs postback and shows the provided field.
@method
@param fieldOrUniqueName - The field unique name
@returns 
*/
getFieldByUniqueName(fieldOrUniqueName: string): Telerik.Web.UI.PivotGridField;
        /**
EnableZoneContextMenu
@method
@returns 
*/
get_zoneContextMenu(): void;
        /**
Returns a number representing the count of the column group descriptions.
@method
@returns 
*/
get_columnGroupDescriptionsCount(): void;
        /**
Gets the maximum number of items that would appear in a page, when paging is enabled by AllowPaging property. Default value is 10.
@method
@returns The maximum number of items that could appear in a page.
*/
get_pageSize(): number;
        /**
Expands all row groups at the zero level.
@method
@returns 
*/
expandAllRowGroups(): void;
        /**
Method which triggers specific command for the pivot grid when executed. The method is called for the RadPivotGrid client instance and its arguments depend on the command which will be processed.
@method
@param comandName - The name of the command.
@param commandArgument - The argument of the command otherwise empty string.
@returns 
*/
fireCommand(comandName: string, commandArgument: string): void;
        /**
Sets the maximum number of items that would appear in a page, when paging is enabled by AllowPaging property.
@method
@returns 
*/
set_pageSize(): void;
        /**
Gets a value indicating the index of the currently active page in case paging is enabled.
@method
@returns The index of the current page.
*/
get_currentPageIndex(): number;
        /**
The UniqueID of the RadPivotGrid instance.
@method
@returns Returns the UniqueID of the RadPivotGrid instance.
*/
get_uniqueID(): string;
        /**
Returns a numeric value which corresponds to a member of the Telerik.Web.UI.PivotGridFieldZoneType enumeration
@method
@returns 
*/
get_zoneType(): void;
        /**
Gets the number of pages required to display the records of the data source in the RadPivotGrid control.
@method
@returns The number of pages required to display the records of the data source.
*/
get_pageCount(): number;
        /**
Collapses all column groups at the zero level.
@method
@returns 
*/
collapseAllColumnGroups(): void;
        /**
Gets the PivotGridConfigurationPanel client-side object for the RadPivotGrid.
@method
@returns The PivotGridConfigurationPanel client
*/
get_configurationPanel(): Telerik.Web.UI.PivotGridConfigurationPanel;
        /**
Expands all row groups at the specified level.
@method
@param level - The level which to expand.
@returns 
*/
expandRowGroupsAtLevel(level: number): void;
        /**
Gets the zone element where all not hidden PivotGridRowField's are placed.
@method
@returns The the zone element where all not hidden PivotGridRowField
*/
get_rowZone(): HTMLElement;
        /**
A property which gets a reference to the owner RadPivotGrid object.
@method
@returns 
*/
get_owner(): void;
        /**
Gets the RadToolTipManager client-side object for the PivotGridToolTipManager.
@method
@returns The RadToolTipManager client
*/
get_toolTipManager(): Telerik.Web.UI.RadToolTipManager;
        /**
The pivot table data table element.
@method
@returns The pivot table data table element.
*/
get_dataTable(): HTMLElement;
        /**
Expands all column groups at the zero level.
@method
@returns 
*/
expandAllColumnGroups(): void;
        /**
Collapses all row groups at the specified level.
@method
@param level - The level which to collapse.
@returns 
*/
collapseRowGroupsAtLevel(level: number): void;
        /**
Gets the zone element where all not hidden PivotGridAggregateField's are placed.
@method
@returns The the zone element where all not hidden PivotGridAggregateField
*/
get_aggregateZone(): HTMLElement;
        /**
Gets the RadMenu client-side object for the RadPivotGrid ContextMenu.
@method
@returns The RadMenu client
*/
get_contextMenu(): Telerik.Web.UI.RadMenu;
        /**
A property which returns the unique name of the field.
@method
@returns 
*/
get_uniqueName(): void;
        /**
Sets a value indicating the index of the currently active page in case paging is enabled.
@method
@returns 
*/
set_currentPageIndex(): void;
        /**
The actual scoll height of the RadPivotGrid client-side element.
@method
@returns Returns the actual scoll height of the RadPivotGrid client
*/
get_scrollHeight(): number;
        /**
The row header table element.
@method
@returns Returns the row header table element.
*/
get_rowHeaderTable(): HTMLElement;
        /**
A property which returns the zone index of the field.
@method
@returns 
*/
get_zoneIndex(): void;
        /**
Sorts the field with optionally provided order.
@method
@param fieldOrUniqueName - The PivotGridField.UniqueName value or the Telerik.Web.UI.PivotGridField client
@param order - The order that the field will be sorted. The parameter is optional and if not passed the field will swap its order.
@returns 
*/
sort(fieldOrUniqueName: string, order: string): void;
        /**
Performs postback and hides the provided field.
@method
@param fieldOrUniqueName - The field unique name
@returns 
*/
hideField(fieldOrUniqueName: string): void;
        /**
Performs postback and shows the provided field.
@method
@param fieldOrUniqueName - The field unique name
@returns 
*/
showField(fieldOrUniqueName: string): void;
        /**
Gets a value indicating whether WAI-ARIA for RadPivotGrid is enabled or not (default is false).
@method
@returns true if the WAI
*/
get_enableAriaSupport(): boolean;
        /**
Gets the zone element where all not hidden PivotGridReportFilterField's are placed.
@method
@returns The the zone element where all not hidden PivotGridReportFilterField
*/
get_filterZone(): HTMLElement;
        /**
Collapses all row groups at the zero level.
@method
@returns 
*/
collapseAllRowGroups(): void;
        /**
Redraws the client side element on the client.
@method
@returns 
*/
repaint(): void;
        /**
Gets the collection of Telerik.Web.UI.PivotGridField items which are part of the RadPivotGrid.
@method
@returns The collection of Telerik.Web.UI.PivotGridField items which are part of the RadPivotGrid.
*/
get_fields(): any;
        /**
The column header table element.
@method
@returns Returns the column header table element.
*/
get_columnHeaderTable(): HTMLElement;
        /**
The RadPivotGrid client settings for the current instance.
@method
@returns Returns the RadPivotGrid client settings for the current instance.
*/
get_clientSettings(): any;
        /**
Tries to reorder the specified field with new ZoneType and/or new ZoneIndex.
@method
@param fieldOrUniqueName - The field unique name
@param zoneType - The new ZoneType for the field
@param zoneIndex - The new ZoneIndex for the field
@returns If the reorder happened or not which could happen if the zoneType and zoneIndex are the same
*/
tryReorderField(fieldOrUniqueName: string, zoneType: Telerik.Web.UI.PivotGridFieldZoneType, zoneIndex: number): boolean;
        /**
Telerik.Web.UI.PivotGridFieldZoneType
@method
@returns 
*/
tryReorder(): void;
        /**
This event will be raised when client command is executed in RadPivotGrid. The command can be canceled.
*/
add_command(handler: Function): void;
        /**
This event is fired when the RadPivotGrid client component is about to be disposed.
*/
add_pivotGridDestroying(handler: Function): void;
        /**
This event is fired when the RadPivotGrid client component is initialized.
*/
add_pivotGridCreated(handler: Function): void;
        /**
This event is fired when the RadPivotGrid client component is initializing.
*/
add_pivotGridCreating(handler: Function): void;
        /**
This event is raised immediately before a tooltip is shown on the client. Cannot be canceled.
*/
add_toolTipShow(handler: Function): void;
    }


    class RadProgressArea  extends Telerik.Web.UI.RadWebControl {
        /**
Cancel the initialization of the next requests.
@method
@returns 
*/
cancelRequest(): void;
        /**
Updates the text value of the HTML element passed as the first parameter to the value
passed as the second parameter.
This method is intended for updating custom elements in a progress template from an
OnClientProgressUpdating event handler.
@method
@param HTMLelement - 
@param string - 
@returns 
*/
updateTextIndicator(HTMLelement: any, string: any): any;
        /**
Updates the height of the progress bar element passed as the first parameter to represent the
@method
@param HTMLelement - 
@param integer - 
@returns 
*/
updateVerticalProgressBar(HTMLelement: any, integer: any): any;
        /**
Updates the width of the progress bar element passed as the first parameter to represent the
@method
@param HTMLelement - 
@param integer - 
@returns 
*/
updateHorizontalProgressBar(HTMLelement: any, integer: any): any;
        /**
Returns the DOM element for the RadProgressArea control.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Updates the progress area with the pass information.
@method
@returns 
*/
update(): void;
        /**
Shows the progress area.
@method
@returns 
*/
show(): void;
        /**
Hides the progress area.
@method
@returns 
*/
hide(): void;
    }


    class RadProgressBar   {
        /**
Returns the animation settings of the progress bar. They are presented with an object literal with the following fields:
@method
@returns 
*/
get_animationSettings(): any;
        /**
Telerik.Web.UI.ProgressBarType
@method
@returns 
*/
get_barType(): Telerik.Web.UI.ProgressBarType;
        /**
BarType
@method
@returns 
*/
get_chunksCount(): number;
        /**
Returns the enabled state of the progress bar.
@method
@returns 
*/
get_enabled(): boolean;
        /**
Returns the label text of the progress bar.
@method
@returns 
*/
get_label(): string;
        /**
Returns the maximum value of the progress bar.
@method
@returns 
*/
get_maxValue(): any;
        /**
Returns the minimum value of the progress bar.
@method
@returns 
*/
get_minValue(): any;
        /**
Telerik.Web.UI.ProgressBarOrientation
@method
@returns 
*/
get_orientation(): Telerik.Web.UI.ProgressBarOrientation;
        /**
Returns the progress wrapper DOM element.
@method
@returns 
*/
get_progressWrapper(): any;
        /**
Indicates whether the direction of the progress bar is reversed.
@method
@returns 
*/
get_reversed(): boolean;
        /**
Returns the visible state of the label of the progress bar.
@method
@returns 
*/
get_showLabel(): boolean;
        /**
Returns the current value of the progress bar.
@method
@returns 
*/
get_value(): any;
        /**
Returns the completed state of the progress bar.
@method
@returns 
*/
isCompleted(): boolean;
        /**
Sets the animation settings of the progress bar. They are presented with an object literal with the following fields:
@method
@param ObjectLiteral - 
@returns 
*/
set_animationSettings(ObjectLiteral: any): any;
        /**
Sets the enabled state of the progress bar.
@method
@param Boolean - 
@returns 
*/
set_enabled(Boolean: boolean): any;
        /**
Sets the label text of the progress bar.
@method
@param String - 
@returns 
*/
set_label(String: string): any;
        /**
Sets the visible state of the label of the progress bar.
@method
@param Boolean - 
@returns 
*/
set_showLabel(Boolean: boolean): any;
        /**
Sets the current value of the progress bar.
@method
@param Number - 
@returns 
*/
set_value(Number: any): any;
    }


    class RadProgressManager   {
    }


    class RadRadialGauge  extends Telerik.Web.UI.RadGaugeControl {
        /**
Gets the height of the gauge
@method
@returns 
*/
get_height(): number;
        /**
Gets the value of the gauge
@method
@returns 
*/
get_value(): number;
        /**
Gets the width of the gauge
@method
@returns 
*/
get_width(): number;
        /**
Repaints the gauge
@method
@returns 
*/
repaint(): void;
        /**
Sets new height to the gauge
@method
@param value - 
@returns 
*/
set_height(value: number): void;
        /**
Sets a new value to the gauge
@method
@param value - 
@returns 
*/
set_value(value: number): void;
        /**
Sets new width to the gauge
@method
@param value - 
@returns 
*/
set_width(value: number): void;
    }


    class RadRating  extends Telerik.Web.UI.RadWebControl {
        /**
Gets the current value of the rating control
@method
@returns The current value of the rating control
*/
get_value(): number;
        /**
Returns a value, indicating whether the direction of the rating control is reversed
@method
@returns A value
*/
get_isDirectionReversed(): boolean;
        /**
Sets the current value of the rating control
@method
@param value - The new value for the rating control
@returns 
*/
set_value(value: number): void;
        /**
Sets whether the slider is enabled
@method
@param value - The new value for the Enabled property
@returns 
*/
set_enabled(value: boolean): void;
        /**
Telerik.Web.UI.RatingSelectionMode
@method
@returns 
*/
set_selectionMode(): void;
        /**
Repaints the rating control and forces it to recalculate the size of its elements. Use this method when the control is in an initially hidden element
@method
@returns 
*/
repaint(): void;
        /**
Sets a value, indicating whether the rating control is in read-only mode
@method
@param value - The new value for the ReadOnly property
@returns 
*/
set_readOnly(value: boolean): void;
        /**
Gets the selection mode of the rating control
@method
@returns The selection mode of the rating control
*/
get_selectionMode(): Telerik.Web.UI.RatingSelectionMode;
        /**
Gets the rate precision of the rating control
@method
@returns The rate precision of the rating control
*/
get_precision(): Telerik.Web.UI.RatingPrecision;
        /**
Gets the number of items (stars) in the rating control
@method
@returns The number of items
*/
get_itemCount(): number;
        /**
Returns a value, indicating whether the rating control will display a browser toolip for its values
@method
@returns A value
*/
get_enableToolTips(): boolean;
        /**
Returns a value, indicating whether the rating control is in read-only mode
@method
@returns A value
*/
get_readOnly(): boolean;
        /**
Gets the orientation of the rating control
@method
@returns The orientation of the rating control
*/
get_orientation(): Telerik.Web.UI.Orientation;
        /**
Returns a value, indicating whether the rating control is enabled
@method
@returns The value of the Enabled property
*/
get_enabled(): boolean;
        /**
Telerik.Web.UI.RatingPrecision
@method
@returns 
*/
set_precision(): void;
        /**
Array
@method
@returns 
*/
get_itemData(): void;
        /**
Adds a handler for the rating event
*/
add_rating(handler: Function): void;
        /**
Adds a handler for the rated event
*/
add_rated(handler: Function): void;
        /**
Removes a handler for the load event
*/
remove_load(handler: Function): void;
        /**
Adds a handler for the load event
*/
add_load(handler: Function): void;
        /**
Removes a handler for the rating event
*/
remove_rating(handler: Function): void;
        /**
Removes a handler for the rated event
*/
remove_rated(handler: Function): void;
    }


    class RadRegExpTextBoxComponent  extends Sys.Component {
        /**
Returns a Boolean value indicating whether the corresponding textboxes are required to have some values entered, or may be empty
@method
@returns 
*/
get_isRequiredFields(): boolean;
        /**
Gets regular expression, representing the matching criteria
@method
@returns 
*/
get_validationExpression(): string;
        /**
Returns true if the value of the text box is valid
@method
@param inputId - 
@returns 
*/
isValid(inputId: boolean): void;
        /**
Accepts a Boolean value indicating whether the corresponding textboxes are required to have some values entered, or may be empty
@method
@param value - 
@returns 
*/
set_isRequiredFields(value: boolean): void;
        /**
Sets regular expression, representing the matching criteria
@method
@param value - 
@returns 
*/
set_validationExpression(value: string): void;
    }


    class RadRegExpTextBoxExtender   {
        /**
Accepts the regular expression of RadRegExpTextBoxExtender
@method
@param value - 
@returns 
*/
acceptRegExp(value: string): void;
        /**
Returns true if the value of the text box is valid
@method
@returns 
*/
isValid(): void;
        /**
Validates the input value of RadRegExpTextBoxExtender
@method
@param value - 
@returns 
*/
validateInputValue(value: number): void;
    }


    class RadRibbonBar  extends Telerik.Web.UI.RadWebControl {
        /**
Sets state of the RibbonBar to minimized/maximized depending on the passed parameter
@method
@param value - Bool value indicating whether the RibbonBar is minimized
@returns 
*/
set_minimized(value: boolean): void;
        /**
Returns the url of the default disabled image.
@method
@param string - 
@returns 
*/
get_defaultDesabledImageUrl(string: any): any;
        /**
Gets the index of the selected RibbonBarTab
@method
@returns The index of the selected RibbonBarTab.
*/
get_selectedTabIndex(): number;
        /**
Sets the default disabled image.
@method
@returns 
*/
set_defaultDesabledImageUrl(): any;
        /**
Returns the first RibbonBarGroup object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarGroup whose Value property matches the passed parameter
*/
findGroupByValue(value: string): Telerik.Web.UI.RibbonBarGroup;
        /**
Returns whether the RibbonBar is minimized(collapsed)
@method
@returns Value indicating whether the RibbonBar is minimized
*/
get_minimized(): boolean;
        /**
Selects the RibbonBarTab at the specified index
@method
@param tabIndex - The index of the RibbonBarTab to be selected
@returns 
*/
set_selectedTabIndex(tabIndex: number): void;
        /**
Maximizes(expands) the RibbonBar (equal to set_minimized(false))
@method
@returns 
*/
maximize(): void;
        /**
Returns the RibbonBarTab object whose DOM element is equal to or a parent of the passed parameter.
@method
@param element - The DOM element to search for
@returns Returns the RibbonBarTab object whose DOM element is equal to or a parent of the passed parameter.
*/
findTabByDomElement(element: HTMLElement): Telerik.Web.UI.RibbonBarTab;
        /**
Saves the client state to the client state hidden field
@method
@returns 
*/
saveClientState(): void;
        /**
ApplicationMenu
@method
@returns 
*/
get_applicationMenuDropDpwn(): any;
        /**
Returns the first RibbonBarToggleButton object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarToggleButton whose Value property matches the passed parameter
*/
findToggleButtonByValue(value: string): Telerik.Web.UI.RibbonBarToggleButton;
        /**
Minimizes(collapses) the RibbonBar (equal to set_minimized(true))
@method
@returns 
*/
minimize(): void;
        /**
RibbonBarQuickAccessToolbar
@method
@param RibbonBarQuickAccessToolbar - 
@returns 
*/
get_quickAccessToolbar(RibbonBarQuickAccessToolbar: any): any;
        /**
Sets the default  image.
@method
@returns 
*/
set_defaultImageUrl(): any;
        /**
Returns the first RibbonBarMenu object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarMenu whose Value property matches the passed parameter
*/
findMenuItemByValue(value: string): Telerik.Web.UI.RibbonBarMenu;
        /**
Returns the first RibbonBarItem object whose Text property equals the passed parameter.
@method
@param text - The text to search for
@returns 
*/
findItemByText(text: string): Telerik.Web.UI.RibbonBarItem;
        /**
Returns the first RibbonBarButton object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarButton whose Value property matches the passed parameter
*/
findButtonByValue(value: string): Telerik.Web.UI.RibbonBarButton;
        /**
Returns the url of the default  image.
@method
@param string - 
@returns 
*/
get_defaultImageUrl(string: any): any;
        /**
Returns the first RibbonBarItem object whose CommandArgument property equals the passed parameter.
@method
@param commandArgument - The text to search for
@returns 
*/
findItemByCommandArgument(commandArgument: string): Telerik.Web.UI.RibbonBarItem;
        /**
RadRibbonBar
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Returns the first RibbonBarItem object whose CommandName property equals the passed parameter.
@method
@param commandName - The text to search for
@returns 
*/
findItemByCommandName(commandName: string): Telerik.Web.UI.RibbonBarItem;
        /**
Returns the url of the default disabled large image.
@method
@param string - 
@returns 
*/
get_defaultDesabledImageUrlLarge(string: any): any;
        /**
Sets the default disabled large image.
@method
@returns 
*/
set_defaultDesabledImageUrlLarge(): any;
        /**
Gets the selected RibbonBarTab.
@method
@returns The selected RibbonBarTab
*/
get_selectedTab(): Telerik.Web.UI.RibbonBarTab;
        /**
Gets the first instance of a RibbonBarItem with the specified attribute/value pair.
@method
@param attributeName - The attribute name to search for
@param attributeValue - The attribute value to search for
@returns Returns the first RibbonBarItem which has an attribute that matches the passed parameters
*/
findItemByAttribute(attributeName: string, attributeValue: string): Telerik.Web.UI.RibbonBarItem;
        /**
Refreshes the RadListBox UI
@method
@returns 
*/
repaint(): void;
        /**
Returns the first RibbonBarTab object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarTab whose Value property matches the passed parameter
*/
findTabByValue(value: string): Telerik.Web.UI.RibbonBarTab;
        /**
Gets a collection with all tabs
@method
@returns RibbonBarTabCollection
*/
get_tabs(): Telerik.Web.UI.RibbonBarTabCollection;
    }


    class RadRotator  extends Telerik.Web.UI.RadWebControl {
        /**
Returns the rotator's ScrollDirection
@method
@returns 
*/
get_scrollDirection(): Telerik.Web.UI.RotatorScrollDirection;
        /**
Sets the rotator's ScrollDirection
@method
@param value - The new scrooll direction
@returns 
*/
set_scrollDirection(value: Telerik.Web.UI.RotatorScrollDirection): void;
        /**
Forces the rotator to fully display an item, even when the item is partially shown and the rotator is paused
@method
@returns 
*/
stopViewportAnimation(): void;
        /**
Sets whether data bound items will be appended to the Rotator.
@method
@param value - 
@returns 
*/
set_appendClientDataBoundItems(value: boolean): void;
        /**
Returns the rotator's initially shown item's index
@method
@returns 
*/
get_initialItemIndex(): number;
        /**
Returns the default animation direction
@method
@returns 
*/
get_defaultAnimationDirection(): Telerik.Web.UI.RotatorScrollDirection;
        /**
Returns the current item shown in the rotator
@method
@returns 
*/
get_currentItem(): Telerik.Web.UI.RadRotatorItem;
        /**
Sets the time in milliseconds each frame will display in automatic scrolling scenarios
@method
@param value - 
@returns 
*/
set_frameDuration(value: number): void;
        /**
Data binds the data of the RadRotator.
@method
@returns 
*/
dataBind(): void;
        /**
Sets the RadRotator width in pixels.
@method
@param value - 
@returns 
*/
set_width(value: number): void;
        /**
Returns a Boolean that indicates if the rotator is scrolling forward
@method
@returns 
*/
isScrollingForward(): boolean;
        /**
Sets the rotator's type
@method
@param value - The rotator
@returns 
*/
set_rotatorType(value: Telerik.Web.UI.RotatorType): void;
        /**
Gets the client template of the Rotator.
@method
@returns 
*/
get_clientTemplate(): string;
        /**
RadTicker
@method
@returns 
*/
get_lineDuration(): void;
        /**
Sets the speed in milliseconds for scrolling rotator items
@method
@param value - 
@returns 
*/
set_scrollDuration(value: number): void;
        /**
RadTicker
@method
@returns 
*/
set_lineDuration(): void;
        /**
Clears all the items of the RadRotator's items collection.
@method
@returns 
*/
clearItems(): void;
        /**
Returns the rotator's height
@method
@returns 
*/
get_height(): number;
        /**
RadTicker
@method
@returns 
*/
set_autoAdvance(): void;
        /**
Manually requests new data for a RadRotator that uses load-on-demand.
@method
@param itemIndex - 
@returns 
*/
loadItemsFromWebService(itemIndex: number): void;
        /**
Starts the ticker
@method
@returns 
*/
startTicker(): void;
        /**
Returns whether the rotator is visible
@method
@returns 
*/
isVisible(): boolean;
        /**
RadTicker
@method
@returns 
*/
get_autoAdvance(): void;
        /**
Returns whether the rotator is in SlideShow mode
@method
@returns 
*/
isSlideShow(): boolean;
        /**
Scrolls an item only
@method
@returns 
*/
scrollItem(): void;
        /**
RadTicker
@method
@returns 
*/
get_loop(): void;
        /**
Returns whether Down, Up or both ScrollDirections are set
@method
@returns 
*/
isVertical(): boolean;
        /**
Sets the ID of the RadClientDataSource that is associated with the Rotator.
@method
@param id - 
@returns 
*/
set_clientDataSourceID(id: number): void;
        /**
Returns the rotator's type
@method
@returns 
*/
get_rotatorType(): Telerik.Web.UI.RotatorType;
        /**
Returns whether the rotator is in AutomaticAdvance mode
@method
@returns 
*/
isAutomaticAdvance(): boolean;
        /**
Stops the rotator's animation
@method
@returns 
*/
stop(): void;
        /**
Removes an item from the RadRotator's items collection. By default the last item is removed if no index is passed as parameter.
@method
@param index - The 0
@returns 
*/
removeRotatorItem(index: number): void;
        /**
Resumes the rotator's animation
@method
@returns 
*/
resume(): void;
        /**
Returns true if the rotator is enabled
@method
@returns 
*/
get_enabled(): boolean;
        /**
Stops the ticker
@method
@returns 
*/
stopTicker(): void;
        /**
Sets a bool value indicating whether the rotator will stop when the mouse is over the control
@method
@param value - 
@returns 
*/
set_pauseOnMouseOver(value: boolean): void;
        /**
forces the ticker to tick to the next line
@method
@returns 
*/
tickNextLine(): void;
        /**
Returns the time in milliseconds each frame will display in automatic scrolling scenarios
@method
@returns 
*/
get_frameDuration(): number;
        /**
Returns true if RadRotator is set to start scrolling its frames from the beginning, once the rotator shows the last frame
@method
@returns 
*/
get_wrapFrames(): boolean;
        /**
Sets currently shown item by its index
@method
@param index - 
@returns 
*/
set_currentItemIndex(index: number): void;
        /**
RadTicker
@method
@returns 
*/
set_loop(): void;
        /**
Sets the RadRotator height in pixels.
@method
@param value - 
@returns 
*/
set_height(value: number): void;
        /**
Sets the duration in milliseconds between ticking each character of a tickerline.
@method
@returns 
*/
set_tickSpeed(): void;
        /**
Sets a custom data source for the RadRotator.
@method
@param data - 
@returns 
*/
set_dataSource(data: any): void;
        /**
Returns true if the rotator is configured to stop when the mouse is over the rotator
@method
@returns 
*/
get_pauseOnMouseOver(): boolean;
        /**
Indicates whether the rotator is configured to scroll an item or the whole viewport
@method
@returns 
*/
isViewportScrollMode(): boolean;
        /**
Returns the rotator's width
@method
@returns 
*/
get_width(): number;
        /**
Returns a Boolean that indicates if the rotator is scrolling forward
@method
@returns 
*/
isScrollingLeft(): boolean;
        /**
Gets the duration in milliseconds between ticking each character of a tickerline.
@method
@returns 
*/
get_tickSpeed(): void;
        /**
Enables or disables the rotator
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Starts the rotator's animation
@method
@returns 
*/
start(): void;
        /**
Returns the UL DOMElement that wraps all rotator's items
@method
@returns 
*/
get_containerElement(): any;
        /**
Returns whether the rotator is in Carousel mode
@method
@returns 
*/
isCarousel(): boolean;
        /**
Pauses the rotator's animation
@method
@returns 
*/
pause(): void;
        /**
Sets whether RadRotator to start scrolling from the beginning, once the rotator shows the last frame
@method
@param value - 
@returns 
*/
set_wrapFrames(value: boolean): void;
        /**
Returns a Boolean that indicates if the rotator is scrolling upward
@method
@returns 
*/
isScrollingUp(): boolean;
        /**
Gets the ID of the RadClientDataSource that is associated with the Rotator.
@method
@returns 
*/
get_clientDataSourceID(): number;
        /**
Redraw the rotator
@method
@returns 
*/
repaint(): void;
        /**
Gets whether data bound items will be appended to the Rotator.
@method
@returns 
*/
get_appendClientDataBoundItems(): boolean;
        /**
Returns the rotator's items. The items are of type Telerik.Web.UI.RadRotatorItems
@method
@returns 
*/
get_items(): any;
        /**
Creates and adds a new item to the RadRotator's client-side item collection. The item will not exist in the rotator's items collection on the server
@method
@param radRotatorItemData - This parameter needs to have the following 3
@param index - The position at which the item will be added. If nothing is passed the item will be appended to the end of the collection.
@returns 
*/
addRotatorItem(radRotatorItemData: any, index: number): void;
        /**
Sets the client template of the Rotator.
@method
@param value - 
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Returns whether the rotator is in CoverFlow mode
@method
@returns 
*/
isCoverFlow(): boolean;
        /**
Gets the RadClientDataSource that is associated with the Rotator.
@method
@returns 
*/
get_clientDataSource(): Telerik.Web.UI.RadClientDataSource;
        /**
Starts the rotator's animation from the begining
@method
@returns 
*/
startAutoPlay(): void;
        /**
Gets the index of the currently shown item.
@method
@returns 
*/
get_currentItemIndex(): void;
        /**
Scrolls the whole visible area, not just an item
@method
@returns 
*/
scrollViewport(): void;
        /**
Scrolls the rotator in the specified direction
@method
@param animationDir - The scroll direction
@returns 
*/
showNext(animationDir: Telerik.Web.UI.RotatorScrollDirection): void;
        /**
Returns the speed in milliseconds for scrolling rotator items
@method
@returns 
*/
get_scrollDuration(): number;
        /**
Gets the data source of the Rotator.
@method
@returns 
*/
get_dataSource(): any;
        /**
Adds a handler for the itemClicking event
*/
add_itemClicking(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the itemShown event
*/
remove_itemShown(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the itemShowing event
*/
remove_itemShowing(handler: Function): void;
        /**
Adds a handler for the mouseOut event
*/
add_mouseOut(handler: Function): void;
        /**
Adds a handler for the mouseOver event
*/
add_mouseOver(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the mouseOut event
*/
remove_mouseOut(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the itemClicked event
*/
remove_itemClicked(handler: Function): void;
        /**
Adds a handler for the itemClicked event
*/
add_itemClicked(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the itemClicking event
*/
remove_itemClicking(handler: Function): void;
        /**
Adds a handler for the buttonClick event
*/
add_buttonClick(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the buttonOut event
*/
remove_buttonOut(handler: Function): void;
        /**
Adds a handler for the itemShowing event
*/
add_itemShowing(handler: Function): void;
        /**
Adds a handler for the buttonOut event
*/
add_buttonOut(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the load event
*/
remove_load(handler: Function): void;
        /**
Adds a handler for the load event
*/
add_load(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the buttonClick event
*/
remove_buttonClick(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the mouseOver event
*/
remove_mouseOver(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the buttonOver event
*/
remove_buttonOver(handler: Function): void;
        /**
Adds a handler for the buttonOver event
*/
add_buttonOver(handler: Function): void;
        /**
Adds a handler for the itemShown event
*/
add_itemShown(handler: Function): void;
    }


    class RadRotatorItem  extends Telerik.Web.UI.RadWebControl {
        /**

@method
@returns 
*/
getServerIndex(): void;
        /**

@method
@returns 
*/
get_cssClass(): void;
        /**

@method
@returns 
*/
get_index(): void;
        /**

@method
@returns 
*/
get_tickers(): void;
        /**

@method
@returns 
*/
get_visible(): void;
        /**

@method
@returns 
*/
set_cssClass(): void;
        /**

@method
@returns 
*/
set_visible(): void;
    }


    class RadScheduler  extends Telerik.Web.UI.RadWebControl {
        /**
Deletes the specified Appointment. Postbacks if not bound to a web service.
@method
@param appointment - The appointment to delete.
@param deleteSeries - For recurring appointments only. 	True if you want to delete the recurring series
@returns 
*/
deleteAppointment(appointment: Telerik.Web.UI.SchedulerAppointment, deleteSeries: boolean): void;
        /**
Deletes the specified Appointment. This method is identical to deleteAppointment, but the user is presented with a confirmation dialog if the deleted appointment is recurring.
@method
@param appointment - The appointment to delete.
@returns 
*/
deleteAppointmentWithConfirmation(appointment: Telerik.Web.UI.SchedulerAppointment): void;
        /**
Converts a date time object from client date format to UTC using the timeZoneOffset property.
@method
@param displayDate - The date to convert.
@returns The date in UTC format which corresponds to the supplied client format date.
*/
displayToUtc(displayDate: Date): Date;
        /**
Starts editing the specified Appointment.
@method
@param appointment - The appointment to edit.
@param editSeries - For recurring appointments only. 	True if you want to edit the recurring series
@returns 
*/
editAppointment(appointment: Telerik.Web.UI.SchedulerAppointment, editSeries: boolean): void;
        /**
Starts editing the specified Appointment. This method is identical to editAppointment, but the user is presented with a confirmation dialog if the edited appointment is recurring.
@method
@param appointment - The appointment to edit.
@returns 
*/
editAppointmentWithConfirmation(appointment: Telerik.Web.UI.SchedulerAppointment): void;
        /**
Gets the appointment that corresponds to the specified DOM element.
@method
@param element - The appointment DOM element
@returns The corresponding appointment. Null if the element does not belong to an appointment.
*/
getAppointmentFromDomElement(element: HTMLElement): Telerik.Web.UI.SchedulerAppointment;
        /**
Gets the model that represents the current view. The model is responsible for mapping time slots to DOM elements and appointments to time slots.
@method
@returns The model that represents the current view.
*/
get_activeModel(): Telerik.Web.UI.ISchedulerModel;
        /**
Gets a value indicating if the appointments can be deleted.
@method
@returns true if the appointment deleting is allowed
*/
get_allowDelete(): boolean;
        /**
Gets a value indicating if the appointments can be edited. This includes moving and resizing.
@method
@returns true if the appointment editing is allowed
*/
get_allowEdit(): boolean;
        /**
Gets a value indicating if the appointments can be inserted.
@method
@returns true if the appointment inserting is allowed
*/
get_allowInsert(): boolean;
        /**
Gets a collection of all loaded appointments.
@method
@returns Collection of all loaded appointments.
*/
get_appointments(): Telerik.Web.UI.SchedulerAppointmentCollection;
        /**
Gets a collection of all attributes of the scheduler.
@method
@returns Collection of all attributes of the scheduler.
*/
get_attributes(): Telerik.Web.UI.SchedulerAttributeCollection;
        /**
Gets the currently edited appointment.
@method
@returns The currently edited appointment. Null if no appointment is edited at the moment.
*/
get_currentAppointment(): Telerik.Web.UI.SchedulerAppointment;
        /**
Gets a value indicating whether a delete confirmation dialog should be displayed when the user clicks the "delete" button of an appointment.
@method
@returns true if the confirmation dialog should be displayed
*/
get_displayDeleteConfirmation(): boolean;
        /**
Gets a value indicating whether a recurrence action dialog should be displayed when moving recurrent appointments.
@method
@returns true if the confirmation dialog should be displayed
*/
get_displayRecurrenceActionDialogOnMove(): boolean;
        /**
Gets the duration between two timeslots (including their own duration).
@method
@param startSlot - The first slot
@param endSlot - The last slot
@returns The duration between two timeslots in milliseconds.
*/
get_durationBetweenTimeSlots(startSlot: Telerik.Web.UI.ISchedulerTimeSlot, endSlot: Telerik.Web.UI.ISchedulerTimeSlot): number;
        /**
Gets the duration of the area formed by the selected time slots.
@method
@returns The sum of the durations of the selected time slots as milliseconds.
*/
get_durationOfSelectedArea(): number;
        /**
Gets the start date of the current view. In day view, this is the start of the visible day.
@method
@returns The start date of the current view.
*/
get_firstDayStart(): Date;
        /**
Gets the name of the resource to group by. Can also be in the format "Date,[Resource Name]" when grouping by date.
@method
@returns The name of the resource to group by.
*/
get_groupBy(): string;
        /**
Gets the height of RadScheduler.
@method
@returns The height of RadScheduler.
*/
get_height(): string;
        /**
Gets the hours panel time format string.
@method
@returns The hours panel time format string.
*/
get_hoursPanelTimeFormat(): string;
        /**
Gets the minimum height of the inline insert/edit template in pixels.
@method
@returns The minimum height of the inline insert
*/
get_minimumInlineFormHeight(): number;
        /**
Gets the minimum width of the inline insert/edit template in pixels.
@method
@returns The minimum width of the inline insert
*/
get_minimumInlineFormWidth(): number;
        /**
Gets the number of minutes which a single row represents.
@method
@returns The number of minutes which a single row represents.
*/
get_minutesPerRow(): number;
        /**
Gets the number of rows that are hovered when the mouse is over the appointment area.
@method
@returns The number of rows that are hovered when the mouse is over the appointment area.
*/
get_numberOfHoveredRows(): number;
        /**
Gets a value indicating whether RadScheduler is in read-only mode.
@method
@returns true if the scheduler is read
*/
get_readOnly(): boolean;
        /**
Gets a collection of all loaded resource style mappings.
@method
@returns Collection of all loaded resource style mappings.
*/
get_resourceStyles(): Telerik.Web.UI.ResourceStyleMappingCollection;
        /**
Gets a collection of all loaded resource types.
@method
@returns Collection of all loaded resource types.
*/
get_resourceTypes(): Telerik.Web.UI.ResourceTypeCollection;
        /**
Gets a collection of all loaded resources.
@method
@returns Collection of all loaded resources.
*/
get_resources(): Telerik.Web.UI.SchedulerResourceCollection;
        /**
Gets the height of RadScheduler rows.
@method
@returns The height of RadScheduler rows.
*/
get_rowHeight(): string;
        /**
Gets the currently selected date.
@method
@returns the currently selected date.
*/
get_selectedDate(): Date;
        /**
Gets the currently selected time slots.
@method
@returns the currently selected time slots.
*/
get_selectedSlots(): any;
        /**
Gets the type of the currently selected view.
@method
@returns The currently selected view.
*/
get_selectedView(): Telerik.Web.UI.SchedulerViewType;
        /**
Gets a value indicating whether to display the complete day (24-hour view) or the range between dayStartTime and dayEndTime.
@method
@returns true if showing the complete day
*/
get_showFullTime(): boolean;
        /**
Gets the number of rows each time label spans.
@method
@returns The number of rows each time label spans.
*/
get_timeLabelRowSpan(): number;
        /**
The web service to be used for binding this instance of RadScheduler.
@method
@returns The web service to be used for binding this instance of RadScheduler.
*/
get_webServiceSettings(): Telerik.Web.UI.SchedulerWebServiceSettings;
        /**
Hides the currently shown modal advanced form.
@method
@returns 
*/
hideAdvancedForm(): void;
        /**
Hides the currently shown inline form.
@method
@returns 
*/
hideInlineForm(): void;
        /**
Stores the specified Appointment. Postbacks if not bound to a web service.
@method
@param appointment - The appointment to insert.
@returns 
*/
insertAppointment(appointment: Telerik.Web.UI.SchedulerAppointment): void;
        /**
Prepares the specified appointment for editing. If the specified appointment is not recurring, the method does nothing and returns the same appointment. If the appointment is recurring and editSeries is set to true the method returns the recurrence parent. Otherwise, the method clones the appointment and updates it state to recurrence exception.
@method
@param appointmentToEdit - The appointment to prepare for editing.
@param editSeries - 
@returns 
*/
prepareToEdit(appointmentToEdit: Telerik.Web.UI.SchedulerAppointment, editSeries: boolean): void;
        /**
Web Service binding only. Rebinds the scheduler from the web service.
@method
@returns 
*/
rebind(): void;
        /**
Web Service binding only. Removes the associated recurrence exceptions.
@method
@param appointment - The master appointment for the recurrence series.
@returns 
*/
removeRecurrenceExceptions(appointment: Telerik.Web.UI.SchedulerAppointment): void;
        /**
Updates the control layout. Call this function after changing the size of the control.
@method
@returns 
*/
repaint(): void;
        /**
Sets a value indicating if the appointments can be deleted.
@method
@param allowDelete - true if the appointment deleting is allowed
@returns 
*/
set_allowDelete(allowDelete: boolean): void;
        /**
Sets a value indicating if the appointments can be edited.
@method
@param allowEdit - true if the appointment editing is allowed
@returns 
*/
set_allowEdit(allowEdit: boolean): void;
        /**
Sets a value indicating if the appointments can be inserted.
@method
@param allowDelete - true if the appointment inserting is allowed
@returns 
*/
set_allowInsert(allowDelete: boolean): void;
        /**
Sets a value indicating whether a delete confirmation dialog should be displayed when the user clicks the "delete" button of an appointment.
@method
@param displayDeleteConfirmation - true if the confirmation dialog should be displayed
@returns 
*/
set_displayDeleteConfirmation(displayDeleteConfirmation: boolean): void;
        /**
Sets a value indicating whether a recurrence action dialog should be displayed when moving recurrent appointments.
@method
@param displayDeleteConfirmation - true if the confirmation dialog should be displayed
@returns 
*/
set_displayRecurrenceActionDialogOnMove(displayDeleteConfirmation: boolean): void;
        /**
Sets the height of RadScheduler.
@method
@param value - The height of RadScheduler.
@returns 
*/
set_height(value: string): void;
        /**
Sets the minimum height of the inline insert/edit template in pixels.
@method
@param value - The minimum height of the inline insert
@returns 
*/
set_minimumInlineFormHeight(value: number): void;
        /**
Sets the minimum width of the inline insert/edit template in pixels.
@method
@param value - The minimum width of the inline insert
@returns 
*/
set_minimumInlineFormWidth(value: number): void;
        /**
Sets the number of rows that are hovered when the mouse is over the appointment area.
@method
@param value - The number of rows that are hovered when the mouse is over the appointment area.
@returns 
*/
set_numberOfHoveredRows(value: number): void;
        /**
Sets a value indicating whether RadScheduler is in read-only mode.
@method
@param readOnly - true if the scheduler is read
@returns 
*/
set_readOnly(readOnly: boolean): void;
        /**
Web Service binding only. Sets the currently selected date.
@method
@param value - The currently selected date.
@returns 
*/
set_selectedDate(value: Date): void;
        /**
Web Service binding only. Sets the currently selected view type.
@method
@param selectedView - The view to switch to.
@returns 
*/
set_selectedView(selectedView: Telerik.Web.UI.SchedulerViewType): void;
        /**
Web Service binding only. Sets a value indicating whether to display the complete day (24-hour view) or the range between dayStartTime and dayEndTime.
@method
@param value - true if showing the complete day
@returns 
*/
set_showFullTime(value: boolean): void;
        /**
Shows the advanced edit form populated with the specified appointment.
@method
@param appointment - The appointment to edit.
@param editSeries - For recurring appointments only. 	True if you want to edit the recurring series
@returns 
*/
showAdvancedEditForm(appointment: Telerik.Web.UI.SchedulerAppointment, editSeries: boolean): void;
        /**
Shows the advanced insert form populated with the specified appointment start date.
@method
@param startDate - The start date for the appointment.
@returns 
*/
showAdvancedInsertForm(startDate: Date): void;
        /**
Shows the advanced insert form populated with the specified appointment start date. The appointment will be initially marked as all-day.
@method
@param startDate - The start date for the appointment.
@returns 
*/
showAllDayAdvancedInsertForm(startDate: Date): void;
        /**
Shows the in-line insert form for an all-day appointment on the specified date. Applicable in Day/Week/MultiDay view.
@method
@param date - The day for which to show the insert form.
@returns 
*/
showAllDayInlineInsertForm(date: Date): void;
        /**
Shows the in-line edit form for the specified appointment. A postback will occur if a custom InlineEditTemplate is in use.
@method
@param appointment - The appointment to edit.
@param editSeries - For recurring appointments only. 	true if you want to edit the recurring series
@returns 
*/
showInlineEditForm(appointment: Telerik.Web.UI.SchedulerAppointment, editSeries: boolean): void;
        /**
Shows the in-line insert form at the specified time slot. The formCreating client-side event will be fired. A postback will occur if a custom InlineInsertTemplate is in use.
@method
@param timeSlot - The time slot in which to place the insert form.
@returns 
*/
showInlineInsertForm(timeSlot: Telerik.Web.UI.ISchedulerTimeSlot): void;
        /**
Updates the specified Appointment. Postbacks if not bound to a web service.
@method
@param appointment - The appointment to update.
@param editSeries - 
@returns 
*/
updateAppointment(appointment: Telerik.Web.UI.SchedulerAppointment, editSeries: boolean): void;
        /**
Converts a date time object from UTC to client date format using the timeZoneOffset property.
@method
@param utcDate - The date to convert.
@returns The date in client format which corresponds to the supplied UTC date.
*/
utcToDisplay(utcDate: Date): Date;
        /**
Adds an event handler for the appointmentClick event.
*/
add_appointmentClick(handler: Function): void;
        /**
Adds an event handler for the appointmentContextMenu event.
*/
add_appointmentContextMenu(handler: Function): void;
        /**
Adds an event handler for the appointmentCreated event.
*/
add_appointmentCreated(handler: Function): void;
        /**
Adds an event handler for the AppointmentDataBound event.
*/
add_appointmentDataBound(handler: Function): void;
        /**
Adds an event handler for the appointmentDeleting event.
*/
add_appointmentDeleting(handler: Function): void;
        /**
Adds an event handler for the appointmentDoubleClick event.
*/
add_appointmentDoubleClick(handler: Function): void;
        /**
Adds an event handler for the appointmentEditing event.
*/
add_appointmentEditing(handler: Function): void;
        /**
Adds an event handler for the appointmentInserting event.
*/
add_appointmentInserting(handler: Function): void;
        /**
Adds an event handler for the appointmentMoveEnd event.
*/
add_appointmentMoveEnd(handler: Function): void;
        /**
Adds an event handler for the appointmentMoveStart event.
*/
add_appointmentMoveStart(handler: Function): void;
        /**
Adds an event handler for the appointmentMoving event.
*/
add_appointmentMoving(handler: Function): void;
        /**
Adds an event handler for the appointmentResizeEnd event.
*/
add_appointmentResizeEnd(handler: Function): void;
        /**
Adds an event handler for the appointmentResizeStart event.
*/
add_appointmentResizeStart(handler: Function): void;
        /**
Adds an event handler for the appointmentResizing event.
*/
add_appointmentResizing(handler: Function): void;
        /**
Adds an event handler for the appointmentWebServiceDeleting event.
*/
add_appointmentWebServiceDeleting(handler: Function): void;
        /**
Adds an event handler for the appointmentWebServiceInserting event.
*/
add_appointmentWebServiceInserting(handler: Function): void;
        /**
Adds an event handler for the appointmentWebServiceUpdating event.
*/
add_appointmentWebServiceUpdating(handler: Function): void;
        /**
Adds an event handler for the AppointmentsPopulated event.
*/
add_appointmentsPopulated(handler: Function): void;
        /**
Adds an event handler for the AppointmentsPopulating event.
*/
add_appointmentsPopulating(handler: Function): void;
        /**
Adds an event handler for the dataBound event.
*/
add_dataBound(handler: Function): void;
        /**
Adds an event handler for the formCreated event.
*/
add_formCreated(handler: Function): void;
        /**
Adds an event handler for the navigationCommand event.
*/
add_navigationCommand(handler: Function): void;
        /**
Adds an event handler for the navigationComplete event.
*/
add_navigationComplete(handler: Function): void;
        /**
Adds an event handler for the recurrenceActionDialogClosed event.
*/
add_recurrenceActionDialogClosed(handler: Function): void;
        /**
Adds an event handler for the recurrenceActionDialogShowing event.
*/
add_recurrenceActionDialogShowing(handler: Function): void;
        /**
Adds an event handler for the recurrenceExceptionCreating event.
*/
add_recurrenceExceptionCreating(handler: Function): void;
        /**
Adds an event handler for the recurrenceExceptionsRemoving event.
*/
add_recurrenceExceptionsRemoving(handler: Function): void;
        /**
Adds an event handler for the requestFailed event.
*/
add_requestFailed(handler: Function): void;
        /**
Adds an event handler for the requestSuccess event.
*/
add_requestSuccess(handler: Function): void;
        /**
Adds an event handler for the ResourcesPopulated event.
*/
add_resourcesPopulated(handler: Function): void;
        /**
Adds an event handler for the ResourcesPopulating event.
*/
add_resourcesPopulating(handler: Function): void;
        /**
Adds an event handler for the timeSlotClick event.
*/
add_timeSlotClick(handler: Function): void;
        /**
Adds an event handler for the timeSlotContextMenu event.
*/
add_timeSlotContextMenu(handler: Function): void;
        /**
Removes an event handler for the appointmentClick event.
*/
remove_appointmentClick(handler: Function): void;
        /**
Removes an event handler for the appointmentContextMenu event.
*/
remove_appointmentContextMenu(handler: Function): void;
        /**
Removes an event handler for the appointmentCreated event.
*/
remove_appointmentCreated(handler: Function): void;
        /**
Removes an event handler for the AppointmentDataBound event.
*/
remove_appointmentDataBound(handler: Function): void;
        /**
Removes an event handler for the appointmentDeleting event.
*/
remove_appointmentDeleting(handler: Function): void;
        /**
Removes an event handler for the appointmentDoubleClick event.
*/
remove_appointmentDoubleClick(handler: Function): void;
        /**
Removes an event handler for the appointmentEditing event.
*/
remove_appointmentEditing(handler: Function): void;
        /**
Removes an event handler for the code event.
*/
remove_appointmentInserting(handler: Function): void;
        /**
Removes an event handler for the appointmentMoveEnd event.
*/
remove_appointmentMoveEnd(handler: Function): void;
        /**
Removes an event handler for the appointmentMoveStart event.
*/
remove_appointmentMoveStart(handler: Function): void;
        /**
Removes an event handler for the appointmentMoving event.
*/
remove_appointmentMoving(handler: Function): void;
        /**
Removes an event handler for the appointmentResizeEnd event.
*/
remove_appointmentResizeEnd(handler: Function): void;
        /**
Removes an event handler for the appointmentResizeStart event.
*/
remove_appointmentResizeStart(handler: Function): void;
        /**
Removes an event handler for the appointmentResizing event.
*/
remove_appointmentResizing(handler: Function): void;
        /**
Removes an event handler for the appointmentWebServiceDeleting event.
*/
remove_appointmentWebServiceDeleting(handler: Function): void;
        /**
Removes an event handler for the appointmentWebServiceInserting event.
*/
remove_appointmentWebServiceInserting(handler: Function): void;
        /**
Removes an event handler for the appointmentWebServiceUpdating event.
*/
remove_appointmentWebServiceUpdating(handler: Function): void;
        /**
Removes an event handler for the appointmentPopulating event.
*/
remove_appointmentsPopulated(handler: Function): void;
        /**
Removes an event handler for the appointmentPopulating event.
*/
remove_appointmentsPopulating(handler: Function): void;
        /**
Removes an event handler for the dataBound event.
*/
remove_dataBound(handler: Function): void;
        /**
Removes an event handler for the formCreated event.
*/
remove_formCreated(handler: Function): void;
        /**
Removes an event handler for the navigationCommand event.
*/
remove_navigationCommand(handler: Function): void;
        /**
Removes an event handler for the navigationComplete event.
*/
remove_navigationComplete(handler: Function): void;
        /**
Removes an event handler for the recurrenceActionDialogClosed event.
*/
remove_recurrenceActionDialogClosed(handler: Function): void;
        /**
Removes an event handler for the recurrenceActionDialogShowing event.
*/
remove_recurrenceActionDialogShowing(handler: Function): void;
        /**
Removes an event handler for the recurrenceExceptionCreating event.
*/
remove_recurrenceExceptionCreating(handler: Function): void;
        /**
Removes an event handler for the recurrenceExceptionsRemoving event.
*/
remove_recurrenceExceptionsRemoving(handler: Function): void;
        /**
Removes an event handler for the requestFailed event.
*/
remove_requestFailed(handler: Function): void;
        /**
Removes an event handler for the requestSuccess event.
*/
remove_requestSuccess(handler: Function): void;
        /**
Removes an event handler for the appointmentPopulated event.
*/
remove_resourcesPopulated(handler: Function): void;
        /**
Removes an event handler for the appointmentPopulating event.
*/
remove_resourcesPopulating(handler: Function): void;
        /**
Removes an event handler for the timeSlotClick event.
*/
remove_timeSlotClick(handler: Function): void;
        /**
Removes an event handler for the timeSlotContextMenu event.
*/
remove_timeSlotContextMenu(handler: Function): void;
    }


    class RadSchedulerRecurrenceEditor  extends Telerik.Web.UI.RadWebControl {
        /**
Gets the end date of the first occurrence.
@method
@returns the end date of the first occurrence.
*/
get_endDate(): Date;
        /**
Gets the first day of the week.
@method
@returns the first day of the week. This property is used when building Monthly and Yearly recurrence rules.
*/
get_firstDayOfWeek(): Telerik.Web.UI.DayOfWeek;
        /**
Gets the currently selected recurrence rule.
@method
@returns The currently selected recurrence rule
*/
get_recurrenceRule(): Telerik.Web.UI.RecurrenceRule;
        /**
Gets the start date of the first occurrence.
@method
@returns the start date of the first occurrence.
*/
get_startDate(): Date;
        /**
Sets the end date of the first occurrence.
@method
@param value - the end date of the first occurrence.
@returns 
*/
set_endDate(value: Date): void;
        /**
Sets the first day of the week.
@method
@param value - the first day of the week. This property is used when building Monthly and Yearly recurrence rules.
@returns 
*/
set_firstDayOfWeek(value: Telerik.Web.UI.DayOfWeek): void;
        /**
Sets the recurrence rule.
@method
@param value - the recurrence rule to set
@returns 
*/
set_recurrenceRule(value: Telerik.Web.UI.RecurrenceRule): void;
        /**
Sets the start date of the first occurrence.
@method
@param value - the start date of the first occurrence.
@returns 
*/
set_startDate(value: Date): void;
    }


    class RadSearchBox  extends Telerik.Web.UI.RadWebControl {
        /**
Sets whether the AutoComplete functionality of the SearchBox is enabled
@method
@param value - Indicates whether the AutoComplete functionality of the SearchBox is enabled.
@returns 
*/
set_enableAutoComplete(value: boolean): void;
        /**
Gets the root DOM element of the RadSearchBox's drop-down.
@method
@returns The root DOM element of the RadSearchBox
*/
get_dropDownElement(): HTMLElement;
        /**
Sets the value of the RadSearchBox's EmptyMessage property.
@method
@param value - value
@returns 
*/
set_emptyMessage(value: string): void;
        /**
Gets the text in the input field.
@method
@returns The text in the input field.
*/
get_text(): string;
        /**
Gets the input DOM element of the RadSearchBox.
@method
@returns The input DOM element of the RadSearchBox.
*/
get_inputElement(): HTMLElement;
        /**
Refreshes the RadSearchBox UI
@method
@returns 
*/
repaint(): void;
        /**
Gets the Filter criteria of RadSearchBox.
@method
@returns 
*/
get_filter(): Telerik.Web.UI.SearchBoxFilter;
        /**
Returns the value of the RadSearchBox's EmptyMessage property.
@method
@returns The value of the RadSearchBox
*/
get_emptyMessage(): string;
        /**
Sets the value of the RadSearchBox's ClientTemplate property.
@method
@param value - value
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Returns the value of the RadSearchBox's ClientTemplate property.
@method
@returns The value of the RadSearchBox
*/
get_clientTemplate(): string;
        /**
Gets the value of the Enabled property
@method
@returns 
*/
get_enabled(): string;
        /**
Gets the UL DOM element of the RadSearchBox's drop-down
@method
@returns The UL DOM element of the RadSearchBox
*/
get_childListElement(): HTMLElement;
        /**
Saves the client state to the client state hidden field
@method
@returns 
*/
saveClientState(): void;
        /**
If AutoComplete is enabled,the search string exists and it is longer than the min filter length set, a search operation is performed. The second parameter defines whether all results should be shown in the drop-down.
@method
@returns 
*/
query(): void;
        /**
Gets the SearchContext's object
@method
@returns 
*/
get_searchContext(): Telerik.Web.UI.SearchContext;
        /**
Gets a value indicating whether the AutoComplete functionality of the SearchBox is enabled
@method
@returns Value indicating whether the AutoComplete functionality of the SearchBox is enabled
*/
get_enableAutoComplete(): boolean;
        /**
Clears the search results and closes the drop-down.
@method
@returns 
*/
clear(): void;
        /**
Toggles the enabled state of the RadSearchBox.
@method
@returns 
*/
set_enabled(): void;
        /**
Sets the Filter criteria of RadSearchBox.
@method
@param value - The Filter criteria.
@returns 
*/
set_filter(value: Telerik.Web.UI.SearchBoxFilter): void;
        /**
Writes the changes to the searchBox that were made since a previous call to trackChanges, so that they are preserved over post-backs.
@method
@returns 
*/
commitChanges(): void;
        /**
Gets a collection with all buttons
@method
@returns 
*/
get_buttons(): Telerik.Web.UI.SearchBoxButtonCollection;
    }


    class RadSlider  extends Telerik.Web.UI.RadWebControl {
        /**
Sets the current minimum value that can be selected with slider
@method
@param value - The minimum value to be set
@returns 
*/
set_minimumValue(value: number): void;
        /**
Sets a bool value indicating whether the drag handle is displayed
@method
@param value - The bool value indicating whether the drag handle is displayed
@returns 
*/
set_showDragHandle(value: boolean): void;
        /**
Gets the current maximum value that can be selected with slider
@method
@returns The current maximum value that can be selected with the slider
*/
get_maximumValue(): number;
        /**
Adds a slider item to the slider. Adds only if ItemType="Items". If index not specified, adds the item to the end of the slider
@method
@param item - The item object describing the item to add. Should contain a property
@param index - The index
@returns 
*/
addSliderItem(item: any, index: number): void;
        /**
Gets the bool value indicating whether the slider has two drag handles (Selection start handle -- Selection end handle). This way the user can select a specific range of items/values
@method
@returns A value
*/
get_isSelectionRangeEnabled(): boolean;
        /**
Gets the currently selected item of the slider
@method
@returns The currently selected item of the slider
*/
get_selectedItem(): Telerik.Web.UI.RadSliderItem;
        /**
Gets the bool value, indicating whether the direction of the slider is reversed
@method
@returns The bool value
*/
get_isDirectionReversed(): boolean;
        /**
ClientID
@method
@returns 
*/
get_clientDataSourceID(): void;
        /**
RadClientDataSource
@method
@returns 
*/
set_clientDataSource(): void;
        /**
Sets the delta with which the value will change when user clicks on the track
@method
@param value - The delta with which the value will change when the user clicks on the track
@returns 
*/
set_largeChange(value: number): void;
        /**
{ textField: "", valueField: "", toolTipField: "" }
@method
@returns 
*/
get_itemBinding(): void;
        /**
Gets the value of the currently selected item
@method
@returns The value of the currently selected item
*/
get_selectedValue(): string;
        /**
Sets the step with which the slider value will change
@method
@param value - The step with which the slider value will change
@returns 
*/
set_smallChange(value: number): void;
        /**
Gets the bool value indicating whether the drag handle is displayed
@method
@returns The bool value indicating whether the drag handle is displayed
*/
get_showDragHandle(): boolean;
        /**
Sets the current orientation of the slider control - horizontal or vertical
@method
@param value - The orientaion to be set
@returns 
*/
set_orientation(value: Telerik.Web.UI.Orientation): void;
        /**
Gets the delta with which the value will change when user clicks on the track
@method
@returns The delta with which the value will change when the user clicks on the track
*/
get_largeChange(): number;
        /**
Sets the bool value, indicating whether the direction of the slider is reversed
@method
@param value - The bool value
@returns 
*/
set_isDirectionReversed(value: boolean): void;
        /**
ClientID
@method
@returns 
*/
set_clientDataSourceID(): void;
        /**
Gets the animation duration in milliseconds
@method
@returns The number of miliseconds the animation will last
*/
get_animationDuration(): number;
        /**
RadClientDataSource
@method
@returns 
*/
get_clientDataSource(): void;
        /**
Gets the current minimum value that can be selected with slider
@method
@returns The current minimum value that can be selected with slider
*/
get_minimumValue(): number;
        /**
Gets the [Telerik.Web.UI.SliderItemType] type of the items in the slider control
@method
@returns The type of the items in the slider control
*/
get_itemType(): Telerik.Web.UI.SliderItemType;
        /**
Sets the current value of the slider control
@method
@param value - The value to be set
@returns 
*/
set_value(value: number): void;
        /**
Gets the height of the slider
@method
@returns The height of the slider
*/
get_height(): number;
        /**
Gets the bool value indicating whether the decrease handle is displayed
@method
@returns The bool value indicatiing whether the decrease handle is displayed
*/
get_showDecreaseHandle(): boolean;
        /**
Gets a reference to the UL element containing the slider items (LI elements)
@method
@returns The UL element containing the slider items
*/
get_childListElement(): any;
        /**
Gets the step with which the slider value will change
@method
@returns The step with which the slider value will change
*/
get_smallChange(): number;
        /**
Sets the ending value of the range when IsSelectionRangeEnabled is set to true
@method
@param value - The ending value to be set
@returns 
*/
set_selectionEnd(value: number): void;
        /**
Gets the current orientation of the slider control - horizontal or vertical
@method
@returns The current orienation of the slider control
*/
get_orientation(): Telerik.Web.UI.Orientation;
        /**
Gets the ending value of the range when IsSelectionRangeEnabled is set to true
@method
@returns The ending value of the range
*/
get_selectionEnd(): number;
        /**
Sets a bool value indicating whether the increase handle is displayed
@method
@param value - The bool value indicating whether the increase handle is displayed
@returns 
*/
set_showIncreaseHandle(value: boolean): void;
        /**
Gets a reference to the HTML element of the currently active drag handle
@method
@returns The HTML element of the currently active drag handle
*/
get_activeHandle(): any;
        /**
Gets the current value of the slider control
@method
@returns The current value of the slider
*/
get_value(): number;
        /**
Gets an array of the currently selected items
@method
@returns An array of currently selected items
*/
get_selectedItems(): any;
        /**
Removes a slider item to the slider. Removes only if ItemType="Items". If index not specified, removes the item from the end of the slider.
@method
@param index - The index of the item to remove. If missing
@returns 
*/
removeSliderItem(index: number): void;
        /**
Sets the starting value of the range, when IsSelectionRangeEnabled is set to true
@method
@param value - The starting value to be set
@returns 
*/
set_selectionStart(value: number): void;
        /**
Sets a height to the slider
@method
@param value - The height of the slider to be set
@returns 
*/
set_height(value: number): void;
        /**
Gets the tooltip for the drag handle
@method
@returns The tooltip for the drag handle
*/
get_dragText(): string;
        /**
Sets the tooltip for the drag handle
@method
@param value - The tooltip for the drag handle
@returns 
*/
set_dragText(value: string): void;
        /**
ItemBinding
@method
@returns 
*/
set_dataSource(): void;
        /**
Gets the bool value indicating whether the slider is enabled
@method
@returns The bool value indicating whether the slider is enabled or not
*/
get_enabled(): boolean;
        /**
Gets the array containing the (two) drag handles of the slider control
@method
@returns The array containing the
*/
get_dragHandles(): any;
        /**
Gets the client-side data source object that is data-bound to the slider.
@method
@returns 
*/
get_dataSource(): void;
        /**
Sets a value, indicating whether the slider has two drag handles (Selection start handle -- Selection end handle). This way the user can select a specific range of items/values
@method
@param value - Enable
@returns 
*/
set_isSelectionRangeEnabled(value: boolean): void;
        /**
Gets the width of the slider
@method
@returns The width of the slider
*/
get_width(): number;
        /**
Sets an animation duration in milliseconds
@method
@param value - Number of milliseconds
@returns 
*/
set_animationDuration(value: number): void;
        /**
Gets the bool value indicating whether the increase handle is displayed
@method
@returns The bool value indicating whether the increase handle is displayed
*/
get_showIncreaseHandle(): boolean;
        /**
Enables/Disables the slider
@method
@param value - Enable
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets a bool value indicating whether the mouse wheel will change the value of the slider
@method
@param value - The bool value indicating whether the mouse wheel will change the value of the slider
@returns 
*/
set_trackMouseWheel(value: boolean): void;
        /**
Gets the starting value of the range, when IsSelectionRangeEnabled is set to true
@method
@returns The starting value of the range
*/
get_selectionStart(): number;
        /**
Sets the bool value indicating whether the value of the slider will change while the drag hanle is moving, or when the drag handle is released
@method
@param value - The value indicating whether the value of the slider will change while the drag hanle is moving
@returns 
*/
set_liveDrag(value: boolean): void;
        /**
Sets the position of the track
@method
@param value - The position of the track
@returns 
*/
set_trackPosition(value: Telerik.Web.UI.SliderTrackPosition): void;
        /**
Gets the skin name of the slider
@method
@returns The skin name of the slider
*/
get_skin(): string;
        /**
Gets the [Telerik.Web.UI.SliderTrackPosition] position of the track
@method
@returns The position of the track
*/
get_trackPosition(): Telerik.Web.UI.SliderTrackPosition;
        /**
Gets an array of all the visible items of the slider
@method
@returns The array containing the visible items of the slider
*/
get_visibleItems(): any;
        /**
Repaints the slider control and forces it to recalculate the size of its elements. Use this method when the control is in an intially hidden element
@method
@returns 
*/
repaint(): void;
        /**
Gets an array of all the items of the slider
@method
@returns The array containing the items of the slider
*/
get_items(): any;
        /**
Initiates the data binding to a client data source. The data source needs to be set before this function is called.
@method
@returns 
*/
dataBind(): void;
        /**
Gets the bool value, indicating whether the value of the slider will change while the drag hanle is moving, or when the drag handle is released
@method
@returns The value
*/
get_liveDrag(): boolean;
        /**
Sets a width to the slider
@method
@param value - The width of the slider to be set
@returns 
*/
set_width(value: number): void;
        /**
Gets the bool value indicating whether the mouse wheel will change the value of the slider
@method
@returns The bool value indicating whether the mouse wheel will change the value of the slider
*/
get_trackMouseWheel(): boolean;
        /**
OnClientValueChanging
@method
@returns 
*/
setValue(): void;
        /**
Sets the current maximum value that can be selected with slider
@method
@param value - The maximum value to be set
@returns 
*/
set_maximumValue(value: number): void;
        /**
Sets a bool value indicating whether the decrease handle is displayed
@method
@param value - The bool value indicating whether the decrease handle is displayed
@returns 
*/
set_showDecreaseHandle(value: boolean): void;
        /**
Add a handler to the ItemsCreated event
*/
add_itemsCreated(handler: Function): void;
        /**
Removes the handler from the valueChanging event
*/
remove_valueChanging(handler: Function): void;
        /**
Remove a handler from the ValueChange event
*/
remove_valueChange(handler: Function): void;
        /**
Adds a handler to the slideStart event
*/
add_slideStart(handler: Function): void;
        /**
Add a handler to the slideBegin event
*/
add_slideBegin(handler: Function): void;
        /**
Remove a handler from the slideBegin event
*/
remove_slideBegin(handler: Function): void;
        /**
Adds a handler to the slideEnd event
*/
add_slideEnd(handler: Function): void;
        /**
Remove a handler from the ItemsCreated event
*/
remove_itemsCreated(handler: Function): void;
        /**
Adds a handler to the slide event
*/
add_slide(handler: Function): void;
        /**
Adds a handler to the load event
*/
add_load(handler: Function): void;
        /**
Removes the handler from the slideStart event
*/
remove_slideStart(handler: Function): void;
        /**
Add a handler to the loaded event
*/
add_loaded(handler: Function): void;
        /**
Adds a handler to the slideRangeStart event
*/
add_slideRangeStart(handler: Function): void;
        /**
Removes the handler from the slideRangeEnd event
*/
remove_slideRangeEnd(handler: Function): void;
        /**
Add a handler to the Sliding event
*/
add_sliding(handler: Function): void;
        /**
Adds a handler to the valueChanging event
*/
add_valueChanging(handler: Function): void;
        /**
Adds a handler to the slideRange event
*/
add_slideRange(handler: Function): void;
        /**
Removes the handler from the slideRange event
*/
remove_slideRange(handler: Function): void;
        /**
Removes the handler from the slideRangeStart event
*/
remove_slideRangeStart(handler: Function): void;
        /**
Adds a handler to the valueChanged event
*/
add_valueChanged(handler: Function): void;
        /**
Remove a handler from the Sliding event
*/
remove_sliding(handler: Function): void;
        /**
Removes the handler from the slide event
*/
remove_slide(handler: Function): void;
        /**
Removes the handler from the slideEnd event
*/
remove_slideEnd(handler: Function): void;
        /**
Add a handler to the ValueChange event
*/
add_valueChange(handler: Function): void;
        /**
Adds a handler to the slideRangeEnd event
*/
add_slideRangeEnd(handler: Function): void;
        /**
Removes the handler from the load event
*/
remove_load(handler: Function): void;
        /**
Remove a handler from the loaded event
*/
remove_loaded(handler: Function): void;
        /**
Removes the handler from the valueChanged event
*/
remove_valueChanged(handler: Function): void;
    }


    class RadSliderItem   {
        /**
Initializes a new instance of the Telerik.Web.UI.RadSliderItem class
@method
@returns 
*/
static Telerik(): void;
        /**
Gets the name of the currently applied CSS class to the item
@method
@returns The name of the currently applied CSS class to the item
*/
static get_cssClass(): string;
        /**
Gets a bool value, indicating whether the slider item is selected or not
@method
@returns The bool value
*/
static get_selected(): boolean;
        /**
Gets a reference to the parent slider [Telerik.Web.UI.RadSlider] object
@method
@returns The parent slider
*/
static get_slider(): Telerik.Web.UI.RadSlider;
        /**
Gets the wrapper element of the slider item
@method
@returns The wrapper element of the item
*/
static get_textElement(): any;
        /**
Gets the current text that is displayed as a tooltip when the mouse hovers over the item
@method
@returns The tooltip text
*/
static get_tooltip(): string;
        /**
Sets a CSS class to the slider item
@method
@param value - The name of the CSS class to be set
@returns 
*/
static set_cssClass(value: string): void;
        /**
Sets a text that will be displayed as a tooltip, when the mouse hovers over the item
@method
@param value - The tooltip text
@returns 
*/
static set_tooltip(value: string): void;
        /**
Sets a value indicating whether the slider item will be visible or not (uses the display CSS attribute)
@method
@param value - The value indicating whether the slider item will be visible or not
@returns 
*/
static set_visible(value: boolean): void;
    }


    class RadSlidingPane  extends Telerik.Web.UI.SplitterPaneBase {
        /**
Returns a reference to the HTML element, which represents the collapse icon of the sliding pane control
@method
@returns A reference to the HTML element
*/
getCollapseIconElement(): any;
        /**
Returns a reference to the HTML element, which holds the collapse icon of the sliding pane control
@method
@returns A reference to the HTML element
*/
getCollapseIconWrapperElement(): any;
        /**
Returns the HTML content of the sliding pane control
@method
@returns The HTML content of the sliding pane control
*/
getContent(): string;
        /**
Gets the HTML element, which is holding the pane content
@method
@returns The HTML element
*/
getContentContainer(): any;
        /**
Returns a reference to the HTML element, which represents the dock icon of the sliding pane control
@method
@returns A reference to the HTML element
*/
getDockIconElement(): any;
        /**
Returns a reference to the HTML element, which holds the dock icon of the sliding pane control
@method
@returns A reference to the HTML element
*/
getDockIconWrapperElement(): any;
        /**
Returns a reference to the title HTML element of the sliding pane control
@method
@returns A reference to the title HTML element of the sliding pane control
*/
getSlidingContainerTitle(): any;
        /**
Returns a reference to the resize HTML element of the sliding pane control
@method
@returns A reference to the resize HTML element of the sliding pane control
*/
getSlidingPaneResizeContainer(): any;
        /**
Returns a reference to the HTML element, which holds the tab of the sliding pane control
@method
@returns A reference to the HTML element
*/
getTabContainer(): any;
        /**
Returns a reference to the HTML element, which holds the undock icon of the sliding pane control
@method
@returns A reference to the HTML element
*/
getUnDockIconWrapperElement(): any;
        /**
Returns a reference to the HTML element, which represents the undock icon of the sliding pane control
@method
@returns A reference to the HTML element
*/
getUndockIconElement(): any;
        /**
Returns a value, indicating whether the sliding pane control will open in docked state
@method
@returns A value
*/
get_dockOnOpen(): boolean;
        /**
Returns a value, indicating whether the sliding pane is docked
@method
@returns A value
*/
get_docked(): boolean;
        /**
Returns a value, indicating whether the sliding pane control can be docked
@method
@returns A value
*/
get_enableDock(): boolean;
        /**
Returns a value, indicating whether the sliding pane control can be resized
@method
@returns A value
*/
get_enableResize(): boolean;
        /**
Returns a value, indicating whether the sliding pane is expanded
@method
@returns A value
*/
get_expanded(): boolean;
        /**
Returns the index of the sliding pane in the items collection of the sliding zone control
@method
@returns The index of the sliding pane in the items collection of the sliding zone control
*/
get_index(): number;
        /**
Returns a reference to the outer most HTML element of the pane control that is holding the sliding zone of the sliding pane control
@method
@returns a reference to the outer most HTML element of the pane control that is holding the sliding zone of the sliding pane control
*/
get_pane(): any;
        /**
Gets the bounds of the pane control that is holding the sliding zone of the sliding pane control in the form {width,height,x,y}
@method
@returns The bounds of the pane control that is holding the sliding zone of the sliding pane control in the form
*/
get_paneBounds(): any;
        /**
Returns a reference to the sliding zone control
@method
@returns A reference to the sliding zone control
*/
get_parent(): Telerik.Web.UI.RadSlidingZone;
        /**
Returns a reference to the pane control that contains the sliding zone of the sliding pane control
@method
@returns A reference to the pane control that contains the sliding zone of the sliding pane control
*/
get_parentPane(): Telerik.Web.UI.RadPane;
        /**
Gets the bounds of the sliding pane control in the form {width,height,x,y}
@method
@returns The bounds of the sliding pane control in the form
*/
get_slidingPaneBounds(): any;
        /**
Returns a reference to the splitter control
@method
@returns A reference to the splitter control
*/
get_splitter(): Telerik.Web.UI.RadSplitter;
        /**
Gets the title of the sliding pane control
@method
@returns The title of the sliding pane control
*/
get_title(): string;
        /**
Hides the tab for the sliding pane control
@method
@returns 
*/
hideTab(): void;
        /**
Returns true if the tab for this pane is displayed
@method
@returns A value
*/
isTabDisplayed(): boolean;
        /**
Sets the HTML content of the sliding pane control
@method
@param content - The new HTML content of the sliding pane control
@returns 
*/
setContent(content: string): void;
        /**
Sets the title of the sliding pane control
@method
@param value - The new title of the sliding pane control
@returns 
*/
set_title(value: string): void;
        /**
Shows the tab for the sliding pane control
@method
@returns 
*/
showTab(): void;
        /**
Adds a handler for the docked event
*/
add_docked(handler: Function): void;
        /**
Adds a handler for the docking event
*/
add_docking(handler: Function): void;
        /**
Adds a handler for the undocked event
*/
add_undocked(handler: Function): void;
        /**
Adds a handler for the undocking event
*/
add_undocking(handler: Function): void;
        /**
Removes a handler for the docked event
*/
remove_docked(handler: Function): void;
        /**
Removes a handler for the docking event
*/
remove_docking(handler: Function): void;
        /**
Removes a handler for the undocked event
*/
remove_undocked(handler: Function): void;
        /**
Removes a handler for the undocking event
*/
remove_undocking(handler: Function): void;
    }


    class RadSlidingZone  extends Telerik.Web.UI.RadWebControl {
        /**
Collapses the sliding pane with the given id
@method
@param paneId - The id of the sliding pane to collapse
@returns A value
*/
collapsePane(paneId: string): boolean;
        /**
Docks the sliding pane with the given id
@method
@param paneId - The id of the sliding pane to dock
@returns A value
*/
dockPane(paneId: string): boolean;
        /**
Expands the sliding pane with the given id
@method
@param paneId - The id of the sliding pane to expand
@returns A value
*/
expandPane(paneId: string): boolean;
        /**
Returns a reference to the sliding pane with the specified id
@method
@param paneId - The id of the sliding pane to search for
@returns A reference to the sliding pane with the specified id
*/
getPaneById(paneId: string): Telerik.Web.UI.RadSlidingPane;
        /**
Returns an array with all the sliding panes, defined in the items collection of the sliding zone control
@method
@returns An array with all the sliding panes
*/
getPanes(): any;
        /**
Returns a reference to the HTML element that holds all tab elements of sliding panes
@method
@returns A reference to the HTML element that holds all tab elements of sliding panes
*/
getTabsContainer(): any;
        /**
Gets the value of the ClickToOpen property of the sliding zone control
@method
@returns The value of the ClickToOpen property of the sliding zone control
*/
get_clickToOpen(): boolean;
        /**
Gets the ID of the currently docked sliding pane
@method
@returns The ID of the currently docked sliding pane
*/
get_dockedPaneId(): string;
        /**
Gets the ID of the currently expanded sliding pane
@method
@returns The ID of the currently expanded sliding pane
*/
get_expandedPaneId(): string;
        /**
Gets the height of the sliding zone control
@method
@returns The height of the sliding zone control
*/
get_height(): number;
        /**
Returns a reference to the pane control, which holds the sliding zone control
@method
@returns A reference to the pane control
*/
get_parent(): Telerik.Web.UI.RadPane;
        /**
Gets the value of the ResizeStep property of the sliding zone control
@method
@returns The value of the ResizeStep property of the sliding zone control
*/
get_resizeStep(): number;
        /**
Gets the value of the SlideDuration property of the sliding zone control
@method
@returns The value of the SlideDuration property of the sliding zone control
*/
get_slideDuration(): number;
        /**
Returns a reference to the splitter control, which holds the sliding zone control
@method
@returns A reference to the splitter control
*/
get_splitter(): Telerik.Web.UI.RadSplitter;
        /**
Gets the width of the sliding zone control
@method
@returns The width of the sliding zone control
*/
get_width(): number;
        /**
Returns a value, indicating whether the SlideDirection of the sliding zone control is bottom
@method
@returns A value
*/
isBottomDirection(): boolean;
        /**
Returns a value, indicating whether the SlideDirection of the sliding zone control is left
@method
@returns A value
*/
isLeftDirection(): boolean;
        /**
Returns a value, indicating whether the SlideDirection of the sliding zone control is right
@method
@returns A value
*/
isRightDirection(): boolean;
        /**
Returns a value, indicating whether the SlideDirection of the sliding zone control is top
@method
@returns A value
*/
isTopDirection(): boolean;
        /**
Undocks the sliding pane with the given id
@method
@param paneId - The id of the sliding pane to undock
@returns A value
*/
undockPane(paneId: string): boolean;
        /**
Adds a handler for the load event
*/
add_load(handler: Function): void;
        /**
Removes a handler for the load event
*/
remove_load(handler: Function): void;
    }


    class RadSocialShare  extends Telerik.Web.UI.RadWebControl {
        /**
Returns the web property ID set for Google Analytics support.
@method
@returns 
*/
get_gaID(): string;
        /**
Sets a value which determines whether IFRAMEs are hidden while email or compact popup is being moved.
@method
@param value - 
@returns 
*/
set_hideIframesOnDialogMove(value: boolean): void;
        /**
Dynamically sets new values for url and title to share.
@method
@param url - 
@param title - 
@returns 
*/
set_stringsToShare(url: string, title: string): void;
        /**
Returns the Facebook Application ID.
@method
@returns 
*/
get_fbAppId(): string;
        /**
Returns the compact popup object.
@method
@returns 
*/
get_compactPopup(): Telerik.Web.UI.RadWindow;
        /**
Returns the Id of the tracker for the RadSocialShare instance.
@method
@returns 
*/
get_trackerId(): string;
        /**
Returns a value which determines whether IFRAMEs are hidden while email or compact popup is being moved.
@method
@returns 
*/
get_hideIframesOnDialogMove(): boolean;
        /**
Sets the Facebook Application ID.
@method
@param value - 
@returns 
*/
set_fbAppId(value: string): void;
        /**
Toggles the visibility of the compact popup.
@method
@returns 
*/
toggleCompactPopup(): void;
        /**
Returns the array of main buttons.
@method
@returns 
*/
get_mainButtons(): any;
        /**
Toggles the visibility of the email popup.
@method
@returns 
*/
toggleEmailPopup(): void;
        /**
Returns the email popup object.
@method
@returns 
*/
get_emailPopup(): Telerik.Web.UI.RadWindow;
        /**
Returns the url to share value.
@method
@returns 
*/
get_urlToShare(): string;
        /**
Returns the title to share value.
@method
@returns 
*/
get_titleToShare(): string;
        /**
Returns the array of compact buttons.
@method
@returns 
*/
get_compactButtons(): any;
        /**
Sets the web property ID set for Google Analytics support.
@method
@param value - 
@returns 
*/
set_gaID(value: string): void;
        /**
Returns value which shows whether Google Analytics is enabled.
@method
@returns 
*/
get_gaEnabled(): boolean;
    }


    class RadSpell   {
        /**
Gets the ID of the control to spell check.
@method
@returns 
*/
get_controlToCheck(): void;
        /**
Sets the ID of the control to spell check.
@method
@returns 
*/
set_controlToCheck(): void;
        /**
Returns the instance of the client-side DialogOpener object that handles that dialog opening/parameter passing processes.
@method
@returns 
*/
get_dialogOpener(): void;
        /**
Sets the instance of the client-side DialogOpener object.
@method
@returns 
*/
set_dialogOpener(): void;
        /**
Gets the dictionary language culture code.
@method
@returns 
*/
get_dictionaryLanguage(): void;
        /**
Sets the dictionary language culture code.
@method
@returns 
*/
set_dictionaryLanguage(): void;
        /**
Gets the language currently selected in the drop down displayed when the SupportedLanguages language property is set.
@method
@returns 
*/
get_selectedLanguage(): void;
        /**
OnClientCheckFinished
@method
@returns 
*/
get_spellChecked(): void;
        /**
Sets whether the spellcheck process is completed (true) or not (false). Note: Should not be used directly. It is used by the spellcheck validator.
@method
@returns 
*/
set_spellChecked(): void;
        /**
Returns the reference to the instance of the TextSource object that RadSpell is attached to.
@method
@returns 
*/
get_textSource(): void;
        /**
Attaches a custom TextSource object to the RadSpell object.
@method
@returns 
*/
set_textSource(): void;
        /**
Launch the spellcheck process for the provided TextSource.
@method
@returns 
*/
spellCheck(): void;
        /**
Launch the spellcheck process
@method
@returns 
*/
startSpellCheck(): void;
        /**
Add a handler to the OnClientCheckCancelled event
*/
add_clientCheckCancelled(handler: Function): void;
        /**
Add a handler to the OnClientCheckFinished event
*/
add_clientCheckFinished(handler: Function): void;
        /**
Add a handler to the OnClientCheckStarted event
*/
add_clientCheckStarted(handler: Function): void;
        /**
Add a handler to the OnClientDialogClosing event
*/
add_clientDialogClosing(handler: Function): void;
        /**
Remove a handler from the OnClientCheckCancelled event
*/
remove_clientCheckCancelled(handler: Function): void;
        /**
Remove a handler from the ClientCheckFinished event
*/
remove_clientCheckFinished(handler: Function): void;
        /**
Remove a handler from the ClientCheckStarted event
*/
remove_clientCheckStarted(handler: Function): void;
        /**
Remove a handler from the ClientDialogClosing event
*/
remove_clientDialogClosing(handler: Function): void;
    }


    class RadSplitBar  extends Telerik.Web.UI.RadWebControl {
        /**
Returns a reference to the HTML element of the collapse button for the specified direction
@method
@param direction - The collapse direction of the button
@returns A reference to the HTML element of the collapse button for the specified direction
*/
getCollapseBarElement(direction: Telerik.Web.UI.SplitterDirection): any;
        /**
Returns the outer height of the splitbar control
@method
@returns The outer height of the splitbar control
*/
getHeight(): number;
        /**
Returns the outer width of the splitbar control
@method
@returns The outer width of the splitbar control
*/
getWidth(): number;
        /**
Returns the value of the CollapseMode property of the splitbar control
@method
@returns The value of the CollapseMode property of the splitbar control
*/
get_collapseMode(): Telerik.Web.UI.SplitBarCollapseMode;
        /**
Returns the value of the EnableResize property of the splitbar control
@method
@returns The value of the EnableResize property of the splitbar control
*/
get_enableResize(): boolean;
        /**
Returns the index of the splitbar in the items collection of the splitter control
@method
@returns The index of the splitbar in the items collection of the splitter control
*/
get_index(): number;
        /**
Returns a reference to the pane control with the smallest index in the items collection of the splitter, which is added to the collection after the splitbar control
@method
@returns A reference to the pane control with the smallest index in the items collection of the splitter
*/
get_nextPane(): Telerik.Web.UI.RadPane;
        /**
Returns a reference to the splitter control
@method
@returns A reference to the splitter control
*/
get_parent(): Telerik.Web.UI.RadSplitter;
        /**
Returns a reference to the pane control with the largest index in the items collection of the splitter, which is added to the collection before the splitbar control
@method
@returns A reference to the pane control with the largest index in the items collection of the splitter
*/
get_prevPane(): Telerik.Web.UI.RadPane;
        /**
Returns the value of the ResizeStep property of the splitbar control
@method
@returns The value of the ResizeStep property of the splitbar control
*/
get_resizeStep(): number;
        /**
Returns a reference to the splitter control
@method
@returns A reference to the splitter control
*/
get_splitter(): Telerik.Web.UI.RadSplitter;
        /**
Returns a value, indicating whether the collapse direction is enabled for the splitbar control
@method
@param direction - The collapse direction to check
@returns A value
*/
isCollapseDirectionEnabled(direction: Telerik.Web.UI.SplitterDirection): boolean;
        /**
Returns a value, indicating whether the splitbar is collapsed in the specified direction
@method
@param direction - The collapse direction to check
@returns A value
*/
isCollapsed(direction: Telerik.Web.UI.SplitterDirection): boolean;
    }


    class RadSplitter  extends Telerik.Web.UI.RadWebControl {
        /**
Returns the TABLE element of the splitter control
@method
@returns The TABLE element of the splitter control
*/
getContainerElement(): any;
        /**
Gets the last pane in the items collection of the splitter control
@method
@returns The last pane in the items collection of the splitter control
*/
getEndPane(): Telerik.Web.UI.RadPane;
        /**
Returns the height of the splitter control, excluding borders of the splitter
@method
@returns The height of the splitter control
*/
getInnerHeight(): number;
        /**
Returns the width of the splitter control, excluding borders of the splitter
@method
@returns The width of the splitter control
*/
getInnerWidth(): number;
        /**
Returns the sum of the maximum possible height of a range of the panes in the items collection of the splitter control
@method
@param startPaneIndex - The index of the first pane to include in the sum. In case the parameter is not specified
@param endPaneIndex - The index of the last pane to include in the sum. In case the parameter is not specified
@returns The sum of the maximum possible height of a range of the panes in the items collection of the splitter control
*/
getMaxHeight(startPaneIndex: number, endPaneIndex: number): number;
        /**
Returns the sum of the maximum possible width of a range of the panes in the items collection of the splitter control
@method
@param startPaneIndex - The index of the first pane to include in the sum. In case the parameter is not specified
@param endPaneIndex - The index of the last pane to include in the sum. In case the parameter is not specified
@returns The sum of the maximum possible width of a range of the panes in the items collection of the splitter control
*/
getMaxWidth(startPaneIndex: number, endPaneIndex: number): number;
        /**
Returns the sum of the minimum possible height of a range of the panes in the items collection of the splitter control
@method
@param startPaneIndex - The index of the first pane to include in the sum. In case the parameter is not specified
@param endPaneIndex - The index of the last pane to include in the sum. In case the parameter is not specified
@returns The sum of the minimum possible height of a range of the panes in the items collection of the splitter control
*/
getMinHeight(startPaneIndex: number, endPaneIndex: number): number;
        /**
Returns the sum of the minimum possible width of a range of the panes in the items collection of the splitter control
@method
@param startPaneIndex - The index of the first pane to include in the sum. In case the parameter is not specified
@param endPaneIndex - The index of the last pane to include in the sum. In case the parameter is not specified
@returns The sum of the minimum possible width of a range of the panes in the items collection of the splitter control
*/
getMinWidth(startPaneIndex: number, endPaneIndex: number): number;
        /**
Returns the pane with the specified id in the panes collection of the splitter control
@method
@param paneID - The id of the pane to search for
@returns The pane with the specified id in the panes collection of the splitter control
*/
getPaneById(paneID: string): Telerik.Web.UI.RadPane;
        /**
Returns the pane with the specified index in the panes collection of the splitter control
@method
@param paneIndex - The index of the pane to search for
@returns The pane with the specified index in the panes collection of the splitter control
*/
getPaneByIndex(paneIndex: number): Telerik.Web.UI.RadPane;
        /**
Returns an array with all the panes, defined in the items collection of the splitter control
@method
@returns An array with all the panes
*/
getPanes(): any;
        /**
Returns the splitbar with the specified id in the splitbars collection of the splitter control
@method
@param splitBarID - The id of the splitbar to search for
@returns The splitbar with the specified id in the splitbars collection of the splitter control
*/
getSplitBarById(splitBarID: string): Telerik.Web.UI.RadSplitBar;
        /**
Returns the splitbar with the specified index in the splitbars collection of the splitter control
@method
@param index - The index of the splitbar to search for
@returns The splitbar with the specified index in the splitbars collection of the splitter control
*/
getSplitBarByIndex(index: number): Telerik.Web.UI.RadSplitBar;
        /**
Returns an array with all the splitbars, defined in the items collection of the splitter control
@method
@returns An array with all the splitbars
*/
getSplitBars(): any;
        /**
Gets the first pane in the items collection of the splitter control
@method
@returns The first pane in the items collection of the splitter control
*/
getStartPane(): Telerik.Web.UI.RadPane;
        /**
Gets the size of the borders in the splitter control
@method
@returns The size of the borders in the splitter control
*/
get_borderSize(): number;
        /**
Gets the height in pixels of the splitter control
@method
@returns The height in pixels of the splitter control
*/
get_height(): number;
        /**
Gets the value of the HeightOffset property of the splitter control
@method
@returns The value of the HeightOffset property of the splitter control
*/
get_heightOffset(): number;
        /**
Returns a value, indicating whether the panes of the splitter control will resize while the user is dragging the splitbar control or when the user releases the splitbar control
@method
@returns A value
*/
get_liveResize(): boolean;
        /**
Gets a reference to the first parent RadPane object of the splitter control, in case the ResizeWithParentPane property of the splitter is set to true
@method
@returns 
*/
get_parent(): Telerik.Web.UI.RadPane;
        /**
Gets the resize mode of the splitter control
@method
@returns The resize mode of the splitter
*/
get_resizeMode(): Telerik.Web.UI.SplitterResizeMode;
        /**
Gets the size of the splitbar controls in the splitter control
@method
@returns The size of the splitbar controls in the splitter control
*/
get_splitBarSize(): number;
        /**
Gets the width in pixels of the splitter control
@method
@returns The width in pixels of the splitter control
*/
get_width(): number;
        /**
Returns a value, indicating whether the splitter is nested in a RadPane control and its ResizeWithParentPane property is set to true
@method
@returns A value
*/
isNested(): boolean;
        /**
Returns a value, indicating whether the Orientation of the splitter control is Telerik.Web.UI.Orientation.Vertical
@method
@returns A value
*/
isVertical(): boolean;
        /**
Repaints the splitter control and forces it to recalculate the size of its elements
@method
@returns 
*/
repaint(): void;
        /**
Resizes the splitter control to the specified width and height
@method
@param width - The new width in pixels for the splitter control
@param height - The new height in pixels for the splitter control
@returns 
*/
resize(width: number, height: number): void;
        /**
Sets the height of the splitter control
@method
@param value - The new height for the splitter control
@returns 
*/
set_height(value: string): void;
        /**
Sets the width of the splitter control
@method
@param value - The new width for the splitter control
@returns 
*/
set_width(value: string): void;
        /**
Adds a handler for the load event
*/
add_load(handler: Function): void;
        /**
Adds a handler for the resized event
*/
add_resized(handler: Function): void;
        /**
Adds a handler for the resizing event
*/
add_resizing(handler: Function): void;
        /**
Removes a handler for the load event
*/
remove_load(handler: Function): void;
        /**
Removes a handler for the resized event
*/
remove_resized(handler: Function): void;
        /**
Removes a handler for the resizing event
*/
remove_resizing(handler: Function): void;
    }


    class RadTab  extends Telerik.Web.UI.ControlItem {
        /**
Gets the image DOM element of the tab (rtsImg).
@method
@returns The DOM element of the tab image
*/
get_imageElement(): HTMLElement;
        /**
Gets a value indicating if the tab is visible.
@method
@returns 
*/
get_visible(): boolean;
        /**
Sets a value indicating if the tab is a separator
@method
@param value - A value indicating if the tab is a separator
@returns 
*/
set_isSeparator(value: boolean): void;
        /**
Returns the next sibling
@method
@returns The next tab
*/
get_nextTab(): Telerik.Web.UI.RadTab;
        /**
Unselects the tab.
@method
@returns 
*/
unselect(): void;
        /**
Returns an instance of the parent object. RadTabStrip if this is a root tab, RadTab if it is a child tab.
@method
@returns 
*/
get_parent(): any;
        /**
Gets the DOM element that contains the tab text (rtsTxt).
@method
@returns The DOM element that contains the tab text
*/
get_textElement(): HTMLElement;
        /**
Gets the outer wrap DOM element of tab (rtsOut)
@method
@returns The outer wrap DOM element
*/
get_outerWrapElement(): HTMLElement;
        /**
Returns the ID of the associated pageview, if any.
@method
@returns 
*/
set_pageViewID(): string;
        /**
Sets the URL of the Web page the tab navigates to
@method
@param value - The URL of the Web page the tab navigates to
@returns 
*/
set_navigateUrl(value: string): void;
        /**
Sets the URL to an image which is displayed next to the text of a tab when it is selected.
@method
@param value - The URL to an image which is displayed next to the text of a tab when it is selected.
@returns 
*/
set_selectedImageUrl(value: string): void;
        /**
Sets a value indicating if the tab is selected.
@method
@param value - A value indicating if the tab is selected
@returns 
*/
set_selected(value: boolean): void;
        /**
Returns whether the tab is selected.
@method
@returns 
*/
get_selected(): boolean;
        /**
Gets the URL to an image which is displayed next to the text of a tab when it is hovered.
@method
@returns The URL to an image which is displayed next to the text of a tab when it is hovered.
*/
get_hoveredImageUrl(): string;
        /**
Shows the tab if it was hidden.
@method
@returns 
*/
show(): void;
        /**
Gets the DOM element of the level wrapper (rtsLevel)
@method
@returns The DOM element of the level wrapper
*/
get_levelElement(): HTMLElement;
        /**
Gets the CSS class name to be set to the tab.
@method
@returns The CSS class name to be set to the tab.
*/
get_cssClass(): string;
        /**
Enables the tab if it is disabled.
@method
@returns 
*/
enable(): void;
        /**
Sets the selected child tab index to the specified value
@method
@param value - The selected child tab index
@returns 
*/
set_selectedIndex(value: number): void;
        /**
Returns true if the tab is a separator; false for other tabs
@method
@returns 
*/
get_isSeparator(): boolean;
        /**
Gets the level of the tab. Root level tabs are first level.
@method
@returns 
*/
get_level(): number;
        /**
Gets the URL of the Web page the tab navigates to.
@method
@returns 
*/
get_navigateUrl(): string;
        /**
Gets the target window or frame in which to display the Web page content associated with the current tab.
@method
@returns The target window or frame in which to display the Web page content associated with the current tab
*/
get_target(): string;
        /**
Sets the Value property of the tab.
@method
@param stringvalue - 
@returns 
*/
set_value(stringvalue: any): any;
        /**
Gets the tab list (rtsUL) DOM element.
@method
@returns 
*/
get_childListElement(): HTMLElement;
        /**
Gets the index of the selected child tab, if any
@method
@returns The index of the selected child tab
*/
get_selectedIndex(): number;
        /**
Gets the inner wrap DOM element of tab (rtsIn)
@method
@returns The inner wrap DOM element
*/
get_innerWrapElement(): HTMLElement;
        /**
Gets a value indicating whether clicking on the tab will postback
@method
@returns true if the node should postback
*/
get_postBack(): boolean;
        /**
Sets the URL to an image which is displayed next to the text of a tab when it is hovered.
@method
@param value - The URL to an image which is displayed next to the text of a tab when it is hovered.
@returns 
*/
set_hoveredImageUrl(value: string): void;
        /**
Returns a collection of child tabs.
@method
@returns 
*/
get_tabs(): Telerik.Web.UI.RadTabCollection;
        /**
Returns the previous sibling
@method
@returns The previous tab
*/
get_previousTab(): Telerik.Web.UI.RadTab;
        /**
Returns the pageview associated with the tab.
@method
@returns 
*/
get_pageView(): Telerik.Web.UI.RadPageView;
        /**
Selects the tab.
@method
@returns 
*/
select(): void;
        /**
Sets the CSS class name to be added when the tab is hovered.
@method
@param value - The CSS class name to be added when the tab is hovered.
@returns 
*/
set_hoveredCssClass(value: string): void;
        /**
Gets the CSS class name to be added when the tab is selected.
@method
@returns The CSS class name to be added when the tab is selected.
*/
get_selectedCssClass(): string;
        /**
Returns the text of the tab.
@method
@returns 
*/
get_text(): any;
        /**
Gets the URL to an image which is displayed next to the text of a tab.
@method
@returns The URL to an image which is displayed next to the text of a tab.
*/
get_imageUrl(): string;
        /**
Returns the instance of the tabstrip that contains the tab.
@method
@returns 
*/
get_tabStrip(): Telerik.Web.UI.RadTabStrip;
        /**
Sets the target window or frame in which to display the Web page content associated with the current tab
@method
@param value - The target window or frame in which to display the Web page content associated with the current tab
@returns 
*/
set_target(value: string): void;
        /**
Returns the ID of the pageview.
@method
@returns 
*/
get_pageViewID(): string;
        /**
Scrolls to the tab into view.
@method
@returns 
*/
scrollIntoView(): void;
        /**
Causes server side click to occur.
@method
@returns 
*/
click(): void;
        /**
Hides the tab.
@method
@returns 
*/
hide(): void;
        /**
Gets the CSS class name to be added when the tab is disabled.
@method
@returns The CSS class name to be added when the tab is disabled.
*/
get_disabledCssClass(): string;
        /**
Gets the selected tab instance, if any
@method
@returns The selected tab instance
*/
get_selectedTab(): Telerik.Web.UI.RadTab;
        /**
Selects all parents of this tab
@method
@returns 
*/
selectParents(): void;
        /**
Sets the CSS class name to be set to the tab.
@method
@param value - The CSS class name to be set to the tab.
@returns 
*/
set_cssClass(value: string): void;
        /**
Sets a value indicating whether clicking on the tab will postback
@method
@param value - true if the node should postback
@returns 
*/
set_postBack(value: boolean): void;
        /**
Sets a value indicating if the tab is enabled.
@method
@param value - A value indicating if the tab is enabled
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the URL to an image which is displayed next to the text of a tab.
@method
@param value - The URL to an image which is displayed next to the text of a tab.
@returns 
*/
set_imageUrl(value: string): void;
        /**
Same as get_isEnabled.
@method
@returns 
*/
get_enabled(): boolean;
        /**
Returns the Value property of the tab.
@method
@returns 
*/
get_value(): any;
        /**
Returns the next sibling of the tab. If the tab is last, returns null.
@method
@returns 
*/
get_nextSibling(): Telerik.Web.UI.RadTab;
        /**
Disables the tab.
@method
@returns 
*/
disable(): void;
        /**
Sets a value indicating if the tab is visible.
@method
@param value - A value indicating if the tab is visible
@returns 
*/
set_visible(value: boolean): void;
        /**
Sets the CSS class name to be added when the tab is disabled.
@method
@param value - The CSS class name to be added when the tab is disabled.
@returns 
*/
set_disabledCssClass(value: string): void;
        /**
Gets the root DOM element of the tab (LI).
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Gets the CSS class name to be added when the tab is hovered.
@method
@returns The CSS class name to be added when the tab is hovered.
*/
get_hoveredCssClass(): string;
        /**
Sets a value indicating if the next tab will be displayed on a new line
@method
@param value - true if the next tab should be displayed on a new line
@returns 
*/
set_isBreak(value: boolean): void;
        /**
Gets the anchor DOM element of the tab (rtsLink).
@method
@returns The anchor DOM element of the tab
*/
get_linkElement(): HTMLElement;
        /**
Gets a value indicating whether the next tab will be displayed on a new line
@method
@returns 
*/
get_isBreak(): boolean;
        /**
Sets the text of the tab.
@method
@param stringtext - 
@returns 
*/
set_text(stringtext: any): any;
        /**
Gets the zero based index of the tab inside the parent tabs collection.
@method
@returns 
*/
get_index(): number;
        /**
Sets the CSS class name to be added when the tab is selected.
@method
@param value - The CSS class name to be added when the tab is selected.
@returns 
*/
set_selectedCssClass(value: string): void;
        /**
Sets the URL to an image which is displayed next to the text of a tab when it is disabled.
@method
@param value - The URL to an image which is displayed next to the text of a tab when it is disabled.
@returns 
*/
set_disabledImageUrl(value: string): void;
        /**
Gets the URL to an image which is displayed next to the text of a tab when it is disabled.
@method
@returns The URL to an image which is displayed next to the text of a tab when it is disabled.
*/
get_disabledImageUrl(): string;
        /**
Returns true if both the tab and the tabstrip are enabled. If one of them is disabled, get_isEnabled() will return false.
@method
@returns 
*/
get_isEnabled(): boolean;
        /**
Gets the URL to an image which is displayed next to the text of a tab when it is selected.
@method
@returns The URL to an image which is displayed next to the text of a tab when it is selected.
*/
get_selectedImageUrl(): string;
    }


    class RadTabCollection   extends Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.RadTab> {
        /**
Removes the tab at the specified index.
@method
@param int - 
@returns 
*/
removeAt(int: any): any;
        /**
adds tab to the RadTabCollection.
@method
@param item - 
@returns 
*/
static add(item: Telerik.Web.UI.RadTab): void;
        /**
Initializes a new instance of RadTabStrip tabs collection
@method
@returns 
*/
static Telerik(): void;
        /**
Returns the index of a tab.
@method
@param RadTab - 
@returns 
*/
indexOf(RadTab: Telerik.Web.UI.RadTab): any;
        /**
Returns the tab from the collection that resides at the specified index.
@method
@param index - The index from which to retrieve tha tab
@returns 
*/
static getTab(index: number): Telerik.Web.UI.RadTab;
        /**
Clears the Tabs collection of all the child tabs it contains.
@method
@returns 
*/
clear(): any;
        /**
Returns the number of the tabs in the collection.
@method
@returns 
*/
get_count(): any;
        /**
Returns the tab from the collection that resides at the specified index.
@method
@param int - 
@returns 
*/
getTab(int: any): Telerik.Web.UI.RadTab;
    }


    class RadTabStrip  extends Telerik.Web.UI.ControlItemContainer {
        /**
Returns the first RadTab object whose Text property is equal to the passed parameter.
@method
@param text - Text to find
@returns The first RadTab instance with matching text
*/
findTabByText(text: string): Telerik.Web.UI.RadTab;
        /**
Checks if the orientation of the RadTabStrip is vertical (Orientation can be Horizontal and Vertical).
@method
@returns true if the orientation is vertical
*/
isVertical(): boolean;
        /**
Begins tracking changes to the RadTabStrip items. Only changes to the items that occur between a call to trackChanges and commitChanges persist after a postback.
@method
@returns 
*/
trackChanges(): void;
        /**
Returns the collection of custom attributes for the tab strip.
@method
@returns 
*/
get_attributes(): any;
        /**
Checks if the orientation of the RadTabStrip is horizontal (Orientation can be Horizontal and Vertical).
@method
@returns true if the orientation is horizontal
*/
isHorizontal(): boolean;
        /**
Sets a boolean value indicating whether the RadTabStrip causes validation.
@method
@param value - value
@returns 
*/
set_causesValidation(value: boolean): void;
        /**
Gets a value indicating whether the tabstrip should postback when the user clicks the currently selected tab.
@method
@returns A value indicating whether the tabstrip should postback when the user clicks the currently selected tab
*/
get_clickSelectedTab(): boolean;
        /**
Gets the DOM element for the tab strip.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Returns the first;RadTab object whose NavigateUrl property is equal to the passed parameter.
@method
@param value - The navigateUrl to find
@returns The first RadTab instance with matching navigateUrl
*/
findTabByUrl(value: string): Telerik.Web.UI.RadTab;
        /**
True if the tab strip is enabled. To enable a tab strip, use the enable() or set_enabled(true) methods.
@method
@returns 
*/
get_enabled(): any;
        /**
Returns the root level selected tab. Null if no root tab has been selected.
@method
@returns The selected root tab
*/
get_selectedTab(): Telerik.Web.UI.RadTab;
        /**
Saves the client state to the client state hidden field.
@method
@returns 
*/
saveClientState(): void;
        /**
Returns the first RadTab instance whose NavigateUrl property is equal to the passed parameter. Note that the parameter should end with "/" like "http://www.test.com/"
@method
@param value - The absolute Url to find
@returns The RadTab instance with matching absolute Url
*/
findTabByAbsoluteUrl(value: string): Telerik.Web.UI.RadTab;
        /**
Returns the first RadTab object with a custom attribute of the specified name that has the specified value.
@method
@param attributeName - The attribute name to search for
@param attributeValue - The attribute value to search for
@returns The first RadTab instance with matching attribute
*/
findTabByAttribute(attributeName: string, attributeValue: string): Telerik.Web.UI.RadTab;
        /**
Gets the name of the validation group to which the RadTabStrip belongs.
@method
@returns The name of the validation group.
*/
get_validationGroup(): string;
        /**
Enables or disables all tabs in the tab strip.
@method
@param value - true to enable the tab strip
@returns 
*/
set_enabled(value: boolean): void;
        /**
Ends tracking changes to the tabs. Only changes to the tabs that occur between a call to trackChanges and commitChanges persist after a postback.
@method
@returns 
*/
commitChanges(): void;
        /**
Gets a collection of all tabs. This includes all root and child tabs in the tab strip.
@method
@returns An array of all tabs
*/
get_allTabs(): any;
        /**
Returns the ID of the associated RadMultiPage, if any.
@method
@returns 
*/
get_multiPageID(): string;
        /**
Sets a value indicating whether the tabstrip should postback when the user clicks the currently selected tab.
@method
@param value - A value indicating whether the tabstrip should postback when the user clicks the currently selected tab
@returns 
*/
set_clickSelectedTab(value: boolean): void;
        /**
Disables all tabs in the tab strip. Clicking on any tab has no effect, child tabs cannot be opened.
@method
@returns 
*/
disable(): void;
        /**
Sets a value determining whether child tabs are unselected when a parent tab is unselected.
@method
@param value - true if child tabs are unselected when a parent tab is unselected
@returns 
*/
set_unselectChildren(value: boolean): void;
        /**
Sets the name of the validation group to which the RadTabStrip belongs.
@method
@param value - value
@returns 
*/
set_validationGroup(value: string): void;
        /**
Gets the DOM element of the root level wrapper (rtsLevel)
@method
@returns The DOM element of the root level wrapper
*/
get_levelElement(): HTMLElement;
        /**
Returns the first RadTab object whose Value property is equal to the passed parameter.
@method
@param value - Value to find
@returns The first RadTab instance with matching value
*/
findTabByValue(value: string): Telerik.Web.UI.RadTab;
        /**
Sets the ID of the associated RadMultiPage.
@method
@param value - The ID of the associated RadMultiPage
@returns 
*/
set_multiPageID(value: string): void;
        /**
Enables all tabs in the tab strip.
@method
@returns 
*/
enable(): void;
        /**
Gets a value determining whether child tabs are unselected when a parent tab is unselected.
@method
@returns true if child tabs are unselected when a parent tab is unselected. false if the tabs persist their state even when hidden. The default value is false.
*/
get_unselectChildren(): boolean;
        /**
Gets a collection of the indexes of all selected tabs.
@method
@returns an array with the indexes of all selected tabs.
*/
get_selectedIndexes(): any;
        /**
Refreshes the RadTabStrip UI
@method
@returns 
*/
repaint(): void;
        /**
Gets the root tab list (rtsUL) DOM element.
@method
@returns 
*/
get_childListElement(): HTMLElement;
        /**
Returns the index of the currently selected root tab
@method
@returns The index of the currently selected root tab
*/
get_selectedIndex(): string;
        /**
Gets a value indicating whether the RadTabStrip causes validation.
@method
@returns true or false
*/
get_causesValidation(): boolean;
        /**
Returns a collection of root level tabs.
@method
@returns 
*/
get_tabs(): Telerik.Web.UI.RadTabCollection;
        /**
Gets the RadMultiPage instance associated with this tab strip
@method
@returns The RadMultiPage instance associated with this tab strip
*/
get_multiPage(): Telerik.Web.UI.RadMultiPage;
        /**
Client-Side Events
*/
add_event(handler: Function): void;
    }


    class RadTagCloud  extends Telerik.Web.UI.RadWebControl {
        /**
Creates, renders a new RadTagCloudItem item and inserts it in the get_items Array.
@method
@param radTagCloudItemData - 
@param index - The index of the get_items Array where the item should be inserted.
@returns 
*/
addTagCloudItem(radTagCloudItemData: any, index: number): void;
        /**
Data binds the data of the RadTagCloud.
@method
@returns 
*/
dataBind(): void;
        /**
Gets whether data bound items will be appended to the TagCloud.
@method
@returns 
*/
get_appendClientDataBoundItems(): boolean;
        /**
Gets the RadClientDataSource that is associated with the TagCloud.
@method
@returns 
*/
get_clientDataSource(): Telerik.Web.UI.RadClientDataSource;
        /**
Gets the ID of the RadClientDataSource that is associated with the TagCloud.
@method
@returns 
*/
get_clientDataSourceID(): number;
        /**
Returns the UL DOM element that wraps all tagCloud's items.
@method
@returns The UL DOM element that wraps all the tagCloud
*/
get_containerElement(): any;
        /**
Gets the data source of the TagCloud.
@method
@returns 
*/
get_dataSource(): any;
        /**
Returns a value of type Telerik.Web.UI.TagCloudDistribution that indicates how the font-size is distributed among the different items.
@method
@returns Returns a value that indicates how the font
*/
get_distribution(): Telerik.Web.UI.TagCloudDistribution;
        /**
Returns a value, indicating whether the tagCloud control is enabled.
@method
@returns The value indicating whether the tagCloud control is enabled.
*/
get_enabled(): boolean;
        /**
Returns the height of the tagCloud control.
@method
@returns The height of the tagCloud control.
*/
get_height(): number;
        /**
Returns an array of the tagCloud's items. The items are of type Telerik.Web.UI.RadTagCloudItem.
@method
@returns Returns an array of the tagCloud
*/
get_items(): any;
        /**
Returns a value of type Telerik.Web.UI.TagCloudSorting that indicates how the items are sorted.
@method
@returns Returns a value that indicates how keywords are sorted.
*/
get_sorting(): Telerik.Web.UI.TagCloudSorting;
        /**
Returns the target window or frame to display the new content when the TagCloud item is clicked.
@method
@returns The target window or frame to display the new content when the TagCloud item is clicked.
*/
get_target(): string;
        /**
Returns the width of the tagCloud control.
@method
@returns The width of the tagCloud control.
*/
get_width(): number;
        /**
Removes a RadTagCloudItem item.
@method
@param tagCloudItem - The item to be removed.
@param repaintItems - Call repaint arter the item is removed. The default is true.
@returns 
*/
removeTagCloudItem(tagCloudItem: Telerik.Web.UI.RadTagCloudItem, repaintItems: boolean): void;
        /**
Redraws the TagCloud control.
@method
@returns 
*/
repaint(): void;
        /**
Initiates RadTagCloudItem items request with a specified argument, causing the request to be sent to a WebService. All current items will be removed,before the new ones are populated.
@method
@param argument - The string which is sent as an argument to the Web service method
@returns 
*/
requestItems(argument: string): void;
        /**
Sets whether data bound items will be appended to the TagCloud.
@method
@param value - 
@returns 
*/
set_appendClientDataBoundItems(value: boolean): void;
        /**
Sets the ID of the RadClientDataSource that is associated with the TagCloud.
@method
@param id - 
@returns 
*/
set_clientDataSourceID(id: number): void;
        /**
Sets a custom data source for the RadTagCloud.
@method
@param data - 
@returns 
*/
set_dataSource(data: any): void;
        /**
Sets a bool value indicating whether the tagCloud is enabled.
@method
@param value - The value to set.
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the target window or frame to display the new content when the TagCloud item is clicked.
@method
@param value - The target to set.
@returns 
*/
set_target(value: string): void;
        /**
Adds a handler for the itemClicked even of the tagCloud control.
*/
add_itemClicked(handler: Function): void;
        /**
Adds a handler for the itemClicking event of the tagCloud control.
*/
add_itemClicking(handler: Function): void;
        /**
Adds a handler to the load event of the tagCloud control.
*/
add_load(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the itemClicked event.
*/
remove_itemClicked(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the itemClicking event.
*/
remove_itemClicking(handler: Function): void;
        /**
Removes the handler from the handlers collection that is associated with the load event.
*/
remove_load(handler: Function): void;
    }


    class RadTagCloudItem  extends Telerik.Web.UI.RadWebControl {
        /**

@method
@returns 
*/
createAnchor(): void;
        /**

@method
@returns 
*/
get_accessKey(): void;
        /**

@method
@returns 
*/
get_anchorElement(): void;
        /**

@method
@returns 
*/
get_index(): void;
        /**

@method
@returns 
*/
get_navigateUrl(): void;
        /**

@method
@returns 
*/
get_rowIndex(): void;
        /**

@method
@returns 
*/
get_tabIndex(): void;
        /**

@method
@returns 
*/
get_text(): void;
        /**

@method
@returns 
*/
get_toolTip(): void;
        /**

@method
@returns 
*/
get_value(): void;
        /**

@method
@returns 
*/
get_weight(): void;
        /**

@method
@returns 
*/
set_accessKey(): void;
        /**

@method
@returns 
*/
set_navigateUrl(): void;
        /**

@method
@returns 
*/
set_tabIndex(): void;
        /**

@method
@returns 
*/
set_text(): void;
        /**

@method
@returns 
*/
set_toolTip(): void;
        /**

@method
@returns 
*/
set_value(): void;
        /**

@method
@returns 
*/
set_weight(): void;
    }


    class RadTemplateBoundEventArgs  extends Sys.EventArgs {
        /**

@method
@returns 
*/
get_dataItem(): void;
        /**

@method
@returns 
*/
get_html(): void;
        /**

@method
@returns 
*/
get_template(): void;
        /**

@method
@returns 
*/
set_html(): void;
    }


    class RadTextBox  extends Telerik.Web.UI.RadInputControl {
        /**
Indicating whether RadInputControl loses focus
@method
@returns 
*/
blur(): void;
        /**
Clears the client instance of RadInputControl
@method
@returns 
*/
clear(): void;
        /**
Disables the client instance of RadInputControl
@method
@returns 
*/
disable(): void;
        /**
Enables the client instance of RadInputControl
@method
@returns 
*/
enable(): void;
        /**
Indicating whether RadInputControl enter focus
@method
@returns 
*/
focus(): void;
        /**
Returns the value of the AutoPostBack property
@method
@returns 
*/
get_autoPostBack(): boolean;
        /**
Returns the current position of the caret.
@method
@returns 
*/
get_caretPosition(): number;
        /**
Gets the value of RadInputControl as it is formatted when the input does not have focus
@method
@returns 
*/
get_displayValue(): string;
        /**
Gets the value of RadInputControl as it is formatted when the input has focus
@method
@returns 
*/
get_editValue(): string;
        /**
Returns the message that appears when the input value is an empty string
@method
@returns 
*/
get_emptyMessage(): string;
        /**
Returns true if the input is enabled
@method
@returns 
*/
get_enabled(): boolean;
        /**
Returns true if the input in error state (riError class is applied)
@method
@returns 
*/
get_invalid(): boolean;
        /**
Gets the invalid style duration of RadInputControl
@method
@returns 
*/
get_invalidStyleDuration(): number;
        /**
Gets the max length for the RadTextBox control
@method
@returns 
*/
get_maxLength(): number;
        /**
Returns the password settings when the RadTextBox is in password mode
@method
@returns 
*/
get_passwordSettings(): void;
        /**
Returns the value of the SelectionOnFocus property
@method
@returns 
*/
get_selectionOnFocus(): Telerik.Web.UI.SelectionOnFocus;
        /**
Returns true if the input has an associated image button
@method
@returns 
*/
get_showButton(): boolean;
        /**
Returns the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded
@method
@returns 
*/
get_styles(): any;
        /**
Gets the string that the user typed into the input
@method
@returns 
*/
get_textBoxValue(): string;
        /**
Returns the value of the text box
@method
@returns 
*/
get_value(): string;
        /**
Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element
@method
@returns 
*/
get_visible(): boolean;
        /**
Gets the DOM element for the DIV wrapper element
@method
@returns 
*/
get_wrapperElement(): HTMLElement;
        /**
Gets the DOM element for the input element that holds the edit value.
@method
@returns element Element
*/
get_element(): HTMLElement;
        /**
Returns true if the value of the RadInputControl is empty
@method
@returns 
*/
isEmpty(): void;
        /**
Returns true if the value of the RadInputControl is multi line
@method
@returns 
*/
isMultiLine(): void;
        /**
Returns true if the value of the RadInputControl is a negative number
@method
@returns 
*/
isNegative(): void;
        /**
Returns true if the value of the RadInputControl is read only
@method
@returns 
*/
isReadOnly(): void;
        /**
Raises the postback event of RadInputControl
@method
@returns 
*/
raisePostBackEvent(): void;
        /**
Raises the blur event
@method
@param args - 
@returns 
*/
raise_blur(args: Sys.EventArgs): void;
        /**
Raises the buttonClick event
@method
@param args - 
@returns 
*/
raise_buttonClick(args: Sys.EventArgs): void;
        /**
Raises the handler for the mouseOver event
@method
@param args - 
@returns 
*/
raise_disable(args: Sys.EventArgs): void;
        /**
Raises the enable event
@method
@param args - 
@returns 
*/
raise_enable(args: Sys.EventArgs): void;
        /**
Raises the enumerationChanged event
@method
@param args - 
@returns 
*/
raise_enumerationChanged(args: Sys.EventArgs): void;
        /**
Raises the error event
@method
@param args - 
@returns 
*/
raise_error(args: Sys.EventArgs): void;
        /**
Raises the focus event
@method
@param args - 
@returns 
*/
raise_focus(args: Sys.EventArgs): void;
        /**
Raises the keyPress event
@method
@param args - 
@returns 
*/
raise_keyPress(args: Sys.EventArgs): void;
        /**
Raises the load event
@method
@param args - 
@returns 
*/
raise_load(args: Sys.EventArgs): void;
        /**
Raises the mouseOut event
@method
@param args - 
@returns 
*/
raise_mouseOut(args: Sys.EventArgs): void;
        /**
Raises the mouseOver event
@method
@param args - 
@returns 
*/
raise_mouseOver(args: Sys.EventArgs): void;
        /**
Raises the moveDown event
@method
@param args - 
@returns 
*/
raise_moveDown(args: Sys.EventArgs): void;
        /**
Raises the moveUp event
@method
@param args - 
@returns 
*/
raise_moveUp(args: Sys.EventArgs): void;
        /**
Raises the OnClientPasswordStrengthCalculating event
@method
@param args - 
@returns 
*/
raise_passwordStrengthCalculating(args: Sys.EventArgs): void;
        /**
Raises the valueChanged event
@method
@param newValue - 
@param oldValue - 
@returns 
*/
raise_valueChanged(newValue: any, oldValue: any): void;
        /**
Raises the valueChanging event
@method
@param args - 
@returns 
*/
raise_valueChanging(args: Sys.EventArgs): void;
        /**
Redraws the client side object on the client
@method
@returns 
*/
repaint(): void;
        /**
Selects all text in the RadInputControl
@method
@returns 
*/
selectAllText(): void;
        /**
Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range
@method
@param start - 
@param end - 
@returns 
*/
selectText(start: number, end: number): void;
        /**
Enables or disables postbacks when the user changes the text in the input
@method
@param value - 
@returns 
*/
set_autoPostBack(value: boolean): void;
        /**
Sets the position of the caret
@method
@param position - 
@returns 
*/
set_caretPosition(position: number): void;
        /**
Sets the message that appears when the input value is an empty string
@method
@param value - 
@returns 
*/
set_emptyMessage(value: string): void;
        /**
Sets true if the input is enabled
@method
@param value - 
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets if the input should be in error state (riError class to be applied)
@method
@param value - 
@returns 
*/
set_invalid(value: boolean): void;
        /**
Sets the invalid style duration of RadInputControl
@method
@param value - 
@returns 
*/
set_invalidStyleDuration(value: number): void;
        /**
Sets the max length for the RadTextBox control
@method
@param value - 
@returns 
*/
set_maxLength(value: number): void;
        /**
Returns the password settings when the RadTextBox is in password mode
@method
@param value - 
@returns 
*/
set_passwordSettings(value: string): void;
        /**
Sets the SelectionOnFocus property
@method
@param value - 
@returns 
*/
set_selectionOnFocus(value: Telerik.Web.UI.SelectionOnFocus): void;
        /**
Accepts true if the input has an associated image button
@method
@param value - 
@returns 
*/
set_showButton(value: boolean): void;
        /**
Sets the InputStyles Client object, which can be used to change the appearance of the input when it is first loaded
@method
@param value - 
@returns 
*/
set_styles(value: any): void;
        /**
Sets the string that the user typed into the input
@method
@param value - 
@returns 
*/
set_textBoxValue(value: string): void;
        /**
Sets the value of the text box
@method
@param newValue - 
@returns 
*/
set_value(newValue: string): void;
        /**
Sets the input element as hidden on the client
@method
@param value - 
@returns 
*/
set_visible(value: boolean): void;
        /**
Updates the css class of RadInputControl
@method
@returns 
*/
updateCssClass(): void;
        /**
Updates the css text of RadInputControl
@method
@param styleCssText - 
@returns 
*/
updateCssText(styleCssText: string): void;
        /**
Updates the display value of RadInputControl
@method
@returns 
*/
updateDisplayValue(): void;
        /**
Adds the handler for the blur event
*/
add_blur(handler: Function): void;
        /**
Adds the handler for the buttonClick event
*/
add_buttonClick(handler: Function): void;
        /**
Adds the handler for the disable event
*/
add_disable(handler: Function): void;
        /**
Adds the handler for the enable event
*/
add_enable(handler: Function): void;
        /**
Adds the handler for the enumerationChanged event
*/
add_enumerationChanged(handler: Function): void;
        /**
Adds the handler for the error event
*/
add_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
add_focus(handler: Function): void;
        /**
Adds the handler for the keyPress event
*/
add_keyPress(handler: Function): void;
        /**
Adds the handler for the load event
*/
add_load(handler: Function): void;
        /**
Adds a handler for the mouseOut event
*/
add_mouseOut(handler: Function): void;
        /**
Adds the handler for the mouseOver event
*/
add_mouseOver(handler: Function): void;
        /**
Adds the handler for the moveDown event
*/
add_moveDown(handler: Function): void;
        /**
Adds the handler for the moveUp event
*/
add_moveUp(handler: Function): void;
        /**
Adds the handler for the OnClientPasswordStrengthCalculating event
*/
add_passwordStrengthCalculating(handler: Function): void;
        /**
Adds the handler for the valueChanged event
*/
add_valueChanged(handler: Function): void;
        /**
Adds the handler for the valueChanging event
*/
add_valueChanging(handler: Function): void;
        /**
Removes the handler for the blur event
*/
remove_blur(handler: Function): void;
        /**
Removes the handler for the buttonClick event
*/
remove_buttonClick(handler: Function): void;
        /**
Removes the handler for the disable event
*/
remove_disable(handler: Function): void;
        /**
Removes the handler for the enable event
*/
remove_enable(handler: Function): void;
        /**
Removes the handler for the enumerationChanged event
*/
remove_enumerationChanged(handler: Function): void;
        /**
Removes the handler for the error event
*/
remove_error(handler: Function): void;
        /**
Removes the handler for the focus event
*/
remove_focus(handler: Function): void;
        /**
Removes the handler for the keyPress event
*/
remove_keyPress(handler: Function): void;
        /**
Removes the handler for the load event
*/
remove_load(handler: Function): void;
        /**
Removes the handler for the mouseOut event
*/
remove_mouseOut(handler: Function): void;
        /**
Removes the handler for the mouseOver event
*/
remove_mouseOver(handler: Function): void;
        /**
Removes the handler for the moveDown event
*/
remove_moveDown(handler: Function): void;
        /**
Removes the handler for the moveUp event
*/
remove_moveUp(handler: Function): void;
        /**
Removes the handler for the OnClientPasswordStrengthCalculating event
*/
remove_passwordStrengthCalculating(handler: Function): void;
        /**
Removes the handler for the valueChanged event
*/
remove_valueChanged(handler: Function): void;
        /**
Removes the handler for the valueChanging event
*/
remove_valueChanging(handler: Function): void;
    }


    class RadTextBoxComponent  extends Sys.Component {
        /**
Gets the target input of RadTextBoxComponent
@method
@param id - 
@returns 
*/
get_targetInput(id: number): HTMLElement;
    }


    class RadTextBoxExtender   {
    }


    class RadTextTile  extends Telerik.Web.UI.RadBaseTile {
        /**
Sets the text displayed in the tile content container
@method
@param value - The text
@returns 
*/
set_text(value: string): void;
        /**
Return the text displayed in the tile content container
@method
@returns 
*/
get_text(): string;
    }


    class RadTileList  extends Telerik.Web.UI.RadWebControl {
        /**
Returns the number of tile rows in which the tiles are distributed.
@method
@returns 
*/
get_tileRows(): any;
        /**
Returns the first tile, which has Name property set equal to the name parameter
@method
@param name - 
@returns 
*/
get_tileByName(name: string): Telerik.Web.UI.RadBaseTile;
        /**
Returns Array containing all selected tiles in RadTileList
@method
@returns 
*/
get_selectedTiles(): any;
        /**
Returns the TileList's main HTML element.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Sets selection mode of RadTileList
@method
@param value - value
@returns 
*/
set_selectionMode(value: number): void;
        /**
Sets the height of the RadTileList element
@method
@param value - 
@returns 
*/
set_height(value: string): void;
        /**
Returns RadTileList scrollbar mode
@method
@returns returned value
*/
get_scrollingMode(): number;
        /**
Returns Telerik.Web.UI.TileList.TileGroupCollection collection containing all Telerik.Web.UI.TileList.TileGroup items in RadTileList
@method
@returns 
*/
get_groups(): Telerik.Web.UI.TileList.TileGroupCollection;
        /**
Sets RadClientDataSource object to which the TileList is data bound
@method
@param value - 
@returns 
*/
set_clientDataSource(value: Telerik.Web.UI.RadClientDataSource): void;
        /**
Returns the index of a tile in the Array returned by the get_allTiles method
@method
@param tile - 
@returns 
*/
get_allTilesIndex(tile: Telerik.Web.UI.RadBaseTile): number;
        /**
Sets the the array to which the TileList is data bound
@method
@param value - 
@returns 
*/
set_dataSource(value: any): void;
        /**
Data binds RadTileList to the current dataSource array, which might be set by the clientDataSourceID, clientDataSource and dataSource properties.
@method
@returns 
*/
dataBind(): void;
        /**
Returns the width of the RadTileList element
@method
@returns 
*/
get_width(): string;
        /**
Returns a value indicating whether a postback to the server will be initiated on tile selection or tile click.
@method
@returns 
*/
get_autoPostBack(): any;
        /**
Sets a value indicating whether a postback will be initiated when a tile is clicked or selected.
@method
@param value - 
@returns 
*/
set_autoPostBack(value: any): any;
        /**
Returns group index in the collectoin returned by the get_groups method. Returns -1 if group is not found
@method
@param group - 
@returns 
*/
getGroupIndex(group: Telerik.Web.UI.TileList.TileGroup): number;
        /**
Retuns Telerik.Web.UI.TileList.TileGroup by provided index in the collecion returned by the get_groups method
@method
@param index - 
@returns 
*/
getGroup(index: number): Telerik.Web.UI.TileList.TileGroup;
        /**
Returns the height of the RadTileList element
@method
@returns 
*/
get_height(): string;
        /**
Returns a tile by the index in the Array returned by the get_allTiles method
@method
@param index - 
@returns 
*/
get_tileByAllTilesIndex(index: number): Telerik.Web.UI.RadBaseTile;
        /**
Returns the client ID of RadClientDataSource object to which the TileList is data bound
@method
@returns 
*/
get_clientDataSourceID(): string;
        /**
Sets RadTileList scrollbar mode
@method
@param value - value
@returns 
*/
set_scrollingMode(value: number): void;
        /**
Returns a value indicating whether a drag and drop functionality is enabled.
@method
@returns 
*/
get_enableDragAndDrop(): boolean;
        /**
Sets the width of the RadTileList element
@method
@param value - 
@returns 
*/
set_width(value: string): void;
        /**
Sets the client ID of RadClientDataSource object to which the TileList is data bound
@method
@param value - 
@returns 
*/
set_clientDataSourceID(value: string): void;
        /**
Returns RadClientDataSource object to which the TileList is data bound
@method
@returns 
*/
get_clientDataSource(): Telerik.Web.UI.RadClientDataSource;
        /**
Returns selection mode of RadTileList
@method
@returns returned value
*/
get_selectionMode(): number;
        /**
Returns Array containing all the tiles in RadTileList
@method
@returns 
*/
get_allTiles(): any;
        /**
Returns the array to which the TileList is data bound
@method
@returns 
*/
get_dataSource(): any;
        /**
Sets a value indicating whether a drag and drop functionality is enabled.
@method
@param value - 
@returns 
*/
set_enableDragAndDrop(value: boolean): void;
        /**
Unselect all selected tiles except the excludeIndex
@method
@param excludeIndex - An int that contains the index of the tile in the array returned by get_allTiles method.
@returns 
*/
clearSelection(excludeIndex: number): void;
        /**
Adds a handler for the load TileList client event.
*/
add_load(handler: Function): void;
        /**
Removes a handler for the tileListDataBound TileList client event.
*/
remove_tileListDataBound(handler: Function): void;
        /**
Removes a handler for the init TileList client event.
*/
remove_init(handler: Function): void;
        /**
Adds a handler for the tileCreating TileList client event.
*/
add_tileCreating(handler: Function): void;
        /**
Removes a handler for the tileSelecting TileList client event.
*/
remove_tileSelecting(handler: Function): void;
        /**
Adds a handler for the tileListDataBound TileList client event.
*/
add_tileListDataBound(handler: Function): void;
        /**
Removes a handler for the tileClicking TileList client event.
*/
remove_tileClicking(handler: Function): void;
        /**
Removes a handler for the clientTilePeekTemplateDataBound TileList client event.
*/
remove_clientTilePeekTemplateDataBound(handler: Function): void;
        /**
Removes a handler for the load TileList client event.
*/
remove_load(handler: Function): void;
        /**
Removes a handler for the tileSelected TileList client event.
*/
remove_tileSelected(handler: Function): void;
        /**
Removes a handler for the tileDataBound TileList client event.
*/
remove_tileDataBound(handler: Function): void;
        /**
Adds a handler for the tileDataBound TileList client event.
*/
add_tileDataBound(handler: Function): void;
        /**
Adds a handler for the clientTilePeekTemplateDataBound TileList client event.
*/
add_clientTilePeekTemplateDataBound(handler: Function): void;
        /**
Adds a handler for the tileClicked TileList client event.
*/
add_tileClicked(handler: Function): void;
        /**
Adds a handler for the tileClicking TileList client event.
*/
add_tileClicking(handler: Function): void;
        /**
Adds a handler for the tileSelected TileList client event.
*/
add_tileSelected(handler: Function): void;
        /**
Adds a handler for the tileSelecting TileList client event.
*/
add_tileSelecting(handler: Function): void;
        /**
Removes a handler for the tileClicked TileList client event.
*/
remove_tileClicked(handler: Function): void;
        /**
Adds a handler for the init TileList client event.
*/
add_init(handler: Function): void;
        /**
Adds a handler for the clientTileContentTemplateDataBound tileList client event.
*/
add_clientTileContentTemplateDataBound(handler: Function): void;
        /**
Removes a handler for the tileCreating TileList client event.
*/
remove_tileCreating(handler: Function): void;
        /**
Removes a handler for the clientTileContentTemplateDataBound TileList client event.
*/
remove_clientTileContentTemplateDataBound(handler: Function): void;
    }


    class RadTileListCancelEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the tile, in which context the event occurs
@method
@returns 
*/
get_tile(): Telerik.Web.UI.RadBaseTile;
        /**
Returns the property value of the specific event
@method
@returns 
*/
get_value(): void;
        /**
Sets the property value of the specific event
@method
@returns 
*/
set_value(): void;
    }


    class RadTileListEventArgs  extends Sys.EventArgs {
        /**
Returns the property value after the specific event occurred
@method
@returns 
*/
get_newValue(): void;
        /**
Returns the property value before the specific event occurred
@method
@returns 
*/
get_oldValue(): void;
        /**
Returns the tile, in which context the event occurs
@method
@returns 
*/
get_tile(): Telerik.Web.UI.RadBaseTile;
    }


    class RadTimeView  extends Telerik.Web.UI.RadWebControl {
        /**
Returns the selected date and time, or null if no value is selected.
@method
@returns 
*/
getTime(): Date;
        /**
Returns the number of columns used to lay out values in the time view.
@method
@returns 
*/
get_columns(): number;
        /**
Returns a string that contains the current culture
@method
@returns 
*/
get_culture(): string;
        /**
Gets the custom times of the TimeView object.
@method
@returns 
*/
get_customTimes(): any;
        /**
Returns the assigned datasource of the TimeView object.
@method
@returns 
*/
get_dataSource(): any;
        /**
Returns a boolean value indicating whether the Aria support has been enabled.
@method
@returns 
*/
get_enableAriaSupport(): boolean;
        /**
Returns the last time that can appear in the time view. The last time that actually appears is the latest time that is a whole number of intervals after the start time which is less than this time.
@method
@returns 
*/
get_endTime(): Date;
        /**
Returns the time interval between successive values in the time view.
@method
@returns 
*/
get_interval(): Date;
        /**
Returns an array that determines the classes used for the predined styles.
@method
@returns 
*/
get_itemStyles(): any;
        /**
Returns whether the time view displays its footer.
@method
@returns 
*/
get_showFooter(): boolean;
        /**
Returns whether the time view displays its header.
@method
@returns 
*/
get_showHeader(): boolean;
        /**
Returns the earliest time that is displayed by the time view.
@method
@returns 
*/
get_startTime(): Date;
        /**
Returns the time format of the RadTimeView control.
@method
@returns 
*/
get_timeFormat(): string;
        /**
Raises the clientTimeSelected event.
@method
@param handler - 
@returns 
*/
raise_clientTimeSelected(handler: Function): void;
        /**
Raises the clientTimeSelecting event.
@method
@param handler - 
@returns 
*/
raise_clientTimeSelecting(handler: Function): void;
        /**
Assigns the value of the time view.
@method
@param hours - 
@param minutes - 
@param seconds - 
@param Date - 
@returns 
*/
setTime(hours: number, minutes: number, seconds: number, Date: Date): void;
        /**
Sets the number of columns used to lay out values in the time view.
@method
@param value - 
@returns 
*/
set_columns(value: number): void;
        /**
Adds an array of custom times to the TimeView object.
@method
@param value - 
@returns 
*/
set_customTimes(value: any): void;
        /**
Sets a new datasource to the TimeView object.
@method
@param value - 
@returns 
*/
set_dataSource(value: any): void;
        /**
Sets the last time that can appear in the time view. The last time that actually appears is the latest time that is a whole number of intervals after the start time which is less than this time.
@method
@param value - 
@returns 
*/
set_endTime(value: Date): void;
        /**
Sets the time interval between successive values in the time view.
@method
@param value - 
@returns 
*/
set_interval(value: Date): void;
        /**
Determines the classes used for the predined styles.
@method
@param value - 
@returns 
*/
set_itemStyles(value: any): void;
        /**
Determines whether the time view displays its footer.
@method
@param value - 
@returns 
*/
set_showFooter(value: boolean): void;
        /**
Shows/hides the time view header.
@method
@param value - 
@returns 
*/
set_showHeader(value: boolean): void;
        /**
Sets the earliest time that is displayed by the time view.
@method
@param value - 
@returns 
*/
set_startTime(value: Date): void;
        /**
Adds an event handler for the clientTimeSelected event.
*/
add_clientTimeSelected(handler: Function): void;
        /**
Adds an event handler for the clientTimeSelecting event.
*/
add_clientTimeSelecting(handler: Function): void;
        /**
Removes an event handler for the clientTimeSelected event.
*/
remove_clientTimeSelected(handler: Function): void;
        /**
Removes an event handler for the clientTimeSelecting event.
*/
remove_clientTimeSelecting(handler: Function): void;
    }


    class RadToolBar  extends Telerik.Web.UI.ControlItemContainer {
        /**
Returns the first button in the toolbar with the specified full path.
@method
@param value - the instance of the button with the specified absolute Url
@returns RadToolbarButton
*/
findButtonByAbsoluteUrl(value: string): Telerik.Web.UI.RadToolBarButton;
        /**
Returns the first item in the toolbar with the specified value.
@method
@param value - value
@returns 
*/
findItemByValue(value: string): Telerik.Web.UI.RadToolBarItem;
        /**
Sets the slide direction of the Toolbar.
@method
@param value - 
@returns 
*/
set_slideDirection(value: Telerik.Web.UI.SlideDirection): void;
        /**
Returns an array containing all the items in the toolbar, including the items in drop-down lists. Items in drop-down lists appear immediately following their parent items.
@method
@returns Array of RadToolBarItem
*/
get_allItems(): any;
        /**
Returns the collection of custom attributes defined for the toolbar.
@method
@returns 
*/
get_attributes(): any;
        /**
Gets the DOM element for the UL element that lists the toolbar buttons.
@method
@returns 
*/
get_childListElement(): HTMLElement;
        /**
Gets the skin name of the ToolBar.
@method
@returns The skin name of the ToolBar.
*/
get_skin(): string;
        /**
Gets the Url of the page to post to from the current page.
@method
@returns The value indicating the Url
*/
get_postBackUrl(): string;
        /**
Sets the orientation of the toolbar.
@method
@param value - value
@returns 
*/
set_orientation(value: number): void;
        /**
Gets the slide direction of the Toolbar.
@method
@returns 
*/
get_slideDirection(): Telerik.Web.UI.SlideDirection;
        /**
Gets the value indicating whether the zone has Horizontal orientaion.
@method
@returns The value indicating whether the zone has Horizontal orientaion.
*/
get_isHorizontal(): boolean;
        /**
Ends tracking changes to the toolbar items. Only changes to the items that occur between a call to trackChanges and commitChanges persist after a postback.
@method
@returns 
*/
commitChanges(): void;
        /**
Returns the collapse animation object.
@method
@returns 
*/
get_collapseAnimation(): any;
        /**
Returns the first item in the toolbar with the specified text.
@method
@param text - text to search for
@returns 
*/
findItemByText(text: string): Telerik.Web.UI.RadToolBarItem;
        /**
Returns the first button in the toolbar with the specified Url.
@method
@param value - the instance of the button with the specified Url
@returns RadToolbarButton
*/
findButtonByUrl(value: string): Telerik.Web.UI.RadToolBarButton;
        /**
Sets the Url of the page to post to from the current page.
@method
@param value - value
@returns 
*/
set_postBackUrl(value: string): void;
        /**
Returns the collection of items in the toolbar (not including items in drop-down lists).
@method
@returns RadToolBarItemCollection
*/
get_items(): Telerik.Web.UI.RadToolBarItemCollection;
        /**
Gets the DOM element for the toolbar.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Returns the expand animation object.
@method
@returns 
*/
get_expandAnimation(): any;
        /**
Returns the first item in the toolbar with the custom attribute specified by the first parameter set to the value specified by the second parameter.
@method
@param attributeName - attributeName
@param attributeValue - attributeValue
@returns 
*/
findItemByAttribute(attributeName: string, attributeValue: string): Telerik.Web.UI.RadToolBarItem;
        /**
Returns 0 if the toolbar is horizontal, 1 if it is vertical.
@method
@returns integer
*/
get_orientation(): number;
        /**
Returns the first button in the toolbar with the specified command name.
@method
@param commandName - commandName
@returns RadToolbarButton
*/
findButtonByCommandName(commandName: string): Telerik.Web.UI.RadToolBarButton;
        /**
Client-Side Events
*/
add_event(handler: Function): void;
    }


    class RadToolBarButton  extends Telerik.Web.UI.RadToolBarItem {
        /**
Returns the DOM element for the item's drop-down list.
@method
@returns 
*/
get_dropDownElement(): HTMLElement;
        /**
Sets if the item is separator.
@method
@param value - value
@returns 
*/
set_isSeparator(value: boolean): void;
        /**
Gets the DOM element for the item.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Gets the DOM element for the text of the item.
@method
@returns 
*/
get_textElement(): HTMLElement;
        /**
True if the item is visible.
@method
@returns boolean
*/
get_visible(): boolean;
        /**
True if the item is focused.
@method
@returns 
*/
get_focused(): boolean;
        /**
Returns the URL of the image when it is clicked.
@method
@returns 
*/
get_clickedImageUrl(): string;
        /**
Sets the image position of the toolbar item.
@method
@param value - 
@returns 
*/
set_imagePosition(value: Telerik.Web.UI.ToolBarImagePosition): void;
        /**
Closes the drop-down list.
@method
@returns 
*/
hideDropDown(): void;
        /**
Collapses an expanded toolbar item or expands a collapsed toolbar item.
@method
@returns 
*/
toggle(): void;
        /**
Returns the default button.
@method
@returns 
*/
getDefaultButton(): Telerik.Web.UI.RadToolBarButton;
        /**
Returns the URL of the hovered-state image.
@method
@returns 
*/
get_hoveredImageUrl(): string;
        /**
Sets whether the item is enabled.
@method
@param value - value
@returns 
*/
set_enabled(value: boolean): void;
        /**
Returns the name of the CSS class applied to the button when on focus.
@method
@returns The value indicating the Css class name
*/
get_focusedCssClass(): string;
        /**
Sets if the item is focused.
@method
@param value - value
@returns 
*/
set_focused(value: boolean): void;
        /**
Enables/Disables the EnabledDefaultButton mechanism.
@method
@param boolean - 
@returns 
*/
set_enableDefaultButton(boolean: any): any;
        /**
Enables the toolbar item.
@method
@returns 
*/
enable(): void;
        /**
Unmarks the checkbox of an item.
@method
@returns 
*/
unCheck(): void;
        /**
Moves focus off the item to the next element in the tab order.
@method
@returns 
*/
blur(): void;
        /**
Returns the URL of the toolbar item(the href attribute of the link). Null if the NavigateUrl server property is not set.
@method
@returns The value indicating the Url
*/
get_navigateUrl(): string;
        /**
Gets the target of the item. If a target is not set, returns null.
@method
@returns The value indicating the name of the target
*/
get_target(): string;
        /**
Opens the drop-down list.
@method
@returns 
*/
showDropDown(): void;
        /**
Returns true if the drop-down is opened.
@method
@returns 
*/
get_dropDownVisible(): boolean;
        /**
True if postback is enabled, false otherwise.
@method
@returns boolean
*/
get_postBack(): boolean;
        /**
Sets the URL for the hovered-state image.
@method
@param value - value
@returns 
*/
set_hoveredImageUrl(value: string): void;
        /**
Returns the value of the item.
@method
@returns 
*/
get_value(): any;
        /**
Returns whether the item has index 0.
@method
@returns 
*/
get_isFirst(): any;
        /**
Returns the URL of the image.
@method
@returns 
*/
get_imageUrl(): string;
        /**
Causes server-side button click event to occur
@method
@returns 
*/
click(): void;
        /**
true
@method
@returns 
*/
get_enabled(): any;
        /**
Determines if the item should postback.
@method
@param value - value
@returns 
*/
set_postBack(value: boolean): void;
        /**
Shows the toolbar item.
@method
@returns 
*/
show(): void;
        /**
Gets the DOM element for the innermost SPAN that wraps the item.
@method
@returns 
*/
get_innerWrapElement(): HTMLElement;
        /**
Sets the URL of the image when on focus.
@method
@param value - value
@returns 
*/
set_focusedImageUrl(value: string): void;
        /**
Returns the URL of the image when checked.
@method
@returns The value indicating the image url
*/
get_checkedImageUrl(): string;
        /**
Returns the next item in the toolbar or drop-down list.
@method
@returns 
*/
get_nextSibling(): Telerik.Web.UI.RadToolBarItem;
        /**
Returns the name of the CSS class applied to the button when clicked.
@method
@returns The value indicating the Css class name
*/
get_clickedCssClass(): string;
        /**
Returns the previous item in the toolbar or drop-down list.
@method
@returns 
*/
get_previousSibling(): Telerik.Web.UI.RadToolBarItem;
        /**
Marks or unmarks the checkbox of an item when the item is clicked.
@method
@returns The value indicating if the item is checked
*/
get_checkOnClick(): boolean;
        /**
Sets the CSS class for the item when it is disabled.
@method
@param value - value
@returns 
*/
set_disabledCssClass(value: string): void;
        /**
Gets a value indicating if a checked button will get unchecked when clicked.
@method
@returns boolean
*/
get_allowSelfUnCheck(): boolean;
        /**
Returns the name of the CSS class applied to the button when hovered.
@method
@returns The value indicating the Css class name
*/
get_hoveredCssClass(): string;
        /**
Gets the anchor DOM element of the toolbar item.
@method
@returns 
*/
get_linkElement(): HTMLElement;
        /**
Returns the index of the item in the toolbar or drop-down list.
@method
@returns 
*/
get_index(): any;
        /**
Sets name of the CSS class applied to the item when checked.
@method
@param value - value
@returns 
*/
set_checkedCssClass(value: string): void;
        /**
Returns the name of the command associated with the item.
@method
@returns The value indicating the command
*/
get_commandName(): string;
        /**
Sets the DisabledImageUrl property of the item
@method
@param value - value
@returns 
*/
set_disabledImageUrl(value: string): void;
        /**
Returns true if EnabledDefaultButton is enabled.
@method
@returns 
*/
get_enableDefaultButton(): any;
        /**
Returns the full path to the image of a disabled item
@method
@returns The value indicating the image url
*/
get_disabledImageUrl(): string;
        /**
Returns the collection of items in the drop-down list (if it exists).
@method
@returns 
*/
get_buttons(): Telerik.Web.UI.RadToolBarButtonCollection;
        /**
True if the item is hovered.
@method
@returns boolean
*/
get_hovered(): boolean;
        /**
Gets the image DOM element of the item. If the server side ImageUrl property is not set,  returns null.
@method
@returns 
*/
get_imageElement(): HTMLElement;
        /**
Sets the index of the Default Button.
@method
@param Int - 
@returns 
*/
set_defaultButtonIndex(Int: number): any;
        /**
Gets the Url of the page to post to from the current page.
@method
@returns The value indicating the Url
*/
get_postBackUrl(): string;
        /**
True if the item is clicked.
@method
@returns boolean
*/
get_clicked(): boolean;
        /**
Returns the collection of custom attributes defined for the item.
@method
@returns 
*/
get_attributes(): any;
        /**
Gets the DOM element for the outermost SPAN that wraps the item.
@method
@returns 
*/
get_outerWrapElement(): HTMLElement;
        /**
Sets the URL of the item
@method
@param value - value
@returns 
*/
set_navigateUrl(value: string): void;
        /**
Returns the toolbar to which the item belongs.
@method
@returns RadToolBar
*/
get_toolBar(): Telerik.Web.UI.RadToolBar;
        /**
Returns the value of the CommandArgument property.
@method
@returns string
*/
get_commandArgument(): string;
        /**
Sets the name of the CSS class to be applied to the button when checked.
@method
@param value - value
@returns 
*/
set_checkedImageUrl(value: string): void;
        /**
Gets the image position of the toolbar item.
@method
@returns 
*/
get_imagePosition(): Telerik.Web.UI.ToolBarImagePosition;
        /**
Sets a value indicating if a checked button will get unchecked when clicked.
@method
@param value - value
@returns 
*/
set_allowSelfUnCheck(value: boolean): void;
        /**
Marks the checkbox of an item.
@method
@returns 
*/
check(): void;
        /**
Moves focus to the item.
@method
@returns 
*/
focus(): void;
        /**
Sets the name of the CSS class to be applied to the button when clicked.
@method
@param value - value
@returns 
*/
set_clickedCssClass(value: string): void;
        /**
True if the item is separator.
@method
@returns The value indicating if the item is separator
*/
get_isSeparator(): boolean;
        /**
Sets the value of the item.
@method
@param string - 
@returns 
*/
set_value(string: any): any;
        /**
Returns the DOM element for the root list of items in the toolbar.
@method
@returns DOM element for the root item list
*/
get_childListElement(): HTMLElement;
        /**
Returns the name of the CSS class applied to the item when checked.
@method
@returns The value indicating the Css class name
*/
get_checkedCssClass(): string;
        /**
Sets the URL for the image.
@method
@param value - value
@returns 
*/
set_imageUrl(value: string): void;
        /**
Returns the DOM element for the animation container of the item's drop-down list.
@method
@returns 
*/
get_animationContainer(): HTMLElement;
        /**
Returns whether the item is the last in the toolbar or drop-down list.
@method
@returns 
*/
get_isLast(): any;
        /**
Sets the name of the command associated with the item.
@method
@param value - value
@returns 
*/
set_commandName(value: string): void;
        /**
Sets the name of the CSS class to be applied to the button when hovered.
@method
@param value - value
@returns 
*/
set_hoveredCssClass(value: string): void;
        /**
Returns the index of the Default Button.
@method
@returns 
*/
get_defaultButtonIndex(): number;
        /**
Returns the text of the item.
@method
@returns 
*/
get_text(): string;
        /**
Sets the URL of the image when it is clicked.
@method
@param value - value
@returns 
*/
set_clickedImageUrl(value: string): void;
        /**
Sets marked or unmarked if the item is clicked
@method
@param value - value
@returns 
*/
set_checkOnClick(value: boolean): void;
        /**
Hides the toolbar item.
@method
@returns 
*/
hide(): void;
        /**
Gets the CSS class for the item when it is disabled.
@method
@returns 
*/
get_disabledCssClass(): string;
        /**
Sets the text of the item.
@method
@param text - text
@returns 
*/
set_text(text: string): void;
        /**
Sets the target of the Node.
@method
@param value - value
@returns 
*/
set_target(value: string): void;
        /**
Gets the level of the item. Buttons and child items of a drop down button have 0 level. Child items of a split button are with level 1.
@method
@returns 
*/
get_level(): any;
        /**
True if the item is checked.
@method
@returns The value indicating if the item is checked
*/
get_isChecked(): boolean;
        /**
Marks or unmarks the checkbox of an item.
@method
@param value - value
@returns 
*/
set_checked(value: boolean): void;
        /**
Sets the Url of the page to post to from the current page.
@method
@param value - value
@returns 
*/
set_postBackUrl(value: string): void;
        /**
disables the toolbar item.
@method
@returns 
*/
disable(): void;
        /**
Gets the checked state of an item. The item is checked if get_checked() returns true.
@method
@returns The value indicating if the item is checked
*/
get_checked(): boolean;
        /**
Sets if the item is visible.
@method
@param value - value
@returns 
*/
set_visible(value: boolean): void;
        /**
Gets the name of the group to which the item belongs.
@method
@returns The value indicating the name of the group
*/
get_group(): string;
        /**
Sets the text of the item's tool tip.
@method
@param value - value
@returns 
*/
set_toolTip(value: string): void;
        /**
Sets the value of the CommandArgument property.
@method
@param value - value
@returns 
*/
set_commandArgument(value: string): void;
        /**
Returns the text of the item's tool tip.
@method
@returns 
*/
get_toolTip(): string;
        /**
Returns true if both the item and the toolbar are enabled. If one of them is disabled, get_isEnabled() will return false.
@method
@returns 
*/
get_isEnabled(): any;
        /**
Sets the name of the group to which the item belongs.
@method
@param value - value
@returns 
*/
set_group(value: string): void;
        /**
Gets the DOM element for the middle SPAN that wraps the item.
@method
@returns 
*/
get_middleWrapElement(): HTMLElement;
        /**
Returns the URL of the image when on focus.
@method
@returns string
*/
get_focusedImageUrl(): string;
        /**
Sets the name of the CSS class to be applied to the button when on focus.
@method
@param value - value
@returns 
*/
set_focusedCssClass(value: string): void;
    }


    class RadToolBarButtonCollection  extends Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.RadToolBarButton> {
        /**
Returns the item from the collection that resides at the specified index.
@method
@param index - index
@returns RadToolBarButton
*/
getButton(index: number): Telerik.Web.UI.RadToolBarButton;
        /**
Returns the index of a button.
@method
@param item - item
@returns int
*/
indexOf(item: Telerik.Web.UI.RadToolBarButton): number;
        /**
Iterates through the items of the RadToolbarButtonCollection using labmda expression
@method
@param lambda - lambda
@returns 
*/
forEach(lambda: Function): void;
        /**
Removes the specified item from the collection.
@method
@param item - item
@returns 
*/
remove(item: Telerik.Web.UI.RadToolBarButton): void;
        /**
Inserts the item into the collection at the position defined by the first (index) parameter.
@method
@param index - index
@param item - item
@returns 
*/
insert(index: number, item: Telerik.Web.UI.RadToolBarButton): void;
        /**
Removes the item at the specified index.
@method
@param index - index
@returns 
*/
removeAt(index: number): void;
        /**
Adds a child to the collection.
@method
@param item - item
@returns 
*/
add(item: Telerik.Web.UI.RadToolBarButton): void;
        /**
Clears the RadToolbarButtonCollection of all the items it contains.
@method
@returns 
*/
clear(): void;
        /**
Returns the number of the items in the collection.
@method
@returns 
*/
get_count(): number;
        /**
Returns the item from the collection that resides at the specified index.
@method
@param index - index
@returns RadToolBarButton
*/
getItem(index: number): Telerik.Web.UI.RadToolBarButton;
    }


    class RadToolBarDropDown  extends Telerik.Web.UI.ControlItemContainer {
        /**
Moves focus off the item to the next element in the tab order.
@method
@returns 
*/
blur(): void;
        /**
disables the toolbar item.
@method
@returns 
*/
disable(): void;
        /**
Enables the toolbar item.
@method
@returns 
*/
enable(): void;
        /**
Moves focus to the item.
@method
@returns 
*/
focus(): void;
        /**
Returns the DOM element for the animation container of the item's drop-down list.
@method
@returns HTML element
*/
get_animationContainer(): HTMLElement;
        /**
Gets the DOM element for the UL element that lists the arrow elements.
@method
@returns 
*/
get_arrowElement(): HTMLElement;
        /**
Returns the collection of buttons in the RadToolbarButtonCollection
@method
@returns RadToolBarButtonCollection
*/
get_buttons(): Telerik.Web.UI.RadToolBarButtonCollection;
        /**
Gets the DOM element for the UL element that lists the toolbar buttons.
@method
@returns HTML element
*/
get_childListElement(): HTMLElement;
        /**
True if the item is clicked.
@method
@returns boolean
*/
get_clicked(): boolean;
        /**
Returns the name of the CSS class applied to the button when clicked.
@method
@returns The value indicating the Css class name
*/
get_clickedCssClass(): string;
        /**
Returns the URL of the image when it is clicked.
@method
@returns 
*/
get_clickedImageUrl(): string;
        /**
Gets the CSS class for the item when it is disabled.
@method
@returns 
*/
get_disabledCssClass(): string;
        /**
Returns the full path to the image of a disabled item
@method
@returns The value indicating the image url
*/
get_disabledImageUrl(): string;
        /**
Returns the DOM element for the item's drop-down list.
@method
@returns HTML element
*/
get_dropDownElement(): HTMLElement;
        /**
Returns true if the drop-down is opened.
@method
@returns 
*/
get_dropDownVisible(): boolean;
        /**
Gets the expand direction of the Toolbar.
@method
@returns 
*/
get_expandDirection(): Telerik.Web.UI.ExpandDirection;
        /**
True if the item is focused.
@method
@returns 
*/
get_focused(): boolean;
        /**
Returns the name of the CSS class applied to the button when on focus.
@method
@returns The value indicating the Css class name
*/
get_focusedCssClass(): string;
        /**
Returns the URL of the image when on focus.
@method
@returns string
*/
get_focusedImageUrl(): string;
        /**
True if the item is hovered.
@method
@returns boolean
*/
get_hovered(): boolean;
        /**
Returns the name of the CSS class applied to the button when hovered.
@method
@returns The value indicating the Css class name
*/
get_hoveredCssClass(): string;
        /**
Returns the URL of the hovered-state image.
@method
@returns 
*/
get_hoveredImageUrl(): string;
        /**
Gets the DOM element for the image of the item.
@method
@returns HTML element
*/
get_imageElement(): HTMLElement;
        /**
Gets the image position of the toolbar item.
@method
@returns 
*/
get_imagePosition(): Telerik.Web.UI.ToolBarImagePosition;
        /**
Returns the URL of the image.
@method
@returns 
*/
get_imageUrl(): string;
        /**
Gets the DOM element for the innermost SPAN that wraps the item.
@method
@returns HTML element
*/
get_innerWrapElement(): HTMLElement;
        /**
Gets the anchor DOM element of the toolbar button.
@method
@returns HTML element
*/
get_linkElement(): HTMLElement;
        /**
Gets the DOM element for the middle SPAN that wraps the item.
@method
@returns HTML element
*/
get_middleWrapElement(): HTMLElement;
        /**
Gets the DOM element for the outermost SPAN that wraps the item.
@method
@returns HTML element
*/
get_outerWrapElement(): HTMLElement;
        /**
Returns the text of the item.
@method
@returns string
*/
get_text(): string;
        /**
Gets the DOM element for the text of the item.
@method
@returns HTML element
*/
get_textElement(): HTMLElement;
        /**
Returns the toolbar to which the item belongs.
@method
@returns RadToolBar
*/
get_toolBar(): Telerik.Web.UI.RadToolBar;
        /**
Returns the text of the item's tool tip.
@method
@returns 
*/
get_toolTip(): string;
        /**
True if the item is visible.
@method
@returns boolean
*/
get_visible(): boolean;
        /**
Hides the toolbar item.
@method
@returns 
*/
hide(): void;
        /**
Closes the drop-down list.
@method
@returns 
*/
hideDropDown(): void;
        /**
Sets the name of the CSS class to be applied to the button when clicked.
@method
@param value - value
@returns 
*/
set_clickedCssClass(value: string): void;
        /**
Sets the URL of the image when it is clicked.
@method
@param value - value
@returns 
*/
set_clickedImageUrl(value: string): void;
        /**
Sets the CSS class for the item when it is disabled.
@method
@param value - value
@returns 
*/
set_disabledCssClass(value: string): void;
        /**
Sets the DisabledImageUrl property of the item
@method
@param value - value
@returns 
*/
set_disabledImageUrl(value: string): void;
        /**
Sets whether the item is enabled.
@method
@param value - value
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the expand direction of the Toolbar.
@method
@param value - 
@returns 
*/
set_expandDirection(value: Telerik.Web.UI.ExpandDirection): void;
        /**
Sets if the item is focused.
@method
@param value - value
@returns 
*/
set_focused(value: boolean): void;
        /**
Sets the name of the CSS class to be applied to the button when on focus.
@method
@param value - value
@returns 
*/
set_focusedCssClass(value: string): void;
        /**
Sets the URL of the image when on focus.
@method
@param value - value
@returns 
*/
set_focusedImageUrl(value: string): void;
        /**
Sets the name of the CSS class to be applied to the button when hovered.
@method
@param value - value
@returns 
*/
set_hoveredCssClass(value: string): void;
        /**
Sets the URL for the hovered-state image.
@method
@param value - value
@returns 
*/
set_hoveredImageUrl(value: string): void;
        /**
Sets the image position of the toolbar item.
@method
@param value - 
@returns 
*/
set_imagePosition(value: Telerik.Web.UI.ToolBarImagePosition): void;
        /**
Sets the URL for the image.
@method
@param value - value
@returns 
*/
set_imageUrl(value: string): void;
        /**
Sets the text of the item.
@method
@param text - text
@returns 
*/
set_text(text: string): void;
        /**
Sets the text of the item's tool tip.
@method
@param value - value
@returns 
*/
set_toolTip(value: string): void;
        /**
Sets if the item is visible.
@method
@param value - value
@returns 
*/
set_visible(value: boolean): void;
        /**
Shows the toolbar item.
@method
@returns 
*/
show(): void;
        /**
Opens the drop-down list.
@method
@returns 
*/
showDropDown(): void;
    }


    class RadToolBarItem  extends Telerik.Web.UI.ControlItem {
        /**
Moves focus off the item to the next element in the tab order.
@method
@returns 
*/
blur(): void;
        /**
disables the toolbar item.
@method
@returns 
*/
disable(): void;
        /**
Enables the toolbar item.
@method
@returns 
*/
enable(): void;
        /**
Moves focus to the item.
@method
@returns 
*/
focus(): void;
        /**
returns the DOM element for the animation container of the item's drop-down list.
@method
@returns 
*/
get_animationContainer(): HTMLElement;
        /**
returns the DOM element for the root list of items in the toolbar.
@method
@returns DOM element for the root item list
*/
get_childListElement(): HTMLElement;
        /**
True if the item is clicked.
@method
@returns 
*/
get_clicked(): boolean;
        /**
returns the name of the CSS class applied to the item when clicked.
@method
@returns The value indicating the Css class name
*/
get_clickedCssClass(): string;
        /**
returns the URL of the image when it is clicked.
@method
@returns 
*/
get_clickedImageUrl(): string;
        /**
Gets the CSS class for the item when it is disabled.
@method
@returns 
*/
get_disabledCssClass(): string;
        /**
returns the full path to the image of a disabled item
@method
@returns The value indicating the image url
*/
get_disabledImageUrl(): string;
        /**
returns the DOM element for the item's drop-down list.
@method
@returns 
*/
get_dropDownElement(): HTMLElement;
        /**
True if the item is focused.
@method
@returns 
*/
get_focused(): boolean;
        /**
returns the name of the CSS class applied to the item when on focus.
@method
@returns The value indicating the Css class name
*/
get_focusedCssClass(): string;
        /**
returns the URL of the image when on focus.
@method
@returns string
*/
get_focusedImageUrl(): string;
        /**
True if the item is hovered.
@method
@returns 
*/
get_hovered(): boolean;
        /**
returns the name of the CSS class applied to the item when hovered.
@method
@returns The value indicating the Css class name
*/
get_hoveredCssClass(): string;
        /**
returns the URL of the hovered-state image.
@method
@returns 
*/
get_hoveredImageUrl(): string;
        /**
Gets the DOM element for the image of the item.
@method
@returns 
*/
get_imageElement(): HTMLElement;
        /**
Gets the image position of the toolbar item.
@method
@returns 
*/
get_imagePosition(): Telerik.Web.UI.ToolBarImagePosition;
        /**
returns the URL of the image.
@method
@returns 
*/
get_imageUrl(): string;
        /**
Gets the DOM element for the innermost SPAN that wraps the item.
@method
@returns 
*/
get_innerWrapElement(): HTMLElement;
        /**
Gets the anchor DOM element of the toolbar button.
@method
@returns 
*/
get_linkElement(): HTMLElement;
        /**
Gets the DOM element for the middle SPAN that wraps the item.
@method
@returns 
*/
get_middleWrapElement(): HTMLElement;
        /**
Gets the DOM element for the outermost SPAN that wraps the item.
@method
@returns 
*/
get_outerWrapElement(): HTMLElement;
        /**
returns the text of the item.
@method
@returns 
*/
get_text(): string;
        /**
Gets the DOM element for the text of the item.
@method
@returns 
*/
get_textElement(): HTMLElement;
        /**
returns the toolbar to which the item belongs.
@method
@returns RadToolBar
*/
get_toolBar(): Telerik.Web.UI.RadToolBar;
        /**
returns the text of the item's tool tip.
@method
@returns 
*/
get_toolTip(): string;
        /**
True if the item is visible.
@method
@returns boolean
*/
get_visible(): boolean;
        /**
Hides the toolbar item.
@method
@returns 
*/
hide(): void;
        /**
Sets the name of the CSS class to be applied to the item when clicked.
@method
@param value - value
@returns 
*/
set_clickedCssClass(value: string): void;
        /**
Sets the URL of the image when it is clicked.
@method
@param value - value
@returns 
*/
set_clickedImageUrl(value: string): void;
        /**
Sets the CSS class for the item when it is disabled.
@method
@param value - value
@returns 
*/
set_disabledCssClass(value: string): void;
        /**
Sets the DisabledImageUrl property of the item
@method
@param value - value
@returns 
*/
set_disabledImageUrl(value: string): void;
        /**
Sets whether the item is enabled.
@method
@param value - value
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets if the item is focused.
@method
@param value - value
@returns 
*/
set_focused(value: boolean): void;
        /**
Sets the name of the CSS class to be applied to the item when on focus.
@method
@param value - value
@returns 
*/
set_focusedCssClass(value: string): void;
        /**
Sets the URL of the image when on focus.
@method
@param value - value
@returns 
*/
set_focusedImageUrl(value: string): void;
        /**
Sets the name of the CSS class to be applied to the item when hovered.
@method
@param value - value
@returns 
*/
set_hoveredCssClass(value: string): void;
        /**
Sets the URL for the hovered-state image.
@method
@param value - value
@returns 
*/
set_hoveredImageUrl(value: string): void;
        /**
Sets the image position of the toolbar item.
@method
@param value - 
@returns 
*/
set_imagePosition(value: Telerik.Web.UI.ToolBarImagePosition): void;
        /**
Sets the URL for the image.
@method
@param value - value
@returns 
*/
set_imageUrl(value: string): void;
        /**
Sets the text of the item.
@method
@param text - text
@returns 
*/
set_text(text: string): void;
        /**
Sets the text of the item's tool tip.
@method
@param value - value
@returns 
*/
set_toolTip(value: string): void;
        /**
Sets if the item is visible.
@method
@param value - value
@returns 
*/
set_visible(value: boolean): void;
        /**
Shows the toolbar item.
@method
@returns 
*/
show(): void;
    }


    class RadToolBarItemCollection  extends Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.RadToolBarItem> {
        /**
Returns the index of a button.
@method
@param item - item
@returns 
*/
indexOf(item: Telerik.Web.UI.RadToolBarItem): number;
        /**
Iterates through the items of the RadToolbarItemCollection using labmda expression
@method
@param lambda - lambda
@returns 
*/
forEach(lambda: Function): void;
        /**
Removes the specified item from the collection.
@method
@param item - item
@returns 
*/
remove(item: Telerik.Web.UI.RadToolBarItem): void;
        /**
Inserts the item into the collection at the position defined by the first (index) parameter.
@method
@param index - index
@param item - item
@returns 
*/
insert(index: number, item: Telerik.Web.UI.RadToolBarItem): void;
        /**
Removes the item at the specified index.
@method
@param index - index
@returns 
*/
removeAt(index: number): void;
        /**
Adds a child item to the collection.
@method
@param item - item
@returns 
*/
add(item: Telerik.Web.UI.RadToolBarItem): void;
        /**
Clears the collection of all the child items it contains.
@method
@returns 
*/
clear(): void;
        /**
Returns the number of the items in the collection.
@method
@returns int
*/
get_count(): number;
        /**
Returns the item from the collection that resides at the specified index.
@method
@param index - index
@returns RadToolBarItem
*/
getItem(index: number): Telerik.Web.UI.RadToolBarItem;
    }


    class RadToolBarSplitButton  extends Telerik.Web.UI.ControlItemContainer {
        /**
Moves focus off the item to the next element in the tab order.
@method
@returns 
*/
blur(): void;
        /**
Causes server-side button click event to occur
@method
@returns 
*/
click(): void;
        /**
disables the toolbar item.
@method
@returns 
*/
disable(): void;
        /**
Enables the toolbar item.
@method
@returns 
*/
enable(): void;
        /**
Moves focus to the item.
@method
@returns 
*/
focus(): void;
        /**
Returns the default button.
@method
@returns RadToolbarButton
*/
getDefaultButton(): Telerik.Web.UI.RadToolBarButton;
        /**
Returns the DOM element for the animation container of the item's drop-down list.
@method
@returns HTML element
*/
get_animationContainer(): HTMLElement;
        /**
Gets the DOM element for the UL element that lists the arrow elements.
@method
@returns 
*/
get_arrowElement(): HTMLElement;
        /**
Returns the collection of buttons in the RadToolbarSplitButtonCollection
@method
@returns RadToolBarSplitButtonCollection
*/
get_buttons(): Telerik.Web.UI.RadToolBarButtonCollection;
        /**
Gets a value indicating if validation is performed when the RadToolbarSplitButton is clicked.
@method
@returns boolean
*/
get_causesValidation(): boolean;
        /**
Gets the DOM element for the UL element that lists the toolbar buttons.
@method
@returns HTML element
*/
get_childListElement(): HTMLElement;
        /**
True if the item is clicked.
@method
@returns boolean
*/
get_clicked(): boolean;
        /**
Returns the name of the CSS class applied to the button when clicked.
@method
@returns The value indicating the Css class name
*/
get_clickedCssClass(): string;
        /**
Returns the URL of the image when it is clicked.
@method
@returns 
*/
get_clickedImageUrl(): string;
        /**
Returns the value of the CommandArgument property.
@method
@returns string
*/
get_commandArgument(): string;
        /**
Returns the name of the command associated with the item.
@method
@returns The value indicating the command
*/
get_commandName(): string;
        /**
Returns the index of the Default Button.
@method
@returns index
*/
get_defaultButtonIndex(): number;
        /**
Gets the CSS class for the item when it is disabled.
@method
@returns 
*/
get_disabledCssClass(): string;
        /**
Returns the full path to the image of a disabled item
@method
@returns The value indicating the image url
*/
get_disabledImageUrl(): string;
        /**
Returns the DOM element for the item's drop-down list.
@method
@returns HTML element
*/
get_dropDownElement(): HTMLElement;
        /**
Returns true if the drop-down is opened.
@method
@returns 
*/
get_dropDownVisible(): boolean;
        /**
Gets a value indicating if the RadToolbarSplitButton will use the DefaultButton behaviour.
@method
@returns boolean
*/
get_enableDefaultButton(): boolean;
        /**
Gets whether the item is enabled.
@method
@returns Value indicating whether item is enabled.
*/
get_enabled(): boolean;
        /**
Gets the expand direction of the Toolbar.
@method
@returns 
*/
get_expandDirection(): Telerik.Web.UI.ExpandDirection;
        /**
True if the item is focused.
@method
@returns 
*/
get_focused(): boolean;
        /**
Returns the name of the CSS class applied to the button when on focus.
@method
@returns The value indicating the Css class name
*/
get_focusedCssClass(): string;
        /**
Returns the URL of the image when on focus.
@method
@returns string
*/
get_focusedImageUrl(): string;
        /**
True if the item is hovered.
@method
@returns boolean
*/
get_hovered(): boolean;
        /**
Returns the name of the CSS class applied to the button when hovered.
@method
@returns The value indicating the Css class name
*/
get_hoveredCssClass(): string;
        /**
Returns the URL of the hovered-state image.
@method
@returns 
*/
get_hoveredImageUrl(): string;
        /**
Gets the DOM element for the image of the item.
@method
@returns HTML element
*/
get_imageElement(): HTMLElement;
        /**
Gets the image position of the toolbar item.
@method
@returns 
*/
get_imagePosition(): Telerik.Web.UI.ToolBarImagePosition;
        /**
Returns the URL of the image.
@method
@returns 
*/
get_imageUrl(): string;
        /**
Gets the DOM element for the innermost SPAN that wraps the item.
@method
@returns HTML element
*/
get_innerWrapElement(): HTMLElement;
        /**
Gets the anchor DOM element of the toolbar button.
@method
@returns HTML element
*/
get_linkElement(): HTMLElement;
        /**
Gets the DOM element for the middle SPAN that wraps the item.
@method
@returns HTML element
*/
get_middleWrapElement(): HTMLElement;
        /**
Gets the Url to which the toolbar button navigates when selected.
@method
@returns The value indicating the Url
*/
get_navigateUrl(): string;
        /**
Gets the DOM element for the outermost SPAN that wraps the item.
@method
@returns HTML element
*/
get_outerWrapElement(): HTMLElement;
        /**
True if postback is enabled, false otherwise.
@method
@returns boolean
*/
get_postBack(): boolean;
        /**
Gets the Url of the page to post to from the current page.
@method
@returns the page Url
*/
get_postBackUrl(): string;
        /**
Gets the target of the item. If a target is not set, returns null.
@method
@returns The value indicating the name of the target
*/
get_target(): string;
        /**
Returns the text of the item.
@method
@returns string
*/
get_text(): string;
        /**
Gets the DOM element for the text of the item.
@method
@returns HTML element
*/
get_textElement(): HTMLElement;
        /**
Returns the toolbar to which the item belongs.
@method
@returns RadToolBar
*/
get_toolBar(): Telerik.Web.UI.RadToolBar;
        /**
Returns the text of the item's tool tip.
@method
@returns 
*/
get_toolTip(): string;
        /**
Gets the name of the validation group to which the RadToolbarSplitButton belongs.
@method
@returns The name of the validation group
*/
get_validationGroup(): string;
        /**
Returns the value of the item.
@method
@returns 
*/
get_value(): string;
        /**
True if the item is visible.
@method
@returns boolean
*/
get_visible(): boolean;
        /**
Hides the toolbar item.
@method
@returns 
*/
hide(): void;
        /**
Closes the drop-down list.
@method
@returns 
*/
hideDropDown(): void;
        /**
Gets a value indicating if validation is performed when the RadToolbarSplitButton is clicked.
@method
@param value - value
@returns 
*/
set_causesValidation(value: boolean): void;
        /**
Sets the name of the CSS class to be applied to the button when clicked.
@method
@param value - value
@returns 
*/
set_clickedCssClass(value: string): void;
        /**
Sets the URL of the image when it is clicked.
@method
@param value - value
@returns 
*/
set_clickedImageUrl(value: string): void;
        /**
Sets the value of the CommandArgument property.
@method
@param value - value
@returns 
*/
set_commandArgument(value: string): void;
        /**
Sets the name of the command associated with the item.
@method
@param value - value
@returns 
*/
set_commandName(value: string): void;
        /**
Sets the value indicating the index of the Default Button.
@method
@param value - value
@returns 
*/
set_defaultButtonIndex(value: number): void;
        /**
Sets the CSS class for the item when it is disabled.
@method
@param value - value
@returns 
*/
set_disabledCssClass(value: string): void;
        /**
Sets the DisabledImageUrl property of the item
@method
@param value - value
@returns 
*/
set_disabledImageUrl(value: string): void;
        /**
Sets a value indicating if the RadToolbarSplitButton will use the DefaultButton behaviour.
@method
@param value - value
@returns 
*/
set_enableDefaultButton(value: boolean): void;
        /**
Sets whether the item is enabled.
@method
@param value - value
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the expand direction of the Toolbar.
@method
@param value - 
@returns 
*/
set_expandDirection(value: Telerik.Web.UI.ExpandDirection): void;
        /**
Sets if the item is focused.
@method
@param value - value
@returns 
*/
set_focused(value: boolean): void;
        /**
Sets the name of the CSS class to be applied to the button when on focus.
@method
@param value - value
@returns 
*/
set_focusedCssClass(value: string): void;
        /**
Sets the URL of the image when on focus.
@method
@param value - value
@returns 
*/
set_focusedImageUrl(value: string): void;
        /**
Sets the name of the CSS class to be applied to the button when hovered.
@method
@param value - value
@returns 
*/
set_hoveredCssClass(value: string): void;
        /**
Sets the URL for the hovered-state image.
@method
@param value - value
@returns 
*/
set_hoveredImageUrl(value: string): void;
        /**
Sets the image position of the toolbar item.
@method
@param value - 
@returns 
*/
set_imagePosition(value: Telerik.Web.UI.ToolBarImagePosition): void;
        /**
Sets the URL for the image.
@method
@param value - value
@returns 
*/
set_imageUrl(value: string): void;
        /**
Sets the URL to which the toolbar button navigates when selected.
@method
@param value - value
@returns 
*/
set_navigateUrl(value: string): void;
        /**
Determines if the Node should postback.
@method
@param value - value
@returns 
*/
set_postBack(value: boolean): void;
        /**
Sets the Url of the page to post to from the current page.
@method
@param value - value
@returns 
*/
set_postBackUrl(value: string): void;
        /**
Sets the target of the Node.
@method
@param value - value
@returns 
*/
set_target(value: string): void;
        /**
Sets the text of the item.
@method
@param text - text
@returns 
*/
set_text(text: string): void;
        /**
Sets the text of the item's tool tip.
@method
@param value - value
@returns 
*/
set_toolTip(value: string): void;
        /**
Sets the name of the validation group to which the RadToolbarSplitButton belongs.
@method
@param value - value
@returns 
*/
set_validationGroup(value: string): void;
        /**
Sets the value of the item.
@method
@param value - 
@returns 
*/
set_value(value: string): void;
        /**
Sets if the item is visible.
@method
@param value - value
@returns 
*/
set_visible(value: boolean): void;
        /**
Shows the toolbar item.
@method
@returns 
*/
show(): void;
        /**
Opens the drop-down list.
@method
@returns 
*/
showDropDown(): void;
    }


    class RadToolTip  extends Telerik.Web.UI.RadWebControl {
        /**
Returns a reference to the tooltip's close button when HideEvent="ManualClose"
@method
@returns 
*/
getManualCloseButton(): any;
        /**
Gets animation value for the tooltip
@method
@returns 
*/
get_animation(): Telerik.Web.UI.ToolTipAnimation;
        /**
Gets animation duration value for the tooltip
@method
@returns 
*/
get_animationDuration(): number;
        /**
Gets delay in milliseconds for the tooltip to close automatically
@method
@returns 
*/
get_autoCloseDelay(): number;
        /**
Gets the current content of the tooltip
@method
@returns 
*/
get_content(): string;
        /**
Gets the content element of the tooltip
@method
@returns 
*/
get_contentElement(): any;
        /**
Gets a new overflow value for the tooltip content area
@method
@returns 
*/
get_contentScrolling(): Telerik.Web.UI.ToolTipScrolling;
        /**
Gets a value indicating whether the tooltip should have a shadow.
@method
@returns 
*/
get_enableShadow(): boolean;
        /**
Gets height of the tooltip
@method
@returns 
*/
get_height(): number;
        /**
Gets delay in milliseconds after which the tooltip will hide after the mouse leaves the target element
@method
@returns 
*/
get_hideDelay(): number;
        /**
Gets a value indicating whether the Alt attribute of the target should be ignored.
@method
@returns 
*/
get_ignoreAltAttribute(): boolean;
        /**
Gets a value indicating whether a tooltip is modal or not
@method
@returns 
*/
get_modal(): boolean;
        /**
Gets whether the tooltip should follow the mouse movement or not
@method
@returns 
*/
get_mouseTrailing(): boolean;
        /**
Gets the horizontal offset relative to its target element
@method
@returns 
*/
get_offsetX(): number;
        /**
Gets the vertical offset relative to its target element
@method
@returns 
*/
get_offsetY(): number;
        /**
Gets a value indicating whether the tooltip has an overlay element.
@method
@returns 
*/
get_overlay(): boolean;
        /**
Returns a reference to the popup element
@method
@returns 
*/
get_popupElement(): any;
        /**
Gets the relative position of the tooltip to its target element
@method
@returns 
*/
get_position(): Telerik.Web.UI.ToolTipPosition;
        /**
Gets whether the tooltip is positioned relative to the mouse, relative to the tooltip or to the browser window
@method
@returns 
*/
get_relativeTo(): Telerik.Web.UI.ToolTipRelativeDisplay;
        /**
Gets whether the tooltip callout image will be displayed
@method
@returns 
*/
get_showCallout(): boolean;
        /**
Gets delay in milliseconds for the tooltip to appear
@method
@returns 
*/
get_showDelay(): number;
        /**
Gets a reference to the tooltip target element
@method
@returns 
*/
get_targetControl(): any;
        /**
Gets the client ID of the tooltip's target control
@method
@returns 
*/
get_targetControlID(): string;
        /**
Gets the text of the tooltip
@method
@returns 
*/
get_text(): string;
        /**
Gets the title of the tooltip
@method
@returns 
*/
get_title(): string;
        /**
Gets the arbitrary value associated with a tooltip that can be used in scenarios involving AJAX or web services
@method
@returns 
*/
get_value(): string;
        /**
Gets width of the tooltip
@method
@returns 
*/
get_width(): number;
        /**
Hides the tooltip
@method
@returns 
*/
hide(): void;
        /**
Returns whether the tooltip control is displaying modally
@method
@returns 
*/
isModal(): void;
        /**
Indicates whether the RadToolTip control is currently visible
@method
@returns 
*/
isVisible(): void;
        /**
Sets animation value for the tooltip
@method
@param value - 
@returns 
*/
set_animation(value: Telerik.Web.UI.ToolTipAnimation): void;
        /**
Sets animation duration value for the tooltip
@method
@param value - 
@returns 
*/
set_animationDuration(value: number): void;
        /**
Sets delay in milliseconds for the tooltip to close automatically
@method
@param value - 
@returns 
*/
set_autoCloseDelay(value: number): void;
        /**
Sets new content to the tooltip
@method
@param text - 
@returns 
*/
set_content(text: string): void;
        /**
Sets a new content element to the tooltip
@method
@param contentElement - 
@returns 
*/
set_contentElement(contentElement: Sys.UI.DomElement): void;
        /**
Sets a new overflow value for the tooltip content area
@method
@param value - 
@returns 
*/
set_contentScrolling(value: Telerik.Web.UI.ToolTipScrolling): void;
        /**
Sets a value indicating whether the tooltip should have a shadow.
@method
@param value - 
@returns 
*/
set_enableShadow(value: boolean): void;
        /**
Sets new height to the tooltip
@method
@param value - 
@returns 
*/
set_height(value: number): void;
        /**
Sets delay in milliseconds for the tooltip to hide after the mouse leaves the target element
@method
@param value - 
@returns 
*/
set_hideDelay(value: number): void;
        /**
Sets a value indicating whether the Alt attribute of the target should be ignored.
@method
@param value - 
@returns 
*/
set_ignoreAltAttribute(value: boolean): void;
        /**
Sets a value indicating whether a tooltip is modal or not
@method
@param value - 
@returns 
*/
set_modal(value: boolean): void;
        /**
Sets whether the tooltip should follow the mouse movement or not
@method
@param value - 
@returns 
*/
set_mouseTrailing(value: boolean): void;
        /**
Sets a new horizontal offset relative to its target element
@method
@param value - 
@returns 
*/
set_offsetX(value: number): void;
        /**
Sets a new vertical offset relative to its target element
@method
@param value - 
@returns 
*/
set_offsetY(value: number): void;
        /**
Sets a value indicating whether the tooltip will create an overlay element.
@method
@param value - 
@returns 
*/
set_overlay(value: boolean): void;
        /**
Sets a new relative position of the tooltip to its target element
@method
@param value - 
@returns 
*/
set_position(value: Telerik.Web.UI.ToolTipPosition): void;
        /**
Sets whether the tooltip is positioned relative to the mouse, relative to the tooltip or to the browser window
@method
@param value - 
@returns 
*/
set_relativeTo(value: Telerik.Web.UI.ToolTipRelativeDisplay): void;
        /**
Sets whether the tooltip callout image will be displayed
@method
@param value - 
@returns 
*/
set_showCallout(value: boolean): void;
        /**
Sets delay in milliseconds for the tooltip to appear
@method
@param value - 
@returns 
*/
set_showDelay(value: number): void;
        /**
Sets a new target control to the tooltip
@method
@param value - 
@returns 
*/
set_targetControl(value: Sys.UI.DomElement): void;
        /**
Sets the cleint ID of a new target control to the tooltip
@method
@param value - 
@returns 
*/
set_targetControlID(value: string): void;
        /**
Sets new text to the tooltip
@method
@param value - 
@returns 
*/
set_text(value: string): void;
        /**
Sets a new title to the tooltip
@method
@param value - 
@returns 
*/
set_title(value: string): void;
        /**
Sets an arbitrary value associated with a tooltip that can be used in scenarios involving AJAX or web services
@method
@param value - 
@returns 
*/
set_value(value: string): void;
        /**
Sets new width to the tooltip
@method
@param value - 
@returns 
*/
set_width(value: number): void;
        /**
Displays the tooltip at the proper position, relative to its target control.
@method
@returns 
*/
show(): void;
        /**
Add a handler to the BeforeHide event
*/
add_beforeHide(handler: Function): void;
        /**
Add a handler to the BeforeShow event
*/
add_beforeShow(handler: Function): void;
        /**
Add a handler to the Hide event
*/
add_hide(handler: Function): void;
        /**
Add a handler to the Show event
*/
add_show(handler: Function): void;
        /**
Remove a handler from the BeforeHide event
*/
remove_beforeHide(handler: Function): void;
        /**
Remove a handler from the BeforeShow event
*/
remove_beforeShow(handler: Function): void;
        /**
Remove a handler from the Hide event
*/
remove_hide(handler: Function): void;
        /**
Remove a handler from the Show event
*/
remove_show(handler: Function): void;
    }


    class RadToolTipManager  extends Telerik.Web.UI.RadWebControl {
        /**
Clears cached proeprties of the manager. This property should be used when a setting of the manager is changed on the client and the change should be applied to new dynamically created tooltips.
@method
@returns 
*/
clearCloneCache(): void;
        /**
Creates a tooltip for a particular element
@method
@param targetElement - 
@returns 
*/
createToolTip(targetElement: any): void;
        /**
Gets the tooltip associated with a corresponding target element if such a tooltip exists
@method
@param element - 
@returns 
*/
getToolTipByElement(element: any): Telerik.Web.UI.RadToolTip;
        /**
Gets a value whether the RadToolTipManager, when its TargetControls collection is empty will tooltipify automatically all elements on the page that have a "title" attribute
@method
@returns 
*/
get_autoTooltipify(): boolean;
        /**
Gets a value which determines whether tooltip content should be cached after first load on demand request
@method
@returns 
*/
get_enableDataCaching(): boolean;
        /**
Gets the ID of the zone which should be automatically tooltipified
@method
@returns 
*/
get_toolTipZoneID(): string;
        /**
Sets a value whether the RadToolTipManager, when its TargetControls collection is empty, will tooltipify automatically all elements on the page that have a "title" attribute
@method
@param value - 
@returns 
*/
set_autoTooltipify(value: boolean): void;
        /**
Sets a value which determines whether tooltip content should be cached after first load on demand request
@method
@param value - 
@returns 
*/
set_enableDataCaching(value: boolean): void;
        /**
Sets the ID of the zone which should be automatically tooltipified
@method
@param value - 
@returns 
*/
set_toolTipZoneID(value: string): void;
        /**
Add a handler to the ResponseEnd event
*/
add_requestEnd(handler: Function): void;
        /**
Add a handler to the RequestStart event
*/
add_requestStart(handler: Function): void;
        /**
Add a handler to the ResponseError event
*/
add_responseError(handler: Function): void;
        /**
Remove a handler from the RequestStart event
*/
remove_requestEnd(handler: Function): void;
        /**
Remove a handler to the ResponseEnd event
*/
remove_responseError(handler: Function): void;
    }


    class RadTreeList  extends Telerik.Web.UI.RadWebControl {
        /**
Gets a collection of all selected items in RadTreeList.
@method
@returns 
*/
get_selectedItems(): any;
        /**
Gets the unique id of RadTreeList's container
@method
@returns 
*/
get_uniqueID(): void;
        /**
A property which gets a reference to the owner RadTreeList object.
@method
@returns 
*/
get_owner(): void;
        /**
A property which gets value of the client datakey name for this item  by the given keyname.
@method
@returns 
*/
get_dataKeyValue(): void;
        /**
Changes the page in RadTreeList.
@method
@param command - One of the page commands
@returns 
*/
page(command: string): void;
        /**
Selects a RadTreeListDataItem.
@method
@param item - 
@returns 
*/
selectItem(item: Telerik.Web.UI.RadTreeListDataItem): void;
        /**
Gets the RadTreeListDataItem instance that is the container of the specified element.
@method
@param element - An HTML DOM element that is nested in a tree list item.
@returns 
*/
getContainerItem(element: HTMLElement): Telerik.Web.UI.RadTreeListDataItem;
        /**
Saves the client settings of RadTreeList for sending to the server.
@method
@returns 
*/
saveClientState(): void;
        /**
A property which returns the unique name of the column.
@method
@returns 
*/
get_uniqueName(): void;
        /**
Property which sets the current page index by firing a Page command.
@method
@returns 
*/
set_currentPageIndex(): void;
        /**
Deselects a RadTreeListDataItem.
@method
@param item - 
@returns 
*/
deselectItem(item: Telerik.Web.UI.RadTreeListDataItem): void;
        /**
Selects all RadTreeListDataItems in the current RadTreeList instance.
@method
@returns 
*/
selectAllItems(): void;
        /**
Saves the client settings of RadTreeList for sending to the server if the state has been modified. RadTreeList is notified of state changes using the notifyClientStateModified method.
@method
@returns 
*/
updateClientStateIfModified(): void;
        /**
A property which gets the parent of the current item.
@method
@returns 
*/
get_parentItem(): void;
        /**
Notifies RadTreeList that its client settings have been modified.
@method
@returns 
*/
notifyClientStateModified(): void;
        /**
A boolean property indicating whether the item is selected or not.
@method
@returns 
*/
get_selected(): void;
        /**
The column at the specified columnIndex will be hidden.
@method
@returns 
*/
hide(): void;
        /**
Deselects all RadTreeListDataItems in the current RadTreeList instance.
@method
@returns 
*/
deselectAllItems(): void;
        /**
A property which gets the next sibling of the current item.
@method
@returns 
*/
get_nextSibling(): void;
        /**
The column at the specified columnIndex will be shown.
@method
@returns 
*/
show(): void;
        /**
A property which gets the index of the current item in the treelist hierarchy.
@method
@returns 
*/
get_hierarchicalIndex(): void;
        /**
Iterates over all RadTreeListDataItems in the current RadTreeList instance and calls the specified function in the context of each data item.
@method
@param func - The function to call in the context of each RadTreeListDataItem.
@returns 
*/
forEachDataItem(func: Function): void;
        /**
Property which gets a collection of the client datakey names.
@method
@returns 
*/
get_clientDataKeyNames(): void;
        /**
A property which returns whether the current item is root item for the treelist.
@method
@returns 
*/
get_isRoot(): void;
        /**
Property which returns a collection of the columns in the treelist.
@method
@returns 
*/
get_columns(): void;
        /**
A property which gets the previous sibling of the current item.
@method
@returns 
*/
get_previousSibling(): void;
        /**
Gets an array of all items in the current RadTreeList instance.
@method
@returns 
*/
get_dataItems(): any;
        /**
Gets a RadTreeListDataItem instance by specified id, row index or a row DOM element.
@method
@param rowIdIndex - An id
@returns 
*/
getItem(rowIdIndex: any): Telerik.Web.UI.RadTreeListDataItem;
        /**
Property which returns the current page index of the treelist.
@method
@returns 
*/
get_currentPageIndex(): void;
        /**
Fires command with specified command name and argument
@method
@param commandName - The name of the command that will be executed.
@param commandArgument - The command argument with which the command will be executed.
@returns 
*/
fireCommand(commandName: string, commandArgument: string): void;
        /**
Property which gets the client side object for the column by a given unique name.
@method
@returns 
*/
getColumnByUniqueName(): void;
        /**
A property which gets a collection of the visible child items of the current item.
@method
@returns 
*/
get_childItems(): void;
        /**
Gets the indexes of all selected items in RadTreeList.
@method
@returns 
*/
get_selectedIndexes(): any;
        /**
Sets the collection of all selected indexes in RadTreeList.
@method
@param value - An array of integer indexes.
@returns 
*/
set_selectedIndexes(value: any): void;
        /**
A property which gets the index of the current item in the current page regardless of its nested level.
@method
@returns 
*/
get_displayIndex(): void;
        /**
Gets a dictionary of non-default client settings for RadTreeList.
@method
@returns 
*/
get_clientSettings(): void;
        /**
A property which selects or deselects the current item based on the boolean value passed.
@method
@returns 
*/
set_selected(): void;
        /**
A property which returns whether the current item is expanded.
@method
@returns 
*/
get_expanded(): void;
        /**
Property which returns the table cell of the TreeList by a given item(row) and column unique name
@method
@returns 
*/
getCellByColumnUniqueName(): void;
        /**
This event is fired when a right click on a TreeListDataItem happens.
*/
add_itemContextMenu(handler: Function): void;
        /**
This event is fired when a TreeListDataItem is selected on the client.
*/
add_itemSelected(handler: Function): void;
        /**
This event is fired when a TreeListDataItem is about to be selected on the client. This event
*/
add_itemSelecting(handler: Function): void;
        /**
This event is fired when a TreeListDataItem is about to be deselected on the client. This
*/
add_itemDeselecting(handler: Function): void;
        /**
This event is fired when a TreeListDataItem is being dropped.
*/
add_itemDropping(handler: Function): void;
        /**
This event is fired when the RadTreeList client component is initializing.
*/
add_treeListCreating(handler: Function): void;
        /**
This event is fired when each of the TreeListDataItem client components is created.
*/
add_itemCreated(handler: Function): void;
        /**
This event is fired when a data item is double-clicked in RadTreeList.
*/
add_itemDblClick(handler: Function): void;
        /**
This event is fired after the treelist column is resized.
*/
add_columnResized(handler: Function): void;
        /**
This event is fired when the RadTreeList client component is initialized.
*/
add_treeListCreated(handler: Function): void;
        /**
This event is fired when a TreeListDataItem is deselected on the client.
*/
add_itemDeselected(handler: Function): void;
        /**
This event is fired when a TreeListDataItem has been dropped after dragging.
*/
add_itemDropped(handler: Function): void;
        /**
This event is fired when the treelist is scrolled.
*/
add_scroll(handler: Function): void;
        /**
This event is fired before the treelist column is resized.
*/
add_columnResizing(handler: Function): void;
        /**
This event is fired when a TreeListDataItem is being dragged.
*/
add_itemDragging(handler: Function): void;
        /**
This event is fired when the RadTreeList client component is about to be disposed.
*/
add_treeListDestroying(handler: Function): void;
        /**
This event is fired when a drag action is started upon the TreeListDataItem.
*/
add_itemDragStarted(handler: Function): void;
        /**
This event is fired (only when Keyboard Navigation is enabled) when any key is pressed inside the RadTreeList and
*/
add_keyPress(handler: Function): void;
        /**
This event is fired when a data item is clicked in RadTreeList.
*/
add_itemClick(handler: Function): void;
    }


    class RadTreeListDataItem   {
    }


    class RadTreeNode  extends Telerik.Web.UI.ControlItem {
        /**
Sets the ExpandMode of the Node. ExpandMode can be: Telerik.Web.UI.TreeNodeExpandMode.ClientSide; Telerik.Web.UI.TreeNodeExpandMode.ServerSide; Telerik.Web.UI.TreeNodeExpandMode.ServerSideCallBack; Telerik.Web.UI.TreeNodeExpandMode.WebService;
@method
@param value - value
@returns 
*/
set_expandMode(value: Telerik.Web.UI.TreeNodeExpandMode): void;
        /**
Returns the checkability of the Node
@method
@param value - value
@returns 
*/
get_checkable(value: boolean): void;
        /**
True, if Node edit is allowed, false, otherwise.
@method
@returns 
*/
get_allowEdit(): boolean;
        /**
Unselects a Node
@method
@returns 
*/
unselect(): void;
        /**
Sets the value of ContentCssClass property of the Node
@method
@param value - value
@returns 
*/
set_contentCssClass(value: string): void;
        /**
Allows the Node to be edited. This is equivalent to the user clicking the Node twice or pressing F2.
@method
@returns 
*/
startEdit(): void;
        /**
Gets the DOM Element of the text set to the Node. Note: Changes to the text element are not persisted across postbacks.;
@method
@returns DOM Element for the text of the Node.
*/
get_textElement(): HTMLElement;
        /**
True if the item is visible.
@method
@returns 
*/
get_visible(): boolean;
        /**

@method
@param value - Sets the DOM element of the node
@returns 
*/
set_element(value: HTMLElement): void;
        /**
Returns the DOM element for a Node.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Takes the Node out of editing mode.
@method
@returns 
*/
endEdit(): void;
        /**

@method
@returns 
*/
get_lastVisibleChild(): void;
        /**
Returns the path to the image displayed next to the Node when hovered.
@method
@returns 
*/
get_hoveredImageUrl(): string;
        /**
Enables or disables a Node based on the boolean parameter passed in.
@method
@param value - value
@returns 
*/
set_enabled(value: boolean): void;
        /**
True, if dropping is allowed, false otherwise.
@method
@returns 
*/
get_allowDrop(): boolean;
        /**
Returns the current check state of a node. It can be one of the following:Telerik.Web.UI.TreeNodeCheckState.Unchecked, Telerik.Web.UI.TreeNodeCheckState.Checked or Telerik.Web.UI.TreeNodeCheckState.Indeterminate
@method
@returns 
*/
get_checkState(): Telerik.Web.UI.TreeNodeCheckState;
        /**
Returns the name of the CSS class applied to the Node.
@method
@returns 
*/
get_cssClass(): string;
        /**
Enables a Node
@method
@returns 
*/
enable(): void;
        /**
Returns the value of ContentCssClass property of the Node
@method
@returns 
*/
get_contentCssClass(): string;
        /**
Sets the path to the image displayed next to the Node when expanded.
@method
@param value - value
@returns 
*/
set_expandedImageUrl(value: string): void;
        /**
Returns the URL of the Node(the href attribute of the link). Null if the NavigateUrl server property is not set.
@method
@returns String
*/
get_navigateUrl(): string;
        /**
Shows the loading message at the specified position. The available positions are: Telerik.Web.UI.TreeViewLoadingStatusPosition.BelowNodeTextTelerik.Web.UI.TreeViewLoadingStatusPosition.AfterNodeText Telerik.Web.UI.TreeViewLoadingStatusPosition.BeforeNodeText
@method
@param text - text
@param position - position
@returns 
*/
showLoadingStatus(text: string, position: Telerik.Web.UI.TreeViewLoadingStatusPosition): void;
        /**
Gets the target of the Node. If a target is not set, returns null.
@method
@returns 
*/
get_target(): string;
        /**
True if postback is enabled, false otherwise.
@method
@returns 
*/
get_postBack(): boolean;
        /**
Sets the path to the image displayed next to the Node when hovered.
@method
@param value - value
@returns 
*/
set_hoveredImageUrl(value: string): void;
        /**
Hides the loading message.
@method
@returns 
*/
hideLoadingStatus(): void;
        /**
Returns the path to the image displayed next to the Node.
@method
@returns 
*/
get_imageUrl(): string;
        /**
Returns the DOM element representing the toggle image. Null, if the Node has no child Nodes.
@method
@returns DOM Element for the toggle image.
*/
get_toggleElement(): HTMLElement;
        /**
Highlights a Node. Highlighted Nodes are visually emphasized.
@method
@returns 
*/
highlight(): void;
        /**
Returns a Collection of all custom attributes set to the Node.
@method
@returns 
*/
get_attributes(): any;
        /**
Evaluates the template against the Node's data item and applies it.
@method
@returns 
*/
bindTemplate(): void;
        /**
Gets the enabled state of the Node. The Node is enabled if get_enabled() returns true.
@method
@returns 
*/
get_enabled(): any;
        /**
Returns the context menu object (if any).
@method
@returns 
*/
get_contextMenu(): Telerik.Web.UI.RadMenu;
        /**
Sets the name of the CSS class to be applied to the Node.
@method
@param value - value
@returns 
*/
set_cssClass(value: string): void;
        /**
Returns the path to the image displayed next to the Node when expanded.
@method
@returns 
*/
get_expandedImageUrl(): string;
        /**
Gets the value of the Node.
@method
@returns 
*/
get_value(): any;
        /**
Returns an array of all the child Nodes of this node.
@method
@returns Returns an array of all the child Nodes of this node.
*/
get_allNodes(): Telerik.Web.UI.RadTreeNode[][];
        /**
Returns the ExpandMode of the Node. ExpandMode can be: 0 - ExpandMode.ClientSide; 1 - ExpandMode.ServerSide; 2 - ExpandMode.ServerSideCallBack; 3 - ExpandMode.WebService;
@method
@returns Int
*/
get_expandMode(): number;
        /**
Collapses a Node
@method
@returns 
*/
collapse(): void;
        /**
Expands or collapses a Node.
@method
@param value - value
@returns 
*/
set_expanded(value: boolean): void;
        /**

@method
@returns 
*/
get_resolvedContextMenuID(): void;
        /**

@method
@returns 
*/
get_nextVisibleNode(): void;
        /**
Set the visibility of a Node.
@method
@param value - value
@returns 
*/
set_visible(value: boolean): void;
        /**
Returns the name of the CSS class applied to the Node when hovered.
@method
@returns 
*/
get_hoveredCssClass(): string;
        /**
Expands a Node
@method
@returns 
*/
expand(): void;
        /**
Returns the value of the Node's ClientTemplate property.
@method
@returns 
*/
get_clientTemplate(): void;
        /**
Gets the DOM element for the link of the Node when NavigateUrl is set
@method
@returns DOM element
*/
get_linkElement(): HTMLElement;
        /**
Returns the index of the node in the nodes collection of its parent.
@method
@returns 
*/
get_index(): any;
        /**
Sets the ID of the Context menu to be assigned to the Node.
@method
@param contextMenuID - contextMenuID
@returns 
*/
set_contextMenuID(contextMenuID: string): void;
        /**
Sets the path to the image displayed next to the Node when disabled.
@method
@param value - value
@returns 
*/
set_disabledImageUrl(value: string): void;
        /**
Returns the path to the image displayed next to the Node when disabled.
@method
@returns 
*/
get_disabledImageUrl(): string;
        /**
Gets an instance of the next sibling of a Node.
@method
@returns 
*/
get_nextNode(): Telerik.Web.UI.RadTreeNode;
        /**
Clones the node with or without the child-nodes (with respect to the boolean parameter cloneChildren).
@method
@param cloneChildren - Determines whether the child nodes should be cloned.
@returns The cloned node.
*/
clone(cloneChildren: boolean): Telerik.Web.UI.RadTreeNode;
        /**
Gets the DOM Element of the image set to the node. Note: Images are set using the RadTreeView ImageUrl property.
@method
@returns DOM Element for the image.
*/
get_imageElement(): HTMLElement;
        /**

@method
@returns 
*/
get_lastChild(): void;
        /**
Returns the RadTreeNodeCollection of a Node.
@method
@returns 
*/
get_nodes(): Telerik.Web.UI.RadTreeNodeCollection;
        /**
Enables/Disables dragging.
@method
@param value - value
@returns 
*/
set_allowDrag(value: boolean): void;
        /**
Gets the category of the Node.
@method
@returns 
*/
get_category(): string;
        /**
Sets the URL of the Node. Works only if the NavigateUrl property has been set at the server-side beforehand or if the Node is not added at the client-side.
@method
@param value - value
@returns 
*/
set_navigateUrl(value: string): void;
        /**
Sets the path to the image displayed next to the Node when selected.
@method
@param value - value
@returns 
*/
set_selectedImageUrl(value: string): void;
        /**
Gets the selected state of a Node. Returns true if the Node is selected.
@method
@returns 
*/
get_selected(): boolean;
        /**
Allows/Disallows Node editing.
@method
@param value - value
@returns 
*/
set_allowEdit(value: boolean): void;
        /**
Unmarks the checkbox for a Node
@method
@returns 
*/
uncheck(): void;
        /**
Collapses an expanded Node or expands a collapsed Node.
@method
@returns 
*/
toggle(): void;
        /**
Gets an instance of the previous sibling of a Node.
@method
@returns RadTreeNode
*/
get_previousNode(): Telerik.Web.UI.RadTreeNode;
        /**
Returns the ID of the Context Menu assigned to the Node.
@method
@returns 
*/
get_contextMenuID(): string;
        /**
Marks the checkbox for a Node
@method
@returns 
*/
check(): void;
        /**
Determines if the Context Menu should be enabled.
@method
@param value - value
@returns 
*/
set_enableContextMenu(value: boolean): void;
        /**
Gets an instance to the parent RadTreeView.
@method
@returns 
*/
get_treeView(): Telerik.Web.UI.RadTreeView;
        /**
Enables/Disables the checkability of the Node.
@method
@param value - value
@returns 
*/
set_checkable(value: boolean): void;
        /**
Sets the value of the Node.
@method
@param string - 
@returns 
*/
set_value(string: any): any;
        /**
Sets the name of the CSS class to be applied to the Node when disabled.
@method
@param value - value
@returns 
*/
set_disabledCssClass(value: string): void;
        /**
Returns the DOM element for the list of the child Nodes. Null if there are no child Nodes.
@method
@returns DOM element for the child nodes list
*/
get_childListElement(): HTMLElement;
        /**
Determines if the Node should postback.
@method
@param value - value
@returns 
*/
set_postBack(value: boolean): void;
        /**
Sets the path to the image displayed next to the Node.
@method
@param value - value
@returns 
*/
set_imageUrl(value: string): void;
        /**

@method
@returns 
*/
get_contentElement(): void;
        /**
Enables/Disables dragging.
@method
@param value - value
@returns 
*/
set_allowDrop(value: boolean): void;
        /**
Sets the name of the CSS class to be applied to the Node when hovered.
@method
@param value - value
@returns 
*/
set_hoveredCssClass(value: string): void;
        /**
Sets the category of the Node.
@method
@param value - value
@returns 
*/
set_category(value: string): void;
        /**
Returns the name of the CSS class applied to the Node when selected.
@method
@returns 
*/
get_selectedCssClass(): string;
        /**
Retrieves the text for a Node.
@method
@returns 
*/
get_text(): string;
        /**
Returns the DOM element representing loading status of the Node.
@method
@returns DOM Element
*/
get_loadingStatusElement(): HTMLElement;
        /**
Sets the target of the Node.
@method
@param value - value
@returns 
*/
set_target(value: string): void;
        /**
Causes the Node to scroll into view, aligning the Node to the bottom of the TreeView area.
@method
@returns 
*/
scrollIntoView(): void;
        /**
Selects a Node
@method
@returns 
*/
select(): void;
        /**

@method
@returns 
*/
get_prevVisibleNode(): void;
        /**
Returns the DOM element for the input when the Node is in Edit Mode
@method
@returns DOM Element
*/
get_inputElement(): HTMLElement;
        /**
Sets the text of the Node.
@method
@param text - text
@returns 
*/
set_text(text: string): void;
        /**
Marks or unmarks the checkbox for a Node.
@method
@param value - Boolean
@returns 
*/
set_checked(value: boolean): void;
        /**
Gets the expanded/collapsed state of a Node. The Node is expanded if get_expanded() returns true.
@method
@returns 
*/
get_expanded(): boolean;
        /**
True if the Context Menus are enabled,False otherwise.
@method
@returns 
*/
get_enableContextMenu(): boolean;
        /**
Disables a Node
@method
@returns 
*/
disable(): void;
        /**
Gets the checked state of a Node. The Node is checked if get_checked() returns true.
@method
@returns 
*/
get_checked(): boolean;
        /**
Gets the DOM Element of the checkbox.
@method
@returns DOM Element for the checkbox.
*/
get_checkBoxElement(): HTMLElement;
        /**
Returns the name of the CSS class applied to the Node when disabled.
@method
@returns 
*/
get_disabledCssClass(): string;
        /**
Sets the ToolTip of the Node.
@method
@param value - value
@returns 
*/
set_toolTip(value: string): void;
        /**
Un-highlights a Node
@method
@returns 
*/
unhighlight(): void;
        /**
Gets the ToolTip of the Node. If a ToolTip is not set, returns null.
@method
@returns 
*/
get_toolTip(): string;
        /**
Sets the value of the Node's ClientTemplate property.
@method
@param value - value
@returns 
*/
set_clientTemplate(value: string): void;
        /**
True, if dragging is allowed, false otherwise.
@method
@returns 
*/
get_allowDrag(): boolean;
        /**
Returns true if both the Node and the tree are enabled. If one of them is disabled, the get_isEnabled returns false.
@method
@returns 
*/
get_isEnabled(): any;
        /**

@method
@returns 
*/
get_nodeData(): void;
        /**
Sets the name of the CSS class to be applied to the Node when selected.
@method
@param value - value
@returns 
*/
set_selectedCssClass(value: string): void;
        /**
Gets the Level of the Node in the TreeView structure. Root Nodes are at level 0, their children Nodes - at 1 and so on.
@method
@returns 
*/
get_level(): number;
        /**
Selects or unselects a Node based on the boolean parameter.
@method
@param value - value
@returns 
*/
set_selected(value: boolean): void;
        /**
Returns the path to the image displayed next to the Node when selected.
@method
@returns 
*/
get_selectedImageUrl(): string;
    }


    class RadTreeNodeCollection  extends Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.RadTreeNode> {
        /**
Gets the index of an node.
@method
@param node - The node to get the index of
@returns int
*/
indexOf(node: Telerik.Web.UI.RadTreeNode): number;
        /**
Iterates through the Items collection
@method
@param lambda - The function to execute on each iteration
@returns 
*/
forEach(lambda: Function): void;
        /**
Removes an node from the Items collection
@method
@param node - The node to remove
@returns 
*/
remove(node: Telerik.Web.UI.RadTreeNode): void;
        /**
Gets the last N nodes where N is passed as a parameter
@method
@param value - Indicates the last N nodes that should be returned
@returns 
*/
get_last(value: number): void;
        /**
Removes the node at the specified index.
@method
@param index - The index to remove at
@returns 
*/
removeAt(index: number): void;
        /**
Gets the Node from the Nodes collection residing at the index defined by the parameter passed to the function.
@method
@param index - index
@returns 
*/
getNode(index: number): Telerik.Web.UI.RadTreeNode;
        /**
Clears the Items collection of RadListBox
@method
@returns 
*/
clear(): void;
        /**
Returns the number of nodes in the Items collection.
@method
@returns The number of the items
*/
get_count(): number;
        /**
Adds a node to the Nodes collection.
@method
@param node - 
@returns 
*/
add(node: Telerik.Web.UI.RadTreeNode): void;
    }


    class RadTreeView  extends Telerik.Web.UI.ControlItemContainer {
        /**
Returns the DOM element for the dragged node (during OnClientNodeDragging event handler)
@method
@returns DOM element for the dragged node
*/
get_draggingClueElement(): HTMLElement;
        /**
Enables/Disables PersistLoadOnDemandNodes property.
@method
@param value - value
@returns 
*/
set_persistLoadOnDemandNodes(value: boolean): void;
        /**

@method
@returns 
*/
get_checkedIndexes(): void;
        /**
Displays the context menu for a Node which is equal to the first parameter using pair as a second parameter.
@method
@param node - node
@param domEvent - domEvent
@returns 
*/
showNodeContextMenu(node: Telerik.Web.UI.RadTreeNode, domEvent: Sys.UI.DomEvent): void;
        /**
Enables/Disables SingleExpandPath property.
@method
@param value - value
@returns 
*/
set_singleExpandPath(value: boolean): void;
        /**

@method
@returns 
*/
set_expandAnimation(): void;
        /**
Gets the first instance of a Node with the specified text.
@method
@param text - Text of the Node
@returns 
*/
findNodeByText(text: string): Telerik.Web.UI.RadTreeNode;
        /**
Unchecks the passed nodes. The parameter is only one and can be Telerik.Web.UI.RadTreeNodeCollection or regular Array.
@method
@param nodes - The nodes to be unchecked
@returns 
*/
uncheckNodes(nodes: Telerik.Web.UI.RadTreeNodeCollection): void;
        /**
True if the AllowNodeEditing property is enabled, false otherwise.
@method
@returns Boolean
*/
get_allowNodeEditing(): boolean;
        /**
Selects all Nodes at all levels of the tree
@method
@returns 
*/
selectAllNodes(): any;
        /**
Checks all nodes of the TreeView.
@method
@returns 
*/
checkAllNodes(): void;
        /**

@method
@returns 
*/
get_collapsedIndexes(): void;
        /**
Un-selects all Nodes at all levels of the tree.
@method
@returns 
*/
unselectAllNodes(): void;
        /**
Checks the passed nodes. The parameter is only one and can be Telerik.Web.UI.RadTreeNodeCollection or regular Array.
@method
@param nodes - The nodes to be checked
@returns 
*/
checkNodes(nodes: Telerik.Web.UI.RadTreeNodeCollection): void;
        /**
True if the EnableDragAndDropBetweenNodes property is enabled, false otherwise.
@method
@returns Boolean
*/
get_enableDragAndDropBetweenNodes(): boolean;
        /**
Sets the value of the TreeView's ClientNodeTemplate property.
@method
@param value - value
@returns 
*/
set_clientTemplate(value: string): void;
        /**
Returns the value of the RadTreeView's LoadingMessage property. The default value is "Loading..."
@method
@returns String
*/
get_loadingMessage(): string;
        /**
Gets the instance of the currently selected Node. Null if none.
@method
@returns RadTreeNode
*/
get_selectedNode(): Telerik.Web.UI.RadTreeNode;
        /**

@method
@returns 
*/
get_webServiceSettings(): void;
        /**
Unchecks all nodes of the TreeView.
@method
@returns 
*/
uncheckAllNodes(): void;
        /**
Gets the first instance of a Node with the specified value.
@method
@param value - Value of the Node
@returns 
*/
findNodeByValue(value: string): Telerik.Web.UI.RadTreeNode;
        /**

@method
@returns 
*/
set_nodeData(): void;
        /**
Enables/Disables multiple selection.
@method
@param value - value
@returns 
*/
set_multipleSelect(value: boolean): void;
        /**
Gets the server ID of the control.
@method
@returns 
*/
get_id(): any;
        /**
True if the EnableDragAndDrop property is enabled, false otherwise.
@method
@returns Boolean
*/
get_enableDragAndDrop(): boolean;
        /**

@method
@returns 
*/
set_webServiceSettings(): void;
        /**
Returns an Array of the treeview context menus
@method
@returns Array
*/
get_contextMenus(): any;
        /**
Enables/Disables drag and drop.
@method
@param value - value
@returns 
*/
set_enableDragAndDrop(value: boolean): void;
        /**
Writes the changes to the TreeView that were made since a previous call to trackChanges, so that they are preserved on the server as well.
@method
@returns 
*/
commitChanges(): void;
        /**
True if MultipleSelect property is enabled, false otherwise.
@method
@returns Boolean
*/
get_multipleSelect(): boolean;
        /**
Returns the DOM element for the root list of nodes in the treeview
@method
@returns DOM element for the root nodes list
*/
get_childListElement(): HTMLElement;
        /**

@method
@returns 
*/
set_contextMenuIDs(): void;
        /**
Gets an Array of all selected Nodes (useful when MultipleSelect property is trackChanges, so that they are preserved
@method
@returns Array
*/
get_selectedNodes(): any;
        /**

@method
@returns 
*/
get_selectedIndexes(): void;
        /**
Sets the value of LoadingStatusPosition property.
@method
@param value - value
@returns 
*/
set_loadingStatusPosition(value: number): void;
        /**
Returns the first RadTreeNode object whose NavigateUrl property is equal to the passed parameter. Note that the parameter should ends with "/" like: var item = sender.findNodeByAbsoluteUrl("http://www.test.com/");
@method
@param url - NavigateUrl of the Node
@returns 
*/
findNodeByAbsoluteUrl(url: string): Telerik.Web.UI.RadTreeNode;
        /**
Returns the root level RadTreeNodeCollection.
@method
@returns Telerik.Web.UI.RadTreeNodeCollection
*/
get_nodes(): Telerik.Web.UI.RadTreeNodeCollection;
        /**

@method
@returns 
*/
set_expandedIndexes(): void;
        /**
Enables/Disables node editing.
@method
@param value - value
@returns 
*/
set_allowNodeEditing(value: boolean): void;
        /**
Returns an array of the checked nodes when CheckBoxes="True".
@method
@returns Array
*/
get_checkedNodes(): any;
        /**
Selects the passed nodes (if MultipleSelection is enabled), or only the last from the passed nodes (if MultipleSelection is disabled). The parameter is only one and can be Telerik.Web.UI.RadTreeNodeCollection or regular Array.
@method
@param nodes - The nodes to be selected
@returns 
*/
selectNodes(nodes: Telerik.Web.UI.RadTreeNodeCollection): void;
        /**
Returns the value of the RadTreeView's LoadingStatusPosition property.
@method
@returns Number
*/
get_loadingStatusPosition(): number;
        /**
Returns an array of all the Nodes within the TreeView.
@method
@returns Returns an array of all the Nodes within the TreeView.
*/
get_allNodes(): Telerik.Web.UI.RadTreeNode[][];
        /**
Sets a loading message to the TreeView.
@method
@param value - value
@returns 
*/
set_loadingMessage(value: string): void;
        /**
Gets the enabled state of the TreeView.
@method
@returns 
*/
get_enabled(): boolean;
        /**

@method
@returns 
*/
saveClientState(): void;
        /**

@method
@returns 
*/
set_checkedIndexes(): void;
        /**
True if the PersistLoadOnDemandNodes property is enabled, false otherwise.
@method
@returns Boolean
*/
get_persistLoadOnDemandNodes(): boolean;
        /**
Returns the first RadTreeNode object whose NavigateUrl property is equal to the passed parameter.
@method
@param url - NavigateUrl of the Node
@returns 
*/
findNodeByUrl(url: string): Telerik.Web.UI.RadTreeNode;
        /**
Enables/Disables the TreeView.
@method
@param value - value
@returns 
*/
set_enabled(value: boolean): void;
        /**
Gets the first instance of a Node with the specified attribute, value pair.
@method
@param attributeName - attributeName
@param attributeValue - attributeValue
@returns 
*/
findNodeByAttribute(attributeName: string, attributeValue: string): Telerik.Web.UI.RadTreeNode;
        /**

@method
@returns 
*/
get_collapseAnimation(): void;
        /**
True if the SingleExpandPath property is enables, false otherwise.
@method
@returns Boolean
*/
get_singleExpandPath(): boolean;
        /**
Bulks update operations over the current TreeView instance, executed in the passed function. The parameter is only one and it's a function.
@method
@param func - The function that should be executed
@returns 
*/
bulkUpdateWith(func: Function): void;
        /**
Gets a reference to the DIV element that wraps the TreeView.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Returns the value of the TreeView's ClientNodeTemplate property.
@method
@returns 
*/
get_clientTemplate(): void;
        /**

@method
@returns 
*/
get_expandedIndexes(): void;
        /**

@method
@returns 
*/
set_collapsedIndexes(): void;
        /**
Adds the passed nodes to the passed target's node collection. The usage of this method is preferable when a big amount of child nodes is being added to a certain node's Collection, because it batches the updates to the DOM in a single operation and this is a major performance improvement.
@method
@param target - The target receiving the new nodes
@param nodes - The nodes to be added
@returns 
*/
addNodesTo(target: Telerik.Web.UI.RadTreeNode, nodes: Telerik.Web.UI.RadTreeNodeCollection): void;
        /**

@method
@returns 
*/
get_expandAnimation(): void;
        /**

@method
@returns 
*/
get_nodeData(): void;
        /**
Returns an Array containing the IDs of the treeview context menus
@method
@returns Array
*/
get_contextMenuIDs(): any;
        /**

@method
@returns 
*/
set_selectedIndexes(): void;
        /**
Unelects the passed nodes. The parameter is only one and can be Telerik.Web.UI.RadTreeNodeCollection or regular Array.
@method
@param nodes - The nodes to be unselected
@returns 
*/
unselectNodes(nodes: Telerik.Web.UI.RadTreeNodeCollection): void;
        /**

@method
@returns 
*/
set_collapseAnimation(): void;
        /**
Enables/Disables drag and drop between nodes.
@method
@param value - value
@returns 
*/
set_enableDragAndDropBetweenNodes(value: boolean): void;
    }


    class RadWebControl  extends Sys.UI.Control {
        /**

@method
@returns Client state
*/
get_clientState(): string;
        /**

@method
@returns ID of the hidden field used to store the client state
*/
get_clientStateFieldID(): string;
        /**
Raise the event
@method
@param eventName - Name of the event to be raised
@param eventArgs - Event arguments for the given event
@returns 
*/
raiseEvent(eventName: string, eventArgs: Sys.EventArgs): void;
        /**
This function should return the serialized client state of the control.
@method
@returns 
*/
saveClientState(): void;
        /**
Sets the client state of this control
@method
@param value - The client state for this control
@returns 
*/
set_clientState(value: string): void;
        /**
Sets the ID of the client state field of this control
@method
@param value - The ID of the client state field for this control
@returns 
*/
set_clientStateFieldID(value: string): void;
        /**
Call this function to update the client state hidden field. Use this function with caution, because it is resource hungry.
@method
@returns 
*/
updateClientState(): void;
    }


    class RadWindow  extends Telerik.Web.UI.RadWebControl {
        /**
Sets new maximum height to the window
@method
@param value - 
@returns 
*/
set_maxHeight(value: number): void;
        /**
Sets a new title to the RadWindow
@method
@param value - 
@returns 
*/
set_title(value: string): void;
        /**
Indicates whether the RadWindow is currently maximized
@method
@returns 
*/
isMaximized(): void;
        /**
Sets a value indicating whether the RadWindow should have a visible statusbar
@method
@param value - 
@returns 
*/
set_visibleStatusbar(value: boolean): void;
        /**
Makes the RadWindow the active RadWindow on the page
@method
@param bActivate - 
@returns 
*/
setActive(bActivate: boolean): void;
        /**
Sets a value indicating whether the page that is loaded in the RadWindow should be loaded everytime from the server or will leave the browser default behaviour
@method
@param value - 
@returns 
*/
set_reloadOnShow(value: boolean): void;
        /**
Gets a value indicating whether the RadWindow has an overlay element.
@method
@returns 
*/
get_overlay(): boolean;
        /**
Sets the InitialBehaviors property of the RadWindow object. Its argument must be a value or combination of values from the Telerik.Web.UI.WindowBehaviors enum. To set more than one behavior, use "+". Possible values are None, Minimize, Pin, Maximize, Default e.g: oWnd.set_initialBehaviors( Telerik.Web.UI.WindowBehaviors.Pin + Telerik.Web.UI.WindowBehaviors.Maximize )
@method
@param value - 
@returns 
*/
set_initialBehaviors(value: Telerik.Web.UI.WindowBehaviors): void;
        /**
Gets the minimum height of the RadWindow
@method
@returns 
*/
get_minHeight(): number;
        /**
Sets the Behaviors property of the RadWindow object. Its argument must be a value or combination of values from the Telerik.Web.UI.WindowBehaviors enum. To set more than one behavior, use "+". Possible values are None, Resize, Minimize, Close, Pin, Maximize, Move, Reload, Default e.g: oWnd.set_behaviors( Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Close )
@method
@param value - 
@returns 
*/
set_behaviors(value: Telerik.Web.UI.WindowBehaviors): void;
        /**
CenterIfModal
@method
@returns 
*/
set_centerIfModal(): void;
        /**
Gets animation duration value for the RadWindow. The default value is 500ms
@method
@returns 
*/
get_animationDuration(): number;
        /**
Shows the RadWindow if it was invisible. If the RadWindow does not exist, show creates it
@method
@returns 
*/
show(): void;
        /**
Gets the horizontal offset relative to its offset element
@method
@returns 
*/
get_left(): number;
        /**
Gets the z-index of the RadWindow
@method
@returns 
*/
get_zindex(): number;
        /**
Indicates whether the RadWindow control is currently visible
@method
@returns 
*/
isVisible(): void;
        /**
Gets the offset element ID [element according to which the RadWindow should be positioned relatively] - works together with the Top and Left properties
@method
@returns 
*/
get_offsetElementID(): string;
        /**
Gets the class name specified in the CSSClass property
@method
@returns 
*/
get_cssClass(): string;
        /**
Gets a value indicating whether the RadWindow should have a visible titlebar
@method
@returns 
*/
get_visibleTitlebar(): boolean;
        /**
Gets a value indicating whether the RadWindow is modal or not
@method
@returns 
*/
get_modal(): boolean;
        /**
Gets a value indicating whether the page that is loaded in the RadWindow should be shown during the loading process or when it has finished loading
@method
@returns 
*/
get_showContentDuringLoad(): boolean;
        /**
Sets a value indicating whether the RadWindow should be modal or not
@method
@param value - 
@returns 
*/
set_modal(value: boolean): void;
        /**
Gets the height of the RadWindow
@method
@returns 
*/
get_height(): number;
        /**
Returns the RadWindow's navigate URL
@method
@returns 
*/
get_navigateUrl(): string;
        /**
Indicates whether the UI of the RadWindow is already created or not
@method
@returns 
*/
isCreated(): void;
        /**
Gets the animation value for the RadWindow
@method
@returns 
*/
get_animation(): Telerik.Web.UI.WindowAnimation;
        /**
Gets the maximum height of the RadWindow
@method
@returns 
*/
get_maxHeight(): number;
        /**
Sets a value indicating whether the RadWindow should show in the visible viewport of the browser window
@method
@param value - 
@returns 
*/
set_keepInScreenBounds(value: boolean): void;
        /**
Sets the value indicating the opacity of the RadWindow
@method
@param value - 
@returns 
*/
set_opacity(value: number): void;
        /**
Sets a value indicating whether the page that is loaded in the RadWindow should be shown during the loading process or when it has finished loading
@method
@param value - 
@returns 
*/
set_showContentDuringLoad(value: boolean): void;
        /**
Restores the RadWindow to its normal (no minimized or maximized) state
@method
@returns 
*/
restore(): void;
        /**
Removes shortcut for the command
@method
@param shortcutCommand - shortcutCommand
@returns 
*/
removeShortcut(shortcutCommand: string): void;
        /**
Sets the offset element ID [element according to which the RadWindow should be positioned relatively] - works together with the Top and Left properties
@method
@param value - 
@returns 
*/
set_offsetElementID(value: string): void;
        /**
Gets a reference to the RadWindow's parent [browser window] object
@method
@returns 
*/
get_browserWindow(): Window;
        /**
CenterIfModal
@method
@returns 
*/
get_centerIfModal(): void;
        /**
Gets a value indicating whether the RadWindow will show in the visible viewport of the browser window
@method
@returns 
*/
get_keepInScreenBounds(): boolean;
        /**
Sets new height to the window
@method
@param value - 
@returns 
*/
set_height(value: number): void;
        /**
Sets new minimum height to the window
@method
@param value - 
@returns 
*/
set_minHeight(value: number): void;
        /**
Returns a reference to the parent page's document. This is useful for calling functions on the parent page.
@method
@returns 
*/
BrowserWindow(): void;
        /**
Toggles whether the RadWindow is pinned
@method
@returns 
*/
togglePin(): void;
        /**
Indicates whether the RadWindow is currently closed
@method
@returns 
*/
isClosed(): void;
        /**
Maximizes the RadWindow
@method
@returns 
*/
maximize(): void;
        /**
Sets the class name specified in the CSSClass property
@method
@param value - 
@returns 
*/
set_cssClass(value: string): void;
        /**
Sets a value indicating whether the window should have a shadow.
@method
@param value - 
@returns 
*/
set_enableShadow(value: boolean): void;
        /**
Minimizes the RadWindow
@method
@returns 
*/
minimize(): void;
        /**
Gets the content element when the RadWindow is used as controls container and not with NavigateUrl
@method
@returns 
*/
get_contentElement(): any;
        /**
Gets a value indicating whether the window should have a shadow.
@method
@returns 
*/
get_enableShadow(): boolean;
        /**
Returns the size and position of the RadWindow
@method
@returns 
*/
getWindowBounds(): Sys.UI.Bounds;
        /**
Gets the OpenerElementId for the RadWindow
@method
@returns 
*/
get_openerElementID(): string;
        /**
Gets a value which indicates whether the window will automatically resize itself according to its content page or not
@method
@returns 
*/
get_autoSize(): boolean;
        /**
Sets the clientside id of an html element in which the window object will be able to move
@method
@param value - 
@returns 
*/
set_restrictionZoneID(value: string): void;
        /**
Removes all shortcuts for the command
@method
@param shortcutCommand - shortcutCommand
@returns 
*/
removeAllShortcutsCommand(shortcutCommand: string): void;
        /**
Sets new width and height to the RadWindow
@method
@param width - 
@param height - 
@returns 
*/
setSize(width: number, height: number): void;
        /**
Indicates whether a certain autosize behavior is enabled for the RadWindow
@method
@param oBehavior - 
@returns 
*/
isAutoSizeBehaviorEnabled(oBehavior: Telerik.Web.UI.WindowAutoSizeBehaviors): void;
        /**
Sets a new horizontal offset relative to its offset element
@method
@param value - 
@returns 
*/
set_left(value: number): void;
        /**
Returns a reference to the RadWindowManager. As an alternative you can use the ASP.NET AJAX convention and use $find()
@method
@returns 
*/
get_windowManager(): Telerik.Web.UI.RadWindowManager;
        /**
Gets a value indicating whether the RadWindow will be disposed and made inaccessible once it is closed
@method
@returns 
*/
get_destroyOnClose(): boolean;
        /**
Sets new width to the RadWindow
@method
@param value - 
@returns 
*/
set_width(value: number): void;
        /**
Changes RadWindow's size to fit the content page. It cannot be used with pages from other domains due to browsers" security restrictions. You can optionally call the method with argument true - this will make the autosizing perform an animation while adjusting the size
@method
@param toAnimate - 
@returns 
*/
autoSize(toAnimate: boolean): void;
        /**
Returns a reference to RadWindow's content area (IFRAME). One possible use is to call a function that is declared in the RadWindow's page from the parent page. Another possible use is to modify the DOM
@method
@returns 
*/
get_contentFrame(): any;
        /**
Sets content element when the RadWindow is used as controls container and not with NavigateUrl
@method
@param element - 
@returns 
*/
set_contentElement(element: Sys.UI.DomElement): void;
        /**
Adds a new shortcut for the command
@method
@param shortcutCommand - shortcutCommand
@param shortcutString - shortcutString
@returns 
*/
addShortcut(shortcutCommand: string, shortcutString: string): void;
        /**
Gets the vertical offset relative to its offset element
@method
@returns 
*/
get_top(): number;
        /**
Gets a value indicating whether the page that is loaded in the RadWindow should be loaded everytime from the server or will leave the browser default behaviour
@method
@returns 
*/
get_reloadOnShow(): boolean;
        /**
Gets the value indicating the opacity of the RadWindow. The value should be between 0 and 100. The default value is 100 which is opaque
@method
@returns 
*/
get_opacity(): number;
        /**
Indicates whether a certain behavior is enabled for the RadWindow
@method
@param oBehavior - 
@returns 
*/
isBehaviorEnabled(oBehavior: Telerik.Web.UI.WindowBehaviors): void;
        /**
RadWindow
@method
@returns 
*/
get_name(): void;
        /**
Gets a value indicating whether the RadWindow should have a visible statusbar
@method
@returns 
*/
get_visibleStatusbar(): boolean;
        /**
Gets the minimum width of the RadWindow
@method
@returns 
*/
get_minWidth(): number;
        /**
Closes the RadWindow. If argument is provided, it can be passed and extracted in the OnClientClose event by using the get_argument method
@method
@param callBackFnArg? - Argument of type Object that can be processed via the OnClientClose event handler.
@returns 
*/
close(callBackFnArg?: any): void;
        /**
Centers the RadWindow in the middle of the page
@method
@returns 
*/
center(): void;
        /**
Indicates whether the RadWindow is currently minimized
@method
@returns 
*/
isMinimized(): void;
        /**
Sets the clientside id of an html element where the window object will be docked when minimized
@method
@param value - 
@returns 
*/
set_minimizeZoneID(value: string): void;
        /**
Returns shortcut string for the command
@method
@param shortcutCommand - shortcutCommand
@returns 
*/
getShortcutString(shortcutCommand: string): string;
        /**
Gets the maximum width of the RadWindow
@method
@returns 
*/
get_maxWidth(): number;
        /**
Sets the OpenerElementId for the RadWindow
@method
@param value - 
@returns 
*/
set_openerElementID(value: string): void;
        /**
Sets new minimum width to the RadWindow
@method
@param value - 
@returns 
*/
set_minWidth(value: number): void;
        /**
Reloads the content page in the RadWindow. The page should come from the same server as is the parent page
@method
@returns 
*/
reload(): void;
        /**
Sets a message in the status area of the window
@method
@param message - 
@returns 
*/
set_status(message: string): void;
        /**
Sets the AutoSizeBehaviors property of the RadWindow object. Its argument must be a value or combination of values from the Telerik.Web.UI.WindowAutoSizeBehaviors enum. To set more than one behavior, use "+". Possible values are Width, WidthProportional, Height, HeightProportional, Default e.g: oWnd.set_autoSizeBehaviors( Telerik.Web.UI.WindowAutoSizeBehaviors.Width + Telerik.Web.UI.WindowAutoSizeBehaviors.Height )
@method
@param value - 
@returns 
*/
set_autoSizeBehaviors(value: Telerik.Web.UI.WindowAutoSizeBehaviors): void;
        /**
Sets a new vertical offset relative to its offset element
@method
@param value - 
@returns 
*/
set_top(value: number): void;
        /**
Sets a value indicating whether the RadWindow should create an overlay element.
@method
@param value - 
@returns 
*/
set_overlay(value: boolean): void;
        /**
Moves the RadWindow to the specified position
@method
@param x - 
@param y - 
@returns 
*/
moveTo(x: number, y: number): void;
        /**
Sets a value which indicates whether the window should automatically resize itself according to its content page or not
@method
@param value - 
@returns 
*/
set_autoSize(value: boolean): void;
        /**
Indicates whether the RadWindow is modal
@method
@returns 
*/
isModal(): void;
        /**
Gets current message in the status area of the window
@method
@returns 
*/
get_status(): string;
        /**
Raises the Command event
@method
@returns 
*/
raise_command(): void;
        /**
Makes the RadWindow invisible
@method
@returns 
*/
hide(): void;
        /**
Sets new maximum width to the RadWindow
@method
@param value - 
@returns 
*/
set_maxWidth(value: number): void;
        /**
Gets a value indicating whether the maximized RadWindow should be on top of the page's content
@method
@returns 
*/
get_showOnTopWhenMaximized(): boolean;
        /**
Gets the width of the RadWindow
@method
@returns 
*/
get_width(): number;
        /**
Gets a reference to the RadWindow's popup element (the wrapper DIV element)
@method
@returns 
*/
get_popupElement(): any;
        /**
Sets animation duration value for the RadWindow
@method
@param value - 
@returns 
*/
set_animationDuration(value: number): void;
        /**
Indicates whether the RadWindow is currently active
@method
@returns 
*/
isActive(): void;
        /**
Gets the url of the minimized icon of the RadWindow
@method
@returns 
*/
get_minimizeIconUrl(): string;
        /**
Changes URL of RadWindow
@method
@param url - 
@returns 
*/
setUrl(url: string): void;
        /**
Indicates whether the RadWindow is currently pinned
@method
@returns 
*/
isPinned(): void;
        /**
Gets the title of the RadWindow
@method
@returns 
*/
get_title(): string;
        /**
Sets a value indicating whether the RadWindow will be disposed and made inaccessible once it is closed
@method
@param value - 
@returns 
*/
set_destroyOnClose(value: boolean): void;
        /**
Gets the id (ClientID if a runat=server is used) of an html element in which the window object will be able to move
@method
@returns 
*/
get_restrictionZoneID(): string;
        /**
Sets a value indicating whether the RadWindow should have a visible titlebar
@method
@param value - 
@returns 
*/
set_visibleTitlebar(value: boolean): void;
        /**
Sets animation value for the RadWindow
@method
@param value - 
@returns 
*/
set_animation(value: Telerik.Web.UI.WindowAnimation): void;
        /**
Gets the url of the icon in the upper left corner of the RadWindow titlebar
@method
@returns 
*/
get_iconUrl(): string;
        /**
Gets the id (ClientID if a runat=server is used) of an html element where the window object will be docked when minimized
@method
@returns 
*/
get_minimizeZoneID(): string;
        /**
Indicates whether a certain initial behavior is enabled for the RadWindow
@method
@param oBehavior - 
@returns 
*/
isInitialBehaviorEnabled(oBehavior: Telerik.Web.UI.WindowBehaviors): void;
        /**
Returns a boolean value indicating whether a shortcut for this command exists
@method
@param shortcutCommand - shortcutCommand
@returns 
*/
isShortcutAdded(shortcutCommand: string): boolean;
        /**
Sets the url of the icon in the upper left rwCorner of the RadWindow titlebar
@method
@param value - 
@returns 
*/
set_iconUrl(value: string): void;
        /**
Sets the url of the minimized icon of the RadWindow
@method
@param value - 
@returns 
*/
set_minimizeIconUrl(value: string): void;
        /**
Remove a handler from the Close event
*/
remove_close(handler: Function): void;
        /**
Add a handler to the Activate event
*/
add_activate(handler: Function): void;
        /**
Add a handler to the Show event
*/
add_show(handler: Function): void;
        /**
Removes a handler from the Command event
*/
remove_command(handler: Function): void;
        /**
Add a handler to the ResizeStart event
*/
add_resizeStart(handler: Function): void;
        /**
Remove a handler from the Activate event
*/
remove_activate(handler: Function): void;
        /**
Remove a handler from the BeforeShow event
*/
remove_beforeShow(handler: Function): void;
        /**
Adds a handler to the Command event
*/
add_command(handler: Function): void;
        /**
Remove a handler from the Show event
*/
remove_show(handler: Function): void;
        /**
Add a handler to the ResizeEnd event
*/
add_resizeEnd(handler: Function): void;
        /**
Adds a handler to the DragEnd event
*/
add_dragEnd(handler: Function): void;
        /**
Remove a handler from the PageLoad event
*/
remove_pageLoad(handler: Function): void;
        /**
Add a handler to the BeforeClose event
*/
add_beforeClose(handler: Function): void;
        /**
Removes a handler from the DragEnd event
*/
remove_dragEnd(handler: Function): void;
        /**
Add a handler to the OnClientAutoSizeEnd event
*/
add_autoSizeEnd(handler: Function): void;
        /**
Removes a handler from the DragStart event
*/
remove_dragStart(handler: Function): void;
        /**
Remove a handler from the BeforeClose event
*/
remove_beforeClose(handler: Function): void;
        /**
Add a handler to the BeforeShow event
*/
add_beforeShow(handler: Function): void;
        /**
Add a handler to the Close event
*/
add_close(handler: Function): void;
        /**
Add a handler to the PageLoad event
*/
add_pageLoad(handler: Function): void;
        /**
Remove a handler from the ResizeEnd event
*/
remove_resizeEnd(handler: Function): void;
        /**
Adds a handler to the DragStart event
*/
add_dragStart(handler: Function): void;
        /**
Remove a handler from the ResizeStart event
*/
remove_resizeStart(handler: Function): void;
        /**
Remove a handler from the OnClientAutoSizeEnd event
*/
remove_autoSizeEnd(handler: Function): void;
    }


    class RadWindowManager  extends Telerik.Web.UI.RadWindow {
        /**
Removes shortcut for the command
@method
@param shortcutCommand - shortcutCommand
@returns 
*/
removeShortcut(shortcutCommand: string): void;
        /**
Tiles the window objects
@method
@returns 
*/
tile(): void;
        /**
Cascades the window objects
@method
@returns 
*/
cascade(): void;
        /**
Restores all windows
@method
@returns 
*/
restoreAll(): void;
        /**
Opens a new or existing window. Can be used to change the URL of existing window as well. If an external page is loaded, do not provide content element. Otherwise, do not provide url. If both are provided, the url has priority
@method
@param url - 
@param wndName - 
@param contentElement - 
@returns The RadWindow instance
*/
open(url: string, wndName: string, contentElement: string): Telerik.Web.UI.RadWindow;
        /**
Displays a RadAlert dialog with the specified content.
@method
@param text - Content to show in the RadAlert dialog.
@param oWidth? - Width of the RadAlert dialog.
@param oHeight? - Height of the RadAlert dialog.
@param oTitle? - Title of the RadAlert dialog.
@returns The RadWindow instance
*/
radalert(text: string, oWidth?: number, oHeight?: number, oTitle?: string): Telerik.Web.UI.RadWindow;
        /**
Minimizes all windows
@method
@returns 
*/
minimizeAll(): void;
        /**
Clears cached properties of the manager. This property should be used when a setting of the manager is changed on the client and the change should be applied to new dynamically created windows.
@method
@returns 
*/
clearCloneCache(): void;
        /**
Returns a boolean value indicating whether a shortcut for this command exists
@method
@param shortcutCommand - shortcutCommand
@returns 
*/
isShortcutAdded(shortcutCommand: string): boolean;
        /**
Restores the active window
@method
@returns 
*/
restoreActiveWindow(): void;
        /**
Displays a RadPrompt dialog with the specified content.
@method
@param text - Content to show in the RadPrompt dialog.
@param callBackFn - Callback function that will be called after closing the dialog. The results of the user's action (the text inserted) can be processed here.
@param oWidth? - Width of the RadPrompt dialog.
@param oHeight? - Height of the RadPrompt dialog.
@param callerObj? - Backwards compatibility. Set to Null.
@param oTitle? - Title of the RadPrompt dialog.
@param initialValue? - Optional value to be shown in the textbox of the displayed RadPrompt dialog.
@returns The RadWindow instance
*/
radprompt(text: string, callBackFn: Function, oWidth?: number, oHeight?: number, callerObj?: any, oTitle?: string, initialValue?: string): Telerik.Web.UI.RadWindow;
        /**
Displays a RadConfirm dialog with the specified content.
@method
@param text - Content to show in the RadConfirm dialog.
@param callBackFn - Callback function that will be called after closing the dialog. The results of the user's action (OK or Cancel) can be processed here.
@param oWidth? - Width of the RadConfirm dialog.
@param oHeight? - Height of the RadConfirm dialog.
@param callerObj? - Backwards compatibility. Set to Null.
@param oTitle? - Title of the RadConfirm dialog.
@param imgUrl? - Optional image to be shown in the RadConfirm dialog.
@returns The RadWindow instance
*/
radconfirm(text: string, callBackFn: Function, oWidth?: number, oHeight?: number, callerObj?: any, oTitle?: string, imgUrl?: string): Telerik.Web.UI.RadWindow;
        /**
Close the active window
@method
@returns 
*/
closeActiveWindow(): void;
        /**
Maximizes all windows
@method
@returns 
*/
maximizeAll(): void;
        /**
Returns a reference to the current active window
@method
@returns 
*/
getActiveWindow(): Telerik.Web.UI.RadWindow;
        /**
Removes all shortcuts for the command
@method
@param shortcutCommand - shortcutCommand
@returns 
*/
removeAllShortcutsCommand(shortcutCommand: string): void;
        /**
Shows all windows
@method
@returns 
*/
showAll(): void;
        /**
Closes all windows
@method
@returns 
*/
closeAll(): void;
        /**
Minimizes the currently active window
@method
@returns 
*/
minimizeActiveWindow(): void;
        /**
Returns shortcut string for the command
@method
@param shortcutCommand - shortcutCommand
@returns 
*/
getShortcutString(shortcutCommand: string): string;
        /**
Returns a reference to the array of RadWindow objects managed by the RadWindowManager
@method
@returns 
*/
get_windows(): any;
        /**
Returns a reference to a RadWindow. The Id is the window's server-side Id property
@method
@param id - 
@returns 
*/
getWindowById(id: string): Telerik.Web.UI.RadWindow;
        /**
Returns a reference to a RadWindow. The Name is the window's server-side Id property
@method
@param name - 
@returns 
*/
getWindowByName(name: string): Telerik.Web.UI.RadWindow;
        /**
Adds a new shortcut for the command
@method
@param shortcutCommand - shortcutCommand
@param shortcutString - shortcutString
@returns 
*/
addShortcut(shortcutCommand: string, shortcutString: string): void;
    }


    class RadXmlHttpPanel   {
        /**
passes a value to the RadXmlHttpPanel depending on which content is loaded inside the RadXmlHttpPanel and initiates a partial page request.
@method
@returns 
*/
set_value(): void;
        /**
sets a custom HTML content to the RadXmlHttpPanel.
@method
@returns 
*/
set_html(): void;
    }


    class RecurrenceRule   {
        /**

@method
@returns 
*/
get_exceptions(): void;
        /**

@method
@returns 
*/
get_pattern(): void;
        /**

@method
@returns 
*/
get_range(): void;
        /**

@method
@returns 
*/
toString(): void;
    }


    class Reminder   {
        /**
Returns a copy of this Reminder.
@method
@returns A copy of this Reminder.
*/
clone(): Telerik.Web.UI.Reminder;
        /**
Gets a collection of the Attributes associated to the current Reminder.
@method
@returns The collection of the Attributes associated to the current Reminder.
*/
get_attributes(): Telerik.Web.UI.SchedulerAttributeCollection;
        /**
Gets the ID of the Reminder.
@method
@returns The ID of the Reminder.
*/
get_id(): number;
        /**
Gets the appointment that the Reminder is associated with.
@method
@returns The appointment that the Reminder is associated with.
*/
get_owner(): Telerik.Web.UI.SchedulerAppointment;
        /**
Gets the Reminder trigger value in minutes.
@method
@returns The Reminder trigger value in minutes.
*/
get_trigger(): number;
        /**
Gets the date on which the reminder should be triggered.
@method
@returns The appointment that the Reminder is associated with.
*/
get_triggerDate(): Date;
        /**
Sets the ID of the Reminder.
@method
@param value - The ID of the Reminder.
@returns 
*/
set_id(value: number): void;
        /**
Sets the Reminder trigger value in minutes.
@method
@param value - The Reminder trigger value in minutes.
@returns 
*/
set_trigger(value: number): void;
    }


    class ReminderCollection   {
        /**
Adds the Reminder to the collection.
@method
@param value - the Reminder to be added to the collection.
@returns 
*/
add(value: Telerik.Web.UI.Reminder): void;
        /**
Clears the collection.
@method
@returns 
*/
clear(): void;
        /**
Returns the reminder with the specified ID, null if not found.
@method
@param value - The ID of the Reminder.
@returns The reminder with the specified ID
*/
findByID(value: string): Telerik.Web.UI.Reminder;
        /**
Returns the reminder at the specified index in the collection
@method
@param value - The index of the Reminder in the collection
@returns The reminder at the specified index in the collection.
*/
getReminder(value: number): Telerik.Web.UI.Reminder;
        /**
Gets the total number of Reminders in the collection.
@method
@returns The total number of Reminders in the collection.
*/
get_count(): number;
        /**
Returns the index of the Reminder in the collection, -1 if not found.
@method
@param value - The Reminder object.
@returns The index of the Reminder in the collection
*/
indexOf(value: Telerik.Web.UI.Reminder): number;
        /**
Inserts the Reminder at the specified index in the collection.
@method
@param value - Inserts the Reminder at the specified index in the collection.
@returns 
*/
insert(value: number): void;
        /**
Removes the specified Reminder from the collection.
@method
@param value - The Reminder to be removed from the collection.
@returns 
*/
remove(value: Telerik.Web.UI.Reminder): void;
        /**
Removes the Reminder at the specified index in the collection.
@method
@param value - The index of the Reminder to be removed from the collection.
@returns 
*/
removeAt(value: number): void;
    }


    class ResourceStyleMapping   {
        /**
Gets the cascading style sheet (CSS) class to render for appointments that use the matching resource
@method
@returns The cascading style sheet
*/
get_applyCssClass(): string;
        /**
Gets the unique key of the resource to match.
@method
@returns The unique key of the resource to match.
*/
get_key(): string;
        /**
Gets the resource text to match.
@method
@returns The resource text to match.
*/
get_text(): string;
        /**
Gets the resource type to match.
@method
@returns The resource type to match.
*/
get_type(): string;
        /**
Sets the cascading style sheet (CSS) class to render for appointments that use the matching resource.
@method
@param applyCssClass - The cascading style sheet
@returns 
*/
set_applyCssClass(applyCssClass: string): void;
        /**
Sets the unique key of the resource to match.
@method
@param value - The unique key of the resource to match.
@returns 
*/
set_key(value: string): void;
        /**
Sets the resource text to match.
@method
@param value - The resource text to match.
@returns 
*/
set_text(value: string): void;
        /**
Sets the resource type to match.
@method
@param type - The resource type to match.
@returns 
*/
set_type(type: string): void;
    }


    class ResourceStyleMappingCollection   {
        /**
Adds the specified resource style mapping to the collection.
@method
@param mapping - The resource style mapping to add.
@returns 
*/
add(mapping: Telerik.Web.UI.ResourceStyleMapping): void;
        /**
Executes the specified function for each resource style mapping in the collection. The resource style mapping is passed as first argument to the function.
@method
@param lambda - The function to execute for each resource style mapping in the collection. For example function
@returns 
*/
forEach(lambda: Function): void;
        /**
Gets a collection of all resource style mapping matching the specified resource.
@method
@param resource - The resource to look for
@returns An array of all matching resource style mappings
*/
getMatchingClasses(resource: Telerik.Web.UI.SchedulerResource): any;
        /**
Gets the resource style mapping at the specified index in the collection.
@method
@param index - The index from which to retrieve the resource style mapping
@returns The resource style mapping at the specified index.
*/
getStyleMapping(index: number): Telerik.Web.UI.ResourceStyleMapping;
        /**
Gets the number of resource style mappings in the collection.
@method
@returns The number of resource style mappings in the collection.
*/
get_count(): number;
    }


    class ResourceType   {
        /**
Gets a value indicating if the resource type allows multiple resource values
@method
@returns true if multiple resource values are allowed
*/
get_allowMultipleValues(): boolean;
        /**
Gets the resource type name
@method
@returns The resource type name
*/
get_name(): string;
        /**
Sets the resource type name
@method
@param value - The resource type name
@returns 
*/
set_name(value: string): void;
    }


    class ResourceTypeCollection   {
        /**
Adds the specified resource type to the collection.
@method
@param resourceType - The resource type to add.
@returns 
*/
add(resourceType: Telerik.Web.UI.ResourceType): void;
        /**
Clears the collection of all resource types in it.
@method
@returns 
*/
clear(): void;
        /**
Returns a collection of resource types that satisfy the specified predicate. The resource type is passed as first argument of the predicate. If the predicate returns true the resource type is included in the result collection.
@method
@param predicate - The function to execute for each resource type in the collection. For example function
@returns A collection of all resource types matching the predicate
*/
findAll(predicate: Function): Telerik.Web.UI.ResourceTypeCollection;
        /**
Executes the specified function for each resource type in the collection. The resource type is passed as first argument to the function.
@method
@param lambda - The function to execute for each resource type in the collection. For example function
@returns 
*/
forEach(lambda: Function): void;
        /**
Gets the resource type at the specified index in the collection.
@method
@param index - The index from which to retrieve the resource type
@returns The resource type at the specified index.
*/
getResourceType(index: number): Telerik.Web.UI.ResourceType;
        /**
Gets the resource type with the specified name.
@method
@param name - The resource type name to look for
@returns The resource type with the specified name
*/
getResourceTypeByName(name: string): Telerik.Web.UI.ResourceType;
        /**
Gets the number of resources in the collection.
@method
@returns The number of resource types in the collection
*/
get_count(): number;
        /**
Inserts the specified resource type at the specified index in the collection.
@method
@param index - The index at which to insert the resource type
@param resourceType - The resource type to add.
@returns 
*/
insert(index: number, resourceType: Telerik.Web.UI.ResourceType): void;
        /**
Removes the specified resource type from the collection.
@method
@param resourceType - The resource type instance to remove.
@returns 
*/
remove(resourceType: Telerik.Web.UI.ResourceType): void;
        /**
Removes the resource type at the specified index from the collection.
@method
@param index - The index from which to remove the resource type
@returns 
*/
removeAt(index: number): void;
    }


    class RibbonBarButton   {
        /**

@method
@returns 
*/
set_owner(): void;
    }


    class RibbonBarChild   {
    }


    class RibbonBarChildCollection   {
        /**
Inserts a RibbonBarItem into the Items collection.
@method
@param tab - The RibbonBarItem to insert
@returns 
*/
add(tab: Telerik.Web.UI.RibbonBarItem): void;
        /**
Iterates through the Items collection
@method
@param lambda - The function to execute on each iteration
@returns 
*/
forEach(lambda: Function): void;
        /**
Gets the RibbonBarItem from the Items collection residing at the index specified by the parameter.
@method
@param index - The index of the RibbonBarItem that should be returned
@returns Returns RibbonBarItem
*/
getItem(index: number): Telerik.Web.UI.RibbonBarItem;
        /**
Returns the number of groups in the Items collection.
@method
@returns The number of the items
*/
get_count(): number;
        /**
Gets the index of a RibbonBarItem.
@method
@param item - The RibbonBarItem to get the index of
@returns int
*/
indexOf(item: Telerik.Web.UI.RibbonBarItem): number;
    }


    class RibbonBarContextualTabGroup   {
    }


    class RibbonBarGroup  extends Telerik.Web.UI.RibbonBarChild {
        /**
Gets the Value of the RibbonBarGroup
@method
@returns The value of the Value property
*/
get_value(): string;
        /**
Returns the first RibbonBarItem object whose Text property equals the passed parameter.
@method
@param text - The text to search for
@returns 
*/
findItemByText(text: string): Telerik.Web.UI.RibbonBarItem;
        /**
Returns the first RibbonBarButton object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarButton whose Value property matches the passed parameter
*/
findButtonByValue(value: string): Telerik.Web.UI.RibbonBarButton;
        /**
Gets the hierarchical index inside the parent RadRibbonBar
@method
@returns The hierarchical index of the RibbonBarGroup
*/
get_hierarchicalIndex(): number;
        /**
Returns the first RibbonBarItem object whose CommandArgument property equals the passed parameter.
@method
@param commandArgument - The text to search for
@returns 
*/
findItemByCommandArgument(commandArgument: string): Telerik.Web.UI.RibbonBarItem;
        /**
Gets he DOM element of the RibbonBarGroup
@method
@returns The DOM element of the RibbonBarGroup
*/
get_element(): HTMLElement;
        /**
Returns the first RibbonBarItem object whose CommandName property equals the passed parameter.
@method
@param commandName - The text to search for
@returns 
*/
findItemByCommandName(commandName: string): Telerik.Web.UI.RibbonBarItem;
        /**
Gets a collection with all items
@method
@returns RibbonBarChildCollection
*/
get_items(): Telerik.Web.UI.RibbonBarChildCollection;
        /**
Sets the DOM element of the RibbonBarGroup
@method
@param element - The DOM element of the RibbonBarGroup
@returns 
*/
set_element(element: HTMLElement): void;
        /**
Gets the parent RibbonBarTab.
@method
@returns Returns the parent RibbonBarTab
*/
get_tab(): Telerik.Web.UI.RibbonBarTab;
        /**
Gets the Url of the Image shown inside the RibbonBarGroup, when it's collapsed
@method
@returns The new ImageUrl
*/
get_collapsedImageUrl(): string;
        /**
Gets the Text of the RibbonBarGroup
@method
@returns The value of the Text property
*/
get_text(): string;
        /**
Sets the Text of the RibbonBarGroup
@method
@param text - The new RibbonBarGroup text
@returns 
*/
set_text(text: string): void;
        /**
Gets the RibbonBarGroup's index inside the RibbonBarGroupCollection
@method
@returns The index of the RibbonBarGroup
*/
get_index(): number;
        /**
Gets the first instance of a RibbonBarItem with the specified attribute/value pair.
@method
@param attributeName - The attribute name to search for
@param attributeValue - The attribute value to search for
@returns Returns the first RibbonBarItem which has an attribute that matches the passed parameters
*/
findItemByAttribute(attributeName: string, attributeValue: string): Telerik.Web.UI.RibbonBarItem;
        /**
Sets the Value of the RibbonBarGroup
@method
@param value - The new RibbonBarGroup value
@returns 
*/
set_value(value: string): void;
        /**
Returns the first RibbonBarToggleButton object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarToggleButton whose Value property matches the passed parameter
*/
findToggleButtonByValue(value: string): Telerik.Web.UI.RibbonBarToggleButton;
        /**
Returns the first RibbonBarMenu object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarMenu whose Value property matches the passed parameter
*/
findMenuItemByValue(value: string): Telerik.Web.UI.RibbonBarMenu;
        /**
Sets the Url of the Image shown inside the RibbonBarGroup, when it's collapsed
@method
@param value - The new ImageUrl
@returns 
*/
set_collapsedImageUrl(value: string): void;
    }


    class RibbonBarGroupCollection  extends Telerik.Web.UI.RibbonBarChildCollection {
        /**
Gets the RibbonBarGroup from the Groups collection residing at the index specified by the parameter.
@method
@param index - The index of the RibbonBarGroup that should be returned
@returns Returns RibbonBarGroup
*/
getGroup(index: number): Telerik.Web.UI.RibbonBarGroup;
    }


    class RibbonBarItem  extends Telerik.Web.UI.RibbonBarChild {
        /**
Gets the Value of the RibbonBarItem
@method
@returns The value of the Value property
*/
get_value(): string;
        /**
Gets the img element representing the item's image.
@method
@param DOMelement - 
@returns 
*/
get_imageElement(DOMelement: any): any;
        /**
Sets the URL of the large item image.
@method
@returns 
*/
set_imageUrlLarge(): any;
        /**
Sets the Value of the RibbonBarItem
@method
@param value - The new RibbonBarItem value
@returns 
*/
set_value(value: string): void;
        /**
Gets the hierarchical index inside the parent RadRibbonBar
@method
@returns The hierarchical index of the RibbonBarItem
*/
get_hierarchicalIndex(): number;
        /**
Gets he DOM element of the RibbonBarItem
@method
@returns The DOM element of the RibbonBarItem
*/
get_element(): HTMLElement;
        /**
Gets the parent RibbonBarGroup.
@method
@returns Returns the parent RibbonBarGroup
*/
get_group(): Telerik.Web.UI.RibbonBarGroup;
        /**
Sets the Text of the RibbonBarItem's Enhanced tooltip
@method
@param text - The new tooltip text
@returns 
*/
set_toolTip(text: string): void;
        /**
Gets the URL of the large item image.
@method
@param string - 
@returns 
*/
get_imageUrlLarge(string: any): any;
        /**
Gets the Text of the RibbonBarItem's Enhanced tooltip
@method
@returns The value of the RibbonBarItem
*/
get_toolTip(): string;
        /**
Gets the  element containing the renrdered item text.
@method
@param DOMelement - 
@returns 
*/
get_textElement(DOMelement: any): any;
        /**
Sets the DOM element of the RibbonBarItem
@method
@param element - The DOM element of the RibbonBarItem
@returns 
*/
set_element(element: HTMLElement): void;
        /**
Sets the Text of the RibbonBarItem
@method
@param text - The new RibbonBarItem text
@returns 
*/
set_text(text: string): void;
        /**
Gets the RibbonBarItem's index inside the RibbonBarChildCollection
@method
@returns The index of the RibbonBarItem
*/
get_index(): number;
        /**
Gets the Text of the RibbonBarItem
@method
@returns The value of the Text property
*/
get_text(): string;
        /**
Gets the URL of the item image.
@method
@param string - 
@returns 
*/
get_imageUrl(string: any): any;
        /**
Gets a value indicating whether the RibbonBarItem is enabled.
@method
@returns Returns true if the RibbonBarItem is enabled
*/
get_enabled(): boolean;
        /**
Sets the URL of the item image.
@method
@returns 
*/
set_imageUrl(): any;
        /**
Enables/Disables the RibbonBarItem.
@method
@param value - value
@returns 
*/
set_enabled(value: boolean): void;
        /**
Returns if true if the item's Size property is set to Large.
@method
@param boolean - 
@returns 
*/
get_isLarge(boolean: any): any;
        /**
Sets the URL of the disabled large item image.
@method
@returns 
*/
set_diabledImageUrlLarge(): any;
    }


    class RibbonBarMenu   {
        /**

@method
@returns 
*/
findItemByCommandArgument(): void;
        /**

@method
@returns 
*/
findItemByCommandName(): void;
        /**

@method
@returns 
*/
findMenuItemByValue(): void;
        /**

@method
@returns 
*/
get_eventName(): void;
        /**

@method
@returns 
*/
get_items(): void;
        /**

@method
@returns 
*/
set_owner(): void;
    }


    class RibbonBarTab  extends Telerik.Web.UI.RibbonBarChild {
        /**
Sets the Value of the RibbonBarTab
@method
@param value - The new RibbonBarTab value
@returns 
*/
set_value(value: string): void;
        /**
Returns the first RibbonBarGroup object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarGroup whose Value property matches the passed parameter
*/
findGroupByValue(value: string): Telerik.Web.UI.RibbonBarGroup;
        /**
Returns the span element of the RibbonBarTab
@method
@returns HTML element that holds the RibbonBarTab
*/
get_textElement(): HTMLElement;
        /**
Gets a collection with all groups
@method
@returns RibbonBarGroupCollection
*/
get_groups(): Telerik.Web.UI.RibbonBarGroupCollection;
        /**
Sets the DOM element of the RibbonBarTab's pageView
@method
@param element - The DOM element of the RibbonBarTab
@returns 
*/
set_pageView(element: HTMLElement): void;
        /**
Sets the text property of the tab.
@method
@returns 
*/
set_text(): any;
        /**
Returns the first RibbonBarMenu object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarMenu whose Value property matches the passed parameter
*/
findMenuItemByValue(value: string): Telerik.Web.UI.RibbonBarMenu;
        /**
Returns the  DOM element containing the Tab's text element.
@method
@param DOMelement - 
@returns 
*/
get_labelElement(DOMelement: any): any;
        /**
RibbonBarContextualTabGroup
@method
@param RibbonBarContextualTabGroup - 
@returns 
*/
get_contextualTabGroup(RibbonBarContextualTabGroup: any): any;
        /**
Gets the Value of the RibbonBarTab
@method
@returns The value of the Value property
*/
get_value(): string;
        /**
Returns the first RibbonBarItem object whose Text property equals the passed parameter.
@method
@param text - The text to search for
@returns 
*/
findItemByText(text: string): Telerik.Web.UI.RibbonBarItem;
        /**
Returns the first RibbonBarButton object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarButton whose Value property matches the passed parameter
*/
findButtonByValue(value: string): Telerik.Web.UI.RibbonBarButton;
        /**
Gets he DOM element of the RibbonBarTab's pageView
@method
@returns The DOM element of the RibbonBarTab
*/
get_pageView(): HTMLElement;
        /**
Returns the first RibbonBarItem object whose CommandArgument property equals the passed parameter.
@method
@param commandArgument - The text to search for
@returns 
*/
findItemByCommandArgument(commandArgument: string): Telerik.Web.UI.RibbonBarItem;
        /**
Gets the hierarchical index inside the parent RadRibbonBar
@method
@returns The hierarchical index of the RibbonBarTab
*/
get_hierarchicalIndex(): number;
        /**
Returns the associated DOM element of the Item.
@method
@returns 
*/
get_element(): HTMLElement;
        /**
Returns the first RibbonBarItem object whose CommandName property equals the passed parameter.
@method
@param commandName - The text to search for
@returns 
*/
findItemByCommandName(commandName: string): Telerik.Web.UI.RibbonBarItem;
        /**
Returns the text of the tab.
@method
@param string - 
@returns 
*/
get_text(string: any): any;
        /**
Retuns the index of the tab in the collection of all tabs.
@method
@param integer - 
@returns 
*/
get_index(integer: any): any;
        /**
Gets the first instance of a RibbonBarItem with the specified attribute/value pair.
@method
@param attributeName - The attribute name to search for
@param attributeValue - The attribute value to search for
@returns Returns the first RibbonBarItem which has an attribute that matches the passed parameters
*/
findItemByAttribute(attributeName: string, attributeValue: string): Telerik.Web.UI.RibbonBarItem;
        /**
Returns the first RibbonBarToggleButton object whose Value property equals to the passed parameter.
@method
@param value - The value to search for
@returns Returns the first RibbonBarToggleButton whose Value property matches the passed parameter
*/
findToggleButtonByValue(value: string): Telerik.Web.UI.RibbonBarToggleButton;
        /**
Gets the parent RadRibbonBar's client-object
@method
@returns Returns the parent RadRibbonBar
*/
get_ribbonBar(): Telerik.Web.UI.RadRibbonBar;
    }


    class RibbonBarTabCollection  extends Telerik.Web.UI.RibbonBarChildCollection {
        /**
Gets the RibbonBarTab from the Tabs collection residing at the index specified by the parameter.
@method
@param index - The index of the RibbonBarTab that should be returned
@returns Returns RibbonBarTab
*/
getTab(index: number): Telerik.Web.UI.RibbonBarTab;
    }


    class RibbonBarToggleButton   {
        /**

@method
@returns 
*/
get_toggled(): void;
        /**

@method
@returns 
*/
set_owner(): void;
        /**

@method
@returns 
*/
set_toggled(): void;
        /**

@method
@returns 
*/
toggle(): void;
    }


    class SchedulerAppointment   {
        /**
Creates a shallow copy of this appointment.
@method
@returns A shallow copy of this appointment.
*/
clone(): Telerik.Web.UI.SchedulerAppointment;
        /**
Switches the scheduler into edit mode for this appointment. Same as calling editAppointment() on the scheduler instance.
@method
@returns 
*/
edit(): void;
        /**
Gets a value indicating if the appointment is deletable.
@method
@returns true if the appointment is deletable
*/
get_allowDelete(): boolean;
        /**
Gets a value indicating if the appointment is editable.
@method
@returns true if the appointment is editable
*/
get_allowEdit(): boolean;
        /**
Gets a collection of all attributes of the appointment.
@method
@returns Collection of all attributes of the appointment.
*/
get_attributes(): Telerik.Web.UI.SchedulerAttributeCollection;
        /**
Gets the appointment background color.
@method
@returns The appointment background color.
*/
get_backColor(): string;
        /**
Gets the appointment border color.
@method
@returns The appointment border style.
*/
get_borderColor(): string;
        /**
Gets the appointment border style.
@method
@returns The appointment border style.
*/
get_borderStyle(): string;
        /**
Gets the appointment border width.
@method
@returns The appointment border width.
*/
get_borderWidth(): string;
        /**
Gets the ID of the context menu associated with the appointment.
@method
@returns The ID of the context menu associated with the appointment.
*/
get_contextMenuID(): string;
        /**
Gets the appointment CSS class.
@method
@returns The appointment CSS class.
*/
get_cssClass(): string;
        /**
Gets the appointment description.
@method
@returns The appointment description.
*/
get_description(): string;
        /**
Gets the duration of the appointment in milliseconds.
@method
@returns The duration of the appointment in milliseconds.
*/
get_duration(): number;
        /**
Gets the duration of the appointment in minutes.
@method
@returns The duration of the appointment in minutes.
*/
get_durationInMinutes(): number;
        /**
Gets the DOM element representing the appointment.
@method
@returns The DOM element representing the appointment.
*/
get_element(): HTMLElement;
        /**
Gets the DOM elements representing the appointment. Appointments that span multiple days have multiple dom elements.
@method
@returns The DOM elements representing the appointment.
*/
get_elements(): HTMLElement;
        /**
Gets the appointment end date.
@method
@returns The appointment end date.
*/
get_end(): Date;
        /**
Gets the unique ID of this Appointment.
@method
@returns The unique ID of this Appointment.
*/
get_id(): string;
        /**
Gets the encoded unique ID of this Appointment. This includes the value as well as the type of the ID.
@method
@returns The encoded unique ID of this Appointment.
*/
get_internalID(): string;
        /**
Gets the owner scheduler.
@method
@returns The owner scheduler.
*/
get_owner(): Telerik.Web.UI.RadScheduler;
        /**
Gets the ID of the parent appointment if the current appointment is a recurrence exception.
@method
@returns The ID of the parent appointment if the current appointment is a recurrence exception.
*/
get_recurrenceParentID(): string;
        /**
Gets the recurrence rule of this appointment.
@method
@returns The recurrence rule of the appointment.
*/
get_recurrenceRule(): Telerik.Web.UI.RecurrenceState;
        /**
Gets the recurrence state of the appointment.
@method
@returns The recurrence state of the appointment as an enum value of type Telerik.Web.UI.RecurrenceState.
*/
get_recurrenceState(): Telerik.Web.UI.RecurrenceState;
        /**
Gets a collection of the appointment resources.
@method
@returns Collection of the appointment resources.
*/
get_resources(): Telerik.Web.UI.SchedulerResourceCollection;
        /**
Gets the appointment start date.
@method
@returns The appointment start date.
*/
get_start(): Date;
        /**
Gets the appointment subject.
@method
@returns The appointment subject.
*/
get_subject(): string;
        /**
Gets the time slot that the appointment is in.
@method
@returns The time slot that the appointment is in.
*/
get_timeSlot(): Telerik.Web.UI.ISchedulerTimeSlot;
        /**
Gets the appointment tooltip.
@method
@returns The appointment tooltip.
*/
get_toolTip(): string;
        /**
Gets a value indicating if the appointment is currently visible.
@method
@returns true if the appointment is rendered
*/
get_visible(): boolean;
        /**
Deletes this appointment. Same as calling deleteAppointment() on the scheduler instance.
@method
@returns 
*/
remove(): void;
        /**
Sets a value indicating if the appointment is deletable.
@method
@param value - true if the appointment is deletable
@returns 
*/
set_allowDelete(value: boolean): void;
        /**
Sets a value indicating if the appointment is editable.
@method
@param value - true if the appointment is editable
@returns 
*/
set_allowEdit(value: boolean): void;
        /**
Sets the appointment background color.
@method
@param color - The appointment background color. For example
@returns 
*/
set_backColor(color: string): void;
        /**
Sets the appointment border color.
@method
@param color - The appointment border color. For example
@returns 
*/
set_borderColor(color: string): void;
        /**
Sets the appointment border style.
@method
@param style - The appointment border style. For example
@returns 
*/
set_borderStyle(style: string): void;
        /**
Sets the appointment border width.
@method
@param color - The appointment border width. For example
@returns 
*/
set_borderWidth(color: string): void;
        /**
Sets the ID of the context menu associated with the appointment.
@method
@param value - The ID of the context menu associated with the appointment.
@returns 
*/
set_contextMenuID(value: string): void;
        /**
Sets the appointment CSS class.
@method
@param value - The appointment CSS class.
@returns 
*/
set_cssClass(value: string): void;
        /**
Sets the appointment description.
@method
@param value - The appointment description.
@returns 
*/
set_description(value: string): void;
        /**
Sets the appointment end date.
@method
@param value - The appointment end date.
@returns 
*/
set_end(value: Date): void;
        /**
Sets the recurrence rule of this appointment.
@method
@param value - the recurrence rule of this appointment.
@returns 
*/
set_recurrenceRule(value: string): void;
        /**
Sets the appointment start date.
@method
@param value - The appointment start date.
@returns 
*/
set_start(value: Date): void;
        /**
Sets the appointment subject.
@method
@param value - The appointment subject.
@returns 
*/
set_subject(value: string): void;
        /**
Sets the appointment tooltip.
@method
@param value - The appointment tooltip.
@returns 
*/
set_toolTip(value: string): void;
    }


    class SchedulerAppointmentCollection   {
        /**
Adds the specified appointment to the collection.
@method
@param appointment - The appointment to add.
@returns 
*/
add(appointment: Telerik.Web.UI.SchedulerAppointment): void;
        /**
Returns the first appointments that satisfies the specified predicate. The appointment is passed as first argument of the predicate. If the predicate returns true the appointment is returned.
@method
@param predicate - The function to execute for each appointment in the collection. For example function
@returns An appointment that matches the predicate
*/
find(predicate: Function): Telerik.Web.UI.SchedulerAppointment;
        /**
Returns a collection of appointments that satisfy the specified predicate. The appointment is passed as first argument of the predicate. If the predicate returns true the appointment is included in the result collection.
@method
@param predicate - The function to execute for each appointment in the collection. For example function
@returns A collection of all appointments matching the predicate
*/
findAll(predicate: Function): Telerik.Web.UI.SchedulerAppointmentCollection;
        /**
Gets the appointment with the specified ID.
@method
@param id - The ID of the appointment
@returns The appointment with the specified ID
*/
findByID(id: string): Telerik.Web.UI.SchedulerAppointment;
        /**
Gets the first appointment that contains the specified resource.
@method
@param value - The resource for which to search for
@returns The first appointment that contains the specified appointment
*/
findByResource(value: Telerik.Web.UI.SchedulerResource): Telerik.Web.UI.SchedulerAppointment;
        /**
Executes the specified function for each appointment in the collection. The appointment is passed as first argument to the function.
@method
@param lambda - The function to execute for each appointment in the collection. For example function
@returns 
*/
forEach(lambda: Function): void;
        /**
Gets the appointment at the specified index in the collection.
@method
@param index - The index from which to retrieve the appointment
@returns The appointment at the specified index.
*/
getAppointment(index: number): Telerik.Web.UI.SchedulerAppointment;
        /**
Gets a collection of all appointments in the specified range.
@method
@param start - Range start
@param end - Range end
@returns A collection of all appointments in the specified range
*/
getAppointmentsInRange(start: Date, end: Date): Telerik.Web.UI.SchedulerAppointmentCollection;
        /**
Gets a collection of all appointments that start in the specified range.
@method
@param start - Range start
@param end - Range end
@returns A collection of all appointments that start in the specified range
*/
getAppointmentsStartingInRange(start: Date, end: Date): Telerik.Web.UI.SchedulerAppointmentCollection;
        /**
Gets the number of appointments in the collection.
@method
@returns The number of appointments in the collection.
*/
get_count(): number;
        /**
Gets the index of the specified appointment in the collection. Returns -1 if the resource is not in the collection.
@method
@param appointment - The appointment for which to search in the collection
@returns The index of the specified appointment in the collection
*/
indexOf(appointment: Telerik.Web.UI.SchedulerAppointment): number;
        /**
Inserts the specified appointment at the specified index in the collection.
@method
@param index - The index at which to insert the appointment
@param appointment - The appointment to add.
@returns 
*/
insert(index: number, appointment: Telerik.Web.UI.SchedulerAppointment): void;
        /**
Removes the specified appointment from the collection.
@method
@param appointment - The appointment instance to remove.
@param deleteSeries - For recurring appointments only. 	True if you want to delete the recurring series
@returns 
*/
remove(appointment: Telerik.Web.UI.SchedulerAppointment, deleteSeries: boolean): void;
        /**
Removes the appointment at the specified index from the collection.
@method
@param index - The index from which to remove the appointment
@param deleteSeries - For recurring appointments only. 	True if you want to delete the recurring series
@returns 
*/
removeAt(index: number, deleteSeries: boolean): void;
    }


    class SchedulerAttributeCollection   {
        /**
Clears the collection of all attributes in it.
@method
@returns 
*/
clear(): void;
        /**
Creates a copy of the collection
@method
@returns A copy of the current collection
*/
clone(): Telerik.Web.UI.SchedulerAttributeCollection;
        /**
Executes the specified function for each attribute in the collection. The attribute key is passed as first argument to the function and the value as a second.
@method
@param lambda - The function to execute for each attribute in the collection. For example function
@returns 
*/
forEach(lambda: Function): void;
        /**
Gets the attribute value for the specified key.
@method
@param key - The key to search for
@returns The attribute value for the specified key
*/
getAttribute(key: string): string;
        /**
Gets the number of attributes in the collection.
@method
@returns The number of attributes in the collection
*/
get_count(): number;
        /**
Removes the specified attribute from the collection.
@method
@param key - The attribute key to remove.
@returns 
*/
removeAttribute(key: string): void;
        /**
Sets the attribute value for the specified key.
@method
@param key - The attribute key
@param value - The attribute value
@returns 
*/
setAttribute(key: string, value: string): void;
    }


    class SchedulerResource   {
        /**
Gets a collection of all attributes of the resource.
@method
@returns Collection of all attributes of the resource.
*/
get_attributes(): Telerik.Web.UI.SchedulerAttributeCollection;
        /**
Gets a value indicating if the resource is available.
@method
@returns true if the resource is available
*/
get_available(): boolean;
        /**
Gets the CSS class name to be added to appointments that have this resource.
@method
@returns The CSS class name to be added to appointments that have this resource.
*/
get_cssClass(): string;
        /**
Gets the unique key of this resource.
@method
@returns The unique key of this resource.
*/
get_key(): string;
        /**
Gets the resource text.
@method
@returns The resource text.
*/
get_text(): string;
        /**
Gets the resource type.
@method
@returns The resource type.
*/
get_type(): string;
        /**
Sets a value indicating if the resource is available.
@method
@param value - true if the resource is available
@returns 
*/
set_available(value: boolean): void;
        /**
Sets the CSS class name to be added to appointments that have this resource.
@method
@param value - The CSS class name to be added to appointments that have this resource.
@returns 
*/
set_cssClass(value: string): void;
        /**
Sets the resource key.
@method
@param value - The resource key.
@returns 
*/
set_key(value: string): void;
        /**
Sets the resource text.
@method
@param value - The resource text.
@returns 
*/
set_text(value: string): void;
        /**
Sets the resource type.
@method
@param value - The resource type.
@returns 
*/
set_type(value: string): void;
    }


    class SchedulerResourceCollection   {
        /**
Adds the specified resource to the collection.
@method
@param resource - The resource to add.
@returns 
*/
add(resource: Telerik.Web.UI.SchedulerResource): void;
        /**
Clears the collection of all resources in it.
@method
@returns 
*/
clear(): void;
        /**
Creates a shallow copy of the collection
@method
@returns A shallow copy of the current collection
*/
clone(): Telerik.Web.UI.SchedulerResourceCollection;
        /**
Returns a collection of resources that satisfy the specified predicate. The resource is passed as first argument of the predicate. If the predicate returns true the resource is included in the result collection.
@method
@param predicate - The function to execute for each resource in the collection. For example function
@returns A collection of all resources matching the predicate
*/
findAll(predicate: Function): Telerik.Web.UI.SchedulerResourceCollection;
        /**
Executes the specified function for each resource in the collection. The resource is passed as first argument to the function.
@method
@param lambda - The function to execute for each resource in the collection. For example function
@returns 
*/
forEach(lambda: Function): void;
        /**
Gets the resource at the specified index in the collection.
@method
@param index - The index from which to retrieve the resource
@returns The resource at the specified index.
*/
getResource(index: number): Telerik.Web.UI.SchedulerResource;
        /**
Gets the first resource of the specified type.
@method
@param type - The resource type for which to look for
@returns The first resources of the specified type
*/
getResourceByType(type: string): Telerik.Web.UI.SchedulerResource;
        /**
Gets the resource of the specified type with the specified key.
@method
@param type - The resource type for which to look for
@param key - The resource key for which to look for
@returns The resources of the specified type with the specified key
*/
getResourceByTypeAndKey(type: string, key: string): Telerik.Web.UI.SchedulerResource;
        /**
Gets a collection of all resources of the specified type.
@method
@param type - The resource type for which to look for
@returns A collection of all resources of the specified type
*/
getResourcesByType(type: string): Telerik.Web.UI.SchedulerResourceCollection;
        /**
Gets the number of resources in the collection.
@method
@returns The number of resources in the collection
*/
get_count(): number;
        /**
Gets the index of the specified resource in the collection. Returns -1 if the resource is not in the collection.
@method
@param appointment - The appointment for which to search in the collection
@returns The index of the specified appointment in the collection
*/
indexOf(appointment: Telerik.Web.UI.SchedulerAppointment): number;
        /**
Inserts the specified resource at the specified index in the collection.
@method
@param index - The index at which to insert the resource
@param resource - The resource to add.
@returns 
*/
insert(index: number, resource: Telerik.Web.UI.SchedulerResource): void;
        /**
Removes the specified resource from the collection.
@method
@param resource - The resource instance to remove.
@returns 
*/
remove(resource: Telerik.Web.UI.SchedulerResource): void;
        /**
Removes the resource at the specified index from the collection.
@method
@param index - The index from which to remove the resource
@returns 
*/
removeAt(index: number): void;
        /**
Removes the resources with the specified type from the collection.
@method
@param resourceType - The resource type to remove.
@returns 
*/
removeResourcesByType(resourceType: string): void;
    }


    class SchedulerWebServiceSettings  extends Telerik.Web.UI.WebServiceSettings {
        /**

@method
@returns 
*/
get_createRecurrenceExceptionMethod(): void;
        /**

@method
@returns 
*/
get_deleteAppointmentMethod(): void;
        /**

@method
@returns 
*/
get_getAppointmentsMethod(): void;
        /**

@method
@returns 
*/
get_getResourcesMethod(): void;
        /**

@method
@returns 
*/
get_insertAppointmentMethod(): void;
        /**

@method
@returns 
*/
get_isEmpty(): void;
        /**

@method
@returns 
*/
get_isOData(): void;
        /**

@method
@returns 
*/
get_isWcf(): void;
        /**

@method
@returns 
*/
get_removeRecurrenceExceptionsMethod(): void;
        /**

@method
@returns 
*/
get_resourcesPopulated(): void;
        /**

@method
@returns 
*/
get_updateAppointmentMethod(): void;
        /**

@method
@returns 
*/
get_updateMode(): void;
        /**

@method
@returns 
*/
set_createRecurrenceExceptionMethod(): void;
        /**

@method
@returns 
*/
set_deleteAppointmentMethod(): void;
        /**

@method
@returns 
*/
set_getAppointmentsMethod(): void;
        /**

@method
@returns 
*/
set_getResourcesMethod(): void;
        /**

@method
@returns 
*/
set_insertAppointmentMethod(): void;
        /**

@method
@returns 
*/
set_removeRecurrenceExceptionsMethod(): void;
        /**

@method
@returns 
*/
set_resourcesPopulated(): void;
        /**

@method
@returns 
*/
set_updateAppointmentMethod(): void;
    }


    class SearchBoxButton   {
        /**
Gets the value of the CommandArgument property
@method
@returns 
*/
get_commandArgument(): string;
        /**
Gets the value of the CommandName property
@method
@returns 
*/
get_commandName(): string;
        /**
Gets the value of the CssClass property
@method
@returns 
*/
get_cssClass(): string;
        /**
Gets he DOM element for the SearchBoxButton
@method
@returns The DOM element for the SearchBoxButton
*/
get_element(): HTMLElement;
        /**
Returns the img element of the button
@method
@returns HTML element that holds the button
*/
get_imageElement(): HTMLElement;
        /**
Gets the value of the ImageUrl property
@method
@returns 
*/
get_imageUrl(): string;
        /**
Gets the SearchBoxButton's index inside the SearchBoxButtonCollection
@method
@returns The index of the SearchBoxButton
*/
get_index(): number;
        /**
The SearchBoxButton's parent
@method
@returns Gets the SearchBoxButton
*/
get_parent(): Telerik.Web.UI.RadSearchBox;
        /**
Gets the position of the button relative to the parent RadSearchBox's input field.
@method
@returns 
*/
get_position(): Telerik.Web.UI.SearchBoxButtonPosition;
        /**
Sets the CommandArgument property of the button.
@method
@param value - String value for the CommandArgument property
@returns 
*/
set_commandArgument(value: string): void;
        /**
Sets the CommandName property of the button.
@method
@param value - String value for the CommandName property
@returns 
*/
set_commandName(value: string): void;
        /**
Sets the CssClass property of the button.
@method
@param value - String value for the CssClass property
@returns 
*/
set_cssClass(value: string): void;
        /**
Sets the button's dom element
@method
@param value - The HTML element of the button
@returns 
*/
set_element(value: HTMLElement): void;
        /**
Sets the ImageUrl property of the button
@method
@param value - String value for the ImageUrl property
@returns 
*/
set_imageUrl(value: string): void;
        /**
Sets the SearchBoxButton's parent
@method
@param value - The parent SearchBox object
@returns 
*/
set_parent(value: Telerik.Web.UI.RadSearchBox): void;
        /**
Sets the position of the button relative to the parent RadSearchBox's input field.
@method
@param value - The Position.
@returns 
*/
set_position(value: Telerik.Web.UI.SearchBoxButtonPosition): void;
    }


    class SearchBoxButtonCollection   {
        /**
Appends a button to the Buttons collection
@method
@param button - The button to insert
@returns 
*/
add(button: Telerik.Web.UI.SearchBoxButton): void;
        /**
Clears the Buttons collection of RadSearchBox
@method
@returns 
*/
clear(): void;
        /**
Iterates through the Buttons collection
@method
@param lambda - The function to execute on each iteration
@returns 
*/
forEach(lambda: Function): void;
        /**
Gets the button from the Buttons collection residing at the index specified by the parameter.
@method
@param index - The index of the button that should be returned
@returns Returns SearchBoxButton
*/
getButton(index: number): Telerik.Web.UI.SearchBoxButton;
        /**
Returns the number of buttons in the Buttons collection.
@method
@returns The number of the buttons
*/
get_count(): number;
        /**
Gets the index of a button.
@method
@param button - The button to get the index of
@returns int
*/
indexOf(button: Telerik.Web.UI.SearchBoxButton): number;
        /**
Inserts a button into the Buttons collection at the position specified by the first (index) parameter
@method
@param index - The index to insert at
@param button - The button to insert
@returns 
*/
insert(index: number, button: Telerik.Web.UI.SearchBoxButton): void;
        /**
Removes a button from the Buttons collection
@method
@param button - The button to remove
@returns 
*/
remove(button: Telerik.Web.UI.SearchBoxButton): void;
        /**
Removes the button at the specified index.
@method
@param index - The index to remove at
@returns 
*/
removeAt(index: number): void;
        /**
Returns the collection represented as array
@method
@returns 
*/
toArray(): Telerik.Web.UI.SearchBoxButton[][];
    }


    class SearchContext   {
        /**
Gets the value of the Enabled property
@method
@returns 
*/
get_enabled(): string;
        /**
Gets the root DOM element of the SearchContext's drop-down.
@method
@returns The root DOM element of the SearchContext
*/
get_dropDownElement(): HTMLElement;
        /**
Toggles the enabled state of the SearchContext.
@method
@returns 
*/
set_enabled(): void;
        /**
Gets a collection with all items
@method
@returns 
*/
get_items(): Telerik.Web.UI.SearchContextItemCollection;
        /**
Gets the UL DOM element of the SearchContext's drop-down
@method
@returns The UL DOM element of the SearchContext
*/
get_childListElement(): HTMLElement;
        /**
Returns the currently selected item of the SearchContext.
@method
@returns 
*/
get_selectedItem(): void;
        /**
Gets the DOM element for the SearchContext.
@method
@returns The DOM element for the SearchContext.
*/
get_element(): HTMLElement;
        /**
Gets the DOM element of the SearchContext where the text of the currently selected item is shown.
@method
@returns DOM element of the SearchContext where the text of the currently selected item is shown.
*/
get_textElement(): HTMLElement;
    }


    class SearchContextItem   {
        /**
Returns the img element of the item
@method
@returns HTML element that holds the items
*/
get_imageElement(): HTMLElement;
        /**
Sets the Key property of the item.
@method
@param value - String value for the Key property
@returns 
*/
set_key(value: string): void;
        /**
Sets the SearchBoxButton's parent
@method
@param value - The parent SearchContext object
@returns 
*/
set_parent(value: Telerik.Web.UI.SearchContext): void;
        /**
Gets the DOM element for the SearchContextItem
@method
@returns The DOM element for the SearchContextItem
*/
get_element(): HTMLElement;
        /**
Gets the value of the Key property
@method
@returns 
*/
get_key(): string;
        /**
Gets the value of the ImageUrl property
@method
@returns 
*/
get_imageUrl(): string;
        /**
Gets the text of the SearchContextItem.
@method
@returns 
*/
get_text(): string;
        /**
Returns the text dom element of the item when imageUrl is set.
@method
@returns HTML element that holds the items
*/
get_textElement(): HTMLElement;
        /**
Sets the item's dom element
@method
@param value - The HTML element of the item
@returns 
*/
set_element(value: HTMLElement): void;
        /**
Sets the text of the SearchContextItem.
@method
@param value - String value for the Text property
@returns 
*/
set_text(value: string): void;
        /**
Gets the SearchContextItem's index inside the SearchContextItemCollection
@method
@returns The index of the SearchContextItem
*/
get_index(): number;
        /**
The SearchContextItem's parent
@method
@returns Gets the SearchContextItem
*/
get_parent(): Telerik.Web.UI.SearchContext;
        /**
Sets the ImageUrl property of the button
@method
@param value - String value for the ImageUrl property
@returns 
*/
set_imageUrl(value: string): void;
        /**
Gets the value of the Selected property
@method
@returns 
*/
get_selected(): string;
        /**
Toggles the selected state of the SearchContextItem.
@method
@returns 
*/
set_selected(): void;
    }


    class SearchContextItemCollection   {
        /**
Gets the index of an item.
@method
@param button - The item to get the index of
@returns int
*/
indexOf(button: Telerik.Web.UI.SearchContextItem): number;
        /**
Returns the collection represented as array
@method
@returns 
*/
toArray(): Telerik.Web.UI.SearchContextItem[][];
        /**
Iterates through the Items collection
@method
@param lambda - The function to execute on each iteration
@returns 
*/
forEach(lambda: Function): void;
        /**
Removes an item from the Items collection
@method
@param button - The item to remove
@returns 
*/
remove(button: Telerik.Web.UI.SearchContextItem): void;
        /**
Inserts an item into the Items collection at the position specified by the first (index) parameter
@method
@param index - The index to insert at
@param button - The item to insert
@returns 
*/
insert(index: number, button: Telerik.Web.UI.SearchContextItem): void;
        /**
Removes the item at the specified index.
@method
@param index - The index to remove at
@returns 
*/
removeAt(index: number): void;
        /**
Appends an item to the Items collection
@method
@param button - The item to insert
@returns 
*/
add(button: Telerik.Web.UI.SearchContextItem): void;
        /**
Clears the Items collection of RadSearchBox's SearchContext
@method
@returns 
*/
clear(): void;
        /**
Returns the number of items in the Items collection.
@method
@returns The number of the buttons
*/
get_count(): number;
        /**
Gets the item from the Items collection residing at the index specified by the parameter.
@method
@param index - The index of the button that should be returned
@returns Returns SearchContextItem
*/
getItem(index: number): Telerik.Web.UI.SearchContextItem;
    }


    class SocialDialogCancelEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the social type of the button.
@method
@returns 
*/
get_socialNetType(): string;
        /**
Returns the shared url.
@method
@returns 
*/
get_url(): string;
        /**
Dynamically sets new values for url and title to share.
@method
@param url - 
@param title - 
@returns 
*/
set_stringsToShare(url: string, title: string): void;
    }


    class SocialDialogEventArgs  extends Sys.EventArgs {
        /**
Returns a reference to the opened dialog popup.
@method
@returns 
*/
get_dialog(): any;
        /**
Returns the social type of the button.
@method
@returns 
*/
get_socialNetType(): string;
        /**
Returns the shared url.
@method
@returns 
*/
get_url(): string;
    }


    class Spell  extends Telerik.Web.UI.RadWebControl {
        /**
Gets the URL which the AJAX call will be made to. Check the help for more information.
@method
@returns The URL which the AJAX call will be made to. Check the help for more information.
*/
get_ajaxUrl(): string;
        /**
Gets the class of the client side text source object.
@method
@returns The class of the client side text source object.
*/
get_clientTextSource(): Telerik.Web.UI.Spell.HtmlTextSourceBase;
        /**
Gets the client ID of the control to spell check.
@method
@returns The client ID of the control to spell check.
*/
get_controlToCheck(): string;
        /**
Gets the array containing the client IDs of the controls to be spell checked.
@method
@returns The array of controls
*/
get_controlsToCheck(): any;
        /**
Gets the instance of the client-side DialogOpener object that handles that dialog opening/parameter passing processes.
@method
@returns The current DialogOpener.
*/
get_dialogOpener(): any;
        /**
Gets the dictionary language culture code.
@method
@returns The dictionary language culture code.
*/
get_dictionaryLanguage(): string;
        /**
Gets the language currently selected in the drop down displayed when the SupportedLanguages language property is set.
@method
@returns The language currently selected in the drop down displayed when the SupportedLanguages language property is set.
*/
get_selectedLanguage(): any;
        /**
Gets the bool value indicating whether spell checking for the target control has been completed.
@method
@returns The bool value indicating whether spell checking for the target control has been completed.
*/
get_spellChecked(): boolean;
        /**
Gets the current TextSource object created from the currently provided control(s) to check and client TextSource class.
@method
@returns The current TextSource object.
*/
get_textSource(): any;
        /**
Gets the bool value indicating whether the classic dialogs should be used. "true": the browser window is used, "false"(default) RadWindow is used.
@method
@returns The bool value indicating whether the classic dialogs should be used.
*/
get_useClassicDialogs(): boolean;
        /**
Sets the URL which the AJAX call will be made to. Check the help for more information.
@method
@param value - The URL which the AJAX call will be made to. Check the help for more information.
@returns 
*/
set_ajaxUrl(value: string): void;
        /**
Sets a class of the client side text source object.
@method
@param value - The class of the client side text source object.
@returns 
*/
set_clientTextSource(value: Telerik.Web.UI.Spell.HtmlTextSourceBase): void;
        /**
Sets a client ID of the control to spell check.
@method
@param value - The client ID of the control to spell check.
@returns 
*/
set_controlToCheck(value: string): void;
        /**
Sets an array containing the client IDs of the controls to be spell checked.
@method
@param value - The array containing the client IDs of the controls to be spell checked.
@returns 
*/
set_controlsToCheck(value: any): void;
        /**
Sets a client-side DialogOpener object. that handles that dialog opening/parameter passing processes.
@method
@param value - The DialogOpener object.
@returns 
*/
set_dialogOpener(value: any): void;
        /**
Sets a dictionary language culture code to the spell.
@method
@param value - The dictionary language culture code to be set.
@returns 
*/
set_dictionaryLanguage(value: string): void;
        /**
Sets a bool value indicating whether the spellcheck process is completed (true) or not (false). Note: Should not be used directly. It is used by the spellcheck validator.
@method
@param value - The bool value indicating whether the spellcheck process is completed
@returns 
*/
set_spellChecked(value: boolean): void;
        /**
Sets a bool value indicating whether the classic dialogs will be used by the control. "true": the browser window is used, "false"(default) RadWindow is used.
@method
@param value - The bool value indicating whether the classic dialogs will be used by the control.
@returns 
*/
set_useClassicDialogs(value: boolean): void;
        /**
Launch the spellcheck process for the provided TextSource.
@method
@param source - The text source to be spell
@returns 
*/
spellCheck(source: string): void;
        /**
Launch the spellcheck process.
@method
@returns 
*/
startSpellCheck(): void;
        /**
Adds a handler to the OnClientCheckCancelled event.(when spell checking is cancelled)
*/
add_clientCheckCancelled(handler: Function): void;
        /**
Adds a handler to the OnClientCheckFinished event(when spell checking is finished).
*/
add_clientCheckFinished(handler: Function): void;
        /**
Adds a handler to the OnClientCheckStarted event(when spell checking is started).
*/
add_clientCheckStarted(handler: Function): void;
        /**
Adds a handler to the OnClientDialogClosing event(when spell checking is finished).
*/
add_clientDialogClosing(handler: Function): void;
        /**
Adds a handler to the OnClientLoad event (after the spell control is initialized).
*/
add_load(handler: Function): void;
        /**
Removes a handler from the OnClientCheckCancelled event.
*/
remove_clientCheckCancelled(handler: Function): void;
        /**
Removes a handler from the OnClientCheckFinished event.
*/
remove_clientCheckFinished(handler: Function): void;
        /**
Removes a handler from the OnClientCheckStarted event.
*/
remove_clientCheckStarted(handler: Function): void;
        /**
Removes a handler from the OnClientDialogClosing event.
*/
remove_clientDialogClosing(handler: Function): void;
        /**
Removes a handler from the OnClientLoad event.
*/
remove_load(handler: Function): void;
    }


    class SpellCheckService  extends Sys.Component {
        /**

@method
@param word - 
@returns 
*/
addCustomWord(word: string): void;
        /**

@method
@returns 
*/
get_language(): string;
        /**

@method
@returns 
*/
get_url(): string;
        /**

@method
@param value - 
@returns 
*/
set_language(value: string): void;
        /**

@method
@param value - 
@returns 
*/
set_url(value: string): void;
        /**

@method
@param text - 
@returns 
*/
spellCheck(text: string): void;
        /**
Adds a handler to the Complete event
*/
add_complete(handler: Function): void;
        /**
Removes a handler from the Complete event
*/
remove_complete(handler: Function): void;
    }


    class SplitterPaneBase  extends Sys.UI.Control {
        /**
Gets the position of the scrollbar of the control
@method
@returns The position of the scrollbar of the control in the form
*/
getScrollPos(): any;
        /**
Returns a value, indicating whether the control is collapsed
@method
@returns A value
*/
get_collapsed(): boolean;
        /**
Gets the height in pixels of the control
@method
@returns The height in pixels of the control
*/
get_height(): number;
        /**
Returns the maximum possible height of the control
@method
@returns The maximum possible height of the control
*/
get_maxHeight(): number;
        /**
Returns the maximum possible width of the control
@method
@returns The maximum possible width of the control
*/
get_maxWidth(): number;
        /**
Returns the minimum possible height of the control
@method
@returns The minimum possible height of the control
*/
get_minHeight(): number;
        /**
Returns the minimum possible width of the control
@method
@returns The minimum possible width of the control
*/
get_minWidth(): number;
        /**
Returns a value, indicating whether the control persists the position of the scrollbar
@method
@returns A value
*/
get_persistScrollPosition(): boolean;
        /**
Returns the value of the Scrolling property of the control
@method
@returns The value of the Scrolling property of the control
*/
get_scrolling(): Telerik.Web.UI.SplitterPaneScrolling;
        /**
Gets the width in pixels of the control
@method
@returns The width in pixels of the control
*/
get_width(): number;
        /**
Sets the position of the scrollbar of the control
@method
@param scrollLeft - The left position of the scrollbar
@param scrollTop - The top position of the scrollbar
@returns 
*/
setScrollPos(scrollLeft: number, scrollTop: number): void;
        /**
Sets the height in pixels of the control
@method
@param value - The new height in pixels of the control
@returns 
*/
set_height(value: number): void;
        /**
Sets new value for the Scrolling property of the control
@method
@param value - The new value for the Scrolling property of the control
@returns 
*/
set_scrolling(value: Telerik.Web.UI.SplitterPaneScrolling): void;
        /**
Sets the width in pixels of the control
@method
@param value - The new width in pixels of the control
@returns 
*/
set_width(value: number): void;
        /**
Adds a handler for the collapsed event
*/
add_collapsed(handler: Function): void;
        /**
Adds a handler for the collapsing event
*/
add_collapsing(handler: Function): void;
        /**
Adds a handler for the expanded event
*/
add_expanded(handler: Function): void;
        /**
Adds a handler for the expanding event
*/
add_expanding(handler: Function): void;
        /**
Adds a handler for the resized event
*/
add_resized(handler: Function): void;
        /**
Adds a handler for the resizing event
*/
add_resizing(handler: Function): void;
        /**
Removes a handler for the collapsed event
*/
remove_collapsed(handler: Function): void;
        /**
Removes a handler for the collapsing event
*/
remove_collapsing(handler: Function): void;
        /**
Removes a handler for the expanded event
*/
remove_expanded(handler: Function): void;
        /**
Removes a handler for the expanding event
*/
remove_expanding(handler: Function): void;
        /**
Removes a handler for the resized event
*/
remove_resized(handler: Function): void;
        /**
Removes a handler for the resizing event
*/
remove_resizing(handler: Function): void;
    }


    class TimeViewSelectedEventArgs  extends Sys.EventArgs {
        /**
Returns the newly selected time value.
@method
@returns 
*/
get_newTime(): Date;
        /**
Returns the time before the user selected a new time value.
@method
@returns 
*/
get_oldTime(): Date;
    }


    class TimeViewSelectingEventArgs  extends Sys.CancelEventArgs {
        /**
Returns the newly selected time value.
@method
@returns 
*/
get_newTime(): Date;
        /**
Returns the time before the user selected a new time value.
@method
@returns 
*/
get_oldTime(): Date;
    }


    class TreeListColumn   {
        /**
A property which returns the unique name of the column.
@method
@returns 
*/
get_uniqueName(): void;
    }


    class TreeListDataItem  extends Sys.UI.Control {
        /**
A property which gets the next sibling of the current item.
@method
@returns 
*/
get_nextSibling(): void;
        /**
A property which gets the previous sibling of the current item.
@method
@returns 
*/
get_previousSibling(): void;
        /**
A property which gets the index of the current item in the treelist hierarchy.
@method
@returns 
*/
get_hierarchicalIndex(): void;
        /**
A property which returns whether the current item is root item for the treelist.
@method
@returns 
*/
get_isRoot(): void;
        /**
Gets the display index of the current TreeListDataItem instance.
@method
@returns 
*/
get_displayIndex(): void;
        /**
Gets a value indicating whether the current item is selected.
@method
@returns 
*/
get_selected(): void;
        /**
Method which triggers specific command for the TreeListDataItem when executed. The method is called for the TreeListDataItem client instance. The method arguments are the command which will be processed and its corresponding arguments.
@method
@returns 
*/
fireCommand(): void;
        /**
A property which gets a collection of the visible child items of the current item.
@method
@returns 
*/
get_childItems(): void;
        /**
Gets the owner RadTreeList instance for this item.
@method
@returns 
*/
get_owner(): void;
        /**
Sets the selected state of the current item.
@method
@returns 
*/
set_selected(): void;
        /**
A property which returns whether the current item is expanded.
@method
@returns 
*/
get_expanded(): void;
        /**
A property which gets the parent of the current item.
@method
@returns 
*/
get_parentItem(): void;
    }


    class WebServiceSettings   {
        /**

@method
@returns 
*/
get_isEmpty(): void;
        /**

@method
@returns 
*/
get_isOData(): void;
        /**

@method
@returns 
*/
get_isWcf(): void;
        /**

@method
@returns 
*/
get_method(): void;
        /**

@method
@returns 
*/
get_path(): void;
        /**

@method
@returns 
*/
get_useHttpGet(): void;
        /**

@method
@returns 
*/
set_method(): void;
        /**

@method
@returns 
*/
set_path(): void;
        /**

@method
@returns 
*/
set_useHttpGet(): void;
    }


    class jSlide   {
        /**

@method
@returns 
*/
collapse(): void;
        /**

@method
@returns 
*/
expand(): void;
        /**

@method
@returns 
*/
get_animatedElement(): void;
        /**

@method
@returns 
*/
get_direction(): void;
        /**

@method
@returns 
*/
get_element(): HTMLElement;
        /**

@method
@returns 
*/
get_events(): void;
        /**

@method
@returns 
*/
set_animatedElement(): void;
        /**

@method
@returns 
*/
set_direction(): void;
        /**

@method
@returns 
*/
show(): void;
        /**

@method
@returns 
*/
updateSize(): void;
        /**

*/
add_collapseAnimationEnded(handler: Function): void;
        /**

*/
add_collapseAnimationStarted(handler: Function): void;
        /**

*/
add_expandAnimationEnded(handler: Function): void;
        /**

*/
add_expandAnimationStarted(handler: Function): void;
        /**

*/
remove_collapseAnimationEnded(handler: Function): void;
        /**

*/
remove_collapseAnimationStarted(handler: Function): void;
        /**

*/
remove_expandAnimationEnded(handler: Function): void;
        /**

*/
remove_expandAnimationStarted(handler: Function): void;
    }


}
declare module Telerik.Web.UI {
    enum AnimationType {
         None = 0,
         Linear = 1,
         InQuad = 2,
         OutQuad = 3,
         InOutQuad = 4,
         InCubic = 5,
         OutCubic = 6,
         InOutCubic = 7,
         InQuart = 8,
         OutQuart = 9,
         InOutQuart = 10,
         InQuint = 11,
         OutQuint = 12,
         InOutQuint = 13,
         InSine = 14,
         OutSine = 15,
         InOutSine = 16,
         InExpo = 17,
         OutExpo = 18,
         InOutExpo = 19,
         InBack = 20,
         OutBack = 21,
         InOutBack = 22,
         InBounce = 23,
         OutBounce = 24,
         InOutBounce = 25,
         InElastic = 26,
         OutElastic = 27,
         InOutElastic = 28
    }
    enum ButtonToggleType {
         None = 0,
         CheckBox = 1,
         Radio = 2,
         CustomToggle = 3
    }
    enum DayOfWeek {
         Sunday = 0,
         Monday = 1,
         Tuesday = 2,
         Wednesday = 3,
         Thursday = 4,
         Friday = 5,
         Saturday = 6
    }
    enum DisplayFormatPosition {
         Left = 1,
         Right = 2
    }
    enum DockMode {
         Floating = 1,
         Docked = 2,
         Default = 3
    }
    enum EditingOptions {
         Typing = 1,
         Tools = 2,
         ContextMenus = 4,
         Tab = 8,
         Modules = 16,
         EditModes = 32,
         All = 63
    }
    enum ExpandDirection {
         Auto = 0,
         Up = 1,
         Down = 2,
         Left = 3,
         Right = 4
    }
    enum ExpandMode {
         MultipleExpandedItems = 0,
         SingleExpandedItem = 1,
         FullExpandedItem = 2
    }
    enum FileExplorerControls {
         Tree = 1,
         FileList = 2
    }
    enum FileExplorerItemPermissions {
         Read = 1,
         Upload = 2,
         Delete = 4
    }
    enum FileExplorerItemType {
         File = 0,
         Directory = 1
    }
    enum FileExplorerMode {
         Default = 1,
         FileTree = 2,
         Thumbnails = 3
    }
    enum FormDecoratorDecoratedControls {
         None = 0x0,
         CheckBoxes = 0x1,
         RadioButtons = 0x2,
         Buttons = 0x4,
         Scrollbars = 0x8,
         Textbox = 0x10,
         Textarea = 0x20,
         Fieldset = 0x40,
         Label = 0x80,
         H4H5H6 = 0x100,
         Select = 0x200,
         Zone = 0x400,
         GridFormDetailsViews = 0x800,
         Default = 0xF,
         All = 0xFFF
    }
    enum GridClientDataBindingParameterType {
         String = 0,
         List = 1,
         Linq = 2,
         Oql = 3
    }
    enum GridFilterFunction {
         NoFilter = 0,
         Contains = 1,
         DoesNotContain = 2,
         StartsWith = 3,
         EndsWith = 4,
         EqualTo = 5,
         NotEqualTo = 6,
         GreaterThan = 7,
         LessThan = 8,
         GreaterThanOrEqualTo = 9,
         LessThanOrEqualTo = 10,
         Between = 11,
         NotBetween = 12,
         IsEmpty = 13,
         NotIsEmpty = 14,
         IsNull = 15,
         NotIsNull = 16,
         Custom = 17
    }
    enum GridSortOrder {
         None = 0,
         Ascending = 1,
         Descending = 2
    }
    enum InputButtonType {
         Button = 1,
         MoveUpButton = 2,
         MoveDownButton = 3
    }
    enum InputErrorReason {
         ParseError = 1,
         OutOfRange = 2
    }
    enum InputSettingValidateOnEvent {
         Blur = 0,
         Submit = 1,
         All = 2
    }
    enum ItemFlow {
         Vertical = 0,
         Horizontal = 1
    }
    enum Keys {
         Shift = 16,
         Escape = 27,
         Up = 38,
         Down = 40,
         Left = 37,
         Right = 39,
         Enter = 13,
         Tab = 9,
         Space = 32,
         PageUp = 33,
         Del = 46,
         F1 = 112,
         F12 = 123,
         Zero = 48,
         Numpad0 = 96,
         Numpad9 = 105
    }
    enum ListBoxSelectionMode {
         Single = 0,
         Multiple = 1
    }
    enum ListBoxTransferMode {
         Move = 0,
         Copy = 1
    }
    enum MenuRepeatDirection {
         Vertical = 0,
         Horizontal = 1
    }
    enum NotificationAnimation {
         None = 0,
         Resize = 1,
         Fade = 2,
         Slide = 4,
         FlyIn = 8
    }
    enum NotificationHorizontalPosition {
         Left = 1,
         Center = 2,
         Right = 3
    }
    enum NotificationLoad {
         PageLoad = 0,
         FirstShow = 1,
         EveryShow = 2,
         TimeInterval = 3
    }
    enum NotificationPosition {
         TopLeft = 11,
         TopCenter = 12,
         TopRight = 13,
         MiddleLeft = 21,
         Center = 22,
         MiddleRight = 23,
         BottomLeft = 31,
         BottomCenter = 32,
         BottomRight = 33
    }
    enum NotificationScrolling {
         Auto = 0,
         None = 1,
         X = 2,
         Y = 3,
         Both = 4,
         Default = 5
    }
    enum NotificationVerticalPosition {
         Top = 1,
         Middle = 2,
         Bottom = 3
    }
    enum Orientation {
         Horizontal = 0,
         Vertical = 1
    }
    enum PaletteModes {
         WebPalette = 1,
         RGBSliders = 2,
         HSB = 4,
         HSV = 8
    }
    enum PivotGridAggregate {
         "Sum" = 0,
         "Count" = 1,
         "Average" = 2,
         "Max" = 3,
         "Min" = 4,
         "Product" = 5,
         "StdDev" = 6,
         "StdDevP" = 7,
         "Var" = 8,
         "VarP" = 9
    }
    enum PivotGridConfigurationPanelLayoutType {
         "Stacked" = 1,
         "SideBySide" = 2,
         "TwoByTwo" = 4,
         "OneByFour" = 8
    }
    enum PivotGridFieldZoneType {
         "Filter" = 1,
         "Aggregate" = 2,
         "Column" = 4,
         "Row" = 8
    }
    enum ProgressBarOrientation {
         Horizontal = 0,
         Vertical = 1
    }
    enum ProgressBarType {
         Value = 0,
         Percent = 1,
         Chunk = 2
    }
    enum RadButtonType {
         StandardButton = 0,
         LinkButton = 1,
         ToggleButton = 2
    }
    enum RadComboBoxFilter {
         None = 0,
         Contains = 1,
         StartsWith = 2
    }
    enum RadListViewInsertItemPosition {
         None = 0,
         FirstItem = 1,
         LastItem = 2
    }
    enum RadToolBarItemType {
         Button = 0,
         DropDown = 1,
         SplitButton = 2
    }
    enum RatingPrecision {
         Item = 0,
         Half = 1,
         Exact = 2
    }
    enum RatingSelectionMode {
         Single = 0,
         Continuous = 1
    }
    enum RecurrenceState {
         NotRecurring = 0,
         Master = 1,
         Occurrence = 2,
         Exception = 3
    }
    enum RenderMode {
         Auto = 0,
         Classic = 1,
         Lite = 2,
         Native = 3,
         Mobile = 4
    }
    enum RotatorAnimationType {
         None = 1,
         Fade = 2,
         Pulse = 3,
         CrossFade = 4
    }
    enum RotatorScrollDirection {
         Left = 1,
         Right = 2,
         Up = 4,
         Down = 8
    }
    enum RotatorType {
         AutomaticAdvance = 1,
         ButtonsOver = 2,
         Buttons = 3,
         SlideShow = 4,
         SlideShowButtons = 5,
         FromCode = 6,
         Carousel = 7,
         CarouselButtons = 8,
         CoverFlow = 9,
         CoverFlowButtons = 10
    }
    enum SchedulerFormMode {
         Hidden = 0,
         Insert = 1,
         Edit = 2,
         AdvancedInsert = 3,
         AdvancedEdit = 4
    }
    enum SchedulerNavigationCommand {
         SwitchToDayView = 0,
         SwitchToWeekView = 1,
         SwitchToMonthView = 2,
         SwitchToTimelineView = 3,
         SwitchToMultiDayView = 4,
         SwitchToAgendaView = 5,
         NavigateToNextPeriod = 6,
         NavigateToPreviousPeriod = 7,
         SwitchToSelectedDay = 8,
         SwitchFullTime = 9,
         DisplayNextAppointmentSegment = 10,
         DisplayPreviousAppointmentSegment = 11,
         NavigateToSelectedDate = 12
    }
    enum SchedulerViewType {
         DayView = 0,
         WeekView = 1,
         MonthView = 2,
         ResourceView = 3,
         TimelineView = 4,
         MultiDayView = 5,
         AgendaView = 6
    }
    enum SearchBoxButtonAlignment {
         Before = 0,
         After = 1
    }
    enum SearchBoxButtonPosition {
         Left = 0,
         Right = 1
    }
    enum SearchBoxFilter {
         Contains = 0,
         StartsWith = 1
    }
    enum SelectionOnFocus {
         None = 0,
         CaretToBeginning = 1,
         CaretToEnd = 2,
         SelectAll = 3
    }
    enum SlideDirection {
         Up = 1,
         Down = 2,
         Left = 3,
         Right = 4
    }
    enum SliderItemType {
         None = 1,
         Item = 2,
         Tick = 3
    }
    enum SliderTrackPosition {
         Center = 1,
         TopLeft = 2,
         BottomRight = 3
    }
    enum SplitBarCollapseMode {
         None = 1,
         Forward = 2,
         Backward = 3,
         Both = 4
    }
    enum SplitterDirection {
         Forward = 1,
         Backward = 2
    }
    enum SplitterPaneScrolling {
         Both = 1,
         X = 2,
         Y = 3,
         None = 4
    }
    enum SplitterResizeMode {
         AdjacentPane = 1,
         Proportional = 2,
         EndPane = 3
    }
    enum SplitterSlideDirection {
         Right = 1,
         Left = 2,
         Top = 3,
         Bottom = 4
    }
    enum StripFormattingOptions {
         None = 0,
         NoneSupressCleanMessage = 1,
         MSWord = 2,
         MSWordNoFonts = 4,
         MSWordRemoveAll = 8,
         Css = 16,
         Font = 32,
         Span = 64,
         AllExceptNewLines = 128,
         ConvertWordLists = 256,
         All = 512,
         MSWordNoMargins = 1024
    }
    enum TabStripAlign {
         Left = 0,
         Center = 1,
         Right = 2,
         Justify = 3
    }
    enum TabStripOrientation {
         HorizontalTop = 0,
         HorizontalBottom = 1,
         VerticalRight = 2,
         VerticalLeft = 3
    }
    enum TabStripScrollButtonsPosition {
         Left = 0,
         Middle = 1,
         Right = 2
    }
    enum TagCloudDistribution {
         Linear = 0,
         Logarithmic = 1
    }
    enum TagCloudSorting {
         NotSorted = 0,
         AlphabeticAsc = 1,
         AlphabeticDsc = 2,
         WeightedAsc = 3,
         WeightedDsc = 4
    }
    enum ToolBarDropDownExpandDirection {
         Up = 0,
         Down = 1
    }
    enum ToolBarImagePosition {
         Left = 0,
         Right = 1,
         AboveText = 2,
         BelowText = 3
    }
    enum ToolTipAnimation {
         None = 0,
         Resize = 1,
         Fade = 2,
         Slide = 4,
         FlyIn = 8
    }
    enum ToolTipHideEvent {
         Default = 1,
         LeaveToolTip = 2,
         ManualClose = 4,
         LeaveTargetAndToolTip = 8,
         FromCode = 16
    }
    enum ToolTipPosition {
         TopLeft = 11,
         TopCenter = 12,
         TopRight = 13,
         MiddleLeft = 21,
         Center = 22,
         MiddleRight = 23,
         BottomLeft = 31,
         BottomCenter = 32,
         BottomRight = 33
    }
    enum ToolTipRelativeDisplay {
         Mouse = 0,
         Element = 1,
         BrowserWindow = 2
    }
    enum ToolTipScrolling {
         Auto = 0,
         None = 1,
         X = 2,
         Y = 3,
         Both = 4,
         Default = 5
    }
    enum ToolTipShowEvent {
         OnMouseOver = 1,
         OnClick = 2,
         OnRightClick = 4,
         OnFocus = 8,
         FromCode = 16
    }
    enum TreeNodeCheckState {
         Unchecked = 0,
         Checked = 1,
         Indeterminate = 2
    }
    enum TreeNodeExpandMode {
         ClientSide = 0,
         ServerSide = 1,
         ServerSideCallBack = 2,
         WebService = 3
    }
    enum TreeViewLoadingStatusPosition {
         BeforeNodeText = 0,
         AfterNodeText = 1,
         BelowNodeText = 2,
         None = 3
    }
    enum WindowAnimation {
         None = 0,
         Resize = 1,
         Fade = 2,
         Slide = 4,
         FlyIn = 8
    }
    enum WindowAutoSizeBehaviors {
         Width = 1,
         WidthProportional = 2,
         Height = 4,
         HeightProportional = 8,
         Default = 10
    }
    enum WindowBehaviors {
         None = 0,
         Resize = 1,
         Minimize = 2,
         Close = 4,
         Pin = 8,
         Maximize = 16,
         Move = 32,
         Reload = 64,
         Default = 127
    }
    enum WindowMinimizeMode {
         SameLocation = 1,
         MinimizeZone = 2,
         Default = 1
    }
    enum jSlideDirection {
         Up = 1,
         Down = 2,
         Left = 3,
         Right = 4
    }
}
declare module Telerik.Web {
    enum BoxSide {
         Top = 0,
         Right = 1,
         Bottom = 2,
         Left = 3
    }
}
declare module Telerik.Web.Editor {
    class CommandList   {
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static AjaxSpellCheck(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static ToggleScreenMode(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertRowBelow(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertRowAbove(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertColumnRight(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertColumnLeft(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static DeleteRow(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static DeleteColumn(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static DeleteCell(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static MergeColumns(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static MergeRows(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static SplitCell(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static SplitCellHorizontal(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static DeleteTable(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormText(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormTextarea(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormSubmit(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormReset(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormRadio(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormPassword(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormImageButton(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormHidden(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormCheckbox(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormButton(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormForm(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static StripWord(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static StripSpan(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static StripFont(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static StripCss(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static StripAll(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FormatStripper(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertTable(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertShiftTab(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertTabMozilla(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertTab(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static SetToolFocus(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Redo(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Undo(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static PastePlainTextWithTable(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static CopyFromEditor(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static PastePlainText(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static PasteAsHtml(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static PasteFromWordNoFontsNoSizes(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static PasteFromWord(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static PasteMarkdown(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static PasteHtml(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Copy(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Paste(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Cut(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertParagraph(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertParagraphSafari(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FormatBlock(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FormatSets(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FormatPainterApply(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FormatPainterCopy(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FormatPainterClear(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertUnorderedList(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertOrderedList(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Indent(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Outdent(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static ForeColor(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static BackColor(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FontName(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static RealFontSize(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static StrikeThrough(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Superscript(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Subscript(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Underline(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Italic(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Bold(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static AbsolutePosition(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Unlink(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static SelectAll(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static JustifyFull(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static JustifyNone(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static JustifyCenter(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static JustifyRight(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static JustifyLeft(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FontSize(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Zoom(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Print(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertSnippet(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormElement(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertHorizontalRule(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertSymbol(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertTime(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertDate(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertGroupbox(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static ImageManager(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static MediaManager(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FlashManager(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static SilverlightManager(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static TemplateManager(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static AboutDialog(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static Help(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static PageProperties(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static ImageMapDialog(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static TableWizard(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertFormSelect(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static SetTableProperties(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertTableLight(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static SetCellProperties(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FindAndReplace(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static StyleBuilder(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static XhtmlValidator(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static TrackChangesDialog(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertCustomLink(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static LinkManager(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static SetLinkProperties(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static DocumentManager(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertLink(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static SetImageProperties(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertImage(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static InsertExternalVideo(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static FormatCodeBlock(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static EnterParagraphMozilla(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static EnterNewLine(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static ToggleTableBorder(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static ConvertToLower(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static ConvertToUpper(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static ApplyClass(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
        /**

@method
@param commandName - The command name
@param editor - The RadEditor instance triggered the command.
@param args - The command arguments.
@returns 
*/
static ToggleEditMode(commandName: string, editor: Telerik.Web.UI.RadEditor, args: Telerik.Web.UI.EditorCommandEventArgs): void;
    }


}
declare module Telerik.Web {
    class CommonScripts   {
        /**
Adds multiple css classes to a DomElement
@method
@param element - The element to modify
@param classNames - The class names to add
@returns 
*/
static addCssClasses(element: HTMLElement, classNames: any): void;
        /**
Adds the specified event handler to the element's eventName. Can be used when attaching events to HTML elements in IFRAMEs where ASP.NET AJAX's $addHandler and $removeHandler do not work
@method
@param element - The HTML DOM element to attach an event handler to
@param eventName - The name of the event to attach an event handler to
@param handler - The event handler function
@returns 
*/
static addExternalHandler(element: HTMLElement, eventName: string, handler: Function): void;
        /**
Provides a method to add a DOM event handler to the DOM element that exposes the event. This member is static and can be invoked without creating an instance of the class. This is basically a copy of $addHandler, but handles correctly IE proprietary events, such as "onpropertychange", in IE9.
@method
@param element - The HTML DOM element to attach an event handler to
@param eventName - The name of the event to attach an event handler to
@param handler - The event handler function
@param autoRemove - A boolean value that determines whether the handler should be removed automatically when the element is disposed.
@returns 
*/
static addHandler(element: HTMLElement, eventName: string, handler: Function, autoRemove: boolean): void;
        /**
Adds a list of DOM event handlers to the DOM element that exposes the events. This member is static and can be invoked without creating an instance of the class. This is basically a copy of $addHandlers, but handles correctly IE proprietary events, such as "onpropertychange", in IE9.
@method
@param element - The DOM element that exposes the events.
@param events - A dictionary of event handlers.
@param handlerOwner - The object instance that is the context for the delegates that should be created from the handlers.
@param autoRemove - A boolean value that determines whether the handler should be removed automatically when the element is disposed.
@returns 
*/
static addHandlers(element: HTMLElement, events: any, handlerOwner: any, autoRemove: boolean): void;
        /**
Cancels the specified event from propagating
@method
@param e - The event object of the event to cancel
@returns Always returns false
*/
static cancelRawEvent(e: Sys.UI.DomEvent): boolean;
        /**
Removes all DOM event handlers from a DOM element that were added through the Sys.UI.DomEvent addHandler or the Sys.UI.DomEvent addHandlers methods. This member is static and can be invoked without creating an instance of the class. This is basically a copy of $clearHandlers, but handles correctly IE proprietary events, such as "onpropertychange", in IE9.
@method
@param element - The element that exposes the events.
@returns 
*/
static clearHandlers(element: HTMLElement): void;
        /**
Clones the specified sourceControl RadControl client object with the optional specified type and saves it as an attribute to the HTML element representing the container DOM element of the RadControl
@method
@param sourceControl - Source RadControl object to clone
@param optionalType - Optional. The type of the cloned control
@param element - The HTML DOM element of the cloned control
@returns The cloned RadWebControl object
*/
static cloneControl(sourceControl: Telerik.Web.UI.RadWebControl, optionalType: Function, element: HTMLElement): Telerik.Web.UI.RadWebControl;
        /**
Clones the source object to the target object and returns the cloned target object
@method
@param source - The source JS object
@param target - Optional. The target JS object
@returns The cloned JS object
*/
static cloneJsObject(source: any, target: any): any;
        /**
Tests whether a point (x,y) is contained within a rectangle
@method
@param rect - The rectangle
@param x - The x coordinate of the point
@param y - The y coordinate of the point
@returns 
*/
static containsPoint(rect: any, x: number, y: number): void;
        /**
Checks if the specified HTML element overflows the screen with the specified screen size from bottom
@method
@param screenSize - An Object
@param element - HTML DOM element
@param cachedLocation - Optional. If a Point object is specified for this parameter
@returns 
*/
static elementOverflowsBottom(screenSize: any, element: HTMLElement, cachedLocation: Sys.UI.Point): boolean;
        /**
Checks if the specified HTML element overflows the screen with the specified screen size from left
@method
@param element - HTML DOM element
@param cachedLocation - Optional. If a Point object is specified for this parameter
@returns 
*/
static elementOverflowsLeft(element: HTMLElement, cachedLocation: Sys.UI.Point): boolean;
        /**
Checks if the specified HTML element overflows the screen with the specified screen size from right
@method
@param screenSize - An Object
@param element - HTML DOM element
@param cachedLocation - Optional. If a Point object is specified for this parameter
@returns 
*/
static elementOverflowsRight(screenSize: any, element: HTMLElement, cachedLocation: Sys.UI.Point): boolean;
        /**
Checks if the specified HTML element overflows the screen with the specified screen size from top
@method
@param element - HTML DOM element
@param cachedLocation - Optional. If a Point object is specified for this parameter
@returns 
*/
static elementOverflowsTop(element: HTMLElement, cachedLocation: Sys.UI.Point): boolean;
        /**
Finds the client-side RadControl object by provided server-side ID of the RadControl object in the collection of child elements of the parent  DOM element
@method
@param parent - The HTML DOM element that is a parent to the container element of the control to find
@param id - The ID of the control to find
@returns 
*/
static findControl(parent: HTMLElement, id: string): Sys.UI.Control;
        /**
Finds the HTML DOM wrapper element of the RadControl by provided server-side ID in the collection of child elements of the parent DOM element
@method
@param parent - The HTML DOM element that is a parent to the container element of the control to find
@param id - The ID of the control to find
@returns 
*/
static findElement(parent: HTMLElement, id: string): HTMLElement;
        /**
Finds the closest scrollable parent element and changes its position to relative if static
@method
@param element - HTML DOM element
@returns 
*/
static fixScrollableParentBehavior_OldIE(element: HTMLElement): void;
        /**
Gets the entire border box sizes.
@method
@param element - DOM element
@returns Element
*/
static getBorderBox(element: HTMLElement): any;
        /**
Gets the border thickness of an element on a specific boxSide.
@method
@param element - DOM element
@param boxSide - Side of the element
@returns Border thickness on the element
*/
static getBorderWidth(element: HTMLElement, boxSide: Telerik.Web.BoxSide): number;
        /**
Gets the coordinates, width and height of an element.
@method
@param element - HTML DOM element whose bounds to retrieve
@returns A Bounds object with four fields
*/
static getBounds(element: HTMLElement): Sys.UI.Bounds;
        /**
Returns the first child element of element with the specified className, optionally starting from position index
@method
@param element - HTML DOM element whose children to search in
@param className - The class name of the child element to search for
@param index - The index of the child element in the parent
@returns 
*/
static getChildByClassName(element: HTMLElement, className: string, index: number): HTMLElement;
        /**
Returns an array of all child elements of element with the specified className
@method
@param element - HTML DOM element whose children to search in
@param tagName - The tag name of the child elements to search for
@returns 
*/
static getChildrenByClassName(element: HTMLElement, tagName: string): any;
        /**
Returns an array of all child elements of element with the specified tag name
@method
@param element - HTML DOM element whose children to search in
@param tagName - The tag name of the child elements to search for
@returns 
*/
static getChildrenByTagName(element: HTMLElement, tagName: string): any;
        /**
Gets the width and height of the browser client window (excluding scrollbars)
@method
@returns Browser
*/
static getClientBounds(): Sys.UI.Bounds;
        /**
Gets the computed value of the attribute style of the specified element. If there's no computed value, optionally returns defaultValue
@method
@param element - HTML DOM element whose style to retrieve
@param attribute - The style attribute whose value to retrieve
@param defaultValue - Optional. The default value to return if there is no value set
@returns The value of the specified style attribute
*/
static getComputedStyle(element: HTMLElement, attribute: string, defaultValue: string): string;
        /**
Gets the "content-box" size of an element.
@method
@param element - DOM element
@returns Size of the element
*/
static getContentSize(element: HTMLElement): any;
        /**
Gets the current value of the attribute style of the specified element. If the current value is not defined, optionally returns defaultValue
@method
@param element - HTML DOM element whose style to retrieve
@param attribute - The style attribute whose value to retrieve
@param defaultValue - Optional. The default value to return if there is no value set
@returns The value of the specified style attribute
*/
static getCurrentStyle(element: HTMLElement, attribute: string, defaultValue: string): string;
        /**
Gets the cursor position as Object {left, top} of the mouse when event e is fired, relative to the Document
@method
@param e - The event object of the current DOM event
@returns Object
*/
static getDocumentRelativeCursorPosition(e: Sys.UI.DomEvent): any;
        /**
Returns the first child element of element widh the specified className  and optionally of type tagName
@method
@param element - The parent HTML DOM element
@param className - The class name of the element to retrieve
@param tagName - Optional. The tag name of the element to retrieve
@returns 
*/
static getElementByClassName(element: HTMLElement, className: string, tagName: string): HTMLElement;
        /**
Returns the first child of element with the specified tagName, starting from index in the collection of child elements
@method
@param element - HTML DOM element whose children to search in
@param tagName - The tag name of the child element to search for
@param index - The index of the child element in the parent
@returns 
*/
static getFirstChildByTagName(element: HTMLElement, tagName: string, index: number): HTMLElement;
        /**
Returns the closest parent of element that has its display style set to "none", or null if no such parent is found
@method
@param element - HTML DOM element
@returns The first invisible parent HTML element
*/
static getInvisibleParent(element: HTMLElement): HTMLElement;
        /**
Returns the absolute location of element in the document
@method
@param element - The HTML DOM element whose position to retrieve
@returns A Point object contaning the location of the specified element
*/
static getLocation(element: HTMLElement): Sys.UI.Point;
        /**
Gets the margin thickness of an element on a specific boxSide.
@method
@param element - DOM element
@param boxSide - Side of the element
@returns Margin thickness on the element
*/
static getMargin(element: HTMLElement, boxSide: Telerik.Web.BoxSide): number;
        /**
Gets the entire margin box sizes.
@method
@param element - DOM element
@returns Element
*/
static getMarginBox(element: HTMLElement): any;
        /**
Gets the next non-text HTML sibling of element
@method
@param element - HTML DOM element whose previous sibling to retrieve
@returns 
*/
static getNextHtmlNode(element: HTMLElement): HTMLElement;
        /**
Returns the outer bounds of an HTML DOM element
@method
@param element - HTML DOM element
@returns An object containing the outer bounds of element
*/
static getOuterBounds(element: HTMLElement): Sys.UI.Bounds;
        /**
Returns the outer HTML text of an element (element's innerHTML and its own rendered HTML)
@method
@param element - The HTML DOM element whose outer HTML text to retrieve
@returns 
*/
static getOuterHtml(element: HTMLElement): string;
        /**
Returns the outer size of an HTML DOM element
@method
@param element - HTML DOM element
@returns An object containing width and height of element
*/
static getOuterSize(element: HTMLElement): any;
        /**
Gets the padding thickness of an element on a specific boxSide.
@method
@param element - DOM element
@param boxSide - Side of the element
@returns Padding on the element
*/
static getPadding(element: HTMLElement, boxSide: Telerik.Web.BoxSide): number;
        /**
Gets the entire padding box sizes.
@method
@param element - DOM element
@returns Element
*/
static getPaddingBox(element: HTMLElement): any;
        /**
Gets the previous non-text HTML sibling of element
@method
@param element - HTML DOM element whose previous sibling to retrieve
@returns 
*/
static getPreviousHtmlNode(element: HTMLElement): HTMLElement;
        /**
Returns the scroll ofset of element from its parent(s). If recursive, return the absolute scroll offset
@method
@param element - The HTML DOM element whose scroll offset to find
@param recursive - Indicates whether to retrieve the scroll ofset of the element recursively. If true
@returns 
*/
static getScrollOffset(element: HTMLElement, recursive: boolean): Sys.UI.Point;
        /**
Returns the closest scrollable parent element or null if no such is found.
@method
@param element - HTML DOM element
@returns 
*/
static getScrollableParent(element: HTMLElement): HTMLElement;
        /**
Returns an array of all scrollable parent elements or an empty array if Ð½Ð¾ such are found.
@method
@param element - HTML DOM element
@returns 
*/
static getScrollableParents(element: HTMLElement): any;
        /**
Gets the "border-box" size of an element.
@method
@param element - DOM element
@returns Size of the element
*/
static getSize(element: HTMLElement): any;
        /**
Returns the effective size of the client viewport as Object {width, height}
@method
@returns An Object
*/
static getViewPortSize(): any;
        /**
Returns true if element is visible, otherwise returns false
@method
@param element - HTML DOM element whose state to retrieve
@returns 
*/
static getVisible(element: HTMLElement): boolean;
        /**
Gets whether the current border style for an element on a specific boxSide is not "none".
@method
@param element - DOM element
@param boxSide - Side of the element
@returns Whether the current border style for an element on a specific boxSide is not
*/
static isBorderVisible(element: HTMLElement, boxSide: Telerik.Web.BoxSide): boolean;
        /**
Whether the specified element is a descendant of the ancestor
@method
@param ancestor - Ancestor node
@param descendant - Possible descendant node
@returns 
*/
static isDescendant(ancestor: HTMLElement, descendant: HTMLElement): void;
        /**
Whether the specified element is a descendant of the ancestor or the same as the ancestor
@method
@param ancestor - Ancestor node
@param descendant - Possible descendant node
@returns 
*/
static isDescendantOrSelf(ancestor: HTMLElement, descendant: HTMLElement): void;
        /**
Returns whether mouse is over element when event fires. See also isMouseOverElementEx
@method
@param element - HTML DOM element
@param e - The event object of the current DOM event
@returns 
*/
static isMouseOverElement(element: HTMLElement, e: Sys.UI.DomEvent): boolean;
        /**
Returns whether mouse is over element when event fires. This method is more sophisticated and it is recommend that you use it instead of isMouseOverElement, which exists for historical reasons.
@method
@param element - HTML DOM element
@param e - The event object of the current DOM event
@returns 
*/
static isMouseOverElementEx(element: HTMLElement, e: Sys.UI.DomEvent): boolean;
        /**
Returns true if element is in RTL direction, otherwise returns false
@method
@param element - HTML DOM element
@returns 
*/
static isRightToLeft(element: HTMLElement): boolean;
        /**
Merges the atributes of source to target. If under IE, the optional preserve specifies whether to preserve the identity of target  or to allow modification on merging
@method
@param oSource - Source HTML element
@param oTarget - Target HTML element
@param bPreserve - When in IE
@returns 
*/
static mergeElementAttributes(oSource: HTMLElement, oTarget: HTMLElement, bPreserve: boolean): void;
        /**
Parses a border-width string into a pixel size
@method
@param borderWidth - Type of border
@returns Number of pixels in the border
*/
static parseBorderWidth(borderWidth: string): number;
        /**
Parses a padding string into a pixel size
@method
@param padding - Padding to parse
@returns Number of pixels in the padding
*/
static parsePadding(padding: string): number;
        /**
Parses a unit string into a unit object
@method
@param value - Value to parse
@returns Parsed unit
*/
static parseUnit(value: string): any;
        /**
Registers all link style tags in element to the page. If no element is provided, all the link tags on page are registered
@method
@param element - HTML DOM element contaning the links
@returns 
*/
static registerSkins(element: HTMLElement): void;
        /**
Removes multiple css classes to a DomElement
@method
@param element - The element to modify
@param classNames - The class names to remove
@returns 
*/
static removeCssClasses(element: HTMLElement, classNames: any): void;
        /**
Removes the event handler from an element's event. Can be used when attaching events to HTML elements in IFRAMEs where ASP.NET AJAX's $addHandler and $removeHandler do not work
@method
@param element - The HTML DOM element to attach an event handler to
@param eventName - The name of the event to attach an event handler to
@param handler - The event handler function
@returns 
*/
static removeExternalHandler(element: HTMLElement, eventName: string, handler: Function): void;
        /**
Removes a DOM event handler from the DOM element that exposes the event. This member is static and can be invoked without creating an instance of the class. This is basically a copy of $removeHandler, but handles correctly IE proprietary events, such as "onpropertychange", in IE9.
@method
@param element - The element that exposes the event.
@param eventName - The name of the event.
@param handler - The event handler to remove.
@returns 
*/
static removeHandler(element: HTMLElement, eventName: string, handler: Function): void;
        /**
Repaints all children elements of an element or a control's container
@method
@param parent - 
@returns 
*/
static repaintChildren(parent: any): void;
        /**
Scrolls the parent scrollable container to element's position. An alternative flicker-free implementation to HTMLDomElement.scrollIntoView()
@method
@param element - HTML DOM element to scroll into view
@returns 
*/
static scrollIntoView(element: HTMLElement): void;
        /**
Sets the "border-box" bounds of an element
@method
@param element - DOM element
@param bounds - Bounds of the element
@returns 
*/
static setBounds(element: HTMLElement, bounds: any): void;
        /**
Sets the "content-box" size of an element.
@method
@param element - DOM element
@param size - Size of the element
@returns 
*/
static setContentSize(element: HTMLElement, size: any): void;
        /**
Sets the location (left, top) of element to point (x, y)
@method
@param element - The HTML DOM element whose location to set
@param point - The Point object contaning the position values
@returns 
*/
static setLocation(element: HTMLElement, point: Sys.UI.Point): void;
        /**
Sets the "border-box" size of an element.
@method
@param element - DOM element
@param size - Size of the element
@returns 
*/
static setSize(element: HTMLElement, size: any): void;
        /**
Set the visibility of an element
@method
@param element - The HTML DOM element whose visibility to set
@param value - A boolean value indicating whether the element should be hidden or made visible
@returns 
*/
static setVisible(element: HTMLElement, value: boolean): void;
        /**
A helper method that checks whether a DOM event handler should be added through addEventListener or through attachEvent, so that IE proprietary events, such as "onpropertychange", are handled correctly in IE9.
@method
@param element - The element that exposes the event.
@returns 
*/
static useAttachEvent(element: HTMLElement): void;
        /**
A helper method that checks whether a DOM event handler should be removed through removeEventListener or through detachEvent, so that IE proprietary events, such as "onpropertychange", are handled correctly in IE9.
@method
@param element - The element that exposes the event.
@returns 
*/
static useDetachEvent(element: HTMLElement): void;
    }


    class StringBuilder   {
        /**
Appends the specified value to the end of the current string value
@method
@param value - The value to append
@returns 
*/
append(value: string): Telerik.Web.StringBuilder;
        /**
Returns the internal string buffer
@method
@returns 
*/
get_buffer(): any;
        /**
Returns the current appended content as a single string
@method
@returns 
*/
toString(): string;
    }


    class Timer  extends Sys.Component {
        /**

@method
@returns Gets a value indicating whether this control is enabled
*/
get_enabled(): boolean;
        /**

@method
@returns Retrieves the interval between 2 tick events
*/
get_interval(): number;
        /**
Sets the enable state of the control
@method
@param value - True if control is enabled
@returns 
*/
set_enabled(value: boolean): void;
        /**
Sets the interval between 2 tick events
@method
@param value - The value of the interval
@returns 
*/
set_interval(value: number): void;
        /**
This method is called when Timer is updated after tick
@method
@returns 
*/
updated(): void;
        /**
Adds a tick event handler for the timer
*/
add_tick(handler: Function): void;
        /**
Removes a tick event handler from the timer
*/
remove_tick(handler: Function): void;
    }


}
declare module Telerik.Web.UI.DateParsing {
    class DateTimeFormatInfo   {
        /**

@method
@returns 
*/
FormatDate(): void;
        /**

@method
@returns 
*/
LeadZero(): void;
    }


}
declare module Telerik.Web.UI.Calendar {
    class DateTimeFormatInfo   {
        /**

@method
@returns 
*/
FormatDate(): void;
        /**

@method
@returns 
*/
LeadZero(): void;
    }


    class MonthYearFastNavigation   {
        /**
Add cell for the specified month.
@method
@param row - The TR element to wchich the cell will be added.
@param monthIndex - The index of the month in which the cell will be added.
@returns 
*/
AddMonthCell(row: HTMLElement, monthIndex: number): void;
        /**
Creates a button with specified elementId, text, onClick event handler and append it to the parentNode element.
@method
@param elementId - The ID to be used for the input.
@param parentNode - The parent element to which the input will be attached.
@param text - The text that will be set as a value to the input element.
@param onclickFunc - The event handler for the OnClick function.
@returns 
*/
CreateButton(elementId: string, parentNode: HTMLElement, text: string, onclickFunc: Function): void;
        /**
Creates the base layout for RadCalendar.
@method
@param style - The style to be used for the table.
@returns 
*/
CreateLayout(style: string): void;
        /**
Fill the available years in the fast navigation section.
@method
@returns 
*/
FillYears(): void;
        /**
Returns the current month.
@method
@returns DateTime object that represents the current month.
*/
GetMonth(): Date;
        /**
Returns the current year.
@method
@returns DateTime object that represents the current year.
*/
GetYear(): Date;
        /**
Scrolls to the specified year.
@method
@param step - How many years should be added to the current one.
@returns 
*/
ScrollYears(step: number): void;
        /**
Selects or deselects the specified cell.
@method
@param cell - The element to be selected
@param selected - Boolean value to indicate whether the cell should be selected or not.
@returns 
*/
SelectCell(cell: HTMLElement, selected: boolean): void;
        /**
Selects the specified month.
@method
@param month - The month to be selected.
@returns 
*/
SelectMonth(month: Date): void;
        /**
Selects the specified year.
@method
@param year - 
@returns 
*/
SelectYear(year: Date): void;
        /**
set the navigation cells.
@method
@returns 
*/
SetNavCells(): void;
        /**
Shows the pop up window.
@method
@param popup - The window that will hold the content of the pop up.
@param x - The X coordinate of the window.
@param y - The Y coordinate of the window.
@param month - 
@param year - The year to be displayed.
@param exitFunc - Function that should be executed on exit.
@param style - String containing the style attributes that will be applied to the table element.
@returns 
*/
Show(popup: any, x: number, y: number, month: Date, year: Date, exitFunc: Function, style: string): void;
        /**
Displays the month-year view.
@method
@param popup - The window that will hold the content of the pop up.
@param x - The X coordinate of the window.
@param y - The Y coordinate of the window.
@param month - The month to be displayed.
@param year - The year to be displayed.
@param exitFunc - Function that should be executed on exit.
@param style - String containing the style attributes that will be applied to the table element.
@param ownerId - The ID fo of the wrapper element.
@returns 
*/
ShowMonthYearView(popup: any, x: number, y: number, month: Date, year: Date, exitFunc: Function, style: string, ownerId: string): void;
    }


    class RenderDay   {
        /**
Indicates the recurrence patterns that include the day. The value is one of the following: 1: DayInMonth, 2: DayAndMonth, 4: Week, 8: WeekAndMonth, 16: Today, 32: None
@method
@param compareDate - 
@param calendarView - 
@returns 
*/
IsRecurring(compareDate: any, calendarView: number): void;
        /**
Returns the triplet for the day represented by the render day object.
@method
@returns 
*/
get_date(): any;
        /**
Returns true if the day can be selected.
@method
@returns 
*/
get_isSelectable(): boolean;
        /**
returns true if the day is selected.
@method
@returns 
*/
get_isSelected(): boolean;
        /**
Returns true if the day has today's date
@method
@returns 
*/
get_isToday(): boolean;
        /**
Returns true if the day falls on a weekend.
@method
@returns 
*/
get_isWeekend(): boolean;
        /**
Sets the date of the render day object to the date encoded by the triplet.
@method
@param value - 
@returns 
*/
set_date(value: any): void;
    }


}
declare module Telerik.Web.UI.Editor {
    class DefaultToolAdapter  extends Sys.UI.Control {
        /**
Returns the animation duration in milliseconds.
@method
@returns 
*/
get_animationDuration(): number;
        /**
Sets the animation duration in milliseconds.
@method
@param value - 
@returns 
*/
set_animationDuration(value: number): void;
        /**
Sets the animation type.
@method
@param value - Instance of Telerik.Web.UI.Editor.EditorToolBarAnimationType enum.
@returns 
*/
set_animationType(value: Telerik.Web.UI.Editor.EditorToolBarAnimationType): void;
        /**
Gets the animation type.
@method
@returns Instance of Telerik.Web.UI.Editor.EditorToolBarAnimationType enum that represents the animation type.
*/
get_animationType(): Telerik.Web.UI.Editor.EditorToolBarAnimationType;
    }


    class Filter  extends Sys.UI.Control {
        /**
Fires when RadEditor's mode is changed to Design View Mode
@method
@param content - The content area
@returns The content parameter modified by the filter
*/
getDesignContent(content: any): any;
        /**
Fires when RadEditor's mode is changed to HTML View Mode
@method
@param content - The content area
@returns The content parameter modified by the filter
*/
getHtmlContent(content: string): string;
        /**
Returns the filter's description
@method
@returns The filter
*/
get_description(): string;
        /**
Specifies whether the filter is enabled or disabled
@method
@returns 
*/
get_enabled(): boolean;
        /**
Specifies whether the filter is of DOM or String type
@method
@returns 
*/
get_isDom(): boolean;
        /**
Returns the filter's name
@method
@returns The name of the filter
*/
get_name(): string;
        /**
Sets the filter's description
@method
@param value - The description to set to the filter
@returns 
*/
set_description(value: string): void;
        /**
Enables/Disables the filter
@method
@param value - Boolean value whether to enable or disable the filter
@returns 
*/
set_enabled(value: boolean): void;
        /**
Specifies whether the filter is DOM or String
@method
@param value - Boolean value whether the filter is DOM or String
@returns 
*/
set_isDom(value: boolean): void;
        /**
Sets the filter's name
@method
@param value - The name of the filter to be set
@returns 
*/
set_name(value: string): void;
    }


    class FiltersManager  extends Sys.UI.Control {
        /**
Add a content filter to the filters collection
@method
@param filter - Instance of a Filter Object
@returns 
*/
add(filter: Telerik.Web.UI.Editor.Filter): void;
        /**
Add a content filter to the filters collection at index
@method
@param filter - Instance of a Filter Object
@param index - The index location where item should be inserted
@returns 
*/
addAt(filter: Telerik.Web.UI.Editor.Filter, index: number): void;
        /**
Clears the content filters collection
@method
@returns 
*/
clear(): void;
        /**
Fires when RadEditor's mode is changed to Design View Mode and executes all the String based content filters
@method
@param contentAreaHtml - The RadEditor
@returns The contentAreaHtml parameter modified by the filter
*/
getDesignContent(contentAreaHtml: string): string;
        /**
Fires when RadEditor's mode is changed to Design View Mode after getDesignContent() - executes all the DOM based content filters
@method
@param contentArea - The content area DOM element
@returns The contentArea parameter modified by the filter
*/
getDesignContentDom(contentArea: any): any;
        /**
Returns the content filter from the given Index
@method
@param index - The index location of the filter in the FiltersCollection
@returns 
*/
getFilterAt(index: number): Telerik.Web.UI.Editor.Filter;
        /**
Returns the content filter by name
@method
@param name - Name of the filter
@returns 
*/
getFilterByName(name: string): Telerik.Web.UI.Editor.Filter;
        /**
Fires when RadEditor's mode is changed to HTML View Mode
@method
@param contentAreaElement - The content area DOM element
@returns The contentAreaElement parameter modified by the filter
*/
getHtmlContent(contentAreaElement: any): any;
        /**
Returns a boolean value which indicates whether the XHTML filter is enabled or disabled
@method
@returns 
*/
get_enableXhtmlFilter(): boolean;
        /**
Remove content filter from the filters collection
@method
@param filter - Instance of a Filter Object
@returns 
*/
remove(filter: Telerik.Web.UI.Editor.Filter): void;
        /**
Removes a content filter from the filters collection by index
@method
@param index - The index location of the filter in the FiltersCollection
@returns 
*/
removeAt(index: number): void;
        /**
Sets the state of XHTML filter
@method
@param value - Boolean value to enable
@returns 
*/
set_enableXhtmlFilter(value: boolean): void;
    }


    class Selection  extends Sys.UI.Control {
        /**
Collapses a selection to the starting or ending position.
@method
@param toStart - The direction in which to collapse the selection. If true the selection will collapse from end to start.
@returns 
*/
collapse(toStart: boolean): void;
        /**
Returns the browser's Selection object
@method
@returns 
*/
getBrowserSelection(): any;
        /**
Returns the selection's content as HTML
@method
@returns 
*/
getHtml(): string;
        /**
Returns a reference to the selection's parent DOM element
@method
@returns 
*/
getParentElement(): any;
        /**
Returns a reference to a range object
@method
@returns 
*/
getRange(): any;
        /**
Returns the selection's content as plain text
@method
@returns 
*/
getText(): string;
        /**
Specifies whether the current selection is a control or not.
@method
@returns 
*/
isControl(): void;
        /**
Pastes string at current selection
@method
@param htmlString - String to be pasted
@param bSelContent - Specifies whether to select pasted content after execution
@returns 
*/
pasteHtml(htmlString: string, bSelContent: boolean): void;
        /**
Adds an element to current selection
@method
@param oElement - DOM element to be added
@returns 
*/
selectElement(oElement: any): void;
        /**
Selects the previously stored range
@method
@param range - 
@returns 
*/
selectRange(range: any): void;
    }


}
declare module Telerik.Web.UI.ImageEditor {
    class EditableCanvas  extends Telerik.Web.UI.ImageEditor.EditableImageBase {
        /**
Ensures that the Zoom level is applied to the image
@method
@returns 
*/
forceCurrentZoom(): void;
        /**
Gets the current opacity of the editable canvas.
@method
@returns The opacity value of the editable canvas. Range
*/
get_opacity(): number;
        /**
Saves the image on the client machine.
@method
@param fileName - The filename of the image. If file name is not a string
@returns 
*/
saveOnClient(fileName: any): void;
        /**
Returns the Base64 representation of the loaded image.
@method
@param mimeType - The currently supported types are Image
@returns The string that represents the encoded graphical data.
*/
getBase64(mimeType: string): string;
        /**
Changes the opacity of the image.
@method
@param opacity - The new value of the opacity.
@param imgOperation - The image operation object handling the actual editing of the image.
@returns 
*/
changeOpacity(opacity: number, imgOperation: any): void;
        /**
Initiates an ASP.NET client callback to the server and raises the ImageEditing server side event. The EditableImage can be retrieved from the event arguments, and edited accordingly.
@method
@param commandName - The command name that will be passed to the server and respective client events. It should be unique.
@param commandText - The command text that will be used to record the operation in the Undo
@param commandArgument - The additional command argument that will be passed to the server. By default empty string is passed.
@param callbackFunction - The function that will be called after response is received from the server. Two parameters are sent to this function
@returns 
*/
doServerOperation(commandName: string, commandText: string, commandArgument: string, callbackFunction: Function): void;
        /**
Executes the provided filter against the current editable image.
@method
@param filter - The filter to be executed.
@returns 
*/
executeFilter(filter: Telerik.Web.UI.ImageEditor.Filters.IPixelFilter): void;
        /**
Adds text to the image in the specified position
@method
@param x - The X coordinate of the text
@param y - The Y coordinate of the text
@param text - The text to add to the image.
@returns 
*/
addText(x: number, y: number, text: Telerik.Web.UI.ImageEditor.ImageText): void;
        /**
Gets the rotation angle of the editable canvas.
@method
@returns The value in degrees of the image rotation.
*/
get_rotationAngle(): number;
        /**
Gets the current width of the canvas. Note that value may be different that the width of the image DOM element, for example, when zoomed.
@method
@returns The width of the editable image
*/
get_width(): number;
        /**
Gets a flag whether the image is loaded.
@method
@returns Is the image loaded flag.
*/
isImageLoaded(): boolean;
        /**
Returns an ImageData object containing the image data for the given rectangle of the bitmap.
@method
@returns The ImageData object.
*/
getImageDataAll(): any;
        /**
Returns a URL which could be used to visualize the image directly. The image is represented in Base64 format.
@method
@param mimeType - The currently supported types are Image
@returns The string that represents an encoded URL containing the graphical data.
*/
getDataUrl(mimeType: string): string;
        /**
Flips the image in the specified direction.
@method
@param flipDirection - The direction of flipping.
@param clearPrevFlipDirection - True
@param imgOperation - The image operation object handling the actual editing of the image.
@returns 
*/
flip(flipDirection: Telerik.Web.UI.ImageEditor.FlipDirection, clearPrevFlipDirection: boolean, imgOperation: any): void;
        /**
Gets the flip direction of the editable canvas.
@method
@returns Enum value of the flip direction
*/
get_flipDirection(): Telerik.Web.UI.ImageEditor.FlipDirection;
        /**
Inserts image (clip art) into the editable image at the specified position
@method
@param x - The X coordinate of the image
@param y - The Y coordinate of the image
@param value - The client URL of the image to insert.
@param operationsToApply - Array of operations to apply to the clip art image
@returns 
*/
insertImage(x: number, y: number, value: string, operationsToApply: any): void;
        /**
Rotates the image in the specified direction.
@method
@param rotationDirection - Enum to determine the angle value. Only orthogonal values
@param angle - The rotation angle.
@param imgOperation - The image operation object handling the actual editing of the image.
@returns 
*/
rotate(rotationDirection: Telerik.Web.UI.ImageEditor.Rotation, angle: number, imgOperation: any): void;
        /**
Sets the flip direction to the editable canvas.
@method
@param flipDirection - The direction of flipping.
@returns 
*/
set_flipDirection(flipDirection: Telerik.Web.UI.ImageEditor.FlipDirection): void;
        /**
Gets the element, onto which the editing will be done.
@method
@returns The respective DOM element. Could be an image or a canvas tag
*/
getCanvas(): any;
        /**
Resets the changes to the current image and reverts it to the original one
@method
@param imageUrl - The original image url.
@returns 
*/
reset(imageUrl: any): void;
        /**
Gets a flag whether the image is loading
@method
@param image - The image to be edited.
@returns Is the image loading flag
*/
isImageLoading(image: any): boolean;
        /**
Crops the image to the given rectangle.
@method
@param rectangle - The rectangle defined by coordinates and dimensions to crop.
@returns 
*/
crop(rectangle: any): void;
        /**
Gets the current height of the canvas. Note that value may be different that the height of the image DOM element, for example, when zoomed.
@method
@returns The height of the editable image
*/
get_height(): number;
        /**
Returns the 2d Context of the canvas element.
@method
@returns The 2d canvas context.
*/
getCanvasContext(): any;
        /**
Gets the rotation enum value of the editable canvas.
@method
@returns Enum value of the rotation.
*/
get_rotation(): Telerik.Web.UI.ImageEditor.Rotation;
        /**
Resizes the image.
@method
@param width - The new width of the image.
@param height - The new height of the image.
@param imgOperation - The image operation object handling the actual editing of the image.
@returns 
*/
resize(width: number, height: number, imgOperation: any): void;
        /**
Initiates a callback to the server and performs operations (saving image, cropping and etc.) to the image on the server.
@method
@param saveImageServer - True
@param fileName - The filename of the image. If null then the original filename is used. If file name is not a string
@param call_saveOnClient - True
@param overwrite - True
@returns 
*/
applyChangesOnServer(saveImageServer: boolean, fileName: any, call_saveOnClient: boolean, overwrite: boolean): void;
        /**
Zooms(scales) the image by the specified level in percents. This operation does not change the image
@method
@param zoomLevel - The level
@param forceZoom - Bool value indicating whether the zoom should be performed even if the current zoom level is the same.
@returns 
*/
zoom(zoomLevel: number, forceZoom: boolean): void;
        /**
Creates an image operation which is applied against the current editable image and adds the operation to the undo stack.
@method
@param filter - The filter to be applied.
@param imgOperation - The image operation object handling the actual editing of the image.
@returns 
*/
applyFilter(filter: Telerik.Web.UI.ImageEditor.Filters.IPixelFilter, imgOperation: any): void;
    }


    class EditableImage   {
        /**
Gets the current opacity of the editable image
@method
@returns 
*/
get_opacity(): any;
        /**
Flips the image in specified direction
@method
@param flipDirection - The direction of flipping
@param clearPrevFlipDirection - Flag whether the previously set flip direction should be taken under consideration
@returns 
*/
static flip(flipDirection: Telerik.Web.UI.ImageEditor.FlipDirection, clearPrevFlipDirection: boolean): void;
        /**
Gets the src of the edited image
@method
@returns 
*/
get_url(): any;
        /**
Changes the opacity of the image
@method
@param opacity - The opacity value. It must be in the
@returns 
*/
static changeOpacity(opacity: number): void;
        /**
Sets the src of the original image
@method
@param value - The Url to sustitude the src of the original image
@returns 
*/
static set_serverUrl(value: string): void;
        /**
Resizes the image according to the specified dimensions
@method
@param width - The width of the image in pixels
@param height - The height of the image in pixels
@returns 
*/
static resize(width: number, height: number): void;
        /**
Resizes the image according to the specified dimensions
@method
@param width - 
@param height - 
@returns 
*/
resize(width: any, height: any): any;
        /**
Gets the current zoom level of the image
@method
@returns 
*/
get_zoomLevel(): any;
        /**
Sets the src of the original image
@method
@param value - 
@returns 
*/
set_serverUrl(value: any): any;
        /**
Gets the rotation angel of the editable image.
@method
@returns The value in degrees of the image rotation
*/
static get_rotationAngle(): number;
        /**
Gets the rotation enum value of the editable image.
@method
@returns Enum value of the rotation
*/
static get_rotation(): Telerik.Web.UI.ImageEditor.Rotation;
        /**
Initiates an ASP.NET client callback to the server and raises the ImageEditing server side event. The EditableImage can be retrieved from the event arguments, and edited accordingly.
@method
@param commandName - The command name that will be passed to the server and respective client events. It should be unique.
@param commandText - The command text that will be used to record the operation in the Undo
@param commandArgument - The additional command argument that will be passed to the server. By default empty string is passed.
@param callbackFunction - The function that will be called after response is received from the server. Two parameters are sent to this function
@returns 
*/
static doServerOperation(commandName: string, commandText: string, commandArgument: string, callbackFunction: Function): void;
        /**
Gets the src of the edited image
@method
@returns The Url value of the image
*/
static get_url(): string;
        /**
Initiates a callback to the server and performs operations (saving image, cropping and etc.) to the image on the server.
@method
@param saveImageServer - True
@param fileName - The filename of the image. If null then the original filename is used. If file name is not a string
@param call_saveOnClient - True
@param overwrite - True
@returns 
*/
static applyChangesOnServer(saveImageServer: boolean, fileName: any, call_saveOnClient: boolean, overwrite: boolean): void;
        /**
Zooms(scales) the image by the specified level in percentages. This operation does not change the image
@method
@param zoomLevel - 
@param forceZoom - 
@returns 
*/
zoom(zoomLevel: any, forceZoom: any): any;
        /**
Inserts image (clip art) into the editable image at the specified position
@method
@param x - 
@param y - 
@param imgSrc - 
@param operations - 
@returns 
*/
insertImage(x: any, y: any, imgSrc: any, operations: any): any;
        /**
Crops the image by the specified rectangular bounds
@method
@param rectangle - The rectangle
@returns 
*/
static crop(rectangle: Sys.UI.Bounds): void;
        /**
Resets the image to the provided image src
@method
@param imageUrl - 
@returns 
*/
reset(imageUrl: any): any;
        /**
Gets the current width of the image. Note that value may be different that the width of the image DOM element, for example, when zoomed
@method
@returns The width of the editable image
*/
static get_width(): number;
        /**
Invokes the download of the edited image to the client's machine
@method
@param fileName - 
@returns 
*/
saveOnClient(fileName: any): any;
        /**
Get the image being edited
@method
@returns 
*/
getImage(): any;
        /**
Crops the image by the specified rectangular bounds
@method
@param rectangle - 
@returns 
*/
crop(rectangle: any): any;
        /**
Gets the current height of the image. Note that value may be different that the height of the image DOM element (e.g. when zoomed)
@method
@returns 
*/
get_height(): any;
        /**
Gets the current zoom level of the image
@method
@returns The current zoom level
*/
static get_zoomLevel(): number;
        /**
Gets the rotation object value of the editable image
@method
@returns 
*/
get_rotation(): any;
        /**
Gets the flip direction of the editable image.
@method
@returns Enum value of the flip direction
*/
static get_flipDirection(): Telerik.Web.UI.ImageEditor.FlipDirection;
        /**

@method
@param zoomLevel - 
@param forceZoom - 
@returns 
*/
static zoom(zoomLevel: number, forceZoom: boolean): void;
        /**
Zooms the image to best fit in the viewport
@method
@param width - A custom width limitation
@param height - A custom height limitation
@returns 
*/
static zoomBestFit(width: number, height: number): void;
        /**
Gets the src of the original image, i.e. before the server operations
@method
@returns The Url of the original image
*/
static get_serverUrl(): string;
        /**
Rotates the image according to the rotation direction specified
@method
@param rotationDirection - Enum to determine the angle value. Only orthogonal values
@returns 
*/
static rotate(rotationDirection: Telerik.Web.UI.ImageEditor.Rotation): void;
        /**
The wrapper class for editing images.
@method
@param image - The image to be edited
@param xmlHttpPanel - The XmlHttpPanel to handle the server related editing operations
@returns 
*/
static Telerik(image: any, xmlHttpPanel: Telerik.Web.UI.RadXmlHttpPanel): void;
        /**
Zooms the image to best fit in the viewport
@method
@param width - 
@param height - 
@returns 
*/
zoomBestFit(width: any, height: any): any;
        /**
Gets the current opacity of the editable image
@method
@returns The opacity value of the editable image. Range
*/
static get_opacity(): number;
        /**
Initiates an ASP.NET client callback to the server and raises the ImageEditing server side event
@method
@param commandName - 
@param commandText - 
@param commandArgument - 
@param callbackFunction - 
@returns 
*/
doServerOperation(commandName: any, commandText: any, commandArgument: any, callbackFunction: any): any;
        /**
Inserts image (clip art) into the editable image at the specified position
@method
@param x - The X coordinate of the image
@param y - The Y coordinate of the image
@param imgSrc - The client URL of the image to insert.
@param operations - Array of operations to apply to the clip art image
@returns 
*/
static insertImage(x: number, y: number, imgSrc: string, operations: any): void;
        /**
Gets the src of the original image, i.e. before the server operations
@method
@returns 
*/
get_serverUrl(): any;
        /**
Gets the rotation angel of the editable image
@method
@returns 
*/
get_rotationAngle(): any;
        /**
Gets the current width of the image. Note that value may be different that the width of the image DOM element (e.g when zoomed)
@method
@returns 
*/
get_width(): any;
        /**
Flips the image in specified direction
@method
@param flipDirection - 
@param clearPrevFlipDirection - 
@returns 
*/
flip(flipDirection: any, clearPrevFlipDirection: any): any;
        /**
Gets the flip direction of the editable image
@method
@returns 
*/
get_flipDirection(): any;
        /**
Rotates the image according to the rotation direction specified
@method
@param rotationDirection - 
@returns 
*/
rotate(rotationDirection: any): any;
        /**
Get the image being edited
@method
@returns A reference to the image DOM element
*/
static getImage(): any;
        /**
Changes the opacity of the image
@method
@param opacity - 
@returns 
*/
changeOpacity(opacity: any): any;
        /**
Invokes the download of the edited image to the client's machine
@method
@param fileName - The name of the file
@returns 
*/
static saveOnClient(fileName: any): void;
        /**
Gets the current height of the image. Note that value may be different that the height of the image DOM element, for example, when zoomed
@method
@returns The height of the editable image
*/
static get_height(): number;
        /**
Add text to the image
@method
@param x - The left
@param y - The top
@param text - The text to add to the image
@returns 
*/
static addText(x: number, y: number, text: Telerik.Web.UI.ImageEditor.ImageText): void;
        /**
Resets the image to the provided image src
@method
@param imageUrl - The src of the image
@returns 
*/
static reset(imageUrl: string): void;
        /**
Remove a previously registered event handler
*/
remove_imageReload(handler: Function): void;
    }


    class EditableImageBase  extends Sys.Component {
        /**

@method
@returns 
*/
getCanvasContext(): void;
        /**

@method
@returns 
*/
getCanvasElement(): void;
        /**

@method
@returns 
*/
getImage(): void;
        /**

@method
@returns 
*/
getImageEditor(): void;
        /**

@method
@returns 
*/
getXmlHttpPanel(): void;
        /**
Gets the current flip direction of the EditableImage.
@method
@returns 
*/
get_flipDirection(): void;
        /**
Gets the height of the EditableImage.
@method
@returns 
*/
get_height(): void;
        /**

@method
@returns 
*/
get_imageKey(): void;
        /**
Gets the opacity of the EditableImage.
@method
@returns 
*/
get_opacity(): void;
        /**
Gets the current rotation angle of the EditableImage.
@method
@returns 
*/
get_rotationAngle(): void;
        /**

@method
@returns 
*/
get_serverUrl(): void;
        /**

@method
@returns 
*/
get_url(): void;
        /**
Gets the width of the EditableImage.
@method
@returns 
*/
get_width(): void;
        /**

@method
@returns 
*/
get_zoomLevel(): void;
        /**

@method
@returns 
*/
isImageLoaded(): void;
        /**

@method
@returns 
*/
raiseEvent(): void;
        /**
Sets the current flip direction of the EditableImage.
@method
@param value - The direction of flipping.
@returns 
*/
set_flipDirection(value: Telerik.Web.UI.ImageEditor.FlipDirection): void;
        /**

@method
@returns 
*/
set_imageKey(): void;
        /**

@method
@returns 
*/
set_serverUrl(): void;
        /**

@method
@returns 
*/
zoomBestFit(): void;
    }


    class ImageText   {
        /**
Gets the color of the text to draw
@method
@returns A color value in hex
*/
get_color(): string;
        /**
Gets the font family of the text to draw
@method
@returns The name of the font family
*/
get_fontFamily(): string;
        /**
Gets the font size of the text to draw
@method
@returns The size of the font in pixels
*/
get_fontSize(): number;
        /**
Gets value of the text to draw
@method
@returns The value of the text as a string
*/
get_text(): string;
        /**
Sets the color of the text to draw
@method
@param value - A color value in hex
@returns 
*/
set_color(value: string): void;
        /**
Sets the font family of the text to draw
@method
@param value - The name of the font family
@returns 
*/
set_fontFamily(value: string): void;
        /**
Sets the font size of the text to draw
@method
@param value - The size of the font in pixels
@returns 
*/
set_fontSize(value: number): void;
        /**
Sets the value of the text to draw
@method
@param value - The value of the text as a string
@returns 
*/
set_text(value: string): void;
    }


    class ToolWidget   {
        /**

@method
@returns 
*/
checkValue(): void;
        /**

@method
@returns 
*/
close(): void;
        /**

@method
@returns 
*/
decrementValue(): void;
        /**

@method
@returns 
*/
get_image(): void;
        /**

@method
@returns 
*/
get_imageEditor(): void;
        /**

@method
@returns 
*/
get_parentId(): void;
        /**

@method
@returns 
*/
get_text(): void;
        /**

@method
@returns 
*/
incrementValue(): void;
        /**

@method
@returns 
*/
isBackspaceOrDelete(): void;
        /**

@method
@returns 
*/
isNumeric(): void;
        /**

@method
@returns 
*/
onClose(): void;
        /**

@method
@returns 
*/
onOpen(): void;
        /**

@method
@returns 
*/
restrictInputValue(): void;
        /**

@method
@returns 
*/
set_imageEditor(): void;
    }


}
declare module Telerik.Web.UI.Editor {
    enum EditorToolBarAnimationType {
         None = 0,
         Fade = 2
    }
}
declare module Telerik.Web.UI.FileExplorer {
    class FileDataItem   {
    }


    class FileList  extends Sys.Component {
        /**
Attach/detach the event handlers
@method
@param toAttach - 
@returns 
*/
attachEventHandlers(toAttach: boolean): void;
        /**
Shortcut method for set_dataSource(data); dataBind().
@method
@param data - The array of elements to bind to
@returns 
*/
bindToData(data: any): void;
        /**
Bind the data to the underlying bindable control
@method
@param serverData - The data provided by the server callback or from cached location. Should follow the format of the Telerik.Web.UI.FileExplorer.ServerData
@param pageIndex - The page
@returns 
*/
bindToServerData(serverData: any, pageIndex: number): void;
        /**
Chooses the view with the specified name. The view is displayed and the currently displayed one is hidden
@method
@param name - The name of the view to display.
@returns 
*/
chooseFileListView(name: string): void;
        /**
Clears the filtering by reseting the filter and clearing the filter text box
@method
@returns 
*/
clearFilter(): void;
        /**
Clears the caching of the specified folder, forcing a reload the next time this folder's content is loaded
@method
@param path - The path to the folder
@returns 
*/
clearFolderCache(path: string): void;
        /**
Clear any item selection in the file list
@method
@returns 
*/
clearSelection(): void;
        /**
Filter the file list on the client only. Note that only the items displayed items will be filtered, i.e. paged content will filter only the current page
@method
@param keyWord - Filter keyword
@returns 
*/
clientFilter(keyWord: string): void;
        /**
Bind the already provided data(use set_dataSource(data)) to the underlying bindable control
@method
@returns 
*/
dataBind(): void;
        /**
Filter the file list by the provided keyword. This method does not raise a filter event
@method
@param keyWord - Filter keyword
@returns 
*/
doFiltering(keyWord: string): void;
        /**
Filter the file list by the provided keyword. This method raises a filter event
@method
@param keyWord - Filter keyword
@returns 
*/
filterList(keyWord: string): void;
        /**
Find a file by its name
@method
@param fileName - Name of a file
@returns Searched Item
*/
findFileByName(fileName: string): Telerik.Web.UI.FileExplorer.FileDataItem;
        /**
Find a file by its path
@method
@param path - Path to a file
@returns Searched Item
*/
findFileByPath(path: string): Telerik.Web.UI.FileExplorer.FileDataItem;
        /**
Focus the underlying control's DOM element
@method
@returns 
*/
focus(): void;
        /**
Focus the paging control of the file list
@method
@returns 
*/
focusPagerControl(): void;
        /**
Get the selected files(Telerik.Web.UI.FileExplorerItem) from the file list
@method
@returns Selected files
*/
getSelectedFiles(): any;
        /**
Get a reference to the context menu that is utilized by the file list
@method
@returns 
*/
get_contextMenu(): Telerik.Web.UI.RadMenu;
        /**
Get a reference to the underlying file list view
@method
@returns 
*/
get_control(): Telerik.Web.UI.FileExplorer.IFileListView;
        /**
Get the data source provided to the control
@method
@returns The data object provided to the control
*/
get_dataSource(): any;
        /**
Gets the DOM element, where the file list resides.
@method
@returns The DOM element of the underlying control
*/
get_element(): HTMLElement;
        /**
Get a reference to the RadFileExplorer that used this instance of FileList
@method
@returns 
*/
get_fileExplorer(): Telerik.Web.UI.RadFileExplorer;
        /**
Gets a reference to the filter text box DOM element that resides in the current file list view
@method
@param view - The view where to look for the filter text box. If the view is not provided
@returns The input element of the filter text box
*/
get_filterTextBox(view: Telerik.Web.UI.FileExplorer.IFileListView): any;
        /**
Get a reference to the grid control that displays the list of files if such is being used to display the items
@method
@returns The RadGrid managing the file list
*/
get_grid(): Telerik.Web.UI.RadGrid;
        /**
Get the items displayed in the file list.
@method
@returns All items array
*/
get_items(): any;
        /**
Get a reference to the list view control that displays the list of files if such is being used to display the items
@method
@returns The RadListView managing the file list
*/
get_listView(): Telerik.Web.UI.RadListView;
        /**
Get the page size as maximum number of items per page
@method
@returns The page size
*/
get_pageSize(): number;
        /**
Get the first selected item from the file list
@method
@returns Selected item
*/
get_selectedItem(): Telerik.Web.UI.FileExplorer.FileDataItem;
        /**
Get the selected items from the file list
@method
@returns Selected items array
*/
get_selectedItems(): any;
        /**
Get a reference to the underlying file list view
@method
@returns 
*/
get_view(): Telerik.Web.UI.FileExplorer.IFileListView;
        /**
Open the corresponding file item. If directory, the explorer navigates to it and displays its content
@method
@param item - The item to open. Can be either Telerik.Web.UI.FileExlorerItem
@returns 
*/
open(item: Telerik.Web.UI.FileExplorerItem): void;
        /**
Force a server call to collect the content of the folder
@method
@param folderPath - The path to the folder
@returns 
*/
refreshFileList(folderPath: string): void;
        /**
Registers a view in the file list container. This is the way to make it available later as an chosen/active file list view
@method
@param view - The view to be registered for use. Can be chosen later by name.
@returns 
*/
registerFileListView(view: Telerik.Web.UI.FileExplorer.IFileListView): void;
        /**
Try to select a default item from the file list. Usually this is the first item, or none if list is empty
@method
@returns 
*/
selectDefaultFile(): void;
        /**
Select an item from the file list
@method
@param file - The file could be either Telerik.Web.UI.FileDataItem
@returns 
*/
selectFile(file: Telerik.Web.UI.FileExplorer.FileDataItem): void;
        /**
Select a file item from the file list by the provided name
@method
@param fileName - The name of the file to select
@returns 
*/
selectFileByName(fileName: string): void;
        /**
Select a list of files by their names
@method
@param fileNames - An array of file names to select
@returns 
*/
selectFileList(fileNames: any): void;
        /**
Force the server to do the filtering.
@method
@param keyWord - Filter keyword
@returns 
*/
serverFilter(keyWord: string): void;
        /**
Set the data needed for the data bindable control
@method
@param data - Sets the data for the underlying data bindable control
@returns 
*/
set_dataSource(data: any): void;
        /**
Set the size of the page, i.e. the maximum number of items per page
@method
@param value - New page size
@returns 
*/
set_pageSize(value: number): void;
        /**
Show the content of a folder. This method takes advantage of a cached folder content, if the folder has already been loaded
@method
@param folderPath - The path to the folder
@returns 
*/
showFolderFileList(folderPath: string): void;
        /**
Show the content of a particular page
@method
@param startIndex - The index
@param pageSize - A custom page size. Default behavior is to use the page size of the file list
@returns 
*/
showPageContent(startIndex: number, pageSize: number): void;
        /**
Sort the file list
@method
@param sortExpression - Sorting expression. E.g.
@returns 
*/
sort(sortExpression: string): void;
    }


    class FileListItemCancelableEventArgs  extends Sys.CancelEventArgs {
        /**
Getter for the item, for which the event has been raised
@method
@returns An object resembling the Telerik.Web.UI.FileExplorer.FileDataItem
*/
get_item(): any;
    }


    class FileListItemEventArgs  extends Sys.EventArgs {
        /**
Getter for the item, for which the event has been raised
@method
@returns An object resembling the Telerik.Web.UI.FileExplorer.FileDataItem
*/
get_item(): any;
    }


    class FileListItemsCancelableEventArgs  extends Sys.CancelEventArgs {
        /**
Getter for the DOM event associated with the custom event
@method
@returns DOM event
*/
get_domEvent(): Sys.UI.DomEvent;
        /**
Getter for the items, for which the event has been raised
@method
@returns An array of items resembling the Telerik.Web.UI.FileExplorer.FileDataItem
*/
get_items(): any;
    }


    class FileListPageEventArgs  extends Sys.EventArgs {
        /**
Getter for size of the page
@method
@returns The size of the page
*/
get_pageSize(): number;
        /**
Getter for index, from which the page starts
@method
@returns The index
*/
get_startIndex(): number;
    }


    class FileListSortEventArgs  extends Sys.EventArgs {
        /**
Gets the sorting expression used in the sorting event
@method
@returns 
*/
get_sortExpression(): void;
    }


    class FilePathEventArgs  extends Sys.EventArgs {
        /**
Getter for the path
@method
@returns The file system path
*/
get_path(): string;
    }


    class IFileListView   {
        /**
Attach/detach the event handlers
@method
@param toAttach - 
@returns 
*/
attachEventHandlers(toAttach: boolean): void;
        /**
Bind the data to the underlying bindable control
@method
@param serverData - The data provided by the server callback or from cached location. Should follow the format of the Telerik.Web.UI.FileExplorer.ServerData
@param pageIndex - The page
@returns 
*/
bindToServerData(serverData: any, pageIndex: number): void;
        /**
Clear any item selection in the file list
@method
@returns 
*/
clearSelection(): void;
        /**
Bind the already provided data(use set_dataSource(data)) to the underlying bindable control
@method
@returns 
*/
dataBind(): void;
        /**
Filter the list by the provided keyword using the filtering capacities of the underlying control
@method
@param keyWord - Filter keyword
@returns 
*/
filter(keyWord: string): void;
        /**
Focus the paging control
@method
@returns 
*/
focusPagerControl(): void;
        /**
Get an item by its name if such exists
@method
@param name - Name of the item
@returns 
*/
getItemByName(name: string): void;
        /**
Get an item by its path if such exists
@method
@param path - File path to the item
@returns 
*/
getItemByPath(path: string): void;
        /**
Gets the DOM element that wraps the file list view. The container may be different from the element in more complex views
@method
@returns Gets the DOM element that wraps the file list view
*/
get_container(): any;
        /**
Get the data source provided to the control
@method
@returns The data object provided to the control
*/
get_dataSource(): any;
        /**
Gets the DOM element of the underlying control.
@method
@returns The DOM element of the underlying control
*/
get_element(): HTMLElement;
        /**
gets the id of the underlying control
@method
@returns 
*/
get_id(): void;
        /**
Get the items displayed in the file list.
@method
@returns All items array
*/
get_items(): any;
        /**
Get the number of items in the file explorer view. This number may differ from the displayed items count when paging is allowed.
@method
@returns The number of items
*/
get_itemsCount(): number;
        /**
Gets the name of the corresponding view. The name should be unique in a collection of views as this is the identification field
@method
@returns the name of the corresponding view
*/
get_name(): string;
        /**
Get the number of pages in the control
@method
@returns The number of pages
*/
get_pageCount(): number;
        /**
Get the page size as maximum number of items per page
@method
@returns The page size
*/
get_pageIndex(): number;
        /**
Get the page current page index
@method
@returns The page index
*/
get_pageSize(): number;
        /**
Get the selected items from the file list
@method
@returns Selected items array
*/
get_selectedItems(): any;
        /**
Try to select a default item from the file list. Usually this is the first item, or none if list is empty
@method
@returns 
*/
selectDefaultItem(): void;
        /**
Selects an item by name
@method
@param name - The name of the item to select
@returns 
*/
selectItemByName(name: string): void;
        /**
This method should provide the fastest possible implementation for finding and selecting items by name.
@method
@param items - A list of item names that the control should select.
@returns 
*/
selectItemsByName_Fast(items: any): void;
        /**
Set the data needed for the data bindable control
@method
@param data - Sets the data for the underlying data bindable control
@returns 
*/
set_dataSource(data: any): void;
        /**
Set the current page to display
@method
@param value - New page index
@param suppressPageEvent - Suppress the page event in order to escape irrelevant callbacks or page event handling
@returns 
*/
set_pageIndex(value: number, suppressPageEvent: boolean): void;
        /**
Set the size of the page, i.e. the maximum number of items per page
@method
@param value - New page size
@returns 
*/
set_pageSize(value: number): void;
        /**
Attach event handler for showing context menu
*/
add_contextMenu(handler: Function): void;
        /**
Attach event handler for hiding context menu
*/
add_hideContextMenu(handler: Function): void;
        /**
Attach event handler for start item drag
*/
add_itemDragStart(handler: Function): void;
        /**
Attach event handler for raising while dragging event
*/
add_itemDragging(handler: Function): void;
        /**
Attach event handler for dropping an item
*/
add_itemDrop(handler: Function): void;
        /**
Attach event handler for finishing the item drop
*/
add_itemDropComplete(handler: Function): void;
        /**
Attach event handler for selecting an item event
*/
add_itemSelect(handler: Function): void;
        /**
Attach event handler for open item event
*/
add_open(handler: Function): void;
        /**
Attach event handler for paging event
*/
add_page(handler: Function): void;
        /**
Attach event handler for sort event
*/
add_sort(handler: Function): void;
        /**
Detach event handler for showing context menu
*/
remove_contextMenu(handler: Function): void;
        /**
Detach event handler for hiding context menu
*/
remove_hideContextMenu(handler: Function): void;
        /**
Detach event handler for start item drag
*/
remove_itemDragStart(handler: Function): void;
        /**
Detach event handler for raising while dragging event
*/
remove_itemDragging(handler: Function): void;
        /**
Detach event handler for dropping an item
*/
remove_itemDrop(handler: Function): void;
        /**
Detach event handler for finishing the item drop
*/
remove_itemDropComplete(handler: Function): void;
        /**
Detach event handler for selecting an item event
*/
remove_itemSelect(handler: Function): void;
        /**
Detach event handler for open item event
*/
remove_open(handler: Function): void;
        /**
Detach event handler for paging event
*/
remove_page(handler: Function): void;
        /**
Detach event handler for sort event
*/
remove_sort(handler: Function): void;
    }


}
declare module Telerik.Web.UI.ImageEditor {
    enum FlipDirection {
         None = 0,
         Vertical = 1,
         Horizontal = 2,
         Both = 3
    }
    enum Rotation {
         None = 0,
         Rotate90 = 1,
         Rotate180 = 2,
         Rotate270 = 3
    }
    enum ToolBarMode {
         Default = 0,
         Docked = 1
    }
    enum ToolBarPosition {
         Top = 0,
         Right = 1,
         Bottom = 2,
         Left = 3
    }
}
declare module Telerik.Web.UI.Spell {
    class HtmlElementTextSource  extends Sys.UI.Control {
        /**
Gets the HTML element of the TextSource object.
@method
@returns The HTML element of the TextSource object.
*/
get_element(): HTMLElement;
        /**
Gets the text of the (Telerik.Web.UI.Spell.HtmlElementTextSource) TextSource object.
@method
@returns The text of the TextSource object.
*/
get_text(): string;
        /**
Sets a text to the (Telerik.Web.UI.Spell.HtmlElementTextSource) TextSource object.
@method
@param text - The text to be set.
@returns 
*/
set_text(text: string): void;
    }


    class HtmlTextSourceBase  extends Sys.Component {
        /**

@method
@returns 
*/
get_checkTextAsHtml(): void;
        /**

@method
@returns 
*/
get_element(): HTMLElement;
        /**

@method
@returns 
*/
get_text(): string;
        /**

@method
@returns 
*/
set_checkTextAsHtml(): void;
        /**

@method
@returns 
*/
set_element(): void;
        /**

@method
@returns 
*/
set_text(): void;
    }


    class MultipleHtmlElementsSource  extends Sys.UI.Control {
        /**
Gets an array containg the HTML elements of the multiple TextSource objects.
@method
@returns An array containg the HTML elements of the multiple TextSource objects.
*/
get_elements(): any;
        /**
Gets the text of the (Telerik.Web.UI.Spell.MultipleHtmlElementsSource) multiple TextSource objects.
@method
@returns The text of the TextSource object.
*/
get_text(): string;
        /**
Sets a text to the (Telerik.Web.UI.Spell.MultipleHtmlElementsSource) multiple TextSource objects.
@method
@param text - The text to be set.
@returns 
*/
set_text(text: string): void;
    }


}
declare module Telerik.Web.UI.ImageEditor.Filters {
    class IPixelFilter   {
        /**
Executes the filter agains the provided image data
@method
@param pixelData - The image data to be processed
@returns 
*/
execute(pixelData: any): void;
        /**
Gets the name of the corresponding filter. This usually is the enough information to distinguish between filters
@method
@returns The name of the filter
*/
get_name(): string;
    }


}
declare module Telerik.Web.UI.Tile {
    class PeekAnimationManager   {
        /**

@method
@returns 
*/
get_animationStrategy(): void;
        /**

@method
@returns 
*/
get_contentElement(): void;
        /**

@method
@returns 
*/
get_peekElement(): void;
        /**

@method
@returns 
*/
hide(): void;
        /**

@method
@returns 
*/
set_animationStrategy(): void;
        /**

@method
@returns 
*/
set_animationType(): void;
        /**

@method
@returns 
*/
set_contentElement(): void;
        /**

@method
@returns 
*/
set_peekElement(): void;
        /**

@method
@returns 
*/
show(): void;
        /**

*/
add_hideAnimationEnd(handler: Function): void;
        /**

*/
add_hideAnimationStart(handler: Function): void;
        /**

*/
add_showAnimationEnd(handler: Function): void;
        /**

*/
add_showAnimationStart(handler: Function): void;
        /**

*/
remove_hideAnimationEnd(handler: Function): void;
        /**

*/
remove_hideAnimationStart(handler: Function): void;
        /**

*/
remove_showAnimationEnd(handler: Function): void;
        /**

*/
remove_showAnimationStart(handler: Function): void;
    }


}
declare module Telerik.Web.UI.TileList {
    class TileCollection   {
        /**
Returns the number of tiles in the collection.
@method
@returns 
*/
get_count(): any;
        /**
Returns the index in the collection of the tile passed as an argument.
@method
@param tile - 
@returns 
*/
indexOf(tile: Telerik.Web.UI.RadBaseTile): any;
    }


    class TileGroup   {
        /**
Returns the tiles in the given group.
@method
@returns 
*/
get_tiles(): any;
    }


    class TileGroupCollection   {
        /**
Returns group at the passed index in the collectoin returned by the get_groups RadTileList method.
@method
@param index - 
@returns 
*/
getItem(index: any): any;
        /**
Returns the number of tile groups in the RadTileList
@method
@returns 
*/
get_count(): any;
        /**
Returns the index of the group passed as a parameter. Returns -1 if there is no match.
@method
@param item - 
@returns 
*/
indexOf(item: any): any;
    }


}
declare module Telerik.Web.UI.DataSourceSettings {
    class WebServiceDataSourceSettings   {
        /**

@method
@returns 
*/
get_baseUrl(): void;
        /**

@method
@returns 
*/
set_baseUrl(): void;
    }


}
