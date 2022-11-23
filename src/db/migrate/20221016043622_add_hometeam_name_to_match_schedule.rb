class AddHometeamNameToMatchSchedule < ActiveRecord::Migration[6.1]
  def change
    
    add_column :match_schedules, :awayteam_name, :string
    add_column :match_schedules, :first_date, :string
    add_column :match_schedules, :last_date, :string
    add_column :match_schedules, :group, :string
    add_column :match_schedules, :competition_name, :string
    add_column :match_schedules, :stage, :string
  end
end
