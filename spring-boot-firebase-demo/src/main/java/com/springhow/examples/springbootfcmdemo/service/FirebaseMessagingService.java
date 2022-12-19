package com.springhow.examples.springbootfcmdemo.service;

import com.google.firebase.messaging.*;
import com.springhow.examples.springbootfcmdemo.pojo.FCMToken;
import com.springhow.examples.springbootfcmdemo.pojo.Stock;
import com.springhow.examples.springbootfcmdemo.repository.FCMRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class FirebaseMessagingService {
	@Autowired
	FCMRepository fcm;
    private final FirebaseMessaging firebaseMessaging;

    public FirebaseMessagingService(FirebaseMessaging firebaseMessaging) {
        this.firebaseMessaging = firebaseMessaging;
    }


    public String sendNotification(Stock stock) throws FirebaseMessagingException {
    	List<FCMToken> ft=fcm.findByStockname(stock.getStockName());
        Notification notification = Notification
                .builder()
                .setTitle("Stock update")
                .setBody(stock.getStockName()+" has been updated to "+stock.getPrice())
                .build();
        for(int i=0;i<ft.size();i++)
        {
        	System.out.println(ft.get(i).getToken());
            Message message = Message
                    .builder()
                    .setToken(ft.get(i).getToken())
                    .setNotification(notification)
                    .build();
            firebaseMessaging.send(message);
        }
        

        return "Successfully send the notifications";
    }

}
