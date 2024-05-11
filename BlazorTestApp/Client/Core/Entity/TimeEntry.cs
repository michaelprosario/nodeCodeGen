/*

who, what, where, when, why, how

create a c# entity class for a time entry
- I should be able to associate the time entry with a project id
- I should be able to associate the time entry with a user
- I should be able to associate the time entry with a date
- I should be able to associate the time entry with a start time
- I should be able to associate the time entry with an end time
- I should be able to associate the time entry with notes
- time entry should have a guid id
*/
public class TimeEntry
{
    public string Id { get; set; }
    public string ProjectId { get; set; }
    public string UserId { get; set; }
    public DateTime Date { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public string Notes { get; set; }
}
