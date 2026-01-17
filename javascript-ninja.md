Understanding the browser

Events—A huge majority of JavaScript applications are event-driven applica-
tions, meaning that most of the code is executed in the context of a response
to a particular event. Examples of events include network events, timers, and
user-generated events such as clicks, mouse moves, keyboard presses, and so
on. 

Browser API—To help us interact with the world, the browser offers an API that
allows us to access information about devices, store data locally, or communicate
with remote servers.

----- Chapter one
questions:
Does the browser always build the page exactly according
to the given HTML?
How many events can a web application handle at once?
Why must browsers use an event queue to process events?

Because client-side web applications are Graphical User Interface (GUI) applications,
their lifecycle follows similar phases as other GUI applications (think standard desktop
applications or mobile applications) and is carried out in the following two steps:
1 Page building—Set up the user interface.
2 Event handling—Enter a loop F waiting for events to occur G, and start invok-
ing event handlers.

EXECUTING JAVASCRIPT CODE IN THE PAGE-BUILDING PHASE
When the browser reaches the script node in the page-building phase, it pauses the
DOM construction based on HTML code and starts executing JavaScript code instead.