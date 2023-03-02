define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Conducive Exercise',  //Will be used in the user feedback 
				nameForLogging : 'Conducive Exercise', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'body_measure.jpg'},
				    {image : 'protein_shake.jpg'},
				    {image : 'weights.jpg'}]

			}, 
			{
				nameForFeedback : 'Non-Conducive Exercise',  //Will be used in the user feedback 
				nameForLogging : 'Non-Conducive Exercise', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'armchair.jpg'},
				    {image : 'bathtub.jpg'},
				    {image : 'bed.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'exercise_ball.jpg'}, {image : 'kettlebell.jpg'}, {image : 'treadmill.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://aguobyte.github.io/vid-con-amp/images'
		}
	});
});
