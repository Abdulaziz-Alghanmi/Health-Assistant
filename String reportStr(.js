String reportStr( int normal, int high, int low, String type, String lastCondition) {
    
    if (low == 0 && high == 0) {
      return 'Your readings have been stable and your health are good.\nEat healthy food and exercise every day for a healthy life.';
    } else if (normal == 0 && low == 0) {
      return 'All readings are High you should see the doctor';
    } else if (normal == 0 && high == 0) {
      return 'All readings are low you should see the doctor';
   
   
   
    } else if (high > normal || high > low){
    
    if (lastCondition == "high") {
	
        if(type == "Blood sugar"){
        return 'Your ' + type +  ' level are high, if you have diabetes'+
        ' the quickest way to reduce it is to take fast-acting insulin. Exercising is another fast, effective way to lower blood sugar. '
        +' Change your eating diet way to a healthy diet, eating rich in natural nutrients and low in fat and calories. A key component of this diet is eating fruits,'+
        ' vegetables and whole grains.\n'+
        + 'Monitor your blood sugar level. Depending on your treatment plan, you can monitor and write down your blood sugar level several times a week or daily.'
        +' Careful monitoring is the only way to ensure that your blood sugar level is maintained in the target range.'
        + '\nIf you aren’t sure what to do, call your doctor to get instructions on administering a dose of insulin, '
        +'and for advice about whether to go to the emergency room.';
    
    } else if (type == "Temperature"){
        return 'Your ' + type + ' readings are high. Your body temperature start rising in the last couple of days. It could be caused by fever' + 
        'you need to get lots of rest and drink plenty of fluids (water is best) to avoid dehydration' +
        ' for your health you better visit your health care provider or call the emergency 998.\n';
    
    } else if (type == "Heart beat"){
        return 'Your ' + type + ' readings are high. Your hearbeat rate are higher,'
+'An increased heart rate isn\'t always a problem. It\'s normal for your heart rate to increase during exercise or in response to stress.\n'
        + ' If you have a history of heart disease and have palpitations that occur frequently or worsen, talk to your health care provider.'+
        ' You may need heart-monitoring tests to see if the palpitations are caused by a more serious heart problem. \n';
    
    }else if (type == "pressure"){
        return 'Your Blood ' + type + ' readings are high. Adopting healthy lifestyle habits such as not smoking, exercising and eating a healthy diet can help prevent and treat high blood pressure. Decreasing salt in your diet, '+
        'losing weight if necessary, stopping smoking, cutting down on alcohol use, and regular exercise. because high blood pressure is a long-lasting medical condition that often has little or no symptoms, remembering to take your medications can be a challenge.'+
        ' Combination medicines, long-acting or once-a-day medications, may be used to decrease the burden of taking numerous medications and help ensure medications regularly. Once started, the medication should be used until your doctor tells you to stop. ';
    }

    } else if (lastCondition == "normal") {
        if(type = "Blood sugar"){
            return 'Your '+ type +' records have been unstable. Most of the records indicate that your '+type+' level were high '
            +'But recent readings indicate that you start to recover and your blood sugar levels are getting normal.'
            +'If you feeling very thirst, unusually tired or your vision is blurry you should call or visit your health care provider.';
        
        }else if(type = "Temperature"){
            return 'Your '+ type +' readings have been unstable. Most of the records indicate that your '+type+' readings were high '
            + 'But recent readings indicate that your body temperature are getting back to normal.'
            +'\n If your body temperature still high you should call your health care provider.';
        }else if(type = "Heart beat"){
            return 'Your '+ type +' readings have been unstable. Most of the records indicate that your '+type+' rate were high '
            + 'But recent readings indicate that your ' + type +' rate are regular.'
            + '\n if you feel shortness in breath, Fatigue, or Rapid heartbeat or palpitations you call or visit your health care provider.';

        }else if(type = "pressure"){
          return  'Your '+ type +' readings have been unstable. Most of the records indicate that your '+type+' were high '
            + 'But recent readings indicate that your ' + type +' are regular.'
            + '\n If you still feel a headache or shortness in breath you should call your health care provider.';
          
        }
    } else if (lastCondition == "low") {
	
        if(type == "Blood sugar"){
        return 'Your last ' + type +  ' readings have been unstable. Most of the records indicate that your '+type+' readings were low. Your blood sugar level are low, '
        +' Treat low blood sugar right away. You can quickly raise your blood sugar level by eating a source of simple sugar, such as glucose tablets, candy or fruit juice.'
        + 'Monitor your blood sugar level. Depending on your treatment plan, you can monitor and write down your blood sugar level several times a week or daily.'
        +' Careful monitoring is the only way to ensure that your blood sugar level is maintained in the target range.'
        +'\n You must see your doctor because your recent records were unstable between high and low.';
    
    } else if (type == "Temperature"){
        return 'Your ' + type + ' readings are low. Shivering is likely to be the first symptom you\'ll notice when your temperature starts to drop due to your body\'s automatic '+
        ' resistance to low temperature - an attempt to warm itself.\n '+
        'If you suspect hypothermia, you should contact the emergency department';
    
    } else if (type == "Heart beat"){
        return 'Your ' + type + ' rate are low. The heart rate is too slow and the heart cannot pump enough oxygen-rich blood to the body\'s organs. If this happens, you may become dizzy and tired or very weak and short of breath.'
        +' Sometimes low haertbeat does not cause symptoms or complications.'+
        '\nIf you faint, have difficulty breathing or have chest pain for more than a few minutes call your health care provider';
    
    }else if (type == "pressure"){
        return 'Your blood ' + type + ' readings are low.'
        +'If you get symptoms when you stand up or suddenly change position, you may have postural hypotension.'
        +' Medicine to increase blood pressure is rarely needed because simple lifestyle measures'+
        ' or treating the underlying cause is usually effective. '
        +'\nIf you have symptoms of low blood pressure or shock, call your health care provider.';
    }



} else if (low > normal || low > high){
    
    if (lastCondition == "high") {
	
        if(type == "Blood sugar"){
        return 'Your ' + type +  ' level are high, if you have diabetes'+
        ' the quickest way to reduce it is to take fast-acting insulin. Exercising is another fast, effective way to lower blood sugar. '
        +' Change your eating diet way to a healthy diet, eating rich in natural nutrients and low in fat and calories. A key component of this diet is eating fruits,'+
        ' vegetables and whole grains.\n'+
        + 'Monitor your blood sugar level. Depending on your treatment plan, you can monitor and write down your blood sugar level several times a week or daily.'
        +' Careful monitoring is the only way to ensure that your blood sugar level is maintained in the target range.'
        + '\nIf you aren’t sure what to do, call your doctor to get instructions on administering a dose of insulin, '
        +'and for advice about whether to go to the emergency room.';
    
    } else if (type == "Temperature"){
        return 'Your ' + type + ' readings are high. Your body temperature start rising in the last couple of days. It could be caused by fever' + 
        'you need to get lots of rest and drink plenty of fluids (water is best) to avoid dehydration' +
        ' for your health you better visit your health care provider or call the emergency 998.\n';
    
    } else if (type == "Heart beat"){
        return 'Your ' + type + ' readings are high. Your hearbeat rate are higher,'
+'An increased heart rate isn\'t always a problem. It\'s normal for your heart rate to increase during exercise or in response to stress.\n'
        + ' If you have a history of heart disease and have palpitations that occur frequently or worsen, talk to your health care provider.'+
        ' You may need heart-monitoring tests to see if the palpitations are caused by a more serious heart problem. \n';
    
    }else if (type == "pressure"){
        return 'Your Blood ' + type + ' readings are high. Adopting healthy lifestyle habits such as not smoking, exercising and eating a healthy diet can help prevent and treat high blood pressure. Decreasing salt in your diet, '+
        'losing weight if necessary, stopping smoking, cutting down on alcohol use, and regular exercise. because high blood pressure is a long-lasting medical condition that often has little or no symptoms, remembering to take your medications can be a challenge.'+
        ' Combination medicines, long-acting or once-a-day medications, may be used to decrease the burden of taking numerous medications and help ensure medications regularly. Once started, the medication should be used until your doctor tells you to stop. ';
    }


      }else if (lastCondition == "low") {
	
        if(type == "Blood sugar"){
        return 'Your last ' + type +  ' level are low, Treat low blood sugar right away. You can quickly raise your blood sugar level by eating a source of simple sugar, such as glucose tablets, candy or fruit juice.'
        + 'Monitor your blood sugar level. Depending on your treatment plan, you can monitor and write down your blood sugar level several times a week or daily.'
        +' Careful monitoring is the only way to ensure that your blood sugar level is maintained in the target range.'
        +'\n You should see your doctor if you develop symptoms of hypoglycemia several times a week or more. You may need to change your medication doses or schedules, or adjust your diabetes treatment regimen.';
    
    } else if (type == "Temperature"){
        return 'Your ' + type + ' readings are low. Shivering is likely to be the first symptom you\'ll notice when your temperature starts to drop due to your body\'s automatic '+
        ' resistance to low temperature - an attempt to warm itself.\n '+
        'If you suspect hypothermia, you should contact the emergency department';
    
    } else if (type == "Heart beat"){
        return 'Your ' + type + ' rate are low. The heart rate is too slow and the heart cannot pump enough oxygen-rich blood to the body\'s organs. If this happens, you may become dizzy and tired or very weak and short of breath.'
        +' Sometimes low haertbeat does not cause symptoms or complications.'+
        '\nIf you faint, have difficulty breathing or have chest pain for more than a few minutes call your health care provider';
    
    }else if (type == "pressure"){
        return 'Your blood ' + type + ' readings are low.'
        +'If you get symptoms when you stand up or suddenly change position, you may have postural hypotension.'
        +' Medicine to increase blood pressure is rarely needed because simple lifestyle measures'+
        ' or treating the underlying cause is usually effective. '
        +'\nIf you have symptoms of low blood pressure or shock, call your health care provider.';
    }

    }else if (lastCondition == "normal") {
        if(type = "Blood sugar"){
            return 'Your '+ type +' readings have been unstable. Most of the records indicate that your '+type+' level were low '
            +'But recent readings indicate that you start to recover and your blood sugar levels are getting normal.'
            +'If you feel dizzy, shaking or sweeting you should call or visit your health care provider.';
        
        }else if(type = "Temperature"){
            return 'Your '+ type +' readings have been unstable. Most of the records indicate that your '+type+' readings were low '
            + 'But recent readings indicate that your body temperature are getting back to normal.'
            +'\n If you feel shivering, sleepy or Loss of consciousness you should call your health care provider.';
        }else if(type = "Heart beat"){
            return 'Your '+ type +' readings have been unstable. Most of the records indicate that your '+type+' rate were low '
            + 'But recent readings indicate that your ' + type +' rate are regular.'
            + '\n if you feel shortness of breath, Fatigue, or Easily tired during physical activity you call or visit your health care provider.';

        }else if(type = "pressure"){
          return  'Your '+ type +' readings have been unstable. Most of the records indicate that your '+type+' were low '
            + 'But recent readings indicate that your ' + type +' are regular.'
            + '\n If you feel that your vision are blurred or nausea you should call your health care provider.';
          
        }
    }



} else if (normal > high || normal > low){
    
    if (lastCondition == "high") {
	
        if(type == "Blood sugar"){
        return 'Your ' + type +  ' level are high, if you have diabetes'+
        ' the quickest way to reduce it is to take fast-acting insulin. Exercising is another fast, effective way to lower blood sugar. '
        +' Change your eating diet way to a healthy diet, eating rich in natural nutrients and low in fat and calories. A key component of this diet is eating fruits,'+
        ' vegetables and whole grains.\n'+
        + 'Monitor your blood sugar level. Depending on your treatment plan, you can monitor and write down your blood sugar level several times a week or daily.'
        +' Careful monitoring is the only way to ensure that your blood sugar level is maintained in the target range.'
        + '\nIf you aren’t sure what to do, call your doctor to get instructions on administering a dose of insulin, '
        +'and for advice about whether to go to the emergency room.';
    
    } else if (type == "Temperature"){
        return 'Your ' + type + ' readings are high. Your body temperature start rising in the last couple of days. It could be caused by fever' + 
        'you need to get lots of rest and drink plenty of fluids (water is best) to avoid dehydration' +
        ' for your health you better visit your health care provider or call the emergency 998.\n';
    
    } else if (type == "Heart beat"){
        return 'Your ' + type + ' readings are high. Your hearbeat rate are higher,'
 +'An increased heart rate isn\'t always a problem. It\'s normal for your heart rate to increase during exercise or in response to stress.\n'
        + ' If you have a history of heart disease and have palpitations that occur frequently or worsen, talk to your health care provider.'+
        ' You may need heart-monitoring tests to see if the palpitations are caused by a more serious heart problem. \n';
    
    }else if (type == "pressure"){
        return 'Your Blood ' + type + ' readings are high. Adopting healthy lifestyle habits such as not smoking, exercising and eating a healthy diet can help prevent and treat high blood pressure. Decreasing salt in your diet, '+
        'losing weight if necessary, stopping smoking, cutting down on alcohol use, and regular exercise. because high blood pressure is a long-lasting medical condition that often has little or no symptoms, remembering to take your medications can be a challenge.'+
        ' Combination medicines, long-acting or once-a-day medications, may be used to decrease the burden of taking numerous medications and help ensure medications regularly. Once started, the medication should be used until your doctor tells you to stop. ';
    
    }
     
    } else if (lastCondition == "low") {
	
        if(type == "Blood sugar"){
        return 'Your ' + type +  ' level are low, Treat low blood sugar right away. You can quickly raise your blood sugar level by eating a source of simple sugar, such as glucose tablets, candy or fruit juice.'
        + 'Monitor your blood sugar level. Depending on your treatment plan, you can monitor and write down your blood sugar level several times a week or daily.'
        +' Careful monitoring is the only way to ensure that your blood sugar level is maintained in the target range.'
        +'\n You should see your doctor if you develop symptoms of hypoglycemia several times a week or more. You may need to change your medication doses or schedules, or adjust your diabetes treatment regimen.';
    
    } else if (type == "Temperature"){
        return 'Your ' + type + ' readings are low. Shivering is likely to be the first symptom you\'ll notice when your temperature starts to drop due to your body\'s automatic '+
        ' resistance to low temperature - an attempt to warm itself.\n '+
        'If you suspect hypothermia, you should contact the emergency department';
    
    } else if (type == "Heart beat"){
        return 'Your ' + type + ' rate are low. The heart rate is too slow and the heart cannot pump enough oxygen-rich blood to the body\'s organs. If this happens, you may become dizzy and tired or very weak and short of breath.'
        +' Sometimes low haertbeat does not cause symptoms or complications.'+
        '\nIf you faint, have difficulty breathing or have chest pain for more than a few minutes call your health care provider';
    
    }else if (type == "pressure"){
        return 'Your blood ' + type + ' readings are low.'
        +'If you get symptoms when you stand up or suddenly change position, you may have postural hypotension.'
        +' Medicine to increase blood pressure is rarely needed because simple lifestyle measures'+
        ' or treating the underlying cause is usually effective. '
        +'\nIf you have symptoms of low blood pressure or shock, call or visit your health care provider.';
    }

        }else if (lastCondition == "normal") {
    return 'Your readings have been stable and your health are good.\nEat healthy food and exercise every day for a healthy life.'           
        }
}
}
}
