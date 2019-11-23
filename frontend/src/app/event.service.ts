import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions1 = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public _setCourse:any;
  private _eventsUrl="http://localhost:44319/api/events";
  private _specialEventsUrl="https://localhost:44355/api/student/ListOfCourse/";
  private _mycourses="https://localhost:44319/api/course";
  private _updateCourseUrl = "https://localhost:44368/api/admin/";
  private _deleteCourseUrl = "https://localhost:44368/api/admin/";
  private _getUserListUrlAdminFetch="https://localhost:44368/api/admin/mentorsList/"
  private _getStudentListUrlAdminFetch="https://localhost:44368/api/admin/usersList/"
  private _updateMentorUrl = "https://localhost:44372/api/mentor/mentorProfile/";
  private _searchCourseUrl="https://localhost:44319/api/course/search/"
  private _mentorProfileUrl = "https://localhost:44372/api/mentor/mentorProfile/";
  private _studentProfileUrl = "https://localhost:44355/api/student/studentProfile/";
  private _updateStudentUrl = "https://localhost:44355/api/student/studentProfile/";
  private _coursesUrl = "https://localhost:44372/api/mentor/ListOfCourseMentor/";
  private _getMentorListUrl = "https://localhost:44319/api/enrolledcourse";
  private _specialEventsUrlAddCourse = "https://localhost:44355/api/student";
  private _updateEnrolledCourseStudentUrl = "https://localhost:44355/api/student/ChangeEnrolledCourseStatus/";
  private _updateEnrolledCourseMentorUrl = "https://localhost:44372/api/mentor/ChangeEnrolledCourseStatus/";
 

  constructor(private http:HttpClient) { }
  getEvents(){
    return this.http.get<any>(this._eventsUrl,httpOptions1)
  }
  getSpecialEvents(StudentEmail) {
    return this.http.get<any>(this._specialEventsUrl+StudentEmail,httpOptions1)
  }
  getCourses(){
    return this.http.get<any>(this._mycourses,httpOptions1) 
  }
  editCourses(editField,course) {
    return this.http.put<any>(this._updateCourseUrl+editField,course,httpOptions1)
  }
  deleteCourse(deleteField){
    return this.http.delete<any>(this._deleteCourseUrl+deleteField,httpOptions1)
  }
  setCourse(course){
    this._setCourse = course;
    
  }
  getCourses1(MentorEmail) {
    return this.http.get<any>(this._coursesUrl+MentorEmail,httpOptions1)
  }
  getCourse(){
    return (this._setCourse);
  }
  getusersListAdmin() {
    return this.http.get<any>(this._getUserListUrlAdminFetch,httpOptions1)
  }

  getstudentListAdmin() {
    return this.http.get<any>(this._getStudentListUrlAdminFetch,httpOptions1)
  }
  searchResult(searchField) {
    
    return this.http.get<any>(this._searchCourseUrl+searchField,httpOptions1);
  }
  
  editMentorDetails(mentorId,mentorUpdatedData) {
    return this.http.put<any>(this._updateMentorUrl+mentorId,mentorUpdatedData,httpOptions1)
  }
  getMentorDetails(mentorEmail){
    return this.http.get<any>(this._mentorProfileUrl+mentorEmail,httpOptions1)
  }

  editStudentDetails(studentId,studentUpdatedData) {
    return this.http.put<any>(this._updateStudentUrl+studentId,studentUpdatedData,httpOptions1)
  }
  getStudentDetails(studentEmail){
    return this.http.get<any>(this._studentProfileUrl+studentEmail,httpOptions1)
  }
  
  enrollCourse(user) {
    return this.http.post<any>(this._specialEventsUrlAddCourse,user,httpOptions1)
  }
  getMentorListDetails() {
    return this.http.get<any>(this._getMentorListUrl,httpOptions1)
  }
  updateEnrolledCourseStudent(updateCourseId,updateCourseUserName,course) {
    return this.http.put<any>(this._updateEnrolledCourseStudentUrl+updateCourseId+'/'+updateCourseUserName,course,httpOptions1)
  }
  updateEnrolledCourseMentor(updateCourseId,updateCourseUserName,course) {
    return this.http.put<any>(this._updateEnrolledCourseMentorUrl+updateCourseId+'/'+updateCourseUserName,course,httpOptions1)
  }

}

