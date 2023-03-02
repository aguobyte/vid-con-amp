define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Conducive Exercise',  //Will be used in the user feedback 
				nameForLogging : 'Conducive Exercise', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'images/body_measure.jpg'}, 
					{image : 'images/dumbells1.png'}, 
					{image : 'images/exercise_ball.jpg'}, 
					{image : 'images/kettlebell.jpg'}, 
					{image : 'images/protein_shake.jpg'}, 
					{image : 'images/treadmill.jpg'}, 
					{image : 'images/weights.jpg'}, 
					{image : 'images/yoga_mat.webp'}]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'images/armchair.jpg'}, 
					{image : 'images/bathtub.jpg'}, 
					{image : 'bed.jpg'}, 
					{image : 'couch.jpg'}, 
					{image : 'muffin_tin.webp'}, 
					{image : 'remote_control.webp'}, 
					{image : 'tv.png'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://github.com/aguobyte/vid-con-amp'
		}
	});
});


