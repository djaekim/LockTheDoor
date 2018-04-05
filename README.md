
<h1> Follow Up Question </h1>

* To suppport many users I would have to improve the quality of the code so that it is robust and easily scalable.
* Similarly, I would have to invest in test automation and quality assurance early on so that the software is maintainble and developed in a timely and economic manner.

<h1> My Reflection </h1>

* I have never used React Native let alone React before so this is my first attempt at building a frontend side of mobile app in 3 days.
* I am not proud of this spaghetti code. I had to manually render between 2 pages using conditional rendering instead of importing navigator because I kept running to errors.
* After doing this challenge, I realized how important mock API is for concurrent effort of building an app from front-end and back-end. One method is JEST and other is Axio, but I kept running into bugs again so I ended storing my API in the state, which is not suggested.
* At first, I tried to use React Native GeoLocation in order to obtain latitude and longitude. However, I realized that in the context of this question, it doesn't make sense for me to use real coordinates only then to mock the progressively tracking user location. Thus, I didn't end up using React Native Geolocation.
* I had another idea of maybe using wifi disconnection to determine when the user must be notified. However, my concern was for those who doesn't have wifi at home.
* Also, what if the person travels in and out of notification threshold because he/she needs to run some errands in the nearby area? In the context of this question, he/she will be notified at 200 (metre) away from home. On the contrary, there is no harm of being too careful.
* Another flaw with my app was that it didn't have a push notification system. Namely, in a real settings, the app will not work when iphone goes to sleep mode.
* Lastly, I don't think this code is scalable in any way. It's very limited to this scope because I didn't have a real way of mocking API.
* Learning react native was fun. I think I would need to spend more time trying to wrap my head around some concepts and best practices.
* This question also gave me an idea of where I should focus for frontend development. 


<h1> Final Remark </h1>

* It was a positive experience and I still have a lot to learn.
