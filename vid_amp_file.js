define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Conducive Exercise',  //Will be used in the user feedback 
				nameForLogging : 'Conducive Exercise', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [ 
					{image : 'exercise_ball.jpg'}, 
					{image : 'kettlebell.jpg'}, 
					{image : 'protein_shake.jpg'}, 
					{image : 'treadmill.jpg'}, 
					{image : 'weights.jpg'},
					{image : 'yoga_mat.jpg'},
					{image : 'dumbells1.jpg'}]

			}, 
			{
				nameForFeedback : 'Non-Conducive Exercise',  //Will be used in the user feedback 
				nameForLogging : 'Non-Conducive Exercise', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'armchair.jpg'}, 
					{image : 'bathtub.jpg'}, 
					{image : 'bed.jpg'}, 
					{image : 'couch.jpg'},
					{image : 'muffin_tin.jpg'},
					{image : 'tv.jpg'},
					{image : 'remote_control.jpg'}]
			}, 
			{
				nameForFeedback : 'Conducive Food',  //Will be used in the user feedback 
				nameForLogging : 'Conducive Food', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'apple.jpg'}, 
					{image : 'berries.jpg'}, 
					{image : 'Broccoli.jpg'}, 
					{image : 'carrots.jpg'},
					{image : 'eggs.jpg'},
					{image : 'nuts.jpg'},
					{image : 'tomato.jpg'}]
			},
			{
				nameForFeedback : 'Non-Conducive Food',  //Will be used in the user feedback 
				nameForLogging : 'Non-Conducive Food', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'waffels.jpg'}, 
					{image : 'pizza.jpg'}, 
					{image : 'donuts.jpg'}, 
					{image : 'brownie.jpg'},
					{image : 'hamburger.jpg'},
					{image : 'ice_cream.jpg'},
					{image : 'chocolate.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://aguobyte.github.io/vid-con-amp/images/'
		}
	});
});
