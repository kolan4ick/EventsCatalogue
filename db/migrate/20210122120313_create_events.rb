class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.data :end_date
      t.data :begin_date
      t.string :body
      t.string :place

      t.timestamps
    end
  end
end
