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
					{image : 'dumbells1.png'}, 
					{image : 'exercise_ball.jpg'}, 
					{image : 'kettlebell.jpg'}, 
					{image : 'protein_shake.jpg'}, 
					{image : 'treadmill.jpg'}, 
					{image : 'weights.jpg'}, 
					{image : 'yoga_mat.webp'}]

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
			image : 'https://github.com/aguobyte/vid-con-amp/images'
		}
	});
});


