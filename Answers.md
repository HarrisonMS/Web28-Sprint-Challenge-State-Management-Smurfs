1. What problem does the context API help solve? prop drilling

2. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? Actions describe the different 'verbs' your application can do. Reducers update the store in a certain way that depends on the type of action made. Store is akin to a global state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other? Application state describes the condition of your application as a whole, whereas component state is more specific to one portion of your application. You would most likely want to use component state for forms and application state for storing something like isLoading.

4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators? redux-thunk is a middleware, allowing us to intercept and perform asynchronous tasks with our action-creators.

5. What is your favorite state management system you've learned and this sprint? Please explain why! I'm enjoying Redux. It was quite foreign in the beginning but I appreciate it's scalability and the fact that most React dev roles require some experience with Redux.
