package com.heidichen.securitydemo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.heidichen.securitydemo.models.Meeting;
import com.heidichen.securitydemo.repositories.MeetingRepository;

@Service
public class MeetingService {
	// === CRUD ===
		@Autowired
		private MeetingRepository MeetRep;
		
		// READ ALL
		public List<Meeting> allTasks(){
			return MeetRep.findAll();
		}
		
		// CREATE
		public Meeting createMeeting(Meeting M) {
			return MeetRep.save(M);
		}
		
		// READ ONE
		public Meeting findMeeting(Long id) {
			
			Optional<Meeting> maybeMeeting = MeetRep.findById(id);
			if(maybeMeeting.isPresent()) {
				return maybeMeeting.get();
			}else {
				return null;
			}
		}
		
		// UPDATE 
		public Meeting updateMeeting(Meeting M) {
			return MeetRep.save(M);
		}
		
		// DELETE
		public void deleteMeeting(Long id) {
			MeetRep.deleteById(id);
		}
}
