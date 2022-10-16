class CreateMatchSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :match_schedules do |t|

      t.timestamps
    end
  end
end
